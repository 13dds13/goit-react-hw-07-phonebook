(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={form:"ContactForm_form__1KRE_",btn:"ContactForm_btn__1hxRM",input:"ContactForm_input__3C3Ar"}},18:function(t){t.exports=JSON.parse('{"a":"https://phonebook-7777-default-rtdb.europe-west1.firebasedatabase.app/contacts"}')},22:function(t){t.exports=JSON.parse('{"a":{"name":"","number":""}}')},23:function(t,e,n){t.exports={listWrap:"ContactsList_listWrap__3MsaX",listItem:"ContactsList_listItem__2msw8",btn:"ContactsList_btn__2sHYA",name:"ContactsList_name__3gBT9",number:"ContactsList_number__FvviE"}},32:function(t,e,n){t.exports={wrap:"Filter_wrap__3ZZ-g",listWrap:"Filter_listWrap__5GVfB",listItem:"Filter_listItem__OPXmT",name:"Filter_name__SSS2z",number:"Filter_number__1R-sp",btn:"Filter_btn__3MXGS"}},33:function(t,e,n){t.exports={container:"Container_container__102KD",title:"Container_title__2Wfz0"}},34:function(t,e,n){t.exports={title:"Title_title__39gKr"}},4:function(t){t.exports=JSON.parse('{"alertMsg":"is already in contacts. Please change name.","allContacts":"All contacts:","search":"Search result:","inputName":"Enter name:","inputTel":"Enter number:","submitBtn":"Add to contacts","deleteBtn":"Delete","titleMain":"Phonebook","titleSecondary":"Contacts","inputSearch":"Find contact by name:","noDataToRender":"No contacts :("}')},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n(14),i=n.n(o),s=n(5),u=(n(45),n(2)),b=n(3),l=n(35),j=n(7),f=Object(u.b)("contacts/fetchContactsRequest"),d=Object(u.b)("contacts/fetchContactsSuccess"),O=Object(u.b)("contacts/fetchContactsError"),m=Object(u.b)("contacts/addContactRequest"),p=Object(u.b)("contacts/addContactSuccess"),h=Object(u.b)("contacts/addContactError"),_=Object(u.b)("contacts/removeContactRequest"),C=Object(u.b)("contacts/removeContactSuccess"),x=Object(u.b)("contacts/removeContactError"),v=Object(u.b)("contacts/setFilter"),g=Object(u.c)([],(c={},Object(b.a)(c,d,(function(t,e){return e.payload})),Object(b.a)(c,p,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.payload;return[].concat(Object(l.a)(t),[n])})),Object(b.a)(c,C,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),y=Object(u.c)(!1,(a={},Object(b.a)(a,f,(function(){return!0})),Object(b.a)(a,d,(function(){return!1})),Object(b.a)(a,O,(function(){return!1})),Object(b.a)(a,m,(function(){return!0})),Object(b.a)(a,p,(function(){return!1})),Object(b.a)(a,h,(function(){return!1})),Object(b.a)(a,_,(function(){return!0})),Object(b.a)(a,C,(function(){return!1})),Object(b.a)(a,x,(function(){return!1})),a)),N=Object(u.c)("",Object(b.a)({},v,(function(t,e){return e.payload}))),S=Object(j.b)({items:g,filter:N,isLoading:y}),F=n(4),w=function(t){return function(e){return function(n){if(n.type===m.type){var c=t.getState().contacts.items,a=n.payload.name,r=function(t,e){return t.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))}(c,a);if(r)return alert("".concat(a," ").concat(F.alertMsg)),r;e(n)}else e(n)}}},A=Object(u.a)({reducer:{contacts:S},middleware:function(t){return t().concat(w)}}),L=n(8),B=n(36),z=n(10),E=n(22),M=n(17),k=n.n(M),R=n(18),Z=function(t){return function(e){e(_()),k.a.delete("".concat(R.a,"/").concat(t,".json")).then(e(C(t))).catch((function(t){return e(x(t))}))}},J=n(11),T=n(15),q=function(t){return t.contacts.filter},I=function(t){return t.contacts.items},W=function(t){return t.contacts.isLoading},D=Object(T.a)([I,q],(function(t,e){return function(t,e){return e?{contacts:t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})),title:"".concat(F.search)}:{contacts:t,title:"".concat(F.allContacts)}}(t,e)})),K=n(1),P=function(t){var e=t.isLoading,n=Object(s.b)(),c=Object(s.c)(I),a=Object(r.useState)(Object(L.a)({},E.a)),o=Object(B.a)(a,2),i=o[0],u=o[1];Object(r.useEffect)((function(){u(Object(L.a)({},E.a))}),[c]);var l=i.name,j=i.number,f=Object(z.a)(),d=Object(z.a)(),O=function(t){var e=t.target,n=e.name,c=e.value;u((function(t){return Object(L.a)(Object(L.a)({},t),{},Object(b.a)({},n,c))}))},_=F.inputName,C=F.inputTel,x=F.submitBtn;return Object(K.jsxs)("form",{className:J.form,onSubmit:function(t){var e;t.preventDefault(),n((e=l,function(t){t(m(e))||k.a.post("".concat(R.a,".json"),e).then((function(n){var c=n.data.name;t(p(Object(L.a)(Object(L.a)({},e),{},{id:c})))})).catch((function(e){return t(h(e))}))}))},children:[Object(K.jsx)("label",{htmlFor:f,children:_}),Object(K.jsx)("input",{className:J.input,id:f,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",onChange:O,value:l}),Object(K.jsx)("label",{htmlFor:d,children:C}),Object(K.jsx)("input",{className:J.input,id:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autoComplete:"off",onChange:O,value:j}),Object(K.jsx)("button",{className:J.btn,type:"submit",disabled:e,children:x})]})},X=n(32),G=function(t){var e=t.filter,n=Object(s.b)(),c=Object(z.a)();return Object(K.jsxs)("div",{className:X.wrap,children:[Object(K.jsx)("label",{htmlFor:c,children:F.inputSearch}),Object(K.jsx)("input",{id:c,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",onChange:function(t){var e=t.target.value;n(v(e))},value:e})]})},$=n(23),H=n.n($),V=function(t){var e=t.contact,n=t.removeContact,c=t.styles,a=t.deleteBtn,r=Object(s.b)(),o=c.listItem,i=c.name,u=c.number,b=c.btn;return Object(K.jsxs)("li",{className:o,children:[" ",Object(K.jsxs)("p",{className:i,children:[e.name,": ",Object(K.jsx)("span",{className:u,children:e.number})]}),Object(K.jsx)("button",{className:b,type:"button",onClick:function(){return r(n(e.id))},children:a})]})},Y=function(){var t=Object(s.c)(D),e=t.title,n=t.contacts,c=F.deleteBtn,a=F.noDataToRender;return n.length?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("p",{children:e}),Object(K.jsx)("ul",{className:H.a.listWrap,children:n.map((function(t){return Object(K.jsx)(V,{contact:t,removeContact:Z,styles:H.a,deleteBtn:c},t.id)}))})]}):Object(K.jsx)("p",{children:a})},Q=n(33),U=n.n(Q),tt=n(34),et=n.n(tt),nt=function(t){var e=t.title;return Object(K.jsx)("h2",{className:et.a.title,children:e})},ct=F.titleMain,at=F.titleSecondary,rt=function(){var t=Object(s.b)(),e=Object(s.c)(q),n=Object(s.c)(W);return Object(r.useEffect)((function(){t((function(t){t(f()),k()("".concat(R.a,".json")).then((function(e){var n=e.data;if(n){var c=Object.keys(n).map((function(t){return Object(L.a)(Object(L.a)({},n[t]),{},{id:t})}));t(d(c))}})).catch((function(e){return t(O(e))}))}))}),[t]),Object(K.jsxs)("div",{className:U.a.container,children:[Object(K.jsx)(nt,{title:ct}),Object(K.jsx)(P,{isLoading:n}),Object(K.jsx)(nt,{title:at}),Object(K.jsx)(G,{filter:e}),n?Object(K.jsx)("p",{children:"Loading..."}):Object(K.jsx)(Y,{})]})};n(65);i.a.render(Object(K.jsx)(s.a,{store:A,children:Object(K.jsx)(rt,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.54b02a5d.chunk.js.map