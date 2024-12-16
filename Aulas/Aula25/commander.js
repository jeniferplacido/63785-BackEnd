const commander = require("commander");

const programa = new commander.Command();


programa
    .option('-d', 'Váriável para debug', false)
    .option ('-p <porta>', 'Porta do servidor', '8080')
    .option('--mode <mode>', 'Modo de trabalho', 'produção')
    .requiredOption('-u <user>', 'Usuário utilizando o aplicativo', 'Nenhum usuário declarado')
    .option('-1, --letters [letters...]', 'Letras específicas')

    programa.parse(process.argv);

console.log('Opções:', programa.opts());
console.log('Remenejando argumentos: ', programa.args);