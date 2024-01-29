let url = 'https://api.openweathermap.org/data/2.5/weather'
let urlIcon = 'https://openweathermap.org/img/wn/'
let api_key = '77365bcd5ae53627a126cf8e980d1eea'
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})
function fetchDatosClima(ciudad){
    fetch(`${url}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    //console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''
    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const icono = data.weather[0].icon
    const descripcion = data.weather[0].description

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const ciudadTemp = document.createElement('h3')
    ciudadTemp.textContent = `La temperatura es: ${(temperatura-difKelvin).toFixed(2)}°C`

    const climaIcono = document.createElement('img')
    climaIcono.src = `${urlIcon}${icono}@2x.png`

    const ciudadDescrip = document.createElement('p')
    ciudadDescrip.textContent = `La descripción meteorológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(ciudadTemp)
    divDatosClima.appendChild(climaIcono)
    divDatosClima.appendChild(ciudadDescrip)
}