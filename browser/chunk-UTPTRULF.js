import{a as U}from"./chunk-TA5CI7RB.js";import{a as J}from"./chunk-KACECMBE.js";import{a as z}from"./chunk-ZH3L7T54.js";import{i as V,l as $,o as p}from"./chunk-MLHW3EEE.js";import{$ as I,Ba as a,Ca as h,Oa as m,Ra as c,S as u,Ta as o,Ua as i,Ub as k,Va as b,Vb as A,Wa as N,Xa as R,Xb as P,Ya as d,Yb as B,Zb as v,aa as f,cb as C,db as r,e as H,eb as T,fb as F,ha as E,ia as w,lb as M,nb as j,ob as S,pb as O,rb as L,sb as y,ya as D}from"./chunk-5XN3BUNB.js";var g=H(J());var K=t=>["/ClientDetailsProduct",t];function Q(t,n){t&1&&(o(0,"div",8)(1,"div",9)(2,"span",10),r(3,"Loading..."),i()()())}function W(t,n){if(t&1&&b(0,"img",24),t&2){let e=d().$implicit;c("src",e.product.images[0],D)}}function X(t,n){t&1&&(o(0,"p",8),r(1,"No image provided"),i())}function Z(t,n){if(t&1){let e=N();o(0,"div",13)(1,"div",14)(2,"div",15)(3,"div"),m(4,W,1,1,"img",16)(5,X,2,0,"ng-template",null,1,y),i(),o(7,"div",17)(8,"h5",18),r(9),i(),o(10,"p",19)(11,"strong"),r(12,"Price:"),i(),r(13),S(14,"currency"),i(),o(15,"p",19)(16,"strong"),r(17,"Description:"),i(),r(18),S(19,"slice"),i()(),o(20,"div",20)(21,"button",21)(22,"span",22),r(23,"visibility"),i(),r(24," Details "),i(),o(25,"button",23),R("click",function(){let s=E(e).$implicit,G=d(3);return w(G.onDeleteFavorite(s==null||s.product==null?null:s.product._id))}),o(26,"span",22),r(27,"delete"),i(),r(28," Delete from Favorites "),i()()()()()}if(t&2){let e=n.$implicit,l=C(6);a(4),c("ngIf",(e==null||e.product==null||e.product.images==null?null:e.product.images.length)>0)("ngIfElse",l),a(5),T((e==null||e.product==null?null:e.product.name)||"No Name Available"),a(4),F(" ",O(14,6,e==null||e.product==null?null:e.product.price),""),a(5),F(" ",L(19,8,e==null||e.product==null?null:e.product.description,0,100),"..."),a(3),c("routerLink",j(12,K,e==null||e.product==null?null:e.product._id))}}function ee(t,n){if(t&1&&(o(0,"div",4),m(1,Z,29,14,"div",12),i()),t&2){let e=d(2);a(),c("ngForOf",e.favorites)}}function te(t,n){t&1&&(o(0,"div",25)(1,"div",26),r(2," No favorites found for this user. "),i()())}function ie(t,n){if(t&1&&(o(0,"div"),m(1,ee,2,1,"div",11)(2,te,3,0,"ng-template",null,0,y),i()),t&2){let e=C(3),l=d();a(),c("ngIf",l.favorites.length>0)("ngIfElse",e)}}var _=class t{constructor(n,e){this.activatedRoute=n;this.favoriteService=e}favorites=[];userId;isLoading=!0;favoriteSubscription;deleteSubscription;ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.userId=n.id,this.favoriteSubscription=this.favoriteService.getAllFavorites(this.userId).subscribe({next:e=>{console.log(e),this.favorites=e},error:e=>{console.error("Error fetching favorites:",e)},complete:()=>{console.log("Fetched favorites successfully"),this.isLoading=!1}})})}onDeleteFavorite(n){g.default.fire({title:"Are you sure?",text:"Do you want to remove this item from your favorites?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"}).then(e=>{e.isConfirmed&&(this.deleteSubscription=this.favoriteService.deleteFavorite(this.userId,n).subscribe({next:l=>{this.favorites=this.favorites.filter(s=>s.product._id!==n),g.default.fire("Deleted!","The item has been removed from your favorites.","success")},error:l=>{console.error("Error deleting favorite:",l),g.default.fire("Error!","There was an issue deleting the item.","error")},complete:()=>{console.log("Favorite deletion process completed")}}))})}ngOnDestroy(){this.favoriteSubscription&&this.favoriteSubscription.unsubscribe(),this.deleteSubscription&&this.deleteSubscription.unsubscribe()}static \u0275fac=function(e){return new(e||t)(h(V),h(U))};static \u0275cmp=I({type:t,selectors:[["app-client-favorite"]],standalone:!0,features:[M],decls:7,vars:2,consts:[["noFavorites",""],["noImage",""],[1,"container-fluid","p-0"],[1,"row","no-gutters"],[1,"col-12"],[2,"padding-top","80px"],["class","text-center",4,"ngIf"],[4,"ngIf"],[1,"text-center"],["role","status",1,"spinner-border","text-success",2,"width","3rem","height","3rem"],[1,"visually-hidden"],["class","col-12",4,"ngIf","ngIfElse"],["class","mb-4",4,"ngFor","ngForOf"],[1,"mb-4"],[1,"card"],[1,"d-flex","justify-content-around","align-items-start","p-3"],["class","img-fluid","alt","Favorite product image","style","width: 150px; height: 150px; object-fit: cover;",3,"src",4,"ngIf","ngIfElse"],[1,"flex-grow-1","mx-3"],[1,"card-title"],[1,"card-text"],[1,"d-flex","flex-column",2,"margin-top","10px"],[1,"btn","btn-success","d-flex","align-items-center",3,"routerLink"],[1,"material-icons",2,"margin-right","10px"],[1,"btn","btn-light","text-muted","mb-2","d-flex","align-items-center",3,"click"],["alt","Favorite product image",1,"img-fluid",2,"width","150px","height","150px","object-fit","cover",3,"src"],[1,"d-flex","justify-content-center","align-items-center",2,"height","300px"],["role","alert",1,"alert","alert-warning","text-center"]],template:function(e,l){e&1&&(o(0,"div",2)(1,"div",3)(2,"div",4),b(3,"app-navbar"),i()(),o(4,"div",5),m(5,Q,4,0,"div",6)(6,ie,4,2,"div",7),i()()),e&2&&(a(5),c("ngIf",l.isLoading),a(),c("ngIf",!l.isLoading))},dependencies:[z,v,k,A,B,P,p,$],styles:["[_ngcontent-%COMP%]::selection{background-color:#5c615c;color:#fff}"]})};var ne=[{path:"",component:_}],x=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=f({type:t});static \u0275inj=u({imports:[p.forChild(ne),p]})};var q=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=f({type:t});static \u0275inj=u({imports:[v,x]})};export{q as ClientFavoriteModule};
