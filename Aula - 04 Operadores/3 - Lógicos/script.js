/*
Operadores Lógicos
São operadores especiais usados entre BOOLEANOS.
Usamos estes operadores para adicionar lógicas mais sofisticadas aos softwares que 
desenvolvemos.

&& retorna true SE E SOMENTE SE, todos os BOLEANOS envolvidos também forem true
|| retorna false SE E SOMENTE SE,  todos os BOLEANOS envolvidos também forem false
! sempre retorna o BOLEANO oposto
*/
//---------------------------------------------------------------------------------

// Operador E (&&)
const op = true && true    // resultado = true
const op1 = true && false  // resultado = false
const op2 = false && true  // resultado = false
const op3 = false && false // resultado = false
console.log(op)

//---------------------------------------------------------------------------------

//Operador OU (||)
const operacao = true || true    // resultado = true
const operacao1 = true || false  // resultado = true
const operacao2 = false || true  // resultado = true
const operacao3 = false || false // resultado false
console.log(operacao)
//---------------------------------------------------------------------------------

// Operador NÃO (!)
const negacao = !true   // resultado false
const negacao2 = !false // resultado true
console.log(negacao)