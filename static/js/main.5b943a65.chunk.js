(this.webpackJsonptask_6=this.webpackJsonptask_6||[]).push([[0],{12:function(e,t,n){e.exports={container:"Header_container__2gsPc",navigation:"Header_navigation__3k2Ej",navItem:"Header_navItem__AtvuR"}},13:function(e,t,n){e.exports={preloader:"Preloader_preloader__19GQR",preloader__row:"Preloader_preloader__row__1hK8p","preloader-rotate":"Preloader_preloader-rotate__3U1eZ",preloader__item:"Preloader_preloader__item__3Fbc1","preloader-bounce":"Preloader_preloader-bounce__3HDyq",loaded_hiding:"Preloader_loaded_hiding__1suoY",loaded:"Preloader_loaded__Ju_iw"}},20:function(e,t,n){e.exports={container:"EmployeesList_container__1bUjh",box:"EmployeesList_box__3cvWU"}},32:function(e,t,n){e.exports={container:"MainPage_container__1rGpP"}},33:function(e,t,n){},35:function(e,t,n){e.exports={container:"Employees_container__3XMGQ"}},41:function(e,t,n){},42:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(30),i=n.n(c),o=(n(41),n(42),n(9)),s=n(12),d=n.n(s),l=n(1);function j(){return Object(l.jsx)("div",{className:d.a.container,children:Object(l.jsxs)("nav",{className:d.a.navigation,children:[Object(l.jsx)(o.b,{className:d.a.navItem,activeClassName:"",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(l.jsx)(o.b,{className:d.a.navItem,activeClassName:"",to:"/employees",children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"})]})})}var u=n(2),b=n(32),_=n.n(b);function p(){return Object(l.jsx)("div",{className:_.a.container,children:Object(l.jsx)("h1",{children:"Main Page"})})}var x=n(33),O=n.n(x);function v(){return Object(l.jsx)("div",{className:O.a.page,children:"Page not found"})}var m=n(36),h=n(14),f=n(34),g=n.n(f),N={getPicture:function(){return g.a.create({baseURL:"https://reqres.in/api/users?per_page=12"}).get("")}},P=n(20),y=n.n(P);function C(e){var t;return Object(l.jsx)("div",{className:y.a.container,children:Object(l.jsx)("div",{children:null===(t=e.employees)||void 0===t?void 0:t.map((function(t){return Object(l.jsxs)("div",{className:y.a.box,children:[Object(l.jsxs)("div",{children:[" ",t.first_name," ",t.last_name]}),Object(l.jsx)("button",{onClick:function(){return e.removeEmployee(t.id)},children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.id)}))})})}var E=n(35),k=n.n(E),w=n(13),I=n.n(w);function S(){return Object(l.jsx)("div",{className:I.a.preloader,children:Object(l.jsxs)("div",{className:I.a.preloader__row,children:[Object(l.jsx)("div",{className:I.a.preloader__item}),Object(l.jsx)("div",{className:I.a.preloader__item})]})})}function F(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),i=Object(h.a)(c,2),o=i[0],s=i[1],d=Object(r.useState)(""),j=Object(h.a)(d,2),u=j[0],b=j[1],_=Object(r.useState)(!1),p=Object(h.a)(_,2),x=p[0],O=p[1];return Object(r.useEffect)((function(){O(!0),N.getPicture().then((function(e){s(null),O(!1),a(e.data.data)})).catch((function(){s("\u043e\u0448\u0438\u0431\u043a\u0430"),O(!1)}))}),[N]),Object(l.jsxs)("div",{className:k.a.container,children:[Object(l.jsx)("h1",{children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",value:u,onChange:function(e){b(e.currentTarget.value),s(null)}}),Object(l.jsx)("button",{onClick:function(){var e={first_name:u,id:+new Date};""!==(null===u||void 0===u?void 0:u.trim())?(a([e].concat(Object(m.a)(n))),b("")):s("")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(l.jsx)("div",{children:o})]}),x?Object(l.jsx)(S,{}):Object(l.jsx)(C,{employees:n,removeEmployee:function(e){a(n.filter((function(t){return t.id!==e})))}})]})}function L(){return Object(l.jsxs)(u.d,{children:[Object(l.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(l.jsx)(p,{})}}),Object(l.jsx)(u.b,{path:"/employees",render:function(){return Object(l.jsx)(F,{})}}),Object(l.jsx)(u.b,{path:"/404",render:function(){return Object(l.jsx)(v,{})}}),Object(l.jsx)(u.a,{from:"*",to:"/404"})]})}var H=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(L,{})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(H,{})})}),document.getElementById("root")),M()}},[[67,1,2]]]);
//# sourceMappingURL=main.5b943a65.chunk.js.map