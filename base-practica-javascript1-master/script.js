import { barcelona, roma,paris,londres } from "./ciudades.js";

let enlaces = document.querySelectorAll('a')
let tituloElement = document.getElementById('titulo')
let subtituloElement = document.getElementById('subtitulo')
let parrafoElement = document.getElementById('parrafo')
let precioElement =  document.getElementById('precio')

console.log(enlaces)
enlaces.forEach(function(enlace){
    enlace.addEventListener("click",function(){
        //REMOVER ACTIVO
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        })
        //AGREGAR CLASE ACTIVE
        this.classList.add('active')
        //EXTRAER CONTENIDO
        let contenido = obtenerContenido(this.textContent)
        //MOSTRAR CONTENIDO
        tituloElement.innerHTML = contenido.titulo
        subtituloElement.innerHTML = contenido.subtitulo
        precioElement.innerHTML = "S/ " + contenido.precio
        parrafoElement.innerHTML = contenido.parrafo
    })
})

//Funcion parar traer el contenido correcto
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }
    return contenido[enlace]
}