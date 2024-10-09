// Importa o módulo 'express' para criar o servidor web
const express = require('express');

// Importa o módulo 'express-handlebars' para usar o Handlebars como template engine
const handlebars = require('express-handlebars');

// Importa o módulo 'utils.js' para obter o diretório base do projeto
const _dirname = require('./utils');

// Cria uma instância do aplicativo Express
const app = express();

// Configura o Handlebars como template engine
app.engine('handlebars', handlebars.engine());

// Define o diretório onde estão os templates Handlebars
app.set('views', _dirname + '/views');

// Define o template engine a ser usado (no caso, Handlebars)
app.set('view engine', 'handlebars');

// Configura o servidor para servir arquivos estáticos na pasta 'public' (CSS, JS, imagens, etc.)
app.use(express.static(_dirname + '/public'));

// Define uma rota para a raiz do servidor ('/')
app.get('/', (req, res) => {
    // Define um array de objetos 'usuarios' com informações (nome e sobrenome)
    const usuarios = [
        {
            nome: 'Jeni',
            sobrenome: 'Placido',
            idade: 34,
            email: 'jeni@example.com',
            telefone: '123456789'
        },
        {
            nome: 'Alessandra',
            sobrenome: 'Rezende',
            idade: 19,
            email: 'ale@example.com',
            telefone: '123-456-7890'
        },
        {
            nome: 'Paulo',
            sobrenome: 'Azambuja',
            idade: 18,
            email: 'paulo@example.com',
            telefone: '987-654-3210'
        },
        {
            nome: 'Michel',
            sobrenome: 'Nantes',
            idade: 18,
            email: 'michel@example.com',
            telefone: '111-222-3333'
        },
        {
            nome: 'Fellype',
            sobrenome: 'Bardales',
            idade: 18,
            email: 'fellype@example.com',
            telefone: '444-555-6666'
        },
        {
            nome: 'Back',
            sobrenome: 'End',
            idade: 25,
            email: 'backEnd@example.com',
            telefone: '777-888-9999'
        }
    ];

    // Calcula um número aleatório entre 0 e o tamanho do array 'users' - 1
    const randomIndex = Math.floor(Math.random() * usuarios.length);
    // Acessa o elemento do array 'users' no índice aleatório gerado anteriormente e armazena esse usuário na variável 'randomUser'
    const randomUsuario = usuarios[randomIndex];

    // Renderiza o template 'user.handlebars' e passa o usuário selecionado para o template
    res.render('usuarios', { usuarios: randomUsuario }); // Usamos a chave 'user' para corresponder ao nome da variável no template
});

// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});