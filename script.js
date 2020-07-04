let hamburger = document.querySelector('.hamburger');
let navLink = document.querySelector('.nav-list');
let html = document.querySelector('html');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navLink.classList.toggle('nav-active');
  html.classList.toggle('no-scroll');
})
