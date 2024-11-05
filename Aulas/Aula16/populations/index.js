// Importa o módulo mongoose para conectar e interagir com o MongoDB
const mongoose = require('mongoose');
// Importa o modelo de usuários definido em outro arquivo
const userModel = require('./models/users');
// Importa o modelo de cursos definido em outro arquivo
const courseModel = require('./models/courses');

// Define uma função assíncrona chamada environment
const environment = async () => {
    // Conecta ao banco de dados MongoDB usando mongoose
    await mongoose.connect('mongodb+srv://jeni:coderback@coderback.akfyg.mongodb.net/')
    .then(() => console.log('Conectado ao MongoDB com sucesso')) // Exibe uma mensagem no console quando a conexão é bem-sucedida
    .catch(err => console.error('Erro ao conectar ao MongoDB: ', err)); // Exibe uma mensagem de erro no console se a conexão falhar

    // Cria um novo documento na coleção de usuários
    await userModel.create({
        first_name: 'Jenifer', // Define o campo first_name
        last_name: 'Placido',  // Define o campo last_name
        email: 'jenifer@email.com', // Define o campo email
        gender: 'F' // Define o campo gender
    });
    
    // Cria um novo documento na coleção de cursos
    await courseModel.create({
        title: 'Curso de BackEnd', // Define o campo title
        description: 'Curso para criar servidores lindos!', // Define o campo description
        difficulty: 5, // Define o campo difficulty
        topics: ['Node', 'Express', 'MongoDB', 'JavaScript', 'Servidores', 'Banco de Dados'], // Define o campo topics
        professor: 'Jeni Placido', // Define o campo professor
    });

    // Busca um documento na coleção de usuários pelo ID
    let usuario = await userModel.find({_id:'67295f6147d9ebf13c6eb4e4'});
    // Adiciona um curso ao array de cursos do usuário
    usuario[0].courses.push({course:"672960703e760735eace93e9"});
    // Atualiza o documento do usuário no banco de dados e popula o campo courses.course
    let result = await userModel.updateOne({_id:'67295f6147d9ebf13c6eb4e4'}, usuario[0]).populate('courses.course');
    // Exibe o resultado da atualização no console
    console.log(result);
    
    // Busca novamente o documento do usuário pelo ID
    let student = await userModel.find({_id:'67295f6147d9ebf13c6eb4e4'});
    // Exibe o documento do usuário no console em formato JSON
    console.log(JSON.stringify(student, null, '\t'));
}

// Chama a função environment para executar o código
environment();