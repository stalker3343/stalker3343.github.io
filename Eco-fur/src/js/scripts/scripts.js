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
window.addEventListener("DOMContentLoaded", function () {
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
  let akcia = document.querySelector('.akciaModal');

  setTimeout(function () {
    akcia.style.display = "flex";
  }, 3000)

  akcia.addEventListener('click', function (e) {
    if (e.target != document.querySelector(".akciaModal__img"))
      akcia.style.display = "none"
  }, false)

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




  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(event) {
    var matrix = "+7 (___) ___ ____",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
  };
  var input = document.querySelector(".contacts__input");
  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
});