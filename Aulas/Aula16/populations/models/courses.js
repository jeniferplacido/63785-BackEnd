// Importa o módulo mongoose para conectar e interagir com o MongoDB
const mongoose = require('mongoose');

// Define o nome da coleção no MongoDB onde os documentos de cursos serão armazenados
const courseCollection = 'courses';

// Define um esquema do Mongoose para a coleção 'courses'. Um esquema é uma estrutura que define a forma dos documentos na coleção.
const courseSchema = new mongoose.Schema({
    // Define um campo 'title' do tipo String
    title: String,
    // Define um campo 'description' do tipo String
    description: String,
    // Define um campo 'difficulty' do tipo Number
    difficulty: Number,
    // Define um campo 'topics' que é um array de strings, com valor padrão como um array vazio
    topics: {
        type: Array,
        default: []
    },
    // Define um campo 'professor' do tipo String
    professor: String,
    // Define um campo 'students' que é um array de strings, com valor padrão como um array vazio
    students: {
        type: Array,
        default: []
    }
});

// Cria um modelo do Mongoose baseado no esquema 'courseSchema' e na coleção 'courses'
// Um modelo é uma classe que constrói e consulta documentos baseados no esquema
const courseModel = mongoose.model(courseCollection, courseSchema);

// Exporta o modelo courseModel para que possa ser usado em outros arquivos
module.exports = courseModel;