// Importa o módulo express para criar um servidor web
const express = require('express')

// Cria uma instância do aplicativo express
const app = express();

// Configura o middleware para analisar dados de URL-encoded (formulários)
app.use(express.urlencoded({extended: true}))

// Define uma rota GET para o caminho '/dados'
app.get('/dados', (req, res) => {
    // Obtém os parâmetros de consulta da URL e armazena na variável consultas
    let consultas = req.query

    // Desestrutura os parâmetros de consulta nome, sobrenome e idade da URL
    let { nome, sobrenome, idade } = req.query

    // Envia os parâmetros de consulta como resposta
    res.send(consultas)
})

// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
})