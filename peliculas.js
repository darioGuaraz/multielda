let peliculas = [];
let peliculasFiltradas = [];
const peliculasJson = "/Multielda/src/data/peliculas.json";
//const peliculasJson = "/PPteclab-multielda/src/data/peliculas.json";

fetch(peliculasJson)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    peliculas = shuffleArray(data);
    peliculasFiltradas = peliculas;
    mostrarPeliculas(peliculas);
  });

// Mostrar peliculas en el contenedor index
function mostrarPeliculas(peliculas) {
  const container = document.querySelector(".owl-carousel");
  container.innerHTML = peliculas
    .map(
      (pelicula, index) => `
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

  //OWL Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 9,
      },
    },
  });
}
