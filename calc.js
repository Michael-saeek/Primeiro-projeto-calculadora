/* var nome = window.prompt('Olá, qual é o seu nome? ')
        alert(`Muito prazer, ${nome}, Seja muito bem-vindo!\nEu sou Michael, e esse aqui é meu primeiro projeto`) */

/* vamos começar clicando nos botões e usando console.log para debugar
1. Vamos a criar uma função que vai ter dois parametros > tipo e valor
vamos experimentar arrow function  

Antigamente seria
function (parametros) {}
*/

var operadores = new Array('*', '-', '/', '+')
console.log(operadores)


// função para trazer o tempo. 
function mostrarTempo() {
let time = new Date()
let hrs = time.getHours()
let minutos = time.getMinutes()
let segundos = time.getSeconds()

if (hrs<10) {
    hrs = '0' + hrs
 }

 if (minutos<10) {
    minutos = '0' + minutos
 }

 if (segundos<10) {
    segundos = '0' + segundos
 }

 let tempo = `${hrs}: ${minutos}: ${segundos}`
 document.getElementById('tempoaovivo').innerHTML = `Horario atual ${tempo}`
}

// funçao para mostrar o tempo e começar a contar ao tempo real
function iniTime() {
    setInterval (mostrarTempo, 1000)
}



function calcular(tipo, valor) {

    if (tipo === 'ação') {
        if (valor === 'clear') {
        document.getElementById('campoDados').value = ''
        }

        if (valor === '=') {
        var res = eval(document.getElementById('campoDados').value)
        document.getElementById('campoDados').value = res  
         }

         if (valor === '/' || valor === '*' || valor === '-' || valor === '+') {
        document.getElementById('campoDados').value += valor
        }

    } if (tipo === 'valor') {
        document.getElementById('campoDados').value += valor
    }
}
