$(document).ready(function() {
  $('.menu__icon').click(function() {
    $('.menu__adaptive').animate({ left: '50%' }, 300);
  });
  $('.menu__close').click(function() {
    $('.menu__adaptive').animate({ left: '110%' }, 300);
  });
});
