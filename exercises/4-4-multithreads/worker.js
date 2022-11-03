const { parentPort, workerData} = require('worker_threads');

function compute( [a, b] ) {
    //console.log(a, b);
    let result = 0;
    for (let i = a; i < b; i++) {
        if (i%3==0) {
            result+=1
        }
    };
    return result;
};

parentPort.postMessage(compute(workerData));