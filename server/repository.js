const users = [
    {"id": 1, "name": "Vladimir"},
    {"id": 2, "name": "Alexandra"},
    {"id": 3, "name": "Agata"},
]

const getUsers = () => {
    return users
}

const addUser = (name) => {
    users.push({"id": 4, "name": name})
}

exports.getUsers = getUsers
exports.addUser = addUser
