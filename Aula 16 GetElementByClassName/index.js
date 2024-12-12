//const cursosTodos=document.getElementsByClassName("cursos")
//console.log(cursosTodos)
//Aqui ele retorna um HTML Collection e nãopermite usar os métodos do Javascript

//---------------------------------------------------------------------------------
//usando o spreed para converter de HTMLcolection para array e assim usar os métodos
//disponíveis.
const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosc1=[...document.getElementsByClassName("c1")]
const cursosc2=[...document.getElementsByClassName("c2")]
const cursoEspecial=document.getElementsByClassName("curso")[0] // posição zero

console.log(cursosTodos)
console.log(cursosc1)
console.log(cursosc2)
console.log(cursoEspecial)

/*
cursosTodos.map((el)=> {
    el.classList.add("destaque")
})

cursosc1.map((el)=> {
    el.classList.add("destaque")
})
*/

cursosc2.map((el)=> {
    el.classList.add("destaque")
})
