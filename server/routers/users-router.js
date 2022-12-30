const express = require('express');
const router = express.Router();

const {getUsers, addUsers} = require('../repository');

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', async (req, res) => {
  let users = await getUsers()
  if (req.query.search) { // берём квери параметр и пользуемся им
    users = users.filter(el => el.name.indexOf(req.query.search) > -1)
  }
  res.send(users) // возвращаемый ответ сервера
})

// возвращаем юзера по его id
router.get('/:id', async (req, res) => {
  const userId = req.params.id
  const users = await getUsers()
  const user = users.find(el => el.id == userId)
  if (user) res.send(user) // возвращаемый ответ сервера
  else res.send(404) // если user не найден возвращаем ошибку
})

router.post('/', async (req, res) => {
  const name = req.body.name // берём то что приходит в body запроса
  await addUsers(name)
  const users = await getUsers()
  res.send(users) // возвращаемый ответ сервера
})

module.exports = router;