// Importa o módulo express para criar um servidor web
const express = require('express');
// Importa o módulo express-session para gerenciar sessões
const session = require('express-session');

// Cria uma instância do aplicativo express
const app = express();

// Configura o middleware de sessão
app.use(session({
    secret: 'C0d3r', // Chave secreta usada para assinar o ID da sessão
    resave: false, // Não salva a sessão se ela não foi modificada
    saveUninitialized: true // Salva a sessão mesmo que ela não tenha sido inicializada
}));

// Define uma rota GET para o caminho '/session'
app.get('/session', (req, res) => {
    // Verifica se a sessão tem um contador
    if(req.session.contador){
        // Incrementa o contador
        req.session.contador++;
        // Envia uma resposta com o número de visitas
        res.send(`Você visitou o site ${req.session.contador} vezes`);
    } else {
        // Inicializa o contador na sessão
        req.session.contador = 1;
        // Envia uma resposta indicando que é a primeira visita
        res.send('Primeira vez visitando o site');
    }
});

// Define uma rota GET para o caminho '/login'
app.get('/login', (req, res) => {
    // Obtém os parâmetros username e password da query string
    const { username, password } = req.query;
    // Verifica se o username e password são válidos
    if(username !== 'Jeni' && password !== '123')
        // Se inválidos, envia uma resposta de erro
        return res.send('Usuário ou senha inválidos!');
    // Armazena o username na sessão
    req.session.username = username;
    // Define a flag admin na sessão como true
    req.session.admin = true;
    // Envia uma resposta de sucesso
    res.send('Login efetuado com sucesso!');
});

// Define uma rota GET para o caminho '/privado' que usa o middleware de autenticação
app.get('/privado', auth, (req, res) => {
    // Envia uma resposta indicando que o usuário está logado
    res.send('Se souber o que é isso, é porque você está logado!');
});

// Define uma rota GET para o caminho '/logout'
app.get('/logout', (req, res) => {
    // Destroi a sessão
    req.session.destroy(err => {
        // Verifica se houve erro ao destruir a sessão
        if (!err)
            // Se não houve erro, envia uma resposta de sucesso
            res.send('Logout efetuado com sucesso!');
        else 
            // Se houve erro, envia uma resposta de erro
            res.send({ status: 'Erro no logout', body: err });
    });
});

// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});

// Define uma função de middleware de autenticação
function auth(req, res, next) {
    // Verifica se o usuário está logado e é admin
    if(req.session?.username === 'Jeni' && req.session?.admin) {
        // Se sim, chama a próxima função na cadeia de middleware
        return next();
    } else {
        // Se não, envia uma resposta de erro de autenticação
        return res.send('Erro de autenticação');
    }
}