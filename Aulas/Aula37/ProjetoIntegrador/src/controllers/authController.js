// Importa o serviço de autenticação definido em outro arquivo
const authService = require('../services/authService');

// Define a função assíncrona 'registro' para registrar um novo usuário
const registro = async (req, res) => {
    try {
        // Obtém os campos 'nome', 'sobrenome', 'email' e 'senha' do corpo da requisição
        const { nome, sobrenome, email, senha } = req.body;
        // Chama o método 'registro' do serviço de autenticação para registrar o usuário
        await authService.registro(nome, sobrenome, email, senha);
        // Redireciona para a página de login após o registro
        res.redirect('/login');
        // Exibe uma mensagem no console indicando que o usuário foi registrado com sucesso
        console.log('Usuário registrado com sucesso');
    } catch (error) {
        // Envia uma resposta de erro com status 500 se o registro falhar
        res.status(500).send({ error: error.message });
    }
};

// Define a função assíncrona 'login' para autenticar um usuário
const login = async (req, res) => {
    try {
        // Obtém os campos 'email' e 'senha' do corpo da requisição
        const { email, senha } = req.body;
        // Chama o método 'login' do serviço de autenticação para autenticar o usuário e obter um token
        const token = await authService.login(email, senha);
        // Define um cookie 'token' com o valor do token obtido
        res.cookie('token', token);
        // Redireciona para a página inicial após o login
        res.redirect('/home');
    } catch (error) {
        // Exibe uma mensagem de erro no console se o login falhar
        console.error('Erro ao fazer login', error.message);
        // Envia uma resposta de erro com status 500 se o login falhar
        res.status(500).send({ error: error.message });
    }
};

// Exporta as funções 'registro' e 'login' para que possam ser usadas em outros arquivos
module.exports = { registro, login };