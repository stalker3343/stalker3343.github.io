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



    $("#menu").mmenu({
        extensions: ["position-right", "pagedim-black"],
        offCanvas: {
            pageSelector: "#my-wrapper"
        },
        classNames: {
            selected: "nav__item_active"
        },
    });
    var api = $("#menu").data("mmenu");
    api.bind("open:finish", function () {
        $('.hamburger').addClass('is-active')
    });
    api.bind("close:finish", function () {
        $('.hamburger').removeClass('is-active')
    });
    // $("#menu").mmenu({
    //     "extensions": [
    //       "fx-listitems-slide"
    //     ]
    //   }

    // {
    //   // configuration
    //   offCanvas: {
    //     pageSelector: "#my-wrapper"
    //   },
    //   classNames: {
    //     selected: "nav__item_active"
    //   },

    // });
    var waypoint = new Waypoint({
        element: document.getElementById('contacts'),
        handler: function () {
            console.log('point');
            $('.map__cont').append('<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A26ab2bf49c9e486dd480fb9d1b311a100de56ee33c6ce0bbbf4d5fa50e5f4b5d&amp;width=100%25&amp;height=400&amp;lang=ru_UA&amp;scroll=false"></script>');
        }
    })


});