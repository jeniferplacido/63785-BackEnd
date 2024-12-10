// Importando os módulos necessários
const express = require('express'); // Express é um framework para construir aplicações web em Node.js
const passport = require('passport'); // Passport é um middleware de autenticação para Node.js
const Produto = require('../model/Produto'); // Importando o modelo de Produto do diretório 'model'
const { autorizacao } = require('../middlewares/auth'); // Importando o middleware de autorização do diretório 'middlewares'

// Definindo a classe ProdutosRouter
class ProdutosRouter {
    // Construtor da classe
    constructor() {
        this.router = express.Router(); // Inicializando o roteador do Express
        this.init(); // Chamando o método init
    }

    // Método para retornar o roteador
    getRouter() {
        return this.router; // Retorna o roteador do Express
    }

    // Método para inicializar as rotas
    init() {
        // Rota para adicionar um novo produto
        this.router.post('/add', async (req, res) => { // Define uma rota POST para '/add'
            try {
                console.log(autorizacao) // Loga o middleware de autorização
                const { nome, descricao, preco } = req.body; // Extrai nome, descrição e preço do corpo da requisição
                const newProduct = new Produto({ nome, descricao, preco }); // Cria um novo produto com os dados extraídos
                await newProduct.save(); // Salva o novo produto no banco de dados
                res.send('Produto adicionado com sucesso'); // Envia uma resposta de sucesso
            } catch (error) {
                res.status(500).send('Erro ao adicionar produto'); // Em caso de erro, envia uma resposta de erro
            }
        });

        // Rota para listar todos os produtos
        this.router.get('/list', async (req, res) => { // Define uma rota GET para '/list'
            try {
                const products = await Produto.find(); // Busca todos os produtos no banco de dados
                res.json(products); // Envia a lista de produtos como resposta
            } catch (error) {
                res.status(500).send('Erro ao obter lista de produtos'); // Em caso de erro, envia uma resposta de erro
            }
        });
        this.router.get('/home', async (req, res) => {
            try {
                const products = await Produto.find(); // Busca todos os produtos no banco de dados
                res.render('home', { products }); // Renderiza a view 'home' com os produtos
            } catch (error) {
                res.status(500).send('Erro ao carregar a página inicial');
            }
        });
        this.router.get('/carrinho', passport.authenticate('jwt', { session: false }), async (req, res) => {
            try {
                const userCart = await Carrinho.findOne({ _id: req.user.carrinho }).populate('itens.produtoId'); // Busca o carrinho do usuário autenticado
                res.render('carrinho', {
                    cartItems: userCart ? userCart.itens : [],
                    total: userCart ? userCart.total : 0,
                }); // Renderiza a view do carrinho
            } catch (error) {
                res.status(500).send('Erro ao carregar o carrinho');
            }
        });
        
        this.router.post('/carrinho/add/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
            try {
                const produtoId = req.params.id;
                let carrinho = await Carrinho.findOne({ _id: req.user.carrinho });
        
                if (!carrinho) {
                    // Se o carrinho não existir, crie um novo
                    carrinho = new Carrinho({ itens: [], total: 0 });
                    req.user.carrinho = carrinho._id;
                    await req.user.save();
                }
        
                const itemIndex = carrinho.itens.findIndex(item => item.produtoId.toString() === produtoId);
        
                if (itemIndex > -1) {
                    carrinho.itens[itemIndex].quantidade += 1;
                } else {
                    carrinho.itens.push({ produtoId, quantidade: 1 });
                }
        
                const produto = await Produto.findById(produtoId);
                carrinho.total += produto.preco;
        
                await carrinho.save();
                res.redirect('/api/carrinho'); // Redireciona para o carrinho
            } catch (error) {
                res.status(500).send('Erro ao adicionar item ao carrinho');
            }
        });
        
        this.router.post('/carrinho/remove/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
            try {
                const produtoId = req.params.id;
                const carrinho = await Carrinho.findOne({ _id: req.user.carrinho });
        
                if (carrinho) {
                    const itemIndex = carrinho.itens.findIndex(item => item.produtoId.toString() === produtoId);
        
                    if (itemIndex > -1) {
                        const item = carrinho.itens[itemIndex];
                        carrinho.total -= item.quantidade * (await Produto.findById(produtoId)).preco;
                        carrinho.itens.splice(itemIndex, 1); // Remove o item do carrinho
                    }
        
                    await carrinho.save();
                }
        
                res.redirect('/api/carrinho'); // Redireciona para o carrinho
            } catch (error) {
                res.status(500).send('Erro ao remover item do carrinho');
            }
        });
        
        
    }
}


// Exportando a classe ProdutosRouter
module.exports = ProdutosRouter;