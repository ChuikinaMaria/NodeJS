const perf_hooks = require('perf_hooks');

compute = perf_hooks.performance.timerify(compute);

const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
    const entry = items.getEntries().pop();
    console.log(`${entry.name}:  ${entry.duration}`);
    observer.disconnect();
});

performanceObserver.observe({entryTypes: ['function']});

function compute() {
    let arr = [];
    for (let i =0; i<=300_000; i++) {
        arr.push(i);
    };
    let result = arr.map((x) => 
        (Math.random() > 0.5 ? x*2 : x/3)
    );

    console.log(result.length)
};
compute();