function listNumbers(...numbers){

    const tipo = numbers.map(valor => typeof valor);

    const invalidos = tipo.filter(valor => valor !== 'number');

    if(invalidos.length > 0){
        const formatar = tipo.map(type => (type === 'number') ? type: `${type}`);

        console.error(`Parametros invalidos : [${formatar.join(', ')}]`);
        process.exitCode = -4;
}else{
    console.log('Números:', numbers);

    for( let number of numbers){
        console.log('Número:', number);
    }
}
}

process.on('exit', (code) =>{
    if(code === 4){
        console.log('Processo encerrado devido a argumentasção inválida em uma função');}})

        listNumbers(1, 2, 'a', true)