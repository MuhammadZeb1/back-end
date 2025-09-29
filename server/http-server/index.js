const http = require('http');
const fs = require("fs")

const server = http.createServer((req, res) => {

    if (req.url === "/favicon.ico") {
        return res.end();
    }
    const log = `${Date.now()} ${req.method} ${req.url} New request receved \n`;
    console.log(log);

    fs.appendFile("log.txt", log, (err, data) => {

        console.log("Request received");
        switch (req.url) {
            case "/":
                if (req.method === "GET") {
                    res.end("your request is GET");
                } else if (req.method === "POST") {
                    res.end("your request is POST");
                } else if (req.method === "PUT") {
                    res.end("your request is PUT");
                } else if (req.method === "PATCH") {
                    res.end("your request is PATCH");
                } else if (req.method === "DELETE") {
                    res.end("your request is DELETE");
                } else if (req.method === "OPTIONS") {
                    res.end("your request is OPTIONS");
                } else if (req.method === "HEAD") {
                    res.writeHead(200);
                    res.end(); // HEAD requests don’t return a body
                } else {
                    res.end(`Method ${req.method} not supported`);
                }
                break;

            default:
                console.log("Unknown page requested");
                res.end("Unknown page");
                break;
        }
    })
});

server.listen(3000, () => {
    console.log('http://localhost:3000');
});
