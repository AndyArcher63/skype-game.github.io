(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{10:function(e,t,a){e.exports={nav:"Navigation_nav__2AsUs",navigationButton:"Navigation_navigationButton__Wmxmk",active:"Navigation_active__3kWJm",navItems:"Navigation_navItems__nqsZT"}},17:function(e,t,a){e.exports={invis:"Button_invis__6jefr"}},21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),l=a.n(o),c=a(9),i=(a(26),a(3)),s=a(4),u=a(5),m=a.n(u),_=function(e){var t=e.direction,a=e.text,n=e.disabled;return r.a.createElement("div",null,r.a.createElement("div",{className:m.a.arrow},r.a.createElement("span",{className:[m.a.icon,m.a[t],n?null:m.a.disabled].join(" ")},"\u2191")),a&&r.a.createElement("p",{className:m.a.text},a))},b=a(20),v=a(17),p=a.n(v),f=function(e){var t=e.show,a=e.invisible,n=e.children,o=e.onClick,l=e.className,c=Object(b.a)(e,["show","invisible","children","onClick","className"]);return t||void 0===t?r.a.createElement("button",Object.assign({type:"button",className:[l,a?p.a.invis:null].join(" "),onClick:o},c),n):null},w=a(6),E=a.n(w),d=function(){var e=Object(n.useState)("up"),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),c=Object(i.a)(l,2),s=c[0],u=c[1],m=function(e){o(e),u(!0)};return r.a.createElement(n.Fragment,null,r.a.createElement(f,{show:!s,invisible:!0,className:E.a.button,onClick:function(){return m("up")}},"Up"),r.a.createElement("div",{className:E.a.App},r.a.createElement(_,{direction:a,disabled:s,text:s?void 0:"Please Choose"})),r.a.createElement(f,{show:!s,onClick:function(){return m("down")},invisible:!0,className:[E.a.button,E.a.bottom].join(" ")},"Down"),r.a.createElement(f,{show:s,invisible:!0,onClick:function(){u(!1)},className:E.a.reset},"reset"))},h=a(7),g=a.n(h),N=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),c=Object(i.a)(l,2),s=c[0],u=c[1],m=function(e){u(!0),o(e)};return r.a.createElement(n.Fragment,null,r.a.createElement(f,{show:!s,className:g.a.button,onClick:function(){return m("True")}},"True"),r.a.createElement("div",{className:g.a.App},r.a.createElement("p",{className:g.a.answer},a)),r.a.createElement(f,{show:!s,onClick:function(){return m("False")},className:g.a.button},"False"),r.a.createElement(f,{show:s,invisible:!0,onClick:function(){return o(""),void u(!1)},className:g.a.reset},"reset"))},j=function(){return r.a.createElement("div",null,"Welcome")},k=a(10),O=a.n(k),x=function(e){var t=e.toggleNav,a=e.toggle;return r.a.createElement("div",{className:O.a.nav},r.a.createElement("nav",{className:a?"active":void 0},r.a.createElement("ul",{className:O.a.navItems},[{label:"Home",url:"/"},{label:"Higher / Lower",url:"/higher-lower"},{label:"True / False",url:"/true-false"}].map((function(e){return r.a.createElement("li",{key:e.label},r.a.createElement(c.b,{to:e.url},e.label))})))),r.a.createElement(f,{className:[O.a.navigationButton,a?O.a.active:null].join(" "),onClick:function(){return t()}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))};var A=function(){var e=Object(s.f)(),t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],l=a[1],c=Object(n.useCallback)((function(){l((function(e){return!e}))}),[l]);return Object(n.useEffect)((function(){c()}),[e,c]),r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/higher-lower",component:d}),r.a.createElement(s.a,{path:"/true-false",component:N}),r.a.createElement(s.a,{path:"/",component:j})),r.a.createElement(x,{toggleNav:c,toggle:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.a,{basename:"/skype-game"},r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports={arrow:"Arrow_arrow__3TM91",icon:"Arrow_icon__1ZcJf",disabled:"Arrow_disabled__3xaFn",up:"Arrow_up__fXLqB",down:"Arrow_down__3Qfun",text:"Arrow_text__1TMb0"}},6:function(e,t,a){e.exports={App:"HigherLower_App__2bub2",button:"HigherLower_button__1U5WW",bottom:"HigherLower_bottom__3Mbl8",reset:"HigherLower_reset__dBGhp"}},7:function(e,t,a){e.exports={App:"TrueFalse_App__1piuC",answer:"TrueFalse_answer__2iB5Z",button:"TrueFalse_button__3Db5Q",reset:"TrueFalse_reset__136PL"}}},[[21,1,2]]]);
//# sourceMappingURL=main.e0b0b229.chunk.js.map