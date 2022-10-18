const eventEmmiter = require('events');

const myEmmiter = new eventEmmiter();

let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let operation = process.argv[4]; 
//console.log(a, b, operation)

myEmmiter.on("+", (a, b) => {
    myEmmiter.emit('result', a + b)
});
myEmmiter.on("-", (a, b) => {
    myEmmiter.emit('result', a - b)
});

myEmmiter.on("*", (a, b) => {
    myEmmiter.emit('result', a * b)
});
myEmmiter.on("/", (a, b) => {
    if (b==0){
    throw 'На ноль делить нельзя'
} else myEmmiter.emit('result', a / b)
});

myEmmiter.on("result", (result) => console.log(`Ваш результат равен ${result}`));
myEmmiter.emit(operation, a, b)