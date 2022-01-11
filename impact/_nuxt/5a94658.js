(window.webpackJsonp=window.webpackJsonp||[]).push([[180,27,56],{1287:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{items:[{title:"iPhone iOS",description:"iphone-description",icon:"/images/icon-apple.svg",link:null,action:"open-apple"},{title:"Android OS",description:"android-description",icon:"/images/icon-google-play.svg",link:null,action:"open-google-play"}]}},methods:{openLink:function(t){window.open(t,"_blank")}}},o=n(4),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page__apps-index"},[n("div",{staticClass:"container small"},[n("app-title",{attrs:{title:t.__locale("web-apps-title")}}),t._v(" "),n("div",{staticClass:"tips"},[t._v("\n      "+t._s(t.__locale("web-apps-text"))+"\n    ")]),t._v(" "),n("clickable-list",{attrs:{items:t.items},on:{"open-apple":function(e){return t.openLink("https://apps.apple.com/ru/app/impact-capital/id1530757403")},"open-google-play":function(e){return t.openLink("https://play.google.com/store/apps/details?id=com.impactcapital.production&hl=ru")}}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTitle:n(558).default,ClickableList:n(598).default})},557:function(t,e,n){var content=n(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("df1750dc",content,!0,{sourceMap:!1})},558:function(t,e,n){"use strict";n.r(e);n(7),n(13),n(15),n(16),n(17);var l=n(6),o=n(8);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={props:{titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},link:{type:String,default:null},linkTitle:{type:String,default:"Link title"},linkTitleShort:{type:String,default:null}},data:function(){return{linkTitleShortLocal:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)("localization",["language"])),mounted:function(){this.linkTitleShort?this.linkTitleShortLocal=this.linkTitleShort:this.linkTitleShortLocal=this.__locale("link-title-short")}},f=(n(559),n(4)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component__title"},[n("div",{staticClass:"title-text",class:["h1"!==t.titleTag?"small":""],domProps:{innerHTML:t._s("<"+t.titleTag+">"+t.title+"</"+t.titleTag+">")}}),t._v(" "),t.link?n("nuxt-link",{staticClass:"link",attrs:{to:"/"+t.language+t.link}},[n("span",{staticClass:"link-title"},[t._v(t._s(t.linkTitle))]),t._v(" "),n("span",{staticClass:"mobile-link-title"},[t._v(t._s(t.linkTitleShortLocal))]),t._v(" "),n("i",{staticClass:"fal fa-long-arrow-right"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,n){"use strict";n(557)},560:function(t,e,n){var l=n(10)(!1);l.push([t.i,".component__title{margin-bottom:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:575px){.component__title{justify-content:space-between;margin-bottom:20px}}.component__title .link{margin-top:6px;margin-left:24px}@media (max-width:575px){.component__title .link .link-title,.component__title .link i{display:none}.component__title .link .mobile-link-title{display:block!important}}.component__title .link .mobile-link-title{display:none}.component__title .title-text{font-weight:600;font-size:40px;line-height:47px}@media (max-width:790px){.component__title .title-text{font-size:30px;line-height:32px}}@media (max-width:575px){.component__title .title-text{font-size:24px;line-height:30px}}.component__title .title-text.small{font-size:38px}",""]),t.exports=l},574:function(t,e,n){var content=n(593);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("53773404",content,!0,{sourceMap:!1})},591:function(t,e,n){"use strict";n(292)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},592:function(t,e,n){"use strict";n(574)},593:function(t,e,n){var l=n(10)(!1);l.push([t.i,".component__profile-list{width:100%;display:grid;grid-template-columns:1fr 1fr}@media (max-width:790px){.component__profile-list{grid-template-columns:1fr}.component__profile-list .profile-list__item{margin-right:0!important}}.component__profile-list .profile-list__item{cursor:pointer;padding:20px;border-radius:10px;border:1px solid #f2f2f2;margin-bottom:20px;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap}@media (max-width:320px){.component__profile-list .profile-list__item{flex-direction:column}}.component__profile-list .profile-list__item:nth-child(2n-1){margin-right:20px}.component__profile-list .profile-list__item:hover{box-shadow:0 0 10px #f2f2f2}.component__profile-list .profile-list__item .item-content{width:calc(100% - 80px)}@media (max-width:320px){.component__profile-list .profile-list__item .item-content{width:100%;margin-top:20px}}.component__profile-list .profile-list__item .item-content .item-title{font-size:20px;margin-bottom:10px}.component__profile-list .profile-list__item .item-content .item-description{font-weight:400;font-size:14px;color:#818c99}.component__profile-list .profile-list__item .item-footer{width:100%}",""]),t.exports=l},598:function(t,e,n){"use strict";n.r(e);n(7),n(13),n(15),n(16),n(17);var l=n(6),o=(n(591),n(8));function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={props:{items:{type:Array,default:function(){return[]}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)("localization",["language"])),methods:{clickItem:function(t){t.link?this.$router.push({path:"/"+this.language+t.link}):t.action&&this.$emit(t.action)}}},f=(n(592),n(4)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component__profile-list"},t._l(t.items,(function(e,l){return n("div",{key:l,staticClass:"profile-list__item",on:{click:function(n){return t.clickItem(e)}}},[n("app-icon",{attrs:{src:e.icon}}),t._v(" "),n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-title"},[t._v("\n        "+t._s(t.__locale(e.title))+"\n      ")]),t._v(" "),n("div",{staticClass:"item-description"},[t._v("\n        "+t._s(t.__locale(e.description))+"\n      ")])]),t._v(" "),e.footer?n("div",{staticClass:"item-footer"},[t._v("footer")]):t._e()],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);