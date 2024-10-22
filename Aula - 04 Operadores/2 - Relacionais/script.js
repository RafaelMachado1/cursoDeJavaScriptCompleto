/*
Operadores Relacionais (ou compradores) são operadores que permitem comprar valores
de variáveis.

O resultado de operação relacional sempre é um valor BOOLEANO, que diz se a 
comparação é verdadeira (TRUE) ou falsa (FALSE).
*/

//---------------------------------------------------------------------------------
//Igual (===)
//Diferente (!==)
//NEGAÇÃO (!)
const igualdade  = ("1" === "2")   // false, são diferentes
const igualdade1 = ("2" === "2")   // true. são iguais
const igualdade2 = (2 === "2")     // false, tipos diferentes
const diferente  = (2 !== "2")     // true, porque os tipos são diferentes
const negacao    = (!(2 !== 3) )   // false, porque a negação inverte a sentençã.
console.log(diferente)
// O valor que sai da compração pode ser guardado em uma variável.
// Nesse caso, condição === false

//--------------------------------------------------------------------------------
// MAIOR(>)
// MENOR(<)
const maior  = 1 > 2 // false, porque 1 é menor que 2
const maior1 = 2 > 2 // false, porque 2 é igual a 2
const maior3 = 3 > 2 // true, porque 3 é maior que 2

const menor  = 1 < 2 // true, porque 1 é menor que 2
const menor1 = 2 < 2 // false, porque 2 é igual a 2 
const menor2 = 3 < 2 // false, porque 3 é maior que 2
console.log(maior)

//---------------------------------------------------------------------------------
// MAIOR OU IGUAL (>=)
// MENOR OU IGUAL (<=)
const maiorOuIgual  = 1 <= 2 // true, porque 1 é menor que 2
const maiorOuIgual1 = 2 <= 2 // true, porque 2 é igual a 2
const maiorOuIgual2 = 3 <= 2 // false, porque 3 é maior que 2
console.log(maiorOuIgual)
