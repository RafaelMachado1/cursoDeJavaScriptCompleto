let n1=11
let n2=14

let res = n1 & n2 //& converte de decimal para binário e usa tabela verdade bit a bit
//operador Bitwise & and
//1010
//1011
//1010 resultado -> só é verdade quando todos são verdade


let res1 = n1 | n2 // |converte de decimal para binário usando a tabela verdade bit a bit
//operador Bitwise | or
//1010
//1011
//1011 resultado -> só é falso quando todos são falsos

let res2 = n1 ^ n2 // ^ converte de decimal para binário usando a tabela verdade bit a bit
//operador Bitwise ^ ou exclusivo
//1101
//1110
//0011 resultado -> bits iguais é falso e bits diferentes verdadeiro


let n=25 

let res3 = n << 1 //desloca um bit para a esquerda. Nesse caso vai dobrar o valor
let res4 = n >> 1 // desloca um bit para a direita. Nesse caso reduz o valor pela metade
