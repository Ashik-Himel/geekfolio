const toggler = document.querySelector(".material-icons-outlined");
const navMenu = document.querySelector(".header-section nav ul");
const navLink = document.querySelectorAll(".header-section nav ul a");

toggler.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
navLink.forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("active");
  })
);
