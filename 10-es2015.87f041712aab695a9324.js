(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{eyox:function(n,t,e){"use strict";e.r(t),e.d(t,"LandingModule",(function(){return F}));var o=e("ofXK"),i=e("tyNb"),r=e("CN1+"),c=e("xci3"),a=e("fXoL"),s=e("qXBG"),l=e("iQ22"),g=e("NZd4");let d=(()=>{class n{constructor(){this.delay=1e3,this.duration=1e3,this.isPlaying=!1,this.current=0,this.gallery=[]}get next(){return this.current+1<this.gallery.length?this.current+1:0}get films(){return[this.gallery[this.current],this.gallery[this.next]]}initial(n){this.gallery=[...n],this.repeat()}stop(){this.interval&&(clearInterval(this.interval),this.interval=null)}repeat(){this.interval=setInterval(()=>this.start(),this.delay+this.duration)}start(){this.isPlaying=!0,this.timer=setTimeout(()=>this.end(),this.duration)}end(){this.current=this.current+1<this.gallery.length?this.current+1:0,clearTimeout(this.timer),this.isPlaying=!1}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=a.Kb({token:n,factory:n.\u0275fac}),n})();var b=e("sYmb");function u(n,t){if(1&n&&a.Pb(0,"img",5),2&n){const n=t.$implicit,e=a.dc();a.Gb("PeriodCarousel__Films--active",e.isPlaying),a.jc("src",n,a.tc)}}function m(n,t){if(1&n){const n=a.Ub();a.Tb(0,"li",6),a.bc("click",(function(){a.sc(n);const e=t.index;return a.dc().current=e})),a.Sb()}if(2&n){const n=t.index,e=a.dc();a.Gb("active",n===e.currentPeriod)}}let p=(()=>{class n extends d{constructor(){super(),this.delay=3e3,this.periods=["assets/images/introduction/period-1.svg","assets/images/introduction/period-2.svg","assets/images/introduction/period-3.svg"]}get currentPeriod(){return this.isPlaying?this.next:this.current}ngOnInit(){this.initial(this.periods)}onMouseover(){this.stop()}onMouseleave(){this.repeat()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.Ib({type:n,selectors:[["app-period-carousel"]],features:[a.zb],decls:12,vars:8,consts:[[1,"PeriodCarousel",3,"mouseover","mouseleave"],[1,"PeriodCarousel__Slider"],[1,"PeriodCarousel__Films"],["alt","",3,"PeriodCarousel__Films--active","src",4,"ngFor","ngForOf"],[3,"active","click",4,"ngFor","ngForOf"],["alt","",3,"src"],[3,"click"]],template:function(n,t){1&n&&(a.Tb(0,"div",0),a.bc("mouseover",(function(){return t.onMouseover()}))("mouseleave",(function(){return t.onMouseleave()})),a.Tb(1,"div",1),a.Tb(2,"div",2),a.wc(3,u,1,3,"img",3),a.Sb(),a.Tb(4,"h1"),a.yc(5),a.ec(6,"translate"),a.Sb(),a.Tb(7,"p"),a.yc(8),a.ec(9,"translate"),a.Sb(),a.Sb(),a.Tb(10,"ul"),a.wc(11,m,1,2,"li",4),a.Sb(),a.Sb()),2&n&&(a.Cb(3),a.jc("ngForOf",t.films),a.Cb(2),a.zc(a.fc(6,4,"Pages.Landing.Carousel.Period"+(t.currentPeriod+1)+".Title")),a.Cb(3),a.zc(a.fc(9,6,"Pages.Landing.Carousel.Period"+(t.currentPeriod+1)+".Content")),a.Cb(3),a.jc("ngForOf",t.periods))},directives:[o.j],pipes:[b.c],styles:[".PeriodCarousel[_ngcontent-%COMP%]{display:flex;flex-direction:column}.PeriodCarousel__Films[_ngcontent-%COMP%]{overflow:hidden;position:relative;display:flex;justify-content:center}.PeriodCarousel__Films[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:35rem}.PeriodCarousel__Films[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]:last-child{position:absolute;top:0;left:100%}.PeriodCarousel__Films--active[_ngcontent-%COMP%]{transform:translateX(-100%);transition:1s}.PeriodCarousel__Slider[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:35rem}.PeriodCarousel__Slider[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#f7992b;margin-top:3.75rem}.PeriodCarousel__Slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.25rem;color:#ad9abf;margin-top:1.75rem}.PeriodCarousel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:4.3rem;display:flex;flex-direction:row;align-items:center;justify-content:center}.PeriodCarousel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:.63rem;height:.63rem;border-radius:100%;background-color:#fff;opacity:.5;transition:1s;cursor:pointer}.PeriodCarousel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-right:.88rem}.PeriodCarousel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#f7992b;opacity:1;transform:scaleX(2);transition:1s}@media screen and (max-width:767px){.PeriodCarousel__Slider[_ngcontent-%COMP%], .PeriodCarousel__Slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.PeriodCarousel__Slider[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.875rem;margin-top:2rem}.PeriodCarousel__Slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.125rem;margin-top:2rem}.PeriodCarousel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:2rem}}"]}),n})();var _=e("A9XI"),P=e("3Pt+");class C{constructor(){}validatePassword(n){return/^(?=.*[^a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,20}$/.test(n)}getPasswordValidationError(n){const t=/^.{8,20}$/.test(n),e=/^(?=.*[^a-zA-Z0-9]).{1,}$/.test(n),o=/^(?=.*[A-Z])(?=.*[a-z]).{1,}$/.test(n),i=/^(?=.*\d).{1,}$/.test(n);return t?o?i?e?null:"PasswordNeedsSymbol":"PasswordNeedsNumber":"PasswordNeedsCharacter":"PasswordLengthNotEnough"}validateEmail(n){return/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(n)}}var f=e("XuUO");function M(n,t){if(1&n&&(a.Tb(0,"small",13),a.Pb(1,"em",14),a.Tb(2,"p"),a.yc(3),a.ec(4,"translate"),a.Sb(),a.Sb()),2&n){const n=a.dc();a.Cb(3),a.zc(a.fc(4,1,n.getErrorMessage("email")))}}function O(n,t){if(1&n&&(a.Tb(0,"small",13),a.Pb(1,"em",14),a.Tb(2,"p"),a.yc(3),a.ec(4,"translate"),a.Sb(),a.Sb()),2&n){const n=a.dc();a.Cb(3),a.zc(a.fc(4,1,n.getErrorMessage("password")))}}let h=(()=>{class n{constructor(n,t){this.fb=n,this.$auth=t,this.authentication=this.fb.group({email:["",[P.i.required,this.emailValidator]],password:["",[P.i.required,this.passwordValidator]]})}get rememberMe(){return JSON.parse(localStorage.getItem("rememberMe"))}set rememberMe(n){localStorage.setItem("rememberMe",JSON.stringify(n))}ngOnInit(){}getErrorMessage(n){const t=this.authentication.get(n);return t.hasError("required")?"Messages.Error.FieldRequired":t.getError("invalid").message}emailValidator(n){return(new C).validateEmail(n.value)?null:{invalid:{message:"Messages.Error.Email"}}}passwordValidator(n){const t=new C;return t.validatePassword(n.value)?null:{invalid:{message:"Messages.Error."+t.getPasswordValidationError(n.value)}}}}return n.\u0275fac=function(t){return new(t||n)(a.Ob(P.b),a.Ob(s.a))},n.\u0275cmp=a.Ib({type:n,selectors:[["app-login-form"]],decls:23,vars:17,consts:[[1,"Login",3,"formGroup"],["formControlName","email","id","email","type","text",3,"placeholder"],["for","email"],[1,"icon-mail"],["alert","","class","alert-message mt-3",4,"ngIf"],["formControlName","password","id","password","type","password",3,"placeholder"],["for","password"],[1,"icon-account"],[1,"d-flex","flex-row","justify-content-between","align-items-center","mb-5"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","customCheck1",1,"custom-control-input",3,"checked","change"],["for","customCheck1",1,"custom-control-label"],[3,"disabled","clickEvent"],["alert","",1,"alert-message","mt-3"],[1,"icon-alert_2"]],template:function(n,t){1&n&&(a.Tb(0,"div",0),a.Tb(1,"ul"),a.Tb(2,"li"),a.Pb(3,"input",1),a.ec(4,"translate"),a.Tb(5,"label",2),a.Pb(6,"em",3),a.Sb(),a.Sb(),a.wc(7,M,5,3,"small",4),a.Tb(8,"li"),a.Pb(9,"input",5),a.ec(10,"translate"),a.Tb(11,"label",6),a.Pb(12,"em",7),a.Sb(),a.Sb(),a.wc(13,O,5,3,"small",4),a.Sb(),a.Tb(14,"div",8),a.Tb(15,"div",9),a.Tb(16,"input",10),a.bc("change",(function(n){return t.rememberMe=n.target.checked})),a.Sb(),a.Tb(17,"label",11),a.yc(18),a.ec(19,"translate"),a.Sb(),a.Sb(),a.Sb(),a.Tb(20,"app-button",12),a.bc("clickEvent",(function(){return t.$auth.login(t.authentication.getRawValue())})),a.yc(21),a.ec(22,"translate"),a.Sb(),a.Sb()),2&n&&(a.jc("formGroup",t.authentication),a.Cb(3),a.jc("placeholder",a.fc(4,9,"Fields.Email")),a.Cb(4),a.jc("ngIf",t.authentication.get("email").invalid&&t.authentication.get("email").touched),a.Cb(2),a.jc("placeholder",a.fc(10,11,"Fields.Password")),a.Cb(4),a.jc("ngIf",t.authentication.get("password").invalid&&t.authentication.get("password").touched),a.Cb(3),a.jc("checked",t.rememberMe),a.Cb(2),a.Ac(" ",a.fc(19,13,"Pages.Landing.RememberMe")," "),a.Cb(2),a.jc("disabled",t.authentication.invalid),a.Cb(1),a.Ac(" ",a.fc(22,15,"Pages.Landing.Login")," "))},directives:[P.g,P.d,P.a,P.f,P.c,o.k,f.a],pipes:[b.c],styles:[".Login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:2rem}.Login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;padding-bottom:.5rem;border-bottom:1px solid #b2c1e3}.Login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:not(:first-child){margin-top:2rem}.Login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{border:0;width:100%;color:#5269a9;background-color:inherit;font-size:.875rem}.Login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]::-moz-placeholder{color:#b2c1e3;opacity:1}.Login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]::-ms-input-placeholder{opacity:1}.Login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]::placeholder{color:#b2c1e3;opacity:1}.Login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#b2c1e3}.Login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#b2c1e3}.Login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]{display:inline-flex;margin-bottom:0}.Login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%] > em[_ngcontent-%COMP%]{color:#b2c1e3;font-size:1.3rem;cursor:auto}.Login[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%] > .custom-control-input[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%], .Login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{letter-spacing:.88px;color:#5269a9}.Login[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%] > .custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#5269a9;border-color:#5269a9}.Login[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%] > .custom-control-input[_ngcontent-%COMP%]:indeterminate ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#5269a9;border-color:#5269a9}"]}),n})();function w(n,t){if(1&n&&(a.Tb(0,"small",15),a.Pb(1,"em",16),a.Tb(2,"p"),a.yc(3),a.ec(4,"translate"),a.Sb(),a.Sb()),2&n){const n=a.dc();a.Cb(3),a.zc(a.fc(4,1,n.getErrorMessage("name")))}}function v(n,t){if(1&n&&(a.Tb(0,"small",15),a.Pb(1,"em",16),a.Tb(2,"p"),a.yc(3),a.ec(4,"translate"),a.Sb(),a.Sb()),2&n){const n=a.dc();a.Cb(3),a.zc(a.fc(4,1,n.getErrorMessage("password")))}}function S(n,t){if(1&n&&(a.Tb(0,"small",15),a.Pb(1,"em",16),a.Tb(2,"p"),a.yc(3),a.ec(4,"translate"),a.Sb(),a.Sb()),2&n){const n=a.dc();a.Cb(3),a.zc(a.fc(4,1,n.getErrorMessage("confirmPassword")))}}function y(n,t){if(1&n&&(a.Tb(0,"small",15),a.Pb(1,"em",16),a.Tb(2,"p"),a.yc(3),a.ec(4,"translate"),a.Sb(),a.Sb()),2&n){const n=a.dc();a.Cb(3),a.zc(a.fc(4,1,n.getErrorMessage("email")))}}let T=(()=>{class n{constructor(n,t){this.fb=n,this.$auth=t,this.submit=new a.n,this.form=this.fb.group({name:["",P.i.required],email:["",[P.i.required,this.emailValidator]],password:["",[P.i.required,this.passwordValidator]],confirmPassword:["",[P.i.required,this.confirmPasswordValidator.bind(this)]]})}ngOnInit(){}signUpAndLogin(){const n=this.form.getRawValue();this.$auth.signUpWithEmailAndPassword({email:n.email,password:n.password,nickName:n.name}).then(n=>this.submit.emit())}getErrorMessage(n){const t=this.form.get(n);return t.hasError("required")?"Messages.Error.FieldRequired":t.getError("invalid").message}emailValidator(n){return(new C).validateEmail(n.value)?null:{invalid:{message:"Messages.Error.Email"}}}confirmPasswordValidator(n){return this.form?n.value===this.form.get("password").value?null:{invalid:{message:"Messages.Error.NotEqualNewPassword"}}:null}passwordValidator(n){const t=new C;return t.validatePassword(n.value)?null:{invalid:{message:"Messages.Error."+t.getPasswordValidationError(n.value)}}}}return n.\u0275fac=function(t){return new(t||n)(a.Ob(P.b),a.Ob(s.a))},n.\u0275cmp=a.Ib({type:n,selectors:[["app-sign-up-form"]],outputs:{submit:"submit"},decls:29,vars:21,consts:[[1,"SignUp"],[1,"mb-5",3,"formGroup"],["formControlName","name","id","name","type","text",3,"placeholder"],["for","name"],[1,"icon-man"],["alert","","class","alert-message mt-3",4,"ngIf"],["formControlName","password","id","password","type","password",3,"placeholder"],["for","password"],[1,"icon-unlock"],["formControlName","confirmPassword","id","confirmPassword","type","password",3,"placeholder"],["for","confirmPassword"],["formControlName","email","id","email","type","text",3,"placeholder"],["for","email"],[1,"icon-mail"],[3,"disabled","clickEvent"],["alert","",1,"alert-message","mt-3"],[1,"icon-alert_2"]],template:function(n,t){1&n&&(a.Tb(0,"div",0),a.Tb(1,"ul",1),a.Tb(2,"li"),a.Pb(3,"input",2),a.ec(4,"translate"),a.Tb(5,"label",3),a.Pb(6,"em",4),a.Sb(),a.Sb(),a.wc(7,w,5,3,"small",5),a.Tb(8,"li"),a.Pb(9,"input",6),a.ec(10,"translate"),a.Tb(11,"label",7),a.Pb(12,"em",8),a.Sb(),a.Sb(),a.wc(13,v,5,3,"small",5),a.Tb(14,"li"),a.Pb(15,"input",9),a.ec(16,"translate"),a.Tb(17,"label",10),a.Pb(18,"em",8),a.Sb(),a.Sb(),a.wc(19,S,5,3,"small",5),a.Tb(20,"li"),a.Pb(21,"input",11),a.ec(22,"translate"),a.Tb(23,"label",12),a.Pb(24,"em",13),a.Sb(),a.Sb(),a.wc(25,y,5,3,"small",5),a.Sb(),a.Tb(26,"app-button",14),a.bc("clickEvent",(function(){return t.signUpAndLogin()})),a.yc(27),a.ec(28,"translate"),a.Sb(),a.Sb()),2&n&&(a.Cb(1),a.jc("formGroup",t.form),a.Cb(2),a.jc("placeholder",a.fc(4,11,"Fields.NickName")),a.Cb(4),a.jc("ngIf",t.form.get("name").invalid&&t.form.get("name").touched),a.Cb(2),a.jc("placeholder",a.fc(10,13,"Fields.Password")),a.Cb(4),a.jc("ngIf",t.form.get("password").invalid&&t.form.get("password").touched),a.Cb(2),a.jc("placeholder",a.fc(16,15,"Fields.ConfirmPassword")),a.Cb(4),a.jc("ngIf",t.form.get("confirmPassword").invalid&&t.form.get("confirmPassword").touched),a.Cb(2),a.jc("placeholder",a.fc(22,17,"Fields.Email")),a.Cb(4),a.jc("ngIf",t.form.get("email").invalid&&t.form.get("email").touched),a.Cb(1),a.jc("disabled",t.form.invalid),a.Cb(1),a.Ac(" ",a.fc(28,19,"Pages.Landing.Signup")," "))},directives:[P.g,P.d,P.a,P.f,P.c,o.k,f.a],pipes:[b.c],styles:[".SignUp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:2rem}.SignUp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;padding-bottom:.5rem;border-bottom:1px solid #b2c1e3}.SignUp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:not(:first-child){margin-top:2rem}.SignUp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{border:0;width:100%;color:#5269a9;background-color:inherit;font-size:.875rem}.SignUp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]::-moz-placeholder{color:#b2c1e3;opacity:1}.SignUp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]::-ms-input-placeholder{opacity:1}.SignUp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]::placeholder{color:#b2c1e3;opacity:1}.SignUp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#b2c1e3}.SignUp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#b2c1e3}.SignUp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]{display:inline-flex;margin-bottom:0}.SignUp[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%] > em[_ngcontent-%COMP%]{color:#b2c1e3;font-size:1.3rem;cursor:auto}.SignUp[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%] > .custom-control-input[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%], .SignUp[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{letter-spacing:.88px;color:#5269a9}.SignUp[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%] > .custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#5269a9;border-color:#5269a9}.SignUp[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%] > .custom-control-input[_ngcontent-%COMP%]:indeterminate ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#5269a9;border-color:#5269a9}"]}),n})();var L=e("1Huf");function x(n,t){1&n&&a.Pb(0,"app-login-form")}function k(n,t){if(1&n){const n=a.Ub();a.Tb(0,"app-sign-up-form",19),a.bc("submit",(function(){return a.sc(n),a.dc(2).currentTab=0})),a.Sb()}}function j(n,t){if(1&n){const n=a.Ub();a.Tb(0,"div",2),a.Tb(1,"div",3),a.Pb(2,"app-period-carousel"),a.Tb(3,"span"),a.Pb(4,"img",4),a.Tb(5,"p"),a.yc(6,"G5 STUDIO"),a.Sb(),a.Sb(),a.Sb(),a.Tb(7,"div",5),a.Tb(8,"div",6),a.Tb(9,"ul",7),a.Tb(10,"li"),a.Tb(11,"button",8),a.bc("click",(function(){return a.sc(n),a.dc().currentTab=0})),a.yc(12),a.ec(13,"translate"),a.Sb(),a.Sb(),a.Tb(14,"li"),a.Tb(15,"button",8),a.bc("click",(function(){return a.sc(n),a.dc().currentTab=1})),a.yc(16),a.ec(17,"translate"),a.Sb(),a.Sb(),a.Sb(),a.Rb(18,9),a.wc(19,x,1,0,"app-login-form",10),a.wc(20,k,1,0,"app-sign-up-form",11),a.Qb(),a.Sb(),a.Tb(21,"div",12),a.Tb(22,"p"),a.yc(23,"or Sign up using"),a.Sb(),a.Tb(24,"ul"),a.Tb(25,"li"),a.Tb(26,"button",13),a.Pb(27,"img",14),a.Sb(),a.Sb(),a.Tb(28,"li"),a.Tb(29,"button",13),a.Pb(30,"img",15),a.Sb(),a.Sb(),a.Tb(31,"li"),a.Tb(32,"button",16),a.bc("click",(function(){a.sc(n);const t=a.dc();return t.$auth.loginWithProvider(t.loginProvider.Google)})),a.Pb(33,"img",17),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Pb(34,"app-language-menu",18),a.Sb()}if(2&n){const n=t.ngIf,e=a.dc();a.Cb(10),a.Gb("Landing__Tabs--active",0===e.currentTab),a.Cb(2),a.zc(a.fc(13,10,"Pages.Landing.Login")),a.Cb(2),a.Gb("Landing__Tabs--active",1===e.currentTab),a.Cb(2),a.zc(a.fc(17,12,"Pages.Landing.Signup")),a.Cb(2),a.jc("ngSwitch",e.currentTab),a.Cb(1),a.jc("ngSwitchCase",0),a.Cb(1),a.jc("ngSwitchCase",1),a.Cb(14),a.jc("white",!e.$window.isDesktop(n))}}function E(n,t){if(1&n){const n=a.Ub();a.Tb(0,"app-message-popup",20),a.bc("onclose",(function(){return a.sc(n),a.dc().$overlay.hidePopup()})),a.yc(1),a.ec(2,"translate"),a.Sb()}if(2&n){const n=t.ngIf;a.jc("alert",n.options.alert)("time",2),a.Cb(1),a.Ac(" ",a.fc(2,3,n.options.message),"\n")}}const I=[{path:"",component:(()=>{class n extends r.a{constructor(n,t,e){super(),this.$auth=n,this.$window=t,this.$overlay=e,this.currentTab=0}get loginProvider(){return c.d}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(a.Ob(s.a),a.Ob(l.a),a.Ob(g.a))},n.\u0275cmp=a.Ib({type:n,selectors:[["app-landing"]],features:[a.zb],decls:4,vars:6,consts:[["class","Landing",4,"ngIf"],[3,"alert","time","onclose",4,"ngIf"],[1,"Landing"],[1,"Landing__Introduction"],["src","assets/images/logo.png","alt",""],[1,"Landing__Login"],[1,"Landing__Forms"],[1,"Landing__Tabs"],[3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"submit",4,"ngSwitchCase"],[1,"Landing__Tools"],["disabled","",1,"p-0"],["src","assets/images/icons/facebook.svg","alt",""],["src","assets/images/icons/twitter.svg","alt",""],[1,"p-0",3,"click"],["src","assets/images/icons/google.svg","alt",""],[3,"white"],[3,"submit"],[3,"alert","time","onclose"]],template:function(n,t){1&n&&(a.wc(0,j,35,14,"div",0),a.ec(1,"async"),a.wc(2,E,3,5,"app-message-popup",1),a.ec(3,"async")),2&n&&(a.jc("ngIf",a.fc(1,2,t.$window.device$)),a.Cb(2),a.jc("ngIf",a.fc(3,4,t.$overlay.popup$)))},directives:[o.k,p,o.m,o.n,_.a,h,T,L.a],pipes:[o.b,b.c],styles:['.Landing[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;height:100vh;width:100vw;position:relative}.Landing[_ngcontent-%COMP%]   app-language-menu[_ngcontent-%COMP%]{position:absolute;top:2.5rem;right:4%}.Landing__Introduction[_ngcontent-%COMP%]{flex:3;height:100%;display:flex;align-items:center;justify-content:center;background-color:#2c315b;position:relative}.Landing__Introduction[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;position:absolute;bottom:9%;right:7.5%}.Landing__Introduction[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.88rem;margin-right:.63rem}.Landing__Introduction[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#f7992b;font-size:1.125rem}.Landing__Login[_ngcontent-%COMP%]{flex:2;height:100%;display:flex;flex-direction:column;align-items:center;padding-top:8.75rem;padding-bottom:2.5rem;justify-content:space-between;background-color:#ecf4ff}.Landing__Forms[_ngcontent-%COMP%]{width:17.5rem;display:flex;flex-direction:column}.Landing__Tools[_ngcontent-%COMP%]{color:#2c395c}.Landing__Tools[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{letter-spacing:.88px}.Landing__Tools[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-direction:row;align-items:center;justify-content:center}.Landing__Tools[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:not(:last-child){margin-right:1rem}.Landing__Tools[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{transform:scale(1.125);transition:.25s}.Landing__Tools[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.Landing__Tools[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:disabled   img[_ngcontent-%COMP%]{-webkit-filter:grayscale(100%);filter:grayscale(100%)}.Landing__Tabs[_ngcontent-%COMP%]{margin-bottom:2.35rem;display:flex;flex-direction:row;align-items:center}.Landing__Tabs[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{font-size:1.5rem;color:#b2c1e3;padding:0}.Landing__Tabs[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{color:#212b36!important;transition:1s}.Landing__Tabs[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:not(:last-child){margin-right:1.5rem}.Landing__Tabs--active[_ngcontent-%COMP%]{position:relative}.Landing__Tabs--active[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{color:#212b36!important}.Landing__Tabs--active[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;z-index:2;background-color:#5269a9;width:100%;height:.3rem;border-radius:2px;top:calc(100% + .5rem);left:0}@media screen and (max-width:1200px){.Landing[_ngcontent-%COMP%]{overflow-x:hidden;flex-direction:column}.Landing__Introduction[_ngcontent-%COMP%]{flex:none;width:100%;height:100%}.Landing__Introduction[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;bottom:1.5rem;right:1.5rem}.Landing__Login[_ngcontent-%COMP%]{flex:none;width:100%;padding-top:4.5rem;padding-bottom:3rem}.Landing__Tabs--active[_ngcontent-%COMP%]:before{-webkit-animation:progress .25s;animation:progress .25s}}@media screen and (max-width:767px){.Landing__Login[_ngcontent-%COMP%]{padding:4rem 3rem}.Landing__Forms[_ngcontent-%COMP%]{width:100%}.Landing__Introduction[_ngcontent-%COMP%]{padding:5rem 2rem 5.5rem}.Landing[_ngcontent-%COMP%]   app-language-menu[_ngcontent-%COMP%]{right:2rem}}@-webkit-keyframes progress{0%{width:0}to{width:100%}}@keyframes progress{0%{width:0}to{width:100%}}']}),n})()}];let z=(()=>{class n{}return n.\u0275mod=a.Mb({type:n}),n.\u0275inj=a.Lb({factory:function(t){return new(t||n)},imports:[[i.c.forChild(I)],i.c]}),n})();var U=e("PCNd");let F=(()=>{class n{}return n.\u0275mod=a.Mb({type:n}),n.\u0275inj=a.Lb({factory:function(t){return new(t||n)},imports:[[U.a,o.c,z]]}),n})()}}]);