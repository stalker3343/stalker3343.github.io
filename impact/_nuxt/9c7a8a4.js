(window.webpackJsonp=window.webpackJsonp||[]).push([[44,27,39],{1028:function(t,e,r){"use strict";r(853)},1029:function(t,e,r){var n=r(10),o=r(291),l=r(1030),c=n(!1),m=o(l);c.push([t.i,".become-partner-rules__title{margin:0!important}.become-partner-rules__title div{color:#18898d;font-weight:700;line-height:40px}@media (max-width:480px){.become-partner-rules__title div{font-size:28px!important}}.become-partner-rules__list{margin-top:120px;padding-left:90px;display:grid;grid-template-columns:repeat(2,1fr);grid-row-gap:80px;grid-column-gap:60px;background-image:url("+m+");background-position-y:30px;background-repeat:no-repeat}@media (max-width:1300px){.become-partner-rules__list{background:none;padding:0;grid-row-gap:80px;grid-column-gap:30px;max-width:700px;margin:120px auto 0}}@media (max-width:768px){.become-partner-rules__list{grid-template-columns:1fr;grid-row-gap:40px;justify-items:center;margin:60px auto 0}}.become-partner-rules__item:nth-child(3) .become-partner-card,.become-partner-rules__item:nth-child(4) .become-partner-card{display:flex;justify-content:flex-end}.become-partner-rules__item:first-of-type .become-partner-card__text{max-width:262px}.become-partner-rules__item:nth-of-type(2) .become-partner-card__text{max-width:242px}.become-partner-rules__item:nth-of-type(3) .become-partner-card__text{max-width:369px}.become-partner-rules__item:nth-of-type(4) .become-partner-card__text{max-width:242px}@media (max-width:1300px){.become-partner-rules__item .become-partner-card{justify-content:flex-start!important}}@media (max-width:768px){.become-partner-rules__item{max-width:262px!important}}.become-partner-rules__button{margin-top:20px}@media (max-width:768px){.become-partner-rules__button{width:100%}}",""]),t.exports=c},1030:function(t,e,r){t.exports=r.p+"img/route.8e33dc7.png"},1224:function(t,e,r){"use strict";r.r(e);var n=r(816),o=r(599),l={name:"BecomePartnerRules",components:{BecomePartnerCard:n.default,CooperationBriefModal:o.default},data:function(){return{show:!1,list:[{icon:"become-partner/icon-target.png",text:"1. Заполните форму анкеты на сайте."},{icon:"become-partner/icon-user-call.png",text:"2. После проверки вашей анкеты - назначим встречу у нас в офисе или онлайн."},{icon:"become-partner/icon-profile-card.png",text:"4. Оформим договорённости юридически подписанием договора о сотрудничестве."},{icon:"become-partner/icon-sign.png",text:"3. Проведём собеседование."}]}},methods:{openForm:function(){this.$refs.modal.chooseRole(""),this.show=!0}}},c=(r(1028),r(4)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"become-partner-rules"},[r("div",{staticClass:"container"},[r("div",{staticClass:"become-partner-rules__wrapper"},[r("app-title",{staticClass:"become-partner-rules__title",attrs:{"title-tag":"div",title:"Как начать сотрудничество?"}}),t._v(" "),r("ul",{staticClass:"become-partner-rules__list"},t._l(t.list,(function(e,n){return r("li",{key:n,staticClass:"become-partner-rules__item"},[r("become-partner-card",{attrs:{data:e}}),t._v(" "),n?t._e():r("app-button",{staticClass:"become-partner-rules__button",attrs:{outline:""},on:{click:t.openForm}},[t._v("\n            Заполнить анкету\n          ")])],1)})),0)],1),t._v(" "),r("cooperation-brief-modal",{ref:"modal",attrs:{show:t.show},on:{close:function(e){t.show=!1}}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTitle:r(558).default,BecomePartnerCard:r(816).default,CooperationBriefModal:r(599).default})},557:function(t,e,r){var content=r(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("df1750dc",content,!0,{sourceMap:!1})},558:function(t,e,r){"use strict";r.r(e);r(7),r(13),r(15),r(16),r(17);var n=r(6),o=r(8);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={props:{titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},link:{type:String,default:null},linkTitle:{type:String,default:"Link title"},linkTitleShort:{type:String,default:null}},data:function(){return{linkTitleShortLocal:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)("localization",["language"])),mounted:function(){this.linkTitleShort?this.linkTitleShortLocal=this.linkTitleShort:this.linkTitleShortLocal=this.__locale("link-title-short")}},m=(r(559),r(4)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component__title"},[r("div",{staticClass:"title-text",class:["h1"!==t.titleTag?"small":""],domProps:{innerHTML:t._s("<"+t.titleTag+">"+t.title+"</"+t.titleTag+">")}}),t._v(" "),t.link?r("nuxt-link",{staticClass:"link",attrs:{to:"/"+t.language+t.link}},[r("span",{staticClass:"link-title"},[t._v(t._s(t.linkTitle))]),t._v(" "),r("span",{staticClass:"mobile-link-title"},[t._v(t._s(t.linkTitleShortLocal))]),t._v(" "),r("i",{staticClass:"fal fa-long-arrow-right"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,r){"use strict";r(557)},560:function(t,e,r){var n=r(10)(!1);n.push([t.i,".component__title{margin-bottom:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:575px){.component__title{justify-content:space-between;margin-bottom:20px}}.component__title .link{margin-top:6px;margin-left:24px}@media (max-width:575px){.component__title .link .link-title,.component__title .link i{display:none}.component__title .link .mobile-link-title{display:block!important}}.component__title .link .mobile-link-title{display:none}.component__title .title-text{font-weight:600;font-size:40px;line-height:47px}@media (max-width:790px){.component__title .title-text{font-size:30px;line-height:32px}}@media (max-width:575px){.component__title .title-text{font-size:24px;line-height:30px}}.component__title .title-text.small{font-size:38px}",""]),t.exports=n},633:function(t,e,r){var content=r(852);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("8fb65bde",content,!0,{sourceMap:!1})},816:function(t,e,r){"use strict";r.r(e);var n={name:"BecomePartnerCard",props:{data:{type:Object,default:function(){return{icon:"",text:""}}}}},o=(r(851),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"become-partner-card"},[r("div",{staticClass:"become-partner-card__wrapper"},[r("div",{staticClass:"become-partner-card__block"},[r("img",{staticClass:"become-partner-card__image",attrs:{src:"/images/"+t.data.icon,alt:""}})]),t._v(" "),r("p",{staticClass:"become-partner-card__text"},[t._v(t._s(t.data.text))])])])}),[],!1,null,null,null);e.default=component.exports},851:function(t,e,r){"use strict";r(633)},852:function(t,e,r){var n=r(10)(!1);n.push([t.i,"@media (max-width:650px){.become-partner-card__wrapper{justify-content:center;display:flex;flex-direction:column}}.become-partner-card__block{width:58px;height:58px;border-radius:20px;background:#18898d;margin-bottom:24px;display:flex;align-items:center;justify-content:center}@media (max-width:650px){.become-partner-card__block{margin:0 auto 24px}}.become-partner-card__text{font-size:16px;font-weight:600;margin:0;max-width:390px}@media (max-width:650px){.become-partner-card__text{text-align:center}}",""]),t.exports=n},853:function(t,e,r){var content=r(1029);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("6b08ac4e",content,!0,{sourceMap:!1})}}]);