// Importa o serviço de carrinho definido em outro arquivo
const carrinhoService = require('../services/carrinhoService');

// Define a função assíncrona 'getCarrinho' para obter o carrinho de um usuário
const getCarrinho = async (req, res) => {
    try {
        // Chama o método 'getCarrinho' do serviço de carrinho para obter o carrinho do usuário
        const carrinho = await carrinhoService.getCarrinho(req.usuarioId);
        // Renderiza a view 'carrinho' com os dados do carrinho
        res.render('carrinho', { carrinho });
    } catch (error) {
        // Envia uma resposta de erro com status 500 se a obtenção do carrinho falhar
        res.status(500).send(error.message);
    }
};

// Define a função assíncrona 'addCarrinho' para adicionar um produto ao carrinho de um usuário
const addCarrinho = async (req, res) => {
    try {
        // Obtém os campos 'produtoId' e 'quantidade' do corpo da requisição
        const { produtoId, quantidade } = req.body;
        // Chama o método 'addCarrinho' do serviço de carrinho para adicionar o produto ao carrinho do usuário
        await carrinhoService.addCarrinho(req.usuarioId, produtoId, parseInt(quantidade));
        // Redireciona para a página do carrinho após adicionar o produto
        res.redirect('/carrinho');
    } catch (error) {
        // Envia uma resposta de erro com status 500 se a adição ao carrinho falhar
        res.status(500).send(error.message);
    }
};

// Define a função assíncrona 'removeCarrinho' para remover um produto do carrinho de um usuário
const removeCarrinho = async (req, res) => {
    try {
        // Obtém o campo 'produtoId' do corpo da requisição
        const { produtoId } = req.body;
        // Chama o método 'removeCarrinho' do serviço de carrinho para remover o produto do carrinho do usuário
        await carrinhoService.removeCarrinho(req.usuarioId, produtoId);
        // Redireciona para a página do carrinho após remover o produto
        res.redirect('/carrinho');
    } catch (error) {
        // Envia uma resposta de erro com status 500 se a remoção do carrinho falhar
        res.status(500).send(error.message);
    }
};

// Exporta as funções 'getCarrinho', 'addCarrinho' e 'removeCarrinho' para que possam ser usadas em outros arquivos
module.exports = { getCarrinho, addCarrinho, removeCarrinho };