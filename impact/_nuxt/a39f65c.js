(window.webpackJsonp=window.webpackJsonp||[]).push([[82,27,66],{1210:function(e,t,n){"use strict";n(982)},1211:function(e,t,n){var o=n(10)(!1);o.push([e.i,".component__main-feeds{background-color:#f7f9ff;padding:80px 0 30px;position:relative}@media (max-width:575px){.component__main-feeds{padding-top:40px}}.component__main-feeds .swiper-container{padding:20px 0 50px}@media (max-width:790px){.component__main-feeds .swiper-container{padding-top:30px}}@media (max-width:575px){.component__main-feeds .swiper-container{padding-top:20px}}.component__main-feeds .swiper-pagination{display:none}@media (max-width:575px){.component__main-feeds .swiper-pagination{display:block}}",""]),e.exports=o},1368:function(e,t,n){"use strict";n.r(t);var o={props:{feeds:{type:Array,default:function(){return[]}}},components:{},data:function(){return{swiperOptions:{effect:"slide",speed:500,loop:!1,slidesPerView:3,spaceBetween:24,pagination:{el:".swiper-pagination",type:"bullets"},breakpoints:{0:{slidesPerView:1,spaceBetween:10},640:{slidesPerView:2,spaceBetween:24},1e3:{slidesPerView:3,spaceBetween:24}}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},methods:{next:function(){this.swiper.slideNext(500)},prev:function(){this.swiper.slidePrev(500)}}},r=(n(1210),n(4)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component__main-feeds"},[n("div",{staticClass:"container"},[n("app-title",{attrs:{"title-tag":"div",title:e.__locale("feedsFull"),link:"/feed","link-title":e.__locale("all")}})],1),e._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"swiper-navigation"},[n("div",{staticClass:"swiper-prev",on:{click:function(t){return e.prev()}}},[n("i",{staticClass:"fas fa-chevron-left"})])]),e._v(" "),n("swiper",{ref:"mySwiper",attrs:{options:e.swiperOptions}},[e._l(e.feeds,(function(e,t){return n("swiper-slide",{key:t},[n("feed-item",{attrs:{feed:e}})],1)})),e._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),e._v(" "),n("div",{staticClass:"swiper-navigation"},[n("div",{staticClass:"swiper-next",on:{click:function(t){return e.next()}}},[n("i",{staticClass:"fas fa-chevron-right"})])])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AppTitle:n(558).default,FeedItem:n(600).default})},557:function(e,t,n){var content=n(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(11).default)("df1750dc",content,!0,{sourceMap:!1})},558:function(e,t,n){"use strict";n.r(t);n(7),n(13),n(15),n(16),n(17);var o=n(6),r=n(8);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c={props:{titleTag:{type:String,default:"h1"},title:{type:String,default:"Title"},link:{type:String,default:null},linkTitle:{type:String,default:"Link title"},linkTitleShort:{type:String,default:null}},data:function(){return{linkTitleShortLocal:null}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.d)("localization",["language"])),mounted:function(){this.linkTitleShort?this.linkTitleShortLocal=this.linkTitleShort:this.linkTitleShortLocal=this.__locale("link-title-short")}},d=(n(559),n(4)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component__title"},[n("div",{staticClass:"title-text",class:["h1"!==e.titleTag?"small":""],domProps:{innerHTML:e._s("<"+e.titleTag+">"+e.title+"</"+e.titleTag+">")}}),e._v(" "),e.link?n("nuxt-link",{staticClass:"link",attrs:{to:"/"+e.language+e.link}},[n("span",{staticClass:"link-title"},[e._v(e._s(e.linkTitle))]),e._v(" "),n("span",{staticClass:"mobile-link-title"},[e._v(e._s(e.linkTitleShortLocal))]),e._v(" "),n("i",{staticClass:"fal fa-long-arrow-right"})]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},559:function(e,t,n){"use strict";n(557)},560:function(e,t,n){var o=n(10)(!1);o.push([e.i,".component__title{margin-bottom:30px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width:575px){.component__title{justify-content:space-between;margin-bottom:20px}}.component__title .link{margin-top:6px;margin-left:24px}@media (max-width:575px){.component__title .link .link-title,.component__title .link i{display:none}.component__title .link .mobile-link-title{display:block!important}}.component__title .link .mobile-link-title{display:none}.component__title .title-text{font-weight:600;font-size:40px;line-height:47px}@media (max-width:790px){.component__title .title-text{font-size:30px;line-height:32px}}@media (max-width:575px){.component__title .title-text{font-size:24px;line-height:30px}}.component__title .title-text.small{font-size:38px}",""]),e.exports=o},575:function(e,t,n){var content=n(595);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(11).default)("3689093c",content,!0,{sourceMap:!1})},594:function(e,t,n){"use strict";n(575)},595:function(e,t,n){var o=n(10)(!1);o.push([e.i,".component__feed-item{border-radius:10px;overflow:hidden;cursor:pointer;border:1px solid transparent;display:block;transition:all .35s ease-in-out}.component__feed-item:hover{box-shadow:0 5px 40px rgba(82,90,101,.2)}.component__feed-item:hover .feed-image .image{transform:scale(1.01)}.component__feed-item.bordered{border-color:#f2f2f2}.component__feed-item .feed-image{position:relative;overflow:hidden;width:100%;height:190px}.component__feed-item .feed-image .image{transition:all .5s ease-in-out;position:absolute;height:100%;width:100%;background-size:cover;background-repeat:no-repeat;background-position:50%}.component__feed-item .feed-content{color:#525a64;background-color:#fff;padding:16px 22px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.component__feed-item .feed-title{font-weight:700;font-size:20px;line-height:30px;margin-bottom:12px;height:60px;-webkit-line-clamp:2}.component__feed-item .feed-text,.component__feed-item .feed-title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.component__feed-item .feed-text{font-weight:400;font-size:14px;line-height:28px;margin-bottom:16px;height:190px;width:100%;-webkit-line-clamp:7}.component__feed-item .feed-text p{margin-bottom:0}.component__feed-item .feed-link{color:#44a1a4}.feed-footer{width:100%;color:#525a64;background-color:#fff;padding:10px 22px;justify-content:space-between}.feed-footer,.feed-footer .feed__fast-check{display:flex;flex-direction:row;align-items:center}.feed-footer .feed__fast-check{width:40px;height:40px;border-radius:50%;cursor:pointer;justify-content:center;transition:all .5s ease-in-out}.feed-footer .feed__fast-check:hover{color:#44a1a4;background-color:#f2f2f2}.feed-footer .feed-date{font-size:14px;line-height:20px;color:#818c99}",""]),e.exports=o},600:function(e,t,n){"use strict";n.r(t);n(7),n(13),n(15),n(16),n(17);var o=n(6),r=n(8);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c={props:{bordered:{type:Boolean,default:function(){return!1}},feed:{type:Object,default:function(){return{id:0,image:null,title:"title",text:null,createdAt:new Date}}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.d)("localization",["language"])),methods:{openFeed:function(e){this.$router.push({path:"/".concat(this.language,"/feed/").concat(e)})}}},d=(n(594),n(4)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component__feed-item",class:e.bordered?"bordered":""},[n("nuxt-link",{attrs:{to:"/"+e.language+"/feed/"+(e.feed.categories&&e.feed.categories[0]&&e.gCategoriesObj?e.gCategoriesObj[e.feed.categories[0]]:"news")+"/"+e.feed.slug}},[n("div",{staticClass:"feed-image"},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.gBackendServer+"/preview_600_"+e.feed.image,expression:"`${gBackendServer}/preview_600_${feed.image}`",arg:"background-image"}],staticClass:"image"})]),e._v(" "),n("div",{staticClass:"feed-content"},[n("div",{staticClass:"feed-title"},[e._v("\n        "+e._s(e.feed.title)+"\n      ")]),e._v(" "),n("div",{staticClass:"feed-text",domProps:{innerHTML:e._s(e.feed.text)}}),e._v(" "),n("div",{staticClass:"feed-link"},[n("div",{on:{click:function(t){return e.openFeed(e.feed.slug)}}},[n("span",[e._v(e._s(e.__locale("show-full")))]),e._v(" "),n("i",{staticClass:"fal fa-long-arrow-right"})])])])]),e._v(" "),n("div",{staticClass:"feed-footer"},[n("div",{staticClass:"feed-date"},[e._v("\n      "+e._s(e._f("filterDate")(e.feed.date,"dd.mm.yyyy"))+"\n    ")]),e._v(" "),n("div",{staticClass:"feed__fast-check",on:{click:function(t){return e.__openDrawer(e.feed)}}},[n("i",{staticClass:"fas fa-expand-wide"})])])],1)}),[],!1,null,null,null);t.default=component.exports},982:function(e,t,n){var content=n(1211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(11).default)("f778159a",content,!0,{sourceMap:!1})}}]);