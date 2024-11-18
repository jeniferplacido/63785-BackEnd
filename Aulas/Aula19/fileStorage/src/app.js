const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const fileStore = require('session-file-store')

// Criando uma instância de armazendo de sessao com session-file-store
const fileStorage = fileStore(session);

const app = express();

app.use(cookieParser());

app.use(session({

    store: new fileStorage({
        path: './sessions',
        ttl: 100,
        retries: 0
    }),
    secret: 'Cod3r',
    resave: false,
    saveUninitialized: false
}));

app.get('/contato', (req, res) => {
    if(req.session.contador){
        req.session.contador++;
        res.send(`Você visistou o site ${req.session.contador} vezes`);
    }else{
        req.session.contador = 1;
        res.send('Bem vindo pela primeira vez!');
    }
});

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});