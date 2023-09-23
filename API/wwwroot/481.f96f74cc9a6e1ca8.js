"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[481],{3481:(S,m,r)=>{r.r(m),r.d(m,{AccountModule:()=>C});var u=r(9808),l=r(2429),n=r(2382),t=r(4893),p=r(9479),c=r(4015);let g=(()=>{class e{constructor(o,s,a){this.accountService=o,this.router=s,this.activatedRoute=a,this.loginForm=new n.cw({email:new n.NI("",[n.kI.required,n.kI.email]),password:new n.NI("",n.kI.required)}),this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop"}onSubmit(){this.accountService.login(this.loginForm.value).subscribe({next:()=>this.router.navigateByUrl(this.returnUrl)})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.B),t.Y36(l.F0),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:11,vars:4,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],[1,"d-grid"],["type","submit",1,"btn","btn-lg","btn-primary","mt-3"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"form",2),t.NdJ("ngSubmit",function(){return s.onSubmit()}),t.TgZ(3,"div",3),t.TgZ(4,"h1",4),t._uU(5,"Login"),t.qZA(),t.qZA(),t._UZ(6,"app-text-input",5),t._UZ(7,"app-text-input",6),t.TgZ(8,"div",7),t.TgZ(9,"button",8),t._uU(10,"Sign in"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(2),t.Q6J("formGroup",s.loginForm),t.xp6(4),t.Q6J("label","Email Address"),t.xp6(1),t.Q6J("label","Password")("type","password"))},directives:[n._Y,n.JL,n.sg,c.t,n.JJ,n.u],styles:[""]}),e})();var d=r(8372),f=r(5698),h=r(3900),v=r(4004),Z=r(8746);function b(e,i){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.hij(" ",o," ")}}function x(e,i){if(1&e&&(t.TgZ(0,"ul",11),t.YNc(1,b,2,1,"li",12),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.errors)}}const y=[{path:"login",component:g},{path:"register",component:(()=>{class e{constructor(o,s,a){this.fb=o,this.accountService=s,this.router=a,this.errors=null,this.complexPassword="(?=^.{6,10}$)(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*s).*$",this.registerForm=this.fb.group({displayName:["",n.kI.required],email:["",[n.kI.required,n.kI.email],[this.validateEmailNotTaken()]],password:["",[n.kI.required,n.kI.pattern(this.complexPassword)]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe({next:()=>this.router.navigateByUrl("/shop"),error:o=>this.errors=o.errors})}validateEmailNotTaken(){return o=>o.valueChanges.pipe((0,d.b)(1e3),(0,f.q)(1),(0,h.w)(()=>this.accountService.checkEmailExists(o.value).pipe((0,v.U)(s=>s?{emailExists:!0}:null),(0,Z.x)(()=>o.markAsTouched()))))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.qu),t.Y36(p.B),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:13,vars:6,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["class","text-danger list-unstyled",4,"ngIf"],[1,"d-grid"],["type","submit",1,"btn","btn-lg","btn-primary","mt-3"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"form",2),t.NdJ("ngSubmit",function(){return s.onSubmit()}),t.TgZ(3,"div",3),t.TgZ(4,"h1",4),t._uU(5,"Sign up"),t.qZA(),t.qZA(),t._UZ(6,"app-text-input",5),t._UZ(7,"app-text-input",6),t._UZ(8,"app-text-input",7),t.YNc(9,x,2,1,"ul",8),t.TgZ(10,"div",9),t.TgZ(11,"button",10),t._uU(12,"Sign Up"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(2),t.Q6J("formGroup",s.registerForm),t.xp6(4),t.Q6J("label","Display Name"),t.xp6(1),t.Q6J("label","Email address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(1),t.Q6J("ngIf",s.errors))},directives:[n._Y,n.JL,n.sg,c.t,n.JJ,n.u,u.O5,u.sg],styles:[""]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(y)],l.Bz]}),e})();var T=r(4466);let C=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,A,T.m]]}),e})()}}]);