(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{iydT:function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",(function(){return Q}));var i=n("ofXK"),c=n("tyNb"),o=n("AytR"),s=n("fXoL"),r=n("KMGt");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["app-news"]],decls:5,vars:3,consts:[[1,"News"],[1,"News__Container"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"h1"),s.yc(3),s.ec(4,"uppercase"),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Cb(3),s.zc(s.fc(4,1,"coming soon")))},pipes:[i.r],styles:[".News[_ngcontent-%COMP%]{height:100%}.News__Container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:20rem}"]}),t})(),l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["app-general-questions"]],decls:5,vars:3,consts:[[1,"QA"],[1,"QA__Container"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"h1"),s.yc(3),s.ec(4,"uppercase"),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Cb(3),s.zc(s.fc(4,1,"coming soon")))},pipes:[i.r],styles:[".QA[_ngcontent-%COMP%]{height:100%}.QA__Container[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center}"]}),t})();var g=n("CN1+"),u=n("1G5W"),b=n("vsUh"),d=n("b86L"),p=n("sYmb");let m=(()=>{class t extends g.a{constructor(t){super(),this.$window=t,this.isVertical=!1,this.images=["assets/images/about_us_train.png","assets/images/about_us_case.png","assets/images/about_us_cooperation.png"]}ngOnInit(){this.$window.device$.pipe(Object(u.a)(this.onDestroy$)).subscribe(t=>{this.isVertical=this.$window.isMobile(t)})}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(b.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-about-us"]],features:[s.zb],decls:7,vars:7,consts:[[1,"AboutUs"],[1,"AboutUs__Container"],[3,"hideBackground","hideControler","isVertical","images"],[1,"AboutUs__Introduction"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Pb(2,"app-carousel",2),s.Sb(),s.Tb(3,"div",3),s.Tb(4,"p"),s.yc(5),s.ec(6,"translate"),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Cb(2),s.jc("hideBackground",!0)("hideControler",!0)("isVertical",e.isVertical)("images",e.images),s.Cb(3),s.zc(s.fc(6,5,"Pages.Guideline.Introduction")))},directives:[d.a],pipes:[p.c],styles:[".AboutUs[_ngcontent-%COMP%]{padding:0 1.5rem;height:100%;display:flex;justify-content:center;align-items:center}.AboutUs__Container[_ngcontent-%COMP%]{border:1px solid #fff;border-radius:3px;box-shadow:0 0 3px 1px #fff}.AboutUs__Introduction[_ngcontent-%COMP%]{display:none}@media screen and (min-width:1200px){.AboutUs__Container[_ngcontent-%COMP%]{width:25rem}}@media screen and (min-width:1920px){.AboutUs__Introduction[_ngcontent-%COMP%]{flex:1;display:flex;padding-left:3.5rem}}"]}),t})();var f=n("lJxs"),_=n("a/YC");let C=(()=>{class t{constructor(t){this.$fb=t,this.collection="training-center"}getTrainingPortfolio$(){return this.$fb.document(this.collection,"portfolio").get().pipe(Object(f.a)(t=>t.data()))}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(_.a))},t.\u0275prov=s.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=n("qe6W");function O(t,e){if(1&t){const t=s.Ub();s.Tb(0,"div",1),s.bc("mouseenter",(function(){s.sc(t);const e=s.dc();return e.path=e.gif}))("mouseleave",(function(){s.sc(t);const e=s.dc();return e.path=e.static})),s.Tb(1,"div",2),s.Tb(2,"a",3),s.Pb(3,"img",4),s.Sb(),s.Sb(),s.Tb(4,"div",5),s.Tb(5,"h1"),s.yc(6),s.ec(7,"translate"),s.Sb(),s.Tb(8,"p"),s.hc(9),s.Sb(),s.Sb(),s.Sb()}if(2&t){const t=e.ngIf,n=s.dc();s.Gb("reverse",n.reverse),s.Cb(2),s.jc("href",n.link,s.tc),s.Cb(1),s.jc("src",t<=n.deviceType.Pad?n.gif:n.path,s.tc),s.Cb(3),s.zc(s.fc(7,5,"Pages.Home.Outcome.Outcome"))}}const y=["*"];let P=(()=>{class t{constructor(t){this.$window=t,this.reverse=!1,this.path=this.static}get deviceType(){return h.a}ngOnInit(){}ngOnChanges(t){t.name.isFirstChange()&&(this.path=this.static)}get gif(){return`assets/images/portfolio/${this.name}.gif`}get static(){return`assets/images/portfolio/${this.name}_static.png`}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(b.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-outcome-card"]],inputs:{name:"name",link:"link",reverse:"reverse"},features:[s.Ab],ngContentSelectors:y,decls:2,vars:3,consts:[["class","OutcomeCard",3,"reverse","mouseenter","mouseleave",4,"ngIf"],[1,"OutcomeCard",3,"mouseenter","mouseleave"],[1,"OutcomeCard__Preview"],["target","blank",3,"href"],["alt","",3,"src"],[1,"OutcomeCard__Introduction"]],template:function(t,e){1&t&&(s.ic(),s.wc(0,O,10,7,"div",0),s.ec(1,"async")),2&t&&s.jc("ngIf",s.fc(1,1,e.$window.device$))},directives:[i.k],pipes:[i.b,p.c],styles:[".OutcomeCard[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;box-shadow:0 0 3px 1px #fff;opacity:.5}.OutcomeCard[_ngcontent-%COMP%]:hover{opacity:1;transition:.5s}.OutcomeCard[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{display:flex;transition:.5s}.OutcomeCard[_ngcontent-%COMP%]:hover   h1[_ngcontent-%COMP%]{display:none;transition:.5s}.OutcomeCard__Preview[_ngcontent-%COMP%]{flex:2}.OutcomeCard__Preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:3px;width:100%;cursor:pointer}.OutcomeCard__Introduction[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:flex-end;padding:0 1rem;background-color:#000}.OutcomeCard__Introduction[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none;word-break:break-all}.OutcomeCard__Introduction[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:flex}.reverse[_ngcontent-%COMP%]{flex-direction:row-reverse}.reverse[_ngcontent-%COMP%]   .OutcomeCard__Introduction[_ngcontent-%COMP%]{justify-content:flex-start}@media screen and (max-width:1200px){.OutcomeCard[_ngcontent-%COMP%]{opacity:1;flex-direction:column}.OutcomeCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex}.OutcomeCard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:none}.OutcomeCard__Preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:1}.OutcomeCard__Introduction[_ngcontent-%COMP%]{justify-content:center;padding:1rem}.reverse[_ngcontent-%COMP%]{flex-direction:column}}"]}),t})();function v(t,e){if(1&t&&(s.Tb(0,"li"),s.Tb(1,"app-outcome-card",3),s.yc(2),s.ec(3,"translate"),s.Sb(),s.Sb()),2&t){const t=e.$implicit,n=e.index;s.Cb(1),s.jc("reverse",n%2!=0)("name",t.name)("link",t.link),s.Cb(1),s.Ac(" ",s.fc(3,4,"Pages.Home.Outcome."+t.introduction)," ")}}function M(t,e){if(1&t&&(s.Tb(0,"ul"),s.wc(1,v,4,6,"li",2),s.Sb()),2&t){const t=s.dc();s.Cb(1),s.jc("ngForOf",t.outcomes)}}let w=(()=>{class t{constructor(t){this.$training=t}ngOnInit(){this.$training.getTrainingPortfolio$().subscribe(t=>{this.outcomes=t.demo})}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(C))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-outcome"]],decls:2,vars:1,consts:[[1,"Outcome"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"reverse","name","link"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.wc(1,M,2,1,"ul",1),s.Sb()),2&t&&(s.Cb(1),s.jc("ngIf",e.outcomes))},directives:[i.k,i.j,P],pipes:[p.c],styles:[".Outcome[_ngcontent-%COMP%]{width:100%;padding:1rem}.Outcome[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1.5rem}@media screen and (max-width:1200px){.Outcome[_ngcontent-%COMP%]{padding:0}}"]}),t})();var x=n("ozpC"),T=n("QVQ7");const S=["*"];let k=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["app-image-water-marker"]],inputs:{url:"url"},ngContentSelectors:S,decls:5,vars:1,consts:[[1,"ImageWaterMarker"],["alt","image not found",3,"src"],[1,"ImageWaterMarker__Notes"],["src","assets/images/logo.png","alt",""]],template:function(t,e){1&t&&(s.ic(),s.Tb(0,"div",0),s.Pb(1,"img",1),s.Tb(2,"div",2),s.Pb(3,"img",3),s.hc(4),s.Sb(),s.Sb()),2&t&&(s.Cb(1),s.jc("src",e.url,s.tc))},styles:[".ImageWaterMarker[_ngcontent-%COMP%]{height:15rem;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative}.ImageWaterMarker[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;border-radius:3px}.ImageWaterMarker__Notes[_ngcontent-%COMP%]{display:flex;position:absolute;align-items:center;left:0;bottom:0;height:3rem;width:100%;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;background-color:rgba(0,0,0,.8);padding:.5rem .25rem}.ImageWaterMarker__Notes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:.5rem}"]}),t})();const I=function(){return{location:"\u53f0\u4e2d\u9ad8\u5de5"}},A=function(){return{location:"NTUT",type:"Unity"}};let j=(()=>{class t{constructor(t){this.$overlay=t,this.speechs=["assets/images/group/2019-speech/2019-speech-1.png","assets/images/group/2019-speech/2019-speech-2.png"],this.unity=["assets/images/group/2019-s4/2019-s4-ntut-unity-1.png","assets/images/group/2019-s4/2019-s4-ntut-unity-2.png","assets/images/group/2019-s4/2019-s4-ntut-unity-3.png"],this.configs={speechs:{index:"assets/images/group/2019-speech/2019-speech-1.png",images:this.speechs},unity:{index:"assets/images/group/2019-s4/2019-s4-ntut-unity-1.png",images:this.unity}}}ngOnInit(){}toggleAlbumModal(t){this.$overlay.toggleModal(new x.b(h.d.Album,{size:h.e.Large,hideBackground:!0,hideClose:!0,config:{images:t}}))}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(T.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-activity"]],decls:11,vars:12,consts:[[1,"Activity"],[1,"Activity__Container"],[3,"click"],[3,"url"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"ul"),s.Tb(3,"li",2),s.bc("click",(function(){return e.toggleAlbumModal(e.configs.speechs.images)})),s.Tb(4,"app-image-water-marker",3),s.yc(5),s.ec(6,"translate"),s.Sb(),s.Sb(),s.Tb(7,"li",2),s.bc("click",(function(){return e.toggleAlbumModal(e.configs.unity.images)})),s.Tb(8,"app-image-water-marker",3),s.yc(9),s.ec(10,"translate"),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Cb(4),s.jc("url",e.configs.speechs.index),s.Cb(1),s.Ac(" ",s.gc(6,4,"Images.Speech.2019",s.mc(10,I))," "),s.Cb(3),s.jc("url",e.configs.unity.index),s.Cb(1),s.Ac(" ",s.gc(10,7,"Images.Group.2019",s.mc(11,A))," "))},directives:[k],pipes:[p.c],styles:[".Activity[_ngcontent-%COMP%]{overflow:auto;overflow-x:auto;display:flex;flex-direction:row;padding:1rem}.Activity[_ngcontent-%COMP%]::-webkit-scrollbar{width:.375rem;height:.375rem}.Activity[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#dfe3e8;border-radius:10px}.Activity__Container[_ngcontent-%COMP%]{width:100%}.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:row}.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;cursor:pointer;opacity:.5}.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-right:2rem}.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{opacity:1;transition:.5s}@media screen and (max-width:767px){.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{flex-direction:column}.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:center;opacity:.5}.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-right:0;margin-bottom:2rem}.Activity__Container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{opacity:.5}}"]}),t})();const $=[{path:"",component:(()=>{class t{constructor(){this.isDev=!o.a.production}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["app-home"]],decls:43,vars:19,consts:[[1,"Home"],[1,"col-12","mb-4"],["hideLink",""],[1,"icon-message"],["body",""],[1,"col-12","col-md-6","mb-4","mb-md-0"],[1,"row","h-100"],["fullHeight","",3,"maxHeight"],[1,"icon-guide"],[1,"col-12"],["fullHeight","",3,"maxHeight","linkPath"],[1,"col-12","col-md-6"],["fullHeight","","hideLink","",3,"linkPath"],[1,"icon-guidebook"],[1,"col-12","mt-4"],[1,"icon-file9"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"app-layout-card",2),s.Tb(3,"h1"),s.Pb(4,"em",3),s.yc(5),s.ec(6,"translate"),s.Sb(),s.Rb(7,4),s.Pb(8,"app-news"),s.Qb(),s.Sb(),s.Sb(),s.Tb(9,"div",5),s.Tb(10,"div",6),s.Tb(11,"div",1),s.Tb(12,"app-layout-card",7),s.Tb(13,"h1"),s.Pb(14,"em",8),s.yc(15),s.ec(16,"translate"),s.Sb(),s.Rb(17,4),s.Pb(18,"app-general-questions"),s.Qb(),s.Sb(),s.Sb(),s.Tb(19,"div",9),s.Tb(20,"app-layout-card",10),s.Tb(21,"h1"),s.Pb(22,"em",8),s.yc(23),s.ec(24,"translate"),s.Sb(),s.Rb(25,4),s.Pb(26,"app-about-us"),s.Qb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(27,"div",11),s.Tb(28,"app-layout-card",12),s.Tb(29,"h1"),s.Pb(30,"em",13),s.yc(31),s.ec(32,"translate"),s.Sb(),s.Rb(33,4),s.Pb(34,"app-outcome"),s.Qb(),s.Sb(),s.Sb(),s.Tb(35,"div",14),s.Tb(36,"app-layout-card",2),s.Tb(37,"h1"),s.Pb(38,"em",15),s.yc(39),s.ec(40,"translate"),s.Sb(),s.Rb(41,4),s.Pb(42,"app-activity"),s.Qb(),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Cb(5),s.zc(s.fc(6,9,"Pages.Home.News")),s.Cb(7),s.jc("maxHeight",15),s.Cb(3),s.zc(s.fc(16,11,"Pages.Home.Q&A.Title")),s.Cb(5),s.jc("maxHeight",15)("linkPath",e.isDev?"/guideline":e.isDev),s.Cb(3),s.zc(s.fc(24,13,"Pages.Home.Aboutus")),s.Cb(5),s.jc("linkPath",e.isDev?"/training/dashboard":e.isDev),s.Cb(3),s.zc(s.fc(32,15,"Pages.Home.Training")),s.Cb(8),s.zc(s.fc(40,17,"Pages.Home.Activity")))},directives:[r.a,a,l,m,w,j],pipes:[p.c],styles:[".Home[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;height:100%}"]}),t})()}];let H=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[c.c.forChild($)],c.c]}),t})();var z=n("FpXt");let Q=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[i.c,z.a,H]]}),t})()}}]);