/*
var input;
if(input === undefined){
    verdadero()
}else{
    falso()
}*/
/*
function verdadero(){
    console.log("Es valor de input es undefined");
}
function falso(){
    //console.log("Este input tiene valor y su valor es: " + input);
    if(myArray != undefined){
        console.log("El valor del mi arreglo es "+myArray[0])
    }
}


var myArray = [1]
if(!myArray[0]) verdadero() 
else falso()

const myObject={
  key: "Mi llave",
  pc: "Pc",
  soles: 14
}
console.log("Tengo "+myObject.soles+" soles")*/
/*
/*function mostrar(){
    document.getElementById("seleccionable").innerHTML = Date()
}*
/*

const array = ['Comer','Despertar','Estudiar','Dormir']
//console.log(array[array.length-1])  
let texto = ''
for(let index=0; index < array.length; index++){
    texto += '<li>' + array[index] + '</li>'
}
document.getElementById('seleccionable').innerHTML = texto
*/
/*
const arreglo = [
    {nombre: 'nombre1', apellido: 'apellido1'},
    {nombre: 'nombre2', apellido: 'apellido2'},
    {nombre: 'nombre3', apellido: 'apellido3'},
    {nombre: 'nombre4', apellido: 'apellido4'},
    {nombre: 'nombre5', apellido: 'apellido6'},
    {nombre: 'nombre6', apellido: 'apellido6'},
    {nombre: 'nombre7', apellido: 'apellido7'},
]
const resultado = arreglo.filter(x => x.apellido == 'apellido6')
  
for(let index = 0; index < resultado.length; index++){
    const element = resultado[index]
    console.log(element.nombre)
}
*/

const Array1 = ['Manzana', 'Naranja', 'Limón','Pera','Manzana', 'Manzana','Pera']
const Array2 = ['Manzana', 'Manzana', 'Manzana', 'Pera', 'Manzana','Pera']
const Array3 = ['Manzana', 'Manzana', 'Manzana']

//Array.map
const resultadoMap = Array1.map(x => {
    if(x == 'Manzana') return 'Naranja'
})
//console.log("Resultado de un Array.map: "+resultadoMap)

//Array.fill
const resultadoFill = Array2.fill('Naranja',1)
//console.log("Resultado de un Array.fill: "+resultadoFill)

//Array.find
const resultadoFind = Array1.find(x => x == 'Pera')
//console.log(resultadoFind)

//Array.findIndex
const resultadoFindIndex = Array1.findIndex(x => x == 'Pera')
//console.log(resultadoFindIndex)

//Array.some
const resultadoSome = Array1.some(x => x == 'Pera')
//console.log(resultadoSome)

//Array.every
const resultadoEvery = Array3.every(x => x == 'Manzana')
//console.log(resultadoEvery)

//Array.pop
//console.log(Array1)
//const resultadoPop = Array1.pop()
//console.log(resultadoPop)
Array1.pop()
//console.log(Array1)

//Array.shift
//const resultadoShift = Array1.shift()
//console.log(resultadoShift)
Array1.shift()
//console.log(Array1)

//Array.push
//const resultadoPush = Array1.push(true)
//console.log(resultadoPush)
Array1.push(true)
//console.log(Array1)
let resultadoFindPush = Array1.findIndex(x => x == true)
//console.log(Array1[5])
//console.log(resultadoFindPush)
//console.log(Array1.length)

//Array.unshifht
Array1.unshift('Durazno')
let resultadoFindUnshift = Array1.findIndex(x => x == 'Durazno')
//console.log(resultadoFindUnshift)
//console.log(Array1)

//Array.splice
//i = indice = index = posicion
//            i,cuantos espacios,elemento agregado
Array1.splice(0,0,'Sandía','Melon','Ciruela',1,2,3,4,5)
//console.log(Array1)
//let finDurazno = Array1.findIndex(x => x == 'Durazno')
//console.log(finSplice)

//Array.slice
const resultadoSlice = Array1.slice(2,5)
//console.log(resultadoSlice)
//console.log(Array1)

//Array.join
//document.getElementById('seleccionable').innerHTML = Array1.join(", ")

