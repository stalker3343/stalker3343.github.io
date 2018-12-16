var popup = document.getElementById('popup'),
    call = document.getElementById('call'),
    close = document.getElementById('close');

call.addEventListener('click',()=>{
    popup.style.display ='block';
} );
close.addEventListener('click',()=>{
    popup.style.display ='none';
});


$(document).ready(function(){
    $('.produse__slider').slick({
      infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    asNavFor: '.slider-nav',
   responsive: [
      {
        breakpoint: 774,
        settings: {
          arrows: true,
        }
      }
    ]
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.produse__slider',
        arrows: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              arrows: false,
            }
          }
        ]
     
      });


      $('.testimonials__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
  
        arrows: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 774,
            settings: {
              slidesToShow: 1
            }
          }
        ]
     
      });
 $('.main__image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, 
        arrows: false,
        dots: false,
 
     
      });

      $('.testimonials__slider').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
        // other options
      });
      
  
     

    
    
  });


