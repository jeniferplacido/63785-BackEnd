const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();


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
    const token = 'coderToken'
    res.cookie('token', token, { httpOnly: true });
    res.send('Login efetuado com sucesso');
});

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});