// Importa o módulo express para criar um servidor web
const express = require('express')

// Cria uma instância do aplicativo express
const app = express()

// Define uma rota GET para o caminho '/oneparameter/:name', onde :name é um parâmetro de rota
app.get('/oneparameter/:name', (req, res)=>{
    // Exibe uma mensagem no console com o valor do parâmetro name
    console.log('Hello', req.params.name)
    // Envia uma resposta com uma saudação usando o valor do parâmetro name
    res.send(`Hello ${req.params.name}!`)
})

// Define uma rota GET para o caminho '/twoparameters/:name/:lastname', onde :name e :lastname são parâmetros de rota
app.get('/twoparameters/:name/:lastname', (req, res)=>{
    // Exibe uma mensagem no console com o valor do parâmetro name
    console.log('Hello', req.params.name)
    // Envia uma resposta com uma saudação usando os valores dos parâmetros name e lastname
    res.send(`Hello ${req.params.name} ${req.params.lastname}`)
})

// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, ()=>{
    console.log('Servidor rodando na porta 8080!')
})