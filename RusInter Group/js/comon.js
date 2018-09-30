// (function($){
// 	$(function(){
// 		&('.icon').on('click',function(){
// 			$(this).closests('.menu').toggleClass('menu-open')
// 		});
// 	});
// })(jQuery);

$(document).ready(function(){

	
	$('.menu__icon').click(function(){
		$('.menu__adaptive').animate({'left': '50%'},300)
	});
		$('.menu__close').click(function(){
		$('.menu__adaptive').animate({'left': '110%'},300)

	});

});



//.menu__icon появлялся .menu__adaptive