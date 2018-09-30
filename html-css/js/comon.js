$(function(){
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	$('.banner-slider').slick({
		arrows: false,
		dots:true,
		autoplay:true,
		autoplaySpeed: 1000,
	})
	$('.quter-slider').slick({
		arrows: false,
		dots:true,
		autoplay:true,
		autoplaySpeed: 1000,
	})
	$('.portfolio_slider').slick({
		dots:true,
		appendArrows:".portfolio_buttons",
		prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		nextArrow:'<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
	})
	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
		}, 2000);
		e.preventDefault();

	})
});
