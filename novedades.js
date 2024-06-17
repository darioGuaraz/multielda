const apiKey = "45584da8f348bf2341f48a65ca662458";
const apiMovieUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

function traerNovedadesPeliculas(apiKey) {
  return fetch(apiMovieUrl)
    .then((respuesta) => respuesta.json())
    .then((data) => {
      console.log(data);
      const listadoPeliculas = document.getElementById("listadoPeliculas");

      // Crear estructura del carrusel
      const carouselContainer = document.createElement("div");
      carouselContainer.id = "carouselExampleIndicators";
      carouselContainer.classList.add("carousel", "slide");
      carouselContainer.setAttribute("data-bs-ride", "carousel");

      const indicators = document.createElement("div");
      indicators.classList.add("carousel-indicators");

      const inner = document.createElement("div");
      inner.classList.add("carousel-inner");

      data.results.forEach((movie, index) => {
        // Crear indicadores
        const indicator = document.createElement("button");
        indicator.type = "button";
        indicator.dataset.bsTarget = "#carouselExampleIndicators";
        indicator.dataset.bsSlideTo = index;
        indicator.ariaLabel = `Slide ${index + 1}`;
        if (index === 0) {
          indicator.classList.add("active");
          indicator.ariaCurrent = "true";
        }
        indicators.appendChild(indicator);

        // Crear elementos del carrusel
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) {
          carouselItem.classList.add("active");
        }

        carouselItem.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w780/${
            movie.poster_path
          }" class="d-block w-100" alt="${movie.title} Poster">
          <div class="carousel-caption d-none d-md-block">
            <h2>${movie.title}</h2>
            <p>${
              movie.overview.length > 1000
                ? movie.overview.substring(0, 1000) + "..."
                : movie.overview
            }</p>
          </div>
        `;

        inner.appendChild(carouselItem);
      });

      // Agregar controles al carrusel
      const prevButton = document.createElement("button");
      prevButton.classList.add("carousel-control-prev");
      prevButton.type = "button";
      prevButton.dataset.bsTarget = "#carouselExampleIndicators";
      prevButton.dataset.bsSlide = "prev";
      prevButton.innerHTML = `
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      `;

      const nextButton = document.createElement("button");
      nextButton.classList.add("carousel-control-next");
      nextButton.type = "button";
      nextButton.dataset.bsTarget = "#carouselExampleIndicators";
      nextButton.dataset.bsSlide = "next";
      nextButton.innerHTML = `
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      `;

      // Agregar elementos al contenedor del carrusel
      carouselContainer.appendChild(indicators);
      carouselContainer.appendChild(inner);
      carouselContainer.appendChild(prevButton);
      carouselContainer.appendChild(nextButton);

      // Insertar el carrusel en el contenedor listadoPeliculas
      listadoPeliculas.appendChild(carouselContainer);
    });
}

traerNovedadesPeliculas(apiKey);
