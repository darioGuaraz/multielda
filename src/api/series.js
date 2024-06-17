const seriesJson = "/multielda/src/data/series.json";
let peliculasFiltradas = [];
let peliculas = [];

fetch(seriesJson)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    peliculas = shuffleArray(data);
    peliculasFiltradas = peliculas;
    mostrarPeliculas(peliculas);
  });

// Mostrar peliculas en el contenedor index
function mostrarPeliculas(peliculas) {
  const container = document.querySelector(".box-container-2");
  container.innerHTML = peliculas
    .map(
      (pelicula, index) =>
        `
      <div class="item">
        <div class="content">
          <img src="${pelicula.imagen}" alt="${pelicula.titulo}" class="content-img" data-index="${index}">
          <div>
            <h3>${pelicula.titulo}</h3>
            <p>${pelicula.genero}</p>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Escucha los clics en el contenedor de películas
const containerSeries = document.querySelector(".box-container-2");
containerSeries.addEventListener("click", (event) => {
  const img = event.target.closest(".content-img");
  if (img) {
    const peliculaIndex = img.dataset.index;
    abrirIframe(peliculasFiltradas[peliculaIndex].iframe);
  }
});
