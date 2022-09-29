//Set the function logger to const so we don't accidentally override the logger
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function(err,files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});