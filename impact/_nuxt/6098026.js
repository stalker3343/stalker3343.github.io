(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{655:function(t,e,n){var content=n(981);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("1f8277f1",content,!0,{sourceMap:!1})},980:function(t,e,n){"use strict";n(655)},981:function(t,e,n){var r=n(10)(!1);r.push([t.i,".component__modius-event .footer-right{margin-top:20px}",""]),t.exports=r},998:function(t,e,n){"use strict";n.r(e);n(7),n(13),n(15),n(16),n(17);var r=n(3),o=n(6),c=(n(14),n(48),n(8));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:{data:{type:Object,default:function(){return{}}}},computed:d(d({},Object(c.d)("localization",["language"])),{},{userFeeds:function(){return this.gAccount&&this.gAccount.userFeeds?this.gAccount.userFeeds.map((function(t){return t.feedId})):[]}}),methods:{userBookingFeed:function(){this.gAccount?this.submitBooking():this.$router.push({path:"/"+this.language+"/auth/login?redirect=feed/"+this.data.slug})},submitBooking:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("feed/SUBMIT_BOOKING",{feedId:t.data.id}).then((function(e){if(!e)return!1;t.__alert("success",t.__locale("success-title"),t.__locale("feed-message-text-notify-web"))})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},_=(n(980),n(4)),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component__modius-event"},[n("div",{staticClass:"data-booking"},[n("div",{staticClass:"footer-left"},[n("span",{staticClass:"tips"},[t._v(t._s(t.__locale("feed-welcome-to-event")))]),t._v(" "),n("div",{staticClass:"footer-items"},[n("div",{staticClass:"footer-item"},[n("i",{staticClass:"far fa-calendar-alt"}),t._v(" "),n("span",[t._v(t._s(t._f("filterDate")(t.data.schedule)))])]),t._v(" "),n("div",{staticClass:"footer-item"},[n("i",{staticClass:"far fa-clock"}),t._v(" "),n("span",[t._v(t._s(t._f("filterTime")(t.data.schedule)))])])]),t._v(" "),t.data.location?n("div",{staticClass:"footer-item"},[n("i",{staticClass:"far fa-map-marker-alt"}),t._v(" "),n("span",[t._v(t._s(t.data.location))])]):t._e()]),t._v(" "),n("div",{staticClass:"footer-right"},[n("app-button",{attrs:{full:"",disabled:t.userFeeds.includes(parseInt(t.data.id))},on:{click:function(e){return t.userBookingFeed()}}},[t.userFeeds.includes(parseInt(t.data.id))?n("i",{staticClass:"fal fa-check"}):t._e(),t._v(" "),n("span",[t._v(t._s(t.userFeeds.includes(parseInt(t.data.id))?t.__locale("data-done"):t.__locale("i-will-go")))])])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);