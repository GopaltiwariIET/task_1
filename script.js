btnn = document.getElementById("btn1");
btnn.addEventListener("click", function () {
  window.location = "/form";
});
btmn = document.getElementById("btn2");
btmn.addEventListener("click", function () {
  window.location = "/form";
});

const menu = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const names = document.getElementById("span");
const logo = document.querySelector(".logo");
const image = document.querySelector("#img");

function toggleMenu() {
  if (window.scrollY > 0) {
    window.scrollTo(0, 0);
    menu.classList.remove("animate");
    image.src = "image/logo_2.png";
  } else {
    if (menu.classList.contains("animate")) {
      menu.classList.remove("animate");
      image.src = "image/logo_2.png";
    } else {
      menu.classList.add("animate");
      image.src = "image/logo_1.png";
    }
  }
}
window.onscroll = function () {
  if (window.scrollY > 0) {
    logo.classList.remove("name")
  }
  else{
    logo.classList.add("name")
  }
};
hamburger.addEventListener("click", toggleMenu);

if (window.scrollY > 0) {
  logo.classList.remove("name")
}