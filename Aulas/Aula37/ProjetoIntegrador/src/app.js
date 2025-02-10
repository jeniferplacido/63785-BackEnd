// Importa o módulo express para criar um servidor web
const express = require('express');
// Importa o módulo body-parser para analisar o corpo das requisições
const bodyParser = require('body-parser');
// Importa o módulo path para trabalhar com caminhos de arquivos e diretórios
const path = require('path');
// Importa o módulo express-handlebars para usar Handlebars como mecanismo de visualização
const handlebars = require('express-handlebars');
// Importa a função de conexão com o banco de dados
const connection = require('./config/db');
// Importa o módulo cookie-parser para analisar cookies
const cookieParser = require('cookie-parser');

// Cria uma instância do aplicativo express
const app = express();

// Conecta ao banco de dados MongoDB
connection();

// Configura o middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));
// Configura o middleware para analisar dados URL-encoded no corpo das requisições
app.use(bodyParser.urlencoded({ extended: false }));
// Configura o middleware para analisar cookies
app.use(cookieParser());

// Configura o mecanismo de visualização Handlebars com opções personalizadas
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main', // Define o layout padrão como 'main'
    runtimeOptions: {
        allowProtoPropertiesByDefault: true, // Permite o acesso às propriedades diretamente
        allowProtoMethodsByDefault: true, // Permite o acesso a métodos diretamente (opcional)
    }
}));
// Define o mecanismo de visualização padrão como Handlebars
app.set('view engine', 'handlebars');
// Define o diretório onde as views estão localizadas
app.set('views', path.join(__dirname, 'views'));

// Importa as rotas de autenticação definidas em outro arquivo
const authRoutes = require('./routes/authRoutes');
// Importa as rotas de produto definidas em outro arquivo
const produtoRoutes = require('./routes/produtoRoutes');
// Importa as rotas de carrinho definidas em outro arquivo
const carrinhoRoutes = require('./routes/carrinhoRoutes');

// Configura o aplicativo para usar as rotas de autenticação
app.use('/', authRoutes);
// Configura o aplicativo para usar as rotas de produto
app.use('/', produtoRoutes);
// Configura o aplicativo para usar as rotas de carrinho
app.use('/', carrinhoRoutes);

// Define a porta em que o servidor irá rodar, obtida das variáveis de ambiente
const PORT = process.env.PORT;

// Inicia o servidor na porta definida e exibe uma mensagem no console
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});