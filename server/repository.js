const {readJSONFromFile, writeJSONToFile} = require('./fs-utils')

const getUsers = () => {
    return readJSONFromFile('db.json')
}

const addUser = async (name) => {
    const users = await getUsers()
    users.push({"id": 4, "name": name})
    return writeJSONToFile('db.json', users)
}

exports.getUsers = getUsers;
exports.addUser = addUser;