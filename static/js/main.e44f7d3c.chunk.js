(this["webpackJsonpigv-calculator"]=this["webpackJsonpigv-calculator"]||[]).push([[0],{16:function(t,e,a){t.exports=a(28)},21:function(t,e,a){},27:function(t,e,a){},28:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),l=a(14),r=a.n(l),c=a(5),s=a(6),i=a(9),u=a(7),m=a(10),p=a(8),h=(a(21),function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar"})}}]),e}(n.Component)),b=a(30),v=a(31),g=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"letterAmount text-center pt-2"},"Son: ","Vente y 00/100 soles")}}]),e}(n.Component),f=function(t){function e(){return Object(c.a)(this,e),Object(i.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement(b.a,{className:"calculator"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"",className:"form-label"},"Subtotal"),o.a.createElement("input",{type:"number",inputMode:"numeric",pattern:"[0-9]*",className:"form-control",onKeyPress:this.isDecimal,value:this.props.calculatorData.subtotal,onChange:this.props.onChangeSubtotal})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"",className:"form-label"},"IGV (18%)"),o.a.createElement("input",{type:"text",value:this.props.calculatorData.igv,className:"form-control",disabled:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"",className:"form-label"},"Total"),o.a.createElement("input",{type:"text",className:"form-control",inputmode:"numeric",pattern:"[0-9]*",value:this.props.calculatorData.total,onChange:this.props.onChangeTotal})),o.a.createElement(g,null),o.a.createElement(v.a,{type:"submit",onClick:this.props.newOperation},"Nueva operaci\xf3n"))}},{key:"isDecimal",value:function(t){}}]),e}(n.Component),O=.18,d=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(i.a)(this,Object(u.a)(e).call(this))).state={calculatorData:{subtotal:"",igv:"",total:""}},t.onChangeSubtotal=function(e){var a=parseFloat(e.target.value);t.setState({calculatorData:{subtotal:a,igv:t.twoDecimals(a*O),total:t.twoDecimals(a*(1+O))}}),console.log("evtent",e.target.value)},t.onChangeTotal=function(e){var a=parseFloat(e.target.value);t.setState({calculatorData:{subtotal:t.twoDecimals(a/(1+O)),igv:t.twoDecimals(a/(1+O)*O),total:a}}),console.log("evtent",e.target.value)},console.log("constructor-app"),t.newOperation=t.newOperation.bind(Object(m.a)(t)),t}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement(f,{calculatorData:this.state.calculatorData,onChangeSubtotal:this.onChangeSubtotal,onChangeTotal:this.onChangeTotal,newOperation:this.newOperation}))}},{key:"newOperation",value:function(){this.setState({calculatorData:{subtotal:"",igv:"",total:""}}),console.log("bkdsajk")}},{key:"twoDecimals",value:function(t){return(Math.round(100*t)/100).toFixed(2)}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(26),a(27);r.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.e44f7d3c.chunk.js.map