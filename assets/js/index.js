// =========================
// Acordeón de información extra
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const infoExtra = document.querySelector(".info-extra");
  const toggleBtn = document.querySelector(".toggle-info");

  toggleBtn.addEventListener("click", () => {
    infoExtra.classList.toggle("activo");
  });
});
