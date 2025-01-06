const fs = require('fs');
const path = require('path');

const caminhoArquivo = path.join(__dirname, '../data/brinquedos.json');

// Função para carregar brinquedos do arquivo
const carregarBrinquedos = () => {
    if (!fs.existsSync(brinquedos.json)) return [];
    const dados = fs.readFileSync(brinquedos.json, 'utf-8');
    return JSON.parse(dados);
};

// Função para salvar brinquedos no arquivo
const salvarBrinquedos = (brinquedos) => {
    fs.writeFileSync(brinquedos.json, JSON.stringify(brinquedos, null, 2));
};

// Controlador para obter todos os brinquedos
exports.obterTodosBrinquedos = (req, res) => {
    const brinquedos = carregarBrinquedos();
    res.json(brinquedos);
};

// Controlador para adicionar um novo brinquedo
exports.adicionarBrinquedo = (req, res) => {
    const brinquedos = carregarBrinquedos();
    const novoBrinquedo = { id: Date.now(), ...req.body };
    brinquedos.push(novoBrinquedo);
    salvarBrinquedos(brinquedos);
    res.status(201).json(novoBrinquedo);
};

// Controlador para excluir um brinquedo pelo ID
exports.excluirBrinquedo = (req, res) => {
    const brinquedos = carregarBrinquedos();
    const brinquedosAtualizados = brinquedos.filter(
        (brinquedo) => brinquedo.id !== parseInt(req.params.id)
    );
    salvarBrinquedos(brinquedosAtualizados);
    res.json({ mensagem: 'Brinquedo removido com sucesso!' });
};
