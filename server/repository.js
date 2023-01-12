const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ // схема объектов, типизация (набор того что будет в объектах)
  name: String
});
const User = mongoose.model('MyUser', userSchema); // модель для создания объектов (как класс)

// Берём данные из БД и возвращаем в виде промиса, и поиск по квери параметрам
exports.getUsers = (search) => {
  if (!search) {
    return User.find()
  } else {
    return User.find({name: new RegExp(search)}) // поиск того что содержит эту строку
  }
}

// Возвращает нужного user-а из БД по его id
exports.getUser = (userId) => {
    return User.find({_id: userId})
}

// Берём данные из БД и добавляем к ним новые данные
exports.addUsers =  async (name) => {
  const user = new User({name: name})
  return await user.save();
}

// Изменяем данные в БД
exports.updateUsers =  async (id, name) => {
  return User.update({_id: id},{name: name})
}

// Удаляем из БД нужный объект
exports.removeUsers =  async (userId) => {
  return User.deleteOne({_id: userId})
}
