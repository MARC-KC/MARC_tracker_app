(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(t,e,n){},44:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),i=n(16),r=n.n(i),s=(n(24),n(4)),o=n(7),u=n.n(o),l=n(17),p=n(19),d=n(18),j=n.n(d),h=(n(44),n(0)),m=function(){var t=Object(a.useState)([]),e=Object(p.a)(t,2),n=e[0],c=e[1],i=function(){var t=Object(l.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://gis2.marc2.org/marcdataapi/api/covidvaccination");case 2:e=t.sent,n=e.data,console.log(n),c(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){i()}),[]);var r=n.filter((function(t){return"Missouri"===t.Jurisdiction})).sort((function(t,e){return t.Date-e.Date})).map((function(t){return t.RegimenCompleted_Count})),o=n.filter((function(t){return"Kansas"===t.Jurisdiction})).sort((function(t,e){return t.Date-e.Date})).map((function(t){return t.RegimenCompleted_Count})),d=Math.max.apply(Math,Object(s.a)(r)),m=Math.max.apply(Math,Object(s.a)(o));return Object(h.jsx)("div",{className:"wrapper",children:n.length>0?Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("p",{children:["Total Missouri: ",Math.max.apply(Math,Object(s.a)(r))]}),Object(h.jsxs)("p",{children:["Total Kansas: ",Math.max.apply(Math,Object(s.a)(o))]}),Object(h.jsxs)("h1",{children:[" Total: ",d+m]}),n.filter((function(t){return"Missouri"===t.Jurisdiction||"Kansas"===t.Jurisdiction})).sort((function(t,e){return t.Date-e.Date})).map((function(t){return Object(h.jsxs)("div",{className:"post",children:[Object(h.jsxs)("small",{style:{marginBottom:0},children:[t.Jurisdiction," | "]}),Object(h.jsxs)("small",{children:[t.Date," | "]}),Object(h.jsx)("small",{children:t.RegimenCompleted_Count})]})}))]}):Object(h.jsx)("p",{className:"loading",children:"Loading... "})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),f()}},[[46,1,2]]]);
//# sourceMappingURL=main.e5a8c191.chunk.js.map