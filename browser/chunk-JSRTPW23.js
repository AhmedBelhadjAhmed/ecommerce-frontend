import{a as A}from"./chunk-3E2XEZQ5.js";import{a as q}from"./chunk-KACECMBE.js";import{a as M,b as R,c as x,d as D,f as U,h as j,i as w,o as O,q as _}from"./chunk-WMSCIBPS.js";import{a as G}from"./chunk-VR3MZZWK.js";import{a as E}from"./chunk-ZH3L7T54.js";import{i as N,k as I,o as f}from"./chunk-MLHW3EEE.js";import{$ as C,Ba as p,Ca as n,Oa as b,Ra as d,S as c,Ta as r,Ua as i,Va as u,Vb as F,Xa as h,Zb as l,aa as s,db as m,e as k,lb as S}from"./chunk-5XN3BUNB.js";var v=k(q());function P(o,t){o&1&&(r(0,"div",12),m(1," Name is required "),i())}var g=class o{constructor(t,e,a,T){this.fb=t;this.categoryService=e;this.route=a;this.router=T}categoryForm;categoryId;categorySubscription;ngOnInit(){this.categoryForm=this.fb.group({name:["",[R.required]]}),this.route.paramMap.subscribe(t=>{this.categoryId=t.get("id"),this.getCategoryDetails(this.categoryId)})}ngOnDestroy(){this.categorySubscription&&this.categorySubscription.unsubscribe()}getCategoryDetails(t){this.categorySubscription=this.categoryService.getCategoryById(t).subscribe({next:e=>{this.categoryForm.patchValue({name:e.name})},error:e=>{console.error("Error fetching category details",e)}})}updateCategory(){if(this.categoryForm.valid){let t=this.categoryForm.value;this.categorySubscription=this.categoryService.updateCategory(this.categoryId,t).subscribe({next:()=>{v.default.fire("Success","Category updated successfully!","success").then(()=>{this.router.navigate(["/listCategories"])})},error:e=>{console.error("Error updating category",e),v.default.fire("Error","Something went wrong while updating the category.","error")}})}}isNameEmpty(){return this.categoryForm.get("name")?.invalid&&this.categoryForm.get("name")?.touched}static \u0275fac=function(e){return new(e||o)(n(O),n(A),n(N),n(I))};static \u0275cmp=C({type:o,selectors:[["app-update-category"]],standalone:!0,features:[S],decls:19,vars:3,consts:[[1,"container-fluid","p-0"],[1,"row","no-gutters"],[1,"col-12"],[1,"col-2"],[1,"col-10"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","categoryName",1,"form-label"],[1,"col-md-6"],["id","categoryName","type","text","formControlName","name","placeholder","Enter category name",1,"form-control"],["class","text-danger",4,"ngIf"],["type","submit",1,"btn","btn-primary",2,"background-color","#4CAF50","border","none",3,"disabled"],[1,"text-danger"]],template:function(e,a){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),u(3,"app-navbar"),i()(),r(4,"div",1)(5,"div",3),u(6,"app-admin-sidebar"),i(),r(7,"div",4)(8,"h2"),m(9,"Update Category"),i(),r(10,"form",5),h("ngSubmit",function(){return a.updateCategory()}),r(11,"div",6)(12,"label",7),m(13,"Category Name"),i(),r(14,"div",8),u(15,"input",9),i(),b(16,P,2,0,"div",10),i(),r(17,"button",11),m(18," Update Category "),i()()()()()),e&2&&(p(10),d("formGroup",a.categoryForm),p(6),d("ngIf",a.isNameEmpty()),p(),d("disabled",a.categoryForm.invalid))},dependencies:[E,G,_,U,M,x,D,j,w,l,F],styles:["input[_ngcontent-%COMP%]::selection{background-color:#009024;color:#fff}"]})};var z=[{path:"",component:g}],y=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=s({type:o});static \u0275inj=c({imports:[f.forChild(z),f]})};var V=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=s({type:o});static \u0275inj=c({imports:[l,y]})};export{V as UpdateCategoryModule};
