// Función para randomizar el orden de array
function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // Mientras haya elementos a mezclar
  while (currentIndex !== 0) {
    // Escoge un elemento restante
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Y cambia el elemento actual con el elemento escogido aleatoriamente
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Escucha los clics en el contenedor de películas
const container = document.querySelector(".box-container-1");
container.addEventListener("click", (event) => {
  const img = event.target.closest(".content-img");
  if (img) {
    const peliculaIndex = img.dataset.index;
    abrirIframe(peliculasFiltradas[peliculaIndex].iframe);
  }
});

// Función para abrir el iframe de la película seleccionada
function abrirIframe(iframeUrl) {
  // Abre el iframe en streamer.html
  window.location.href = `streamer.html?iframe=${encodeURIComponent(
    iframeUrl
  )}`;
}
