//const notifier = require('node-notifier');
import notifier from 'node-notifier';

setTimeout(() => {
    notifier.notify({
        title: 'My title',
        message: 'My message',
        sound: true,
        wait: true
    }, function (error, response) {
        console.log(response)
    });

}, 2000);

