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

const ejercicioArreglo = ['Manzana', 'Manzana', 'Manzana', 'Manzana','Pera']
const resultadoMap = ejercicioArreglo.map(x => {
    if(x == 'Manzana') return 'Naranja'
})
console.log("Resultado de un Array.map: "+resultadoMap)

const resultadoFill = ejercicioArreglo.fill('Naranja',1)
console.log("Resultado de un Array.fill: "+resultadoFill)

const resultadoFind = ejercicioArreglo.find(x => {})