function toDivide(a, b) {
    if (b != 0) {
        return a/b;
    } else {
        console.log("Не делите на ноль, кто знает, чем это может закончиться.")
    }
};

export { toDivide as calculate };