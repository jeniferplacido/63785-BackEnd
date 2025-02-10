// Importa o modelo Usuario definido em outro arquivo
const Usuario = require('../models/Usuario');
// Importa o módulo bcrypt para hash de senhas
const bcrypt = require('bcrypt');
// Importa o módulo jsonwebtoken para gerar tokens JWT
const jwt = require('jsonwebtoken');

// Define a função assíncrona 'registro' para registrar um novo usuário
const registro = async (nome, sobrenome, email, senha) => {
    // Gera um hash da senha fornecida
    const hashSenha = await bcrypt.hash(senha, 10);
    // Cria um novo documento de usuário com os dados fornecidos e a senha hash
    const usuario = new Usuario({ nome, sobrenome, email, senha: hashSenha });
    // Salva o novo usuário no banco de dados
    await usuario.save();
    // Retorna o usuário registrado
    return usuario;
};

// Define a função assíncrona 'login' para autenticar um usuário
const login = async (email, senha) => {
    // Busca um usuário pelo email fornecido
    const usuario = await Usuario.findOne({ email });
    // Se o usuário não for encontrado, lança um erro
    if (!usuario) {
        throw new Error('Usuário não encontrado');
    }
    // Compara a senha fornecida com a senha hash armazenada no banco de dados
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    // Se a senha for inválida, lança um erro
    if (!senhaValida) {
        throw new Error('Senha inválida');
    }
    // Gera um token JWT com o ID do usuário e uma chave secreta, com expiração de 1 hora
    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // Retorna o token gerado
    return token;
};

// Exporta as funções 'registro' e 'login' para que possam ser usadas em outros arquivos
module.exports = { registro, login };