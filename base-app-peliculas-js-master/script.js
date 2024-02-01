let api_key = 'e52527eb190acb8cc7e39420a36aa3d5'
let url = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'

document.getElementById('searchButton').addEventListener('click', seachMovies)

function seachMovies(){
    let searchInput = document.getElementById('searchInput').value

    fetch(`${url}?query=${searchInput}&api_key=${api_key}`)
        .then(response => response.json())
        .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    let resultDiv = document.getElementById('results')
    resultDiv.innerHTML = ''

    if(movies.lenght === 0){
        resultDiv.innerHTML = '<p>No se encontraron resultados</p>'
        return
    }
    movies.forEach(movie => {
        let movieResult  = document.createElement('div')
        movieResult.classList.add('movie')

        let divMovies = document.createElement('div')
    
        let movieTitle = document.createElement('h2')
        movieTitle.textContent = movie.title

        let pathMovie = urlImg + movie.poster_path
        let posterMovie = document.createElement('img')
        posterMovie.src = pathMovie

        let releaseMovie = document.createElement('p')
        releaseMovie.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date

        let overviewMovie = document.createElement('p')
        overviewMovie.textContent = movie.overview

        //Crear los hijos
        movieResult.appendChild(posterMovie)
        movieResult.appendChild(divMovies)

        divMovies.appendChild(movieTitle)
        divMovies.appendChild(releaseMovie)
        divMovies.appendChild(overviewMovie)

        //Crear el div Padre
        resultDiv.appendChild(movieResult)
    });
}