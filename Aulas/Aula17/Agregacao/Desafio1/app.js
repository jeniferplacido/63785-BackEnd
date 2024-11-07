const mongoose = require('mongoose');
const Aluno = require('./model/aluno');


const envoironment = async () => {
    try{
        await mongoose.connect('mongodb+srv://jeni:coderback@coderback.akfyg.mongodb.net/')
        console.log('Conectado ao MongoDB com sucesso')
        let result = await Aluno.insertMany([
            {
                nome: 'Jenifer',
                sobrenome: 'Placido',
                email: 'jenifer@email.com',
                genero: 'Feminino',
                grade: 10,
                grupo:'1B'
            },
            {
                nome: 'João',
                sobrenome: 'Silva',
                email: 'joao@email.com',
                genero: 'Masculino',
                grade: 9,
                grupo:'1A'
            },
            {
                nome: 'Maria',
                sobrenome: 'Santos',
                email: 'maria@email.com',
                genero: 'Feminino',
                grade: 8,
                grupo:'1B'
            },
            {
                nome: 'Pedro',
                sobrenome: 'Souza',
                email: 'pedro@email.com',
                genero: 'Masculino',
                grade: 7,
                grupo:'1A'
            },
            {
                nome: 'Ana',
                sobrenome: 'Oliveira',
                email: 'ana@email.com',
                genero: 'Feminino',
                grade: 6,
                grupo:'1B'
            },
            {
                nome: 'Lucas',
                sobrenome: 'Ferreira',
                email: 'lucas@email.com',
                genero: 'Masculino',
                grade: 5,
                grupo:'1A'
            },
            {
                nome: 'Julia',
                sobrenome: 'Almeida',
                email: 'julia@email.com',
                genero: 'Feminino',
                grade: 4,
                grupo:'1B'
            },
            {
                nome: 'Marcos',
                sobrenome: 'Ribeiro',
                email: 'marcos@email.com',
                genero: 'Masculino',
                grade: 3,
                grupo:'1A'
            },
            {
                nome: 'Carla',
                sobrenome: 'Gomes',
                email: 'carla@email.com',
                genero: 'Feminino',
                grade: 2,
                grupo:'1B'
            }
        ])
        console.log('Alunos inseridos com sucesso: ', result)
    }catch(err){
        console.error('Erro ao conectar ao MongoDB: ', err)
    }
}

envoironment();