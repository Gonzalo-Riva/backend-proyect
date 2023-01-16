const { Router } = require("express");
const usersController = require("../controller/users.controller")

const router = Router()

router.get('/', usersController.getUsers);

router.post('/', usersController.createUser)

module.exports = router;