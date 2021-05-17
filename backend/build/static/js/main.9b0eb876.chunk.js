(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),s=a.n(r),i=(a(98),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,188)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))}),o=a(2);function l(e){return Object(o.jsx)("h1",{children:"Home Component"})}var u=a(20),d=a(173),j=a(185),p=a(175),h=a(177),b=a(178),O=a(179),x=a(13),g=a(9),m=a(15),f=a.n(m),v=a(26),S=a(27),y=a.n(S),w="USER_LOGIN_SUCCESS",C="USER_LOGIN_FAIL",_="USER_LOADED_SUCCESS",E="USER_LOADED_FAIL",k="USER_AUTHENTICATED_SUCCESS",A="USER_AUTHENTICATED_FAIL",R="USER_PASSWORD_RESET_SUCCESS",I="USER_PASSWORD_RESET_FAIL",N="USER_PASSWORD_RESET_CONFIRM_SUCCESS",U="USER_PASSWORD_RESET_CONFIRM_FAIL",F="USER_LOGOUT",L="USER_SIGN_UP_SUCCESS",T="USER_SIGN_UP_FAIL",W="USER_ACTIVATION_SUCCESS",P="USER_ACTIVATION_FAIL",D="USER_GOOGLE_LOGIN_SUCCESS",G="USER_GOOGLE_LOGIN_FAIL",V=function(){return function(){var e=Object(v.a)(f.a.mark((function e(t){var a,n,c,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null;try{a=JSON.parse(localStorage.getItem("access"))}catch(s){console.log("Cannot get token from localstorage",s)}if(!a){e.next=18;break}return n={headers:{Authorization:"JWT ".concat(a),Accept:"application/json"}},e.prev=4,c="".concat("http://localhost:8001","/auth/users/me/"),e.next=8,y.a.get(c,n);case 8:r=e.sent,t({type:_,payload:r.data}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.log("Cant Load User on line 40 userActions in store ",e.t0),t({type:E,payload:null});case 16:e.next=19;break;case 18:t({type:E,payload:null});case 19:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}()},q=Object(d.a)((function(e){return Object(j.a)({title:{padding:e.spacing(5)},textField:{padding:e.spacing(5)},bottom:{padding:e.spacing(5),"&>span":{marginRight:e.spacing(1),marginLeft:e.spacing(1)}}})}));function J(e){var t=e.match,a=q(),n=c.a.useState(!1),r=Object(u.a)(n,2),s=r[0],i=r[1],l=Object(x.c)(),d=t.params,j=d.uid,m=d.token;return s?Object(o.jsx)(g.a,{to:"/login"}):Object(o.jsx)(p.a,{maxWidth:"lg",children:Object(o.jsxs)(h.a,{container:!0,children:[Object(o.jsx)(h.a,{className:a.title,item:!0,xs:12,children:Object(o.jsx)(b.a,{variant:"h5",children:"Activate your account"})}),Object(o.jsx)(h.a,{className:a.textField,item:!0,xs:12,children:Object(o.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){j&&m&&(l(function(e,t){return function(){var a=Object(v.a)(f.a.mark((function a(n){var c,r,s;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={uid:e,token:t},r="".concat("http://localhost:8001","/auth/users/activation/"),a.prev=2,a.next=5,y.a.post(r,c);case 5:s=a.sent,n({type:W,payload:s.data}),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(2),console.log("Cant create token in actions 21 line",a.t0),n({type:P,payload:null});case 13:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}(j,m)),i(!0))},children:"Activate Account"})})]})})}var M=a(39),B=a(12),H=a(25),z=a(183),K=Object(d.a)((function(e){return Object(j.a)({title:{padding:e.spacing(5)},textField:{padding:e.spacing(5)},bottom:{padding:e.spacing(5),"&>span":{marginRight:e.spacing(1),marginLeft:e.spacing(1)}}})}));function Q(){var e=K(),t=Object(x.c)(),a=Object(x.d)((function(e){return e.user.isAuthenticated})),c=Object(n.useState)({email:"",password:""}),r=Object(u.a)(c,2),s=r[0],i=r[1];function l(e){i(Object(B.a)(Object(B.a)({},s),{},Object(M.a)({},e.target.name,e.target.value)))}if(a)return Object(o.jsx)(g.a,{to:"/"});function d(){return(d=Object(v.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat("http://localhost:8001","/auth/o/google-oauth2/?redirect_uri=").concat("http://localhost:8001","/google"),e.next=4,y.a.get(t);case 4:a=e.sent,console.log(a.data.authorization_url),"undefined"!==typeof window&&window.location.replace(a.data.authorization_url),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Continue with google fail",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(o.jsx)(p.a,{maxWidth:"lg",children:Object(o.jsxs)(h.a,{container:!0,children:[Object(o.jsx)(h.a,{className:e.title,item:!0,xs:12,children:Object(o.jsx)(b.a,{variant:"h5",children:"Sign In to account"})}),Object(o.jsxs)(h.a,{item:!0,xs:6,children:[Object(o.jsx)(h.a,{className:e.textField,item:!0,xs:12,children:Object(o.jsx)(z.a,{name:"email",defaultValue:"",variant:"outlined",placeholder:"Email",label:"email",type:"email",fullWidth:!0,required:!0,onChange:l})}),Object(o.jsx)(h.a,{className:e.textField,item:!0,xs:12,children:Object(o.jsx)(z.a,{name:"password",defaultValue:"",variant:"outlined",placeholder:"Password",label:"password",type:"password",fullWidth:!0,required:!0,onChange:l})}),Object(o.jsx)(h.a,{className:e.textField,item:!0,xs:12,children:Object(o.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){var e,a;t((e=s.email,a=s.password,function(){var t=Object(v.a)(f.a.mark((function t(n){var c,r,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={email:e,password:a},r="".concat("http://localhost:8001","/auth/jwt/create/"),t.prev=2,t.next=5,y.a.post(r,c);case 5:s=t.sent,n({type:w,payload:s.data}),n(V()),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log("Cant create token in actions 21 line",t.t0),n({type:C,payload:null});case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()))},children:"Submit"})}),Object(o.jsxs)(h.a,{className:e.bottom,item:!0,xs:12,children:[Object(o.jsxs)("span",{children:["Don't have an accout? ",Object(o.jsx)(H.b,{to:"/signup",children:"SignUp"})]}),Object(o.jsxs)("span",{children:["Forgot your password?"," ",Object(o.jsx)(H.b,{to:"/reset-password",children:"Reset Password"})]})]}),Object(o.jsx)(h.a,{className:e.textField,item:!0,xs:12,children:Object(o.jsx)(O.a,{variant:"contained",color:"secondary",onClick:function(){return d.apply(this,arguments)},children:"Continue with Google"})})]})]})})}var X=Object(d.a)((function(e){return Object(j.a)({title:{padding:e.spacing(5)},textField:{padding:e.spacing(5)},bottom:{padding:e.spacing(5),"&>span":{marginRight:e.spacing(1),marginLeft:e.spacing(1)}}})}));function Y(){var e=X(),t=c.a.useState(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],s=c.a.useState(""),i=Object(u.a)(s,2),l=i[0],d=i[1],j=Object(x.c)();return n?(r(!1),Object(o.jsx)(g.a,{to:"/"})):Object(o.jsx)(p.a,{maxWidth:"lg",children:Object(o.jsxs)(h.a,{container:!0,children:[Object(o.jsx)(h.a,{className:e.title,item:!0,xs:12,children:Object(o.jsx)(b.a,{variant:"h5",children:"Password Reset Page"})}),Object(o.jsxs)(h.a,{item:!0,xs:6,children:[Object(o.jsx)(h.a,{className:e.textField,item:!0,xs:12,children:Object(o.jsx)(z.a,{name:"email",defaultValue:"",variant:"outlined",placeholder:"Email",label:"email",type:"email",fullWidth:!0,required:!0,onChange:function(e){d(e.target.value)}})}),Object(o.jsx)(h.a,{className:e.textField,item:!0,xs:12,children:Object(o.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){l&&(j(function(e){return function(){var t=Object(v.a)(f.a.mark((function t(a){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={email:e},c="".concat("http://localhost:8001","/auth/users/reset_password/"),t.prev=2,t.next=5,y.a.post(c,n);case 5:a({type:R}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),console.log("Cannot call api reset password",t.t0),a({type:I});case 12:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()}(l)),r(!0))},children:"Reset Password"})})]})]})})}var Z=Object(d.a)((function(e){return Object(j.a)({title:{padding:e.spacing(5)},textField:{padding:e.spacing(5)},bottom:{padding:e.spacing(5),"&>span":{marginRight:e.spacing(1),marginLeft:e.spacing(1)}}})}));function $(e){var t=e.match,a=Z(),n=c.a.useState(!1),r=Object(u.a)(n,2),s=r[0],i=r[1],l=c.a.useState(""),d=Object(u.a)(l,2),j=d[0],m=d[1],S=Object(x.c)(),w=t.params,C=w.uid,_=w.token;return s?Object(o.jsx)(g.a,{to:"/"}):Object(o.jsx)(p.a,{maxWidth:"lg",children:Object(o.jsxs)(h.a,{container:!0,children:[Object(o.jsx)(h.a,{className:a.title,item:!0,xs:12,children:Object(o.jsx)(b.a,{variant:"h5",children:"Enter your new password"})}),Object(o.jsxs)(h.a,{item:!0,xs:6,children:[Object(o.jsx)(h.a,{className:a.textField,item:!0,xs:12,children:Object(o.jsx)(z.a,{name:"password",defaultValue:"",variant:"outlined",placeholder:"Email",label:"password",type:"password",fullWidth:!0,required:!0,onChange:function(e){m(e.target.value)}})}),Object(o.jsx)(h.a,{className:a.textField,item:!0,xs:12,children:Object(o.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){j&&(S(function(e,t,a){return function(){var n=Object(v.a)(f.a.mark((function n(c){var r,s;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={uid:e,token:t,new_password:a},console.log(r),s="".concat("http://localhost:8001","/auth/users/reset_password_confirm/"),console.log(s),n.prev=4,n.next=7,y.a.post(s,r);case 7:c({type:N}),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(4),console.log("Cannot call api reset password",n.t0),c({type:U,payload:null});case 14:case"end":return n.stop()}}),n,null,[[4,10]])})));return function(e){return n.apply(this,arguments)}}()}(C,_,j)),i(!0))},children:"Reset Password"})})]})]})})}var ee=Object(d.a)((function(e){return Object(j.a)({title:{padding:e.spacing(5)},textField:{padding:e.spacing(5)},bottom:{padding:e.spacing(5),"&>span":{marginRight:e.spacing(1),marginLeft:e.spacing(1)}}})}));function te(){var e=ee(),t=Object(x.c)(),a=Object(n.useState)(null),c=Object(u.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(!1),l=Object(u.a)(i,2),d=l[0],j=l[1],m=Object(x.d)((function(e){return e.user.isAuthenticated})),S=Object(n.useState)({email:"",password:""}),w=Object(u.a)(S,2),C=w[0],_=w[1];function E(e){_(Object(B.a)(Object(B.a)({},C),{},Object(M.a)({},e.target.name,e.target.value)))}return m?Object(o.jsx)(g.a,{to:"/"}):d?Object(o.jsx)(g.a,{to:"/login"}):Object(o.jsx)(p.a,{maxWidth:"lg",children:Object(o.jsxs)(h.a,{container:!0,children:[Object(o.jsx)(h.a,{className:e.title,item:!0,xs:12,children:Object(o.jsx)(b.a,{variant:"h5",children:"Make account"})}),r&&Object(o.jsx)(h.a,{className:e.title,item:!0,xs:12,children:Object(o.jsx)(b.a,{variant:"h5",children:r})}),Object(o.jsxs)(h.a,{item:!0,xs:6,children:[Object(o.jsx)(h.a,{className:e.textField,item:!0,xs:12,children:Object(o.jsx)(z.a,{name:"email",defaultValue:"",variant:"outlined",placeholder:"Email",label:"email",type:"email",fullWidth:!0,required:!0,onChange:E})}),Object(o.jsx)(h.a,{className:e.textField,item:!0,xs:12,children:Object(o.jsx)(z.a,{name:"password",defaultValue:"",variant:"outlined",placeholder:"Password",label:"password",type:"password",fullWidth:!0,required:!0,onChange:E})}),Object(o.jsx)(h.a,{className:e.textField,item:!0,xs:12,children:Object(o.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){var e,a;C.email,C.password?(t((e=C.email,a=C.password,function(){var t=Object(v.a)(f.a.mark((function t(n){var c,r,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={email:e,password:a},r="".concat("http://localhost:8001","/auth/users/"),t.prev=2,t.next=5,y.a.post(r,c);case 5:s=t.sent,n({type:L,payload:s.data}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),console.log("Cant create token in actions 21 line",t.t0),n({type:T,payload:null});case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}())),j(!0)):s("Email and password cannot be empty")},children:"Submit"})})]})]})})}var ae=a(180),ne=a(181),ce=a(182),re=a(79),se=a.n(re),ie=a(184),oe=Object(d.a)((function(e){return Object(j.a)({root:{flexGrow:1,"& a":{textDecoration:"none",color:"inherit"}},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})}));function le(){var e=oe(),t=Object(x.c)(),a=Object(x.d)((function(e){return e.user.user})),c=Object(x.d)((function(e){return e.user.isAuthenticated}));function r(){t((function(e){e({type:F})}))}var s=function(){return Object(o.jsxs)(n.Fragment,{children:[Object(o.jsx)(O.a,{color:"inherit",children:Object(o.jsx)(H.b,{to:"/login",children:"Login"})}),Object(o.jsx)(O.a,{color:"inherit",children:Object(o.jsx)(H.b,{to:"/signup",children:"SignUp"})})]})},i=function(e){var t=e.user;return Object(o.jsxs)(n.Fragment,{children:[Object(o.jsx)(O.a,{color:"inherit",children:null===t||void 0===t?void 0:t.email}),Object(o.jsx)(O.a,{color:"inherit",onClick:r,children:"Logout"})]})};return Object(o.jsx)("div",{className:e.root,children:Object(o.jsx)(ae.a,{position:"static",children:Object(o.jsxs)(ne.a,{children:[Object(o.jsx)(ce.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(o.jsx)(se.a,{})}),Object(o.jsx)(b.a,{variant:"h6",className:e.title,children:Object(o.jsx)(H.b,{to:"/",children:"Home"})}),Object(o.jsx)(ie.a,{children:c?Object(o.jsx)(i,{user:a}):Object(o.jsx)(s,{})})]})})})}var ue=a(80),de=a.n(ue);var je=Object(x.b)((function(e){return{isAuthenticated:e.user.isAuthenticated}}),{checkAuthenticated:function(){return function(){var e=Object(v.a)(f.a.mark((function e(t){var a,n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null;try{a=JSON.parse(localStorage.getItem("access"))}catch(r){console.log("Cant get tocken from localstorage",r)}if(!localStorage.getItem("access")){e.next=17;break}return e.prev=3,n="".concat("http://localhost:8001","/auth/jwt/verify/"),c={token:a},e.next=8,y.a.post(n,c);case 8:"token_not_valid"!==e.sent.data.code?t({type:k}):t({type:A}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),t({type:A});case 15:e.next=18;break;case 17:t({type:A});case 18:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}()},loadUser:V,googleLogin:function(e,t){return function(){var a=Object(v.a)(f.a.mark((function a(n){var c,r,s,i,o;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e||!t||localStorage.getItem("access")){a.next=19;break}return c={headers:{"Content-Type":"application/x-www-form-urlencoded"}},r={state:e,code:t},s=Object.keys(r).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r[e])})).join("&"),console.log("IN",s),i="".concat("http://localhost:8001","/auth/o/google-oauth2/?").concat(s),a.prev=6,a.next=9,y.a.post(i,c);case 9:o=a.sent,console.log(o),n({type:D,payload:o.data}),n(V()),a.next=19;break;case 15:a.prev=15,a.t0=a.catch(6),n({type:G,payload:null}),console.log("Error in googel authentication action",a.t0);case 19:case"end":return a.stop()}}),a,null,[[6,15]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=Object(g.g)();return Object(n.useEffect)((function(){var a=de.a.parse(t.search),n=a.state?a.state:null,c=a.code?a.code:null;n&&c&&e.googleLogin(n,c),console.log(n,c,"In layout state code");try{localStorage.getItem("access")&&(e.isAuthenticated||e.checkAuthenticated(),e.isAuthenticated&&e.loadUser())}catch(r){}}),[t,e]),Object(o.jsxs)("div",{children:[Object(o.jsx)(le,{}),e.children]})})),pe=a(41),he=a(81),be=a(82),Oe={access:localStorage.getItem("access")||null,refresh:localStorage.getItem("refresh")||null,isAuthenticated:!1,user:null},xe=Object(pe.combineReducers)({user:function(){var e,t,a,n,c,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case k:return Object(B.a)(Object(B.a)({},r),{},{isAuthenticated:!0});case A:case L:return Object(B.a)(Object(B.a)({},r),{},{isAuthenticated:!1});case w:return localStorage.setItem("access",JSON.stringify(null===(e=s.payload)||void 0===e?void 0:e.access)),Object(B.a)(Object(B.a)({},r),{},{isAuthenticated:!0,access:null===(t=s.payload)||void 0===t?void 0:t.access,refresh:null===(a=s.payload)||void 0===a?void 0:a.refresh});case _:return Object(B.a)(Object(B.a)({},r),{},{user:s.payload});case E:return Object(B.a)(Object(B.a)({},r),{},{user:null});case D:return Object(B.a)(Object(B.a)({},r),{},{isAuthenticated:!0,access:null===(n=s.payload)||void 0===n?void 0:n.access,refresh:null===(c=s.payload)||void 0===c?void 0:c.refresh});case F:case G:case C:case T:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(B.a)(Object(B.a)({},r),{},{isAuthenticated:!1,access:null,refresh:null,user:null});case R:case I:case N:case U:case W:case P:return Object(B.a)({},r);default:return r}}}),ge=[be.a],me=Object(pe.createStore)(xe,Object(he.composeWithDevTools)(pe.applyMiddleware.apply(void 0,ge))),fe=function(){return Object(o.jsx)(x.a,{store:me,children:Object(o.jsx)(H.a,{children:Object(o.jsx)(je,{children:Object(o.jsxs)(g.d,{children:[Object(o.jsx)(g.b,{exact:!0,path:"/login",component:Q}),Object(o.jsx)(g.b,{exact:!0,path:"/signup",component:te}),Object(o.jsx)(g.b,{exact:!0,path:"/reset-password",component:Y}),Object(o.jsx)(g.b,{exact:!0,path:"/password/confirm/:uid/:token",component:$}),Object(o.jsx)(g.b,{exact:!0,path:"/activate/:uid/:token",component:J}),Object(o.jsx)(g.b,{exact:!0,path:"/",component:l})]})})})})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(fe,{})}),document.getElementById("root")),i()},98:function(e,t,a){}},[[142,1,2]]]);
//# sourceMappingURL=main.9b0eb876.chunk.js.map