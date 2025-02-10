// Importa o modelo Produto definido em outro arquivo
const Produto = require('../models/Produto');

// Define a função assíncrona 'getProdutos' para obter todos os produtos
const getProdutos = async (req, res) => {
    try {
        // Usa o modelo Produto para buscar todos os documentos na coleção de produtos
        const produtos = await Produto.find();
        // Renderiza a view 'home' com os dados dos produtos
        res.render('home', { produtos });
    } catch (error) {
        // Envia uma resposta de erro com status 500 se a obtenção dos produtos falhar
        res.status(500).send(error.message);
    }
}

// Exporta a função 'getProdutos' para que possa ser usada em outros arquivos
module.exports = { getProdutos };