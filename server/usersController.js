const {addUser, getUsers} = require("./repository");

exports.usersController = async (req, res) => {
    if (req.method === 'POST') {
        const resultUser = await addUser('David')
        res.write(JSON.stringify({messages: 'user added'}));
        res.end();
    } else {
        const users = await getUsers()
        res.write(JSON.stringify(users));
        res.end()
    }
}