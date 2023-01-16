const express = require

const usersRouter = require("./routes/users.router");

app.use('/statics', express.static(__dirname + '/../public'))

app.use('/api/users', usersRouter)
