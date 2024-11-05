// Importa o módulo mongoose para conectar e interagir com o MongoDB
const mongoose = require('mongoose');

// Define um esquema do Mongoose para a coleção 'produtos'. Um esquema é uma estrutura que define a forma dos documentos na coleção.
const produtoSchema = new mongoose.Schema({
    // Define um campo 'nome' do tipo String, que é obrigatório
    nome: {
        type: String,
        required: true
    },
    // Define um campo 'preco' do tipo Number, que é obrigatório
    preco: {
        type: Number,
        required: true
    },
    // Define um campo 'descricao' do tipo String, que é opcional
    descricao: String,
    // Define um campo 'categoria' do tipo String, que deve ser um dos valores especificados no enum
    categoria: {
        type: String,
        enum: ["eletronicos", "vestuarios", "livros", "alimentos", "brinquedos", "móveis"]
    },
    // Define um campo 'disponivel' do tipo Boolean, que tem o valor padrão true
    disponivel: {
        type: Boolean,
        default: true
    }
},
{
    // Especifica o nome da coleção no MongoDB onde os documentos de produtos serão armazenados
    collection: 'produtos'
});

// Cria um modelo do Mongoose baseado no esquema 'produtoSchema' e na coleção 'produtos'.
// Um modelo é uma classe que constrói e consulta documentos baseados no esquema.
const Produto = mongoose.model('Produto', produtoSchema);

// Exporta o modelo Produto para que possa ser usado em outros arquivos
module.exports = Produto;