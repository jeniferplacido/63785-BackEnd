// Importa o módulo 'mongoose', que é uma biblioteca para modelagem de dados do MongoDB em Node.js.
const mongoose = require('mongoose');
// Importa o plugin 'mongoose-paginate-v2', que adiciona funcionalidades de paginação aos esquemas do Mongoose.
const mongoosePaginate = require('mongoose-paginate-v2');

// Define o nome da coleção no MongoDB onde os documentos de alunos serão armazenados.
const alunosCollection = 'desafio2';

// Define um esquema do Mongoose para a coleção 'alunos'. Um esquema é uma estrutura que define a forma dos documentos na coleção.
const userSchema = mongoose.Schema({
    nome: String,
    sobrenome: String,
    email: String,
    genero: String,
    grade: Number,
    grupo: String
});

// Adiciona o plugin de paginação ao esquema 'userSchema'. Isso permite que você use funcionalidades de paginação nos documentos da coleção 'alunos'.
userSchema.plugin(mongoosePaginate);

// Cria um modelo do Mongoose baseado no esquema 'userSchema' e na coleção 'alunos'.
// Um modelo é uma classe que constrói e consulta documentos baseados no esquema.
const userModel = mongoose.model(alunosCollection, userSchema);

// Exporta o modelo 'userModel' para que ele possa ser usado em outros arquivos.
module.exports = userModel;