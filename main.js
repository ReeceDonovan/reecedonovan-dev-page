let navbar = document.querySelector(".navbar");
let navBtn = document.querySelector(".navBtn");
let menuItems = document.querySelectorAll(".menuItem");

navBtn.addEventListener("click", toggleNav);

function toggleNav() {
  navbar.classList.toggle("showNav");
  navBtn.classList.toggle("showClose");
}

menuItems.forEach(function (menuItems) {
  menuItems.addEventListener("click", toggleNav);
});
