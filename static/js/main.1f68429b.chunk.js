(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),o=n.n(s),a=(n(12),n(2)),i=n(3),h=n(5),l=n(4),b=n(0),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br2 pa2 ma3 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsx)(d,{id:e.id,name:e.name,email:e.email},e.id)}))})},u=function(e){return Object(b.jsx)("div",{style:{overflow:"scroll",border:"0px",height:"1000px"},children:e.children})},f=function(e){e.searchfields;var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{type:"search",className:"pa3 ba b--yellow bg-lightest-blue",placeholder:"search robots",onChange:t})})},O=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Oops. That is not goood"}):this.props.children}}]),n}(r.Component)),p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(b.jsx)(f,{searchChange:this.onSearchChange}),Object(b.jsx)(u,{children:Object(b.jsxs)(O,{children:[Object(b.jsx)(j,{robots:r}),Object(b.jsx)("div",{style:{height:"500px"}})]})})]}):Object(b.jsx)("h1",{children:"Loading..."})}}]),n}(r.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};n(15);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.1f68429b.chunk.js.map