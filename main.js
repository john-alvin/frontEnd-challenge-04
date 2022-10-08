"use strict";

const menuBtn = document.querySelector(".burger-menu");
const nav = document.querySelector(".navigation");

let showMenu = false;

menuBtn.addEventListener("click", () => {
  if (!showMenu) {
    nav.classList.add("open");
    showMenu = true;
  } else {
    nav.classList.remove("open");
    showMenu = false;
  }
});
