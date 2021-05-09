const hamburger = document.querySelector(".hamburger");
const hamButton = document.querySelector(".ham-button");
const closeButton = document.querySelector(".close-button");
const showNav = document.querySelector(".nav-list");
const link = document.querySelector(".nav-list-link");
const links = document.querySelectorAll(".nav-list-link");

const menuStateChange = () => {
  hamButton.classList.toggle("displayed");
  closeButton.classList.toggle("displayed");
  showNav.classList.toggle("show-nav");

  if (document.body.style.overflowY === "hidden") {
    document.body.style.overflowY = "auto";
  } else {
    document.body.style.overflowY = "hidden";
  }
};

hamburger.onclick = menuStateChange;

links.forEach((link) => {
  link.onclick = menuStateChange;
});
