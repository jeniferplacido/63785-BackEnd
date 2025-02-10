// Importa o módulo mongoose para conectar e interagir com o MongoDB
const mongoose = require('mongoose');
// Importa o módulo dotenv para carregar variáveis de ambiente de um arquivo .env
require('dotenv').config();

// Define uma função assíncrona chamada connection para conectar ao MongoDB
const connection = async () => {
    try {
        // Tenta conectar ao MongoDB usando a URL fornecida na variável de ambiente MONGO_URL
        await mongoose.connect(process.env.MONGO_URL);
        // Exibe uma mensagem no console se a conexão for bem-sucedida
        console.log('Conectado com sucesso ao MongoDB');
    } catch (err) {
        // Exibe uma mensagem de erro no console se a conexão falhar
        console.error(err.message, 'Erro ao conectar ao MongoDB');
        // Encerra o processo com um código de erro
        process.exit(1);
    }
}

// Exporta a função connection para que possa ser usada em outros arquivos
module.exports = connection;