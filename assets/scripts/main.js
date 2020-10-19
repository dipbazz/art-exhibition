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
var menu_open = document.getElementById('navbar-toogle-open');
var menu_close = document.getElementById('navbar-toogle-close')
var menu = document.getElementById('navbar-menu');

menu_open.onclick = openNavMenu;
menu_close.onclick = closeNavMenu;

function openNavMenu() {
  menu.classList.add('show-menu');
  navbar.classList.remove('fixed-header');
};

function closeNavMenu() {
  menu.classList.remove('show-menu');
  stickyNav();
}
