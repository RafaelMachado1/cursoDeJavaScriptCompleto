//Funções de Array
//Map()
//Utilização
//Quando queremos criar um novo array baseado em informações do array original

//Entrada
//Uma função de callback - passando funções como parâmetros
//Esta função pode receber três parâmetros
//1 Corresponde ao valor do elemento do array naquela etapa do loop(item)
//2 O valor do indice daquele elemento (index)
//3 terceiro: o array original em si

// Essa função deve retornar algum valor

const pokemons = [
    { nome: 'Bulbasaur', tipo: 'grama'},
    { nome: 'Baellsprout', tipo: 'grama'},
    { nome: 'Charmander', tipo: 'fogo'},
    { nome: 'Vulpix', tipos: 'fogo'},
    { nome: 'Squirtle', tipo: 'água'},
    { nome: 'Payduck', tipo: 'água'}
]

const nomeDosPokemons = pokemons.map((pokemon, indice, array)=> {
    return pokemon.nome
    
})

console.log(nomeDosPokemons)

//Reforçando a sintaxe
const novoArray = array.map((parametros)=> {
    //o que precisa ser feito com os parâmetros, como retornar, imprimir, etc.
})

//os parâmetros do map serão sempre na sequinte ordem,
//precisando ser chamado apenas os que serão usados:
array.map((elemento, indice, array)=>{})