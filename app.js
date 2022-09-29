//Set the function logger to const so we don't accidentally override the logger
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);