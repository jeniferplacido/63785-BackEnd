const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jeni:coderback@coderback.akfyg.mongodb.net/')
    .then(() => console.log('Conectado ao MongoDB com sucesso'))
    .catch(err => console.error('Erro ao conectar ao MongoDB: ', err))