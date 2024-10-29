// Importa o módulo express para criar um roteador
const express = require('express');

// Importa o modelo de usuários definido em outro arquivo
const usersModel = require('../models/users.model');

// Cria uma instância do roteador express
const router = express.Router();

// Define uma rota GET para o caminho raiz '/'
router.get('/', async (req, res) => {
    try {
        // Usa o modelo de usuários para buscar todos os documentos na coleção
        let usuarios = await usersModel.find();
        // Envia os usuários encontrados como resposta em formato JSON
        res.json({ result: 'sucesso', payload: usuarios });
    } catch (error) {
        // Exibe uma mensagem de erro no console se a busca falhar
        console.log("Não foi possível buscar usuarios com mongoose: ", error);
        // Envia uma resposta de erro com status 500
        res.status(500).send({ result: 'erro', error: 'Erro ao buscar usuarios' });
    }
});

// Define uma rota POST para o caminho raiz '/'
router.post('/', async (req, res) => {
    try {
        // Obtém os campos nome, sobrenome e email do corpo da requisição
        let { nome, sobrenome, email } = req.body;
        // Verifica se todos os campos obrigatórios estão presentes
        if (!nome || !sobrenome || !email) {
            // Se faltar algum campo, envia uma resposta de erro com status 400
            return res.status(400).send({ result: 'erro', error: 'Nome, sobrenome e email sao obrigatorios' });
        }
        // Usa o modelo de usuários para criar um novo documento na coleção
        let result = await usersModel.create({ nome, sobrenome, email });
        // Envia o usuário criado como resposta em formato JSON com status 201
        res.status(201).json({ result: 'sucesso', payload: result });
    } catch (error) {
        // Exibe uma mensagem de erro no console se a criação falhar
        console.log("Não foi possível adicionar usuarios com mongoose: ", error);
        // Envia uma resposta de erro com status 500
        res.status(500).send({ result: 'erro', error: 'Erro ao adicionar usuario' });
    }
});

// Define uma rota PUT para o caminho '/:id', onde :id é um parâmetro de rota
router.put('/:id', async (req, res) => {
    try {
        // Obtém o valor do parâmetro id da URL
        let { id } = req.params;
        // Obtém os campos nome, sobrenome e email do corpo da requisição
        let { nome, sobrenome, email } = req.body;
        // Usa o modelo de usuários para buscar um documento pelo ID
        let usuarioUpdate = await usersModel.findById(id);
        // Verifica se o usuário foi encontrado
        if (!usuarioUpdate) {
            // Se o usuário não for encontrado, envia uma resposta de erro com status 404
            return res.status(404).send({ result: 'erro', error: 'Usuario nao encontrado' });
        }

        // Atualiza os campos do usuário com os novos valores ou mantém os valores antigos
        usuarioUpdate.nome = nome || usuarioUpdate.nome;
        usuarioUpdate.sobrenome = sobrenome || usuarioUpdate.sobrenome;
        usuarioUpdate.email = email || usuarioUpdate.email;

        // Salva as alterações no banco de dados
        let atualizarUsuario = await usuarioUpdate.save();
        // Envia o usuário atualizado como resposta em formato JSON com status 200
        res.status(200).json({ result: 'sucesso', payload: atualizarUsuario });
    } catch (error) {
        // Exibe uma mensagem de erro no console se a atualização falhar
        console.log("Não foi possível atualizar usuarios com mongoose: ", error);
        // Envia uma resposta de erro com status 500
        res.status(500).send({ result: 'erro', error: 'Erro ao atualizar usuario' });
    }
});

// Exporta o roteador para que possa ser usado em outros arquivos
module.exports = router;