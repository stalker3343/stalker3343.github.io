window.addEventListener("DOMContentLoaded", function () {

  var accordion = new Accordion('.accordion-container');
  var accordion2 = new Accordion('.accordion-container2');

  let openMenuBtn = document.querySelector('.header__menu-link');
  let navWrap = document.querySelector('.nav-wrap');
  let closeBtn = document.querySelector('.nav__close');
  let nav = document.querySelector('.nav');
  openMenuBtn.addEventListener('click', openMenu)
  navWrap.addEventListener('click', closeMenu)
  closeBtn.addEventListener('click', closeMenu)

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





  // let akcia = document.querySelector('.akciaModal');

  // setTimeout(function () {
  //   akcia.style.display = "flex";
  // }, 3000)

  // akcia.addEventListener('click', function (e) {
  //   if (e.target != document.querySelector(".akciaModal__img"))
  //     akcia.style.display = "none"
  // }, false)

  let zakazModal = document.querySelector('.zakazModal');

  let openZakazBtn = document.querySelector('.banner__button')
  let zakazModalWraper = document.querySelector('.zakazModal__wraper')
  let zakazModalClose = document.querySelector('.zakazModal__close')

  openZakazBtn.addEventListener('click', function () {
    zakazModal.style.display = "flex";
    zakazModalWraper.classList.add('zakazModal__show')
  })

  function closeZakazModal() {
    zakazModal.style.display = "none"
    zakazModalWraper.classList.remove('zakazModal__show')
  }
  zakazModalClose.addEventListener('click', closeZakazModal)
  zakazModal.addEventListener('click', closeZakazModal)
  zakazModalWraper.addEventListener('click', function () {
    event.stopPropagation()
  })







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

  let input = document.querySelectorAll(".tell");

  input.forEach(function (el) {
    el.addEventListener("input", mask, false);
    el.addEventListener("focus", mask, false);
    el.addEventListener("blur", mask, false);
  })


  const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"

  });

  let mapCont = document.querySelector('.map-cont')



  setTimeout(function () {
    let elem = document.createElement('script')
    elem.setAttribute("src", "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Addadc5d30f7af11fee01efcdb3af229c494f5ae2cf768a7e1f4131b9d8bb1366&amp;width=100%25&amp;height=500&amp;lang=ru_UA&amp;scroll=false")
    elem.setAttribute("type", "text/javascript")
    elem.setAttribute("charset", "utf-8")
    elem.setAttribute("defer", "defer")
    mapCont.appendChild(elem)
  }, 4000)



});