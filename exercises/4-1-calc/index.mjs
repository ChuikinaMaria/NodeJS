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

const answer1 = '  Первое число равно  ';
const answer2 = '  Второе число равно  ';
const answer3 = '  Ваша операция - ';

const oper_obj = {
  '+': {'script': "./add.mjs", 'type': 'сложение'},
  '-': {'script': "./substraction.mjs", 'type': 'вычитание'},
  '/': {'script': "./division.mjs", 'type': 'деление'},
  '*': {'script': "./multiply.mjs", 'type': 'умножение'}
}

const askQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (x) => {
      resolve(x);
    })
  })
};

const getNumber = async (question, answer, tryCounter = 1) =>{
  if (tryCounter > 3) {
    console.log('  Ошибка ввода, завершение работы')
    process.exit(-1);
  }
  let number = await askQuestion(question);

  if (!isNaN(parseInt(number))) {
    console.log(answer + number + ' \n');
    return parseInt(number);
  } else {
    await getNumber(question, answer, ++tryCounter);
  }
};

const getOperation = async (tryCounter = 1) => {
  if (tryCounter > 3) {
    console.log('  Ошибка ввода, завершение работы')
    process.exit(-1);
  }

  let operation = await askQuestion(question3);

  if (!Object.keys(oper_obj).includes(operation)) {
    console.log(`  Неизвестная операция, попробуйте еще раз \n`);
    getOperation(++tryCounter);
  } else {
    console.log(answer3 + oper_obj[operation].type + ' \n');
    return operation;
  };
};

const main = async () => {
  let number1 = await getNumber(question1, answer1);
  let number2 = await getNumber(question2, answer2);
  let operation = await getOperation();

  try {
    const { calculate } = await import(oper_obj[operation].script);
    let result = calculate(number1, number2);
    console.log(`  Результат вашей операции - ${result}`);
    process.exit(-1);
  } catch(e) {
    console.log("Не грузится нужный скрипт, Ёлки-моталки!");
    process.exit(-1);
  };
};        

main();