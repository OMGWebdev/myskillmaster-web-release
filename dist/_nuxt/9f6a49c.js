(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1167:function(t,e,r){"use strict";r(980)},1168:function(t,e,r){var o=r(19)(!1);o.push([t.i,".resend-forgot-password-code p[data-v-41e31499]{margin-bottom:0}",""]),t.exports=o},1169:function(t,e,r){"use strict";r(981)},1170:function(t,e,r){var o=r(19)(!1);o.push([t.i,".forgot-password-form[data-v-929c6ad8]{max-width:600px;margin-left:auto;margin-right:auto;border-radius:16px}.forgot-password-form__header[data-v-929c6ad8]{margin-bottom:25px}.forgot-password-form__fields[data-v-929c6ad8],.forgot-password-form__menu[data-v-929c6ad8]{margin-bottom:20px}.forgot-password-form__actions[data-v-929c6ad8]{text-align:center}.forgot-password-form__actions__submit[data-v-929c6ad8]{width:100%}",""]),t.exports=o},1171:function(t,e,r){"use strict";r(982)},1172:function(t,e,r){var o=r(19)(!1);o.push([t.i,"",""]),t.exports=o},1502:function(t,e,r){"use strict";r.r(e);var o=r(822),n=r(285),c=r(717),l=r(716),d=r(735),f=r(734),m=r(110),h=(r(12),r(10),r(7),r(3),r(15),r(11),r(16),r(4)),v=r(1),_=(r(46),r(37),r(57),r(41)),w=r(739),y=r(741),x={email:{email:y.email,required:y.required}},O={token:{required:y.required},password:{required:y.required},password_confirmation:{required:y.required}},C=r(275),$=r(67),k=r(900);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function P(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var E={components:{ErrorMessage:C.a},mixins:[k.a],props:{email:{type:String,required:!0},text:{type:String,default:"Haven't received the code?"}},computed:P(P({},Object(_.e)({form:function(t){return t.user.forgotPasswordCode},currentTimer:function(t){return t.user.forgotPasswordCodeTimer}})),{},{timerResetDispatch:function(){return"user/resetForgotPasswordCodeTimer"},timerCookieCode:function(){return $.a.cookie.forgotPasswordCode}}),watch:{currentTimer:function(t){t&&this.startTimer()}},methods:{submit:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.form.$clearErrors(),t.form.$busy){e.next=4;break}return e.next=4,t.$store.dispatch("user/forgotPasswordCode",{email:t.email});case 4:case"end":return e.stop()}}),e)})))()}}},M=(r(1167),r(14)),S=Object(M.a)(E,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"resend-forgot-password-code d-flex justify-center",class:{"resend-forgot-password-code--delay":t.delay}},[t.delay?[e("p",[t._v("\n      Resend code again in "),e("b",[t._v(t._s(t.delay)+" second"+t._s(t.delay>1?"s":""))])])]:[e("p",[t._v("\n      "+t._s(t.text)+"\n    ")]),t._v(" "),e("a",{staticClass:"ml-2",attrs:{disabled:t.form.$busy},on:{click:function(e){return t.submit()}}},[e("b",[t._v("Resend")])])],t._v(" "),e("ErrorMessage",{staticClass:"mt-2",attrs:{error:t.form.$getError("email")||t.form.$errorMessage}})],2)}),[],!1,null,"41e31499",null).exports,R=r(783),D=r(274);function F(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function T(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?F(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):F(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var L=[{header:"Reset Password",subheader:"Enter the email address associated with your account and we’ll send you a code to reset your password.",action:"Continue"},{header:"Reset Password",subheader:"Enter the code we have sent to your new email address and your new password",action:"Reset"}],V={components:{ErrorMessage:C.a,ResendForgotPasswordCode:S,PasswordField:R.a},mixins:[w.c,D.a],data:function(){return{currentStep:1}},computed:T(T({hasError:w.b},Object(_.e)({form:function(t){return t.user.forgotPassword}})),{},{content:function(){return L[this.currentStep-1]},next:function(){return this.onEmail?"user/forgotPasswordCode":this.onReset?"user/forgotPasswordChange":null},onEmail:function(){return 1===this.currentStep},onReset:function(){return 2===this.currentStep}}),mounted:function(){this.reset()},methods:{reset:function(){this.currentStep=1,this.form.$reset()},nextStep:function(){this.currentStep=Math.min(this.currentStep+1,2)},submit:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$v.$touch(),t.form.$clearErrors(),!t.next||t.form.$busy||t.$v.$invalid){e.next=5;break}return e.next=5,t.$store.dispatch(t.next,t.form.$data()).then((function(){t.form.$hasErrors()||(t.onReset?(t.$emit("success"),t.$router.replace({name:"login"}),t.showSnackbar("Password has been changed successfully!")):t.nextStep())}));case 5:case"end":return e.stop()}}),e)})))()}},validations:function(){var form=null;return this.onEmail?form=x:this.onReset&&(form=O),{form:form}}},A=(r(1169),Object(M.a)(V,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"forgot-password-form",attrs:{flat:""}},[e(l.b,[e("div",{staticClass:"forgot-password-form__form"},[e("div",{staticClass:"forgot-password-form__header"},[e("h2",{staticClass:"mb-3"},[t._v("\n          "+t._s(t.content.header)+"\n        ")]),t._v(" "),e("p",[t._v("\n          "+t._s(t.content.subheader)+"\n        ")])]),t._v(" "),e("div",{staticClass:"forgot-password-form__fields"},[e(f.a,[t.onEmail?[e(d.a,{attrs:{cols:"12"}},[e(m.a,{attrs:{type:"text",required:"",flat:"",filled:"","hide-details":"auto",label:"Email",disabled:t.form.$busy,"error-messages":t.form.$getError("email")||t.hasError("form.email","Email")},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.submit.apply(null,arguments))}},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)]:t._e(),t._v(" "),t.onReset?[e(d.a,{attrs:{cols:"12"}},[e(m.a,{attrs:{type:"text",required:"",flat:"",filled:"","hide-details":"auto",label:"Verification Code",disabled:t.form.$busy,"error-messages":t.form.$getError("token")||t.hasError("form.token","Verification Code")},model:{value:t.form.token,callback:function(e){t.$set(t.form,"token",e)},expression:"form.token"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e("PasswordField",{attrs:{required:"",flat:"",filled:"","hide-details":"auto",label:"Enter your new password",autocomplete:"off","on-enter":t.submit,disabled:t.form.$busy,"error-messages":t.form.$getError("password")||t.hasError("form.password","Password")},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e("PasswordField",{attrs:{required:"",flat:"",filled:"","hide-details":"auto",label:"Confirm your new password",autocomplete:"off","on-enter":t.submit,disabled:t.form.$busy,"error-messages":t.form.$getError("password_confirmation")||t.hasError("form.password_confirmation","Password")},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1)]:t._e(),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e("ErrorMessage",{staticClass:"mt-2",attrs:{error:t.form.$errorMessage}})],1)],2)],1),t._v(" "),t.onReset?e("div",{staticClass:"forgot-password-form__menu"},[e("ResendForgotPasswordCode",{attrs:{email:t.form.email}})],1):t._e(),t._v(" "),e("div",{staticClass:"forgot-password-form__actions"},[e(n.a,{staticClass:"forgot-password-form__actions__submit",attrs:{disabled:t.form.$busy,loading:t.form.$busy,color:"primary",depressed:"",rounded:""},on:{click:function(e){return t.submit()}}},[t._v("\n          "+t._s(t.content.action)+"\n        ")])],1)])])],1)}),[],!1,null,"929c6ad8",null)),J=A.exports,H=r(959),N={components:{AuthPage:o.a,ForgotPasswordForm:J,SigninFooter:H.a},layout:"guest",head:function(){return{title:"Forgot Password | "}}},Y=(r(1171),Object(M.a)(N,(function(){var t=this._self._c;return t("AuthPage",{staticClass:"forgot-password-page"},[t("ForgotPasswordForm",{attrs:{slot:"form"},slot:"form"}),this._v(" "),t("SigninFooter",{attrs:{slot:"footer"},slot:"footer"})],1)}),[],!1,null,"477adbc6",null));e.default=Y.exports},716:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return f}));var o=r(717),n=r(0),c=Object(n.i)("v-card__actions"),l=Object(n.i)("v-card__subtitle"),d=Object(n.i)("v-card__text"),f=Object(n.i)("v-card__title");o.a},739:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return o.validationMixin}));r(3);var o=r(740),n=(r(29),{required:function(t){var e=t.field,r=t.plural;return"".concat(e," ").concat(r?"are":"is"," required")},email:function(t){var e=t.field;t.plural;return"".concat(e," must be a valid email address")},integer:function(t){var e=t.field;t.plural;return"".concat(e," must be a whole number")},decimal:function(t){var e=t.field;t.plural;return"".concat(e," must be a number")},numeric:function(t){var e=t.field;t.plural;return"".concat(e," must be numeric")},minLength:function(t){var e=t.$v,r=t.key,o=l(e,r).$params.minLength.min;return"Must have ".concat(o," characters or more.")},maxLength:function(t){var e=t.$v,r=t.key,o=l(e,r).$params.maxLength.max;return"Must have ".concat(o," characters or less.")},minValue:function(t){var e=t.$v,r=t.key,o=l(e,r).$params.minValue.min;return"Must have ".concat(o," value or more.")},maxValue:function(t){var e=t.$v,r=t.key,o=l(e,r).$params.maxValue.max;return"Must have ".concat(o," value or less.")},phone:function(t){var e=t.field;return"".concat(e," must be a valid phone number")},mobile:function(t){var e=t.field;return"".concat(e," must be a valid mobile number")},e164:function(t){var e=t.field;return"".concat(e," must be on E164 format")},lessonScheduleConflict:function(t){t.field;return"You've already scheduled this slot"},lessonScheduleMaxFrequency:function(t){t.field;return"Should only repeat up to equal a year"}}),c=["email","required","integer","decimal","numeric","minLength","maxLength","maxValue","minValue","phone","mobile","e164","lessonScheduleConflict","lessonScheduleMaxFrequency"],l=function(t,e){return e.split(".").reduce((function(t,e){return t[e]}),t)},d=function(){return function(t,e){var r=this,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=l(this.$v,t);return d&&d.$dirty?c.reduce((function(c,l){return Object.prototype.hasOwnProperty.call(d,l)&&!d[l]&&c.push(n[l]({$v:r.$v,key:t,field:e,plural:o})),c}),[]):[]}}},753:function(t,e,r){var content=r(780);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("2feef2b6",content,!0,{sourceMap:!1})},772:function(t,e,r){var content=r(819);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("3ca1b0c6",content,!0,{sourceMap:!1})},779:function(t,e,r){"use strict";r(753)},780:function(t,e,r){var o=r(19)(!1);o.push([t.i,".password-field__toggle[data-v-1646b978]{cursor:pointer}",""]),t.exports=o},783:function(t,e,r){"use strict";var o=r(195),n=r(110),c={props:{value:{type:String,default:null},onEnter:{type:Function,default:function(){}}},data:function(){return{show:!1}},computed:{icon:function(){return this.show?"mdi-eye-outline":"mdi-eye-off-outline"},type:function(){return this.show?"text":"password"}},methods:{toggle:function(){this.show=!this.show},onChange:function(t){this.$emit("input",t)}}},l=(r(779),r(14)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(n.a,t._b({staticClass:"password-field",attrs:{type:t.type,value:t.value},on:{input:t.onChange,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.onEnter.apply(null,arguments))}}},"v-text-field",t.$attrs,!1),[e(o.a,{staticClass:"password-field__toggle icon",attrs:{slot:"append"},on:{click:t.toggle},slot:"append"},[t._v("\n    "+t._s(t.icon)+"\n  ")])],1)}),[],!1,null,"1646b978",null);e.a=component.exports},787:function(t,e,r){var content=r(840);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("074325c2",content,!0,{sourceMap:!1})},818:function(t,e,r){"use strict";r(772)},819:function(t,e,r){var o=r(19)(!1);o.push([t.i,".auth-page__border[data-v-34e147e6]{margin-top:100px;margin-bottom:100px}.auth-page__footer[data-v-34e147e6]{margin-top:75px}@media(max-width:540px){.auth-page__border[data-v-34e147e6]{margin-top:0;margin-bottom:0}.auth-page__form[data-v-34e147e6]{min-height:500px;padding-bottom:43px}.auth-page__footer[data-v-34e147e6]{position:absolute;left:0;bottom:0;width:100%}}",""]),t.exports=o},822:function(t,e,r){"use strict";var o={layout:"guest"},n=(r(818),r(14)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth-page"},[e("div",{staticClass:"auth-page__border"},[t._t("default"),t._v(" "),e("div",{staticClass:"auth-page__form"},[t._t("form")],2),t._v(" "),e("div",{staticClass:"auth-page__footer"},[t._t("footer")],2)],2)])}),[],!1,null,"34e147e6",null);e.a=component.exports},839:function(t,e,r){"use strict";r(787)},840:function(t,e,r){var o=r(19)(!1);o.push([t.i,"@media(max-width:540px){.auth-footer[data-v-24a41263]{padding:10px 0;border-top:1px solid #cfcfcf;background:#fbfbfb}.auth-footer>*[data-v-24a41263]{margin:0 auto}}",""]),t.exports=o},841:function(t,e,r){var content=r(902);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("c7ced770",content,!0,{sourceMap:!1})},867:function(t,e,r){"use strict";var o={props:{label:{type:String,required:!0},buttonLabel:{type:String,required:!0},to:{type:String,required:!0}}},n=(r(839),r(14)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth-footer"},[e("p",{staticClass:"text-center mx-auto"},[t._v("\n    "+t._s(t.label)+"\n    "),e("NuxtLink",{attrs:{to:{name:t.to}}},[e("b",{staticClass:"font-weight-bold"},[t._v(t._s(t.buttonLabel))])])],1)])}),[],!1,null,"24a41263",null);e.a=component.exports},900:function(t,e,r){"use strict";r(54);var o=r(67),n=r(154),c=r.n(n);e.a={data:function(){return{timer:null,delay:0}},computed:{timerResetDispatch:function(){return""},timerCookieCode:function(){return""}},created:function(){this.startTimer()},methods:{startTimer:function(){var t=this;if(!this.timerResetDispatch||!this.timerCookieCode)return console.warn("[Mixin] Rate Limit Timer: Missing `timerResetDispatch` and `timerCookieCode` values");this.checkTimer()?this.timer=setTimeout((function(){t.startTimer()}),1e3):(this.$store.commit(this.timerResetDispatch),this.timer=null,this.delay=0)},checkTimer:function(){return this.delay=this.getCurrentDelayTime(),!!this.delay},getCurrentDelayTime:function(){var t=c.a.get(this.timerCookieCode);return t?Math.max(o.a.notification.rateLimit-Math.round(((new Date).getTime()-new Date(t).getTime())/1e3),0):0}}}},901:function(t,e,r){"use strict";r(841)},902:function(t,e,r){var o=r(19)(!1);o.push([t.i,"",""]),t.exports=o},959:function(t,e,r){"use strict";var o={components:{AuthFooter:r(867).a},props:{label:{type:String,default:"Already a member?"},buttonLabel:{type:String,default:"Sign in"},to:{type:String,default:"login"}}},n=(r(901),r(14)),component=Object(n.a)(o,(function(){var t=this;return(0,t._self._c)("AuthFooter",{staticClass:"signin-footer",attrs:{label:t.label,"button-label":t.buttonLabel,to:t.to}})}),[],!1,null,"3ecb28ac",null);e.a=component.exports},980:function(t,e,r){var content=r(1168);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("1720c456",content,!0,{sourceMap:!1})},981:function(t,e,r){var content=r(1170);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("20b621ce",content,!0,{sourceMap:!1})},982:function(t,e,r){var content=r(1172);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("abac88a4",content,!0,{sourceMap:!1})}}]);