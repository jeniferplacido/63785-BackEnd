const mongoose = require('mongoose');

const alunoCollection = 'students';

const alunoSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    email: String,
    genero: String,
    grade: Number,
    grupo: String
});


const userModel = mongoose.model(alunoCollection, alunoSchema);

module.exports = userModel;

