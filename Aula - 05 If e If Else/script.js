//If
let num = 11

if (num > 10){
    console.log("Numeral maior  que 10")
}
console.log("fim do programa")
//---------------------------------------------------------------------------------

//If Else
let numero = 11

if (numero > 10){
    console.log("Numeral maior que 10")
}else {
    console.log("Numeral menor ou igual a 10")
}
console.log("fim do programa")

//---------------------------------------------------------------------------------

//If Else if
let n = 5

if(n > 10){
    console.log("Numeral maior que 10")
}else if(n > 5){
    console.log("Numeral está entre 6 e 10")
}else {
    console.log("Numeral menor ou igual a 5")
}
console.log("fim do programa")

//---------------------------------------------------------------------------------


//Aninhamento do If
let n1 = 49

if(n1 > 10){
    console.log("Numeral maior que 10")
    if(n1 > 50)
        console.log("Numeral é maior que 50")

}else if(n1 > 5){
    console.log("Numeral está entre 6 e 10")
}else {
    console.log("Numeral menor ou igual a 5")
}
console.log("fim do programa")

//---------------------------------------------------------------------------------


//Podemos simplificar o caso utilizando operadores lógicos

//Exemplo com E &&
//if (expressão1 && expressão2){
    //caso ambos os valores gerem true, o código do bloco é executado
//}

const nota = 6
const porcentagemPresenca = 70
// operação com "E" "&&" para simplificar
if (nota >= 6 && porcentagemPresenca >= 75){
    console.log("Estudante aprovado")
}else{
    console.log("Estudante reprovado")
}
//---------------------------------------------------------------------------------

//Exemplo com OU ||
//if (expressão1 || expressão2){
    //Caso um dos valores gere true, o código do bloco é executado
//}

const idade = 18;
const temCarteiraMotorista = false;
// operação com "OU" "||" para simplificar
if (idade >= 18 || temCarteiraMotorista) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}

//---------------------------------------------------------------------------------
//Exemplo com NÃO !
//if (! expressão1){
    //Caso a expressão tenha valor false, o código do bloco é executado
//}

const estaChovento = true;
// operação com "NÃO" "!" para simplificar
if (!estaChovento) {
    console.log("Você pode sair sem guarda-chuva.");
} else {
    console.log("Melhor levar um guarda-chuva.");
}


