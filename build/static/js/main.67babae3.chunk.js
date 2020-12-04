(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{56:function(e,t,n){e.exports=n(85)},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),u=n.n(c),l=n(6),o=n(23),i=n(52),s=n(53),m=function(e){return{type:"SET",data:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET":return t.data;default:return e}},d=n(5),p=n.n(d),E=n(7),b=n(16),v=n.n(b),g="/api/blogs",h=null,y=function(e){h="bearer ".concat(e)},O=function(){var e=Object(E.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(g);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(E.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},e.next=3,v.a.post(g,t,n);case 3:return a=e.sent,console.log("response data:",a.data),e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(E.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.put("".concat(g,"/").concat(t.id),t);case 2:return n=e.sent,console.log("responseData:",n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(E.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("".concat(g,"/").concat(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(E.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("".concat(g,"/").concat(t.id,"/comments"),t);case 2:return n=e.sent,console.log("updated comments:",JSON.stringify(n.data.comments)),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL":return t.data;case"CREATE":var n=t.data;return e.concat(n);case"EDIT":var a=t.data;return e.map((function(e){return e.id===a.id?a:e}));case"DELETE":var r=t.data;return e.filter((function(e){return e.id!==r}));default:return e}},C=function(){var e=Object(E.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){return function(){var t=Object(E.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:C(e).then((function(e){window.localStorage.setItem("loggedInUser",JSON.stringify(e)),y(e.token),n({type:"LOGIN_SUCCESS",data:e}),n(m("welcome "+e.name)),setTimeout((function(){n(m(""))}),3e3)})).catch((function(e){n({type:"LOGIN_FAIL"}),n(m("wrong credentials")),setTimeout((function(){n(m(""))}),3e3)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return t.data;case"LOGIN_FAIL":case"CLEAR":return null;default:return e}},T=function(){var e=Object(E.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS":return t.data;default:return e}},G=Object(o.combineReducers)({notification:f,blogs:S,loggedInUser:I,users:N}),U=Object(o.createStore)(G,Object(s.composeWithDevTools)(Object(o.applyMiddleware)(i.a)));U.subscribe((function(){return console.log("store loggedInUser:",U.getState().loggedInUser)}));var D=U,A=n(14),_=n(8),R=n(87),J=function(e){var t=e.id,n=Object(l.c)((function(e){return e.blogs.find((function(e){return e.id===t}))}));return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(A.b,{to:"/blogs/".concat(n.id)},n.title)),r.a.createElement("td",null,"by: ",n.author))},B=function(){var e=Object(l.c)((function(e){return e.blogs}));return r.a.createElement("div",null,r.a.createElement("h2",null,"favorites"),r.a.createElement(R.a,{striped:!0},r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement(J,{key:e.id,id:e.id})})))))},F=n(92),z=function(){var e=Object(l.c)((function(e){return e.notification}));if(e){if(e.includes("welcome"))return r.a.createElement(F.a,{variant:"success"},e);if(e.includes("wrong"))return r.a.createElement(F.a,{variant:"danger"},e)}return null},M=n(15),P=n(89),W=n(88),q=function(){var e=Object(a.useState)(""),t=Object(M.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),o=Object(M.a)(u,2),i=o[0],s=o[1],f=Object(a.useState)(""),d=Object(M.a)(f,2),b=d[0],v=d[1],g=Object(l.b)();return r.a.createElement("div",null,r.a.createElement("h2",null,"add new favorite blog"),r.a.createElement(P.a,{onSubmit:function(e){e.preventDefault();var t={title:n,author:i,url:b};try{g(function(e){return function(){var t=Object(E.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:a=t.sent,n({type:"CREATE",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t)),g(m("added ".concat(n," to favorites"))),setTimeout((function(){g(m(""))}),5e3),c(""),s(""),v("")}catch(a){g(m("could not add ".concat(JSON.stringify(t)))),setTimeout((function(){g(m(""))}),5e3)}}},r.a.createElement(P.a.Group,null,r.a.createElement(P.a.Label,null,"title"),r.a.createElement(P.a.Control,{type:"text",onChange:function(e){var t=e.target;return c(t.value)}}),r.a.createElement(P.a.Label,null,"author"),r.a.createElement(P.a.Control,{type:"text",onChange:function(e){var t=e.target;return s(t.value)}}),r.a.createElement(P.a.Label,null,"url"),r.a.createElement(P.a.Control,{id:"url",type:"text",onChange:function(e){var t=e.target;return v(t.value)}}),r.a.createElement(W.a,{variant:"primary",type:"submit"},"add this blog"))))},H=function(e){var t=e.buttonLabel,n=e.children,c=Object(a.useState)(!1),u=Object(M.a)(c,2),l=u[0],o=u[1],i={display:l?"none":""},s={display:l?"":"none"},m=function(){o(!l)};return r.a.createElement("div",null,r.a.createElement("div",{style:i,className:"togglableContent"},r.a.createElement(W.a,{className:"buttonLabel",onClick:m},t)),r.a.createElement("div",{style:s,className:"hidden"},n,r.a.createElement(W.a,{onClick:m},"cancel")))},K=function(){var e=Object(l.b)(),t=Object(a.useState)(""),n=Object(M.a)(t,2),c=n[0],u=n[1],o=Object(a.useState)(""),i=Object(M.a)(o,2),s=i[0],m=i[1],f=function(){var t=Object(E.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e(L({username:c,password:s}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(P.a,{onSubmit:f},r.a.createElement("h1",null,"blogs"),r.a.createElement(P.a.Label,null,"username"),r.a.createElement(P.a.Group,null,r.a.createElement(P.a.Control,{type:"text",value:c,name:"Username",onChange:function(e){var t=e.target;return u(t.value)}}),r.a.createElement(P.a.Label,null,"password"),r.a.createElement(P.a.Control,{type:"password",value:s,name:"Password",onChange:function(e){var t=e.target;return m(t.value)}}),r.a.createElement(W.a,{variant:"primary",type:"submit"},"login"))))},Q=function(){var e=Object(l.b)();Object(a.useEffect)((function(){e(function(){var e=Object(E.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:n=e.sent,t({type:"GET_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(l.c)((function(e){return e.users}));return r.a.createElement("div",null,r.a.createElement("h2",null,"users"),r.a.createElement(R.a,{borderless:"true",size:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("th",null,"blogs added")),t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(A.b,{to:"/users/".concat(e.id)},e.username)),r.a.createElement("td",null,e.blogs.length))})))))},V=function(){var e=Object(_.f)().id,t=Object(l.c)((function(t){return t.users.find((function(t){return t.id===e}))}));return t?r.a.createElement("div",null,r.a.createElement("h2",null,t.name),r.a.createElement("h3",null,"favorite blogs"),r.a.createElement("ul",null,t.blogs.map((function(e){return r.a.createElement("li",{key:e.id},e.title)})))):null},X=n(34),Y=function(e){var t=e.comments;return r.a.createElement("div",null,r.a.createElement("h2",null,"comments"),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))},Z=function(e){var t=e.blog,n=Object(l.b)(),c=Object(a.useState)(""),u=Object(M.a)(c,2),o=u[0],i=u[1];return r.a.createElement("div",null,r.a.createElement(P.a,{onSubmit:function(e){e.preventDefault();var a=Object(X.a)({},t,{comments:t.comments.concat(o)});try{n(function(e){return function(){var t=Object(E.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:a=t.sent,n({type:"EDIT",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(a)),console.log("comment successfully added")}catch(r){console.log("not working")}}},r.a.createElement("h2",null,"add a comment"),r.a.createElement(P.a.Control,{as:"textarea",rows:3,onChange:function(e){return i(e.target.value)}}),r.a.createElement(W.a,{variant:"primary",type:"submit"},"submit comment")))},$=function(){var e=Object(l.b)(),t=Object(_.f)().id,n=Object(l.c)((function(e){return e.blogs.find((function(e){return e.id===t}))}));console.log("blog: ",n);if(n){return r.a.createElement("div",null,r.a.createElement("h2",null,n.title),r.a.createElement(P.a,null,r.a.createElement(W.a,{variant:"primary",onClick:function(){return e((t=n.id,function(){var e=Object(E.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:n({type:"DELETE",data:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var t}},"delete"),r.a.createElement("div",null,"url: ",n.url),r.a.createElement(P.a.Group,null,"likes: ",n.likes,r.a.createElement(W.a,{variant:"primary",type:"button",onClick:function(){var t=Object(X.a)({},n,{likes:n.likes+1});e(function(e){return function(){var t=Object(E.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:a=t.sent,console.log("response:",a),n({type:"EDIT",data:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}},"like"))),"added by ",n.user.name,r.a.createElement(H,{buttonLabel:"add comment"},r.a.createElement(Z,{blog:n})),r.a.createElement(Y,{comments:n.comments}))}return null},ee=n(91),te=n(90),ne=function(e){var t=e.handleLogout;return e.user?r.a.createElement(ee.a,{bg:"light",expand:"lg"},r.a.createElement(ee.a.Brand,null,"Favorite Blogs"),r.a.createElement(ee.a.Collapse,null,r.a.createElement(te.a,{className:"mr-auto"},r.a.createElement(te.a.Link,null,r.a.createElement(A.b,{to:"/"},"home")),r.a.createElement(te.a.Link,null,r.a.createElement(A.b,{to:"/users"},"users")))),r.a.createElement(P.a,{inline:!0},r.a.createElement(W.a,{variant:"primary",onClick:t},"logout"))):null},ae=function(){var e=Object(l.c)((function(e){return e.loggedInUser})),t=Object(l.b)();Object(a.useEffect)((function(){t(function(){var e=Object(E.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:n=e.sent,t({type:"GET_ALL",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedInUser");if(e){var n=JSON.parse(e);console.log("parsed: ",n),t(function(e){return{type:"LOGIN_SUCCESS",data:e}}(n)),y(n.token)}}),[t]);return r.a.createElement("div",{className:"container"},r.a.createElement(A.a,null,r.a.createElement(z,null),r.a.createElement(ne,{handleLogout:function(){window.localStorage.clear(),t({type:"CLEAR"})},user:e}),r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/blogs/:id"},r.a.createElement($,null)),r.a.createElement(_.a,{path:"/users/:id"},r.a.createElement(V,null)),r.a.createElement(_.a,{path:"/users"},r.a.createElement(Q,null)),r.a.createElement(_.a,{path:"/"},null===e?r.a.createElement(K,null):r.a.createElement("div",{id:"content"},r.a.createElement(H,{buttonLabel:"add blog"},r.a.createElement(q,null)),r.a.createElement(B,null))))))};u.a.render(r.a.createElement(l.a,{store:D},r.a.createElement(ae,null)),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.67babae3.chunk.js.map