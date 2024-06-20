let peliculas = [];
let peliculasFiltradas = [];
const peliculasJson = "/multielda/src/data/peliculas.json";
//const peliculasJson = "/PPteclab-Multielda/src/data/peliculas.json";

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
    autoplay: true, // Activa el desplazamiento automático
    autoplayTimeout: 4500, // Tiempo de espera entre desplazamientos (en milisegundos)
    autoplayHoverPause: true, // Pausa el desplazamiento automático al pasar el mouse sobre el carrusel
    autoplaySpeed: 2500, // Velocidad del desplazamiento automático (en milisegundos)
    animateOut: "fadeOut", // Efecto de desvanecimiento al salir
    animateIn: "fadeIn", // Efecto de desvanecimiento al entrar
    smartSpeed: 1500, // Ajusta la duración de la transición
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

// Función para mezclar el array de películas
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
