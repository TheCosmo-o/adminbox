// Aktualny rok w stopce
document.getElementById('year').textContent = new Date().getFullYear();

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const closeBtn = document.getElementById("close-btn");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });

  // Zamknij menu po kliknięciu linku
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });