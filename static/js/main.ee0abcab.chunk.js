(this["webpackJsonpai-photo-generator"]=this["webpackJsonpai-photo-generator"]||[]).push([[0],{23:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(13),c=n.n(o),s=n(18),i=(n(23),n(14)),h=n(17),j=n.n(h),b=n(3);var d=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(i.a,{children:Object(b.jsx)("title",{children:"AI Photo Generator"})}),Object(b.jsx)("h1",{children:"AI Photo Generator"}),n&&Object(b.jsx)("img",{src:n,alt:"AIPhoto"}),Object(b.jsx)("button",{type:"button",onClick:function(){j.a.get("https://api.generated.photos/api/v1/faces?api_key=w1L9Y8WCeMxCyxuxGeAeSg&order_by=random").then((function(e){var t=e.data.faces[0].urls[4][512];t&&a(t)}))},children:"Generate New Image"})]})};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ee0abcab.chunk.js.map