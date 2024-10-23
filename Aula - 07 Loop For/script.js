for(let i=0; i < 10; i++){
    console.log(i)
}

for(let i=0; i < 10; i++){
    if(i % 2 == 0){
        console.log(i + " é par")
    }else{
        console.log(i + " é impar")
    }
}

//For com arrays
const numeros = [14 , 67, 89, 15, 23]

for(let i = 0; i < 5; i++){
    console.log(numeros[i])
}
//No console será impresso os numeros 14, 67, 89, 15, 23

for(let i =0; i < numeros.length; i++){
    console.log(numeros[i])
}
