// Importa o módulo express para criar um servidor web
const express = require('express');

// Cria uma instância do aplicativo express
const app = express();

// Configura o middleware para analisar dados JSON no corpo das requisições
app.use(express.json());
// Configura o middleware para analisar dados URL-encoded no corpo das requisições
app.use(express.urlencoded({ extended: true }));

// Inicializa um array vazio para armazenar os usuários
let users = [];

// Define uma rota GET para o caminho '/api/user'
app.get('/api/user', (req, res) => {
    // Envia o array de usuários como resposta
    res.send(users);
});

// Define uma rota POST para o caminho '/api/user'
app.post('/api/user', (req, res) => {
    // Obtém o usuário do corpo da requisição
    let user = req.body;
    // Verifica se o usuário possui nome e sobrenome
    if (!user.nome || !user.sobrenome) {
        // Se faltar informações, envia uma resposta de erro
        return res.status(404).send({ status: "error", error: "Está faltando informações para adicionar usuário" });
    }
    // Adiciona o usuário ao array de usuários
    users.push(user);
    // Envia uma resposta de sucesso
    res.send({ status: "sucesso", message: "Usuário adicionado com sucesso" });
    // Exibe uma mensagem no console
    console.log("Usuário adicionado com sucesso: ", user);
});

// Define uma rota PUT para o caminho '/api/user/:nome', onde :nome é um parâmetro de rota
app.put('/api/user/:nome', (req, res) => {
    // Obtém o usuário do corpo da requisição
    let user = req.body;
    // Obtém o valor do parâmetro nome da URL
    let nome = req.params.nome;
    // Exibe uma mensagem no console
    console.log(`Tentando atualizar usuário com nome: ${nome}`);
    // Exibe os usuários atuais no console
    console.log(`Usuários atuais: `, users);

    // Verifica se o usuário possui nome e sobrenome
    if (!user.nome || !user.sobrenome) {
        // Se faltar informações, envia uma resposta de erro
        return res.status(404).send({ status: "error", error: "Está faltando informações para adicionar usuário" });
    }

    // Encontra o índice do usuário no array de usuários com base no nome
    let userIndex = users.findIndex(u => u.nome === nome);
    // Verifica se o usuário foi encontrado
    if (userIndex !== -1) {
        // Atualiza o usuário no índice encontrado
        users[userIndex] = { ...users[userIndex], ...user };
        // Envia uma resposta de sucesso
        res.send({ status: "sucesso", message: "Usuário atualizado com sucesso" });
        // Exibe uma mensagem no console
        console.log(`Usuário atualizado com nome: ${nome}`);
    } else {
        // Se o usuário não for encontrado, envia uma resposta de erro
        res.status(404).send({ status: "error", error: "Usuário não encontrado" });
        // Exibe uma mensagem no console
        console.log(`Usuário não encontrado com nome: ${nome}`);
    }
});

// Define uma rota DELETE para o caminho '/api/user/:nome', onde :nome é um parâmetro de rota
app.delete('/api/user/:nome', (req, res) => {
    // Obtém o valor do parâmetro nome da URL
    let nome = req.params.nome;
    // Exibe uma mensagem no console
    console.log(`Tentando deletar usuário com nome: ${nome}`);
    // Exibe os usuários atuais no console
    console.log(`Usuários atuais: `, users);

    // Encontra o índice do usuário no array de usuários com base no nome
    let userIndex = users.findIndex(u => u.nome === nome);
    // Verifica se o usuário foi encontrado
    if (userIndex !== -1) {
        // Remove o usuário do array de usuários
        users.splice(userIndex, 1);
        // Envia uma resposta de sucesso
        res.send({ status: "sucesso", message: "Usuário deletado com sucesso!" });
        // Exibe uma mensagem no console
        console.log(`Usuário deletado com nome: ${nome}`);
    } else {
        // Se o usuário não for encontrado, envia uma resposta de erro
        res.status(404).send({ status: "error", error: "Usuário não encontrado" });
        // Exibe uma mensagem no console
        console.log(`Usuário não encontrado com nome: ${nome}`);
    }
});

// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});