(this["webpackJsonppart2-exc-2.6-2.10"]=this["webpackJsonppart2-exc-2.6-2.10"]||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),u=t(6),a=t.n(u),o=(t(20),t(7)),i=t(4),s=t(3),d=t.n(s),j=t(0),b=function(e){var n=e.searchName,t=e.setSearchName;return Object(j.jsxs)("div",{children:["Search for name: ",Object(j.jsx)("input",{value:n,onChange:function(e){return t(e.target.value)}})]})},f=function(e){var n=e.newName,t=e.setNewName,r=e.newNumber,c=e.setNewNumber,u=e.handleAddPerson;return Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{children:["name: ",Object(j.jsx)("input",{value:n,onChange:function(e){return t(e.target.value)}})]}),Object(j.jsxs)("div",{children:["number: ",Object(j.jsx)("input",{value:r,onChange:function(e){return c(e.target.value)}})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:u,children:"add"})})]})},l=function(e){var n=e.person,t=e.deletePerson;return Object(j.jsxs)("ul",{children:[n.name," ",n.number,Object(j.jsx)("button",{onClick:function(){return t(n.id,n.name)},children:"delete"})," "]})},h=function(e){var n=e.persons,t=e.deletePerson;return console.log(n),n.map((function(e){return Object(j.jsx)(l,{person:e,deletePerson:t},e.name)}))},m="/api/persons",O=function(){return d.a.get(m).then((function(e){return e.data}))},p=function(e){return d.a.post(m,e).then((function(e){return e.data}))},v=function(e,n){var t=m+"/"+e;return d.a.put(t,n).then((function(e){return e.data}))},x=function(e){return d.a.delete(m+"/"+e).then((function(e){return e.data}))},w=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],u=Object(r.useState)(""),a=Object(i.a)(u,2),s=a[0],d=a[1],l=Object(r.useState)(""),m=Object(i.a)(l,2),w=m[0],N=m[1],g=Object(r.useState)(""),C=Object(i.a)(g,2),P=C[0],S=C[1];Object(r.useEffect)((function(){O().then((function(e){c(e)}))}),[]);var k=t.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(b,{searchName:P,setSearchName:S}),Object(j.jsx)("h2",{children:"add a new"}),Object(j.jsx)(f,{newName:s,setNewName:d,newNumber:w,setNewNumber:N,handleAddPerson:function(e){e.preventDefault();var n=t.map((function(e){return e.name})),r={name:s,number:w};n.includes(s)?function(e){var n=s+" is already added to phonebook, replace the old number with a new one?",r=window.confirm(n),u=Object(o.a)(Object(o.a)({},e),{},{number:w});r&&v(u.id,u).then((function(e){c(t.map((function(n){return n.id!==e.id?n:e})))}))}(t.find((function(e){return e.name===s}))):function(e){p(e).then((function(n){c(t.concat(e))}))}(r),d(""),N("")}}),Object(j.jsx)("h2",{children:"Numbers"}),Object(j.jsx)(h,{persons:k,deletePerson:function(e,n){var r="Delete "+n+" ?";window.confirm(r)&&(x(e),c(t.filter((function(n){return n.id!==e}))))}})]})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,u=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),u(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),N()}},[[40,1,2]]]);
//# sourceMappingURL=main.409c3a87.chunk.js.map