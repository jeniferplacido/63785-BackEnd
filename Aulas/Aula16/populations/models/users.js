// Importa o módulo mongoose para conectar e interagir com o MongoDB
const mongoose = require('mongoose');

// Define o nome da coleção no MongoDB onde os documentos de usuários serão armazenados
const userCollection = 'users';

// Define um esquema do Mongoose para a coleção 'users'. Um esquema é uma estrutura que define a forma dos documentos na coleção.
const userSchema = new mongoose.Schema({
    // Define um campo 'first_name' do tipo String
    first_name: String,
    // Define um campo 'last_name' do tipo String
    last_name: String,
    // Define um campo 'email' do tipo String
    email: String,
    // Define um campo 'gender' do tipo String
    gender: String,
    // Define um campo 'courses' que é um array de objetos
    courses: {
        type: [
            {
                // Cada objeto no array 'courses' tem um campo 'course' que é uma referência a um documento na coleção 'courses'
                course: {
                    type: mongoose.Schema.Types.ObjectId, // Tipo ObjectId do Mongoose
                    ref: 'courses' // Referência à coleção 'courses'
                }
            }
        ],
        // Define o valor padrão do campo 'courses' como um array vazio
        default: []
    }
});

// Define um middleware 'pre' que será executado antes do método 'find' ser chamado
userSchema.pre('find', function() {
    // Popula o campo 'courses.course' com os documentos referenciados na coleção 'courses'
    this.populate('courses.course');
});

// Cria um modelo do Mongoose baseado no esquema 'userSchema' e na coleção 'users'
// Um modelo é uma classe que constrói e consulta documentos baseados no esquema
const userModel = mongoose.model(userCollection, userSchema);

// Exporta o modelo userModel para que possa ser usado em outros arquivos
module.exports = userModel;