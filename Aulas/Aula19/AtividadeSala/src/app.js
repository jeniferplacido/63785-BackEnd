const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.router');
const sessionRouter = require('./routes/session.router');



const app = express();

app.use(cookieParser());
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://sessionCoder:sessionCoder@session.qvjm1.mongodb.net/',
        ttl: 15
     }),
     secret: 'Cod3r',
     resave: false,
        saveUninitialized: false
}));
// Rotas

app.use('/', userRouter);
app.use('/', sessionRouter);

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://sessionCoder:sessionCoder@session.qvjm1.mongodb.net/')
    .then(() => console.log('Conectado ao MongoDB com sucesso!'))
    .catch(error => console.log('Erro ao conectar ao MongoDB:', error));

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});