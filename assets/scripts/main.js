// for navbar to be sticky on certain offset of page.
window.onscroll = function () {
  stickyNav();
};

var navbar = document.getElementById("header");

var OFFSET_VALUE = 100;

function stickyNav() {
  if (window.pageYOffset >= OFFSET_VALUE) {
    navbar.classList.add('fixed-header');
  } else {
    navbar.classList.remove('fixed-header');
  }
}

// side navbar pop up when clicked on hamburger menu icon.
var toogle_menu = document.getElementById('navbar-toogle');

toogle_menu.onclick = openNavMenu;

function openNavMenu() {
  console.log('clicked');
};
