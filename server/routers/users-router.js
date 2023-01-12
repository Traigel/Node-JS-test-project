const express = require('express');
const router = express.Router();

const {getUsers, addUsers, removeUsers, getUser, updateUsers} = require('../repository');

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// возвращаем всех юзеров
router.get('/', async (req, res) => {
  let users = await getUsers(req.query.search)
  res.send(users) // возвращаемый ответ сервера
})

// возвращаем юзера по его id
router.get('/:id', async (req, res) => {
  const userId = req.params.id
  const user = await getUser(userId)
  if (user) res.send(user) // возвращаемый ответ сервера
  else res.send(404) // если user не найден возвращаем ошибку
})

// Добавляем нового юзера
router.post('/', async (req, res) => {
  const name = req.body.name // берём то что приходит в body запроса
  await addUsers(name)
  const users = await getUsers()
  res.send(users) // возвращаемый ответ сервера
})

// Изменяем юзера
router.put('/', async (req, res) => {
  const id = req.body.id // берём то что приходит в body запроса
  const name = req.body.name // берём то что приходит в body запроса
  const result = await updateUsers(id, name)
  if (result) {res.send(204)}
  else {res.send(404)}
})

// Удаляем юзера
router.delete('/:id', async (req, res) => {
  const userId = req.params.id
  const users = await removeUsers(userId)
  if (users) res.send(204) // возвращаемый ответ сервера
  else res.send(404) // если user не найден возвращаем ошибку
})

module.exports = router;