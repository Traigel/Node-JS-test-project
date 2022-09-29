const http = require('http');
const {getUsers, addUser} = require('./repository');

const PORT = 5000

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
            if (req.method === 'POST') {
                addUser('David')
                res.write(JSON.stringify({messages: 'user added'}));
            } else {
                res.write(JSON.stringify(getUsers()));
            }
            break;
        case '/lessons':
            res.write(`lessons`);
            break;
        default:
            res.write(`PAGE NOT FOUND`);
    }

    res.end()
})

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
