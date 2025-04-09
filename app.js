const http = require('http');
const port = 3000;
let message = 'Hello, World!';
http.createServer((req, res) => {

    console.log(message)
    response.end(message)
}).listen(port, () => {
    console.log(`сервер запущенн на http://localhost:${port}/`);
})