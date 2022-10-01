const express = require('express')
const users = require('./users-router')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()   // создали express app
const port = 5000

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/users', users)

app.get('/tasks', async (req, res) => {
    res.send('TASKS')
})

// перехвадчик ошибок
app.use((req, res) => {
    res.send(404);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})