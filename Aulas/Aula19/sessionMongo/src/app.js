const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const fileStore = require('session-file-store')
const MongooseStore =  require('connect-mongo')
// Criando uma instância de armazendo de sessao com session-file-store
const fileStorage = fileStore(session);

// cria uma instância do aplicativo express
const app = express();

// configura o middleware do cookie-parser
app.use(cookieParser());

// configura o middleware de express-session com armazenamento no mongoAtlas
app.use(session({
    store: MongooseStore.create({
        mongoUrl: 'mongodb+srv://sessionCoder:sessionCoder@session.qvjm1.mongodb.net/', // url de conexão com o banco de dados
        collectionName: 'sessions', // nome da coleção de sessões
        ttl: 100, // tempo de vida da sessão em segundos
    }),
    secret: 'Cod3r', // chave secreta usada para assinar a sessão
    resave: false, //Não forçar a sessão a ser salva a cada requisição
    saveUninitialized: false // Não salva a sessão se ela não foi modificada
}));

// Define uma rota GET para o caminho '/contato'
app.get('/contato', (req, res) => { 
    if(req.session.contador){
        // Se a sessão 'contador' existir, incrementa o contador
        req.session.contador++;
        res.send(`Você visistou o site ${req.session.contador} vezes`);
    }else{
        // Se é a primeira visita do usuário, defini o contador como 1
        req.session.contador = 1;
        res.send('Bem vindo pela primeira vez!');
    }
});

// Define uma rota GET para o caminho '/login'
app.get('/login', (req, res) => {
    const { username, password } = req.query;
    // Verifica se o username e password são válidos
    if(username !== 'Jeni' && password !== '123')
        return res.send('Usuário ou senha inválidos!');
    // Defini as informações do usuário na sessão
    req.session.username = username;
    req.session.admin = true;
    res.send('Login efetuado com sucesso!');
})

// middleware de autenticação
function auth(req, res, next){
    if(req.session?.username === 'Jeni' && req.session?.admin){
        return next(); // Se autenticado, passa para a próxima rota
    }else{  
        return res.send('Você não está logado, erro de autenticação!');
    }
}

// Define uma rota GET para o caminho '/privado' que usa o middleware de autenticação
app.get('/privado', auth, (req, res) => {
    res.send('Se souber o que é isso, é porque você está logado!');
});


// Define uma rota GET para o caminho '/logout'
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(!err){
            res.send('Logout efetuado com sucesso!');
        }else{
            res.send({status: 'Erro no logout', body: err});
        }
    });
});

// Inicia o servidor na porta 8080
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});