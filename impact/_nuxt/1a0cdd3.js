(window.webpackJsonp=window.webpackJsonp||[]).push([[9,27,31,78,142],{1168:function(t,e,r){"use strict";r(953)},1169:function(t,e,r){var n=r(10)(!1);n.push([t.i,".component__scores{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:0 1px;gap:0 1px}@media (max-width:1100px){.component__scores{grid-template-columns:1fr 1fr}}@media (max-width:575px){.component__scores{grid-template-columns:1fr}}.component__scores .scores-item{width:100%;height:100px;padding:24px 20px}.component__scores .scores-item .scores-item__value{font-weight:700;font-size:30px;line-height:34px;color:#44a1a4;text-align:center}.component__scores .scores-item .scores-item__value span{font-size:18px}.component__scores .scores-item .scores-item__label{font-weight:400;font-size:12px;line-height:16px;text-align:center;color:#818c99}",""]),t.exports=n},1170:function(t,e,r){"use strict";r(954)},1171:function(t,e,r){var n=r(10)(!1);n.push([t.i,".component__asset-persons{margin-top:40px;display:grid;grid-gap:20px;gap:20px;grid-template-columns:1fr 1fr}@media (max-width:790px){.component__asset-persons{grid-template-columns:1fr 1fr}}@media (max-width:575px){.component__asset-persons{grid-template-columns:1fr}}@media (max-width:320px){.component__asset-persons{grid-template-columns:1fr}}.component__asset-persons .asset-person{border-radius:10px;box-shadow:0 0 10px #f2f2f2;padding:15px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.component__asset-persons .asset-person .asset-person__image{margin-right:20px;background-size:cover;background-repeat:no-repeat;background-position:50%;width:100px;height:130px;border-radius:10px}.component__asset-persons .asset-person .asset-person__content{width:calc(100% - 120px)}.component__asset-persons .asset-person .asset-person__content .asset-person__title{font-weight:600;margin-bottom:8px;font-size:110%}.component__asset-persons .asset-person .asset-person__content .asset-person__subtitle{color:#818c99}",""]),t.exports=n},1260:function(t,e,r){var content=r(1399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("048f245b",content,!0,{sourceMap:!1})},1347:function(t,e,r){"use strict";r.r(e);var n={props:{items:{type:Array,default:function(){return[]}}}},o=(r(1168),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component__scores"},t._l(t.items,(function(e,n){return r("div",{key:n,staticClass:"scores-item"},[r("div",{staticClass:"scores-item__value"},[Math.abs(e.value)>=1e3?[t._v("\n        "+t._s(t._f("filterNum")(e.value))+"\n      ")]:[t._v("\n        "+t._s(e.value)+"\n      ")],t._v(" "),r("span",{domProps:{innerHTML:t._s(t.__getUnit(e.unit))}})],2),t._v(" "),r("div",{staticClass:"scores-item__label"},[t._v("\n      "+t._s(e.label)+"\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports},1348:function(t,e,r){"use strict";r.r(e);var n={props:{persons:{type:Array,default:function(){return[]}}}},o=(r(1170),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component__asset-persons"},t._l(t.persons,(function(e,n){return r("div",{key:n,staticClass:"asset-person"},[r("div",{staticClass:"asset-person__image",style:"background-image: url('"+t.gBackendServer+"/"+e.image+"')"}),t._v(" "),r("div",{staticClass:"asset-person__content"},[r("div",{staticClass:"asset-person__title"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),r("div",{staticClass:"asset-person__subtitle"},[t._v("\n        "+t._s(e.subtitle)+"\n      ")])])])})),0)}),[],!1,null,null,null);e.default=component.exports},1398:function(t,e,r){"use strict";r(1260)},1399:function(t,e,r){var n=r(10)(!1);n.push([t.i,".page__asset-slug .asset-description .asset-text ul{padding-left:50px;list-style:disc}.page__asset-slug .asset-description .asset-text ul li{margin-bottom:20px}",""]),t.exports=n},1448:function(t,e,r){"use strict";r.r(e);r(7),r(13),r(16),r(17);var n=r(42),o=r(6),l=r(3),c=(r(14),r(26),r(15),r(75),r(43),r(8));function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.params,o=t.redirect,l=t.route,c=t.error,m=n.slug,e.next=4,r.dispatch("asset/GET_ASSET",{slug:m}).then((function(t){t&&t.id||(r.state.redirect.redirects&&r.state.redirect.redirects.every((function(t){return("/"===l.path[l.path.length-1]?l.path.slice(0,l.path.length-1):l.path)!==("/"===t.fromUrl[t.fromUrl.length-1]?t.fromUrl.slice(0,t.fromUrl.length-1):t.fromUrl)||(o(t.toUrl),!1)})),c({statusCode:404,message:"Page not found"}))}));case 4:case"end":return e.stop()}}),e)})))()},computed:d(d({},Object(c.d)("asset",["asset"])),{},{parameters:function(){if(!this.asset.parameters)return[];var t=[{label:this.__locale("ic-share"),value:this.asset.stockPercentage,unit:"%"},{label:this.__locale("ic-stock-price"),value:this.asset.stockPrice,unit:this.asset.stockCurrency}].concat(Object(n.a)(this.asset.parameters));return t.filter((function(t){return t.value>0}))},timeline:function(){return this.asset.text.split("</li>")}}),head:function(){var title=this.asset.metaTitle||this.asset.title,t=this.asset.metaDescription||this.asset.intro.substring(0,180).replace(/<\/?(span|div|img|p|br)\b[^<>]*>/g,"");return{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:t},{hid:"keywords",name:"keywords",content:this.asset.metaKeywords},{hide:"robots",name:"robots",content:this.asset.noindex?"noindex, nofollow":"follow, index"},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:site_name",property:"og:site_name",content:"IMPACT Capital"},{hid:"og:image",property:"og:image",content:this.gBackendServer+"/"+this.asset.image}]}}},_=(r(1398),r(4)),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page__asset-slug"},[r("jumbotron",{attrs:{title:t.asset.title,color:"#F1F7F7",image:t.gBackendServer+"/"+t.asset.image,"image-cover":""}},[r("div",{domProps:{innerHTML:t._s(t.asset.intro)}})]),t._v(" "),r("div",{staticClass:"container"},[r("app-spacer",{attrs:{size:25}}),t._v(" "),r("scores",{attrs:{items:t.asset.parameters}}),t._v(" "),r("app-spacer",{attrs:{size:40}}),t._v(" "),r("div",{staticClass:"asset-description"},[t.asset.text&&t.asset.text.length>0?r("app-title",{attrs:{title:t.__locale("company-development-stages")}}):t._e(),t._v(" "),r("div",{staticClass:"asset-text",domProps:{innerHTML:t._s(t.asset.text)}})],1),t._v(" "),r("asset-person",{attrs:{persons:t.asset.persons}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Jumbotron:r(656).default,Scores:r(1347).default,AppTitle:r(558).default,AssetPerson:r(1348).default})},557:function(t,e,r){var content=r(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("df1750dc",content,!0,{sourceMap:!1})},558:function(t,e,r){"use strict";r.r(e);r(7),r(13),r(15),r(16),r(17);var n=r(6),o=r(8);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={props:{titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},link:{type:String,default:null},linkTitle:{type:String,default:"Link title"},linkTitleShort:{type:String,default:null}},data:function(){return{linkTitleShortLocal:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)("localization",["language"])),mounted:function(){this.linkTitleShort?this.linkTitleShortLocal=this.linkTitleShort:this.linkTitleShortLocal=this.__locale("link-title-short")}},m=(r(559),r(4)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component__title"},[r("div",{staticClass:"title-text",class:["h1"!==t.titleTag?"small":""],domProps:{innerHTML:t._s("<"+t.titleTag+">"+t.title+"</"+t.titleTag+">")}}),t._v(" "),t.link?r("nuxt-link",{staticClass:"link",attrs:{to:"/"+t.language+t.link}},[r("span",{staticClass:"link-title"},[t._v(t._s(t.linkTitle))]),t._v(" "),r("span",{staticClass:"mobile-link-title"},[t._v(t._s(t.linkTitleShortLocal))]),t._v(" "),r("i",{staticClass:"fal fa-long-arrow-right"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,r){"use strict";r(557)},560:function(t,e,r){var n=r(10)(!1);n.push([t.i,".component__title{margin-bottom:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:575px){.component__title{justify-content:space-between;margin-bottom:20px}}.component__title .link{margin-top:6px;margin-left:24px}@media (max-width:575px){.component__title .link .link-title,.component__title .link i{display:none}.component__title .link .mobile-link-title{display:block!important}}.component__title .link .mobile-link-title{display:none}.component__title .title-text{font-weight:600;font-size:40px;line-height:47px}@media (max-width:790px){.component__title .title-text{font-size:30px;line-height:32px}}@media (max-width:575px){.component__title .title-text{font-size:24px;line-height:30px}}.component__title .title-text.small{font-size:38px}",""]),t.exports=n},585:function(t,e,r){var content=r(619);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("3786ccf8",content,!0,{sourceMap:!1})},618:function(t,e,r){"use strict";r(585)},619:function(t,e,r){var n=r(10)(!1);n.push([t.i,".el-drawer.ltr,.el-drawer.rtl,.el-drawer__container{top:0;bottom:0;height:100%}.el-drawer.btt,.el-drawer.ttb,.el-drawer__container{left:0;right:0;width:100%}@-webkit-keyframes el-drawer-fade-in{0%{opacity:0}to{opacity:1}}@keyframes el-drawer-fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes rtl-drawer-in{0%{transform:translate(100%)}to{transform:translate(0)}}@keyframes rtl-drawer-in{0%{transform:translate(100%)}to{transform:translate(0)}}@-webkit-keyframes rtl-drawer-out{0%{transform:translate(0)}to{transform:translate(100%)}}@keyframes rtl-drawer-out{0%{transform:translate(0)}to{transform:translate(100%)}}@-webkit-keyframes ltr-drawer-in{0%{transform:translate(-100%)}to{transform:translate(0)}}@keyframes ltr-drawer-in{0%{transform:translate(-100%)}to{transform:translate(0)}}@-webkit-keyframes ltr-drawer-out{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes ltr-drawer-out{0%{transform:translate(0)}to{transform:translate(-100%)}}@-webkit-keyframes ttb-drawer-in{0%{transform:translateY(-100%)}to{transform:translate(0)}}@keyframes ttb-drawer-in{0%{transform:translateY(-100%)}to{transform:translate(0)}}@-webkit-keyframes ttb-drawer-out{0%{transform:translate(0)}to{transform:translateY(-100%)}}@keyframes ttb-drawer-out{0%{transform:translate(0)}to{transform:translateY(-100%)}}@-webkit-keyframes btt-drawer-in{0%{transform:translateY(100%)}to{transform:translate(0)}}@keyframes btt-drawer-in{0%{transform:translateY(100%)}to{transform:translate(0)}}@-webkit-keyframes btt-drawer-out{0%{transform:translate(0)}to{transform:translateY(100%)}}@keyframes btt-drawer-out{0%{transform:translate(0)}to{transform:translateY(100%)}}.el-drawer{position:absolute;box-sizing:border-box;background-color:#fff;display:flex;flex-direction:column;box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);overflow:hidden;outline:0}.el-drawer.rtl{-webkit-animation:rtl-drawer-out .3s;animation:rtl-drawer-out .3s;right:0}.el-drawer__open .el-drawer.rtl{-webkit-animation:rtl-drawer-in .3s 1ms;animation:rtl-drawer-in .3s 1ms}.el-drawer.ltr{-webkit-animation:ltr-drawer-out .3s;animation:ltr-drawer-out .3s;left:0}.el-drawer__open .el-drawer.ltr{-webkit-animation:ltr-drawer-in .3s 1ms;animation:ltr-drawer-in .3s 1ms}.el-drawer.ttb{-webkit-animation:ttb-drawer-out .3s;animation:ttb-drawer-out .3s;top:0}.el-drawer__open .el-drawer.ttb{-webkit-animation:ttb-drawer-in .3s 1ms;animation:ttb-drawer-in .3s 1ms}.el-drawer.btt{-webkit-animation:btt-drawer-out .3s;animation:btt-drawer-out .3s;bottom:0}.el-drawer__open .el-drawer.btt{-webkit-animation:btt-drawer-in .3s 1ms;animation:btt-drawer-in .3s 1ms}.el-drawer__wrapper{position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden;margin:0}.el-drawer__header{align-items:center;color:#72767b;display:flex;margin-bottom:32px;padding:20px 20px 0}.el-drawer__header>:first-child{flex:1}.el-drawer__title{margin:0;flex:1;line-height:inherit;font-size:1rem}.el-drawer__close-btn{border:none;cursor:pointer;font-size:20px;color:inherit;background-color:transparent}.el-drawer__body{flex:1}.el-drawer__body>*{box-sizing:border-box}.el-drawer__container{position:relative}.el-drawer-fade-enter-active{-webkit-animation:el-drawer-fade-in .3s;animation:el-drawer-fade-in .3s}.el-drawer-fade-leave-active{animation:el-drawer-fade-in .3s reverse}.component__jumbotron{padding:20px 0 60px}.component__jumbotron.image-sticky .jumbotron-left{position:sticky;top:85px}@media (max-width:790px){.component__jumbotron.image-sticky .jumbotron-left{top:0;position:relative!important}}.component__jumbotron .jumbotron-content{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}@media (max-width:790px){.component__jumbotron .jumbotron-content{flex-direction:column}}.component__jumbotron .jumbotron-left{width:50%;margin-right:50px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}@media (max-width:790px){.component__jumbotron .jumbotron-left{width:100%;margin-right:0;margin-bottom:50px}}.component__jumbotron .jumbotron-left .jumbotron-image,.component__jumbotron .jumbotron-left .jumbotron-video{width:100%;border-radius:10px;overflow:hidden;margin-bottom:20px}.component__jumbotron .jumbotron-left .jumbotron-image{height:300px;background-position:50%;background-repeat:no-repeat}.component__jumbotron .jumbotron-left .jumbotron-left__footer{width:100%}.component__jumbotron .jubotron-right{width:calc(50% + 50px)}@media (max-width:790px){.component__jumbotron .jubotron-right{width:100%}}.component__jumbotron .jubotron-right .jumbotron-button button{cursor:pointer;border:0 solid;background-color:transparent;font-weight:600;font-size:14px;line-height:20px;color:#525a64}.component__jumbotron .jubotron-right .jumbotron-button button span{margin-right:10px}.component__jumbotron ul{list-style:disc;margin-left:40px}.component__jumbotron ol{list-style:decimal;margin-left:40px}",""]),t.exports=n},656:function(t,e,r){"use strict";r.r(e);var n={components:{},props:{youtube:{type:String,default:null},titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},image:{type:String,default:"./images/strategy-image.svg"},imageCover:{type:Boolean,default:function(){return!1}},more:{type:String,default:null},color:{type:String,default:"#ffffff"},imageSticky:{type:Boolean,default:function(){return!1}}},data:function(){return{}},methods:{}},o=(r(618),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component__jumbotron",class:[t.imageSticky?"image-sticky":""],style:"background-color: "+t.color},[r("div",{staticClass:"container"},[r("app-title",{attrs:{title:t.__locale(t.title),"title-tag":t.titleTag}}),t._v(" "),r("div",{staticClass:"jumbotron-content"},[r("div",{staticClass:"jumbotron-left"},[t.youtube?r("div",{staticClass:"jumbotron-video"},[r("video-player",{attrs:{options:{videoId:t.youtube},autoplay:0}})],1):r("div",{staticClass:"jumbotron-image",style:"background-image: url('"+t.image+"'); background-size: "+(t.imageCover?"cover":"contain")+";"}),t._v(" "),r("div",{staticClass:"jumbotron-left__footer"},[t._t("footer")],2)]),t._v(" "),r("div",{staticClass:"jubotron-right"},[r("div",{staticClass:"jumbotron-text"},[t._t("default")],2),t._v(" "),r("div",{staticClass:"jumbotron-button"},[t.more?r("button",{on:{click:function(e){return t.__openDrawer({title:t.title,text:t.text,more:t.more})}}},[r("span",[t._v(t._s(t.__locale("more")))]),t._v(" "),r("i",{staticClass:"fas fa-expand-wide"})]):t._e()])])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTitle:r(558).default,VideoPlayer:r(168).default})},953:function(t,e,r){var content=r(1169);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("5a6e32a6",content,!0,{sourceMap:!1})},954:function(t,e,r){var content=r(1171);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("3837a5c0",content,!0,{sourceMap:!1})}}]);