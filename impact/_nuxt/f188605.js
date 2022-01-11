(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{1035:function(e,t,r){"use strict";r(856)},1036:function(e,t,r){var n=r(10)(!1);n.push([e.i,'.page-career__wrapper[data-v-1671cad9]{display:flex;justify-content:space-between;padding-bottom:100px}@media (max-width:790px){.page-career__wrapper[data-v-1671cad9]{flex-direction:column}}.page-career__header[data-v-1671cad9]{font-weight:800;font-size:40px;line-height:135%;color:#333;margin-bottom:12px}@media (max-width:575px){.page-career__header[data-v-1671cad9]{font-size:35px;margin-bottom:6px}}.page-career__tip[data-v-1671cad9]{color:rgba(51,51,51,.6);font-size:16px;line-height:26px;margin-bottom:32px;max-width:384px}@media (max-width:575px){.page-career__tip[data-v-1671cad9]{margin-bottom:16px}}.page-career__content[data-v-1671cad9]{width:50%}@media (max-width:790px){.page-career__content[data-v-1671cad9]{width:100%;padding-bottom:30px}}.career-item[data-v-1671cad9]{display:block;padding:25px 20px}.career-item[data-v-1671cad9]:nth-child(odd){background:rgba(244,246,250,.5)}@media (max-width:575px){.career-item[data-v-1671cad9]{padding:15px 10px}}.career-item__header[data-v-1671cad9]{font-weight:500;font-size:20px;line-height:24px;color:#44a1a4;margin-bottom:8px}.career-item__features[data-v-1671cad9]{display:flex;font-size:16px;line-height:20px;color:#333;font-weight:400}.career-item__feature[data-v-1671cad9]:not(:first-child){padding-left:20px;position:relative}.career-item__feature[data-v-1671cad9]:not(:first-child):before{content:"";height:3px;width:3px;background:#333;position:absolute;left:10px;top:50%;transform:translateY(-50%);border-radius:50%}.page-career__slider[data-v-1671cad9]{padding-left:102px;width:50%}@media (max-width:1100px){.page-career__slider[data-v-1671cad9]{padding-left:15px}}@media (max-width:790px){.page-career__slider[data-v-1671cad9]{width:100%;padding-left:0}}.slider__image[data-v-1671cad9]{width:100%}',""]),e.exports=n},1295:function(e,t,r){"use strict";r.r(t);r(7),r(13),r(15),r(16),r(17);var n=r(6),c=r(3),o=(r(14),r(8));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,t.next=3,r.dispatch("career/GET_CAREERS",{language:r.state.localization.language});case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{sliderImages:["../images/career/slider1.jpg","../images/career/slider1.jpg","../images/career/slider1.jpg"],sliderOptions:{slidesPerView:1,breakpoints:{0:{navigation:!1,pagination:{el:".swiper-pagination",type:"bullets"}},640:{navigation:{nextEl:".js-swiper-button-next",prevEl:".js-swiper-button-prev"},pagination:!1}}}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.d)("career",["careerItems"])),head:function(){var title=this.__locale("meta-career-title"),e=this.__locale("meta-career-description");return{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:e},{hid:"keywords",name:"keywords",content:""},{hide:"robots",name:"robots",content:"follow, index"},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:e},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:site_name",property:"og:site_name",content:"IMPACT Capital"},{hid:"og:image",property:"og:image",content:""}]}}},_=(r(1035),r(4)),component=Object(_.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-career"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"page-career__header"},[e._v("\n      "+e._s(e.__locale("menu-career"))+"\n    ")]),e._v(" "),r("p",{staticClass:"page-career__tip"},[e._v("\n      "+e._s(e.__locale("career-text"))+"\n    ")]),e._v(" "),r("div",{staticClass:"page-career__wrapper"},[r("div",{staticClass:"page-career__content"},[e.careerItems.length>0?e._l(e.careerItems,(function(t){return r("nuxt-link",{key:t.id,staticClass:"career-item",attrs:{to:"/career/"+t.id}},[r("h3",{staticClass:"career-item__header"},[e._v(e._s(t.title))]),e._v(" "),r("div",{staticClass:"career-item__features"},[r("div",{staticClass:"career-item__feature"},[e._v(e._s(t.location))]),e._v(" "),r("div",{staticClass:"career-item__feature"},[e._v(e._s(t.office))]),e._v(" "),r("div",{staticClass:"career-item__feature"},[e._v(e._s(t.experience))])])])})):r("span",{staticClass:"tips"},[e._v(e._s(e.__locale("no-result")))])],2),e._v(" "),r("div",{staticClass:"page-career__slider"},[r("app-slider",{attrs:{options:e.sliderOptions,items:e.sliderImages},scopedSlots:e._u([{key:"item",fn:function(e){var t=e.item;return[r("img",{staticClass:"slider__image",attrs:{src:t}})]}}])})],1)])])])}),[],!1,null,"1671cad9",null);t.default=component.exports;installComponents(component,{AppSlider:r(290).default})},856:function(e,t,r){var content=r(1036);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("49677f9c",content,!0,{sourceMap:!1})}}]);