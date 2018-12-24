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
  slidesToShow: 7,
   infinite: false,
   slidesToScroll: 4,
  arrows:true,
  dots:true,
    responsive: [

    {
      breakpoint: 768,
      settings: {
      slidesToShow: 5,
      }
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