//Array.concat
const frutas = ['Manzana', 'Naranja', 'Limón','Pera','Manzana', 'Manzana','Pera']
const verduras = ['Lechuga','Espinaca','Cebolla','Zapallo']

//console.log(frutas.concat(verduras))

//array.sort   -1-2-3-4-5-6-7-8-9
const number = [5,2,3,4,1,6,7,8,9,10,11,12,13,14,15]
let objects = [
    {auto: 'FIAT', año: 2020},
    {auto: 'LAMBORGHINI', año: 2019},
    {auto: 'AUDI', año: 2021},
    {auto: 'BUGATTI', año: 2024},
]

//const letras = ['Albert','Barbara','Carlos','Anderson']
//console.log(number.sort((x,y) => x-y))
//Restar 1 - 2 = -1
//Restar 1 - 3 = -2
//console.log(number.sort((x,y) => y-x))

//Array.sort con objetos
//console.log(objects.sort((x,y) => x.año-y.año))
//console.log(objects.sort((x => x.auto)))

//Días

//Día actual
// PONER LA FECHA : AAAA-MM-DD
const fecha = new Date()
//console.log(fecha)

let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

let resultadoFecha = fecha.getDate() + ' ' + meses[fecha.getMonth()] + ' ' + fecha.getFullYear()
//console.log(resultadoFecha)

//Math.random
let numero = Math.random()*100
//redondeo
let redondeo = Math.round(numero)
//console.log(redondeo)

//Condicionales
//let nombreIngresado = prompt("Ingrese su nombre de usuario:");
//const indiceUsuario = nombres.indexOf(nombreIngresado);
//const usuarioEncontrado = nombres[indiceUsuario];
//const contraseñaIngresada = prompt("Ingrese su contraseña:");
//const contraseñaCorrecta = contraseñas[indiceUsuario];
/*
if (indiceUsuario !== -1 && contraseñaIngresada === contraseñaCorrecta) {
    alert("Usuario aceptado. Contraseña correcta.");
    document.write("Nombre de usuario: "+ usuarioEncontrado + "<br>");
    document.write("Contraseña: " + contraseñaCorrecta);
} else if (indiceUsuario === -1 ){
    alert("Usuario no encontrado. Intenta nuevamente.");
} else {
    alert("Contraseña incorrecta. Intenta nuevamente.");
}
*/

//BUCLES
let tecnologias = ['HTML','CSS','JavaScript','C', 'C#', 'Rust','PHP','Python','Java','Kotlin']
/* For CLASICO
let seleccionable  = document.getElementById('seleccionable')
let texto = ''
for(let i = 0; i < tecnologias.length; i++){
    texto += tecnologias[i]
    if(i < tecnologias.length -1){
        texto += ', '
    }else{
        texto += '.'
    }
    seleccionable.textContent = texto
    console.log(texto)
}
*/
//For of
for(tecnologia of tecnologias){
    //console.log(tecnologia)
}

let alumnos = {
    nombre: 'Sebastián',
    edad: 18,
    tecnologias:['HTML','CSS','JavaScript']
}
/*
for (const alumno of alumnos) {
    console.log(alumno)
}
*/
//For in
for (const key in alumnos) {
   //console.log(alumnos[key])
}

let numeros = [1,2,3,4,5,6,7,8,9]
//ForEach
numeros.forEach(numero => {
    //console.log(numero)
});

//While
let edad = 0
//while(edad < 18){
    //console.log(`Tienes ${edad} años y aún no eres mayor de edad`)
    //edad++
//}
//console.log(`Tienes ${edad} años y ya eres mayor edad`)

//Do-While

//do{
    //console.log(`Tienes ${edad} años y aún no eres mayor de edad`)
    //edad++
//}while(edad < 18)
//console.log(`Tienes ${edad} años y ya eres mayor edad`)
/*
while(edad < 30){
    console.log(edad)
    edad++
    if(edad == 25) break;
}

console.log(`Saliste del bucle porque tienes ${edad} años`)
*/
//SETS Y MAPS
//Set
let conjunto = new Set(['Sebastián','Matias','Pedro','Alex','Valeria','Pedro','Alex'])
conjunto.add('Luciana')
conjunto.delete('Pedro')
let pregunta = conjunto.size
//console.log(pregunta)

