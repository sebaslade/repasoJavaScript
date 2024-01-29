const numAleatorio = Math.floor(Math.random()*100) + 1
console.log(numAleatorio)
const numEntrada = document.getElementById('numeroEntrada')
const mensaje = document.getElementById('mensaje')
const intento = document.getElementById('intento')
let intentos = 0

function comprobar(){
    intentos ++
    intento.textContent = intentos
    let numIngresado = parseInt(numEntrada.value)
    if (numIngresado < 1 || numIngresado > 100 || isNaN(numIngresado)){
        mensaje.textContent = 'Introduzca un número válido';
        mensaje.style.color = 'red'
        return
    }
    if(numIngresado === numAleatorio){
        mensaje.textContent = '¡Felicidades, adivinaste!'
        mensaje.style.color = 'green'
        numEntrada.disabled = true
    } else if (numIngresado < numAleatorio){
        mensaje.textContent = 'El número tiene un valor mayor'
        mensaje.style.color = 'yellow'
    }else{
        mensaje.textContent = 'El número tiene un valor menor'
        mensaje.style.color = 'yellow'
    }
}