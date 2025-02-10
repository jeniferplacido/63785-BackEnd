// Importa o módulo mongoose para conectar e interagir com o MongoDB
const mongoose = require('mongoose');

// Define um esquema do Mongoose para a coleção 'produtos'. Um esquema é uma estrutura que define a forma dos documentos na coleção.
const produtoSchema = new mongoose.Schema({
    // Define um campo 'nome' do tipo String, que é obrigatório
    nome: {
        type: String, // Tipo String do Mongoose
        required: true // Campo obrigatório
    },
    // Define um campo 'preco' do tipo Number, que é obrigatório
    preco: {
        type: Number, // Tipo Number do Mongoose
        required: true // Campo obrigatório
    },
    // Define um campo 'descricao' do tipo String, que é obrigatório
    descricao: {
        type: String, // Tipo String do Mongoose
        required: true // Campo obrigatório
    },
    // Define um campo 'quantidade' do tipo Number, que é obrigatório
    quantidade: {
        type: Number, // Tipo Number do Mongoose
        required: true // Campo obrigatório
    }
});

// Exporta um modelo do Mongoose baseado no esquema 'produtoSchema' e na coleção 'produtos'
// Um modelo é uma classe que constrói e consulta documentos baseados no esquema
module.exports = mongoose.model('Produto', produtoSchema);