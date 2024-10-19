"use strict" // exige que a variável seja declarada

// formas de declarar a variável
var nome = "Rafael" // com var a variável estará disponivel em qualquer escopo
let nome = "Gabriel"//permite alterar o valor
const nome = "Daniel"//Não permite alterar o valor

//var
if(true){
    var nome1="Gabriel"
}
console.log("consegue acessar a variável no escopo filho : " + nome1) //Isso é um problema!

//let
if(true){
    let nome2 = "Gabriel" 
}
console.log("Não consegue acessar a variável no escopo filho " + nome2) //nesse caso vai dar erro

//const
if(true){
    const nome3 = "Daniel" 
}
console.log("Não consegue acessar a variável no escopo filho " + nome3) //nesse caso vai dar erro


