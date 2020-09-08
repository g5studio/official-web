function _inherits(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&_setPrototypeOf(n,e)}function _setPrototypeOf(n,e){return(_setPrototypeOf=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function _createSuper(n){var e=_isNativeReflectConstruct();return function(){var t,i=_getPrototypeOf(n);if(e){var o=_getPrototypeOf(this).constructor;t=Reflect.construct(i,arguments,o)}else t=i.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(n):e}function _assertThisInitialized(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function _getPrototypeOf(n){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9N29K":function(n,e,t){"use strict";t.r(e),t.d(e,"UserModule",(function(){return E}));var i,o=t("ofXK"),c=t("nF0/"),r=t("tyNb"),a=t("fXoL"),s=t("x4NB"),l=t("KMGt"),f=t("a/YC"),u=t("3Pt+"),d=((i=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"writeValue",value:function(n){this.model=n}},{key:"registerOnChange",value:function(n){this.onChange=n}},{key:"registerOnTouched",value:function(){}},{key:"setDisabledState",value:function(n){}},{key:"notifyValueChange",value:function(){this.onChange&&this.onChange(this.model)}}]),n}()).\u0275fac=function(n){return new(n||i)},i.\u0275prov=a.Kb({token:i,factory:i.\u0275fac}),i);function b(n,e){if(1&n&&(a.Rb(0),a.Tb(1,"p"),a.xc(2),a.Sb(),a.Qb()),2&n){var t=a.dc();a.Cb(2),a.yc(t.model)}}function g(n,e){if(1&n){var t=a.Ub();a.Tb(0,"input",2),a.bc("ngModelChange",(function(n){return a.sc(t),a.dc().validation(n)}))("ngModelChange",(function(n){return a.sc(t),a.dc().value=n})),a.Sb()}if(2&n){var i=a.dc();a.jc("ngModel",i.value)}}function p(n,e){1&n&&(a.Tb(0,"span"),a.Pb(1,"em",3),a.Tb(2,"p",4),a.xc(3,"\u6b64\u6b04\u4f4d\u4e0d\u5f97\u70ba\u7a7a"),a.Sb(),a.Sb())}var _,v,h=((v=function(n){_inherits(t,n);var e=_createSuper(t);function t(){var n;return _classCallCheck(this,t),(n=e.call(this)).isEdit=!1,n.valid=!0,n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"ngOnChanges",value:function(n){!1===n.isEdit.currentValue&&(this.valid=!0)}},{key:"validation",value:function(n){this.validator&&(this.valid=this.validator(n))}},{key:"value",get:function(){return this.model},set:function(n){this.valid&&(this.model=n,this.notifyValueChange())}}]),t}(d)).\u0275fac=function(n){return new(n||v)},v.\u0275cmp=a.Ib({type:v,selectors:[["app-profile-field"]],inputs:{isEdit:"isEdit",validator:"validator"},features:[a.Bb([(_=v,{provide:u.f,useExisting:Object(a.U)((function(){return _})),multi:!0})]),a.zb,a.Ab],decls:3,vars:3,consts:[[4,"ngIf"],["type","text",3,"ngModel","ngModelChange",4,"ngIf"],["type","text",3,"ngModel","ngModelChange"],[1,"g5-font-rose-xs","icon-alert_2","mr-1"],[1,"g5-font-rose-xs"]],template:function(n,e){1&n&&(a.vc(0,b,3,1,"ng-container",0),a.vc(1,g,1,1,"input",1),a.vc(2,p,4,0,"span",0)),2&n&&(a.jc("ngIf",!e.isEdit),a.Cb(1),a.jc("ngIf",e.isEdit),a.Cb(1),a.jc("ngIf",!e.valid&&e.isEdit))},directives:[o.k,u.a,u.g,u.i],styles:["input[_ngcontent-%COMP%]{width:80%;height:100%;padding:0 .5rem}p[_ngcontent-%COMP%]{word-break:break-all;max-width:100%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}span[_ngcontent-%COMP%]{padding:.5rem 0;display:flex;flex-direction:row;align-items:center}span[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{cursor:auto}"]}),v),C=t("sYmb");function P(n,e){1&n&&(a.Tb(0,"span"),a.Pb(1,"em",10),a.Sb())}function m(n,e){if(1&n){var t=a.Ub();a.Tb(0,"em",11),a.bc("click",(function(){return a.sc(t),a.dc(2).isEdit=!0})),a.Sb()}}function O(n,e){if(1&n){var t=a.Ub();a.Tb(0,"em",12),a.bc("click",(function(){return a.sc(t),a.dc(2).submit()})),a.Sb()}}function y(n,e){if(1&n){var t=a.Ub();a.Tb(0,"div",1),a.Tb(1,"ul"),a.Tb(2,"li",2),a.Tb(3,"span",3),a.Pb(4,"img",4),a.vc(5,P,2,0,"span",5),a.Sb(),a.Tb(6,"div"),a.Tb(7,"div",6),a.Tb(8,"p"),a.xc(9),a.ec(10,"translate"),a.Sb(),a.Tb(11,"span"),a.Tb(12,"app-profile-field",7),a.bc("ngModelChange",(function(n){return a.sc(t),a.dc().modifyField("nickName",n)}))("ngModelChange",(function(n){return a.sc(t),a.dc().fields.nickName=n})),a.Sb(),a.Sb(),a.Sb(),a.Tb(13,"div"),a.Tb(14,"p"),a.xc(15),a.ec(16,"translate"),a.Sb(),a.Tb(17,"span"),a.xc(18),a.ec(19,"translate"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Pb(20,"li"),a.Sb(),a.vc(21,m,1,0,"em",8),a.vc(22,O,1,0,"ng-template",null,9,a.wc),a.Sb()}if(2&n){var i=a.qc(23),o=a.dc();a.Cb(4),a.kc("alt",o.user.profile.photo),a.jc("src",o.user.profile.photo||"assets/images/logo.png",a.tc),a.Cb(1),a.jc("ngIf",o.isEdit),a.Cb(4),a.yc(a.fc(10,11,"Pages.Profile.NickName.Field")),a.Cb(3),a.jc("validator",o.validator)("isEdit",o.isEdit)("ngModel",o.fields.nickName),a.Cb(3),a.yc(a.fc(16,13,"Pages.Profile.Identity.Field")),a.Cb(3),a.yc(a.fc(19,15,"Pages.Profile.Identity."+o.user.profile.identity)),a.Cb(3),a.jc("ngIf",!o.isEdit)("ngIfElse",i)}}var M,I=((M=function(){function n(e){_classCallCheck(this,n),this.$fb=e,this.isEdit=!1}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"ngOnChanges",value:function(n){n.user.currentValue&&(this.fields=Object.assign({},n.user.currentValue.profile))}},{key:"validator",value:function(n){return n.length>0}},{key:"modifyField",value:function(n,e){this.fields[n]=e}},{key:"submit",value:function(){this.isEdit=!1,this.$fb.collection("users").update(this.user.profile.uid,this.fields)}}]),n}()).\u0275fac=function(n){return new(n||M)(a.Ob(f.a))},M.\u0275cmp=a.Ib({type:M,selectors:[["app-basic-info"]],inputs:{user:"user"},features:[a.Ab],decls:1,vars:1,consts:[["class","BasicInfo",4,"ngIf"],[1,"BasicInfo"],[1,"BasicInfo__Guide"],[1,"BasicInfo__Avatar"],[3,"src","alt"],[4,"ngIf"],[1,"mb-4"],[3,"validator","isEdit","ngModel","ngModelChange"],["class","icon-edit",3,"click",4,"ngIf","ngIfElse"],["tSave",""],[1,"icon-add-2"],[1,"icon-edit",3,"click"],[1,"icon-done",3,"click"]],template:function(n,e){1&n&&a.vc(0,y,24,17,"div",0),2&n&&a.jc("ngIf",e.user)},directives:[o.k,h,u.g,u.i],pipes:[C.c],styles:[".BasicInfo[_ngcontent-%COMP%]{height:100%;position:relative;font-size:1rem}.BasicInfo[_ngcontent-%COMP%] > em[_ngcontent-%COMP%]{font-size:1.125rem;border:1px solid #fff;border-radius:100%;padding:.5rem;position:absolute;z-index:2;bottom:0;right:.5rem}.BasicInfo[_ngcontent-%COMP%] > em[_ngcontent-%COMP%]:hover{color:#e79a1a;border-color:#e79a1a;transition:.1s}.BasicInfo__Guide[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.BasicInfo__Guide[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%}.BasicInfo__Guide[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:baseline}.BasicInfo__Guide[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{flex:3}.BasicInfo__Guide[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{flex:7}.BasicInfo__Avatar[_ngcontent-%COMP%]{position:relative;margin:0 3rem 0 1rem}.BasicInfo__Avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:8rem;height:8rem;border-radius:100%;padding:1.5px;border:3px solid #fff;box-shadow:0 0 3px 1px #fff;opacity:.9}.BasicInfo__Avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover + span[_ngcontent-%COMP%]{visibility:visible}.BasicInfo__Avatar[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{cursor:pointer;width:8rem;height:8rem;position:absolute;top:0;left:0;border:none;border-radius:100%;display:flex;justify-content:center;align-items:center;visibility:hidden;background-color:rgba(0,0,0,.6)}.BasicInfo__Avatar[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-size:1.875rem}.BasicInfo__Avatar[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:hover{visibility:visible}@media screen and (max-width:1200px){.BasicInfo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 1rem}.BasicInfo__Avatar[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:0 0 2rem}.BasicInfo__Avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;height:50%;border-width:1px}.BasicInfo__Avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;height:100%;left:50%;visibility:visible;transform:translate(-50%)}.BasicInfo__Guide[_ngcontent-%COMP%]{flex-direction:column;font-size:.875rem}.BasicInfo__Guide[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{flex:1}.BasicInfo__Guide[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{flex:1;text-align:right}}"]}),M);function k(n,e){if(1&n&&(a.Tb(0,"div",1),a.Tb(1,"div",2),a.Tb(2,"app-layout-card",3),a.Rb(3,4),a.Tb(4,"div",5),a.Pb(5,"app-basic-info",6),a.Sb(),a.Qb(),a.Sb(),a.Sb(),a.Tb(6,"div",7),a.Tb(7,"app-layout-card"),a.Rb(8,4),a.xc(9," 2 "),a.Qb(),a.Sb(),a.Sb(),a.Sb()),2&n){var t=e.ngIf;a.Cb(5),a.jc("user",t)}}var x,w,B,S=[{path:"profile",component:(x=function(){function n(e){_classCallCheck(this,n),this.$user=e}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),x.\u0275fac=function(n){return new(n||x)(a.Ob(s.a))},x.\u0275cmp=a.Ib({type:x,selectors:[["app-profile"]],decls:2,vars:3,consts:[["class","Profile",4,"ngIf"],[1,"Profile"],[1,"col-12","col-md-6","mb-4","mb-md-0"],["hideHead",""],["body",""],[1,"Profile__Basic"],[3,"user"],[1,"col-12","col-md-6"]],template:function(n,e){1&n&&(a.vc(0,k,10,1,"div",0),a.ec(1,"async")),2&n&&a.jc("ngIf",a.fc(1,1,e.$user.user$))},directives:[o.k,l.a,I],pipes:[o.b],styles:[".Profile[_ngcontent-%COMP%]{display:flex;flex-direction:row}.Profile__Basic[_ngcontent-%COMP%]{height:calc(100vh - 10rem);overflow:auto}.Profile__Basic[_ngcontent-%COMP%]::-webkit-scrollbar{width:.375rem;height:.375rem}.Profile__Basic[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#dfe3e8;border-radius:10px}@media screen and (max-width:767px){.Profile[_ngcontent-%COMP%]{flex-direction:column}}"]}),x)},{path:"**",component:c.a}],T=((w=function n(){_classCallCheck(this,n)}).\u0275mod=a.Mb({type:w}),w.\u0275inj=a.Lb({factory:function(n){return new(n||w)},imports:[[r.c.forChild(S)],r.c]}),w),j=t("FpXt"),E=((B=function n(){_classCallCheck(this,n)}).\u0275mod=a.Mb({type:B}),B.\u0275inj=a.Lb({factory:function(n){return new(n||B)},imports:[[o.c,T,j.a]]}),B)}}]);