(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(39)},18:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(11),c=t.n(r),u=(t(18),t(2)),i=function(e){var n=e.person,t=e.removeHandler;return o.a.createElement("div",null,n.name," ",n.number,o.a.createElement("button",{onClick:function(){return t(n)}},"poista"))},l=function(e){var n=e.persons,t=e.filter,a=e.handlePersonRemove;return o.a.createElement("div",null,n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}).map(function(e){return o.a.createElement(i,{key:e.name,person:e,removeHandler:a})}))},m=function(e){var n=e.filter,t=e.onChange;return o.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4",o.a.createElement("input",{value:n,onChange:t}))},s=function(e){return o.a.createElement("form",{onSubmit:e.onSubmit},o.a.createElement("div",null,"nimi: ",o.a.createElement("input",{value:e.name,onChange:e.onNameChange})),o.a.createElement("div",null,"numero: ",o.a.createElement("input",{value:e.number,onChange:e.onNumberChange})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},f=t(3),v=t.n(f),h="/api/persons",d=function(){return v.a.get(h).then(function(e){return e.data})},b=function(e){return v.a.post(h,e).then(function(e){return e.data})},p=function(e){return v.a.delete("".concat(h,"/").concat(e))},E=function(e){var n=e.type,t=e.message;return""===t?null:o.a.createElement("div",{className:n},t)},g=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),f=i[0],v=i[1],h=Object(a.useState)(""),g=Object(u.a)(h,2),w=g[0],j=g[1],O=Object(a.useState)(""),C=Object(u.a)(O,2),k=C[0],S=C[1],y=Object(a.useState)(""),N=Object(u.a)(y,2),P=N[0],J=N[1],L=Object(a.useState)(""),B=Object(u.a)(L,2),H=B[0],R=B[1],T=function(){d().then(function(e){r(e)})};Object(a.useEffect)(function(){T()},[]);var W=function(e){J(e),setTimeout(function(){J("")},5e3)},x=function(e){R(e),setTimeout(function(){R("")},5e3)};return o.a.createElement("div",null,o.a.createElement(E,{type:"success",message:P}),o.a.createElement(E,{type:"error",message:H}),o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement(m,{filter:k,onChange:function(e){S(e.target.value)}}),o.a.createElement("h3",null,"lis\xe4\xe4 uusi"),o.a.createElement(s,{onSubmit:function(e){e.preventDefault(),function(e){b(e).then(function(n){r(t.concat(n)),v(""),j(""),W("Lis\xe4ttiin ".concat(e.name))}).catch(function(e){x(e.response.data.error),T()})}({name:f,number:w})},name:f,onNameChange:function(e){v(e.target.value)},number:w,onNumberChange:function(e){j(e.target.value)}}),o.a.createElement("h3",null,"Numerot"),o.a.createElement(l,{persons:t,filter:k,handlePersonRemove:function(e){window.confirm("Poistetaanko ".concat(e.name))&&p(e.id).then(function(){T(),W("Poistettiin ".concat(e.name))}).catch(function(n){x("Jotakin meni pieleen, mink\xe4 vuoksi henkil\xf6\xe4 ".concat(e.name," ei v\xe4ltt\xe4m\xe4tt\xe4 poistettu puhelinluettelosta")),T()})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.48dfc474.chunk.js.map