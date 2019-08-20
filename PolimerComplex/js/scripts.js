$(document).ready(function() {
  $('.menu__icon').click(function() {
    $('.menu__adaptive').css('display', 'block');
  });
  $('.menu__close').click(function() {
    $('.menu__adaptive').css('display', 'none');
  });

  $('.topBannerSlider').bxSlider({
    mode: 'fade'
  });

  $('.trustSlider').bxSlider({
    minSlides: 1,
    maxSlides: 5,
    slideWidth: 157,
    slideMargin: 20
  });

  $('.newsSlider').bxSlider({
    minSlides: 1,
    maxSlides: 3,
    slideWidth: 304,
    slideMargin: 45,
    nextSelector: '#newsSliderNext',
    prevSelector: '#newsSliderPrev',
    nextText: '',
    prevText: ''
  });

  $('.picPreviews').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 130,
    slideMargin: 6
  });

  $('.productSlider').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    nextSelector: '#productSliderNext',
    prevSelector: '#productSliderPrev',
    nextText: '',
    prevText: ''
  });

  $('.portfolioSlider').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 210,
    slideMargin: 33,
    infiniteLoop: false,
    hideControlOnEnd: true
  });

  $('.portfolio-lines').each(function(i) {
    var ths = $(this);
    $(this)
      .find('.portfolioSliderIn')
      .bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 778,
        slideMargin: 26,
        infiniteLoop: false,
        hideControlOnEnd: true,
        onSlideAfter: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
          ths.find('.active-slide').removeClass('active-slide');
          ths
            .find('.portfolioItemIn')
            .eq(currentSlideHtmlObject)
            .addClass('active-slide');
        },
        onSliderLoad: function() {
          ths
            .find('.portfolioItemIn')
            .eq(0)
            .addClass('active-slide');
        }
      });
  });
});
