import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import notifier from 'node-notifier';

const rl = readline.createInterface({ input, output });



console.log('\n  Таймер\n')

const askQuestion = (question) => {
    return new Promise((resolve, reject) => {
      rl.question(question, (x) => {
        //console.log(`Первое число равно ${x}`);
        resolve(x);
      })
    })
  };

  const timer = async () => { 
    try{
        const input = await askQuestion("   На сколько завести таймер в секундах?  ")

        if (!isNaN(parseInt(input))) {
            console.log(`\n   Завожу таймер на ${input} секунд \n`);  // проверить ввод, при ошибке задать вопрос еще раз
            console.log(`      ${input} `);
            setTimeout(() => {
                console.log('\n    Звуки сработавшего таймера');
                notifier.notify({
                  title: 'Звуки сработавшего таймера',
                  message: `Прошло ${input} секуннд`,
                  sound: true,
                  wait: true
                }, function (err, response) {
                  console.log(' Я - сработавший нотифай')
                  console.log(response);
                });
                //console.log('after notifier')
                process.exit(-1);
            }, input*1000); 

            for (let i = input; i>0; i--) {
              setTimeout(() => {
                console.log(`      ${input - i} `); // 
              }, 1000*i)
            }

            // setInterval((input) => {  // Не работает
            //   input = input-1
            //   
            // }, 1000);

        } else {
            console.log(`\n   Некорректный ввод, завершение работы \n`);
            process.exit(-1);
          }
                  
        } catch (e) {
            console.error(e.message);
        }
    };

    timer();