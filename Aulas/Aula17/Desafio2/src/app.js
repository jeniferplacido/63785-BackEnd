// Importa o módulo 'express', que é um framework para criar aplicações web no Node.js.
const express = require('express');
// Importa a função 'engine' do módulo 'express-handlebars', que é um mecanismo de template para renderizar HTML.
const { engine } = require('express-handlebars');
// Importa o módulo 'mongoose', que é uma biblioteca para modelagem de dados do MongoDB em Node.js.
const mongoose = require('mongoose');
// Importa o modelo 'Aluno' do arquivo './model/aluno'. Este modelo é usado para interagir com a coleção 'alunos' no MongoDB.
const Aluno = require('./model/aluno');

// Cria uma instância do express, que será usada para definir rotas e iniciar o servidor.
const app = express();

// Configura o mecanismo de template 'handlebars' para a aplicação Express.
app.engine('handlebars', engine({
    // Adiciona as opções de tempo de execução para permitir propriedades e métodos de protótipos.
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));
// Define 'handlebars' como o mecanismo de visualização padrão.
app.set('view engine', 'handlebars');

// Conecta ao banco de dados MongoDB usando a URL fornecida.
const connect = async () => {
try {
    await mongoose.connect('mongodb+srv://jeni:coderback@coderback.akfyg.mongodb.net/');
    // Se a conexão for bem-sucedida, exibe uma mensagem no console.
    console.log('Conectado ao MongoDB');
    let result = await Aluno.insertMany([
            {
                nome: 'Jenifer',
                sobrenome: 'Placido',
                email: 'jenifer@email.com',
                genero: 'Feminino',
                grade: 10,
                grupo:'1B'
            },
            {
                nome: 'João',
                sobrenome: 'Silva',
                email: 'joao@email.com',
                genero: 'Masculino',
                grade: 9,
                grupo:'1A'
            },
            {
                nome: 'Maria',
                sobrenome: 'Santos',
                email: 'maria@email.com',
                genero: 'Feminino',
                grade: 8,
                grupo:'1B'
            },
            {
                nome: 'Pedro',
                sobrenome: 'Souza',
                email: 'pedro@email.com',
                genero: 'Masculino',
                grade: 7,
                grupo:'1A'
            },
            {
                nome: 'Ana',
                sobrenome: 'Oliveira',
                email: 'ana@email.com',
                genero: 'Feminino',
                grade: 6,
                grupo:'1B'
            },
            {
                nome: 'Lucas',
                sobrenome: 'Ferreira',
                email: 'lucas@email.com',
                genero: 'Masculino',
                grade: 5,
                grupo:'1A'
            },
            {
                nome: 'Julia',
                sobrenome: 'Almeida',
                email: 'julia@email.com',
                genero: 'Feminino',
                grade: 4,
                grupo:'1B'
            },
            {
                nome: 'Marcos',
                sobrenome: 'Ribeiro',
                email: 'marcos@email.com',
                genero: 'Masculino',
                grade: 3,
                grupo:'1A'
            },
            {
                nome: 'Carla',
                sobrenome: 'Gomes',
                email: 'carla@email.com',
                genero: 'Feminino',
                grade: 2,
                grupo:'1B'
            }
            ]);
        console.log('Alunos inseridos com sucesso: ', result);
    } catch (err) {
        // Se ocorrer um erro na conexão, exibe uma mensagem de erro no console.
        console.error('Erro ao conectar ao MongoDB:', err);
    }
}

// Chama a função de conexão ao MongoDB
connect();
// Define uma rota GET para '/alunos'. Quando alguém acessa essa rota, a função é chamada.
app.get('/alunos', async (req, res) => {
    // Obtém o número da página a partir da query string da URL. Se não for fornecido, usa a página 1 como padrão.
    const page = req.query.page || 1;

    try {
        // Usa o modelo 'Aluno' para buscar e paginar os documentos na coleção 'alunos'.
        const alunos = await Aluno.paginate({}, { page, limit: 2 }); // Limite de 10 alunos por página

        // Renderiza a visualização 'index' com os dados dos alunos paginados.
        res.render('index', {
            alunos: alunos.docs, // Documentos dos alunos na página atual
            page: alunos.page, // Página atual
            totalPages: alunos.totalPages, // Total de páginas
            prevPage: alunos.hasPrevPage ? alunos.prevPage : null, // Página anterior, se existir
            nextPage: alunos.hasNextPage ? alunos.nextPage : null // Próxima página, se existir
        });
        console.log("Alunos:", alunos);
    } catch (err) {
        // Se ocorrer um erro ao buscar e paginar os alunos, exibe uma mensagem de erro no console e envia uma resposta de erro.
        console.error('Erro ao buscar e paginar alunos:', err);
        res.status(500).send('Erro interno do servidor');
    }
});

// Inicia o servidor para escutar na porta 8080. Quando o servidor estiver pronto, a função é chamada.
app.listen(8080, () => {
    // Exibe uma mensagem no console indicando que o servidor está rodando e em qual porta.
    console.log(`Servidor rodando na porta 8080`);
});
