(window.webpackJsonp=window.webpackJsonp||[]).push([[46,27],{1022:function(t,e,n){"use strict";n(848)},1023:function(t,e,n){var r=n(10)(!1);r.push([t.i,".become-partner-transactions__wrapper{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:90px;align-items:center;padding:142px 0}@media (max-width:1200px){.become-partner-transactions__wrapper{grid-template-columns:1fr;grid-row-gap:30px}}.become-partner-transactions__top{display:flex;align-items:center;margin-bottom:20px}@media (max-width:1200px){.become-partner-transactions__top{justify-content:center}}@media (max-width:650px){.become-partner-transactions__top{flex-direction:column}}.become-partner-transactions__title{margin:0!important}.become-partner-transactions__title div{color:#333;font-weight:800;line-height:40px}@media (max-width:650px){.become-partner-transactions__title div{text-align:center}}@media (max-width:480px){.become-partner-transactions__title div{font-size:32px!important}}.become-partner-transactions__title_label{margin-left:28px!important}.become-partner-transactions__title_label div{color:#18898d}@media (max-width:650px){.become-partner-transactions__title_label{margin:15px 0 0!important}}.become-partner-transactions__text{font-size:18px;color:#333;font-weight:500;max-width:640px;line-height:29px}@media (max-width:1200px){.become-partner-transactions__text{text-align:center;margin:0 auto 20px}}.become-partner-transactions__list{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto;grid-gap:24px;max-width:500px}@media (max-width:1200px){.become-partner-transactions__list{margin:0 auto}}@media (max-width:650px){.become-partner-transactions__list{grid-template-columns:repeat(2,1fr);max-width:300px}}.become-partner-transactions__image{width:100%;height:100%}",""]),t.exports=r},1221:function(t,e,n){"use strict";n.r(e);var r={name:"BecomePartnerTransactions",data:function(){return{images:["become-partner/project1.png","become-partner/project2.png","become-partner/project3.png","become-partner/project4.png","become-partner/project5.png","become-partner/project6.png"]}}},o=(n(1022),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"become-partner-transactions"},[n("div",{staticClass:"container"},[n("div",{staticClass:"become-partner-transactions__wrapper"},[n("div",[n("div",{staticClass:"become-partner-transactions__top"},[n("app-title",{staticClass:"become-partner-transactions__title",attrs:{"title-tag":"div",title:"Сделок закрыто"}}),t._v(" "),n("app-title",{staticClass:"become-partner-transactions__title become-partner-transactions__title_label",attrs:{"title-tag":"div",title:"130+"}})],1),t._v(" "),n("p",{staticClass:"become-partner-transactions__text"},[t._v("\n          Сделок по привлечению частного капитала закрыто с 2020 года до 1-ого полугодия 2021 года\n          на сумму 483 млн. руб\n        ")])]),t._v(" "),n("ul",{staticClass:"become-partner-transactions__list"},t._l(t.images,(function(t,e){return n("li",{key:e},[n("img",{staticClass:"become-partner-transactions__image",attrs:{src:"/images/"+t}})])})),0)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTitle:n(558).default})},557:function(t,e,n){var content=n(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("df1750dc",content,!0,{sourceMap:!1})},558:function(t,e,n){"use strict";n.r(e);n(7),n(13),n(15),n(16),n(17);var r=n(6),o=n(8);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={props:{titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},link:{type:String,default:null},linkTitle:{type:String,default:"Link title"},linkTitleShort:{type:String,default:null}},data:function(){return{linkTitleShortLocal:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)("localization",["language"])),mounted:function(){this.linkTitleShort?this.linkTitleShortLocal=this.linkTitleShort:this.linkTitleShortLocal=this.__locale("link-title-short")}},m=(n(559),n(4)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component__title"},[n("div",{staticClass:"title-text",class:["h1"!==t.titleTag?"small":""],domProps:{innerHTML:t._s("<"+t.titleTag+">"+t.title+"</"+t.titleTag+">")}}),t._v(" "),t.link?n("nuxt-link",{staticClass:"link",attrs:{to:"/"+t.language+t.link}},[n("span",{staticClass:"link-title"},[t._v(t._s(t.linkTitle))]),t._v(" "),n("span",{staticClass:"mobile-link-title"},[t._v(t._s(t.linkTitleShortLocal))]),t._v(" "),n("i",{staticClass:"fal fa-long-arrow-right"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,n){"use strict";n(557)},560:function(t,e,n){var r=n(10)(!1);r.push([t.i,".component__title{margin-bottom:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:575px){.component__title{justify-content:space-between;margin-bottom:20px}}.component__title .link{margin-top:6px;margin-left:24px}@media (max-width:575px){.component__title .link .link-title,.component__title .link i{display:none}.component__title .link .mobile-link-title{display:block!important}}.component__title .link .mobile-link-title{display:none}.component__title .title-text{font-weight:600;font-size:40px;line-height:47px}@media (max-width:790px){.component__title .title-text{font-size:30px;line-height:32px}}@media (max-width:575px){.component__title .title-text{font-size:24px;line-height:30px}}.component__title .title-text.small{font-size:38px}",""]),t.exports=r},848:function(t,e,n){var content=n(1023);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("97831b1e",content,!0,{sourceMap:!1})}}]);