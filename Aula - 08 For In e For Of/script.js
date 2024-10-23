// for in
// O loop for...in percorre arrays e objetos, alocando o índice de cada posição do
// array, ou a chave de cada objeto, em uma variável, permitindo executar alguma
//ação para cada valor distinto.


//Exemplo

const numeros = [14, 67, 89, 15, 23]

//for
for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}
/*aqui, i é uma variável que pode receber qq valor, mas como queremos imprimir do
primeiro até o último item do array iniciamos com 0 que é o indice do primeiro item
do array*/

//for in
for(let i in numeros){
    console.log(i)//será impresso apenas o indice do array: 0, 1, 2, 3, 4
    console.log(numeros[i])// será impresso o valor de cada indice: 14, 67, 89, 15, 23
}
/* aqui, i recebe o índice a cada repetição*/

//for in com objetos
const pessoa = {
    nome: "Astrodev",
    idade:40 
}

for(let i in pessoa){
    console.log(i)//será impresso apenas a chave de cada propriedade: nome, idade
    console.log(pessoa[i])//será impresso o valor de cada propriedade: Astrodev, 40
}
/* aqui, i recebe chave do objeto a cada repetição*/

//---------------------------------------------------------------------------------

//for of
//O loop for...of percorre arrays, alocando o valor de cada posição do array em 
//uma variável, permitindo executar alguma ação para cada valor distinto.

const num = [1, 2, 3, 4, 5]

//for
for (let i=0; i < 5; i++){
   console.log(num[i])//será impresso o valor de cada item do array: 1, 2, 3, 4, 5
}

//for of
for(let n of num){
    console.log(n) //será impressso o valor de cada item do array: 1, 2, 3, 4, 5
}



