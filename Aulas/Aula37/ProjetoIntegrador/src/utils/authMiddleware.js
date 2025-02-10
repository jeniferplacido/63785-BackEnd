// Importa o módulo jsonwebtoken para verificar tokens JWT
const jwt = require('jsonwebtoken');
// Importa o modelo Usuario definido em outro arquivo
const Usuario = require('../models/Usuario');

// Define o middleware de autenticação
const authMiddleware = async (req, res, next) => {
    // Obtém o token dos cookies da requisição
    const token = req.cookies.token;
    try {
        // Verifica se o token não foi fornecido
        if (!token) {
            throw new Error('Token não fornecido');
        }
        // Verifica e decodifica o token usando a chave secreta
        const decod = jwt.verify(token, process.env.JWT_SECRET);
        // Busca o usuário pelo ID decodificado do token
        const usuario = await Usuario.findById(decod.id);
        // Verifica se o usuário não foi encontrado
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }
        // Armazena o ID do usuário na requisição para uso posterior
        req.usuarioId = usuario._id;
        // Chama a próxima função na cadeia de middleware
        next();
    } catch (err) {
        // Envia uma resposta de erro com status 401 se a autenticação falhar
        res.status(401).send({ error: 'Autenticação falhou' });
    }
};

// Exporta o middleware de autenticação para que possa ser usado em outros arquivos
module.exports = authMiddleware;