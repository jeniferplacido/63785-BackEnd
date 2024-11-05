// Importa o módulo mongoose para conectar e interagir com o MongoDB
const mongoose = require('mongoose');
// Importa o modelo de usuários definido em outro arquivo
const userModel = require('./models/users');

// Define uma função assíncrona chamada environment
const environment = async () => {
    // Conecta ao banco de dados MongoDB usando mongoose
    await mongoose.connect('mongodb+srv://jeni:coderback@coderback.akfyg.mongodb.net/')
    .then(() => console.log('Conectado ao MongoDB com sucesso')) // Exibe uma mensagem no console quando a conexão é bem-sucedida
    .catch(err => console.error('Erro ao conectar ao MongoDB: ', err)); // Exibe uma mensagem de erro no console se a conexão falhar

    // Usa o modelo de usuários para buscar documentos onde o campo first_name é 'Jeni'
    // O método explain('executionStats') retorna estatísticas de execução da consulta
    let response = await userModel.find({first_name: 'Jeni'}).explain('executionStats');
    // Exibe a resposta da consulta no console
    console.log(response);
}

// Chama a função environment para executar o código
environment();