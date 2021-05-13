const hamburger = document.querySelector(".hamburger");
const hamButton = document.querySelector(".ham-button");
const closeButton = document.querySelector(".close-button");
const showNav = document.querySelector(".nav-list");
const linkList = document.querySelectorAll(".nav-list-link");

const menuStateChange = () => {
  hamButton.classList.toggle("displayed");
  closeButton.classList.toggle("displayed");
  showNav.classList.toggle("show-nav");
};

const lockScroll = () => {
  //   This keeps the body from scrolling when the menu is displayed (fixes a bug where you can scroll the menu and logo off screen)
  if (document.body.style.overflowY === "hidden") {
    document.body.style.overflowY = "auto";
  } else {
    document.body.style.overflowY = "hidden";
  }
};

(hamburger.onclick = menuStateChange), lockScroll;

linkList.forEach((link) => {
  link.onclick = menuStateChange;
});
