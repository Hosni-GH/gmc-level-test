(this["webpackJsonpfinal-test-gmc"]=this["webpackJsonpfinal-test-gmc"]||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(29),o=a.n(s),r=(a(37),a(8)),l=a(9),i=a(13),m=a(10),u=a(14),p=a(11),d=a.n(p),h=a(12),v=function(e){var t=e.post,a=void 0===t?{}:t;return c.a.createElement("div",{className:"post-card"},c.a.createElement("div",{className:"post-img"},c.a.createElement("img",{src:"https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80",alt:"post-img"})),c.a.createElement("div",{className:"post-info"},c.a.createElement("div",{className:"post-title"},c.a.createElement("h3",null,a.title)),c.a.createElement("div",{className:"post-body"},c.a.createElement("p",null,a.body)),c.a.createElement(h.b,{to:"/comments/".concat(a.id)},c.a.createElement("div",{className:"btn-post"},c.a.createElement("span",null,"Comments")))))},f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={posts:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;console.log("params:: "+this.props.params),d.a.get("https://jsonplaceholder.typicode.com/posts").then((function(a){console.log("res: ",a);var n=a.data.filter((function(e){return e.userId===parseInt(t.id)}));e.setState({posts:n})})).catch((function(e){console.log("oups! something went wrong!")}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"posts-list"},this.state.posts.map((function(e){return c.a.createElement(v,{key:e.id,post:e})})))}}]),t}(n.Component),E=function(e){var t=e.user,a=void 0===t?{}:t;return c.a.createElement("div",{className:"user-card"},c.a.createElement("div",{className:"user-img"},c.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/180/180644.png",alt:"user-avatar"})),c.a.createElement("div",{className:"user-info"},c.a.createElement("div",{className:"user-name"},c.a.createElement("h3",null,a.name)),c.a.createElement("div",{className:"company-name"},c.a.createElement("p",null,a.company.name)),c.a.createElement("div",{className:"job-description"},c.a.createElement("p",null,a.company.catchPhrase)),c.a.createElement("div",{className:"btn-flw"},c.a.createElement(h.b,{to:"/posts/".concat(a.id)},c.a.createElement("span",null,"Following")))))},b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={users:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){e.setState({users:t.data})})).catch((function(e){console.log("Oups! Something went wrong!")}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"users-list"},this.state.users.map((function(e){return c.a.createElement(E,{user:e,key:e.id})})))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={comments:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;d.a.get("https://jsonplaceholder.typicode.com/comments").then((function(a){var n=a.data.filter((function(e){return e.postId===parseInt(t.id)}));e.setState({comments:n}),console.log("state :",e.state.comments)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"listComment"},this.state.comments.map((function(e){return c.a.createElement("div",{className:"comment",key:e.id},c.a.createElement("h2",null,e.name),c.a.createElement("h5",null,e.body))})))}}]),t}(n.Component),y=a(6);a(60);var j=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h.a,null,c.a.createElement(y.a,{exact:!0,path:"/",component:b}),c.a.createElement(y.a,{exact:!0,path:"/posts/:id",component:f}),c.a.createElement(y.a,{path:"/comments/:id",component:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.d6f681f3.chunk.js.map