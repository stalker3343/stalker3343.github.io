(window.webpackJsonp=window.webpackJsonp||[]).push([[182,59,131],{1006:function(e,t,r){"use strict";r(834)},1007:function(e,t,r){var o=r(10)(!1);o.push([e.i,".field-header[data-v-56919ab8]{margin-bottom:5px;font-size:15px;line-height:160%}.form-block[data-v-56919ab8]{margin-bottom:25px}",""]),e.exports=o},1289:function(e,t,r){"use strict";r.r(t);var o=r(3),n=(r(14),r(615)),l=r(170),c=r(74),m=r(9),d={components:{AppTextarea:c.a,FormWrapper:n.default,PhoneNumberInput:l.default,ElForm:m.Form,ElFormItem:m.FormItem,ElInput:m.Input,ElSelect:m.Select,ElOption:m.Option},data:function(){var e=this;return{form:{name:"",number:"",activeIncome:null,investCapital:"",investmentHistory:"",passiveIncome:""},rules:{name:[{required:!0,message:"Заполните данное поле"}],number:[{required:!0,validator:function(t,r,o){r?e.currentMask.length===r.length?o():o(new Error(e.__locale("phone-number-incorrect"))):o(new Error(e.__locale("enter-phone-number")))},trigger:"blur"}],activeIncome:[{required:!0,message:"Заполните данное поле"}],investCapital:[{required:!0,message:"Заполните данное поле"}],investmentHistory:[{required:!0,message:"Заполните данное поле"}],credits:[{required:!0,message:"Заполните данное поле"}],passiveIncome:[{required:!0,message:"Заполните данное поле"}],portfolio:[{required:!0,message:"Заполните данное поле"}],profitability:[{required:!0,message:"Заполните данное поле"}]},currentMask:"+7(###)###-##-##",activeIncomeOptions:[{label:"до 100 000 руб.",value:0},{label:"от 100 000 руб.",value:1},{label:"от 500 000 руб.",value:2},{label:"от 1 000 000 руб.",value:3},{label:"от 5 000 000 руб.",value:4}]}},methods:{handleSubmit:function(){var e=this;this.$refs.form.validate(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.button.validate();case 2:o=t.sent,r&&o?e.submit():e.$nextTick((function(){e.$scrollTo(".is-error",500,{offset:-80})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},submit:function(){}}},f=(r(1006),r(4)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form-wrapper",{attrs:{header:"Анкета на аудит от IMPACT Capital","sub-title":"Ответьте на вопросы, чтобы мы могли более подробно подготовиться к аудиту вашего портфеля, и подготовить актуальные для Вас рекомендации"},scopedSlots:e._u([{key:"main",fn:function(){return[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{staticClass:"form-block",attrs:{prop:"name"}},[r("p",{staticClass:"field-header"},[e._v("Фамилия Имя Отчество "),r("span",{staticClass:"require-field-star"},[e._v("*")])]),e._v(" "),r("el-input",{attrs:{placeholder:"Фамилия Имя Отчество"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{staticClass:"form-block",attrs:{prop:"number"}},[r("p",{staticClass:"field-header"},[e._v("\n          Контактный номер телефона "),r("span",{staticClass:"require-field-star"},[e._v("*")])]),e._v(" "),r("phone-number-input",{attrs:{placeholder:"Номер телефона"},on:{"mask-change":function(t){e.currentMask=t}},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),e._v(" "),r("el-form-item",{staticClass:"form-block",attrs:{prop:"activeIncome"}},[r("p",{staticClass:"field-header"},[e._v("\n          Каков размер вашего активного дохода в месяц? (Под этим понимается какой объем денежных\n          средств вы получаете от ваших активных действий: работа / ведение бизнеса).\n          "),r("span",{staticClass:"require-field-star"},[e._v("*")])]),e._v(" "),r("el-select",{attrs:{"collapse-tags":"",placeholder:"Размер активного дохода"},model:{value:e.form.activeIncome,callback:function(t){e.$set(e.form,"activeIncome",t)},expression:"form.activeIncome"}},e._l(e.activeIncomeOptions,(function(t,o){return r("el-option",{key:o,attrs:{label:t.label,value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])})),1)],1),e._v(" "),r("el-form-item",{staticClass:"form-block",attrs:{prop:"investCapital"}},[r("p",{staticClass:"field-header"},[e._v("\n          Каков общий размер инвестиционного капитала? "),r("span",{staticClass:"require-field-star"},[e._v("*")])]),e._v(" "),r("el-input",{attrs:{placeholder:"Размер инвестиционного капитала"},model:{value:e.form.investCapital,callback:function(t){e.$set(e.form,"investCapital",t)},expression:"form.investCapital"}})],1),e._v(" "),r("el-form-item",{staticClass:"form-block",attrs:{prop:"investmentHistory"}},[r("p",{staticClass:"field-header"},[e._v("\n          Какие инвестиции были самые удачные и какие самые провальные? Сколько это в деньгах и в\n          % от вложений? Какие выводы сделали? "),r("span",{staticClass:"require-field-star"},[e._v("*")])]),e._v(" "),r("app-textarea",{attrs:{rows:"5",placeholder:"Опишите свои инвестиции"},model:{value:e.form.investmentHistory,callback:function(t){e.$set(e.form,"investmentHistory",t)},expression:"form.investmentHistory"}})],1),e._v(" "),r("el-form-item",{staticClass:"form-block",attrs:{prop:"credits"}},[r("p",{staticClass:"field-header"},[e._v("\n          Есть ли кредиты? Каков размер и ставка по кредиту? Какой ежемесячный платеж?\n          "),r("span",{staticClass:"require-field-star"},[e._v("*")])]),e._v(" "),r("app-textarea",{attrs:{rows:"4",placeholder:"Кредиты"},model:{value:e.form.credits,callback:function(t){e.$set(e.form,"credits",t)},expression:"form.credits"}})],1),e._v(" "),r("el-form-item",{staticClass:"form-block",attrs:{prop:"passiveIncome"}},[r("p",{staticClass:"field-header"},[e._v("\n          Какой пассивный доход в месяц? Сколько активов его генерируют?\n          "),r("span",{staticClass:"require-field-star"},[e._v("*")])]),e._v(" "),r("app-textarea",{attrs:{rows:"4",placeholder:"Пассивный доход"},model:{value:e.form.passiveIncome,callback:function(t){e.$set(e.form,"passiveIncome",t)},expression:"form.passiveIncome"}})],1),e._v(" "),r("el-form-item",{staticClass:"form-block",attrs:{prop:"portfolio"}},[r("p",{staticClass:"field-header"},[e._v("\n          Как сейчас выглядит портфель? Перечислите активы, какой % они занимают в портфеле и\n          какая цель владения по каждому активу. "),r("span",{staticClass:"require-field-star"},[e._v("*")])]),e._v(" "),r("app-textarea",{attrs:{rows:"4",placeholder:"Описание портфеля"},model:{value:e.form.portfolio,callback:function(t){e.$set(e.form,"portfolio",t)},expression:"form.portfolio"}})],1),e._v(" "),r("el-form-item",{staticClass:"form-block",attrs:{prop:"goals"}},[r("p",{staticClass:"field-header"},[e._v("\n          Какие у вас долгосрочные финансовые цели (на 3-5-10-20 лет)? Если всё удалось, какой это\n          уровень капитала/дохода? "),r("span",{staticClass:"require-field-star"},[e._v("*")])]),e._v(" "),r("app-textarea",{attrs:{rows:"4",placeholder:"Долгосрочные цели"},model:{value:e.form.goals,callback:function(t){e.$set(e.form,"goals",t)},expression:"form.goals"}})],1),e._v(" "),r("el-form-item",{staticClass:"form-block",attrs:{prop:"profitability"}},[r("p",{staticClass:"field-header"},[e._v("\n          Как относитесь к риску и какую доходность в год (в $ или руб) считаете целевой?\n          "),r("span",{staticClass:"require-field-star"},[e._v("*")])]),e._v(" "),r("app-textarea",{attrs:{rows:"4",placeholder:"Предполагаемая доходность"},model:{value:e.form.profitability,callback:function(t){e.$set(e.form,"profitability",t)},expression:"form.profitability"}})],1)],1),e._v(" "),r("project-form-button",{ref:"button",on:{"handle-submit":function(t){return e.handleSubmit()}}})]},proxy:!0},{key:"asside",fn:function(){},proxy:!0}])})}),[],!1,null,"56919ab8",null);t.default=component.exports;installComponents(component,{ProjectFormButton:r(616).default})},578:function(e,t,r){var content=r(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("5cf04a7a",content,!0,{sourceMap:!1})},579:function(e,t,r){var content=r(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("a6634c7e",content,!0,{sourceMap:!1})},603:function(e,t,r){"use strict";r(578)},604:function(e,t,r){var o=r(10)(!1);o.push([e.i,".header[data-v-11d42329]{background-color:#f4f6fa}.header .header-inner[data-v-11d42329]{padding:30px 0;width:calc(100% - 500px);display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}@media (max-width:575px){.header .header-inner[data-v-11d42329]{padding:20px 0;width:100%}}.header .header-inner h1[data-v-11d42329]{width:100%;font-size:30px;line-height:140%;margin-bottom:20px}.container[data-v-11d42329]{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.container>div[data-v-11d42329]{padding-top:56px}@media (max-width:575px){.container>div[data-v-11d42329]{padding-top:30px}}.container .container__left[data-v-11d42329]{width:calc(100% - 500px);margin-right:100px}@media (max-width:1200px){.container .container__left[data-v-11d42329]{width:100%;margin-right:0}}.container .container__right[data-v-11d42329]{width:400px;top:0;position:sticky}@media (max-width:1200px){.container .container__right[data-v-11d42329]{display:none}}",""]),e.exports=o},605:function(e,t,r){"use strict";r(579)},606:function(e,t,r){var o=r(10)(!1);o.push([e.i,".component__form-button{border-radius:10px;position:relative;background-color:#f4f6fa;padding:44px;margin-bottom:40px;display:flex;flex-direction:column;justify-content:center;align-items:center}@media (max-width:575px){.component__form-button{padding:20px}}.component__form-button .el-form-item__error{text-align:center;left:0}.component__form-button .el-button{margin-top:32px}@media (max-width:575px){.component__form-button .el-button{margin-top:20px}}@media (max-width:575px){.component__form-button .el-button.desktop{display:none}}.component__form-button .el-button.mobile{display:none;width:100%}@media (max-width:575px){.component__form-button .el-button.mobile{display:block}}",""]),e.exports=o},615:function(e,t,r){"use strict";r.r(t);var o={props:{videoId:{type:String,default:""},header:{type:String,default:""},subTitle:{type:String,default:""}}},n=(r(603),r(4)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page__project-index"},[r("div",{staticClass:"header"},[r("div",{staticClass:"container"},[r("div",{staticClass:"header-inner"},[e.header?r("h1",[e._v("\n          "+e._s(e.header)+"\n        ")]):e._e(),e._v(" "),e.subTitle?r("p",[e._v("\n          "+e._s(e.subTitle)+"\n        ")]):e._e(),e._v(" "),e.videoId?r("client-only",[r("video-player",{attrs:{options:{videoId:e.videoId},"hide-button":!0,ressd:!0}})],1):e._e()],1)])]),e._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"container__left"},[e._t("main")],2),e._v(" "),r("div",{staticClass:"container__right"},[e._t("asside")],2)])])}),[],!1,null,"11d42329",null);t.default=component.exports;installComponents(component,{VideoPlayer:r(168).default})},616:function(e,t,r){"use strict";r.r(t);r(20);var o=r(9),n={components:{ElForm:o.Form,ElFormItem:o.FormItem,ElCheckbox:o.Checkbox,ElButton:o.Button},data:function(){var e=this;return{rules:{agree:[{required:!0,validator:function(t,r,o){r?o():o(new Error(e.__locale("accept-your-agreement")))}}]}}},methods:{handleSubmit:function(){this.$emit("handle-submit")},validate:function(){var e=this;return new Promise((function(t){e.$refs.form.validate((function(e){t(e)}))}))}}},l=(r(605),r(4)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"component__form-button"},[r("el-form",{ref:"form",attrs:{model:e.gProjectForm,rules:e.rules}},[r("el-form-item",{attrs:{prop:"agree"}},[r("el-checkbox",{ref:"agree",model:{value:e.gProjectForm.agree,callback:function(t){e.$set(e.gProjectForm,"agree",t)},expression:"gProjectForm.agree"}},[e._v("\n        "+e._s(e.__locale("project-form-user-agreement"))+"\n      ")])],1)],1),e._v(" "),r("el-button",{staticClass:"desktop",attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("\n    "+e._s(e.__locale("project-form-send-application-get-calculation"))+"\n  ")]),e._v(" "),r("el-button",{staticClass:"mobile",attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("\n    "+e._s(e.__locale("project-form-send-application"))+"\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports},834:function(e,t,r){var content=r(1007);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("4307dd0e",content,!0,{sourceMap:!1})}}]);