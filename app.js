const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});


//Give the listener a port 
//Every time there is a new connection/request the server raises an event
server.listen(3000);
console.log('Listening on port 3000...');
