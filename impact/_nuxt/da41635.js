(window.webpackJsonp=window.webpackJsonp||[]).push([[43,27,40],{1212:function(t,e,l){"use strict";l(983)},1213:function(t,e,l){var n=l(10)(!1);n.push([t.i,".become-partner-facts-list{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:25px;grid-row-gap:55px}@media (max-width:1300px){.become-partner-facts-list{max-width:600px;margin:0 auto}}@media (max-width:480px){.become-partner-facts-list{grid-template-columns:1fr;grid-row-gap:30px}}.become-partner-facts-list__item{text-align:center}.become-partner-facts-list__block{display:flex;align-items:flex-end;justify-content:center;margin-bottom:8px}.become-partner-facts-list__title{color:#18898d;margin:0!important}.become-partner-facts-list__title div{font-size:40px;font-weight:700;line-height:35px}.become-partner-facts-list__label{color:#18898d;margin:0 0 0 10px;font-weight:700;font-size:24px}.become-partner-facts-list__text{color:#292828;max-width:260px;font-size:16px;margin:0 auto}",""]),t.exports=n},1247:function(t,e,l){"use strict";l.r(e);var n={name:"BecomePartnerFactsList",props:{list:{type:Array,default:function(){return[{title:"",text:"",label:""}]}}}},r=(l(1212),l(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"become-partner-facts-list"},t._l(t.list,(function(e,n){return l("li",{key:n,staticClass:"become-partner-facts-list__item"},[l("div",{staticClass:"become-partner-facts-list__block"},[l("app-title",{staticClass:"become-partner-facts-list__title",attrs:{"title-tag":"div",title:e.title}}),t._v(" "),l("p",{staticClass:"become-partner-facts-list__label"},[t._v(t._s(e.label))])],1),t._v(" "),l("p",{staticClass:"become-partner-facts-list__text"},[t._v(t._s(e.text))])])})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTitle:l(558).default})},1271:function(t,e,l){var content=l(1421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(11).default)("c4618e5e",content,!0,{sourceMap:!1})},1420:function(t,e,l){"use strict";l(1271)},1421:function(t,e,l){var n=l(10)(!1);n.push([t.i,".become-partner-profit__wrapper{padding:140px 0 80px}@media (max-width:650px){.become-partner-profit__wrapper{padding:80px 0}}.become-partner-profit__top{text-align:center;margin-bottom:50px}.become-partner-profit__title{color:#333;margin:0!important;justify-content:center!important}.become-partner-profit__title div{font-size:40px!important;line-height:40px}.become-partner-profit__description{color:#333;margin:12px 0 0}.become-partner-profit__slider .swiper-wrapper{height:100%!important}.become-partner-profit__block{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:40px;align-items:center;padding:0 50px}@media (max-width:1300px){.become-partner-profit__block{grid-template-columns:1fr;grid-row-gap:60px}}@media (max-width:480px){.become-partner-profit__block{padding:0}}",""]),t.exports=n},1457:function(t,e,l){"use strict";l.r(e);var n={name:"BecomePartnerProfit",components:{BecomePartnerFactsList:l(1247).default},data:function(){return{sliderOptions:{slidesPerView:1,pagination:{el:".swiper-pagination",type:"bullets"},breakpoints:{0:{navigation:!1,pagination:{el:".swiper-pagination",type:"bullets"}},640:{navigation:{nextEl:".js-swiper-button-next",prevEl:".js-swiper-button-prev"},pagination:!1}}},lists:[{video:"54azSddZg2Y",list:[{title:"4",text:"В работе",label:"мес."},{title:"4",text:"Выполнено",label:"сделки"},{title:"44",text:"Привлеченных средств в рублях",label:"млн."},{title:"466",text:"Заработанных средств в рублях",label:"тыс."}]},{video:"54azSddZg2Y",list:[{title:"4",text:"В работе",label:"мес."},{title:"4",text:"Выполнено",label:"сделки"},{title:"44",text:"Привлеченных средств в рублях",label:"млн."},{title:"466",text:"Заработанных средств в рублях",label:"тыс."}]}]}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},methods:{next:function(){this.swiper.slideNext(500)},prev:function(){this.swiper.slidePrev(500)}}},r=(l(1420),l(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"become-partner-profit"},[l("div",{staticClass:"container"},[l("div",{staticClass:"become-partner-profit__wrapper"},[l("div",{staticClass:"become-partner-profit__top"},[l("app-title",{staticClass:"become-partner-profit__title",attrs:{"title-tag":"div",title:"Чистая прибыль"}}),t._v(" "),l("p",{staticClass:"become-partner-profit__description"},[t._v("Как и сколько зарабатывают наши партнеры")])],1),t._v(" "),l("app-slider",{staticClass:"become-partner-profit__slider",attrs:{options:t.sliderOptions,items:t.lists},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[l("div",{staticClass:"become-partner-profit__block"},[l("become-partner-facts-list",{attrs:{list:n.list}}),t._v(" "),l("video-player",{attrs:{"fit-parent":"",options:{videoId:n.video},"hide-button":!0,autoplay:0}})],1)]}}])})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTitle:l(558).default,BecomePartnerFactsList:l(1247).default,VideoPlayer:l(168).default,AppSlider:l(290).default})},557:function(t,e,l){var content=l(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(11).default)("df1750dc",content,!0,{sourceMap:!1})},558:function(t,e,l){"use strict";l.r(e);l(7),l(13),l(15),l(16),l(17);var n=l(6),r=l(8);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var c={props:{titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},link:{type:String,default:null},linkTitle:{type:String,default:"Link title"},linkTitleShort:{type:String,default:null}},data:function(){return{linkTitleShortLocal:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.d)("localization",["language"])),mounted:function(){this.linkTitleShort?this.linkTitleShortLocal=this.linkTitleShort:this.linkTitleShortLocal=this.__locale("link-title-short")}},m=(l(559),l(4)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"component__title"},[l("div",{staticClass:"title-text",class:["h1"!==t.titleTag?"small":""],domProps:{innerHTML:t._s("<"+t.titleTag+">"+t.title+"</"+t.titleTag+">")}}),t._v(" "),t.link?l("nuxt-link",{staticClass:"link",attrs:{to:"/"+t.language+t.link}},[l("span",{staticClass:"link-title"},[t._v(t._s(t.linkTitle))]),t._v(" "),l("span",{staticClass:"mobile-link-title"},[t._v(t._s(t.linkTitleShortLocal))]),t._v(" "),l("i",{staticClass:"fal fa-long-arrow-right"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,l){"use strict";l(557)},560:function(t,e,l){var n=l(10)(!1);n.push([t.i,".component__title{margin-bottom:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:575px){.component__title{justify-content:space-between;margin-bottom:20px}}.component__title .link{margin-top:6px;margin-left:24px}@media (max-width:575px){.component__title .link .link-title,.component__title .link i{display:none}.component__title .link .mobile-link-title{display:block!important}}.component__title .link .mobile-link-title{display:none}.component__title .title-text{font-weight:600;font-size:40px;line-height:47px}@media (max-width:790px){.component__title .title-text{font-size:30px;line-height:32px}}@media (max-width:575px){.component__title .title-text{font-size:24px;line-height:30px}}.component__title .title-text.small{font-size:38px}",""]),t.exports=n},983:function(t,e,l){var content=l(1213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(11).default)("7735ba75",content,!0,{sourceMap:!1})}}]);