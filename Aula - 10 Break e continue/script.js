let n =0
let max=1000
let pares=0

while(n<max){
    console.log("Rafael Machado " + n)
    if(n>10){
        break
    }
    n++
}


for(let i=0; i < max; i++){
    if(i%2 !=0){
        continue
    }
    pares++
}
console.log("Quantidade de pares: " + pares)
console.log("Fim do programa")