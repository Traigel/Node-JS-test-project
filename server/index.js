let http = require('http')

let server = http.createServer((req, res) => {
    console.log('Hello')
    res.write(`
        <h1>My server</h1>
        <script>alert('hello');</script>
    `)
    res.end()
})

server.listen(5000)
