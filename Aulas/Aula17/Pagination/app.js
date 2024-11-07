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

    let usuarios = await userModel.paginate({gender:'F'}, {limit: 2, page: 1});
    console.log("Usuarios:", usuarios);
}

// Chama a função environment para executar o código
environment();