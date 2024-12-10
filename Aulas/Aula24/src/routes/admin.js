// Importa o módulo Router definido em outro arquivo
const Router = require('./router');
// Importa o modelo Admin definido em outro arquivo
const Admin = require('./../model/Admin');
// Importa o módulo passport para autenticação
const passport = require('passport');
// Importa o módulo jsonwebtoken para gerar tokens JWT
const jwt = require('jsonwebtoken');

// Define a classe AdminRouter que estende a classe Router
class AdminRouter extends Router {
    // Construtor da classe AdminRouter
    constructor() {
        // Chama o construtor da classe pai (Router)
        super();
    }

    // Método init para inicializar as rotas
    init() {
        // Define uma rota GET para renderizar o formulário de cadastro
        this.router.get('/cadastro', (req, res) => {
            // Renderiza a view 'admin' para o formulário de cadastro
            res.render('admin');
        });

        // Define uma rota POST para cadastrar um novo admin
        this.router.post('/registro', async (req, res) => {
            try {
                // Obtém os campos do corpo da requisição
                const { nome, sobrenome, email, senha } = req.body;
                // Cria um novo documento de admin com os dados fornecidos
                const newAdmin = new Admin({ nome, sobrenome, email, senha });
                // Salva o novo admin no banco de dados
                await newAdmin.save();
                // Redireciona para a página de login após o registro
                res.redirect('/admin/login');
            } catch (error) {
                // Renderiza a view 'admin' com uma mensagem de erro se a criação falhar
                res.status(500).render('admin', { errorMessage: 'Erro ao registrar admin' });
            }
        });

        // Define uma rota GET para renderizar a página de login
        this.router.get('/login', (req, res) => {
            // Renderiza a view 'login' para a página de login
            res.render('login');
        });

        // Define uma rota POST para autenticar um admin
        this.router.post('/login', passport.authenticate('admin', { session: false }), (req, res) => {
            // Cria um payload com os dados do usuário autenticado
            const payload = {
                sub: req.user._id, // ID do usuário
                email: req.user.email, // Email do usuário
                role: req.user.role, // Role do usuário
            };
            // Gera um token JWT com o payload e uma chave secreta, com expiração de 1 hora
            const token = jwt.sign(payload, 'seu-segredo', { expiresIn: '1h' });
            // Retorna o token como resposta em formato JSON
            res.json({ token });
        });

        // Define uma rota GET para listar todos os admins
        this.router.get('/admins', async (req, res) => {
            try {
                // Busca todos os documentos na coleção de admins
                const admins = await Admin.find();
                // Retorna os admins encontrados como resposta em formato JSON
                res.json(admins);
            } catch (error) {
                // Envia uma resposta de erro com status 500 se a busca falhar
                res.status(500).send('Erro ao listar administradores');
            }
        });
    }
}

// Exporta a classe AdminRouter para que possa ser usada em outros arquivos
module.exports = AdminRouter;