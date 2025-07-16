const carousel = document.getElementById("carousel");

let startX = 0;
let isDown = false;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
}, false);

carousel.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  handleSwipe(startX, endX);
}, false);

carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.clientX;
});

carousel.addEventListener("mouseup", (e) => {
  if (!isDown) return;
  isDown = false;
  const endX = e.clientX;
  handleSwipe(startX, endX);
});

function handleSwipe(start, end) {
  const delta = start - end;
  const threshold = 50; // Mínimo necessário para considerar swipe

  if (delta > threshold) {
    // Próximo slide
    carousel.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  } else if (delta < -threshold) {
    // Slide anterior
    carousel.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  }
}

