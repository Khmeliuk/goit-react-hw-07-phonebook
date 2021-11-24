(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={listItem:"ContactList_listItem__1Cfmh",buttom:"ContactList_buttom__VzWfU",contacts:"ContactList_contacts__4FX7H"}},19:function(t,e,n){t.exports={title:"Filter_title__1ZoX1",input:"Filter_input__2dawl"}},60:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(13),o=n.n(r),u=n(5),b=n(1);function i(t){var e=t.title,n=t.children;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e}),n]})}var s=n(15),l=n.n(s),j=n(10),O=n.n(j),d=n(2),f=Object(d.b)("filter"),h=Object(d.b)("addContactSuccess"),m=Object(d.b)("addContactRequest"),p=Object(d.b)("addContactError"),_=Object(d.b)("deleteContactSuccess"),v=Object(d.b)("deleteContactRequest"),x=Object(d.b)("deleteContactError"),C=Object(d.b)("fetchContactRequest"),N=Object(d.b)("fetchContactSuccess"),k=Object(d.b)("fetchContactError");O.a.defaults.baseURL="http://localhost:3000";var g=n(8),y=function(t){return t.contacts.filter},w=Object(g.a)([y,function(t){return t.contacts.items}],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}));function S(){var t=Object(u.c)(w),e=Object(u.b)();return Object(b.jsx)("ul",{className:l.a.contacts,children:t.map((function(t){return Object(b.jsxs)("li",{className:l.a.listItem,children:[t.name,": ",t.number,Object(b.jsx)("button",{className:l.a.buttom,type:"button",onClick:function(){return e((n=t.id,function(t){t(v()),O.a.delete("contacts/".concat(n),n).then((function(){return t(_({id:n}))})).catch((function(e){return t(x(e))}))}));var n},children:"Delete"})]},t.id)}))})}var P=n(16),F=n(7),L=n.n(F),q=n(62);function A(){var t=Object(c.useState)(""),e=Object(P.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(P.a)(r,2),s=o[0],l=o[1],j=Object(c.useState)(""),d=Object(P.a)(j,2),f=d[0],_=d[1],v=Object(u.b)();function x(t){switch(t.currentTarget.name){case"name":a(t.currentTarget.value),_(Object(q.a)());break;case"number":l(t.currentTarget.value),_(Object(q.a)());break;default:return}}return Object(b.jsxs)("div",{className:L.a.phonebook,children:[Object(b.jsx)(i,{title:"Phonebook"}),Object(b.jsx)("form",{className:L.a.form,onSubmit:function(t){var e;t.preventDefault(),v((e={name:n,number:s,id:f},function(t){t(m()),O.a.post("contacts",e).then((function(e){var n=e.data;return t(h(n))})).catch((function(e){return t(p(e))}))})),a(""),l(""),_("")},children:Object(b.jsxs)("label",{className:L.a.label,htmlFor:"name",children:[Object(b.jsx)("p",{className:L.a.labelName,children:"Name"}),Object(b.jsx)("input",{className:L.a.input,onChange:x,value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0}),Object(b.jsx)("p",{className:L.a.labelName,children:"Number"}),Object(b.jsx)("input",{className:L.a.input,value:s,onChange:x,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(b.jsx)("button",{className:L.a.button,type:"submit",children:"Add contact"})]})})]})}var E=n(19),J=n.n(E),z=function(){var t=Object(u.c)((function(t){return y(t)})),e=Object(u.b)();return Object(b.jsxs)("label",{htmlFor:"filter",children:[Object(b.jsx)("h3",{className:J.a.title,children:"Find contact by name"}),Object(b.jsx)("input",{name:"filter",className:J.a.input,type:"text",value:t,onChange:function(t){var n=t.currentTarget.value;e(f(n))}})]})},I=n(29),R=n.n(I);function T(){var t=Object(u.c)((function(t){return t.contacts.loading})),e=Object(u.b)();Object(c.useEffect)((function(){t||e((function(t){t(C),O.a.get("/contacts").then((function(e){var n=e.data;return t(N(n))})).catch((function(e){return t(k(e))}))}))}),[e,t]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(A,{}),Object(b.jsxs)(i,{title:"Contacts",children:[Object(b.jsx)(z,{}),Object(b.jsx)(S,{}),t&&Object(b.jsx)(R.a,{type:"spinningBubbles",color:"#2b2c6d",height:100,width:100})]})]})}var Z,B,D=n(6),G=n(3),K=Object(d.c)("",Object(G.a)({},f,(function(t,e){return e.payload}))),U=n(30),X=Object(d.c)([],(Z={},Object(G.a)(Z,N,(function(t,e){return e.payload})),Object(G.a)(Z,h,(function(t,e){var n=e.payload;if(!t.find((function(t){return t.name===n.name})))return[].concat(Object(U.a)(t),[n]);alert("".concat(n.name," is already in contact"))})),Object(G.a)(Z,_,(function(t,e){var n=e.payload;return t.filter((function(t){var e=t.id;return n!==e}))})),Z)),H=Object(d.c)(!1,(B={},Object(G.a)(B,m,(function(){return!0})),Object(G.a)(B,h,(function(){return!1})),Object(G.a)(B,p,(function(){return!1})),Object(G.a)(B,_,(function(){return!1})),Object(G.a)(B,v,(function(){return!0})),Object(G.a)(B,x,(function(){return!1})),Object(G.a)(B,C,(function(){return!0})),Object(G.a)(B,N,(function(){return!1})),Object(G.a)(B,k,(function(){return!1})),B)),M=Object(D.b)({items:X,filter:K,loading:H}),V=Object(d.a)({reducer:{contacts:M}});o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(u.a,{store:V,children:Object(b.jsx)(T,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={phonebook:"Phonebook_phonebook__2v8Jk",form:"Phonebook_form__u5lva",label:"Phonebook_label__3KG2Y",input:"Phonebook_input__5K84G",button:"Phonebook_button__JJydd",labelName:"Phonebook_labelName__2Ab37"}}},[[60,1,2]]]);
//# sourceMappingURL=main.eee10e96.chunk.js.map