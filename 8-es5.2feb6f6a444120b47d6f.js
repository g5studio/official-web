function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_setPrototypeOf(t,n)}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _createSuper(t){var n=_isNativeReflectConstruct();return function(){var e,o=_getPrototypeOf(t);if(n){var r=_getPrototypeOf(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(t):n}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{eyox:function(t,n,e){"use strict";e.r(n),e.d(n,"LandingModule",(function(){return N}));var o,r=e("ofXK"),a=e("tyNb"),i=e("qe6W"),s=e("vkgz"),c=e("eIep"),l=e("1G5W"),f=e("LRne"),d=e("PqYM"),g=e("CN1+"),p=e("ozpC"),u=e("fXoL"),b=e("qXBG"),m=e("vsUh"),_=e("QVQ7"),h=e("WsOu"),y=e("b86L"),C=["*"],w=((o=function(){function t(){_classCallCheck(this,t),this.time=0,this.alert=!1,this.onclose=new u.n}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.time&&Object(d.a)(1e3*this.time).subscribe((function(n){return t.onclose.emit("")}))}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=u.Ib({type:o,selectors:[["app-message-popup"]],inputs:{time:"time",alert:"alert",central:"central"},outputs:{onclose:"onclose"},ngContentSelectors:C,decls:4,vars:4,consts:[[1,"PopupMessage"],[1,"PopupMessage__Container"],[1,"icon-close",3,"click"]],template:function(t,n){1&t&&(u.ic(),u.Tb(0,"div",0),u.Tb(1,"div",1),u.hc(2),u.Tb(3,"em",2),u.bc("click",(function(){return n.onclose.emit("")})),u.Sb(),u.Sb(),u.Sb()),2&t&&u.Gb("alert",n.alert)("PopupMessage--central",n.central)},styles:[".PopupMessage[_ngcontent-%COMP%]{box-shadow:0 0 8px 1px #161833;z-index:10;position:fixed;top:3.5rem;left:50%;transform:translate(-25%);width:32.5rem;border:1px solid #3ea603;border-radius:3px;background-color:#edf7e4;color:#3ea603}.PopupMessage--central[_ngcontent-%COMP%]{transform:translate(-50%)}.PopupMessage__Container[_ngcontent-%COMP%]{font-weight:700;display:flex;position:relative;padding:1rem;flex-direction:row;justify-content:space-between;align-items:center}.PopupMessage__Container[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{line-height:1rem;color:#637381;font-weight:700}.alert[_ngcontent-%COMP%]{color:#852121;background-color:#ffd1d1;border-color:#852121}@media screen and (min-width:1920px){.PopupMessage__Container[_ngcontent-%COMP%] {font-size:1.125rem}}@media screen and (max-width:1200px){.PopupMessage[_ngcontent-%COMP%], .PopupMessage--central[_ngcontent-%COMP%]{transform:translate(-50%)}}@media screen and (max-width:767px){.PopupMessage[_ngcontent-%COMP%], .PopupMessage--central[_ngcontent-%COMP%]{left:0;transform:translate(0);width:100vw}}"]}),o),P=e("sYmb"),O=function(t){return{"landin-title-showup":t}};function M(t,n){if(1&t&&(u.Tb(0,"p",11),u.xc(1,"G5 STUDIO\u2122 OFFICAL"),u.Sb()),2&t){var e=u.dc();u.jc("ngClass",u.nc(1,O,e.rotationEnd))}}function k(t,n){if(1&t){var e=u.Ub();u.Tb(0,"app-message-popup",12),u.bc("onclose",(function(){return u.sc(e),u.dc().$overlay.hidePopup()})),u.xc(1),u.ec(2,"translate"),u.Sb()}if(2&t){var o=n.ngIf;u.jc("alert",o.options.alert)("time",3)("central",!0),u.Cb(1),u.zc(" ",u.fc(2,4,o.options.message),"\n")}}var v,L,x,S,j=function(t){return{"landing-logo-rotate":t}},z=function(t){return{border:t}},$=function(t){return{"landing-intro":t}},I=function(t){return{"landing-start":t}},T=((v=function(t){_inherits(e,t);var n=_createSuper(e);function e(t,o,r){var a;return _classCallCheck(this,e),(a=n.call(this)).$auth=t,a.$window=o,a.$overlay=r,a.animationStart$=Object(f.a)([]),a.rotationStart=!1,a.rotationEnd=!1,a.isVertical=!1,a.introductions=["assets/images/introduction/intro.png","assets/images/introduction/intro2.png","assets/images/introduction/intro3.png","assets/images/introduction/intro4.png"],a}return _createClass(e,[{key:"ngOnInit",value:function(){var t=this;this.animationStart$.pipe(Object(s.a)((function(n){return t.onAnimationLogoRotationStart()})),Object(c.a)((function(t){return Object(d.a)(2e3)})),Object(s.a)((function(n){return t.onAnimationLogoRotationEnd()}))).subscribe(),this.$window.device$.pipe(Object(l.a)(this.onDestroy$)).subscribe((function(n){t.isVertical=t.$window.isMobile(n)}))}},{key:"toggleLoginModal",value:function(){this.$overlay.toggleModal(new p.b(i.c.Login,{size:i.d.Large,hideClose:!0}))}},{key:"toggleSingupModal",value:function(){this.$overlay.toggleModal(new p.b(i.c.Singup,{size:i.d.Large,hideClose:!0}))}},{key:"onAnimationLogoRotationStart",value:function(){this.rotationStart=!0}},{key:"onAnimationLogoRotationEnd",value:function(){this.rotationEnd=!0}}]),e}(g.a)).\u0275fac=function(t){return new(t||v)(u.Ob(b.a),u.Ob(m.a),u.Ob(_.a))},v.\u0275cmp=u.Ib({type:v,selectors:[["app-landing"]],features:[u.zb],decls:17,vars:25,consts:[[1,"Landing"],[1,"Landing__Navbar"],[1,"mr-2",3,"click"],[1,"Landing__Logo",3,"ngClass"],["src","assets/images/logo.png","alt",""],[3,"ngClass",4,"ngIf"],[1,"Landing__Container",3,"ngStyle"],[1,"Landing__Introduction",3,"ngClass"],[3,"opacity","isVertical","images"],[1,"Landing__Login",3,"ngClass","click"],[3,"alert","time","central","onclose",4,"ngIf"],[3,"ngClass"],[3,"alert","time","central","onclose"]],template:function(t,n){1&t&&(u.Tb(0,"div",0),u.Tb(1,"div",1),u.Tb(2,"button",2),u.bc("click",(function(){return n.toggleLoginModal()})),u.xc(3),u.ec(4,"translate"),u.Sb(),u.Pb(5,"app-language-menu"),u.Sb(),u.Tb(6,"div",3),u.Pb(7,"img",4),u.vc(8,M,2,3,"p",5),u.Sb(),u.Tb(9,"div",6),u.Tb(10,"div",7),u.Pb(11,"app-carousel",8),u.Sb(),u.Tb(12,"button",9),u.bc("click",(function(){return n.toggleSingupModal()})),u.xc(13),u.ec(14,"translate"),u.Sb(),u.Sb(),u.Sb(),u.vc(15,k,3,6,"app-message-popup",10),u.ec(16,"async")),2&t&&(u.Cb(3),u.yc(u.fc(4,11,"Pages.Landing.Login")),u.Cb(3),u.jc("ngClass",u.nc(17,j,n.rotationStart)),u.Cb(2),u.jc("ngIf",n.rotationEnd),u.Cb(1),u.jc("ngStyle",u.nc(19,z,n.rotationEnd?"white 1px solid":"none")),u.Cb(1),u.jc("ngClass",u.nc(21,$,n.rotationEnd)),u.Cb(1),u.jc("opacity",.3)("isVertical",n.isVertical)("images",n.introductions),u.Cb(1),u.jc("ngClass",u.nc(23,I,n.rotationEnd)),u.Cb(1),u.yc(u.fc(14,13,"Pages.Landing.Start")),u.Cb(2),u.jc("ngIf",u.fc(16,15,n.$overlay.popup$)))},directives:[h.a,r.i,r.k,r.l,y.a,w],pipes:[P.c,r.b],styles:['@-webkit-keyframes text-slide{0%{top:50%;transform:translateY(-50%);left:50%;opacity:0}to{top:50%;transform:translateY(-50%);left:100%;opacity:1%}}@keyframes text-slide{0%{top:50%;transform:translateY(-50%);left:50%;opacity:0}to{top:50%;transform:translateY(-50%);left:100%;opacity:1%}}@-webkit-keyframes popup{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}@keyframes popup{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}@-webkit-keyframes landing-logo-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(1turn)}to{transform:translateX(-130%)}}@keyframes landing-logo-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(1turn)}to{transform:translateX(-130%)}}@-webkit-keyframes showup{0%{opacity:0}to{opacity:1}}@keyframes showup{0%{opacity:0}to{opacity:1}}@-webkit-keyframes border-cycle{0%{width:0;height:0}25%{width:100%;height:0}50%{width:100%;height:100%}to{width:100%;height:100%}}@keyframes border-cycle{0%{width:0;height:0}25%{width:100%;height:0}50%{width:100%;height:100%}to{width:100%;height:100%}}@-webkit-keyframes carousel-slide-left-out{0%{transform:translate(0)}to{opacity:0;transform:translate(-80%)}}@keyframes carousel-slide-left-out{0%{transform:translate(0)}to{opacity:0;transform:translate(-80%)}}@-webkit-keyframes carousel-slide-left-in{0%{opacity:0;transform:translate(80%)}to{opacity:1;transform:translate(0)}}@keyframes carousel-slide-left-in{0%{opacity:0;transform:translate(80%)}to{opacity:1;transform:translate(0)}}@-webkit-keyframes carousel-slide-down-out{0%{transform:translateY(0)}to{opacity:0;transform:translateY(4rem)}}@keyframes carousel-slide-down-out{0%{transform:translateY(0)}to{opacity:0;transform:translateY(4rem)}}@-webkit-keyframes carousel-slide-down-in{0%{opacity:0;transform:translateY(-4rem)}to{opacity:1;transform:translateY(0)}}@keyframes carousel-slide-down-in{0%{opacity:0;transform:translateY(-4rem)}to{opacity:1;transform:translateY(0)}}.Landing[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;justify-content:flex-start;align-items:center;padding-top:5rem;position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:2;background-image:linear-gradient(35deg,#e79a1a,#21244d 20%,#161833 80%,#bc3c76)}.Landing[_ngcontent-%COMP%], .Landing__Container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.Landing__Container[_ngcontent-%COMP%]{position:relative;justify-content:center;width:32rem;margin-top:3rem;background-color:inherit;box-shadow:0 0 3px 1px #21244d;border-radius:3px}.Landing__Container[_ngcontent-%COMP%]:after, .Landing__Container[_ngcontent-%COMP%]:before{content:"";box-sizing:border-box;position:absolute;border:1px solid transparent;width:0;height:0}.Landing__Container[_ngcontent-%COMP%]:before{top:0;left:0;border-top-color:#fff;border-right-color:#fff;-webkit-animation:border-cycle 2s;animation:border-cycle 2s}.Landing__Container[_ngcontent-%COMP%]:after{bottom:0;right:0;-webkit-animation:border-cycle 2s 1s,borderColor 2s 1s;animation:border-cycle 2s 1s,borderColor 2s 1s}.Landing__Logo[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;white-space:nowrap;font-size:1.875rem}.Landing__Logo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{border-radius:100%;padding:.1rem;border:3px solid #fff;opacity:.8;width:6rem;margin-right:1rem}.Landing__Logo[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{opacity:0}.Landing__Introduction[_ngcontent-%COMP%]{position:relative;padding:3px;opacity:0}.Landing__Login[_ngcontent-%COMP%]{font-size:1.5rem;letter-spacing:.2rem;width:16rem;position:absolute;bottom:50%;left:50%;transform:translateX(-50%) translateY(50%);border-radius:3px;border:2px solid #fff;opacity:0;padding:.75rem;color:#fff;z-index:3}.Landing__Login[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.5);border-color:#e79a1a;color:#e79a1a;opacity:.8;transition:.1s}.Landing__Navbar[_ngcontent-%COMP%]{padding:1.5rem;position:fixed;right:0;top:0;display:flex;flex-direction:row;align-items:center}.Landing__Navbar[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{letter-spacing:normal;padding:.25rem .625rem;border:1px solid #fff;border-radius:3px;background-color:inherit;color:#fff}.Landing__Navbar[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{border:1px solid #e79a1a;border-radius:3px;color:#e79a1a}.landing-start[_ngcontent-%COMP%]{opacity:1;transition:.5s}.landing-intro[_ngcontent-%COMP%]{opacity:.8;transition:.5s}.landin-title-showup[_ngcontent-%COMP%]{-webkit-animation-name:showup;animation-name:showup;-webkit-animation-duration:1s;animation-duration:1s;opacity:1!important}.landing-logo-rotate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-animation-name:landing-logo-rotate;animation-name:landing-logo-rotate;-webkit-animation-duration:2s;animation-duration:2s}@media screen and (min-width:1920px){.Landing__Container[_ngcontent-%COMP%]{margin-top:7.5rem;width:48rem}.Landing__Login[_ngcontent-%COMP%]{font-size:1.875rem;width:24rem}.Landing__Logo[_ngcontent-%COMP%]{font-size:2.75rem}.Landing__Logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:8rem;margin-right:2rem}}@media screen and (max-width:767px){.Landing__Container[_ngcontent-%COMP%]{width:80%;margin-top:2.5rem}.Landing__Logo[_ngcontent-%COMP%]{font-size:1.125rem}.Landing__Logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:4rem;margin-right:.5rem}.Landing__Login[_ngcontent-%COMP%]{bottom:-5rem}}@-webkit-keyframes borderColor{0%{border-bottom-color:#fff;border-left-color:#fff}50%{border-bottom-color:#fff;border-left-color:#fff}51%{border-bottom-color:transparent;border-left-color:transparent}to{border-bottom-color:transparent;border-left-color:transparent}}@keyframes borderColor{0%{border-bottom-color:#fff;border-left-color:#fff}50%{border-bottom-color:#fff;border-left-color:#fff}51%{border-bottom-color:transparent;border-left-color:transparent}to{border-bottom-color:transparent;border-left-color:transparent}}']}),v),R=e("plQs"),Y=[{path:"",canActivate:[(L=function(){function t(n,e){_classCallCheck(this,t),this.$auth=n,this.$navigation=e}return _createClass(t,[{key:"canActivate",value:function(t,n){return this.$auth.isLogin&&this.$navigation.navigate("home"),!0}}]),t}(),L.\u0275fac=function(t){return new(t||L)(u.Xb(b.a),u.Xb(R.a))},L.\u0275prov=u.Kb({token:L,factory:L.\u0275fac,providedIn:"root"}),L)],children:[{path:"",component:T}]}],E=((x=function t(){_classCallCheck(this,t)}).\u0275mod=u.Mb({type:x}),x.\u0275inj=u.Lb({factory:function(t){return new(t||x)},imports:[[a.c.forChild(Y)],a.c]}),x),X=e("FpXt"),N=((S=function t(){_classCallCheck(this,t)}).\u0275mod=u.Mb({type:S}),S.\u0275inj=u.Lb({factory:function(t){return new(t||S)},imports:[[X.a,P.b,r.c,E]]}),S)}}]);