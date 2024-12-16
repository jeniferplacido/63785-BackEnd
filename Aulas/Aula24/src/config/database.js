
require('dotenv').config();

console.log('MONGODB_URL:', process.env.MONGODB_URL);

const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Conectado com sucesso ao MongoDb: ${mongoose.connection.host}`);
    } catch (error) {
        console.error(`Erro de conexão ao MongoDb: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connection;
