(window.webpackJsonp=window.webpackJsonp||[]).push([[235,27,193],{1299:function(t,e,n){"use strict";n.r(e);n(7),n(13),n(15),n(16),n(17);var o=n(6),l=n(3),r=(n(14),n(8));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("common/GET_DECLARATION");case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{}},head:function(){var title=this.__locale("meta-declaration-title"),t=this.__locale("meta-declaration-description");return{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:t},{hide:"robots",name:"robots",content:"follow, index"},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"og:site_name",property:"og:site_name",content:"IMPACT Capital"},{hid:"og:image",property:"og:image",content:"./images/logo.png"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.d)("common",["declaration"]))},f=n(4),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page__declaration"},[n("div",{staticClass:"container"},[n("app-title",{attrs:{title:t.__locale("risk-declaration")}})],1),t._v(" "),n("div",{staticClass:"container",domProps:{innerHTML:t._s(t.declaration)}})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTitle:n(558).default})},1480:function(t,e,n){"use strict";n.r(e);var o=n(1299).default,l=n(4),component=Object(l.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},557:function(t,e,n){var content=n(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("df1750dc",content,!0,{sourceMap:!1})},558:function(t,e,n){"use strict";n.r(e);n(7),n(13),n(15),n(16),n(17);var o=n(6),l=n(8);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={props:{titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},link:{type:String,default:null},linkTitle:{type:String,default:"Link title"},linkTitleShort:{type:String,default:null}},data:function(){return{linkTitleShortLocal:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.d)("localization",["language"])),mounted:function(){this.linkTitleShort?this.linkTitleShortLocal=this.linkTitleShort:this.linkTitleShortLocal=this.__locale("link-title-short")}},d=(n(559),n(4)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component__title"},[n("div",{staticClass:"title-text",class:["h1"!==t.titleTag?"small":""],domProps:{innerHTML:t._s("<"+t.titleTag+">"+t.title+"</"+t.titleTag+">")}}),t._v(" "),t.link?n("nuxt-link",{staticClass:"link",attrs:{to:"/"+t.language+t.link}},[n("span",{staticClass:"link-title"},[t._v(t._s(t.linkTitle))]),t._v(" "),n("span",{staticClass:"mobile-link-title"},[t._v(t._s(t.linkTitleShortLocal))]),t._v(" "),n("i",{staticClass:"fal fa-long-arrow-right"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,n){"use strict";n(557)},560:function(t,e,n){var o=n(10)(!1);o.push([t.i,".component__title{margin-bottom:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:575px){.component__title{justify-content:space-between;margin-bottom:20px}}.component__title .link{margin-top:6px;margin-left:24px}@media (max-width:575px){.component__title .link .link-title,.component__title .link i{display:none}.component__title .link .mobile-link-title{display:block!important}}.component__title .link .mobile-link-title{display:none}.component__title .title-text{font-weight:600;font-size:40px;line-height:47px}@media (max-width:790px){.component__title .title-text{font-size:30px;line-height:32px}}@media (max-width:575px){.component__title .title-text{font-size:24px;line-height:30px}}.component__title .title-text.small{font-size:38px}",""]),t.exports=o}}]);