(this.webpackJsonperdettidnu=this.webpackJsonperdettidnu||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),c=n.n(a),o=n(22),i=n.n(o),u=(n(30),n(31),n(6)),s=n(4),d=n(1),l=n(7),m=n(24),b=Object(a.createContext)(),j=function(e){var t=Object(a.useState)(null),n=Object(s.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(null),u=Object(s.a)(i,2),d=u[0],l=u[1],m=Object(a.useState)(null),j=Object(s.a)(m,2),f=j[0],g=j[1],O=Object(a.useState)(null),p=Object(s.a)(O,2),h=p[0],x=p[1],v=Object(a.useState)(null),S=Object(s.a)(v,2),y=S[0],w=S[1],I=Object(a.useState)(null),k=Object(s.a)(I,2),D=k[0],C=k[1],L=Object(a.useState)(null),N=Object(s.a)(L,2),T=N[0],z=N[1],E=Object(a.useState)(null),F=Object(s.a)(E,2),V=F[0],M=F[1];return Object(r.jsx)(b.Provider,{value:{numdays:c,numhours:d,numminutes:f,numseconds:h,textstring:y,currentDate:D,diffSeconds:T,futureDate:V,setNumdays:o,setNumhours:l,setNumminutes:g,setNumseconds:x,setTextstring:w,setCurrentDate:C,setDiffSeconds:z,setFutureDate:M},children:e.children})},f=n(9);function g(){var e=Object(u.a)(["\n\nbackground-image:url(../img/",".jpg);\nfont-size: 1.3rem;\n margin: 0.5rem;\n padding: 0.5rem;\n width: 5rem;\n height: 5rem;\n border: 8px solid #3a799d;\nbackground-color: #4c93bc;\noverflow:hidden;\npadding: 0.5rem;\nmargin: 0.5rem;\nborder-radius:50%;\n\n"]);return g=function(){return e},e}var O=function(e){var t=e.buttimage,n=e.themeprop,r=Object(l.a)(g(),t);return Object(d.a)("div",{children:Object(d.a)("button",{css:r,onClick:function(e){localStorage.setItem("mybackInLocalStorage",n)}})})};function p(){var e=Object(u.a)(["\n    \n    display: ",";\n    max-width: 24rem;\n    min-width: 14rem;\n    border: solid 1rem #b46612;\n    background-color: goldenrod;\n    border-style:ridge;\n    padding:0.5rem;\n    \n    \n    "]);return p=function(){return e},e}function h(){var e=Object(u.a)(["\ndisplay: flex;\nflex-direction: row;\nwidth:18rem;\noverflow:scroll;\noverflow-x:hidden;\noverflow-y:hidden;\npadding: 0.5rem;\n"]);return h=function(){return e},e}function x(){var e=Object(u.a)(["\n font-size: 1.3rem;\n margin: 0.5rem;\n padding: 0.5rem;\n max-width: 30rem;\nmin-width: 14rem;\n\n"]);return x=function(){return e},e}function v(){var e=Object(u.a)(["\n\nborder: 10px solid #3a799d;\nbackground-color: #4c93bc;\npadding: 0.5rem;\nmargin: 0.5rem;\nfont-size:2rem;\n@media (max-width: 400px) {\n        font-size: 1rem;\n        border: 5px solid #3a799d;\n      }\nborder-radius:20rem;\n\n\n"]);return v=function(){return e},e}function S(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n  margin: 0.5rem;\n  border: 10px solid #184d6c;\n  \n  background-color: lightblue;\n  font-size: 2rem;\n  @media (max-width: 400px) {\n        font-size: 1.2rem;\n      }\n  \n  \n  \n  \n  \n  "]);return S=function(){return e},e}var y=function(e){e.buttimage,e.themeprop,e.displaystate,e.props;var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1],o=Object(l.a)(S()),i=Object(l.a)(v()),u=Object(l.a)(x()),j=Object(l.a)(h()),g=Object(l.a)(p(),r?"block":"none"),y=Object(a.useContext)(b).setFutureDate,w=Object(a.useContext)(b).setTextstring,I=Object(a.useContext)(b).futureDate;Object(a.useEffect)((function(){var e=localStorage.getItem("myValueInLocalStorage"),t=localStorage.getItem("mytextInLocalStorage");y(e),w(t)}),[y,w]);var k=Object(m.a)(),D=k.register,C=k.handleSubmit,L=k.errors;return Object(d.a)("section",{children:Object(d.b)("form",{css:o,onSubmit:C((function(e){console.log(e.dato,e.hours,e.aftertext);var t=e.dato+"T"+e.hours;w(e.aftertext),console.log(t);var n=new Date(t).getTime();localStorage.setItem("myValueInLocalStorage",n),localStorage.setItem("mytextInLocalStorage",e.aftertext),console.log(n),y(new Date(n)),console.log("future date from context: ",I)})),children:[Object(d.a)("label",{htmlFor:"number",children:"V\xe6lg dato og tid"}),Object(d.a)("input",{css:u,type:"date",name:"dato",ref:D({required:!0})}),Object(d.a)("input",{css:u,type:"time",twelvehour:"false",step:"1",name:"hours",ref:D({required:!0})}),Object(d.a)("input",{css:u,type:"text",placeholder:"Skriv noget ... f.eks. 'til jul'",name:"aftertext",ref:D({required:!0})}),L.exampleRequired&&Object(d.a)("span",{children:"This field is required"}),Object(d.a)("input",{css:i,type:"submit",value:"G\xf8r det!",onClick:function(e){var t=new Date;t.setMinutes(t.getMinutes()+30);var n=(new Date).getTime();I>n+6e4?Object(f.b)("/displayview"):c(!0)}}),Object(d.a)("input",{css:i,type:"reset",value:"Nulstil"}),Object(d.a)("p",{css:g,children:"DU KAN JO IKKE T\xc6LLE NED TIL FORTIDEN, VEL?  PR\xd8V IGEN!"}),Object(d.a)("p",{children:"V\xe6lg tema"}),Object(d.b)("div",{css:j,children:[Object(d.a)(O,{buttimage:"xmasSmall",themeprop:"christmas"}),Object(d.a)(O,{buttimage:"birthdaySmall",themeprop:"birthday"}),Object(d.a)(O,{buttimage:"holidaySmall",themeprop:"holiday"})]})]})})},w=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(y,{})})};function I(){var e=Object(u.a)(["\n\nborder: 10px solid #61a5cc;\nbackground-color: #ffffff;\nborder-style:ridge;\npadding: 0.5rem;\nmargin: 0.5rem;\nfont-size:2rem;\n@media (max-width: 400px) {\n        font-size: 1rem;\n      }\nmax-width: 30rem;\nmin-width: 14rem;\n\n"]);return I=function(){return e},e}function k(){var e=Object(u.a)(["\nmax-width: 30rem;  \nbackground-color: #4c93bc;\nborder: 10px solid #3a799d;\n\npadding: 0.5rem;\nmargin: 0.5rem;\nmargin-bottom:30rem;\nfont-size:2rem;\n@media (max-width: 400px) {\n        font-size: 1.2rem;}\nborder-radius:20rem;\nbox-shadow:2px 2px 5px #05334e;\n"]);return k=function(){return e},e}function D(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: lightblue;\n  font-size: 2rem;\n  background-image: url(../img/",".jpg);\n  overflow: hidden;\n  background-repeat: no-repeat;\n  padding: 0.5rem;\n  margin: 0.5rem;\n  border: 10px solid #184d6c;\n  \n  "]);return D=function(){return e},e}var C=function(e){e.themepic,e.prop;var t=localStorage.getItem("mybackInLocalStorage"),n=Object(l.a)(D(),t),r=Object(l.a)(k()),c=Object(l.a)(I()),o=Object(a.useContext)(b),i=o.numdays,u=o.setNumdays,s=Object(a.useContext)(b),m=s.numhours,j=s.setNumhours,g=Object(a.useContext)(b),O=g.numminutes,p=g.setNumminutes,h=Object(a.useContext)(b),x=h.numseconds,v=h.setNumseconds,S=Object(a.useContext)(b),y=S.textstring,w=S.setTextstring,C=Object(a.useContext)(b),L=C.diffSeconds,N=C.setFutureDate,T=C.futureDate,z=C.setDiffSeconds,E=C.currentDate,F=C.setCurrentDate;return N(localStorage.getItem("myValueInLocalStorage")),w(localStorage.getItem("mytextInLocalStorage")),Object(a.useEffect)((function(){setTimeout((function(){F(Date.now()),z((T-E)/1e3),u(Math.floor(L/86400)),j(Math.floor(L%86400/3600)),p(Math.floor(L%86400%3600/60)),v(Math.floor(L%86400%3600)%60)}),1e3)}),[E,v,F,z,u,j,p,L,T]),Object(d.b)("section",{css:n,children:[Object(d.b)("p",{css:c,children:[i,"  dage"]}),Object(d.b)("p",{css:c,children:[m,"  timer"]}),Object(d.b)("p",{css:c,children:[O,"   minutter"]}),Object(d.b)("p",{css:c,children:[" ",x,"  sekunder"]}),Object(d.a)("p",{css:c,children:y}),Object(d.a)("button",{css:r,onClick:function(e){Object(f.b)("/")},children:"Start en ny nedt\xe6lling"})]})},L=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(C,{})})};var N=function(){var e=localStorage.getItem("myValueInLocalStorage");return console.log(e),Object(r.jsxs)("div",{className:"App",children:[e&&void Object(f.b)("/displayview"),Object(r.jsx)(j,{children:Object(r.jsxs)(f.a,{children:[Object(r.jsx)(w,{path:"/"}),Object(r.jsx)(L,{path:"/displayview"})]})})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),T()}},[[41,1,2]]]);
//# sourceMappingURL=main.7791ae7d.chunk.js.map