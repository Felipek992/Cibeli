const heart = document.getElementById('heart');

heart.addEventListener('click', () => {
  heart.classList.add('pulsar');
  
  // Espera a animação terminar (~1.5s) antes de trocar de página
  setTimeout(() => {
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = "carta.html";
    }, 1000);
  }, 1500);
});