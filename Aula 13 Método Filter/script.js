//Filter
//Utilização: 
//quando queremos criar um NOVO array retirando (ou não) alguns itens do array
//original

//Entrada
//Uma função de callback - passando funções como parâmetros
//Esta função pode receber três parâmetros
//1 Corresponde ao valor do elemento do array naquela etapa do loop(item)
//2 O valor do indice daquele elemento (index)
//3 terceiro: o array original em si

const pokemons = [
    { nome: 'Bulbasaur', tipo: 'grama'},
    { nome: 'Baellsprout', tipo: 'grama'},
    { nome: 'Charmander', tipo: 'fogo'},
    { nome: 'Vulpix', tipos: 'fogo'},
    { nome: 'Squirtle', tipo: 'água'},
    { nome: 'Payduck', tipo: 'água'}
]

const nomeDosPokemons = pokemons.filter((pokemon, indice, array)=> {
    return pokemon.tipo === 'água'
    
})

console.log(nomeDosPokemons)

//Veja que o que a função faz é percorrer o array, e com isso, criar um novo array,
//que contenha apenas os itens que atendam à consição que está na linha do return
//(neste caso, o valor da propriedade tipo do pokemon deve ser igual a "água")

//Reforçando a sintaxe:
const novoArray = array.filter((parametro)=> {
    //O que precisa ser feito com os parâmetros, como comparar com alguma condição
    //retornar, imprimir, etc.
})

//os prâmetros do filter, assim como no map serão sempre na seguinte ordem,
//precisando ser chamados apenas os que serão usados:
array.filter((elemento, indice, array)=>{
    //por exemplo, se temos uma condição, ficaria assim:
    return elemento === condicao
})
