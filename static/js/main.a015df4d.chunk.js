(this.webpackJsonpwebshop=this.webpackJsonpwebshop||[]).push([[0],{59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(28),a=n.n(s),i=n(2),o=n(0),u=Object(c.createContext)(null),j=function(e){var t=e.children,n=Object(c.useState)(),r=Object(i.a)(n,2),s=r[0],a=r[1];return Object(o.jsx)(u.Provider,{value:[s,a],children:t})},l=n(12),b=n(3),d=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"This is the homeview"})})},h=n(5),O=n.n(h),p=n(10),f=n(11),x=n.n(f),v=x.a.create({baseURL:"https://swapi.dev/api",headers:{"Content-Type":"application/json"}}),m=function(e){return v.get("/people/".concat(e))},g=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(),a=Object(i.a)(s,2),u=a[0],j=a[1],l=function(){var e=Object(p.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(u);case 3:t=e.sent,r(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error occured: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){return l()},children:"make api call"}),Object(o.jsx)("button",{onClick:function(){return console.log(n)},children:"check my state"}),Object(o.jsx)("input",{placeholder:"search for character ID",onChange:function(e){return j(e.target.value)}}),Object(o.jsx)("h1",{children:null===n||void 0===n?void 0:n.name}),Object(o.jsx)("h1",{children:null===n||void 0===n?void 0:n.hair_color}),Object(o.jsx)("h1",{children:null===n||void 0===n?void 0:n.gender})]})},w=x.a.create({baseURL:"https://pokeapi.co/api/v2",headers:{"Content-Type":"application/json"}}),k=function(e){return w.get("pokemon/".concat(e))},C=function(){return w.get("pokemon?limit=100")},S="/",N="/gallery",y="/news",I="/signin",E="/shop",L="/profile",T="/settings",_="/savedproducts",H="/itemdetail",B=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!0),a=Object(i.a)(s,2),u=a[0],j=a[1],l=Object(b.f)(),d=function(){var e=Object(p.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:t=e.sent,n=t.data,r(n),j(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){d()}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{onClick:function(){return console.log(n)},children:"news view"}),function(){var e;if(!u)return null===n||void 0===n||null===(e=n.results)||void 0===e?void 0:e.map((function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{onClick:function(){return l.push(H,e)},children:e.name})},e.name)}))}()]})},F=function(){var e,t,n,r=Object(c.useState)(),s=Object(i.a)(r,2),a=s[0],u=s[1],j=Object(c.useState)(""),l=Object(i.a)(j,2),b=l[0],d=l[1],h=function(e,t){var n=Object(c.useState)(e),r=Object(i.a)(n,2),s=r[0],a=r[1];return Object(c.useEffect)((function(){var n=setTimeout((function(){a(e)}),t);return function(){clearTimeout(n)}}),[e]),s}(b,2e3),f=function(){var e=Object(p.a)(O.a.mark((function e(t){var n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=6;break}return e.next=3,k(t);case 3:n=e.sent,c=n.data,u(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){f(b)}),[h]),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{placeholder:"search for pokemon",onChange:function(e){return d(e.target.value)}}),Object(o.jsxs)("h1",{children:["Name: ",null===a||void 0===a?void 0:a.name]}),Object(o.jsxs)("h1",{children:["Height: ",null===a||void 0===a?void 0:a.height]}),Object(o.jsxs)("h1",{children:["Weight: ",null===a||void 0===a?void 0:a.weight]}),Object(o.jsxs)("h1",{children:["Id: ",null===a||void 0===a?void 0:a.id]}),Object(o.jsxs)("h1",{children:["Type: ",null===a||void 0===a||null===(e=a.types)||void 0===e||null===(t=e[0])||void 0===t||null===(n=t.type)||void 0===n?void 0:n.name]})]})},P=function(){var e=Object(b.f)(),t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],s=n[1],a=Object(c.useContext)(u),j=Object(i.a)(a,2),l=(j[0],j[1]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Username: "}),Object(o.jsx)("input",{onChange:function(e){return s(e.target.value)}})," ",Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){return l(r),localStorage.setItem("username",r),void e.push(S)},children:"Sign in"})]})},U=x.a.create({baseURL:"http://localhost:3001"}),W=function(){return U.get("/user")},D=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=function(){var e=Object(p.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:t=e.sent,n=t.data,r(n),console.log(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){return s()},children:"Make call to backend"}),n.map((function(e){return Object(o.jsx)("h1",{children:e.username})}))]})},R=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"This is the settings view"})})},z=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"This is the saved products view"})})},J=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!0),a=Object(i.a)(s,2),u=a[0],j=a[1],l=Object(b.g)(),d=function(){var e=Object(p.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(l.state.url);case 3:t=e.sent,n=t.data,r(n),j(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){d()})),u?Object(o.jsx)("h1",{children:"LOADING!!!"}):Object(o.jsx)("div",{children:function(){if(!u)return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{src:null===n||void 0===n?void 0:n.sprites.front_default,alt:"error"}),Object(o.jsxs)("h1",{children:["Name: ",null===n||void 0===n?void 0:n.name]}),Object(o.jsxs)("h1",{children:["Height: ",null===n||void 0===n?void 0:n.height]})]})}()})},M=function(e){var t,n=e.children,r=Object(c.useContext)(u),s=Object(i.a)(r,2),a=s[0],j=s[1];return Object(c.useEffect)((function(){!function(){var e=localStorage.getItem("username");e&&j(e)}()})),Object(o.jsxs)(l.a,{children:[n,Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{exact:!0,path:N,component:g}),Object(o.jsx)(b.a,{exact:!0,path:y,component:B}),Object(o.jsx)(b.a,{exact:!0,path:E,component:F}),Object(o.jsx)(b.a,{exact:!0,path:I,component:(t=P,a?d:t)}),Object(o.jsx)(b.a,{exact:!0,path:T,component:R}),Object(o.jsx)(b.a,{exact:!0,path:L,component:function(e){return a?e:P}(D)}),Object(o.jsx)(b.a,{exact:!0,path:_,component:z}),Object(o.jsx)(b.a,{exact:!0,path:H,component:J}),Object(o.jsx)(b.a,{component:d})]})]})},A=(n(59),n(60),function(e){var t=e.drawerHandler;return Object(o.jsxs)("button",{className:"toggle-button",onClick:function(){return t(!0)},children:[Object(o.jsx)("div",{className:"toggle-button__line"}),Object(o.jsx)("div",{className:"toggle-button__line"}),Object(o.jsx)("div",{className:"toggle-button__line"})]})}),G=(n(61),function(e){var t=e.drawerIsOpen,n=e.drawerHandler;return Object(o.jsx)("nav",{className:t?"side-drawer open":"side-drawer",children:Object(o.jsx)("h1",{onClick:function(){return n(!1)},children:"Exit"})})}),q=(n(62),function(){return Object(o.jsx)("div",{className:"backdrop"})}),K=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(A,{drawerHandler:r}),Object(o.jsx)(G,{drawerIsOpen:n,drawerHandler:r}),!n||Object(o.jsx)(q,{})]})},Q=(n(63),n.p+"static/media/logotype.a85df0c8.svg"),V=(n(64),n(65),function(){var e=Object(c.useContext)(u),t=Object(i.a)(e,2),n=(t[0],t[1]),r=Object(b.f)();return Object(o.jsxs)("div",{className:"profileDropdownWrapper",children:[Object(o.jsx)("span",{children:"firstname Lastname"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Email"}),Object(o.jsx)("hr",{}),Object(o.jsx)("span",{onClick:function(){return r.push(L)},children:"Profile"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("span",{onClick:function(){return r.push(T)},children:"Settings"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{onClick:function(){return r.push(_)},children:"Saved Products"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Language: SE"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{onClick:function(){return n(""),localStorage.removeItem("username"),void r.push(S)},children:"Logout"})]})}),X=function(){var e=Object(c.useContext)(u),t=Object(i.a)(e,2),n=t[0];t[1];return Object(o.jsxs)("div",{className:"profileWrapper",children:[Object(o.jsx)("img",{className:"profileImg",src:"https://thispersondoesnotexist.com/image",alt:"error.."}),Object(o.jsx)("span",{children:n}),Object(o.jsx)(V,{})]})},Y=function(){var e=Object(b.f)(),t=Object(c.useContext)(u),n=Object(i.a)(t,2),r=n[0];n[1];return Object(o.jsxs)("div",{className:"desktopNavigationWrapper",children:[Object(o.jsx)("img",{className:"navLogo",onClick:function(){return e.push(S)},src:Q,alt:"error"}),Object(o.jsx)("span",{className:"shopButton",onClick:function(){return e.push(E)},children:"shop"}),Object(o.jsx)("span",{className:"galleryButton",onClick:function(){return e.push(N)},children:"gallery"}),Object(o.jsx)("span",{className:"newsButton",onClick:function(){return e.push(y)},children:"news"}),r?Object(o.jsxs)("span",{className:"authUserNavigation",children:[" ",Object(o.jsx)(X,{})," "]}):Object(o.jsx)("span",{className:"signInButton",onClick:function(){return e.push(I)},children:"sign In"})]})},Z=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},$=function(){return function(){var e=Object(c.useState)(Z()),t=Object(i.a)(e,2),n=t[0],r=t[1],s=function(){r(Z())};return Object(c.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),n}().width<=1100?Object(o.jsx)(K,{}):Object(o.jsx)(Y,{})},ee=(n(66),function(){return Object(o.jsx)(j,{children:Object(o.jsx)(M,{children:Object(o.jsx)($,{})})})}),te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(ee,{})}),document.getElementById("root")),te()}},[[67,1,2]]]);
//# sourceMappingURL=main.a015df4d.chunk.js.map