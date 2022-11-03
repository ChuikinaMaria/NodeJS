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



function computeWithoutThread(a=0, b=300_000) {
    let result = 0;
    for (let i = a; i <= b; i++) {
        if (i%3==0) {
            result+=1
        }
    };
    //console.log(`computeWithoutThreads: ${result}`)
};
computeWithoutThread();

const compute = (a, b) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: [a, b] 
        });

        worker.on('message', (msg) => {
            resolve(msg);
        });

        worker.on('error', (err) => {
            reject(err);
        })
    })
}


 
async function computeInThreads() {
    try{
        const result = await Promise.all([
            compute(0, 300_000/4),
            compute(300_000/4, 2*300_000/4),
            compute(2*300_000/4, 3*300_000/4),
            compute(3*300_000/4, 300_001),

        ])
        //console.log(`computeInThreads: ${result.reduce((a, b) => a+b)}`);

    } catch(e) {
        console.error(e.message);
    }
};
computeInThreads();