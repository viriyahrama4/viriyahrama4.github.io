"use strict";(self.webpackChunkviriyah_static_web=self.webpackChunkviriyah_static_web||[]).push([[136],{136:(y,g,a)=>{a.r(g),a.d(g,{PartsModule:()=>x});var c=a(895),s=a(322),t=a(256);let u=(()=>{class e{constructor(){this.isit=!0,this.id="personal",this.isOpened=!1,this.isHidden=!0,this.isArranged=!1,this.isRotated=!1}openNav(){this.isOpened?this.closeNav():(this.isHidden=!1,console.log((window.innerWidth-900)/2),(window.innerWidth-900)/2<=350&&(this.isArranged=!0),this.isOpened=!this.isOpened),console.log(this.isOpened)}closeNav(){this.isHidden=!0,this.isArranged=!1,this.isOpened=!this.isOpened}rotateArrow(){this.isRotated=!this.isRotated}addClass(n){this.id=n}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const m=function(e){return{hidden:e}},d=function(e){return{selectedSidebarItem:e}},f=function(e){return{arrange:e}},h=["*"];let p=(()=>{class e{constructor(n,i){this.route=n,this.sidebarService=i,this.isExpanded=!1,this.route.url.subscribe(r=>{var l=r[0].path;"v-warranty"==l?i.addClass("v-warranty"):"v-complete"==l?i.addClass("v-complete"):"contact"==l&&i.addClass("contact")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.gz),t.Y36(u))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sidebar-parts"]],ngContentSelectors:h,decls:22,vars:15,consts:[["id","mySidebar",1,"sidebar",3,"ngClass"],["href","javascript:void(0)",1,"closebtn",3,"click"],["routerLink","/parts/v-warranty","routerLinkActive","active"],["id","v-warranty",1,"sidebarItems","selectedSidebarItem",3,"ngClass","click"],["routerLink","/parts/v-complete","routerLinkActive","active"],["id","v-complete",1,"sidebarItems",3,"ngClass","click"],["routerLink","/parts/contact","routerLinkActive","active"],["id","contact",1,"sidebarItems",3,"ngClass","click"],["id","main",1,"container",3,"ngClass"],["width","100%","height","100%","src","../assets/images/head.jpg",2,"position","relative","border-radius","10px 10px 0px 0px"],[1,"row",2,"width","100%","margin-left","auto","margin-right","auto","margin-top","0.5%"],["id","menuButton",1,"openbtn","col-2",2,"width","12vh",3,"click"],[1,"col",2,"background-color","#011F5B"],[1,"page"],[2,"padding","3vh"]],template:function(n,i){1&n&&(t.F$t(),t.TgZ(0,"div")(1,"div",0)(2,"a",1),t.NdJ("click",function(){return i.sidebarService.closeNav()}),t._uU(3,"\xd7"),t.qZA(),t.TgZ(4,"a",2)(5,"div",3),t.NdJ("click",function(){return i.sidebarService.addClass("v-warranty"),i.sidebarService.closeNav()}),t._uU(6,"V-Warranty "),t.qZA()(),t.TgZ(7,"a",4)(8,"div",5),t.NdJ("click",function(){return i.sidebarService.addClass("v-complete"),i.sidebarService.closeNav()}),t._uU(9,"V-Complete"),t.qZA()(),t.TgZ(10,"a",6)(11,"div",7),t.NdJ("click",function(){return i.sidebarService.addClass("contact"),i.sidebarService.closeNav()}),t._uU(12,"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e40\u0e23\u0e32"),t.qZA()()(),t.TgZ(13,"div",8),t._UZ(14,"img",9),t.TgZ(15,"div",10)(16,"button",11),t.NdJ("click",function(){return i.sidebarService.openNav()}),t._uU(17,"\u2630 \u0e40\u0e21\u0e19\u0e39"),t.qZA(),t._UZ(18,"div",12),t.qZA(),t.TgZ(19,"div",13)(20,"div",14),t.Hsn(21),t.qZA()()()()),2&n&&(t.xp6(1),t.Q6J("ngClass",t.VKq(5,m,i.sidebarService.isHidden)),t.xp6(4),t.Q6J("ngClass",t.VKq(7,d,"v-warranty"===i.sidebarService.id)),t.xp6(3),t.Q6J("ngClass",t.VKq(9,d,"v-complete"===i.sidebarService.id)),t.xp6(3),t.Q6J("ngClass",t.VKq(11,d,"contact"===i.sidebarService.id)),t.xp6(2),t.Q6J("ngClass",t.VKq(13,f,i.sidebarService.isArranged)))},dependencies:[c.mk,s.rH,s.Od],styles:["body[_ngcontent-%COMP%]{height:100%;width:100%}.openbtn[_ngcontent-%COMP%]{font-size:2.4vh;cursor:pointer;background-color:#011f5b;color:#fff;border:none;height:6vh;vertical-align:middle;text-align:left;padding-left:20px}.openbtn[_ngcontent-%COMP%]:hover{background-color:#0e245f}.page[_ngcontent-%COMP%]{background-color:#f0f2f5;border-radius:0 0 10px 10px;margin-bottom:1vh}#main[_ngcontent-%COMP%]{border-radius:5px;transition:margin-left .3s;padding:10px 5px 0;width:100%;height:100%;margin-left:auto;margin-right:auto;max-width:900px;background-color:#fff}.arrange[_ngcontent-%COMP%]{margin-left:350px!important}.sidebar[_ngcontent-%COMP%]{height:100%;width:340px;position:fixed;z-index:1;top:0;left:0;background-color:#011f5b;box-shadow:0 0 10px #777;overflow-x:hidden;padding-top:60px;transition:.3s}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-size:18px;color:#818181}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f1f1f1}.sidebar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%]{position:absolute;top:0;right:25px;font-size:36px;margin-left:50px}@media screen and (max-height: 450px){.sidebar[_ngcontent-%COMP%]{padding-top:15px}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:18px}}.hidden[_ngcontent-%COMP%]{width:0px}.sidebarItems[_ngcontent-%COMP%]{width:100%;padding:8px 8px 8px 15px;display:block;transition:.3s;color:#fff;cursor:pointer}.collapesItems[_ngcontent-%COMP%]{width:100%;padding:8px 8px 8px 60px;display:block;transition:.3s;color:#fff}.angleArrow[_ngcontent-%COMP%]{display:inline-block;rotate:0deg;transition:.3s}.rotateArrow[_ngcontent-%COMP%]{rotate:180deg}.selectedSidebarItem[_ngcontent-%COMP%]{background-color:#fff;border-top-left-radius:8px;border-bottom-left-radius:8px;color:#000;font-weight:600}"]}),e})();function v(e,o){if(1&e&&(t.TgZ(0,"div",2),t._UZ(1,"img",3),t.qZA()),2&e){const n=o.$implicit,i=t.oxw();t.xp6(1),t.hYB("src","../../assets/doc/",i.folder,"/",n,".png",t.LSH)}}function b(e,o){if(1&e&&(t.TgZ(0,"div",2),t._UZ(1,"img",3),t.qZA()),2&e){const n=o.$implicit,i=t.oxw();t.xp6(1),t.hYB("src","../../assets/doc/",i.folder,"/",n,".png",t.LSH)}}const _=[{path:"",redirectTo:"v-warranty",pathMatch:"full"},{path:"v-complete",component:(()=>{class e{constructor(){this.fileNames=[1,2,3,4,5],this.folder="v-complete"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-v-complete"]],decls:4,vars:1,consts:[[1,"title"],["style","padding-left: 5%; padding-right: 5%;",4,"ngFor","ngForOf"],[2,"padding-left","5%","padding-right","5%"],["width","100%","height","100%",2,"margin-bottom","2%",3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"app-sidebar-parts")(1,"h1",0),t._uU(2,"V-Complete"),t.qZA(),t.YNc(3,v,2,2,"div",1),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngForOf",i.fileNames))},dependencies:[c.sg,p],styles:[".title[_ngcontent-%COMP%]{color:#000;padding:1% 5%;text-decoration:underline}"]}),e})()},{path:"v-warranty",component:(()=>{class e{constructor(){this.fileNames=[1,2,3,4,5,6],this.folder="v-warranty"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-v-warranty"]],decls:4,vars:1,consts:[[1,"title"],["style","padding-left: 5%; padding-right: 5%;",4,"ngFor","ngForOf"],[2,"padding-left","5%","padding-right","5%"],["width","100%","height","100%",2,"margin-bottom","2%",3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"app-sidebar-parts")(1,"h1",0),t._uU(2,"V-Warranty"),t.qZA(),t.YNc(3,b,2,2,"div",1),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngForOf",i.fileNames))},dependencies:[c.sg,p],styles:[".title[_ngcontent-%COMP%]{color:#000;padding:1% 5%;text-decoration:underline}"]}),e})()},{path:"contact",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-contact-parts"]],decls:2,vars:0,consts:[["src","../../assets/doc/contact/1.jpg"]],template:function(n,i){1&n&&(t.TgZ(0,"app-sidebar-parts"),t._UZ(1,"img",0),t.qZA())},dependencies:[p],styles:["h1[_ngcontent-%COMP%]{text-decoration:underline}img[_ngcontent-%COMP%]{margin:3vh 0vh;height:100%;width:100%}p[_ngcontent-%COMP%]{font-size:20px;padding-left:1vh}.bold[_ngcontent-%COMP%]{font-weight:700}.tab1[_ngcontent-%COMP%]{padding-left:1vh}.tab2[_ngcontent-%COMP%]{padding-left:2vh}.tab3[_ngcontent-%COMP%]{padding-left:3vh}.imgExample[_ngcontent-%COMP%]{height:auto;margin-bottom:1vh}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(_),s.Bz]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[P,c.ez]}),e})()}}]);