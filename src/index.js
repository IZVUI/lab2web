const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;


const requestListener = function (req, res) {
    console.log(__dirname);
    fs.readFile(__dirname + "/src/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    fs.readFile(__dirname + "/src/src.js")
        .then(contents => {
            res.setHeader("Content-Type", "script/jsscript");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


function increase() {
    let num = document.getElementById('number');
    let toInc = Number(num.innerText) + 1;
    num.innerText = toInc;
}

function decrease() {
    let num = document.getElementById('number');
    let toDec = +num.innerText - 1;
    num.innerText = toDec;
}