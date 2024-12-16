process.on('exit', (code) =>{
    console.log('Este processo será executado imediatamente após a saída do processo Node.js')
})

process.on('uncaughtException', exception =>{
    console.log('Este processo será executado imediatamente quando ocorrer uma exceção não tratada.')

})

process.on('message', message =>{
    console.log('Este processo será executado imediatamente após receber a mensagem de outro processo')
})

console()