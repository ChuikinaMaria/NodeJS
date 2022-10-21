let a = '456'
console.log(parseInt(a));

if (!isNaN(parseInt(a)))  {
    console.log(`not nan`);  // проверить ввод, при ошибке задать вопрос еще раз
  } else {
    console.log(`nan`);
  }