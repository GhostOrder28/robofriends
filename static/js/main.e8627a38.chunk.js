(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(3),o=n.n(c),s=(n(12),n(4)),a=n(5),i=n(7),h=n(6),l=n(0),b=function(e){var t=e.id,n=e.name,r=e.email;return Object(l.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?300x300")}),Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:r})]})},u=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsx)(b,{id:e.id,name:e.name,email:e.email},e.id)}))})},j=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("input",{type:"search",placeholder:"Search robots",onChange:e.onSearchChange,className:"pa3 ba b--green bg-lightest-blue"})})},d=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",height:"70vh"},children:e.children})},f=(n(14),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onChangeInput=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(l.jsx)(j,{onSearchChange:this.onChangeInput}),Object(l.jsx)(d,{children:Object(l.jsx)(u,{robots:r})})]}):Object(l.jsx)("h1",{children:"Loading..."})}}]),n}(r.Component));n(15);o.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e8627a38.chunk.js.map