(window.webpackJsonp=window.webpackJsonp||[]).push([[16,27,49,83,100,101,103],{1045:function(t,e,n){"use strict";n(863)},1046:function(t,e,n){var o=n(10)(!1);o.push([t.i,".section-header[data-v-608398fd]{font-weight:800;font-size:44px;line-height:145%;margin-bottom:75px;color:#333}@media (max-width:1280px){.section-header[data-v-608398fd]{font-size:34px;line-height:115%;margin-bottom:30px}}.about[data-v-608398fd]{padding-bottom:100px}@media (max-width:790px){.about[data-v-608398fd]{padding-bottom:40px}}.about__wrapper[data-v-608398fd]{display:flex;justify-content:space-between}@media (max-width:790px){.about__wrapper[data-v-608398fd]{flex-direction:column}}.about__video[data-v-608398fd]{width:100%;max-width:572px;flex:none}@media (max-width:1280px){.about__video[data-v-608398fd]{margin-right:20px;max-width:400px}}@media (max-width:790px){.about__video[data-v-608398fd]{margin-bottom:30px;max-width:100%;margin-right:0}}.about__text[data-v-608398fd]{max-width:510px}@media (max-width:1280px){.about__text[data-v-608398fd]{max-width:100%}}.about__text p[data-v-608398fd]{font-weight:500;font-size:18px;line-height:165%;color:#333}.about__text p[data-v-608398fd]:not(:last-child){margin-bottom:32px}@media (max-width:790px){.about__text p[data-v-608398fd]{margin-bottom:0}.about__text p[data-v-608398fd]:not(:last-child){margin-bottom:18px}}",""]),t.exports=o},1257:function(t,e,n){var content=n(1393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("4be712df",content,!0,{sourceMap:!1})},1301:function(t,e,n){"use strict";n.r(e);var o={components:{}},r=(n(1045),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"section-header"},[t._v("\n      "+t._s(t.__locale("invest-together-1"))+" "),n("br"),t._v("\n      "+t._s(t.__locale("invest-together-2"))+"\n    ")]),t._v(" "),n("div",{staticClass:"about__wrapper"},[n("div",{staticClass:"about__video"},[n("video-player",{attrs:{"fit-parent":"",options:{videoId:"xTQEy7YFdck"},"hide-button":!0,autoplay:0}})],1),t._v(" "),t._m(0)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about__text"},[n("p",[t._v("\n          Партнер (франчайзи) IMPACT Capital - представитель компании, работающий на выделенной\n          территории или с определенной группой аудитории.\n        ")]),t._v(" "),n("p",[t._v("\n          Партнер (франчайзи) IMPACT Capital - представитель компании, работающий на выделенной\n          территории или с определенной группой аудитории.\n        ")]),t._v(" "),n("p",[t._v("\n          Партнер (франчайзи) IMPACT Capital - представитель компании, работающий на выделенной\n          территории или с определенной группой аудитории.\n        ")])])}],!1,null,"608398fd",null);e.default=component.exports;installComponents(component,{VideoPlayer:n(168).default})},1392:function(t,e,n){"use strict";n(1257)},1393:function(t,e,n){var o=n(10)(!1);o.push([t.i,".questions[data-v-ee59dcac]{position:relative;top:-404px}@media (max-width:790px){.questions[data-v-ee59dcac]{top:0}}.page__become-investor[data-v-ee59dcac]{padding-bottom:0}.page__become-investor .swiper-slide[data-v-ee59dcac]{min-height:500px}",""]),t.exports=o},1444:function(t,e,n){"use strict";n.r(e);var o={},r=(n(1392),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page__become-investor"},[n("pages-become-investor-page-header",{attrs:{title:"Получите полный список идей для инвестирования",subtitle:"Заполните заявку и получите список идей"}}),t._v(" "),n("pages-become-investor-about"),t._v(" "),n("pages-become-investor-features")],1)}),[],!1,null,"ee59dcac",null);e.default=component.exports;installComponents(component,{PagesBecomeInvestorPageHeader:n(985).default,PagesBecomeInvestorAbout:n(1301).default,PagesBecomeInvestorFeatures:n(986).default})},557:function(t,e,n){var content=n(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("df1750dc",content,!0,{sourceMap:!1})},558:function(t,e,n){"use strict";n.r(e);n(7),n(13),n(15),n(16),n(17);var o=n(6),r=n(8);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={props:{titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},link:{type:String,default:null},linkTitle:{type:String,default:"Link title"},linkTitleShort:{type:String,default:null}},data:function(){return{linkTitleShortLocal:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.d)("localization",["language"])),mounted:function(){this.linkTitleShort?this.linkTitleShortLocal=this.linkTitleShort:this.linkTitleShortLocal=this.__locale("link-title-short")}},c=(n(559),n(4)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component__title"},[n("div",{staticClass:"title-text",class:["h1"!==t.titleTag?"small":""],domProps:{innerHTML:t._s("<"+t.titleTag+">"+t.title+"</"+t.titleTag+">")}}),t._v(" "),t.link?n("nuxt-link",{staticClass:"link",attrs:{to:"/"+t.language+t.link}},[n("span",{staticClass:"link-title"},[t._v(t._s(t.linkTitle))]),t._v(" "),n("span",{staticClass:"mobile-link-title"},[t._v(t._s(t.linkTitleShortLocal))]),t._v(" "),n("i",{staticClass:"fal fa-long-arrow-right"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,n){"use strict";n(557)},560:function(t,e,n){var o=n(10)(!1);o.push([t.i,".component__title{margin-bottom:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:575px){.component__title{justify-content:space-between;margin-bottom:20px}}.component__title .link{margin-top:6px;margin-left:24px}@media (max-width:575px){.component__title .link .link-title,.component__title .link i{display:none}.component__title .link .mobile-link-title{display:block!important}}.component__title .link .mobile-link-title{display:none}.component__title .title-text{font-weight:600;font-size:40px;line-height:47px}@media (max-width:790px){.component__title .title-text{font-size:30px;line-height:32px}}@media (max-width:575px){.component__title .title-text{font-size:24px;line-height:30px}}.component__title .title-text.small{font-size:38px}",""]),t.exports=o},562:function(t,e,n){var content=n(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("60879304",content,!0,{sourceMap:!1})},563:function(t,e,n){var content=n(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("2b5eeebe",content,!0,{sourceMap:!1})},564:function(t,e,n){"use strict";n(562)},565:function(t,e,n){var o=n(10)(!1);o.push([t.i,".component__boxer{padding:60px 100px;background:#fff;background:linear-gradient(180deg,#fff,#fff 20%,#f6f9ff 0,#f6f9ff 80%,#fff 0,#fff)}@media (max-width:790px){.component__boxer{padding:0 30px}}@media (max-width:575px){.component__boxer{background:#f6f9ff;padding:0 20px;margin-bottom:0}}.component__boxer .subscribe-form__wrapper{background-image:url(./images/subscribe-background.svg);background-size:cover;background-repeat:repeat;box-shadow:0 16px 40px rgba(28,74,115,.23);border-radius:20px;padding:100px 40px;background-color:#fff}@media (max-width:790px){.component__boxer .subscribe-form__wrapper{padding:60px 40px}}@media (max-width:575px){.component__boxer .subscribe-form__wrapper{padding:70px 0;background-image:none;box-shadow:none;background-color:transparent;background-color:initial}}.component__boxer .subscribe-form__wrapper .subscribe-form{max-width:600px;width:100%;left:0;right:0;margin:auto;display:flex;flex-direction:column;justify-content:center;align-items:center}.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-title{font-weight:800;font-size:32px;line-height:42px;margin-bottom:12px;text-align:center}@media (max-width:1280px){.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-title{font-size:28px}}@media (max-width:575px){.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-title{font-size:26px;line-height:34px}}.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-text{font-weight:400;font-size:16px;line-height:26px;opacity:.8;text-align:center;margin-bottom:40px}@media (max-width:575px){.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-text{font-size:16px;line-height:26px}}.component__boxer .subscribe-form__wrapper .subscribe-form .form-wrapper{max-width:450px;width:100%}.component__boxer .subscribe-form__wrapper .subscribe-form .app-input{width:100%}@media (max-width:575px){.component__boxer .subscribe-form__wrapper .subscribe-form .app-input,.component__boxer .subscribe-form__wrapper .subscribe-form .app-input input{background-color:#fff}}",""]),t.exports=o},566:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:null},subtitle:{type:String,default:null}},data:function(){return{}}},r=(n(564),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component__boxer"},[n("client-only",[n("div",{staticClass:"subscribe-form__wrapper"},[n("div",{staticClass:"subscribe-form"},[n("div",{staticClass:"subscribe-title"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),t.subtitle?n("div",{staticClass:"subscribe-text"},[t._v("\n          "+t._s(t.subtitle)+"\n        ")]):t._e(),t._v(" "),t._t("default")],2)])])],1)}),[],!1,null,null,null);e.default=component.exports},568:function(t,e,n){"use strict";n.r(e);n(58);var o={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}},color:{type:String,default:null},colls:{type:Number,default:2}},data:function(){return{}}},r=(n(570),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component__main-intro",style:"background-color: "+t.color},[n("div",{staticClass:"container"},[t._t("default"),t._v(" "),t.title?n("app-title",{attrs:{title:t.title,"title-tag":"div"}}):t._e(),t._v(" "),n("div",{staticClass:"intro-items"},t._l(t.items,(function(e,o){return n("div",{key:o,staticClass:"intro-item",class:{"intro-item_three-coll":3===t.colls}},[n("app-icon",{attrs:{src:e.image}}),t._v(" "),n("div",{staticClass:"item-content"},[e.title?n("div",{staticClass:"item-title"},[t._v("\n            "+t._s(t.__locale(e.title))+"\n          ")]):t._e(),t._v(" "),n("div",{staticClass:"item-subtitle"},[t._v("\n            "+t._s(t.__locale(e.subtitle))+"\n          ")]),t._v(" "),t._t("action-btns",null,{item:e})],2)],1)})),0)],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTitle:n(558).default})},570:function(t,e,n){"use strict";n(563)},571:function(t,e,n){var o=n(10)(!1);o.push([t.i,".component__main-intro{padding-top:40px}@media (max-width:575px){.component__main-intro{padding-top:36px}}.component__main-intro .intro-items{padding-top:20px;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;margin-bottom:30px}@media (max-width:575px){.component__main-intro .intro-items{padding-top:0;margin-bottom:20px}}.component__main-intro .intro-items .intro-item{width:50%;margin-bottom:44px;min-height:110px;max-width:550px;padding-right:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.component__main-intro .intro-items .intro-item_three-coll{width:32%}@media (max-width:1000px){.component__main-intro .intro-items .intro-item_three-coll{width:50%}}@media (max-width:790px){.component__main-intro .intro-items .intro-item{width:100%;margin-bottom:30px;min-height:0}}@media (max-width:575px){.component__main-intro .intro-items .intro-item{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.component__main-intro .intro-items .intro-item .app-icon{margin-right:0}}.component__main-intro .intro-items .intro-item img{margin-right:28px;width:58px;display:block}@media (max-width:575px){.component__main-intro .intro-items .intro-item img{width:44px;margin-right:10px;margin-bottom:12px}}.component__main-intro .intro-items .intro-item .item-content{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.component__main-intro .intro-items .intro-item .item-content .item-title{font-weight:700;font-size:20px;line-height:24px;margin-bottom:12px}@media (max-width:575px){.component__main-intro .intro-items .intro-item .item-content .item-title{font-size:18px;line-height:24px;margin-bottom:4px}}.component__main-intro .intro-items .intro-item .item-content .item-subtitle{font-weight:400;font-size:16px;line-height:20px;opacity:.8}@media (max-width:575px){.component__main-intro .intro-items .intro-item .item-content .item-subtitle{font-size:14px;line-height:24px}}",""]),t.exports=o},630:function(t,e,n){var content=n(836);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("067e8a54",content,!0,{sourceMap:!1})},631:function(t,e,n){var content=n(838);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("24414752",content,!0,{sourceMap:!1})},835:function(t,e,n){"use strict";n(630)},836:function(t,e,n){var o=n(10)(!1);o.push([t.i,".header[data-v-4d984dc6]{padding-bottom:80px}.header__wrapper[data-v-4d984dc6]{display:flex;justify-content:space-between}@media (max-width:900px){.header__wrapper[data-v-4d984dc6]{flex-direction:column}}.header__content[data-v-4d984dc6]{padding-top:30px;max-width:504px}.header__title[data-v-4d984dc6]{font-weight:800;font-size:44px;line-height:54px;color:#fff;margin-bottom:20px}@media (max-width:1100px){.header__title[data-v-4d984dc6]{font-size:34px;line-height:40px;margin-bottom:10px}}@media (max-width:575px){.header__title[data-v-4d984dc6]{margin-bottom:5px;line-height:34px}}.header__sub-title[data-v-4d984dc6]{font-weight:400;font-size:16px;line-height:26px;color:#fff;margin-bottom:40px}@media (max-width:1100px){.header__sub-title[data-v-4d984dc6]{margin-bottom:30px}}@media (max-width:575px){.header__sub-title[data-v-4d984dc6]{margin-bottom:15px}}@media (max-width:900px){.header__btn[data-v-4d984dc6]{margin-bottom:60px}}.header__form[data-v-4d984dc6]{flex:none}@media (max-width:900px){.header__form[data-v-4d984dc6]{margin:0 auto}}.header__form-boxer[data-v-4d984dc6]{padding:0;background:none;max-width:510px;width:100%}@media (max-width:575px){.header__form-boxer[data-v-4d984dc6]{border-radius:20px}}.header__form-boxer[data-v-4d984dc6]  .subscribe-form__wrapper{padding:44px 52px}@media (max-width:1100px){.header__form-boxer[data-v-4d984dc6]  .subscribe-form__wrapper{padding:24px 30px;max-width:410px}}@media (max-width:575px){.header__form-boxer[data-v-4d984dc6]  .subscribe-form__wrapper{padding:24px 17px;background-image:url(./images/subscribe-background.svg);box-shadow:0 16px 40px rgba(28,74,115,.23)}}",""]),t.exports=o},837:function(t,e,n){"use strict";n(631)},838:function(t,e,n){var o=n(10)(!1);o.push([t.i,".section-header[data-v-764ef82e]{font-weight:800;font-size:44px;line-height:145%;margin-bottom:75px;color:#333}@media (max-width:1280px){.section-header[data-v-764ef82e]{font-size:34px;line-height:115%;margin-bottom:30px}}.features[data-v-764ef82e]{margin-bottom:55px}",""]),t.exports=o},863:function(t,e,n){var content=n(1046);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("307a1444",content,!0,{sourceMap:!1})},985:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:"personal-consultation"},subtitle:{type:String,default:"leave-request"}}},r=(n(835),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"header__wrapper"},[n("div",{staticClass:"header__content"},[n("h1",{staticClass:"header__title"},[t._v(t._s(t.__locale("page-become-investor-title")))])]),t._v(" "),n("div",{staticClass:"header__form"},[n("boxer",{staticClass:"header__form-boxer",attrs:{title:t.__locale(t.title),subtitle:t.__locale(t.subtitle)}},[n("form-subscribe",{staticClass:"header__form",attrs:{topic:"getIdeas"}})],1)],1)])])])}),[],!1,null,"4d984dc6",null);e.default=component.exports;installComponents(component,{FormSubscribe:n(169).default,Boxer:n(566).default})},986:function(t,e,n){"use strict";n.r(e);var o={components:{},data:function(){return{features:[{image:"./images/intro-icon4.svg",title:"controlled-risk",subtitle:"controlled-risk-text"},{image:"./images/become-investor/features/users.svg",title:"25-professionals",subtitle:"25-professionals-text"},{image:"./images/intro-investor-icon3.svg",title:"significant-profitability",subtitle:"significant-profitability-text"},{image:"./images/intro-icon1.svg",title:"fast-liquidity",subtitle:"fast-liquidity-text"}]}}},r=(n(837),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-intro",{staticClass:"features",attrs:{color:"#fff",items:t.features}},[n("h2",{staticClass:"section-header"},[t._v(t._s(t.__locale("why-choose-us")))])])}),[],!1,null,"764ef82e",null);e.default=component.exports;installComponents(component,{MainIntro:n(568).default})}}]);