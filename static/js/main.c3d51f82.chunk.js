(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},20:function(e){e.exports={Coles:["Tesco","Sainbury's","Waitrose"],KMart:"Primark","Dick Smith":"Dixons",Dome:["Costa","Nero"],Bunnings:"Screwfix"}},26:function(e,t,a){e.exports=a(43)},31:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(31),a(3)),i=a(4),s=a(6),u=a(5),m=a(7),h=function(e){return r.a.createElement("div",null,"Menu bar")},b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"RightColumn pa4 black-80"},"We've found the following equivalent...")}}]),t}(n.Component),p=a(19),f=a(9),d=a(25),v=a(20),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={store:"coles",country:"australia"},a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=Object.keys(v).map(function(e){return{label:e,value:e}});return r.a.createElement("nav",{className:"LeftColumn pa4 black-80"},r.a.createElement("div",null,"Enter the store you're finding an equivalent for..."),r.a.createElement("form",{className:"measure center"},r.a.createElement("fieldset",{className:"ba b--transparent ph0 mh0"},r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6 tl"},"Store name:"),r.a.createElement(d.a,{options:e})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6 tl"},"Country name:"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent",type:"text",name:"country",value:this.state.country,onChange:this.handleChange})))))}}]),t}(n.Component),j=(a(17),a(18),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={ticked:"unticked"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){console.log("button pressed"),console.log(this.state.ticked)}},{key:"onChange",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"buttonPos"},r.a.createElement("button",{className:"ph3 mt4 f6 link dim ba ph3 pv2 mb2 dib black",href:"#0",onClick:this.handleClick},"Click to upvote this match!"))}}]),t}(n.Component)),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={leftcolumn:{},rightcolumn:{},voteButton:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Compare the store!"),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"})),r.a.createElement(k,null),r.a.createElement(b,null),r.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.c3d51f82.chunk.js.map