(this.webpackJsonpsentakuwatch=this.webpackJsonpsentakuwatch||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(5),l=a.n(c),o=(a(24),a(25),a(13)),i=a(14),r=a(3),h=a(19),d=a(18),u=a(16),j=a(17),b=(a(26),a(15)),O=a.n(b),m=a(1),p=function(e){var t=e.using-e.param!==0?100-e.using/e.param*100:0;return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:e.isShow?"showCard":"notDisplay",children:Object(m.jsxs)("div",{className:"contents",children:[Object(m.jsxs)("p",{children:[e.floor," \u968e\u306e"," ",""===e.machine?"":"washer"===e.machine?"\u6d17\u6fef\u6a5f":"\u4e7e\u71e5\u6a5f"," ","\u306e\u7a7a\u304d\u72b6\u6cc1"]}),Object(m.jsx)(O.a,{animate:!0,responsive:!0,progress:t,textColor:"#808080",progressColor:"#00fa9a",roundedStroke:!0,bgColor:""}),Object(m.jsxs)("p",{children:[e.param-e.using," \u53f0\u304c\u4f7f\u7528\u53ef\u80fd\u3067\u3059"]})]})})})},v=(a(28),a(6)),x=a.n(v);x.a.setAppElement("#root");var f=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={showModal:!1,showCard:!1,parameter:0,using:0,selectedValueAtFloor:"\u968e\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",selectedValueAtMachine:"\u6d17\u6fef\u6a5f\u304b\u4e7e\u71e5\u6a5f\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"},n.handleOpenModal=n.handleOpenModal.bind(Object(r.a)(n)),n.handleCloseModal=n.handleCloseModal.bind(Object(r.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n}return Object(i.a)(a,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"handleSubmit",value:function(e){var t=this,a={floor:this.state.selectedValueAtFloor,machine:this.state.selectedValueAtMachine},n=new URLSearchParams(a);fetch("Access-Control-Allow-Origin: http://localhost:8888/number?".concat(n),{mode:"cors"}).then((function(e){return e.json()})).then((function(e){t.state.parameter=e.parameter,t.state.using=e.using})).catch((function(e){console.log(e),alert("\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f"),t.setState({showCard:!1})})),this.setState({showModal:!1}),this.setState({showCard:!0}),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"searchBody",children:[Object(m.jsx)("div",{className:"container",onClick:function(){return e.handleOpenModal()},children:Object(m.jsx)("div",{className:"searchIcon",children:Object(m.jsx)(u.a,{})})}),Object(m.jsxs)(x.a,{isOpen:this.state.showModal,onRequestClose:function(){return e.handleCloseModal()},overlayClassName:"overlay",className:"contentModal",children:[Object(m.jsx)("div",{className:"closeIcon",onClick:function(){return e.handleCloseModal()},children:Object(m.jsx)(j.a,{})}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,className:"contents",children:[Object(m.jsxs)("select",{className:"selectBox",value:this.state.selectedValueAtFloor,onChange:function(t){return e.setState({selectedValueAtFloor:t.target.value})},children:[Object(m.jsx)("option",{hidden:!0,disabled:!0,children:"\u968e\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"}),Object(m.jsx)("option",{value:"2",children:"2\u968e"}),Object(m.jsx)("option",{value:"3",children:"3\u968e"}),Object(m.jsx)("option",{value:"4",children:"4\u968e"})]}),Object(m.jsxs)("select",{className:"selectBox",value:this.state.selectedValueAtMachine,onChange:function(t){return e.setState({selectedValueAtMachine:t.target.value})},children:[Object(m.jsx)("option",{hidden:!0,disabled:!0,children:"\u6d17\u6fef\u6a5f\u304b\u4e7e\u71e5\u6a5f\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"}),Object(m.jsx)("option",{value:"washer",children:"\u6d17\u6fef\u6a5f"}),Object(m.jsx)("option",{value:"dryer",children:"\u4e7e\u71e5\u6a5f"})]}),Object(m.jsx)("button",{type:"submit",className:"enter",children:"\u691c\u7d22"})]})]}),Object(m.jsx)(p,{floor:this.state.selectedValueAtFloor,machine:this.state.selectedValueAtMachine,param:this.state.parameter,using:this.state.using,isShow:this.state.showCard})]})}}]),a}(s.a.Component);var C=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("div",{className:"App-header",children:Object(m.jsx)(f,{})})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),c(e),l(e)}))};l.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),g()}},[[40,1,2]]]);
//# sourceMappingURL=main.1a76cac4.chunk.js.map