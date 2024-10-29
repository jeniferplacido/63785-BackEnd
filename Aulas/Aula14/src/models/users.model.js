// Importa o módulo mongoose para conectar e interagir com o MongoDB
const mongoose = require('mongoose');

// Define o nome da coleção no MongoDB
const usuariosCollection = 'usuarios';

// Define o esquema (schema) para a coleção de usuários
const usuariosSchema = new mongoose.Schema({
    // Campo 'nome' do tipo String
    nome: String,
    // Campo 'sobrenome' do tipo String
    sobrenome: String,
    // Campo 'email' do tipo String, que deve ser único e é obrigatório
    email: {
        type: String, // Tipo do campo
        unique: true, // Garante que o valor do campo seja único na coleção
        required: true // Garante que o campo seja obrigatório
    }
});

// Exporta o modelo mongoose baseado no esquema definido
// O modelo permite interagir com a coleção 'usuarios' no MongoDB
module.exports = mongoose.model(usuariosCollection, usuariosSchema);