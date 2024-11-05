//O QUE É UMA FUNÇÃO?
//uma função é um bloco de código que pode ser chamado (ou invocado) a partir do
//seu nome. Permite reutilizar variáveis.

//---------------------------------------------------------------------------------
//DECLARANDO E CHAMANDO FUNÇÕES EM JS
//Primeiro passo para criar uma função é declará-la.
//A declaração atribui um bloco de código a um identificador (ou um nome).
//O bloco de código é escrito entre {}

function imprimiOlaMundo(){
    console.log("Olá mundo")
}
//Esta função executará o código entre chaves quando for chamada

//---------------------------------------------------------------------------------

//No caso da nossa função de calcular a área de um retângulo, a declaração seria:
function calcularArea(altura, largura){ //Parâmetros
    const area = altura*largura // -> Parametros sendo utilizados
    return area
}
console.log(calcularArea(10,3)) //-> argumentos
//Onde:
//function e calcularArea são a indicação de declaração e o identificador da função

//Altura e largura entre os parênteses são os parâmetros, isto é, os valores que
//serão utilizados dentro do corpo da função

//const area = altura*largura e console.log(area) são o corpo da função. 
//A Lógica propriamente dita

//---------------------------------------------------------------------------------
//CHAMANDO FUNÇÕES
imprimiOlaMundo()
console.log(calcularArea(2,2))

//---------------------------------------------------------------------------------
//RETORNANDO VALORES

function calcularArea1(altura, largura){
    const area = altura * largura
    return area
}
//Atribui retorno a uma variável
const areaCalculada = calcularArea1(2,8)

//Imprime retorno no console
console.log(areaCalculada)

//---------------------------------------------------------------------------------
//PARÂMENTROS REST EM FUNÇÕES
function soma(...valores){ //Spread para usar mais de 3 valores dentro da função
    let tam=valores.length
    let res=0

    for(let i=0; i<tam; i++){ //Aqui pode ser feito com for of ou for in
        res+=valores[i]
    }
    return res
}
console.log(soma(5,10))

//---------------------------------------------------------------------------------
//FORMAS ALTERNATIVAS DE DECLARAR FUNÇÕES

//Função não-nomeada
//Podemos atribuir a declaração de uma função a uma variável. Chamamos isso de
//expressão de função, função anonima, ou função não-nomeada

const calcularArea2 = function(altura, largura){
    const area = altura*largura;
    return area
}
console.log(calcularArea2(10,2))

//Função constructor Anônima
const f = new Function("v1","v2","v3","return v1+v2+v3")

console.log(f(10,5,30))

//Arrow function
//Tipo de expressão de função com sintaxe ainda mais simplificada.
const nome = n => n //um parâmetro não precisa de de parenteses nem chaves
console.log(nome("Rafael"))

const soma1 = (a, b) => { 
    let res = a + b
    return res            
}
console.log(soma1(10, 5))
// com 2 parâmetros precisa de parenteses e chaves
 // Precisa também do Return

//---------------------------------------------------------------------------------
//Funções dentro de Funções
const soma2 = (...valores) => {

    const somar = val => {
        let res = 0
        for(v of val)
            res += v
        return res
    }
    return somar(valores)
}

console.log(soma2(10, 5, 15))

//---------------------------------------------------------------------------------
//Funções Geradoras
// Funções geradoras em JavaScript são um tipo especial de função que pode ser 
// pausada e retomada, permitindo que você trabalhe com iteradores de maneira 
// mais eficiente. Elas são definidas usando a sintaxe 'function

function* minhaGeradora() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const iterador = minhaGeradora();
  
  console.log(iterador.next()); // { value: 1, done: false }
  console.log(iterador.next()); // { value: 2, done: false }
  console.log(iterador.next()); // { value: 3, done: false }
  console.log(iterador.next()); // { value: undefined, done: true }


function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)