const {readJsonFromFile, writeJsonToFile} = require('./fs-utils')

// Берём данные из файла и возвращаем в виде промиса
const getUsers = () => {
  return readJsonFromFile('db.json')
}

// Берём данные из файла и добавляем к ним новые данные
const addUsers =  async (name) => {
  const users = await getUsers()
  users.push({"id": 3, "name": name})
  return writeJsonToFile('db.json', users)
}

exports.getUsers = getUsers
exports.addUsers = addUsers