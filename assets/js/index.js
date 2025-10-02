/* =========================
   CARRUSEL - NAVEGACIÓN
   ========================= */
const carrusel = document.getElementById("carrusel");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

btnLeft.addEventListener("click", () => {
  carrusel.scrollBy({ left: -350, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  carrusel.scrollBy({ left: 350, behavior: "smooth" });
});
