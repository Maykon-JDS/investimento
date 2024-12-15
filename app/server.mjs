"use strict"

// This imports the entire node:http module and assigns it to the variable http.
// const http = require('node:http'); (CJS)

import http from "node:http"; // (MJS)
// import { createServer } from "node:http"; // (MJS)

console.log(typeof http)

const hostname = "127.0.0.1";
const port = 8001;

console.log(typeof {teste:"teste"})

const server = http.createServer((req, res) => {
    res.statusCode = 200; //we set the statusCode property to 200, to indicate a successful response.
    res.setHeader("Content-Type", "text/plain"); //We set the Content-Type header
    res.end("Investimentos\n"); //we close the response, adding the content as an argument to end():
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
