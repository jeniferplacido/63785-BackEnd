// Importa o módulo express para criar um servidor web
const express = require('express');
// Importa o módulo mongoose para conectar e interagir com o MongoDB
const mongoose = require('mongoose');

// Cria uma instância do aplicativo express
const app = express();

// Importa o roteador de usuários definido em outro arquivo
const usersRouter = require('./routes/users.router');

// Configura o middleware para analisar dados JSON no corpo das requisições
app.use(express.json());

// Define a rota base para o roteador de usuários
app.use('/api/users', usersRouter);

// Conecta ao banco de dados MongoDB usando mongoose
mongoose.connect('mongodb+srv://jeni:coderback@coderback.akfyg.mongodb.net/')
.then(() => {
    // Exibe uma mensagem no console quando a conexão é bem-sucedida
    console.log('Conectado ao MongoDB com sucesso');
}).catch((error) => {
    // Exibe uma mensagem de erro no console se a conexão falhar
    console.log('Erro ao conectar ao MongoDB: ', error);
});

// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});