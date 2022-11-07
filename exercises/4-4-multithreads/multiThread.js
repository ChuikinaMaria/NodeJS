const perf_hooks = require('perf_hooks');
const { Worker, workerData } = require('worker_threads');

computeWithoutThread = perf_hooks.performance.timerify(computeWithoutThread);
computeInThreads = perf_hooks.performance.timerify(computeInThreads);

const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
    items.getEntries().forEach((entry) => {
        console.log(`${entry.name}:  ${entry.duration}`);
    });
    //observer.disconnect();
});

performanceObserver.observe({entryTypes: ['function']});

const generateArray = (a=0, b=300_000) => {
    let arr = [];
    for (let i=a; i<=b; i++) {
        arr.push(i)
        
    };
    return arr
};

function computeWithoutThread(array) {
    let arr = array.map((x) => 
        (Math.random() > 0.5 ? x*2 : x/3)
    );
    let sum = arr.reduce((a, b) => a+b);
    console.log(arr.length, sum);
};
computeWithoutThread(generateArray());


const compute = (array) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: array 
        });

        worker.on('message', (msg) => {
            resolve(msg);
        });

        worker.on('error', (err) => {
            reject(err);
        })
    })
};

 
async function computeInThreads() {
    try{
        const getFromThreads = await Promise.all([
            compute(generateArray(0, 300_000/4-1)),
            compute(generateArray(300_000/4, 2*300_000/4-1)),
            compute(generateArray(2*300_000/4, 3*300_000/4-1)),
            compute(generateArray(3*300_000/4, 300_000))

        ]);
        
        let result = getFromThreads.reduce((a, b) => a.concat(b));
        let sum = result.reduce((a, b) => a+b);
        console.log(result.length, sum);

    } catch(e) {
        console.error(e.message);
    }
};
computeInThreads();