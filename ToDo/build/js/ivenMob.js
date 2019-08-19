(function (document) {
  "use strict";

  /**
   * Класс события Tap
   *
   * @class TapEvents
   * @example
   * // Добавляем код в основной файл:
   * // <script type="text/javascript" src="js/tapEvents.js"></script>
   * //
   * // Используем событие tap:
   *  document.getElementById('tapBtn').addEventListener('tap', function(e){
   *		console.log('TAP - catched on #tapBtn');
   *	}, false);
   *
   *  document.addEventListener('tap', function(e){
   *		console.log('TAP - catched on document');
   *	}, false);
   * 
   */
  var TapEvents = function () {
    var self = this;

    /**
     * Определяем является ли текущее событие tap или нет.
     * 
     * @private
     * @memberof TapEvents
     * @type {Boolean}
     */
    var thisIsTap = true;

    /**
     * Тут будет храниться объект принимающий событие tap
     * 
     * @private
     * @memberof TapEvents
     * @type {Object}
     */
    var touchstartTargetElement = null;

    /**
     * основной объект с новым событием tap
     *
     * @private
     * @memberof TapEvents
     * @type {Object}
     */
    var TapEvent = null;

    /**
     * Имя события<br>
     * по-умолчанию будет называться "tap", но возможно, что будут причины сменить его
     *
     * @private
     * @memberof TapEvents
     * @type {String}
     */
    var tapEventName = 'tap';

    /**
     * Инициализация класса
     *
     * @function init
     * @public
     * @memberof TapEvents
     */
    this.init = function () {
      bindEvents();
      registerTapEvent();
    };

    /**
     * Регистрируем базовые события в  DOM
     *
     * @function bindEvents
     * @private
     * @memberof TapEvents
     */
    function bindEvents() {

      // В момент начала нажатия я записываю целевой объект DOM
      document.addEventListener('touchstart', function (e) {
        thisIsTap = true;
        touchstartTargetElement = e.target;
      }, false);

      // После того, как нажатие закончилось я проверяю является ли текущее событие tap или было отменено
      document.addEventListener('touchend', function () {
        if (thisIsTap && touchstartTargetElement != null && TapEvent != null) {
          touchstartTargetElement.dispatchEvent(TapEvent);
        }
      }, false);

      // Отменяем событие tap
      document.addEventListener('touchmove', cancelTouch, false);
      document.addEventListener('touchleave', cancelTouch, false);
      document.addEventListener('touchcancel', cancelTouch, false);
    };

    /**
     * Регистрируем новое имя для события - tap
     *
     * @function registerTapEvent
     * @private
     * @memberof TapEvents
     */
    function registerTapEvent() {
      TapEvent = new Event(tapEventName);
    };

    /**
     * Нынешнее событие не является tap
     *
     * @function cancelTouch
     * @private
     * @memberof TapEvents
     */
    function cancelTouch() {
      thisIsTap = false;
      touchstartTargetElement = null;
    };
  };

  /*
   * Ждем пока DOM будет готов.
   * Все браузеры кроме IE<9 поддерживают это событие.
   */
  document.addEventListener("DOMContentLoaded", function () {
    var _te = new TapEvents();
    _te.init();
  }, false);

})(document);