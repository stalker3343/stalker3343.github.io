(window.webpackJsonp=window.webpackJsonp||[]).push([[237,27,195],{1332:function(t,e,l){"use strict";l.r(e);var n={},o=l(4),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"page__email-success"},[l("div",{staticClass:"container"},[l("app-title",{attrs:{title:t.__locale("email-confirmed")}}),t._v(" "),l("div",{staticClass:"tips"},[t._v("\n      "+t._s(t.__locale("go-back-to-app-and-continue"))+"\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTitle:l(558).default})},1502:function(t,e,l){"use strict";l.r(e);var n=l(1332).default,o=l(4),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},557:function(t,e,l){var content=l(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(11).default)("df1750dc",content,!0,{sourceMap:!1})},558:function(t,e,l){"use strict";l.r(e);l(7),l(13),l(15),l(16),l(17);var n=l(6),o=l(8);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var c={props:{titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},link:{type:String,default:null},linkTitle:{type:String,default:"Link title"},linkTitleShort:{type:String,default:null}},data:function(){return{linkTitleShortLocal:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)("localization",["language"])),mounted:function(){this.linkTitleShort?this.linkTitleShortLocal=this.linkTitleShort:this.linkTitleShortLocal=this.__locale("link-title-short")}},f=(l(559),l(4)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"component__title"},[l("div",{staticClass:"title-text",class:["h1"!==t.titleTag?"small":""],domProps:{innerHTML:t._s("<"+t.titleTag+">"+t.title+"</"+t.titleTag+">")}}),t._v(" "),t.link?l("nuxt-link",{staticClass:"link",attrs:{to:"/"+t.language+t.link}},[l("span",{staticClass:"link-title"},[t._v(t._s(t.linkTitle))]),t._v(" "),l("span",{staticClass:"mobile-link-title"},[t._v(t._s(t.linkTitleShortLocal))]),t._v(" "),l("i",{staticClass:"fal fa-long-arrow-right"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,l){"use strict";l(557)},560:function(t,e,l){var n=l(10)(!1);n.push([t.i,".component__title{margin-bottom:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:575px){.component__title{justify-content:space-between;margin-bottom:20px}}.component__title .link{margin-top:6px;margin-left:24px}@media (max-width:575px){.component__title .link .link-title,.component__title .link i{display:none}.component__title .link .mobile-link-title{display:block!important}}.component__title .link .mobile-link-title{display:none}.component__title .title-text{font-weight:600;font-size:40px;line-height:47px}@media (max-width:790px){.component__title .title-text{font-size:30px;line-height:32px}}@media (max-width:575px){.component__title .title-text{font-size:24px;line-height:30px}}.component__title .title-text.small{font-size:38px}",""]),t.exports=n}}]);