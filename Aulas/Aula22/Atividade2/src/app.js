const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const initializePassport = require('./config/passport.config');
const passportCall = require('./utils');

const app = express();

initializePassport();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const usuarios = [
    {id: 1, email: 'jeni@email.com', senha: '1234'},
    {id: 2, email: 'jenifer@email.com', senha: '12345'}
];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const user = usuarios.find(user => user.email === email);
    if (!user) {
        res.status(401).send('Usuario nao encontrado');
    } 
    if(user.senha !== senha){
        return res.status(401).send('Senha incorreta');
    }

    let token = jwt.sign({ id: user.id, email: user.email}, 'coderToken', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.send('Login efetuado com sucesso');
});

app.get('/current', passportCall('jwt'), (req, res) => {

    try{
        const usuarioReq = req.user;
        if(!usuarioReq){
            return res.status(401).send('Usuario nao autenticado');
        }
        const user = URLSearchParams.find(usuario => usuario.email === usuarioReq.email);
        if(!user){
            return res.status(401).send('Usuario nao encontrado');
        }
        res.send(user);
    }catch(error){
        console.error('Erro ao logar usuário', error);
        res.status(500).send('Erro ao logar usuário');
    }
});

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});