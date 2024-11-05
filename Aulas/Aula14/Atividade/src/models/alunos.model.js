// Importa o módulo 'mongoose', que é uma biblioteca para modelagem de dados do MongoDB em Node.js.
const mongoose = require('mongoose');

// Define o nome da coleção no MongoDB onde os documentos de alunos serão armazenados.
const userCollection = 'alunos';

// Define um esquema do Mongoose para a coleção 'alunos'. Um esquema é uma estrutura que define a forma dos documentos na coleção.
const userSchema = new mongoose.Schema({
    // Define um campo 'nome' do tipo String.
    nome: String,
    // Define um campo 'sobrenome' do tipo String.
    sobrenome: String,
    // Define um campo 'idade' do tipo Number.
    idade: Number,
    // Define um campo 'dni' do tipo String, que deve ser único e é obrigatório.
    dni: {
        type: String,
        unique: true,
        required: true
    },
    // Define um campo 'curso' do tipo String.
    curso: String,
    // Define um campo 'nota' do tipo Number.
    nota: Number,
    // Define um campo 'email' do tipo String, que deve ser único e é obrigatório.
    email: {
        type: String,
        unique: true,
        required: true
    }
});

// Exporta um modelo do Mongoose baseado no esquema 'userSchema' e na coleção 'alunos'.
// Um modelo é uma classe que constrói e consulta documentos baseados no esquema.
module.exports = mongoose.model(userCollection, userSchema);