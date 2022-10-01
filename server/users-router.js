const {addUser, getUsers} = require("./repository");
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', async (req, res) => {
    let users = await getUsers()
    if (!!req.query.search) {
        users = users.filter(el => el.name.indexOf(req.query.search) > -1)
    }
    res.send(users)
})

router.get('/:id', async (req, res) => {
    const userID = req.params.id
    const users = await getUsers()
    const user = users.find(el => el.id == userID)
    if (user) res.send(user)
    else res.send(404)
})

router.post('/', async (req, res) => {
    const name = req.body.name
    const resultUser = await addUser(name)
    res.send(JSON.stringify({messages: 'user added'}));
})

module.exports = router