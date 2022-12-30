const users = require('./routers/users-router');

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express() // создаём app express
const port = 5000
app.use(cors()) // подключаем cors
app.use(bodyParser.urlencoded({extended: false})) // подключаем работу с body
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Home!!!')
})

app.use('/users', users);

app.use((req, res) => {
  res.send(404); // перехватчик ошибок
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})