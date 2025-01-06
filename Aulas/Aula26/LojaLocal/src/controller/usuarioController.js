const fs = require('fs');
const path = require('path');

// Caminho para o arquivo JSON de usuários
const caminhoArquivo = path.join(__dirname, '../data/usuarios.json');

// Função para carregar os usuários do arquivo
const carregarUsuarios = () => {
    if (!fs.existsSync(caminhoArquivo)) return [];
    const dados = fs.readFileSync(caminhoArquivo, 'utf-8');
    return JSON.parse(dados);
};

// Função para salvar os usuários no arquivo
const salvarUsuarios = (usuarios) => {
    fs.writeFileSync(caminhoArquivo, JSON.stringify(usuarios, null, 2));
};

// Controlador para obter todos os usuários
exports.obterTodosUsuarios = (req, res) => {
    const usuarios = carregarUsuarios();
    res.json(usuarios);
};

// Controlador para adicionar um novo usuário
exports.adicionarUsuario = (req, res) => {
    const usuarios = carregarUsuarios();
    const novoUsuario = { id: Date.now(), ...req.body };
    usuarios.push(novoUsuario);
    salvarUsuarios(usuarios);
    res.status(201).json(novoUsuario);
};

// Controlador para excluir um usuário
exports.excluirUsuario = (req, res) => {
    const usuarios = carregarUsuarios();
    const usuariosAtualizados = usuarios.filter(
        (usuario) => usuario.id !== parseInt(req.params.id)
    );
    salvarUsuarios(usuariosAtualizados);
    res.json({ mensagem: 'Usuário removido com sucesso!' });
};
