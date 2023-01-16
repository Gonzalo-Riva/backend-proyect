const users = []

const getUsers = (req, res) => {
    res.json({
        users
    })
}

const createUser = (req, res) => {
    const user = req.body.name;
    users.push(user);
    res.json({
        msg: "Se creo exitosamente el usuario"
    })
}

module.exports = {
    getUsers,
    createUser,
}