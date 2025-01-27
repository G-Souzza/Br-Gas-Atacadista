// const navLinks = document.querySelector(".nav-links");
// navLinks.classList.toggle("active");

//Animação suave ao rolar para as seções
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});