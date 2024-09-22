const http = require('node:http');

const PORT = 5005;
const hostname = 'localhost';

const server  = http.createServer((req,res)=>{

    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");//recommended : application/json
    res.end(JSON.stringify({"name" : "Rohit kumar"}));
    // res.end('Welcome to my server');
})

server.listen(PORT,()=>{
    console.log(`Server running on port : ${PORT} : hostname : ${hostname}`);
});
