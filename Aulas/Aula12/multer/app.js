// Importando os módulos necessários
const express = require('express'); // Importa o framework Express
const multer = require('multer'); // Importa o middleware Multer para manipulação de arquivos
const path = require('path'); // Importa o módulo path para lidar com caminhos de arquivos
const bodyParser = require('body-parser'); // Importa body-parser para manipular dados do corpo da requisição
const fs = require('fs'); // Importa o módulo de sistema de arquivos para salvar dados

// Inicializa o aplicativo Express
const app = express();

// Configura o body-parser para lidar com dados em JSON e form-data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Função para gerar uma data legível no formato YYYY-MM-DD
function getFormattedDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Configuração do destino e nome do arquivo para o upload
const storage = multer.diskStorage({
    // Define o diretório de destino dos arquivos enviados
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    // Define o nome do arquivo após o upload
    filename: function (req, file, cb) {
        const { nome, sobrenome } = req.body; // Pega o nome e sobrenome do corpo da requisição
        const originalName = file.originalname; // Nome original do arquivo
        const fileExtension = path.extname(originalName); // Extensão do arquivo (por exemplo, .jpg)
        const formattedDate = getFormattedDate(); // Pega a data formatada (YYYY-MM-DD)

        // Nomeia o arquivo com nome, sobrenome e data, ex: Bob_Esponja_2023-10-21_image.jpg
        const newFileName = `${nome}_${sobrenome}_${formattedDate}${fileExtension}`;
        cb(null, newFileName);
    }
});

// Configura a instância do Multer com a estratégia de armazenamento definida anteriormente
const upload = multer({ storage: storage });

// Função auxiliar para salvar os dados do usuário em um arquivo JSON
function salvarDadosUsuario(usuario) {
    // Lê o arquivo existente ou cria um novo array vazio se o arquivo não existir
    let usuarios = [];
    if (fs.existsSync('usuarios.json')) {
        const data = fs.readFileSync('usuarios.json');
        usuarios = JSON.parse(data);
    }

    // Adiciona o novo usuário ao array
    usuarios.push(usuario);

    // Salva o array atualizado no arquivo JSON
    fs.writeFileSync('usuarios.json', JSON.stringify(usuarios, null, 2));
}

// Rota para lidar com o upload de arquivo e salvar nome e sobrenome do usuário
app.post('/upload', upload.single('file'), function (req, res) {
    const { nome, sobrenome } = req.body;

    if (!req.file) {
        return res.status(400).send('Nenhuma imagem enviada.');
    }

    const usuario = {
        nome: nome,
        sobrenome: sobrenome,
        imagem: req.file.filename // Nome do arquivo armazenado
    };

    // Salva os dados do usuário em um arquivo JSON
    salvarDadosUsuario(usuario);

    res.send(`Usuário ${nome} ${sobrenome} cadastrado com sucesso! Imagem: ${req.file.filename}`);
});

// Iniciando o servidor na porta 8080 e exibindo mensagem no console
app.listen(8080, function () {
    console.log('Servidor rodando na porta 8080');
});
