(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},25:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),o=(a(30),a(3)),i=a(4),s=a(6),u=a(5),m=a(7),h=function(e){return l.a.createElement("div",null,"Menu bar")},b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"RightColumn pa4 black-80"},"We've found the following equivalent...")}}]),t}(n.Component),p=a(19),d=a(9),f=a(24),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={store:"coles",country:"australia"},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("nav",{className:"LeftColumn pa4 black-80"},l.a.createElement("div",null,"Enter the store you're finding an equivalent for..."),l.a.createElement("form",{className:"measure center"},l.a.createElement("fieldset",{className:"ba b--transparent ph0 mh0"},l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6 tl"},"Store name:"),l.a.createElement(f.a,{options:[{value:"coles",label:"Coles"},{value:"dick smith",label:"Dick Smith"},{value:"target",label:"Target"}]})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6 tl"},"Country name:"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent",type:"text",name:"country",value:this.state.country,onChange:this.handleChange})))))}}]),t}(n.Component),k=(a(17),a(18),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={ticked:"unticked"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){console.log("button pressed"),console.log(this.state.ticked)}},{key:"onChange",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"buttonPos"},l.a.createElement("button",{className:"ph3 mt4 f6 link dim ba ph3 pv2 mb2 dib black",href:"#0",onClick:this.handleClick},"Click to upvote this match!"))}}]),t}(n.Component)),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={leftcolumn:{},rightcolumn:{},voteButton:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,null),l.a.createElement("header",{className:"App-header"},l.a.createElement("p",null,"Compare the store!"),l.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"})),l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(k,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.866f51f7.chunk.js.map