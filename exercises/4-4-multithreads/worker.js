const { parentPort, workerData} = require('worker_threads');

function compute(array) {
    return array.map((x) => 
        (Math.random() > 0.5 ? x*2 : x/3)
    )
};

parentPort.postMessage(compute(workerData));