$(document).ready(function () {
  $(".set > a").on("click", function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(200);
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    } else {
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $('.content').slideUp(200);
      $(this).siblings('.content').slideDown(200);
    }
  });
});

function closeMenu() {
  navWrap.classList.remove('nav-wrap__open');
  nav.classList.remove('nav__open')
  nav.classList.add('nav__closed')
}

function openMenu() {
  navWrap.classList.add('nav-wrap__open');
  nav.classList.remove('nav__closed')
  nav.classList.add('nav__open')
}

let openMenuBtn = document.querySelector('.header__menu-link');
let navWrap = document.querySelector('.nav-wrap');
let closeBtn = document.querySelector('.nav__close');
let nav = document.querySelector('.nav');

openMenuBtn.addEventListener('click', openMenu)
navWrap.addEventListener('click', closeMenu)
closeBtn.addEventListener('click', closeMenu)




let scroll = new SmoothScroll('a[href*="#"]', {
  header: '[data-scroll-header]',
  speed: 300,
  emitEvents: true
});
document.addEventListener('scrollStart', closeMenu, false);

lightGallery(document.getElementById('lightgallery'));