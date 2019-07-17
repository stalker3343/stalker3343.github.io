window.addEventListener("DOMContentLoaded", function () {


  var accordion = new Accordion('.accordion-container');
  var accordion2 = new Accordion('.accordion-container2');


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

  const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
  });

  // const options = {
  //   threshold: 0.1
  // }
  // let AlreadyInsert = false;
  // let mapCont = document.querySelector('.map-cont')


  // const callback = function (entries, observer) {

  //   entries.forEach(el => {
  //     if (el.isIntersecting) {
  //       if (!AlreadyInsert) {
  //         let elem = document.createElement('script')
  //         elem.setAttribute("src", "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Addadc5d30f7af11fee01efcdb3af229c494f5ae2cf768a7e1f4131b9d8bb1366&amp;width=100%25&amp;height=500&amp;lang=ru_UA&amp;scroll=true")
  //         elem.setAttribute("type", "text/javascript")
  //         elem.setAttribute("charset", "utf-8")
  //         mapCont.appendChild(elem)

  //         AlreadyInsert = true;
  //       }

  //     }
  //   });


  // };
  // const observer = new IntersectionObserver(callback, options);

  // const target = document.querySelector('.order');
  // observer.observe(target);


});