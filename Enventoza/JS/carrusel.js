document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const carrusel = document.querySelector(".carrusel-contenedor");
    const items = document.querySelectorAll(".carrusel-item");
    const totalItems = items.length;

    function moverCarrusel() {
        index = (index + 1) % totalItems;
        carrusel.style.transform = `translateX(-${index * 200}%)`;
    }

    setInterval(moverCarrusel, 10000);
});