let muebles = ['Cama','Escritorio','Repisa','Armario','Cama','Estante']
function comprar(muebles){
    //console.log(muebles)
}
function comprarUnaSolaVez(muebles){
    let unica = new Set(muebles)
    //console.log(unica)
}
comprarUnaSolaVez(muebles)

//Map
let mapa = new Map([
    ['Computadoras', 10],
    ['Tablets',5],
    ['Celulares',15]
])
mapa.set('Teclados',20)
//Eliminar elemento del map
mapa.delete('Computadoras')
let consulta = mapa.size
let contenido = mapa.has('Tablets')
//console.log(consulta)
//console.log(mapa)
//console.log(contenido)

let array4 = [1,1,2,2,3,3,4,4]
let unico = new Set(array4)
let nuevoArray = [...unico]
//console.log(nuevoArray)

//TYPE OF
//string
let a = typeof 'Sergie'
//number
let b = typeof 3.14
//number (especial)
let c = typeof NaN
//boolean
let d = typeof true

//object
let f = typeof {nombre: 'Sebastián'}
//object (especial)
let e = typeof ['Sebastián','Matias','Victor'] //array
//object (especial)
let g = typeof new Set() //nueva instancia
//object (especial)
let h = typeof null

//function
let i = typeof function(){}
//undefined
let j = typeof noExiste
/*
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(i)
console.log(h)
console.log(i)
console.log(j)
*/
//Ejemplo:
let datoBackend = 4

if(typeof datoBackend === 'string'){
    //console.log('Bien, el tipo de dato que se envió fue un string')
}else{
    //console.log('Mal, el tipo de dato no es un string')
}

let l =  ['Sebastián','Matias','Victor'] //array
let m =  new Set() //nueva instancia
let n =  new Map()
let o =  new Date()
let p =  null

//console.log(l instanceof Array)

if(m instanceof Array){
    //console.log('Bien, es una array')
}else{
    //console.log('Mal, tiene que ser un array')
}
/*
if(p instanceof null){
    console.log('Bien, es una null')
}else{
    console.log('Mal, tiene que ser un null')
}
*/

//CONVERSIONES
//STRING A NUMBER
let conversion = Number('') // = parseFloat('3.14') // parseInt()
let conversion1 = + ('1')

//console.log(conversion1)
//console.log(typeof conversion1)

//NUMBER A STRING
let conversion2 = String(2) // .toString()
let strNum = conversion2.toString()

//console.log(strNum)
//console.log(typeof strNum)

//DATES A NUMBER
let date = new Date()
let dateNum = Number(date)

//console.log(date)
//console.log(dateNum)
//console.log(typeof dateNum)

//DATES A STRING

let date1 = new Date()
let dateStr = String(date1)

//console.log(date)
//console.log(dateStr)
//console.log(typeof dateStr)

//NUMBER A BOOLEAN
let boolean = Boolean(0)
let boolean1 = Boolean(1)

//console.log(boolean)
//console.log(boolean1)

let ejm = 0
if(ejm !== undefined && ejm !== null){
    //console.log('Viene un dato')
}else{
    //console.log('Este dato es null o undefined')
}

//BOOLEAN A STRING
let booStr = String(true) // = true.toString()

//console.log(booStr, typeof booStr)

//Expresiones regulares
let text = "Este curso es de JavaScript e indroduccion a la programacion 9"
let correo = "sebastianlaos@gmail.com"
let usuario = {
    id: 1,
    nombre: 'Sebastián',
    apellido: 'Laos',
    correo: "matias@gmail.com",
    telefono: '999999999'
}
let busqueda = text.search(/javascript/i)
//console.log(busqueda)
//pattern/modificadores
//Modificadores:
// i: ignora las mayúsculas y minúsculas
// g: buscar en todo el texto pasado
// m: busqueda multilinea
// s: que permita usar.

