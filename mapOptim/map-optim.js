

$(document).ready(function(){
  
    //Переменная для включения/отключения индикатора загрузки
    var spinner = $('.ymap-container').children('.loader');
    //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
    var check_if_load = false;
    //Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
    var myMapTemp, myPlacemarkTemp;
    
    
        //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
    function init () {
    
    
        var myMapTemp = new ymaps.Map('map', {
                   center: [48.220851, 38.183762],
                   zoom: 18	
               }, {
                   searchControlProvider: 'yandex#search'
               }),
       
               // Создаём макет содержимого.
               MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                   '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
               ),
       
               myPlacemark = new ymaps.Placemark([48.221004, 38.184598], {
                   hintContent: 'МЫ тут',
                   balloonContent: 'Это красивая метка'
               }, {
                   // Опции.
                   // Необходимо указать данный тип макета.
                   iconLayout: 'default#image',
                   // Своё изображение иконки метки.
                   iconImageHref: 'img/header/logo_mobil.png',
                   // Размеры метки.
                   iconImageSize: [30, 30],
                   // Смещение левого верхнего угла иконки относительно
                   // её "ножки" (точки привязки).
                   iconImageOffset: [-15, -15]
               });
       
            
           myMapTemp.behaviors.disable('scrollZoom')
               myMapTemp.geoObjects
               .add(myPlacemark)
    
    
    
      // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
          var layer = myMapTemp.layers.get(0).get(0);
     
      // Решение по callback-у для определения полной загрузки карты
      waitForTilesLoad(layer).then(function() {
        // Скрываем индикатор загрузки после полной загрузки карты
        spinner.removeClass('is-active');
      });
    }
    
    
    // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
    function waitForTilesLoad(layer) {
      return new ymaps.vow.Promise(function (resolve, reject) {
        var tc = getTileContainer(layer), readyAll = true;
        tc.tiles.each(function (tile, number) {
          if (!tile.isReady()) {
            readyAll = false;
          }
        });
        if (readyAll) {
          resolve();
        } else {
          tc.events.once("ready", function() {
            resolve();
          });
        }
      });
    }
    
    function getTileContainer(layer) {
      for (var k in layer) {
        if (layer.hasOwnProperty(k)) {
          if (
            layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
            || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
          ) {
            return layer[k];
          }
        }
      }
      return null;
    }
    
    // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
    function loadScript(url, callback){
      var script = document.createElement("script");
     
      if (script.readyState){  // IE
        script.onreadystatechange = function(){
          if (script.readyState == "loaded" ||
                  script.readyState == "complete"){
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {  // Другие браузеры
        script.onload = function(){
          callback();
        };
      }
     
      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
    }
    
    var ymap = function() {
      $('.ymap-container').mouseenter(function(){
          if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
     
              // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
            check_if_load = true; 
     
            // Показываем индикатор загрузки до тех пор, пока карта не загрузится
            spinner.addClass('is-active');
     
            // Загружаем API Яндекс.Карт
            loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=eaacdc05-f371-4ba9-9fc1-2b3abc729fd9", function(){
               // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
               ymaps.load(init);
            });                
          }
        }
      );  
    }
     
    $(function() {
     
      //Запускаем основную функцию
      ymap();
     
    });
    });
    
    
    