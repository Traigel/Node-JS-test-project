const http = require('http');
const {usersController} = require('./usersController')

const PORT = 5000

// обработка ошибок
process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p)
});

const cors = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Method', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Header', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true
    }
    return false
}

const server = http.createServer((req, res) => {

    if (cors(req, res)) return

    switch (req.url) {
        case '/users':
            usersController(req, res)
            break;
        case '/lessons':
            res.write(`lessons`);
            break;
        default:
            res.write(`PAGE NOT FOUND`);
    }
})

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
