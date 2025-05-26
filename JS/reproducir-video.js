function reproducirSiguiente() {
    const video1Container = document.getElementById('video1-container');
    const botonesVideo1 = document.getElementById('botones-video1');
    const video2Container = document.getElementById('video2-container');
    const video2 = document.getElementById('video2');

    if (video1Container && botonesVideo1) { // Verificamos si existen
        video1Container.style.display = 'none';
        botonesVideo1.style.display = 'none';
    }

    if (video2Container && video2) { // Verificamos si el segundo video también está disponible
        video2Container.style.display = 'block';
        video2.play();
    }
}