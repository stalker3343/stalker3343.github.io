1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
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