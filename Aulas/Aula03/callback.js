// Define uma função buscarEquipamentos que recebe uma função de callback como argumento
function buscarEquipamentos(callback){
    // Simula uma operação assíncrona usando setTimeout
    setTimeout(function(){
        // Exibe uma mensagem no console
        console.log('Buscando os equipamentos...')
        // Exibe outra mensagem no console
        console.log('Equipamentos encontrados')
        // Chama a função de callback
        callback();
    }, 2500); // Atraso de 2500 milissegundos (2,5 segundos)
}

// Define uma função escalarMontanha
function escalarMontanha(){
    // Exibe uma mensagem no console
    console.log('Você escalou a montanha....')
}

// Chama buscarEquipamentos e passa uma função que chama escalarMontanha como callback
buscarEquipamentos(function(){
    escalarMontanha();
})

// Define uma função chamada encontrarChave que recebe uma função de callback como argumento
function encontrarChave(callback){
    // Simula uma operação assíncrona usando setTimeout
    setTimeout(function(){
        // Exibe uma mensagem no console
        console.log('Encontrando a chave...')
        // Exibe outra mensagem no console
        console.log('Chave encontrada')
        // Chama a função de callback
        callback();
    }, 2500); // Atraso de 2500 milissegundos (2,5 segundos)
}

// Define uma função chamada abrirPorta
function abrirPorta(){
    // Exibe uma mensagem no console
    console.log('Abrindo a porta...')
}

// Chama encontrarChave e passa uma função que chama abrirPorta como callback
encontrarChave(function(){
    abrirPorta();
})

// Define uma função chamada construirPonte que recebe uma função de callback como argumento
function construirPonte(callback){
    // Simula uma operação assíncrona usando setTimeout
    setTimeout(function(){
        // Exibe uma mensagem no console
        console.log('Construindo a ponte...')
        // Exibe outra mensagem no console
        console.log('Ponte construída')
        // Chama a função de callback
        callback();
    }, 3500); // Atraso de 3500 milissegundos (3,5 segundos)
}

// Define uma função chamada atravessarRio
function atravessarRio(){
    // Exibe uma mensagem no console
    console.log('Travessando o rio...')
}

// Chama construirPonte e passa uma função que chama atravessarRio como callback
construirPonte(function(){
    atravessarRio();
})

// Define uma função chamada escalarMontanha (isso redefine a função escalarMontanha anterior)
function escalarMontanha(){
    // Exibe uma mensagem no console
    console.log('Você escalou a montanha....')
}

// Define uma função chamada encontrarTesouro
function encontrarTesouro(){
    // Exibe uma mensagem no console
    console.log('Você encontrou o tesouro!!!')
}   

// Chama escalarMontanha
escalarMontanha();
// Chama encontrarTesouro
encontrarTesouro();