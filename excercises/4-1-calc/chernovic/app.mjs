let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let operation = process.argv[4];

switch(operation) {
    case ('+'):
        let o = 'сложение';
        console.log(`Ваша операция - ${o}`)

        try {
            const { toAdd } = await import("../add.mjs");
            let result = toAdd(a, b);
            console.log(result);
        } catch(e) {
            console.log("Ошибочка вышла!")
        }        
        break
    case ('-'):
        console.log(`Ваша операция - 'вычитание'`)
        try {
            const { toSubstract } = await import("../substraction.mjs");
            let result = toSubstract(a, b);
            console.log(result);
        } catch(e) {
            console.log("Ошибочка вышла!")
        }        
        break
    case ('*'):
        console.log(`Ваша операция - 'умножение'`)

        try {
            const { toMultiply } = await import("../multiply.mjs");
            let result = toMultiply(a, b);
            console.log(result);
        } catch(e) {
            console.log("Ошибочка вышла!")
        }        
        break

    case ('/'):
        console.log(`Ваша операция - 'деление'`)

        try {
            const { toDivide } = await import("../division.mjs");
            let result = toDivide(a, b);
            console.log(result);
        } catch(e) {
            console.log("Ошибочка вышла!")
        }        
        break
    }