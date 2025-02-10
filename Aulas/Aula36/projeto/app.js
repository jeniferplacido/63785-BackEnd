const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const connection = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const testRoutes = require('./routes/testRoutes');
require('dotenv').config();

const app = express();

// Conectar ao MongoDB
connection();

// Configurar Handlebars
app.engine('hbs', exphbs.engine({
  extname: '.hbs',
  defaultLayout: 'main', // Define o layout principal
  layoutsDir: path.join(__dirname, 'views/layouts'), // Caminho para os layouts
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); // Define o diretório das views

// Middleware para parsear JSON e formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/', authRoutes);
app.use('/', testRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});