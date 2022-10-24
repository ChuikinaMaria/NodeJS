import { resolve } from 'path';
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { rejects } from 'assert';

const rl = readline.createInterface({ input, output });

// let msg = "введите пример в формате а*b, где а и b - числа, * - значок математической операции."
// console.log(msg)
// //import defaultExport from './add.mjs'
// let a = process.argv[2];
// let operation = process.argv[3];
// let b = process.argv[4];
// console.log(operation)

const mainQuestion = 'Введите выражение в формате a * b, где a и b - числа, а * - операция  \n'

const firstQuestion = 'Введите первое число  ';
const secondQuestion = 'Введите второе число  ';
const thirdQuestion = 'Введите символ операции:\n'+
'+ для сложения,\n'+
'- для вычитания,\n'+
'* для умножения,\n'+
'/ для деления.\n';
let dataFromUser = [];
let o = ''

function askQuestion(question) {  // как сделать три вопроса один за другим, первый - второй - третий
    rl.setPrompt(question);
    rl.prompt();
    rl.once('line', (x) => {
    dataFromUser = x.split(' ');  // как разделить ввод на число - операцию - число если например ввели без пробела
    console.log(`вы хотите вычислить ${x}`)
    console.log(dataFromUser)
    let operation = dataFromUser[1];
    console.log(operation)
    
    switch(operation) {
        case ('+'):
            o = 'сложение';
            console.log(`Ваша операция - ${o}`)
            // const toAdd = await import("./add.mjs");
            // let result = toAdd(a,b);
            break
        case ('-'):
            o = 'вычитание'
            console.log(`Ваша операция - ${o}`)
        case ('*'):
            o = 'умножение'
            console.log(`Ваша операция - ${o}`)
        case ('/'):
            o = 'деление'
            console.log(`Ваша операция - ${o}`)
        }
    



})};

askQuestion(mainQuestion);

// async function askQuestion(question) {
//     let answer = rl.question(question, (answer))
//     return answer;
//     }


// let a = await askQuestion(firstQuestion);
// let b = await askQuestion(secondQuestion);
// let operation = await askQuestion(thirdQuestion);
// // const a = await rl.question('Введите первое число  ', );
// //     console.log(`Первое число равно ${a}`)

// console.log(a, b, operation);


// rl.question('Введите первое число  ', (x) => {
//     rl.question('Введите второе число  ', (y) => {
//         rl.question('Введите символ операции:\n'+
//     '+ для сложения,\n'+
//     '- для вычитания,\n'+
//     '* для умножения,\n'+
//     '/ для деления.\n', (z) => {
//         a=x;
//         console.log(`Первое число равно ${a}`)
//         b=x;
//         console.log(`Второе число равно ${b}`)})
//         operation=z;
//         console.log(operation)})
// } );


    


        

//    let o ='';
    // switch(operation) {
    //     case ('+'):
    //         o = 'сложение';
    //         const toAdd = await import("./add.mjs");
    //         let result = toAdd(a,b);
    //         break
    //     case ('-'):
    //         let o = 'вычитание'
    //     case ('*'):
    //         o = 'умножение'
    //     case ('/'):
    //         o = 'деление'
    //     }
    // console.log(`Ваша операция - ${o}`)


// switch (operation) {
//     case '+':
//         async function add() {
//             try {
//                 const { toAdd } = await import("./add.mjs");
//                 console.log(`Результат равен ${toAdd(a, b)}`)
//             } catch(e) {
//                 console.log("Ошибочка вышла!")
//             } 
//         };
//         default:
//             console.log("по ходу это не сложение")
    
//     }
  
        //import defaultExport from ('./add.mjs');
       // defaultExport(a, b);