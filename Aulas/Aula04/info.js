// Importa o módulo fs (file system) para manipulação de arquivos
const fs = require('fs');

// Define a função lerPackageJson que retorna uma Promise
const lerPackageJson = () => {
    return new Promise((resolve, reject) => {
        // Lê o arquivo package.json
        fs.readFile('./package.json', 'utf-8', (err, data) => {
            // Verifica se ocorreu um erro ao ler o arquivo
            if (err) {
                // Rejeita a Promise com o erro
                reject(err)
            } else {
                // Resolve a Promise com os dados do arquivo
                resolve(data)
            }
        })
    })
}

// Define a função assíncrona executarPrograma
const executarPrograma = async () => {
    try {
        // Aguarda a leitura do arquivo package.json
        const lerArquivo = await lerPackageJson();
        // Converte o conteúdo do arquivo de JSON para um objeto JavaScript
        const conteudo = JSON.parse(lerArquivo);

        // Calcula o tamanho do conteúdo do arquivo em bytes
        const tamanho = Buffer.byteLength(lerArquivo, 'utf-8');

        // Cria um objeto info com o conteúdo do arquivo em string, objeto e tamanho
        const info = {
            conteudoStr: lerArquivo,
            conteudoObj: conteudo,
            size: tamanho
        }

        // Exibe o objeto info no console
        console.log(info)
    } catch (err) {
        // Exibe uma mensagem de erro no console
        console.error('Erro ao ler arquivo', err)
    }
}

// Chama a função executarPrograma
executarPrograma()