// fermer le menu si appui sur le hamburger
const closeMenu = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.hamburger');

openMenu.addEventListener('click', function () {
  menu.classList.add('open-aside');
});

closeMenu.addEventListener('click', function () {
  menu.classList.remove('open-aside');
});
