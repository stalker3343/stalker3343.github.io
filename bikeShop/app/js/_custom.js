document.addEventListener("DOMContentLoaded", function () {
  // Custom JS

  let menuBtn = document.querySelector(".menu__btn");
  let menuBody = document.querySelector(".menu__body");

  menuBtn.addEventListener("click", function () {
    menuBody.classList.toggle("menu__body_active");
    menuBtn.classList.toggle("menu__btn_active");
  });




  function ibg() {
    document.querySelectorAll(".ibg").forEach(el => {
      if (el.querySelector('img')) {
        el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
      }
    });

  }

  ibg();

  const slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    navPosition: 'bottom',
    mouseDrag: true,
    autoHeight: true,
    // controlsContainer: '.reviews__nav'
    // navContainer: '.reviews__nav'



  });


  let scroll = new SmoothScroll('a[href*="#"]', {
    // header: '[data-scroll-header]',
    speed: 400,
    emitEvents: true
  });
  document.addEventListener('scrollStart', closeMenu, false);

  function closeMenu() {
    menuBody.classList.remove("menu__body_active");
    menuBtn.classList.remove("menu__btn_active");
  }


});