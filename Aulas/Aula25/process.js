
// rodar node process.js 1 2 3 4 5
console.log(process.argv.slice(2));
 // rodar o comando node process.js a 2 -a
console.log(process.argv.slice(2));
//rodar o comando node process.js para retornar um array vazio
console.log(process.argv.slice(2));

