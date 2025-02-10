// Importa o modelo Carrinho definido em outro arquivo
const Carrinho = require('../models/carrinho');

// Define a função assíncrona 'getCarrinho' para obter o carrinho de um usuário
const getCarrinho = async (usuarioId) => {
    // Busca um carrinho pelo ID do usuário e popula o campo 'produtos'
    return await Carrinho.findOne({ usuarioId }).populate('produtos');
}

// Define a função assíncrona 'addCarrinho' para adicionar um produto ao carrinho de um usuário
const addCarrinho = async (usuarioId, produtoId, quantidade) => {
    // Busca um carrinho pelo ID do usuário
    let carrinho = await Carrinho.findOne({ usuarioId });
    // Se o carrinho não existir, cria um novo carrinho com o produto fornecido
    if (!carrinho) {
        carrinho = new Carrinho({ usuarioId, produtos: [{ produtoId, quantidade }] });
    } else {
        // Verifica se o produto já existe no carrinho
        const itemIndex = carrinho.produtos.findIndex(item => item.produtoId.toString() === produtoId);
        // Se o produto já existir, incrementa a quantidade
        if (itemIndex > -1) {
            carrinho.produtos[itemIndex].quantidade += quantidade;
        } else {
            // Se o produto não existir, adiciona o produto ao carrinho
            carrinho.produtos.push({ produtoId, quantidade });
        }
    }
    // Salva o carrinho no banco de dados
    await carrinho.save();
    // Retorna o carrinho atualizado
    return carrinho;
};

// Define a função assíncrona 'removeCarrinho' para remover um produto do carrinho de um usuário
const removeCarrinho = async (usuarioId, produtoId) => {
    // Busca um carrinho pelo ID do usuário
    let carrinho = await Carrinho.findOne({ usuarioId });
    // Se o carrinho não existir, lança um erro
    if (!carrinho) {
        throw new Error('Carrinho não encontrado');
    }
    // Remove o produto do carrinho filtrando pelo ID do produto
    carrinho.produtos = carrinho.produtos.filter(item => item.produtoId.toString() !== produtoId);
    // Salva o carrinho no banco de dados
    await carrinho.save();
    // Retorna o carrinho atualizado
    return carrinho;
};

// Exporta as funções 'getCarrinho', 'addCarrinho' e 'removeCarrinho' para que possam ser usadas em outros arquivos
module.exports = { getCarrinho, addCarrinho, removeCarrinho };