(window.webpackJsonp=window.webpackJsonp||[]).push([[71,49],{1275:function(e,t,r){var content=r(1425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("d852597a",content,!0,{sourceMap:!1})},1424:function(e,t,r){"use strict";r(1275)},1425:function(e,t,r){var n=r(10)(!1);n.push([e.i,".component__idea-email .el-form{width:100%}.component__idea-email .button-wrapper{width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}@media (max-width:575px){.component__idea-email .button-wrapper{display:flex;flex-direction:column-reverse;justify-content:center;align-items:center}.component__idea-email .button-wrapper .app-button{width:100%;margin-bottom:20px}}",""]),e.exports=n},1461:function(e,t,r){"use strict";r.r(t);var n=r(3),o=(r(14),r(9)),c={components:{ElForm:o.Form,ElFormItem:o.FormItem},data:function(){var e=this;return{switched:!1,form:{email:null},rules:{email:[{required:!0,validator:function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n,o){var c,l,m,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,100})+$/,n){t.next=4;break}return o(new Error(e.__locale("enter-email"))),t.abrupt("return");case 4:if(c.test(n)){t.next=7;break}return o(new Error(e.__locale("email-incorrect"))),t.abrupt("return");case 7:return t.next=9,e.$store.dispatch("auth/CHECK_USER_UNIQUE",{email:n});case 9:if(l=t.sent,m=l.success,f=l.unique,!m||!f){t.next=15;break}return o(),t.abrupt("return");case 15:if(m){t.next=18;break}return o(new Error(e.__locale("server-error"))),t.abrupt("return");case 18:f||o(new Error(e.__locale("email-used")));case 19:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()}]}}},mounted:function(){this.gAccount&&this.gAccount.email&&(this.form.email=this.gAccount.email)},methods:{confirmEmail:function(){},handleSubmit:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.__confirmEmail(e.form),e.switched=!0)}))},back:function(){this.switched=!1},checkEmail:function(){var e=this;this.$store.dispatch("auth/GET_ACCOUNT").then((function(t){t.success;var r=t.account;r&&r.emailConfirmed?(e.__alert("success",e.__locale("success-title"),e.__locale("confirmed")),e.gIdeaActiveComponent="IdeaList"):e.__alert("error",e.__locale("error-title"),e.__locale("something-went-wrong"))}))}}},l=(r(1424),r(4)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"component__idea-email"},[r("boxer",{attrs:{title:e.__locale("email-confirm-title"),subtitle:e.__locale("last-step-to-confirm")}},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[e.switched?r("div",{staticClass:"button-wrapper"},[r("app-button",{attrs:{color:"white"},on:{click:function(t){return e.back()}}},[e._v("\n          "+e._s(e.__locale("go-back"))+"\n        ")]),e._v(" "),r("app-button",{on:{click:function(t){return e.checkEmail()}}},[e._v("\n          "+e._s(e.__locale("already-confirm-email"))+"\n        ")])],1):r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules},nativeOn:{submit:function(t){return t.preventDefault(),e.handleSubmit()}}},[r("el-form-item",{attrs:{prop:"email"}},[r("app-input",{attrs:{autofocus:"",type:"email",placeholder:e.__locale("enter-email")+" *"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}},[r("app-button",{staticClass:"formButton",on:{click:function(t){return e.confirmEmail()}}},[e._v("\n              "+e._s(e.__locale("confirm"))+"\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Boxer:r(566).default})},562:function(e,t,r){var content=r(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("60879304",content,!0,{sourceMap:!1})},564:function(e,t,r){"use strict";r(562)},565:function(e,t,r){var n=r(10)(!1);n.push([e.i,".component__boxer{padding:60px 100px;background:#fff;background:linear-gradient(180deg,#fff,#fff 20%,#f6f9ff 0,#f6f9ff 80%,#fff 0,#fff)}@media (max-width:790px){.component__boxer{padding:0 30px}}@media (max-width:575px){.component__boxer{background:#f6f9ff;padding:0 20px;margin-bottom:0}}.component__boxer .subscribe-form__wrapper{background-image:url(./images/subscribe-background.svg);background-size:cover;background-repeat:repeat;box-shadow:0 16px 40px rgba(28,74,115,.23);border-radius:20px;padding:100px 40px;background-color:#fff}@media (max-width:790px){.component__boxer .subscribe-form__wrapper{padding:60px 40px}}@media (max-width:575px){.component__boxer .subscribe-form__wrapper{padding:70px 0;background-image:none;box-shadow:none;background-color:transparent;background-color:initial}}.component__boxer .subscribe-form__wrapper .subscribe-form{max-width:600px;width:100%;left:0;right:0;margin:auto;display:flex;flex-direction:column;justify-content:center;align-items:center}.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-title{font-weight:800;font-size:32px;line-height:42px;margin-bottom:12px;text-align:center}@media (max-width:1280px){.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-title{font-size:28px}}@media (max-width:575px){.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-title{font-size:26px;line-height:34px}}.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-text{font-weight:400;font-size:16px;line-height:26px;opacity:.8;text-align:center;margin-bottom:40px}@media (max-width:575px){.component__boxer .subscribe-form__wrapper .subscribe-form .subscribe-text{font-size:16px;line-height:26px}}.component__boxer .subscribe-form__wrapper .subscribe-form .form-wrapper{max-width:450px;width:100%}.component__boxer .subscribe-form__wrapper .subscribe-form .app-input{width:100%}@media (max-width:575px){.component__boxer .subscribe-form__wrapper .subscribe-form .app-input,.component__boxer .subscribe-form__wrapper .subscribe-form .app-input input{background-color:#fff}}",""]),e.exports=n},566:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,default:null},subtitle:{type:String,default:null}},data:function(){return{}}},o=(r(564),r(4)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"component__boxer"},[r("client-only",[r("div",{staticClass:"subscribe-form__wrapper"},[r("div",{staticClass:"subscribe-form"},[r("div",{staticClass:"subscribe-title"},[e._v("\n          "+e._s(e.title)+"\n        ")]),e._v(" "),e.subtitle?r("div",{staticClass:"subscribe-text"},[e._v("\n          "+e._s(e.subtitle)+"\n        ")]):e._e(),e._v(" "),e._t("default")],2)])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);