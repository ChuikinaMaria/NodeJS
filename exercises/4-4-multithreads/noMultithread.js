const perf_hooks = require('perf_hooks');

compute = perf_hooks.performance.timerify(compute);

const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
    const entry = items.getEntries().pop();
    console.log(`${entry.name}:  ${entry.duration}`);
    observer.disconnect();
});

performanceObserver.observe({entryTypes: ['function']});

function compute() {

    let result = 0;
    for (let i = 0; i <= 300_000; i++) {
        if (i%3==0) {
            result+=1
        }
    };
    console.log(result)
};
compute();