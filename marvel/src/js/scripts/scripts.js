$(document).ready(function () {


    $(".spincrement").counterUp({
        delay: 10,
        time: 1000
    });

    $(".work__content-tabs-item").not(":first").hide();
    $(".work__btn").click(function () {
        $(".work__btn").removeClass("work__btn_active").eq($(this).index()).addClass("work__btn_active");
        $(".work__content-tabs-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("work__btn_active");

    // для плавного перехода по якорной ссылке
    $(".nav__menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    $("#menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    // скрытие и показ элементов по клику одного и тогоже элемента
    $('#map').on("click", function () {
        $('.map__cont').slideToggle(1000); // используя приставку slide изменил появление элемента на снизу вверх
        /*   setInterval(ShowText, 1500); */
    });



});