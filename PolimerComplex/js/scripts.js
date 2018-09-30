$(document).ready(function(){
        $('.menu__icon').click(function(){
            $(".menu__adaptive").css("display", "block")
    });
        $('.menu__close').click(function(){
        $(".menu__adaptive").css("display", "none")

    });


    $('.topBannerSlider').bxSlider({
        mode: "fade"
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

    $(".portfolio-lines").each(function(i){
        var ths = $(this);
        $(this).find('.portfolioSliderIn').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 778,
            slideMargin: 26,
            infiniteLoop: false,
            hideControlOnEnd: true,
            onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
                ths.find('.active-slide').removeClass('active-slide');
                ths.find('.portfolioItemIn').eq(currentSlideHtmlObject).addClass('active-slide')
            },
            onSliderLoad: function () {
                ths.find('.portfolioItemIn').eq(0).addClass('active-slide');
            }
        });
    });

    $("#datepicker").datepicker();
    $(".select").selectmenu();
    /*
    $("#spinner").spinner({
        min: 0,
        max: 100,
        step: 1
    });
    $('#spinner').keyup(function () {
        this.value = this.value.replace(/[^0-9\.]/g,'');
    });
    */
    $("#spinner").spinner({
        min: 0,
        max: 100,
        step: 1
    }).on('input', function () {
        if ($(this).data('onInputPrevented')) return;
        var val = this.value,
            $this = $(this),
            max = $this.spinner('option', 'max'),
            min = $this.spinner('option', 'min');
        // We want only number, no alpha.
        // We set it to previous default value.
        if (!val.match(/^[+-]?[\d]{0,}$/)) val = $(this).data('defaultValue');
        this.value = val > max ? max : val < min ? min : val;
    }).on('keydown', function (e) {
        // we set default value for spinner.
        if (!$(this).data('defaultValue')) $(this).data('defaultValue', this.value);
        // To handle backspace
        $(this).data('onInputPrevented', e.which === 8 ? true : false);
    });


    $.widget( 'app.selectmenu', $.ui.selectmenu, {
        _drawButton: function() {
            this._super();

            var selected = this.element
                    .find( '[selected]' )
                    .length,
                placeholder = this.options.placeholder;

            if ( !selected && placeholder ) {
                this.buttonText.text( placeholder );
                this.buttonText.addClass("placeholded");
            } else {
                this.buttonText.removeClass("placeholded");
            }
        }
    });

    $('.selecttheme').selectmenu({
        placeholder: 'Выбирете тему сообщения',
        change: function( event, data ) {
            $('.ui-selectmenu-text').removeClass("placeholded");
			if(data.item.value=="other") {
				$("#type_other").show();
			} else {
				$("#type_other").hide();
			}
        }
    });

    $(".big-pic img").attr("src", $(".picPreview:not(.bx-clone):first img").attr("src"));
    $(".picPreview:not(.bx-clone):first").addClass("active");

    $(".picPreview[data-youtube]:not(.bx-clone)").each(function(){
        $(this).append("<a href='#" + $(this).attr("data-youtube") + "' rel='modal:open'><img src='http://img.youtube.com/vi/" + $(this).attr("data-youtube") + "/1.jpg' alt=''>");
        $("body").append('<div id="' + $(this).attr("data-youtube") + '" class="modal"><div class="flex-video"><iframe src="https://www.youtube.com/embed/' + $(this).attr("data-youtube") + '" frameborder="0" allowfullscreen></iframe></div></div>');
    });
	
	/*$("a[data-img]").each(function() {
		$("body").append('<div id="' + $(this).attr("data-id") + '" class="modal img"><img src="' + $(this).attr("data-img") + '" /></div>');
	});*/
	$("a[rel='modal:open']").removeAttr("rel").addClass("fancybox");
	$(".fancybox").fancybox();

    $(".picPreview").click(function(){
        if ($(this).is('[data-youtube]')){

        } else {
            $(".big-pic img").attr("src", $(this).find("img").attr("src"));
        }
        $(".picPreview").removeClass("active");
        $(this).addClass("active");
    });

    /*$('.modal').on($.modal.OPEN, function(event, modal) {
        $(this).find("iframe").attr("src", $(this).find("iframe").attr("src") + "?autoplay=1");
    });

    $('.modal').on($.modal.CLOSE, function(event, modal) {
        var videoURL = $(this).find("iframe").attr('src');
        videoURL = videoURL.replace("?autoplay=1", "");
        $(this).find("iframe").attr('src','');
        $(this).find("iframe").attr('src',videoURL);
    });*/
	
	$.fancybox.open($('.automodal'));
	//$('.automodal').modal();

    $(".portfolio-lines").hide();
    $(".portfolio-lines:first-child").show();
    $(".portfolioItem a").click(function(){
        $(".portfolio-lines").hide();
        $("#" + $(this).attr("data-rel")).show();

        $(".portfolioItem").removeClass("active");
        $(this).parents(".portfolioItem").addClass("active");

        $(".portfolioItemIn").each(function(event){
            var videoURL = $(this).find("iframe").attr('src');
            $(this).find("iframe").attr('src','');
            $(this).find("iframe").attr('src',videoURL);
        });
    });
    $(".portfolioItem:not(.bx-clone):first").addClass("active");

    $("#tabs").tabs();

    $(".contacts form").validate();
	$("form.validate").validate();

    $(".portfolio-line .bx-controls-direction a").click(function(){
        $(".portfolioItemIn").each(function(event){
            var videoURL = $(this).find("iframe").attr('src');
            $(this).find("iframe").attr('src','');
            $(this).find("iframe").attr('src',videoURL);
        });
    });
	
	$(document).on("click", "a[data-ajaxurl]", function() {
		var $this=$(this);
		$.get($this.data("ajaxurl"), {ajaxpagesid:$this.data("ajaxpagesid")}, function(res) {
			$("#"+$this.data("ajaxid")).after(res).remove();
		});
		return false;
	});
});

