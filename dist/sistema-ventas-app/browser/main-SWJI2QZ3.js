import{a as y}from"./chunk-SQY7YWST.js";import"./chunk-BTDO2VXZ.js";import{C as Je,D as Ke,E as et,Z as tt,b as Be,c as Ue,d as $e,f as z,g as V,h as Ze,i as Xe,j as Ye,t as Qe,u as We}from"./chunk-JJW7TMR6.js";import{b as Re,c as Pe,d as Te,e as Ae,f as je,g as Le,h as ze,i as Ve,j as He,k as j,l as $}from"./chunk-UDCYXUZB.js";import{c as Ge,d as G,f as L,g as qe,h as q}from"./chunk-IX6G3U3V.js";import{$a as me,$b as Oe,Ba as se,C as te,Cb as a,Cc as De,Da as le,Db as s,Eb as v,Fb as be,Gb as ye,I as F,Ib as O,Ja as ce,Kc as T,Lb as k,Lc as A,M as ie,Nb as b,Nc as Fe,Ob as Ce,Pb as Se,Rb as xe,Sb as _e,Tb as we,Ub as E,Vb as m,W as w,Wa as pe,Wb as U,Xb as Ie,Z as ne,Za as c,Zb as Me,_a as g,a as J,aa as R,ac as ke,b as K,ba as S,bb as de,bc as Ee,da as oe,db as ue,fb as fe,ga as d,gb as he,j as N,k as ee,ka as h,la as x,na as re,oa as B,oc as Ne,rb as u,sa as ae,t as D,ta as I,tb as p,ua as M,ub as P,vb as ge,wb as ve}from"./chunk-WSLSRKTI.js";var it=(i,e)=>d(y).token$.pipe(F(1),D(t=>!t));var nt=(i,e)=>d(y).token$.pipe(F(1),D(t=>t?!0:(d(He).createUrlTree(["/login"]),!1)));var gt=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:()=>import("./chunk-ZFAQTB55.js").then(i=>i.HomeModule)},{path:"notFound",loadChildren:()=>import("./chunk-QLNDDATQ.js").then(i=>i.NotFoundModule)},{path:"admin",loadChildren:()=>import("./chunk-FPVRL434.js").then(i=>i.AdminModule),canActivate:[nt]},{path:"login",loadChildren:()=>import("./chunk-3V2DVIYL.js").then(i=>i.LoginModule),canActivate:[it]}],ot=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=x({type:e}),e.\u0275inj=S({imports:[$.forRoot(gt),$]});let i=e;return i})();var bt=["overlay"],yt=["*"];function Ct(i,e){i&1&&v(0,"div")}function St(i,e){if(i&1&&(a(0,"div"),u(1,Ct,1,0,"div",6),s()),i&2){let o=b(2);ve(o.spinner.class),P("color",o.spinner.color),c(),p("ngForOf",o.spinner.divArray)}}function xt(i,e){if(i&1&&(v(0,"div",7),Oe(1,"safeHtml")),i&2){let o=b(2);p("innerHTML",ke(1,1,o.template),pe)}}function _t(i,e){if(i&1&&(a(0,"div",2,0),u(2,St,2,5,"div",3)(3,xt,2,3,"div",4),a(4,"div",5),Se(5),s()()),i&2){let o=b();P("background-color",o.spinner.bdColor)("z-index",o.spinner.zIndex)("position",o.spinner.fullScreen?"fixed":"absolute"),p("@.disabled",o.disableAnimation)("@fadeIn","in"),c(2),p("ngIf",!o.template),c(),p("ngIf",o.template),c(),P("z-index",o.spinner.zIndex)}}var wt={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},Z={BD_COLOR:"rgba(51,51,51,0.8)",SPINNER_COLOR:"#fff",Z_INDEX:99999},X="primary",C=class i{constructor(e){Object.assign(this,e)}static create(e){return!e?.template&&!e?.type&&console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),new i(e)}},Y=(()=>{let e=class e{constructor(){this.spinnerObservable=new ee(null)}getSpinner(t){return this.spinnerObservable.asObservable().pipe(te(n=>n&&n.name===t))}show(t=X,n){return new Promise((r,l)=>{setTimeout(()=>{n&&Object.keys(n).length?(n.name=t,this.spinnerObservable.next(new C(K(J({},n),{show:!0}))),r(!0)):(this.spinnerObservable.next(new C({name:t,show:!0})),r(!0))},10)})}hide(t=X,n=10){return new Promise((r,l)=>{setTimeout(()=>{this.spinnerObservable.next(new C({name:t,show:!1})),r(!0)},n)})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),rt=new oe("NGX_SPINNER_CONFIG"),It=(()=>{let e=class e{constructor(t){this._sanitizer=t}transform(t){if(t)return this._sanitizer.bypassSecurityTrustHtml(t)}};e.\u0275fac=function(n){return new(n||e)(g(Le,16))},e.\u0275pipe=re({name:"safeHtml",type:e,pure:!0,standalone:!0});let i=e;return i})(),at=(()=>{let e=class e{constructor(t,n,r,l){this.spinnerService=t,this.changeDetector=n,this.elementRef=r,this.globalConfig=l,this.disableAnimation=!1,this.spinner=new C,this.ngUnsubscribe=new N,this.setDefaultOptions=()=>{let{type:f}=this.globalConfig??{};this.spinner=C.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??f,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor=Z.BD_COLOR,this.zIndex=Z.Z_INDEX,this.color=Z.SPINNER_COLOR,this.size="large",this.fullScreen=!0,this.name=X,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}initObservable(){this.spinnerService.getSpinner(this.name).pipe(w(this.ngUnsubscribe)).subscribe(t=>{this.setDefaultOptions(),Object.assign(this.spinner,t),t.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(t){return t===this.elementRef.nativeElement.parentElement?!0:t.parentNode&&this.isSpinnerZone(t.parentNode)}ngOnChanges(t){for(let n in t)if(n){let r=t[n];if(r.isFirstChange())return;typeof r.currentValue<"u"&&r.currentValue!==r.previousValue&&r.currentValue!==""&&(this.spinner[n]=r.currentValue,n==="showSpinner"&&(r.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),n==="name"&&this.initObservable())}}getClass(t,n){this.spinner.divCount=wt[t],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((l,f)=>f);let r="";switch(n.toLowerCase()){case"small":r="la-sm";break;case"medium":r="la-2x";break;case"large":r="la-3x";break;default:break}return"la-"+t+" "+r}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}};e.\u0275fac=function(n){return new(n||e)(g(Y),g(Ne),g(se),g(rt,8))},e.\u0275cmp=h({type:e,selectors:[["ngx-spinner"]],viewQuery:function(n,r){if(n&1&&xe(bt,5),n&2){let l;_e(l=we())&&(r.spinnerDOM=l.first)}},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},standalone:!0,features:[ae,Me],ngContentSelectors:yt,decls:1,vars:1,consts:[["overlay",""],["class","ngx-spinner-overlay",3,"background-color","z-index","position",4,"ngIf"],[1,"ngx-spinner-overlay"],[3,"class","color",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[1,"loading-text"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(n,r){n&1&&(Ce(),u(0,_t,6,12,"div",1)),n&2&&p("ngIf",r.spinner.show)},dependencies:[It,A,T],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],data:{animation:[Ge("fadeIn",[qe("in",L({opacity:1})),q(":enter",[L({opacity:0}),G(300)]),q(":leave",G(200,L({opacity:0})))])]},changeDetection:0});let i=e;return i})(),st=(()=>{let e=class e{static forRoot(t){return{ngModule:e,providers:[{provide:rt,useValue:t}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=x({type:e}),e.\u0275inj=S({imports:[Fe]});let i=e;return i})();function Nt(i,e){if(i&1){let o=O();be(0),a(1,"button",6),k("click",function(){I(o);let n=b();return M(n.onToggleSidenav())}),a(2,"mat-icon"),m(3,"menu"),s()(),ye()}}function Dt(i,e){i&1&&(a(0,"a",7),m(1,"Iniciar Sesi\xF3n"),s())}function Ft(i,e){if(i&1){let o=O();a(0,"button",8),m(1),a(2,"mat-icon"),m(3,"expand_more"),s()(),a(4,"mat-menu",null,1)(6,"button",9),k("click",function(){I(o);let n=b();return M(n.onLogout())}),a(7,"mat-icon"),m(8,"logout"),s(),m(9," Cerrar Sesi\xF3n "),s()()}if(i&2){let o=E(5),t=b();p("matMenuTriggerFor",o),c(),Ie(" ",t.data.nombre+" "+t.data.apellidos," ")}}var ct=(()=>{let e=class e{constructor(t){this.authSvc=t,this.toggleSidenav=new le,this.isLogged=!1,this.data={},this.destroy$=new N}ngOnInit(){this.authSvc.isLogged$.pipe(w(this.destroy$)).subscribe(t=>{this.isLogged=t,console.log("isLogged",this.isLogged)}),this.authSvc.tokenData$.pipe(w(this.destroy$)).subscribe(t=>{this.data=t,console.log("data",this.data)})}onToggleSidenav(){this.toggleSidenav.emit()}onLogout(){this.authSvc.logout()}ngOnDestroy(){this.destroy$.next({}),this.destroy$.complete()}};e.\u0275fac=function(n){return new(n||e)(g(y))},e.\u0275cmp=h({type:e,selectors:[["app-header"]],outputs:{toggleSidenav:"toggleSidenav"},decls:9,vars:5,consts:[["viewLogOut",""],["lista","matMenu"],[4,"ngIf"],["routerLink","/home"],[1,"spacer"],["mat-button","","color","primary","routerLink","/login",4,"ngIf","ngIfElse"],["mat-icon-button","",3,"click"],["mat-button","","color","primary","routerLink","/login"],["mat-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"]],template:function(n,r){if(n&1&&(a(0,"mat-toolbar"),u(1,Nt,4,0,"ng-container",2),a(2,"span")(3,"a",3),m(4,"Sistema de Ventas"),s()(),v(5,"span",4),u(6,Dt,2,0,"a",5),s(),u(7,Ft,10,2,"ng-template",null,0,Ee)),n&2){let l=E(8);ge("mat-elevation-z1",!0),c(),p("ngIf",r.isLogged),c(5),p("ngIf",!r.isLogged)("ngIfElse",l)}},dependencies:[A,j,Ue,Be,$e,z,V,Ke,Je,et],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}a[_ngcontent-%COMP%]{text-decoration:none;color:#000}"]});let i=e;return i})();function Pt(i,e){if(i&1&&(a(0,"div")(1,"a",2)(2,"mat-icon",3),m(3),s(),a(4,"span"),m(5),s()()()),i&2){let o=e.$implicit;c(),p("routerLink",o.route),c(2),U(o.icon),c(2),U(o.name)}}var pt=(()=>{let e=class e{constructor(){this.menus=[]}ngOnInit(){this.generarMenu()}generarMenu(){this.menus.push({icon:"home",name:"Inicio",route:"/home"},{icon:"manage_accounts",name:"Usuarios",route:"admin/usuarios"},{icon:"category",name:"Categor\xEDas",route:"admin/categorias"},{icon:"inventory_2",name:"Productos",route:"admin/productos"},{icon:"shopping_cart",name:"Ventas",route:"ventas/ventas"},{icon:"content_paste",name:"Reportes",route:"ventas/reportes"})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-sidebar"]],decls:4,vars:1,consts:[["color","primary"],[4,"ngFor","ngForOf"],["mat-list-item","",3,"routerLink"],[1,"me-2"]],template:function(n,r){n&1&&(a(0,"mat-toolbar",0),m(1,"Menu"),s(),a(2,"mat-nav-list"),u(3,Pt,6,3,"div",1),s()),n&2&&(c(3),p("ngForOf",r.menus))},dependencies:[T,j,z,V,We,Qe]});let i=e;return i})();var mt=(()=>{let e=class e{constructor(){this.title="sistema-ventas-app"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-root"]],decls:10,vars:0,consts:[["sidenav",""],["mode","push"],[3,"toggleSidenav"],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-scale-multiple"],[2,"color","white"]],template:function(n,r){if(n&1){let l=O();a(0,"mat-sidenav-container")(1,"mat-sidenav",1,0),v(3,"app-sidebar"),s(),a(4,"mat-sidenav-content")(5,"app-header",2),k("toggleSidenav",function(){I(l);let H=E(2);return M(H.toggle())}),s(),v(6,"router-outlet"),s()(),a(7,"ngx-spinner",3)(8,"p",4),m(9," Cargando "),s()()}},dependencies:[Ve,Xe,Ye,Ze,at,ct,pt],styles:["mat-sidenav[_ngcontent-%COMP%]{width:25%}mat-sidenav-container[_ngcontent-%COMP%]{height:100%}"]});let i=e;return i})();var At="@",jt=(()=>{let e=class e{constructor(t,n,r,l,f){this.doc=t,this.delegate=n,this.zone=r,this.animationType=l,this.moduleImpl=f,this._rendererFactoryPromise=null,this.scheduler=d(de,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-MY2CGTTH.js").then(n=>n)).catch(n=>{throw new ne(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc);let l=new r(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(t,n){let r=this.delegate.createRenderer(t,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let l=new Q(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(f=>{let H=f.createRenderer(t,n);l.use(H),this.scheduler?.notify(9)}).catch(f=>{l.use(r)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){me()},e.\u0275prov=R({token:e,factory:e.\u0275fac});let i=e;return i})(),Q=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,t,n){this.delegate.insertBefore(e,o,t,n)}removeChild(e,o,t){this.delegate.removeChild(e,o,t)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,t,n){this.delegate.setAttribute(e,o,t,n)}removeAttribute(e,o,t){this.delegate.removeAttribute(e,o,t)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,t,n){this.delegate.setStyle(e,o,t,n)}removeStyle(e,o,t){this.delegate.removeStyle(e,o,t)}setProperty(e,o,t){this.shouldReplay(o)&&this.replay.push(n=>n.setProperty(e,o,t)),this.delegate.setProperty(e,o,t)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,t){return this.shouldReplay(o)&&this.replay.push(n=>n.listen(e,o,t)),this.delegate.listen(e,o,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(At)}};function dt(i="animations"){return fe("NgAsyncAnimations"),B([{provide:ue,useFactory:(e,o,t)=>new jt(e,o,t,i),deps:[De,Te,he]},{provide:ce,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var W=0;function ut(i,e){console.log("Loading::Interceptor"),W++;let o=d(Y);return o.show(),e(i).pipe(ie(()=>{W--,W||o.hide()}))}var ft=(i,e)=>{if(i.headers.get("requireToken")){let t=d(y).tokenValue;if(t){let n=i.clone({setHeaders:{auth:`${t}`}});return e(n)}}return e(i)};var ht=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=x({type:e,bootstrap:[mt]}),e.\u0275inj=S({providers:[ze(),dt(),Re(Pe([ut,ft]))],imports:[je,ot,tt,st]});let i=e;return i})();Ae().bootstrapModule(ht,{ngZoneEventCoalescing:!0}).catch(i=>console.error(i));
