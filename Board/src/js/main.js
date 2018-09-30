$(function(){
	
$( ".search__filter" ).click(function(  ) {

	var title = $( ".search__region-resp" ).css( "display" );

	 if ( title != 'block') {
	        $('.search__region-resp').css('display','block');

	      }else{
	        $('.search__region-resp').css('display','none');

	      };
});

// function windowSize(){
//     if ($(window).width() <= '768'){
//         $('.unwrap').unwrap();
//     } else {
       
//     }
// }

// $(window).on('load resize',windowSize);
  
  $('.slider').slick({
  slidesToShow: 4,
   infinite: false,
   slidesToScroll: 4,
  arrows:true,
  dots:false,
    responsive: [
    {
      breakpoint: 2000,
      settings: 'unslick',
      
    },
    {
      breakpoint: 768,
      settings: 'slick'
    },
    {
      breakpoint: 575,
      settings: {
           slidesToScroll: 3,
             slidesToShow: 3,
      }
    }
  ]
  });



});