function entrar() {
  window.location.href = "catalogo.html";
}


history.scrollRestoration = "manual";

// Detecta si es recarga
if (performance.getEntriesByType("navigation")[0].type === "reload") {
  window.location.href = "index.html";
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


//Modal - Catalog Section
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {

    const info = card.querySelector(".modal-info");
    if (!info) return;

    modalBody.innerHTML = info.innerHTML;
    modal.style.display = "block";
  });
});

closeBtn.onclick = () => modal.style.display = "none";

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});




