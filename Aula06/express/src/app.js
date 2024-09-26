// importa o módulo express
const express = require('express')

// Cria uma instância do express
const app = express()

// Cria uma rota para o método GET na rota /saldar
app.get('/saldar', (req, res)=>{
    // Encia a resposta com a mensagem: Olá pessoal, mas agora do express
    res.send('Olá pessoal, mas agora do express!')
})

app.get('/',(req, res)=>{
    res.send('Hellooo')
})
// Inicia o meu servidor na porta 8080
app.listen(8080, ()=>{
    console.log('Servidor rodando na porta 8080!')
})