// Com If else

let preco;
/*
const fruta = prompt("digite o nome da fruta");

if(fruta === "banana"){
    preco = 5;
}else if(fruta === "laranja"){
    preco = 4,5;
    console.log("Quer mais alguma coisa?")
}else if(fruta === "maça"){
    preco = 7
    console.log("Quer mais alguma coisa?")
}else if(fruta === "limão"){
    preco = 3
    console.log("Quer mais alguma coisa?")
}else if(fruta === "melão"){
    preco = 6
    console.log("Quer mais alguma coisa?")
}else if(fruta === "melancia"){
    preco = 10
    console.log("Quer mais alguma coisa?")
}else{
    console.log("Fruta não encontrada")
}
*/

// com Switch Case

let precoFruta;

const fruta = prompt("Digite o nome da fruta")

switch(fruta){
    case "banana":
        preco = 5;
        break;

    case "laranja":
        preco = 4.5;
        break;

    case "maça":
        preco = 7;
        break;

    case "limão":
        preco = 3;
        break;

    case "melão":
        preco = 6;
        break;

    case "melancia":
        preco = 10;
        break;

    default:
        console.log("fruta não encontrada")

}