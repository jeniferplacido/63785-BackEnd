// Importa o módulo 'express', que é um framework para criar aplicações web no Node.js.
const express = require('express');
// Importa o modelo 'alunosModel' do arquivo '../models/alunos.model'. Este modelo é usado para interagir com a coleção 'alunos' no MongoDB.
const alunosModel = require('../models/alunos.model');

// Cria um roteador Express. Um roteador é uma mini-aplicação que pode ter suas próprias rotas e middleware.
const router = express.Router();

// Define uma rota GET para a raiz do roteador ('/api/users/'). Quando alguém acessa essa rota, a função é chamada.
router.get('/', async (req, res) => {
   try {
       // Usa o modelo 'alunosModel' para buscar todos os documentos na coleção 'alunos'.
       let alunos = await alunosModel.find();
       // Envia uma resposta com o status 'success' e os dados dos alunos.
       res.send({ result: 'success', payload: alunos });
   } catch (error) {
       // Se ocorrer um erro, registra o erro no console e envia uma resposta de erro.
       console.log("Cannot get users com mongoose: " + error);
       res.status(500).json({ error: 'Erro ao buscar usuários' });
   }
});

// Define uma rota POST para a raiz do roteador ('/api/users/'). Quando alguém envia dados para essa rota, a função é chamada.
router.post('/', async (req, res) => {
    try {
        // Extrai os dados do corpo da requisição.
        let { nome, sobrenome, idade, dni, curso, nota, email } = req.body;
        // Verifica se todos os campos necessários foram fornecidos.
        if (!nome || !sobrenome || !idade || !dni || !curso || !nota || !email) {
            return res.status(400).json({ status: 'error', error: 'Dados faltando' });
        }
        // Usa o modelo 'alunosModel' para criar um novo documento na coleção 'alunos'.
        let result = await alunosModel.create({ nome, sobrenome, idade, dni, curso, nota, email });
        // Envia uma resposta com o status 'success' e os dados do aluno criado.
        res.status(201).json({ status: 'success, Aluno adicionado com sucesso', payload: result });
        
    } catch (error) {
        // Se ocorrer um erro, registra o erro no console e envia uma resposta de erro.
        console.log("Erro ao adicionar usuário com mongoose: " + error);
        res.status(500).json({ error: 'Erro ao adicionar usuário' });
    }
});

// Define uma rota PUT para atualizar um usuário pelo ID ('/api/users/:id'). Quando alguém envia dados para essa rota, a função é chamada.
router.put('/:id', async (req, res) => {
    try {
        // Extrai o ID dos parâmetros da rota.
        let { id } = req.params;
        // Extrai os dados do corpo da requisição.
        let { nome, sobrenome, idade, dni, curso, nota, email } = req.body;

        // Usa o modelo 'alunosModel' para buscar um documento pelo ID.
        let alunoToUpdate = await alunosModel.findById(id);
        // Se o aluno não for encontrado, envia uma resposta de erro.
        if (!alunoToUpdate) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // Atualiza os campos do aluno com os novos dados, se fornecidos.
        alunoToUpdate.nome = nome || alunoToUpdate.nome;
        alunoToUpdate.sobrenome = sobrenome || alunoToUpdate.sobrenome;
        alunoToUpdate.idade = idade || alunoToUpdate.idade;
        alunoToUpdate.dni = dni || alunoToUpdate.dni;
        alunoToUpdate.curso = curso || alunoToUpdate.curso;
        alunoToUpdate.nota = nota || alunoToUpdate.nota;
        alunoToUpdate.email = email || alunoToUpdate.email;

        // Salva as alterações no banco de dados.
        let updatedAluno = await alunoToUpdate.save();
        // Envia uma resposta com o status 'success' e os dados do aluno atualizado.
        res.status(200).json({ status: 'success', payload: updatedAluno });
        
    } catch (error) {
        // Se ocorrer um erro, registra o erro no console e envia uma resposta de erro.
        console.log("Erro ao atualizar aluno com mongoose: " + error);
        res.status(500).json({ error: 'Erro ao atualizar aluno' });
    }
});

// Exporta o roteador para ser utilizado em outros arquivos.
module.exports = router;