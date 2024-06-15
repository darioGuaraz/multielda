// Dropdown en generos navbar
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", () => {
    const genero = item.textContent.trim(); // Obtener el texto del género
    peliculasFiltradas = filtrarPeliculasGenero(peliculas, genero); // Filtrar películas por género
    mostrarPeliculas(peliculasFiltradas); // Mostrar las películas filtradas
  });
});

// Filtra peliculas por genero
function filtrarPeliculasGenero(peliculas, genero) {
  return peliculas.filter((pelicula) => pelicula.genero === genero);
}

//-------------------------------------------------------------Search Form---

// Escucha el envío del formulario de búsqueda
const searchForm = document.querySelector("form[role='search']");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío del formulario por defecto
  const searchTerm = this.querySelector("input[type='search']").value.trim(); // Obtén el término de búsqueda
  peliculasFiltradas = filtrarPeliculasPorBusqueda(peliculas, searchTerm); // Filtra películas por término de búsqueda
  mostrarPeliculas(peliculasFiltradas); // Muestra las películas filtradas
});

// Filtra peliculas por busqueda
function filtrarPeliculasPorBusqueda(peliculas, term) {
  return peliculas.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(term.toLowerCase())
  );
}
