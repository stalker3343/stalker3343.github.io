(window.webpackJsonp=window.webpackJsonp||[]).push([[251,27,203],{1071:function(t,e,r){"use strict";r(877)},1072:function(t,e,r){var n=r(10)(!1);n.push([t.i,".page__partners .hint[data-v-51ca0700]{text-align:center;color:#44a1a4}.page__partners .partners__header[data-v-51ca0700]{justify-content:center}.page__partners .partners__list[data-v-51ca0700]{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap}.page__partners .partners__list .partner-card[data-v-51ca0700]{width:calc(25% - 24px);margin-right:24px;background-color:#fff;border-radius:5px;box-shadow:0 0 20px #f2f2f2;margin-bottom:24px}.page__partners .partners__list .partner-card[data-v-51ca0700]:nth-child(4n){margin-right:0}@media (max-width:1280px){.page__partners .partners__list .partner-card[data-v-51ca0700]{width:calc(33.33333% - 16px)}.page__partners .partners__list .partner-card[data-v-51ca0700]:nth-child(3n){margin-right:0}.page__partners .partners__list .partner-card[data-v-51ca0700]:nth-child(4n){margin-right:24px}}@media (max-width:790px){.page__partners .partners__list .partner-card[data-v-51ca0700]{width:calc(50% - 12px);margin-right:24px}.page__partners .partners__list .partner-card[data-v-51ca0700]:nth-child(2n){margin-right:0}.page__partners .partners__list .partner-card[data-v-51ca0700]:nth-child(3n){margin-right:24px}.page__partners .partners__list .partner-card[data-v-51ca0700]:nth-child(4n){margin-right:0}}@media (max-width:575px){.page__partners .partners__list .partner-card[data-v-51ca0700]{width:100%;margin-right:0!important}}.page__partners .partners__list .partner-card .partner-card__logo[data-v-51ca0700]{padding:8px;margin-bottom:10px}.page__partners .partners__list .partner-card .partner-card__logo img[data-v-51ca0700]{width:100%}.page__partners .partners__list .partner-card .partner-card__content[data-v-51ca0700]{padding:0 20px}.page__partners .partners__list .partner-card .partner-card__content .partner-card__header[data-v-51ca0700]{font-style:normal;font-weight:700;font-size:20px;line-height:125%}.page__partners .partners__list .partner-card .partner-card__content .partner-card__text[data-v-51ca0700]{margin-top:16px;margin-bottom:28px;font-style:normal;font-weight:400;font-size:14px;line-height:170%;color:#4f4f4f;color:#333;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.page__partners .partners__list .partner-card .partner-card__content .partner-card__text.active[data-v-51ca0700]{overflow:visible;overflow:initial;text-overflow:clip;display:block}.page__partners .partners__list .partner-card .partner-card__content .partner-card__link[data-v-51ca0700]{margin-top:20px}.page__partners .partners__list .partner-card .partner-card__content .partner-card__link i[data-v-51ca0700]{margin-right:5px}.page__partners .partners__list .partner-card .partner-card__content .partner-card__button[data-v-51ca0700]{cursor:pointer;font-weight:500;border-top:1px solid #efeff4;padding:20px 0;text-align:center;color:#18898d}",""]),t.exports=n},1315:function(t,e,r){"use strict";r.r(e);r(7),r(13),r(15),r(16),r(17);var n=r(6),l=r(8);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={data:function(){return{activeCards:[]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.d)("layout",["partners"])),methods:{showMore:function(t){var e=this.activeCards.indexOf(t);e>=0?this.activeCards.splice(e,1):this.activeCards.push(t)}}},_=(r(1071),r(4)),component=Object(_.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page__partners"},[r("div",{staticClass:"container"},[r("app-title",{staticClass:"partners__header",attrs:{title:t.__locale("our-partners-title"),"title-tag":"h1"}}),t._v(" "),r("div",{staticClass:"hint"},[t._v(t._s(t.__locale("our-partners-subtitle")))]),t._v(" "),r("div",{staticClass:"partners__list"},t._l(t.partners,(function(e,n){return r("div",{key:n,staticClass:"partner-card"},[r("div",{staticClass:"partner-card__logo"},[r("img",{attrs:{src:e.image,alt:e.name}})]),t._v(" "),r("div",{staticClass:"partner-card__content"},[r("div",{staticClass:"partner-card__header"},[t._v("\n            "+t._s(t.__locale(e.name))+"\n          ")]),t._v(" "),r("div",{staticClass:"partner-card__text",class:[t.activeCards.includes(n)?"active":""]},[t._v("\n            "+t._s(t.__locale(e.text))+"\n            "),r("br"),t._v(" "),t.activeCards.includes(n)?r("div",{staticClass:"partner-card__link"},[r("i",{staticClass:"far fa-link"}),t._v(" "),r("a",{attrs:{target:"_blank",href:e.url}},[t._v(t._s(t.__locale("link-on-web")))])]):t._e()]),t._v(" "),r("div",{staticClass:"partner-card__button",on:{click:function(e){return t.showMore(n)}}},[t._v("\n            "+t._s(t.activeCards.includes(n)?t.__locale("less"):t.__locale("more"))+"\n          ")])])])})),0)],1)])}),[],!1,null,"51ca0700",null);e.default=component.exports;installComponents(component,{AppTitle:r(558).default})},1488:function(t,e,r){"use strict";r.r(e);var n=r(1315).default,l=r(4),component=Object(l.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},557:function(t,e,r){var content=r(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("df1750dc",content,!0,{sourceMap:!1})},558:function(t,e,r){"use strict";r.r(e);r(7),r(13),r(15),r(16),r(17);var n=r(6),l=r(8);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={props:{titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},link:{type:String,default:null},linkTitle:{type:String,default:"Link title"},linkTitleShort:{type:String,default:null}},data:function(){return{linkTitleShortLocal:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.d)("localization",["language"])),mounted:function(){this.linkTitleShort?this.linkTitleShortLocal=this.linkTitleShort:this.linkTitleShortLocal=this.__locale("link-title-short")}},_=(r(559),r(4)),component=Object(_.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component__title"},[r("div",{staticClass:"title-text",class:["h1"!==t.titleTag?"small":""],domProps:{innerHTML:t._s("<"+t.titleTag+">"+t.title+"</"+t.titleTag+">")}}),t._v(" "),t.link?r("nuxt-link",{staticClass:"link",attrs:{to:"/"+t.language+t.link}},[r("span",{staticClass:"link-title"},[t._v(t._s(t.linkTitle))]),t._v(" "),r("span",{staticClass:"mobile-link-title"},[t._v(t._s(t.linkTitleShortLocal))]),t._v(" "),r("i",{staticClass:"fal fa-long-arrow-right"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,r){"use strict";r(557)},560:function(t,e,r){var n=r(10)(!1);n.push([t.i,".component__title{margin-bottom:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:575px){.component__title{justify-content:space-between;margin-bottom:20px}}.component__title .link{margin-top:6px;margin-left:24px}@media (max-width:575px){.component__title .link .link-title,.component__title .link i{display:none}.component__title .link .mobile-link-title{display:block!important}}.component__title .link .mobile-link-title{display:none}.component__title .title-text{font-weight:600;font-size:40px;line-height:47px}@media (max-width:790px){.component__title .title-text{font-size:30px;line-height:32px}}@media (max-width:575px){.component__title .title-text{font-size:24px;line-height:30px}}.component__title .title-text.small{font-size:38px}",""]),t.exports=n},877:function(t,e,r){var content=r(1072);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("4cb56f18",content,!0,{sourceMap:!1})}}]);