let pattern = /@gmail/i
//let pattern = /[0-9]/i NUMEROS
let resultPat = pattern.test(usuario.correo)
let resultPat2 = pattern.exec(usuario.correo)
//console.log(resultPat2)

// TRY & CATCH
try {
    //ESCRIBIR CODIGO QUE PUEDE FALLAR (APIS)
    //console.log("Estamos intentando llamar a la api")
    //throw("Este cliente no esta apto para la compra")
    //console.log("Genial, todo salió bien")
    //setTimeout(() => {
        //console.log("La api nos responde:")
        //console.log("El cliente es apto para la compra")
        //throw("Este cliente no esta apto para la compra")
    //}, 1000);
} catch(error) {
    //TOMAMOS EL ERROR y hacemos algo que nos parezca correcto
    //console.log("Algo falló, ", error)
}
/*
finally{
    //se ejecuta siempre por más que falle o nos
    console.log("Se ejecuta siempre")
}*/

//CALLBACKS = AÑADIR COMO PARAMETRO OTRA FUNCION
function mostrarConsola(sum){
    //console.log(sum)
}

function calcular(num1, num2,callback){
    let suma = num1 + num2
    callback(suma)
}

calcular(1,3,mostrarConsola)

//LLAMAR A OTRA FUNCION
function hola(){
    saludo()
}
function saludo(){
    console.log("Hola, este es mi saludo desde otra funcion")
}

//hola()

//PROMESAS
let promesa = new Promise((response, reject)=>{
    setTimeout(() => {
        let resp = {
            description: 'Está es la respuesta de la API',
            response: 200
        }
        //response(resp)
        reject('Falló')
    }, 3000);
})

promesa.then(res=>{
    //console.log(res); //console.log(res.description)
}).catch(error=>{
    //console.error(error);
    //console.warn(error);
})

let promesa1 = new Promise((response)=>{
    setTimeout(() => {
        let resp = {
            description: 'Está es la respuesta de la API',
            response: 200
        }
        response(resp)
    }, 3000);
})
let promesa2 = new Promise((response)=>{
    setTimeout(() => {
        let resp = {
            description: 'información lenta',
            response: 200
        }
        response(resp)
    }, 5000);
})

let promesa3 = new Promise((response)=>{
    setTimeout(() => {
        let resp = {
            description: 'información rápida',
            response: 200
        }
        response(resp)
    }, 2500);
})

//ASYNC AWAIT ->> PROMESAS
async function ejecutarPromesas(){
    let respuestaProm1 = await promesa1
    //console.log(respuestaProm1)
    let respuestaProm2 = await promesa2
    //console.log(respuestaProm2)
    let respuestaProm3 = await promesa3
    //console.log(respuestaProm3)
}

ejecutarPromesas()

//FECTH -->> PROMESAS
let url = 'https://jsonplaceholder.typicode.com'
let query = [
    '/posts',
    '/posts/1',
    '/posts/2',
    '/posts/3',
    '/posts/1/comments',
    '/comments?postId=1',
]

//GET:Obtener información
/*
fetch(`${url}/${query[1]}`)
    .then(response => response.json())
    .then(json => console.log(json))
*/
//POST:Enviar información
let requestBody = {
    title: 'Sebastián envia su comentario',
    body: 'Que buen post!',
    userId: 1,
}
fetch(`${url}/${query[0]}`,{
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(requestBody)
})
    .then(response => response.json())
    .then(json => console.log(json))

//PUT:Editar información
let requestBody1 = {
    id: 3,
    title: 'Sebastián edito este comentario',
    body: 'Edite este comentario',
    userId: 1,
}
fetch(`${url}/${query[1]}`,{
    method: 'PUT',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(requestBody1)
})
    .then(response => response.json())
    .then(json => console.log(json))

//PATCH:Editar información (solo un elemento)
let requestBody2 = {
    title: 'Sebastián edito solamente el titulo',
}
fetch(`${url}/${query[2]}`,{
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(requestBody2)
})
    .then(response => response.json())
    .then(json => console.log(json))

//DELETE:Eliminar un item
fetch(`${url}/${query[3]}`,{
    method: 'DELETE',
})