document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nav-placeholder").innerHTML = createNavigation();

  setActiveNavLink();

  setupHamburgerMenu();
});

function createNavigation() {
  return `
    <nav class="nav-container">
        <div class="name-container">
            <h2>C.F</h2>
        </div>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <div class="links-container">
            <a href="index.html" class="nav-link">Home</a>
            <a href="resume.html" class="nav-link">Resume</a>
            <a href="about.html" class="nav-link">About Me</a>
        </div>
    </nav>
    `;
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

function setupHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".links-container");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}
