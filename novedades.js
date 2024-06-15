// api TMDB-------------------------------------
const apiKey = "45584da8f348bf2341f48a65ca662458";
const apiMovieUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

function traerNovedadesPeliculas(apiKey) {
  return fetch(apiMovieUrl)
    .then((respuesta) => respuesta.json())
    .then((data) => {
      console.log(data);
      const listadoPeliculas = document.getElementById("listadoPeliculas");
      data.results.forEach((movie) => {
        const elementoPelicula = document.createElement("div");
        elementoPelicula.innerHTML = `
                            <h2>${movie.title}</h2>
                            <br>
                            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title} Poster">
                            <p>${movie.overview}</p>
                            <hr>
          `;
        listadoPeliculas.appendChild(elementoPelicula);
      });
    });
}
traerNovedadesPeliculas(apiKey);
