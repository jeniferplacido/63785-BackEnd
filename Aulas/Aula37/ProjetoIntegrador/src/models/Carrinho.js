// Importa o módulo mongoose para conectar e interagir com o MongoDB
const mongoose = require('mongoose');

// Define um esquema do Mongoose para a coleção 'carrinhos'. Um esquema é uma estrutura que define a forma dos documentos na coleção.
const carrinhoSchema = new mongoose.Schema({
    // Define um campo 'usuarioId' do tipo ObjectId que referencia a coleção 'Usuario'
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId, // Tipo ObjectId do Mongoose
        ref: 'Usuario', // Referência à coleção 'Usuario'
        required: true // Campo obrigatório
    },
    // Define um campo 'produtos' que é um array de objetos
    produtos: [
        {
            // Cada objeto no array 'produtos' tem um campo 'produtoId' que é uma referência a um documento na coleção 'Produto'
            produtoId: {
                type: mongoose.Schema.Types.ObjectId, // Tipo ObjectId do Mongoose
                ref: 'Produto', // Referência à coleção 'Produto'
                required: true // Campo obrigatório
            },
            // Define um campo 'quantidade' do tipo Number
            quantidade: {
                type: Number, // Tipo Number do Mongoose
                required: true, // Campo obrigatório
                default: 1 // Valor padrão é 1
            }
        }
    ]
});

// Exporta um modelo do Mongoose baseado no esquema 'carrinhoSchema' e na coleção 'carrinhos'
// Um modelo é uma classe que constrói e consulta documentos baseados no esquema
module.exports = mongoose.model('Carrinho', carrinhoSchema);