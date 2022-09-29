var url = 'http://mylogger.io/log';

function log(message) {
    //Send an HTTP request
    console.log(message);
}
//Here we are exporting an object that contains the function log
//module.exports.log = log

//Here we are just exporting a function
module.exports = log;