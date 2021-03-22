(this["webpackJsonpposts-app"]=this["webpackJsonpposts-app"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(17),i=n.n(c),o=(n(46),n(47),n(5)),r=n(1);var l=function(){return Object(r.jsx)("header",{className:"header",children:Object(r.jsx)("div",{className:"header__inner",children:Object(r.jsx)("h1",{className:"header__title",children:"Header"})})})};var u=function(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("div",{className:"footer__inner",children:Object(r.jsx)("h1",{className:"footer__title",children:"Footer"})})})},m=n(11),d=n(24),j=n(19),p=n(12),b=n.n(p);var h="UPDATE_POSTS",f="GOT_POSTS",O="GET_USERS",_="SAVE_POST",x="SAVE_COMMENTS",v="DELETE_POST",y="DELETE_COMMENT",g="SEND_BTN",N="SEND_BTN_MESSAGE",C="GENERATE_ID_MESSAGE",E="COMBINE_DATA",S="GET_COMMENTS",P="COMBINE_POST",T=function(e){return{type:h,payload:e}},D=function(){return{type:f}},M=function(e){return{type:_,payload:e}},B=function(e){return{type:v,payload:e}},A=function(e){return{type:y,payload:e}},F=function(e){return{type:g,payload:e}},I=function(e){return{type:N,payload:e}},k=function(){return{type:C}},w=function(e){return{type:O,payload:e}},G=function(){return{type:E}},L=function(e){return{type:S,payload:e}},q=function(){return{type:P}},z=function(e){return function(t){(function(e){return b.a.get("https://jsonplaceholder.typicode.com/posts/"+e+"/comments").then((function(e){return e.data}))})(e).then((function(e){t(L(e))}))}},J=function(e){return function(t){(function(e){return b.a.get("https://jsonplaceholder.typicode.com/posts/"+e).then((function(e){return e.data}))})(e).then((function(e){t(M(e))})).then((function(){t(q())}))}},R=function(e){return function(t){(function(e){return b.a.delete("https://jsonplaceholder.typicode.com/posts/"+e)})(e).then((function(n){200===n.status&&t(B(e))}))}},U=function(e){return function(t){(function(e){var t=e.name,n=e.email,a=e.message;return b.a.post("https://jsonplaceholder.typicode.com/posts",{name:t,email:n,message:a}).then((function(e){return e.data}))})(e).then((function(e){t(F(e))}))}},V=function(e){return function(t){(function(e){var t=e.name,n=e.email,a=e.message;return b.a.put("https://jsonplaceholder.typicode.com/posts/1",{name:t,email:n,message:a}).then((function(e){return e.data}))})(e).then((function(e){t(I(e))}))}},X=function(e){return function(t){(function(e){return b.a.delete("https://jsonplaceholder.typicode.com/comments/"+e)})(e).then((function(){t(A(e))}))}};var H=Object(m.b)((function(e){return{combinedData:e.combinedData}}),(function(e){return{deletePost:function(t){e(R(t))}}}))((function(e){var t=e.combinedData,n=e.deletePost;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("ul",{className:"list__items",children:[t.length?null:Object(r.jsx)("li",{className:"list__loader",children:Object(r.jsx)(j.BeatLoader,{size:92})}),t.map((function(e){return Object(r.jsxs)("li",{className:"list__item",children:[Object(r.jsxs)(d.a,{to:"post/"+e.id,className:"list__link",children:[Object(r.jsx)("span",{className:"list__title",children:e.name}),Object(r.jsx)("p",{className:"list__about",children:e.title})]}),Object(r.jsx)("button",{className:"list__btn",onClick:function(){n(e.id)},children:"X"})]},e.id)}))]})})})),W=n(21);var K=Object(m.b)((function(e){return{activeComments:e.activeComments}}),(function(e){return{handleSendBtn:function(t,n,a){e(U({name:t,email:n,message:a}))},handleSendBtnMessage:function(t,n,a){e(k()),e(V({name:t,email:n,message:a}))}}}))((function(e){var t=e.handleSendBtn,n=e.activeComments,s=e.handleSendBtnMessage,c=Object(a.useState)(""),i=Object(W.a)(c,2),o=i[0],l=i[1],u=Object(a.useState)(""),m=Object(W.a)(u,2),d=m[0],j=m[1],p=Object(a.useState)(""),b=Object(W.a)(p,2),h=b[0],f=b[1];return Object(r.jsxs)("form",{className:"list__wrapper",children:[Object(r.jsx)("label",{className:"list__form-title",htmlFor:"name",children:"Name"}),Object(r.jsx)("input",{className:"list__form-name",id:"name",type:"text",required:!0,onChange:function(e){l(e.target.value)},value:o}),Object(r.jsx)("label",{className:"list__form-title",htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{className:"list__form-email",id:"email",type:"email",required:!0,onChange:function(e){j(e.target.value)},value:d}),Object(r.jsx)("label",{className:"list__form-title",htmlFor:"message",children:"Message"}),Object(r.jsx)("textarea",{className:"list__form-text",id:"message",required:!0,onChange:function(e){f(e.target.value)},value:h}),Object(r.jsx)("button",{type:"button",className:"list__addBtn",onClick:function(e){e.preventDefault(),""===o||""===d||""===h?alert("Enter text"):(l(""),j(""),f(""),n.length?s(o,d,h):t(o,d,h))},children:"Add new"})]})}));var Q=Object(m.b)((function(e){return{gotPosts:e.gotPosts}}))((function(e){var t=e.gotPosts;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{className:"list",children:Object(r.jsxs)("div",{div:!0,className:"list__inner",children:[t?Object(r.jsx)(H,{}):Object(r.jsx)("p",{children:" No Posts"}),Object(r.jsx)(K,{})]})})})}));var Y=Object(m.b)((function(e){return{activePost:e.activePost,activeComments:e.activeComments,combinedPost:e.combinedPost}}),(function(e){return{handleDeleteComment:function(t){e(X(t))},fetchComments:function(t){e(z(t))},fetchPost:function(t){e(J(t))}}}))((function(e){var t=e.param,n=e.activeComments,s=e.fetchComments,c=e.fetchPost,i=e.combinedPost,o=e.handleDeleteComment;return Object(a.useEffect)((function(){s(t),c(t)}),[]),Object(r.jsx)("div",{className:"post",children:Object(r.jsxs)("div",{className:"post__inner",children:[Object(r.jsxs)("div",{className:"post__main",children:[Object(r.jsx)("h2",{className:"post__title",children:"POST:"}),Object(r.jsxs)("p",{className:"post__author",children:[Object(r.jsx)("pre",{children:"Name: \n                "}),i.name]}),Object(r.jsxs)("span",{className:"post__email",children:[Object(r.jsx)("pre",{children:"Email: \n                "})," ",i.email]}),Object(r.jsxs)("p",{className:"post__text",children:[Object(r.jsx)("pre",{children:"Message: \n                "})," ",i.body]})]}),Object(r.jsxs)("div",{className:"post__comments",children:[Object(r.jsx)("h2",{className:"post__title",children:"COMMENTS:"}),Object(r.jsxs)("ul",{className:"post__list",children:[n.length?null:Object(r.jsx)("li",{className:"post__loader",children:Object(r.jsx)(j.BeatLoader,{size:92})}),n.map((function(e){return Object(r.jsxs)("li",{className:"post__item",children:[Object(r.jsx)("p",{className:"post__item-author",children:e.name}),Object(r.jsx)("span",{className:"post__item-email",children:e.email}),Object(r.jsx)("p",{className:"post__item-text",children:e.body}),Object(r.jsx)("button",{className:"post__btn",onClick:function(){o(e.id)},children:"X"})]},e.id)}))]})]}),Object(r.jsx)(K,{})]})})})),Z=n(8),$=Object(Z.a)();var ee=function(){return Object(r.jsx)(s.a.Fragment,{children:Object(r.jsxs)(o.b,{history:$,children:[Object(r.jsx)(l,{}),Object(r.jsx)(o.a,{exact:!0,path:"/posts/",render:function(){return Object(r.jsx)(Q,{})}}),Object(r.jsx)(o.a,{exact:!0,path:"/posts/post/:id",render:function(e){var t=e.match;return Object(r.jsx)(Y,{param:t.params.id})}}),Object(r.jsx)(u,{})]})})},te=n(14),ne=n(40),ae=n(28),se={gotPosts:!1,posts:[],activePost:{},activeComments:[],formId:"",users:[],combinedData:[],actualComments:[],combinedPost:{}},ce=n(41),ie=Object(te.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object.assign({},e,{posts:t.payload.slice(0,10)});case _:return Object.assign({},e,{activePost:t.payload});case f:return Object.assign({},e,{gotPosts:!0});case x:return Object.assign({},e,{activeComments:t.payload});case v:return Object.assign({},e,{combinedData:e.combinedData.filter((function(e){return e.id!==t.payload}))});case y:return Object.assign({},e,{activeComments:e.activeComments.filter((function(e){return e.id!==t.payload}))});case g:return Object.assign({},e,{combinedData:[].concat(Object(ae.a)(e.combinedData),[{name:t.payload.name,email:t.payload.email,body:t.payload.message,id:t.payload.id,title:t.payload.email}])});case N:return Object.assign({},e,{activeComments:[].concat(Object(ae.a)(e.activeComments),[{name:t.payload.name,email:t.payload.email,body:t.payload.message,id:e.formId,title:t.payload.email}])});case C:return Object.assign({},e,{formId:e.activeComments[e.activeComments.length-1].id+1});case O:return Object.assign({},e,{users:t.payload});case E:return Object.assign({},e,{combinedData:e.posts.map((function(t){var n=e.users.find((function(e){return e.id===t.id}));return Object.assign({},t,{name:n.name},{email:n.email})}))});case S:return Object.assign({},e,{activeComments:t.payload});case P:return Object.assign({},e,{combinedPost:Object.assign({},e.activePost,e.users.find((function(t){return t.id===e.activePost.id})))});default:return e}}),Object(ce.composeWithDevTools)(Object(te.applyMiddleware)(ne.a)));Promise.all([ie.dispatch((function(e){return b.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.data})).then((function(t){e(T(t))})).then((function(){e(D())}))})),ie.dispatch((function(e){return b.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){return e.data})).then((function(t){e(w(t))}))}))]).then((function(){ie.dispatch(G())})).then((function(){i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(m.a,{store:ie,children:Object(r.jsx)(ee,{})})}),document.getElementById("root"))}))}},[[99,1,2]]]);
//# sourceMappingURL=main.c45dc269.chunk.js.map