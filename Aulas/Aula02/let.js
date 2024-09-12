let globalVar = "Variável Global";

function localVar(){

    let localVar = "Variável Local";
    console.log(localVar);
    console.log(globalVar);
}
console.log(globalVar);
console.log(localVar);

localVar()