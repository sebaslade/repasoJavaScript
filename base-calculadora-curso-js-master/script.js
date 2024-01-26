//Agrega valores a la pantalla (input) mediante el .value
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

//Borra los valores del input
function borrar(){
    document.getElementById('pantalla').value = ''
}

//Calcula el resultado
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}

