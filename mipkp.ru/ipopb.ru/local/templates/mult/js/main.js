$(document).ready(function() { 
	$(".various").fancybox({
		maxWidth	: 1140,
		maxHeight	: 640,
		fitToView	: false,
		width		: '100%',
		height		: '100%',
		padding: 0,
		margin: [40,0,10,0],
		openEffect	: 'none',
		closeEffect	: 'none'
	});

		
	$('a.feedback-btn').fancybox({
		'padding': 25,
		'overlayOpacity': 0.87,
		'overlayColor': '#fff',
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',
		autoSize	: true,
		autoCenter : true,
		type: 'ajax',
		'helpers':  {
			'overlay' : {
				'locked' : false
			}
		}
	});
	
	$('a.ajax-btn').fancybox({
		'margin': [40,0,30,0],
		'padding': 0,
		'overlayOpacity': 0.87,
		'overlayColor': '#d7d8d8',
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',
		autoSize	: true,
		autoCenter : true,
		type: 'ajax',
		'helpers':  {
			'overlay' : {
				'locked' : false
			}
		}
	});
	
	$(".fancybox").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',
		maxWidth: 1140,
		autoSize	: true,
		autoCenter : true,
		padding: 0,
		margin: [40,20,20,20],
		helpers:{
				overlay:{
							locked: false
						}
				}
		}); 
		
	$(".fancybox-thumb").fancybox({
		margin: [40,20,20,20],
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
	
});