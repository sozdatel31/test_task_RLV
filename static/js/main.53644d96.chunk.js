(this.webpackJsonptask_6=this.webpackJsonptask_6||[]).push([[0],{13:function(e,t,n){e.exports={preloader:"Preloader_preloader__19GQR",preloader__row:"Preloader_preloader__row__1hK8p","preloader-rotate":"Preloader_preloader-rotate__3U1eZ",preloader__item:"Preloader_preloader__item__3Fbc1","preloader-bounce":"Preloader_preloader-bounce__3HDyq",loaded_hiding:"Preloader_loaded_hiding__1suoY",loaded:"Preloader_loaded__Ju_iw"}},20:function(e,t,n){e.exports={container:"EmployeesList_container__1bUjh",box:"EmployeesList_box__3cvWU"}},32:function(e,t,n){e.exports={container:"MainPage_container__1rGpP"}},33:function(e,t,n){},35:function(e,t,n){e.exports={container:"Employees_container__3XMGQ"}},41:function(e,t,n){},42:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),i=n.n(c),o=(n(41),n(42),n(10)),s=n(9),d=n.n(s),l=n(1);function j(){return Object(l.jsx)("div",{className:d.a.container,children:Object(l.jsxs)("nav",{className:d.a.navigation,children:[Object(l.jsx)(o.b,{className:d.a.navItem,activeClassName:d.a.navItemA,exact:!0,to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(l.jsx)(o.b,{className:d.a.navItem,activeClassName:d.a.navItemA,to:"/employees",children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"})]})})}var u=n(2),_=n(32),b=n.n(_);function v(){return Object(l.jsx)("div",{className:b.a.container,children:Object(l.jsx)("h1",{children:"Main Page"})})}var x=n(33),p=n.n(x);function O(){return Object(l.jsx)("div",{className:p.a.page,children:"Page not found"})}var m=n(36),h=n(14),f=n(34),g=n.n(f),P={getPicture:function(){return g.a.create({baseURL:"https://reqres.in/api/users?per_page=12"}).get("")}},N=n(20),y=n.n(N);function I(e){var t;return Object(l.jsx)("div",{className:y.a.container,children:Object(l.jsx)("div",{children:null===(t=e.employees)||void 0===t?void 0:t.map((function(t){return Object(l.jsxs)("div",{className:y.a.box,children:[Object(l.jsxs)("div",{children:[" ",t.first_name," ",t.last_name]}),Object(l.jsx)("button",{onClick:function(){return e.removeEmployee(t.id)},children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.id)}))})})}var C=n(35),E=n.n(C),k=n(13),w=n.n(k);function A(){return Object(l.jsx)("div",{className:w.a.preloader,children:Object(l.jsxs)("div",{className:w.a.preloader__row,children:[Object(l.jsx)("div",{className:w.a.preloader__item}),Object(l.jsx)("div",{className:w.a.preloader__item})]})})}function S(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),i=Object(h.a)(c,2),o=i[0],s=i[1],d=Object(a.useState)(""),j=Object(h.a)(d,2),u=j[0],_=j[1],b=Object(a.useState)(!1),v=Object(h.a)(b,2),x=v[0],p=v[1];return Object(a.useEffect)((function(){p(!0),P.getPicture().then((function(e){s(null),p(!1),r(e.data.data)})).catch((function(){s("\u043e\u0448\u0438\u0431\u043a\u0430"),p(!1)}))}),[P]),Object(l.jsxs)("div",{className:E.a.container,children:[Object(l.jsx)("h1",{children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",value:u,onChange:function(e){_(e.currentTarget.value),s(null)}}),Object(l.jsx)("button",{onClick:function(){var e={first_name:u,id:+new Date};""!==(null===u||void 0===u?void 0:u.trim())?(r([e].concat(Object(m.a)(n))),_("")):s("\u043e\u0448\u0438\u0431\u043a\u0430")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(l.jsx)("div",{children:o})]}),x?Object(l.jsx)(A,{}):Object(l.jsx)(I,{employees:n,removeEmployee:function(e){r(n.filter((function(t){return t.id!==e})))}})]})}function F(){return Object(l.jsxs)(u.d,{children:[Object(l.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(l.jsx)(v,{})}}),Object(l.jsx)(u.b,{path:"/employees",render:function(){return Object(l.jsx)(S,{})}}),Object(l.jsx)(u.b,{path:"/404",render:function(){return Object(l.jsx)(O,{})}}),Object(l.jsx)(u.a,{from:"*",to:"/404"})]})}var H=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(F,{})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(H,{})})}),document.getElementById("root")),L()},9:function(e,t,n){e.exports={container:"Header_container__2gsPc",navigation:"Header_navigation__3k2Ej",navItem:"Header_navItem__AtvuR",navItemA:"Header_navItemA__1tdP0"}}},[[67,1,2]]]);
//# sourceMappingURL=main.53644d96.chunk.js.map