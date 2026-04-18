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


