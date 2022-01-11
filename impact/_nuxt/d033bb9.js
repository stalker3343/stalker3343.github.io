(window.webpackJsonp=window.webpackJsonp||[]).push([[254,27,141,205],{1323:function(t,e,n){"use strict";n.r(e);var r=n(3),l=(n(14),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("review/GET_REVIEWS");case 3:case"end":return e.stop()}}),e)})))()},head:function(){var title=this.__locale("meta-reviews-title"),t=this.__locale("meta-reviews-description");return{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:t},{hide:"robots",name:"robots",content:"follow, index"},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"og:site_name",property:"og:site_name",content:"IMPACT Capital"},{hid:"og:image",property:"og:image",content:"./images/logo.png"}]}}}),o=n(4),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page__reviews"},[n("div",{staticClass:"container"},[n("app-title",{attrs:{title:t.__locale("video-reviews-title")}}),t._v(" "),n("reviews")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTitle:n(558).default,Reviews:n(991).default})},1491:function(t,e,n){"use strict";n.r(e);var r=n(1323).default,l=n(4),component=Object(l.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports},557:function(t,e,n){var content=n(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("df1750dc",content,!0,{sourceMap:!1})},558:function(t,e,n){"use strict";n.r(e);n(7),n(13),n(15),n(16),n(17);var r=n(6),l=n(8);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={props:{titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},link:{type:String,default:null},linkTitle:{type:String,default:"Link title"},linkTitleShort:{type:String,default:null}},data:function(){return{linkTitleShortLocal:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.d)("localization",["language"])),mounted:function(){this.linkTitleShort?this.linkTitleShortLocal=this.linkTitleShort:this.linkTitleShortLocal=this.__locale("link-title-short")}},d=(n(559),n(4)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component__title"},[n("div",{staticClass:"title-text",class:["h1"!==t.titleTag?"small":""],domProps:{innerHTML:t._s("<"+t.titleTag+">"+t.title+"</"+t.titleTag+">")}}),t._v(" "),t.link?n("nuxt-link",{staticClass:"link",attrs:{to:"/"+t.language+t.link}},[n("span",{staticClass:"link-title"},[t._v(t._s(t.linkTitle))]),t._v(" "),n("span",{staticClass:"mobile-link-title"},[t._v(t._s(t.linkTitleShortLocal))]),t._v(" "),n("i",{staticClass:"fal fa-long-arrow-right"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,n){"use strict";n(557)},560:function(t,e,n){var r=n(10)(!1);r.push([t.i,".component__title{margin-bottom:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:575px){.component__title{justify-content:space-between;margin-bottom:20px}}.component__title .link{margin-top:6px;margin-left:24px}@media (max-width:575px){.component__title .link .link-title,.component__title .link i{display:none}.component__title .link .mobile-link-title{display:block!important}}.component__title .link .mobile-link-title{display:none}.component__title .title-text{font-weight:600;font-size:40px;line-height:47px}@media (max-width:790px){.component__title .title-text{font-size:30px;line-height:32px}}@media (max-width:575px){.component__title .title-text{font-size:24px;line-height:30px}}.component__title .title-text.small{font-size:38px}",""]),t.exports=r},638:function(t,e,n){var content=n(888);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("005592b8",content,!0,{sourceMap:!1})},887:function(t,e,n){"use strict";n(638)},888:function(t,e,n){var r=n(10)(!1);r.push([t.i,".component__reviews{display:grid;grid-gap:20px;gap:20px;grid-template-columns:1fr 1fr 1fr}@media (max-width:790px){.component__reviews{grid-template-columns:1fr 1fr}}@media (max-width:575px){.component__reviews{grid-template-columns:1fr}}@media (max-width:320px){.component__reviews{grid-template-columns:1fr}}",""]),t.exports=r},991:function(t,e,n){"use strict";n.r(e);n(7),n(13),n(15),n(16),n(17);var r=n(6),l=(n(19),n(8));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.d)("review",["reviews"])),methods:{openReview:function(t){this.gDialog.title=t.name,this.gDialog.component="VideoPlayer",this.gDialog.options={videoId:t.youtube},this.gDialogShown=!0}}},d=(n(887),n(4)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component__reviews"},t._l(t.reviews,(function(e,r){return n("div",{key:r,staticClass:"review-item",on:{click:function(n){return t.openReview(e)}}},[n("div",{staticClass:"review-preview"},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.gBackendServer+"/"+e.image,expression:"`${gBackendServer + '/' + review.image}`",arg:"background-image"}],staticClass:"review-image"},[t._m(0,!0)])]),t._v(" "),n("div",{staticClass:"review-title"},[t._v("\n      "+t._s(e.name)+"\n    ")])])})),0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"review-play"},[e("img",{attrs:{src:"./images/play.svg",alt:"play"}})])}],!1,null,null,null);e.default=component.exports}}]);