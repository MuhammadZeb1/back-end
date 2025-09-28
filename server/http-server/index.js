const http = require('http');
const fs = require("fs")

const server = http.createServer((req, res) => {

    const log = `${Date.now()} ${req.url} New request receved \n`;
    console.log(log);
    fs.appendFile("log.txt",log,(err,data)=>{
   
        console.log("Request received");
        switch(req.url){
            case "/":
               console.log("Home page requested");
                break;
            case "/favicon.ico":
                console.log("Favicon requested");
                break;
            default:
                console.log("Unknown page requested");
                break;
        }
        res.end('Hello, World!\n');
    })
});

server.listen(3000, () => {
    console.log('http://localhost:3000');
});