// Importa o módulo express para criar um servidor web
const express = require('express')

// Cria uma instância do aplicativo express
const app = express()

// Define um array de objetos chamado usuarios com alguns dados de exemplo
const usuarios = [
    {id:1, nome:'Jenifer', sobrenome: 'Placido', idade:34},
    {id: 2, nome:'Alessandra', sobrenome: 'Rezende', idade: 18}
]

// Define uma rota GET para o caminho raiz '/'
app.get('/', (req, res)=>{
    // Exibe o array usuarios no console
    console.log(usuarios)
    // Envia o array usuarios como resposta
    res.send(usuarios)
})

// Define uma rota GET para o caminho '/:userId', onde :userId é um parâmetro de rota
app.get('/:userId', (req, res)=>{
    // Obtém o valor do parâmetro userId da URL
    let userId = req.params.userId
    // Encontra o usuário no array usuarios com o id correspondente ao userId
    let usuario = usuarios.find(user => user.id === +userId)
    // Se o usuário não for encontrado, envia uma resposta de erro
    if(!usuario) return res.send({error: 'Usuário não encontrado'})
    // Se o usuário for encontrado, envia o usuário como resposta
    res.send(usuario)
})

// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, ()=>{
    console.log('Servidor rodando na porta 8080!')
})