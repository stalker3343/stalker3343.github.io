(window.webpackJsonp=window.webpackJsonp||[]).push([[14,27,79,80,175],{1037:function(t,e,o){"use strict";o(857)},1038:function(t,e,o){var n=o(10)(!1);n.push([t.i,".component__yamap .ymap-container{width:100%;height:400px}@media (max-width:575px){.component__yamap .ymap-container{height:300px}}",""]),t.exports=n},1039:function(t,e,o){"use strict";o(858)},1040:function(t,e,o){var n=o(10)(!1);n.push([t.i,".component__layout-left-right .container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap}.component__layout-left-right .container.align-center{align-items:center}.component__layout-left-right .container.align-start{align-items:start}.component__layout-left-right .container.big-right .layout-left{width:40%}.component__layout-left-right .container.big-right .layout-right,.component__layout-left-right .container .layout-left{width:60%}@media (max-width:1280px){.component__layout-left-right .container .layout-left{width:50%!important}}@media (max-width:790px){.component__layout-left-right .container .layout-left{width:100%!important}}.component__layout-left-right .container .layout-right{width:40%;padding-left:60px}@media (max-width:1280px){.component__layout-left-right .container .layout-right{width:50%!important;padding-left:40px}}@media (max-width:790px){.component__layout-left-right .container .layout-right{padding-left:0;width:100%!important;margin-top:40px}}",""]),t.exports=n},1041:function(t,e,o){"use strict";o(859)},1042:function(t,e,o){var n=o(10)(!1);n.push([t.i,".component__jumbotron-form{padding:30px 0;background-size:cover;background-position:50%;background-repeat:no-repeat}.component__jumbotron-form .container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap}.component__jumbotron-form .container .jumbotron-left{width:60%}@media (max-width:1280px){.component__jumbotron-form .container .jumbotron-left{width:50%}}@media (max-width:790px){.component__jumbotron-form .container .jumbotron-left{width:100%}}.component__jumbotron-form .container .jumbotron-right{width:40%;padding-left:60px}@media (max-width:1280px){.component__jumbotron-form .container .jumbotron-right{width:50%;padding-left:40px}}@media (max-width:790px){.component__jumbotron-form .container .jumbotron-right{padding-left:0;width:100%;margin-top:40px}}.component__jumbotron-form .container .jumbotron-right .jumbotron-form{padding:20px;border-radius:10px;background-color:#fff;box-shadow:0 0 10px #f2f2f2}.component__jumbotron-form .container .jumbotron-right .jumbotron-form .form-title{font-weight:600;font-size:24px;margin-bottom:20px}",""]),t.exports=n},1256:function(t,e,o){var content=o(1391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("5d9d9a64",content,!0,{sourceMap:!1})},1283:function(t,e,o){"use strict";o.r(e);o(7),o(13),o(15),o(16),o(17);var n=o(6);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function m(t,e){var o=e.options,n=e.callbacks,a=e.map,i=e.useObjectManager,s=e.objectManagerClusterize,r={},c=[];if(t.forEach((function(t){t.clusterName?r[t.clusterName]=r[t.clusterName]?[].concat(function(t){return function(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(r[t.clusterName]),[t]):[t]:c.push(t)})),Object.keys(r).forEach((function(t){var e=o[t]||{},c=n[t]||{},l=e.layout||"\n      <div>{{ properties.balloonContentHeader }}</div>\n      <div>{{ properties.balloonContentBody }}</div>\n      <div>{{ properties.balloonContentFooter }}</div>\n    ";e.clusterBalloonItemContentLayout=ymaps.templateLayoutFactory.createClass(l);var u=e.clusterBalloonLayout||e.clusterLayout;delete e.clusterBalloonLayout;var p=u?ymaps.templateLayoutFactory.createClass(u):e.clusterBalloonContentLayout||"cluster#balloonTwoColumns";e.clusterBalloonContentLayout=p;var m=e.clusterIconContentLayout;if(e.clusterIconContentLayout=m&&ymaps.templateLayoutFactory.createClass(m),i){var d=new ymaps.ObjectManager(Object.assign({clusterize:s},e));Object.keys(c).forEach((function(t){d.clusters.events.add(t,c[t])})),d.add(r[t]),a.geoObjects.add(d)}else{var f=new ymaps.Clusterer(e);Object.keys(c).forEach((function(t){f.events.add(t,c[t])})),e.createCluster&&(f.createCluster=e.createCluster),f.add(r[t]),a.geoObjects.add(f)}})),c.length){var u=i?new ymaps.ObjectManager({clusterize:!1}):new ymaps.GeoObjectCollection;c.forEach((function(t){return u.add(t)})),a.geoObjects.add(u)}}function a(t){return t.charAt(0).toUpperCase()+t.slice(1)}function d(t){return(t.icon.color||"blue")+(t.icon.glyph?a(t.icon.glyph):t.icon.content?"Stretchy":"")}function s(t){return t.map((function(t){return Array.isArray(t)?s(t):+t}))}function f(t,e){var o=[];return function t(e,n){if(e===n)return!0;if(e instanceof Date&&n instanceof Date)return+e==+n;if("object"!==r(e)||"object"!==r(n))return!1;if(function(t,e){for(var n=o.length;n--;)if(!(o[n][0]!==t&&o[n][0]!==e||o[n][1]!==e&&o[n][1]!==t))return!0;return!1}(e,n))return!0;o.push([e,n]);var a=Object.keys(e),i=a.length;if(Object.keys(n).length!==i)return!1;for(;i--;)if(!t(e[a[i]],n[a[i]]))return!1;return!0}(t,e)}var h=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0}var e,o;return e=t,(o=[{key:"$on",value:function(t,e){var o=this;return this.events[t]||(this.events[t]=[]),this.events[t].push(e),function(){o.events[t]=o.events[t].filter((function(t){return e!==t}))}}},{key:"$emit",value:function(t,e){var o=this.events[t];o&&o.forEach((function(t){return t(e)}))}}])&&c(e.prototype,o),t}()),u=["fullscreenControl","geolocationControl","routeEditor","rulerControl","searchControl","trafficControl","typeSelector","zoomControl","routeButtonControl","routePanelControl"];function p(t){return 0===t.filter((function(t){return![].concat(u,["default"]).includes(t)})).length}function y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,o){if(window.ymaps)return e();if(document.getElementById("vue-yandex-maps"))h.$on("scriptIsLoaded",e);else{var n=document.createElement("SCRIPT"),r=t.apiKey,a=void 0===r?"":r,i=t.lang,s=void 0===i?"ru_RU":i,c=t.version,u=void 0===c?"2.1":c,p=t.coordorder,l=void 0===p?"latlong":p,m=t.debug,d=void 0!==m&&m?"debug":"release",f="lang=".concat(s).concat(a&&"&apikey=".concat(a),"&mode=").concat(d,"&coordorder=").concat(l),y="https://api-maps.yandex.ru/".concat(u,"/?").concat(f);n.setAttribute("src",y),n.setAttribute("async",""),n.setAttribute("defer",""),n.setAttribute("id","vue-yandex-maps"),document.head.appendChild(n),h.scriptIsNotAttached=!1,n.onload=function(){ymaps.ready((function(){h.ymapReady=!0,h.$emit("scriptIsLoaded"),e()}))},n.onerror=o}}))}var v=h,_=["actionend","balloonclose","balloonopen","click","contextmenu","dblclick","destroy","hintclose","hintopen","optionschange","sizechange","typechange"],k={pluginOptions:{},provide:function(){var t,e,o=this,n=[],r=[];return{useObjectManager:this.useObjectManager,addMarker:this.addMarker,deleteMarker:function(e){o.myMap.geoObjects&&(n.push(e),t&&clearTimeout(t),t=setTimeout((function(){o.deleteMarkers(n),n=[]}),0))},compareValues:function(t){var n=t.newVal,a=t.oldVal,i=t.marker;f(n,a)||(r.push(i),e&&clearTimeout(e),e=setTimeout((function(){o.setMarkers(r),r=[]}),0))}}},data:function(){return{ymapId:"yandexMap".concat(Math.round(1e5*Math.random())),myMap:{},style:this.ymapClass?"":"width: 100%; height: 100%;",isReady:!1,debounce:null,markers:[]}},props:{coords:{type:Array,required:!0},zoom:{validator:function(t){return!Number.isNaN(t)},default:18},bounds:Array,clusterOptions:{type:Object,default:function(){return{}}},clusterCallbacks:{type:Object,default:function(){return{}}},behaviors:{type:Array,default:function(){return["default"]}},controls:{type:Array,default:function(){return["default"]},validator:function(t){return p(t)}},detailedControls:{type:Object,validator:function(t){return p(Object.keys(t))}},scrollZoom:{type:Boolean,default:!0},mapType:{type:String,default:"map",validator:function(t){return["map","satellite","hybrid"].includes(t)}},placemarks:{type:Array,default:function(){return[]}},useObjectManager:{type:Boolean,default:!1},objectManagerClusterize:{type:Boolean,default:!0},ymapClass:String,initWithoutMarkers:{type:Boolean,default:!0},debug:{type:Boolean,default:!1},settings:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},showAllMarkers:Boolean},computed:{coordinates:function(){return this.coords.map((function(t){return+t}))}},methods:{init:function(){var t=this;window.ymaps&&ymaps.GeoObjectCollection&&(this.initWithoutMarkers||this.$slots.default||this.placemarks.length)&&(this.$emit("map-initialization-started"),this.myMap=new ymaps.Map(this.ymapId,{center:this.coordinates,zoom:+this.zoom,bounds:this.bounds,behaviors:this.behaviors,controls:this.controls,type:"yandex#".concat(this.mapType)},this.options),_.forEach((function(e){return t.myMap.events.add(e,(function(o){return t.$emit(e,o)}))})),this.myMap.events.add("boundschange",(function(e){var o=e.originalEvent,n=o.newZoom,r=o.newCenter,a=o.newBounds;t.$emit("boundschange",e),t.$emit("update:zoom",n),t.$emit("update:coords",r),t.$emit("update:bounds",a)})),this.detailedControls&&Object.keys(this.detailedControls).forEach((function(e){t.myMap.controls.remove(e),t.myMap.controls.add(e,t.detailedControls[e])})),!1===this.scrollZoom&&this.myMap.behaviors.disable("scrollZoom"),this.isReady=!0,this.$emit("map-was-initialized",this.myMap))},addMarker:function(t){var e=this;this.markers.push(t),this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout((function(){e.setMarkers(e.markers)}),0)},setMarkers:function(t){var e=this,o={options:this.clusterOptions,callbacks:this.clusterCallbacks,map:this.myMap,useObjectManager:this.useObjectManager,objectManagerClusterize:this.objectManagerClusterize};if(this.markers!==t){var n=t.map((function(t){return e.useObjectManager?t.id:t.properties.get("markerId")}));this.deleteMarkers(n),m(t,o),this.$emit("markers-was-change",n)}else m(t,o);this.markers=[],this.showAllMarkers&&this.myMap.setBounds(this.myMap.geoObjects.getBounds())},deleteMarkers:function(t){var e=this;this.myMap.geoObjects.each((function(o){var n=[];if(e.useObjectManager)o.remove(t);else{var r,a=function(e){var o=e.properties.get("markerId");t.includes(o)&&n.push(e)};if(o.each)o.each(a),r=o.getLength();else if(o.getGeoObjects){var i=o.getGeoObjects();i.forEach(a),r=i.length}0===r||r===n.length?e.myMap.geoObjects.remove(o):n.length&&n.forEach((function(t){return o.remove(t)}))}})),this.$emit("markers-was-delete",t)}},watch:{coordinates:function(t){this.myMap.panTo&&this.myMap.getZoom()&&this.myMap.panTo(t,{checkZoomRange:!0})},zoom:function(){this.myMap.setZoom(this.zoom)},bounds:function(t){this.myMap.setBounds&&this.myMap.setBounds(t)}},render:function(t){return t("section",{class:"ymap-container",ref:"mapContainer"},[t("div",{attrs:{id:this.ymapId,class:this.ymapClass,style:this.style}}),this.isReady&&t("div",{ref:"markersContainer",attrs:{class:"ymap-markers"}},[this.$slots.default])])},mounted:function(){var t=this;if(this.$attrs["map-link"]||this.$attrs.mapLink)throw new Error("Vue-yandex-maps: Attribute mapLink is not supported. Use settings.");if(this.placemarks&&this.placemarks.length)throw new Error("Vue-yandex-maps: Attribute placemarks is not supported. Use marker component.");this.mapObserver=new MutationObserver((function(){t.myMap.container&&t.myMap.container.fitToViewport()}));var e=this.$refs.mapContainer;if(this.mapObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!1}),v.scriptIsNotAttached){var o=this.debug;y(function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})))),n.forEach((function(e){l(t,e,o[e])}))}return t}({},this.$options.pluginOptions,this.settings,{debug:o}))}v.ymapReady?ymaps.ready(this.init):v.$on("scriptIsLoaded",(function(){ymaps.ready(t.init)}))},beforeDestroy:function(){this.myMap.geoObjects&&this.myMap.geoObjects.removeAll()}},O=["placemark","polyline","rectangle","polygon","circle"],b=["balloonclose","balloonopen","click","contextmenu","dblclick","drag","dragend","dragstart","hintclose","hintopen","mouseenter","mouseleave"],g={inject:["useObjectManager","addMarker","deleteMarker","compareValues"],props:{coords:Array,hintContent:String,icon:Object,balloon:Object,markerType:{type:String,validator:function(t){return O.includes(t.toLowerCase())},default:"placemark"},markerFill:Object,markerStroke:Object,clusterName:[String,Number],circleRadius:{validator:function(t){return!Number.isNaN(t)},default:1e3},balloonTemplate:String,markerId:{type:[String,Number],required:!0},properties:Object,options:Object},data:function(){return{unwatchArr:[]}},render:function(t){return this.$slots.balloon&&t("div",{style:"display: none;"},[this.$slots.balloon])},mounted:function(){var t=this;Object.keys(this.$props).forEach((function(e){t.unwatchArr.push(t.$watch(e,(function(e,o){return t.compareValues({newVal:e,oldVal:o,marker:t.defineMarker()})})))})),this.addMarker(this.defineMarker())},methods:{defineMarker:function(){var t=this,e={};this.balloonTemplate&&(e={balloonContentLayout:ymaps.templateLayoutFactory.createClass(this.balloonTemplate)}),this.$slots.balloon&&(e={balloonContentLayout:ymaps.templateLayoutFactory.createClass(this.$slots.balloon[0].elm.outerHTML)});var o={markerId:this.markerId,markerType:this.markerType||"placemark",coords:s(this.coords),hintContent:this.hintContent,markerFill:this.markerFill,circleRadius:+this.circleRadius,clusterName:this.clusterName,markerStroke:this.markerStroke,balloon:this.balloon,properties:this.properties,options:this.options,balloonOptions:e};this.icon&&["default#image","default#imageWithContent"].includes(this.icon.layout)?(o.iconContent=this.icon.content,o.iconLayout=this.icon.layout,o.iconImageHref=this.icon.imageHref,o.iconImageSize=this.icon.imageSize,o.iconImageOffset=this.icon.imageOffset,o.iconContentOffset=this.icon.contentOffset,this.icon.contentLayout&&"string"==typeof this.icon.contentLayout&&(o.iconContentLayout=ymaps.templateLayoutFactory.createClass(this.icon.contentLayout))):o.icon=this.icon;var n=function(t,e){var o=a(t);if(!e)return o;switch(o){case"Placemark":return"Point";case"Polyline":return"LineString";default:return o}}(o.markerType,this.useObjectManager),r={hintContent:o.hintContent,iconContent:o.icon?o.icon.content:o.iconContent,markerId:o.markerId},c=o.balloon?{balloonContentHeader:o.balloon.header,balloonContentBody:o.balloon.body,balloonContentFooter:o.balloon.footer}:{},l=Object.assign(r,c,o.properties),u=o.iconLayout?{iconLayout:o.iconLayout,iconImageHref:o.iconImageHref,iconImageSize:o.iconImageSize,iconImageOffset:o.iconImageOffset,iconContentOffset:o.iconContentOffset,iconContentLayout:o.iconContentLayout}:{preset:o.icon&&"islands#".concat(d(o),"Icon")},p=o.markerStroke?{strokeColor:o.markerStroke.color||"0066ffff",strokeOpacity:parseFloat(o.markerStroke.opacity)>=0?parseFloat(o.markerStroke.opacity):1,strokeStyle:o.markerStroke.style,strokeWidth:parseFloat(o.markerStroke.width)>=0?parseFloat(o.markerStroke.width):1}:{},m=o.markerFill?{fill:o.markerFill.enabled||!0,fillColor:o.markerFill.color||"0066ff99",fillOpacity:parseFloat(o.markerFill.opacity)>=0?parseFloat(o.markerFill.opacity):1,fillImageHref:o.markerFill.imageHref||""}:{},f=Object.assign(u,p,m,o.balloonOptions,o.options);"Circle"===n&&(o.coords=[o.coords,o.circleRadius]);var h=function(t,e){var o=e?{type:"Feature",id:t.properties.markerId,geometry:{type:t.markerType,coordinates:t.coords},properties:t.properties,options:t.options}:new ymaps[t.markerType](t.coords,t.properties,t.options);return o.clusterName=t.clusterName,o}({properties:l,options:f,markerType:n,coords:o.coords,clusterName:o.clusterName},this.useObjectManager,this.$emit);return this.useObjectManager||b.forEach((function(e){return h.events.add(e,(function(o){return t.$emit(e,o)}))})),h}},beforeDestroy:function(){this.unwatchArr.forEach((function(t){return t()})),this.deleteMarker(this.markerId)}};k.install=function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.installed||(t.installed=!0,k.pluginOptions=o,e.component("yandex-map",k),e.component("ymap-marker",g))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(k);var j=k,w=g,x=o(8);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var M={components:{yandexMap:j,ymapMarker:w},props:{coords:{type:Array,default:function(){return[]}}},data:function(){return{settings:{apiKey:this.yamapKey,lang:"ru_RU",coordorder:"latlong",version:"2.1"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(x.d)("layout",["yamapKey"]))},S=(o(1037),o(4)),component=Object(S.a)(M,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component__yamap"},[o("client-only",[o("yandex-map",{attrs:{settings:t.settings,coords:t.coords}},[o("ymap-marker",{attrs:{coords:t.coords,"marker-id":"123","hint-content":"IMPACT Capital"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},1296:function(t,e,o){"use strict";o.r(e);var n={props:{align:{type:String,default:"center"},bigRight:{type:Boolean,default:function(){return!1}}}},r=(o(1039),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component__layout-left-right"},[o("div",{staticClass:"container",class:"align-"+t.align+" "+(t.bigRight?"big-right":"")},[o("div",{staticClass:"layout-left"},[t._t("left")],2),t._v(" "),o("div",{staticClass:"layout-right"},[t._t("right")],2)])])}),[],!1,null,null,null);e.default=component.exports},1297:function(t,e,o){"use strict";o.r(e);var n={props:{title:{type:String,default:null},formTitle:{type:String,default:null},backgroundImage:{type:String,default:null}}},r=(o(1041),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component__jumbotron-form",style:"background-image: linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, .9) 100%), url("+t.backgroundImage+");"},[o("div",{staticClass:"container"},[o("div",{staticClass:"jumbotron-left"},[t.title?o("app-title",{attrs:{title:t.title}}):t._e(),t._v(" "),o("div",{staticClass:"jumbotron-text"},[t._t("text")],2)],1),t._v(" "),o("div",{staticClass:"jumbotron-right"},[o("div",{staticClass:"jumbotron-form"},[o("div",{staticClass:"form-title"},[t._v("\n          "+t._s(t.formTitle)+"\n        ")]),t._v(" "),o("div",{staticClass:"form-text"},[t._t("form-text")],2),t._v(" "),o("div",{staticClass:"form-container"},[t._t("form")],2)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTitle:o(558).default})},1390:function(t,e,o){"use strict";o(1256)},1391:function(t,e,o){var n=o(10)(!1);n.push([t.i,".page__contacts .contact-map{border-radius:10px;overflow:hidden;box-shadow:0 0 10px #f2f2f2}.page__contacts .contacts-details{margin:50px 0}",""]),t.exports=n},1443:function(t,e,o){"use strict";o.r(e);o(7),o(13),o(15),o(16),o(17);var n=o(6),r=o(8);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={data:function(){return{coords:[55.75791,37.53507]}},head:function(){var title=this.__locale("meta-contact-title"),t=this.__locale("meta-contact-description");return{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:t},{hid:"keywords",name:"keywords",content:""},{hide:"robots",name:"robots",content:"follow, index"},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:site_name",property:"og:site_name",content:"IMPACT Capital"},{hid:"og:image",property:"og:image",content:""}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.d)("layout",["contactItemsAlter"]))},m=(o(1390),o(4)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page__contacts"},[o("div",{staticClass:"container"},[o("app-title",{attrs:{title:t.__locale("menu-contacts")}})],1),t._v(" "),o("layout-left-right",{attrs:{align:"start","big-right":""},scopedSlots:t._u([{key:"left",fn:function(){return[o("p",[o("strong",[t._v(t._s(t.__locale("contact-impact")))]),t._v(" "),o("br"),t._v("\n        "+t._s(t.__locale("inn"))+": 7730251698 "),o("br"),t._v(t._s(t.__locale("kpp"))+": 770301001\n        "),o("br"),t._v("\n        "+t._s(t.__locale("ogrn"))+": 1197746387761\n        "),o("br"),t._v("\n        "+t._s(t.__locale("account-number"))+": 40701810002500000870"),o("br"),t._v("\n        "+t._s(t.__locale("bank"))),o("br"),t._v("\n        "+t._s(t.__locale("bik"))+": 044525999"),o("br"),t._v(t._s(t.__locale("corr-account"))+": 30101810845250000999\n      ")]),t._v(" "),o("div",{staticClass:"contacts-details"},[o("contact-items",{attrs:{items:t.contactItemsAlter}})],1)]},proxy:!0},{key:"right",fn:function(){return[o("div",{staticClass:"contact-map"},[o("yamap",{attrs:{coords:t.coords}})],1)]},proxy:!0}])}),t._v(" "),o("jumbotron-form",{attrs:{"form-title":t.__locale("request-callback")},scopedSlots:t._u([{key:"text",fn:function(){return[o("div",{staticClass:"contacts__form-image"},[o("img",{attrs:{src:"../images/naz.svg",alt:"image"}})])]},proxy:!0},{key:"form",fn:function(){return[o("form-subscribe",{attrs:{topic:"contacts"}})]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTitle:o(558).default,ContactItems:o(117).default,Yamap:o(1283).default,LayoutLeftRight:o(1296).default,FormSubscribe:o(169).default,JumbotronForm:o(1297).default})},557:function(t,e,o){var content=o(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("df1750dc",content,!0,{sourceMap:!1})},558:function(t,e,o){"use strict";o.r(e);o(7),o(13),o(15),o(16),o(17);var n=o(6),r=o(8);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={props:{titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},link:{type:String,default:null},linkTitle:{type:String,default:"Link title"},linkTitleShort:{type:String,default:null}},data:function(){return{linkTitleShortLocal:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.d)("localization",["language"])),mounted:function(){this.linkTitleShort?this.linkTitleShortLocal=this.linkTitleShort:this.linkTitleShortLocal=this.__locale("link-title-short")}},m=(o(559),o(4)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component__title"},[o("div",{staticClass:"title-text",class:["h1"!==t.titleTag?"small":""],domProps:{innerHTML:t._s("<"+t.titleTag+">"+t.title+"</"+t.titleTag+">")}}),t._v(" "),t.link?o("nuxt-link",{staticClass:"link",attrs:{to:"/"+t.language+t.link}},[o("span",{staticClass:"link-title"},[t._v(t._s(t.linkTitle))]),t._v(" "),o("span",{staticClass:"mobile-link-title"},[t._v(t._s(t.linkTitleShortLocal))]),t._v(" "),o("i",{staticClass:"fal fa-long-arrow-right"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,o){"use strict";o(557)},560:function(t,e,o){var n=o(10)(!1);n.push([t.i,".component__title{margin-bottom:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:575px){.component__title{justify-content:space-between;margin-bottom:20px}}.component__title .link{margin-top:6px;margin-left:24px}@media (max-width:575px){.component__title .link .link-title,.component__title .link i{display:none}.component__title .link .mobile-link-title{display:block!important}}.component__title .link .mobile-link-title{display:none}.component__title .title-text{font-weight:600;font-size:40px;line-height:47px}@media (max-width:790px){.component__title .title-text{font-size:30px;line-height:32px}}@media (max-width:575px){.component__title .title-text{font-size:24px;line-height:30px}}.component__title .title-text.small{font-size:38px}",""]),t.exports=n},857:function(t,e,o){var content=o(1038);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("b5c60ef8",content,!0,{sourceMap:!1})},858:function(t,e,o){var content=o(1040);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("17ee9782",content,!0,{sourceMap:!1})},859:function(t,e,o){var content=o(1042);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("214bea04",content,!0,{sourceMap:!1})}}]);