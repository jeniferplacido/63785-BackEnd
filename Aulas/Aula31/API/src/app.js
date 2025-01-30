const express = require('express')
const usersRouter = require('./routes/user.router')

const app = express()

app.use(express.json())

app.use('/', usersRouter)

app.listen(8080, () =>{
    console.log("Servidor rodando na porta 8080!")
})