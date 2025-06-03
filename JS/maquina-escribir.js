const texto = "Transformamos ideas en soluciones digitales.";
  const typewriter = document.querySelector('.typewriter-text');

  // Puedes usar una pausa para el efecto natural
  setTimeout(() => {
    typewriter.textContent = texto;
  }, 500);