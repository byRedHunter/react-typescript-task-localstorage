(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(7),i=n.n(r),o=(n(13),n(4)),l=n(6);var d=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)([{name:"Mi primera Tarea",done:!1}]),i=Object(l.a)(r,2),d=i[0],b=i[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("tasks");if(e){var t=JSON.parse(e);b(t)}}),[]),Object(c.jsxs)("div",{className:"container p-4",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){var t=[].concat(Object(o.a)(d),[{name:e,done:!1}]);localStorage.setItem("tasks",JSON.stringify(t)),b(t)}(n),s("")},children:[Object(c.jsx)("input",{className:"form-control",type:"text",onChange:function(e){return s(e.target.value)},value:n,autoFocus:!0}),Object(c.jsx)("button",{className:"btn btn-success btn-block mt-2",children:"Save"})]})})})})}),Object(c.jsx)("div",{className:"row",children:d.map((function(e,t){return Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsxs)("div",{className:"card card-body mt-2",children:[Object(c.jsx)("h2",{style:{textDecoration:e.done?"line-through":""},children:e.name}),Object(c.jsxs)("div",{className:"btn-group",children:[Object(c.jsx)("button",{className:"px-5 btn btn-warning",onClick:function(){return function(e){var t=Object(o.a)(d);t[e].done=!t[e].done,b(t),localStorage.setItem("tasks",JSON.stringify(d))}(t)},children:e.done?"\u2714":"\u2716"}),Object(c.jsx)("button",{className:"px-5 btn btn-danger",onClick:function(){return function(e){var t=Object(o.a)(d);t.splice(e,1),b(t),localStorage.setItem("tasks",JSON.stringify(d))}(t)},children:"\ud83d\udca3"})]})]})},t)}))})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(14);i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.8e110439.chunk.js.map