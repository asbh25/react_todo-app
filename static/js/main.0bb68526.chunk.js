(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(6),o=n.n(l),r=(n(14),n(15),n(16),n(1)),i=n(8),u=n(2),s="All",m="Active",d="Completed",f=function(e){var t=e.filter,n=e.setFilter;return c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("a",{href:"#/",className:t===s?"selected":"",onClick:function(){return n(s)}},s)),c.a.createElement("li",null,c.a.createElement("a",{href:"#/active",className:t===m?"selected":"",onClick:function(){return n(m)}},m)),c.a.createElement("li",null,c.a.createElement("a",{href:"#/completed",className:t===d?"selected":"",onClick:function(){return n(d)}},d)))},p=n(7),E=n.n(p),b=function(e){var t=e.todo,n=e.toggleStatus,l=e.deleteTodo,o=e.editTitle,r=Object(a.useState)(!1),i=Object(u.a)(r,2),s=i[0],m=i[1],d=Object(a.useState)(t.title),f=Object(u.a)(d,2),p=f[0],b=f[1];return c.a.createElement("li",{key:t.id,className:E()({completed:t.completed,editing:s})},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(){return n(t.id)}}),c.a.createElement("label",{onDoubleClick:function(){return m(!0)}},t.title),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return l(t.id)}})),s&&c.a.createElement("input",{autoFocus:!0,type:"text",className:"edit",defaultValue:t.title,onChange:function(e){b(e.target.value.trim())},onKeyDown:function(e){"Enter"===e.key&&(o(t.id,p),p||l(t.id),m(!1)),"Escape"===e.key&&(b(t.title),m(!1))},onBlur:function(){o(t.id,p),p||l(t.id),m(!1)}}))},g=function(e){var t=e.todos,n=e.setTodos,a=function(e){n(t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})))},l=function(e){n(t.filter((function(t){return t.id!==e})))},o=function(e,a){n(t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{title:a}):t})))};return c.a.createElement("ul",{className:"todo-list"},t.map((function(e){return c.a.createElement(b,{todo:e,toggleStatus:a,deleteTodo:l,editTitle:o})})))},h=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(""),p=Object(u.a)(o,2),E=p[0],b=p[1],h=Object(a.useState)(s),O=Object(u.a)(h,2),N=O[0],j=O[1],k=n.filter((function(e){return!e.completed})),v=n.filter((function(e){return e.completed})),y=n.filter((function(e){switch(N){case d:return e.completed;case m:return!e.completed;default:return e}}));return Object(a.useEffect)((function(){JSON.parse(localStorage.getItem("todos"))&&l(JSON.parse(localStorage.getItem("todos")))}),[]),Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l([].concat(Object(i.a)(n),[{title:E,id:+new Date,completed:!1}])),b("")}},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:E,onChange:function(e){var t=e.target;return b(t.value.trimLeft())}}))),n&&c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:n.every((function(e){return e.completed})),onClick:function(e){l(n.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{completed:e.target.checked})})))}}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement(g,{todos:y,setTodos:l})),n.length>0&&c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},"".concat(k.length," item(s) left")),c.a.createElement(f,{filter:N,setFilter:j}),v.length>0&&c.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){return l(k)}},"Clear completed")))};var O=function(){return c.a.createElement("section",{className:"todoapp"},c.a.createElement(h,null))};o.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.0bb68526.chunk.js.map