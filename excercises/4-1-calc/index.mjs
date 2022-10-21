import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

console.log('  Это калькулятор. Введите данные для расчета\n')


const question1 = '  Введите первое число  \n';
const question2 = '  Введите второе число  \n';
const question3 = '  Введите символ операции:\n'+
'  + для сложения,\n'+
'  - для вычитания,\n'+
'  * для умножения,\n'+
'  / для деления.\n\n';

const askQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (x) => {
      //console.log(`Первое число равно ${x}`);
      resolve(x);
    })
  })
};




const getInput = async () => {
  let number1 = 0;
  let number2 = 0;
   try {
    number1 = await askQuestion(question1);
    if (!isNaN(parseInt(number1))) {
      console.log(`Первое число равно ${number1} \n`);  // проверить ввод, при ошибке задать вопрос еще раз
    } else {
      console.log(`  попробуйте еще раз \n`);
      number1 = await askQuestion(question1);
      if (!isNaN(parseInt(number1))) {
        console.log(`Первое число равно ${number1} \n`);  // проверить ввод, при ошибке завершить (Хорошо бы рекурсию как-то)
      } else {
        console.log('  Ошибка ввода, завершение работы')
        process.exit(-1);
    }}
  } catch (e) {
      console.error(e.message);
  }

  try {
    number2 = await askQuestion(question2);
    if (!isNaN(parseInt(number2))) {
      console.log(`Первое число равно ${number2} \n`);  // проверить ввод, при ошибке задать вопрос еще раз
    } else {
      console.log(`  попробуйте еще раз \n`);
      number2 = await askQuestion(question2);
      if (!isNaN(parseInt(number2))) {
        console.log(`Первое число равно ${number2} \n`);  // проверить ввод, при ошибке задать вопрос еще раз
      } else {
        console.log('  Ошибка ввода, завершение работы')
        process.exit(-1);
    }}
  } catch (e) {
      console.error(e.message);
  }

  try {
    let operation = await askQuestion(question3);
    const oper_array = ['+', '-', '/', '*']
    if (!oper_array.includes(operation)) { 
      console.log(`  Неизвестная операция, попробуйте еще раз \n`);
      operation = await askQuestion(question3)
      if (!oper_array.includes(operation)) { 
        console.log('  Ошибка ввода, завершение работы')
        process.exit(-1);
      }
    } 
    let o = '';
    switch(operation) {
      case ('+'):
          o = 'сложение';
          console.log(`  Ваша операция - ${o}`)
          try {
            const { toAdd } = await import("./add.mjs");
            let result = toAdd(number1, number2);
            console.log(`  Результат вашей операции - ${result}`);
            process.exit(-1);
        } catch(e) {
            console.log("Ошибочка вышла!")
        }        
        break
      case ('-'):
          o = 'вычитание'
          console.log(`  Ваша операция - ${o}`)
          try {
            const { toSubstract } = await import("./substraction.mjs");
            let result = toSubstract(number1, number2);
            console.log(`  Результат вашей операции - ${result}`);
            process.exit(-1);
          } catch(e) {
            console.log("Ошибочка вышла!")
        }        
        break
      case ('*'):
          o = 'умножение'
          console.log(`  Ваша операция - ${o}`)
          try {
            const { toMultiply } = await import("./multiply.mjs");
            let result = toMultiply(number1, number2);
            console.log(`  Результат вашей операции - ${result}`);
            process.exit(-1);
        } catch(e) {
            console.log("Ошибочка вышла!")
        }        
        break
      case ('/'):
          o = 'деление'
          console.log(`  Ваша операция - ${o}`)
          try {
            const { toDivide } = await import("./division.mjs");
            let result = toDivide(number1, number2);
            console.log(`  Результат вашей операции - ${result}`);
            process.exit(-1);
        } catch(e) {
            console.log("Ошибочка вышла!")
        }        
        break
      
          // как запустить ее еще раз???
            }  
  } catch (e) {
      console.error(e.message);
  }
};
getInput();
//export { number1, number2, operation} 


