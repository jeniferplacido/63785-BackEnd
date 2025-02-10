// Importa o módulo mongoose para conectar e interagir com o MongoDB
const mongoose = require('mongoose');
// Importa o módulo bcrypt para hash de senhas
const bcrypt = require('bcrypt');

// Define um esquema do Mongoose para a coleção 'usuarios'. Um esquema é uma estrutura que define a forma dos documentos na coleção.
const usuarioSchema = new mongoose.Schema({
    // Define um campo 'nome' do tipo String, que é obrigatório
    nome: {
        type: String, // Tipo String do Mongoose
        required: true // Campo obrigatório
    },
    // Define um campo 'sobrenome' do tipo String, que é obrigatório
    sobrenome: {
        type: String, // Tipo String do Mongoose
        required: true // Campo obrigatório
    },
    // Define um campo 'email' do tipo String, que é obrigatório e único
    email: {
        type: String, // Tipo String do Mongoose
        required: true, // Campo obrigatório
        unique: true // Valor deve ser único na coleção
    },
    // Define um campo 'senha' do tipo String, que é obrigatório
    senha: {
        type: String, // Tipo String do Mongoose
        required: true // Campo obrigatório
    }
});

// Define um middleware 'pre' que será executado antes de salvar um documento
usuarioSchema.pre('save', async function(next){
    // Verifica se o campo 'senha' foi modificado
    if (!this.isModified('senha')){
        next(); // Se não foi modificado, passa para o próximo middleware
    }
    // Gera um salt para o hash da senha
    const salt = await bcrypt.genSalt(10);
    // Hash da senha usando o salt gerado
    this.senha = await bcrypt.hash(this.senha, salt);
    next(); // Passa para o próximo middleware
});

// Exporta um modelo do Mongoose baseado no esquema 'usuarioSchema' e na coleção 'usuarios'
// Um modelo é uma classe que constrói e consulta documentos baseados no esquema
module.exports = mongoose.model('Usuario', usuarioSchema);