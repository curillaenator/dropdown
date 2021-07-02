(this.webpackJsonpdropdown=this.webpackJsonpdropdown||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var i,r,c,o,a,d,l=t(0),s=t.n(l),u=t(12),p=t.n(u),h=(t(21),t(2)),f=t(3),b="#000000",g="#212122",x="#ffffff",j="#757575",m="#CD4E4E",w="#21212254",O="#ffffff",k="#057DFF",v="#1A53BC",y="#DADEE7",C="#E64E4E",E="#AF4E4E",F="#F1F2F6",S="#F0F4FF",L=t(1),A=f.a.header(i||(i=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 99px;\n\n  .title {\n    font-style: normal;\n    font-weight: 600;\n    font-size: 152px;\n    line-height: 140px;\n    letter-spacing: 0.25px;\n    color: ",";\n    user-select: none;\n  }\n"])),b),D=function(n){var e=n.title;return Object(L.jsx)(A,{children:Object(L.jsx)("h1",{className:"title",children:e})})},N=t(10),z=t(16),B=t(4),W=f.a.div(r||(r=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: fit-content;\n  min-width: 294px;\n  height: 40px;\n  padding: 0 20px;\n  border-radius: 20px;\n  transition: 0.08s linear;\n  cursor: ",";\n  background-color: ",";\n\n  & > span {\n    font-style: normal;\n    font-weight: 400;\n    font-size: 15px;\n    line-height: 18px;\n    user-select: none;\n    color: ",";\n  }\n\n  & > svg {\n    margin-left: 16px;\n    transition: 0.08s linear;\n    transform: rotate(",");\n    fill: ",";\n  }\n\n  &:hover {\n    background-color: ",";\n\n    & > span {\n      color: ",";\n    }\n\n    & > svg {\n      fill: ",";\n    }\n  }\n\n  &:active {\n    background-color: ",";\n\n    & > span {\n      color: ",";\n    }\n\n    & > svg {\n      fill: ",";\n    }\n  }\n"])),(function(n){return n.disabled?"default":"pointer"}),(function(n){var e=n.open;switch(!0){case n.disabled:return F;case e:return v;default:return O}}),(function(n){var e=n.open;switch(!0){case n.disabled:return w;case e:return x;default:return g}}),(function(n){return n.open?"180deg":"0"}),(function(n){var e=n.open;switch(!0){case n.disabled:return w;case e:return x;default:return g}}),(function(n){return n.disabled?F:k}),(function(n){return n.disabled?w:x}),(function(n){return n.disabled?w:x}),(function(n){return n.disabled?F:v}),(function(n){return n.disabled?w:x}),(function(n){return n.disabled?w:x})),_=f.a.div(c||(c=Object(h.a)(["\n  position: absolute;\n  top: calc(40px + 16px);\n  right: 50%;\n  width: ",";\n  border-radius: 8px;\n  background-color: ",";\n  transform: translateX(50%);\n  overflow: hidden;\n  box-shadow: 0px 19px 38px rgba(33, 38, 44, 0.15),\n    0px 15px 12px rgba(33, 38, 44, 0.11);\n  z-index: 10;\n\n  .listgroup {\n    &_title {\n      display: flex;\n      align-items: center;\n      position: relative;\n      width: 100%;\n      min-height: 36px;\n      padding: 12px 16px;\n      font-style: normal;\n      font-weight: normal;\n      font-size: 13px;\n      line-height: 16px;\n      letter-spacing: 0.2px;\n      color: ",';\n      user-select: none;\n\n      &::after {\n        position: absolute;\n        content: "";\n        width: calc(100% - 16px);\n        height: 1px;\n        right: 0;\n        bottom: 0;\n        background-color: ',";\n      }\n    }\n  }\n"])),(function(n){var e=n.maxWidth;return e||"fit-content"}),O,j,y),M=f.a.button(o||(o=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  min-height: 36px;\n  padding: 9px 16px;\n  transition: 0.08s linear;\n  cursor: ",";\n  background-color: ",";\n\n  & > span {\n    width: calc(100% - 24px);\n    text-align: start;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 15px;\n    line-height: 18px;\n    color: ",";\n  }\n\n  & > svg {\n    flex-shrink: 0;\n    margin: 0 3px 0 7px;\n    opacity: ",";\n    transition: 0.08s linear;\n    fill: ",";\n  }\n\n  &:hover {\n    background-color: ",";\n\n    & > span {\n      color: ",";\n    }\n\n    & > svg {\n      fill: ",";\n    }\n  }\n\n  &:active {\n    background-color: ",";\n  }\n"])),(function(n){return"disabled"===n.look?"default":"pointer"}),(function(n){var e=n.look,t=n.checked;switch(!0){case"disabled"===e:return F;case t:return S;default:return"tranparent"}}),(function(n){switch(n.look){case"danger":return m;case"disabled":return j;default:return g}}),(function(n){return n.checked?"1":"0"}),(function(n){switch(n.look){case"danger":return m;case"disabled":return j;default:return g}}),(function(n){switch(n.look){case"danger":return C;case"disabled":return F;default:return k}}),(function(n){switch(n.look){case"disabled":return j;default:return x}}),(function(n){switch(n.look){case"disabled":return j;default:return x}}),(function(n){switch(n.look){case"danger":return E;case"disabled":return F;default:return v}})),T=f.a.div(a||(a=Object(h.a)(["\n  position: relative;\n"]))),I="dropdown/SET_OPEN",J="dropdown/SET_LIST",R={list:[],open:!1},Z=function(n,e){switch(e.type){case J:return Object(B.a)(Object(B.a)({},n),{},{list:e.payload});case I:return Object(B.a)(Object(B.a)({},n),{},{open:e.payload});default:return n}},H=function(n){return{type:I,payload:n}},P=function(n){return{type:J,payload:n}},X={arrow:Object(L.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",xmlns:"http://www.w3.org/2000/svg",children:Object(L.jsx)("path",{d:"M0.706206 2.41374L3.29621 5.00374C3.68621 5.39374 4.31621 5.39374 4.70621 5.00374L7.29621 2.41374C7.92621 1.78374 7.47621 0.703735 6.58621 0.703735H1.40621C0.516206 0.703735 0.0762062 1.78374 0.706206 2.41374Z"})}),check:Object(L.jsx)("svg",{width:"14",height:"12",viewBox:"0 0 14 12",xmlns:"http://www.w3.org/2000/svg",children:Object(L.jsx)("path",{d:"M4.32915 9.22918L1.43749 6.33751C1.28179 6.18146 1.07042 6.09377 0.849988 6.09377C0.629556 6.09377 0.418181 6.18146 0.262488 6.33751C-0.0625122 6.66251 -0.0625122 7.18751 0.262488 7.51251L3.74582 10.9958C4.07082 11.3208 4.59582 11.3208 4.92082 10.9958L13.7375 2.17917C14.0625 1.85417 14.0625 1.32917 13.7375 1.00418C13.5818 0.848131 13.3704 0.760437 13.15 0.760437C12.9296 0.760437 12.7182 0.848131 12.5625 1.00418L4.32915 9.22918Z"})})},q=function(n){var e=n.data,t=n.title,i=n.maxWidth,r=n.disabled,c=void 0!==r&&r,o=n.doSomeAjaxOnChange,a=Object(l.useRef)(null),d=Object(l.useReducer)(Z,R),s=Object(z.a)(d,2),u=s[0],p=s[1];Object(l.useEffect)((function(){return p(P(e))}),[e]),Object(l.useEffect)((function(){var n=function(n){a.current&&!a.current.contains(n.target)&&p(H(!1))};return document.addEventListener("click",n),function(){return document.removeEventListener("click",n)}}),[]);var h=u.list,f=u.open,b=Object(N.a)(new Set(h.map((function(n){return n.group}))));return Object(L.jsxs)(T,{ref:a,children:[Object(L.jsxs)(W,{open:f,disabled:c,onClick:function(){c||p(H(!f))},children:[Object(L.jsx)("span",{children:t}),X.arrow]}),f&&Object(L.jsx)(_,{maxWidth:i,children:b.map((function(n){return Object(L.jsxs)("div",{className:"listgroup",children:[Object(L.jsx)("h3",{className:"listgroup_title",children:n}),h.map((function(e,t){return e.group===n?Object(L.jsxs)(M,{look:e.type,checked:e.checked,onClick:function(){return function(n,e){if("disabled"!==n.type){var t=Object(B.a)(Object(B.a)({},n),{},{checked:!n.checked}),i=Object(N.a)(h);null===i||void 0===i||i.splice(e,1,t),o(i),p(P(i))}}(e,t)},children:[Object(L.jsx)("span",{children:e.title}),X.check]},e.id):null}))]},n)}))})]})},G=f.a.div(d||(d=Object(h.a)(["\n  width: 100%;\n  max-width: 1280px;\n  min-width: 1110px;\n  margin: 0 auto;\n  padding: 80px 92px;\n\n  .dropdowns {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 32px;\n  }\n"]))),K=[{id:"item1",group:"\u0413\u0440\u0443\u043f\u043f\u0430 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 1",title:"\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u043f\u0443\u043d\u043a\u0442",type:"normal",checked:!1},{id:"item2",group:"\u0413\u0440\u0443\u043f\u043f\u0430 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 1",title:"\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u043f\u0443\u043d\u043a\u0442",type:"normal",checked:!0},{id:"item3",group:"\u0413\u0440\u0443\u043f\u043f\u0430 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 1",title:"\u041f\u0443\u043d\u043a\u0442 disabled",type:"disabled",checked:!1},{id:"item4",group:"\u0413\u0440\u0443\u043f\u043f\u0430 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 2",title:"Danger \u043f\u0443\u043d\u043a\u0442",type:"danger",checked:!1},{id:"item5",group:"\u0413\u0440\u0443\u043f\u043f\u0430 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 2",title:"Danger \u043f\u0443\u043d\u043a\u0442",type:"danger",checked:!0},{id:"item6",group:"\u0413\u0440\u0443\u043f\u043f\u0430 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 2",title:"\u041f\u0443\u043d\u043a\u0442 disabled checked",type:"disabled",checked:!0}],Q=[{id:"item1",group:"\u0414\u043b\u0438\u043d\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0433\u0440\u0443\u043f\u043f\u044b, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0440\u043e\u043a",title:"\u0414\u043b\u0438\u043d\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0443\u043d\u043a\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u0441\u0440\u0430\u0437\u0443 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0440\u043e\u043a",type:"normal",checked:!1},{id:"item2",group:"\u0415\u0449\u0451 \u043e\u0434\u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u0430",title:"\u0414\u043b\u0438\u043d\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0443\u043d\u043a\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u0441\u0440\u0430\u0437\u0443 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0440\u043e\u043a",type:"danger",checked:!1},{id:"item3",group:"\u0415\u0449\u0451 \u043e\u0434\u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u0430",title:"\u0415\u0449\u0435 \u0431\u043e\u043b\u0435\u0435 \u0434\u043b\u0438\u043d\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0443\u043d\u043a\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u0441\u0440\u0430\u0437\u0443 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0440\u043e\u043a",type:"normal",checked:!1}],U=[{id:"item1",group:"1",title:"\u0410",type:"normal",checked:!1},{id:"item2",group:"1",title:"\u0411",type:"normal",checked:!1},{id:"item3",group:"2",title:"\u0412",type:"normal",checked:!1},{id:"item4",group:"2",title:"\u0413",type:"danger",checked:!1}],V=function(n){},Y=function(){return Object(L.jsxs)(G,{children:[Object(L.jsx)(D,{title:"\u0414\u0440\u043e\u043f\u0434\u0430\u0443\u043d "}),Object(L.jsxs)("section",{className:"dropdowns",children:[Object(L.jsx)(q,{data:K,title:"\u0414\u0440\u043e\u043f\u0434\u0430\u0443\u043d fit-content",doSomeAjaxOnChange:V}),Object(L.jsx)(q,{data:U,title:"\u0414\u0440\u043e\u043f\u0434\u0430\u0443\u043d lite",doSomeAjaxOnChange:V}),Object(L.jsx)(q,{data:Q,maxWidth:"340px",title:"\u0414\u0440\u043e\u043f\u0434\u0430\u0443\u043d 340",doSomeAjaxOnChange:V})]}),Object(L.jsx)("section",{className:"dropdowns",children:Object(L.jsx)(q,{data:K,title:"\u0414\u0440\u043e\u043f\u0434\u0430\u0443\u043d disabled",disabled:!0,doSomeAjaxOnChange:V})})]})};p.a.render(Object(L.jsx)(s.a.StrictMode,{children:Object(L.jsx)(Y,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.23613f67.chunk.js.map