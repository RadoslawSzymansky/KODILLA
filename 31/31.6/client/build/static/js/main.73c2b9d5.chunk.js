(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n(280)},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},167:function(e,t){},185:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){},269:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){},277:function(e,t,n){},278:function(e,t,n){},280:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(41),o=n.n(c),s=n(26),u=n(21),l=n(32),i=n(102),p=n(7),m=n.n(p),d=n(23),f=n(55),h=n(9),v=n(28),E=n.n(v),b=function(e){return"app/".concat("posts","/").concat(e)},g=b("LOAD_POSTS"),O=b("LOAD_SINGLE_POST"),P=b("LOAD_POST_TO_UPDATE"),j=b("CLEAR_SINGLE_POST"),y=b("START_REQUEST"),k=b("END_REQUEST"),_=b("ERROR_REQUEST"),w=b("RESET_REQUEST"),x=b("LOAD_POSTS_PAGE"),N=b("LIKE_POST"),S=b("UNLIKE POST"),C=function(e){return e.posts.request},T=function(e){var t=e.posts;return Math.ceil(t.amount/t.postsPerPage)},A=function(){return{type:y}},R=function(e){return{payload:e,type:O}},U=function(e){return{payload:e,type:P}},q=function(){return{type:k}},D=function(e){return{error:e,type:_}},L=function(e){return{payload:e,type:x}},I={data:[],request:{pending:!1,error:null,success:null},singlePost:null,postToUpdate:null,amount:0,postsPerPage:10,presentPage:0};var B=function(e,t){return function(){var n=Object(d.a)(m.a.mark(function n(a){var r,c;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(A()),n.prev=1,r=t?U:R,n.next=5,E.a.get("/api/posts/".concat(e));case 5:return c=n.sent,n.next=8,new Promise(function(e,t){return e()});case 8:a(r(c.data)),a(q()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),a(D(n.t0.message));case 15:case"end":return n.stop()}},n,null,[[1,12]])}));return function(e){return n.apply(this,arguments)}}()},F=Object(l.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case g:return Object(h.a)({},e,{data:t.payload});case O:return Object(h.a)({},e,{singlePost:t.payload});case P:return Object(h.a)({},e,{postToUpdate:t.payload});case x:return Object(h.a)({},e,{postsPerPage:t.payload.postsPerPage,presentPage:t.payload.presentPage,amount:t.payload.amount,data:Object(f.a)(t.payload.posts)});case j:return Object(h.a)({},e,{postToUpdate:null});case N||S:return Object(h.a)({},e,{data:e.data.map(function(e){var n=Object(h.a)({},e);return e.id===t.payload.id&&(n.likes=t.payload.likes),n}),singlePost:Object(h.a)({},e.singlePost,{likes:t.payload.likes})});case y:return Object(h.a)({},e,{request:{pending:!0,error:null,success:null}});case k:return Object(h.a)({},e,{request:{pending:!1,error:null,success:!0}});case w:return Object(h.a)({},e,{request:{pending:!1,error:null,success:null}});case _:return Object(h.a)({},e,{request:{pending:!1,error:t.error,success:!1}});default:return e}}}),M=Object(l.e)(F,Object(l.d)(Object(l.a)(i.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),G=n(10),Q=n(11),X=n(13),K=n(12),J=n(14),V=n(31),H=(n(133),function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)}),Y=(n(134),n(135),function(e){e.links,e.location;return r.a.createElement("h1",{className:"logo"},"Blog.app")}),z=(n(136),function(e){var t=e.links,n=e.location;return r.a.createElement("ul",{className:"main-menu"},t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(s.b,{className:n.pathname===e.path?"active":"",to:e.path},e.title))}))}),W=Object(V.e)(function(e){return r.a.createElement(z,e)}),Z=function(e){function t(){var e,n;Object(G.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(X.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(r)))).state={links:[{path:"/",title:"Home"},{path:"/posts/new",title:"Add post"},{path:"/posts",title:"Posts"},{path:"/contact",title:"Contact"},{path:"/posts/random",title:"Random post"}]},n}return Object(J.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this.state.links;return r.a.createElement("nav",{className:"navbar"},r.a.createElement(Y,null),r.a.createElement(W,{links:e}))}}]),t}(r.a.Component),$=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(H,null,r.a.createElement(Z,null),t))},ee=(n(140),function(e){var t=e.children;return r.a.createElement("h1",{className:"page-title"},t)}),te=n(36),ne="http://www.localhost:3000",ae=n(27),re=(n(141),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(ae.a)(e,["variant","children"]);return r.a.createElement("button",Object.assign({},c,{className:"button button--".concat(n)}),a)}),ce=(n(142),function(e){var t=e.children,n=Object(ae.a)(e,["children"]);return r.a.createElement("h2",Object.assign({},n,{className:"small-title"}),t)}),oe=n(104),se=n.n(oe),ue=function(e){var t=e.children,n=Object(ae.a)(e,["children"]);return r.a.createElement("div",Object.assign({},n,{className:"html-box"}),se()(t))},le=function(e){var t=e.likes,n=e.likePost,a=e.unLikePost;return r.a.createElement("div",{className:"post-rank"},r.a.createElement("button",{className:"button button--primary",onClick:a},"-"),r.a.createElement("span",{className:"likes"},t),r.a.createElement("button",{className:"button button--primary",onClick:n},"+"))},ie=Object(u.b)(null,function(e,t){return{likePost:function(){return e((n=t.id,function(){var e=Object(d.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.put("/api/posts/".concat(n,"/like"));case 2:return a=e.sent,e.next=5,new Promise(function(e,t){return e()});case 5:t({payload:{id:n,likes:a.data},type:N});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));var n},unLikePost:function(){return e((n=t.id,function(){var e=Object(d.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.put("/api/posts/".concat(n,"/unlike"));case 2:return a=e.sent,e.next=5,new Promise(function(e,t){return e()});case 5:t({payload:{id:n,likes:a.data},type:N});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));var n}}})(le),pe=(n(185),function(e){var t=e.id,n=e.title,a=e.content,c=e.author,o=e.location,u=e.likes;return r.a.createElement("article",{className:"post-summary"},r.a.createElement(ce,null,n),r.a.createElement(te.FacebookProvider,{appId:"727203911061100"},r.a.createElement(te.ShareButton,{href:"".concat(ne).concat(o.pathname)},"Share")),r.a.createElement(ie,{id:t,likes:u}),r.a.createElement("p",null,"Author: ",c),r.a.createElement(ue,null,a),r.a.createElement(s.b,{to:"/posts/".concat(t)},r.a.createElement(re,{variant:"primary"},"Read more")),r.a.createElement(s.b,{to:"/posts/edit/".concat(t)},r.a.createElement(re,{variant:"primary"},"Update post")))}),me=Object(V.e)(function(e){return r.a.createElement(pe,e)}),de=function(e){var t=e.posts;return r.a.createElement("div",null,r.a.createElement("section",{className:"posts-list"},t.map(function(e){return r.a.createElement(me,Object.assign({key:e.id},e))})))},fe=n(54),he=(n(267),function(){return r.a.createElement(fe.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),ve=n(37),Ee=(n(268),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(ae.a)(e,["variant","children"]);return r.a.createElement(fe.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",Object.assign({},c,{className:"alert alert--".concat(n)}),function(){switch(n){case"info":return r.a.createElement(ve.c,null);case"success":return r.a.createElement(ve.a,null);case"warning":case"error":return r.a.createElement(ve.b,null);default:return r.a.createElement(ve.c,null)}}(),r.a.createElement("span",{className:"alert__desc"},a)))}),be=(n(269),function(e){function t(){var e,n;Object(G.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(X.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(c)))).changePage=function(e){(0,n.props.onPageChange)(e)},n.renderNavButton=function(e){var t=n.props,a=t.pages,c=t.page,o="prev"===e?c-1:c+1,s="prev"===e?"<":">",u=r.a.createElement("div",{className:"pagination__list__item",onClick:function(){return n.changePage(o)}},s);return"prev"===e&&1!==c?u:"next"===e&&c!==a&&a>1?u:null},n}return Object(J.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pages,n=e.page,a=this.changePage;return r.a.createElement("div",{className:"pagination"},r.a.createElement("ul",{className:"pagination__list"},this.renderNavButton("prev"),Object(f.a)(Array(t)).map(function(e,t){return r.a.createElement("li",{key:++t,onClick:function(){a(t)},className:"pagination__list__item".concat(n===t?" pagination__list__item--active":"")},t)}),this.renderNavButton("next")))}}]),t}(r.a.Component)),ge=function(e){function t(){var e,n;Object(G.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(X.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(r)))).state={presentPage:n.props.initialPage||1,postsPerPage:n.props.postsPerPage||10,pagination:void 0===n.props.pagination||n.props.pagination},n.loadPostsPage=function(e){var t=n.props.loadPostsByPage,a=n.state.postsPerPage;n.setState({presentPage:e}),t(e,a)},n}return Object(J.a)(t,e),Object(Q.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.loadPostsByPage,t=this.state;e(t.presentPage,t.postsPerPage)}},{key:"renderContent",value:function(){var e=this.props.request,t=e.pending,n=e.error,a=e.success,c=this.props.posts,o=this.state,s=o.presentPage,u=o.pagination;switch(!0){case!t&&a&&c.length>0:return r.a.createElement(r.a.Fragment,null,r.a.createElement(de,{posts:c}),u?r.a.createElement(be,{pages:this.props.pages,onPageChange:this.loadPostsPage,page:s}):null);case t&&!a:return r.a.createElement(he,null);case!t&&n:return r.a.createElement(Ee,{variant:"error"},n);case!t&&a&&0===c.length:return r.a.createElement(Ee,{variant:"info"},"No posts...");default:return null}}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderContent())}}]),t}(r.a.Component),Oe=Object(u.b)(function(e){return{posts:(t=e,t.posts.data),request:C(e),pages:T(e)};var t},function(e){return{loadPostsByPage:function(t,n){return e(function(e,t){return function(){var n=Object(d.a)(m.a.mark(function n(a){var r,c,o,s;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(A()),n.prev=1,c=(e-1)*(r=t||10),n.next=6,E.a.get("/api/posts/range/".concat(c,"/").concat(r));case 6:return o=n.sent,n.next=9,new Promise(function(e,t){return e()});case 9:s={posts:o.data.posts,amount:o.data.amount,postsPerPage:r,presentPage:e},a(L(s)),a(q()),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),a(D(n.t0.message));case 17:case"end":return n.stop()}},n,null,[[1,14]])}));return function(e){return n.apply(this,arguments)}}()}(t,n))}}})(ge),Pe=function(){return r.a.createElement("div",null,r.a.createElement(ee,null,"Blog"),r.a.createElement(Oe,{postsPerPage:3,pagination:!1}))},je=function(e){function t(){return Object(G.a)(this,t),Object(X.a)(this,Object(K.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this.props.postsCount;return r.a.createElement("div",null,e?"Posts amount: ".concat(e):"")}}]),t}(r.a.Component),ye=Object(u.b)(function(e){return{postsCount:(t=e,t.posts.data.length)};var t})(je),ke=function(){return r.a.createElement("div",null,r.a.createElement(ee,null,"Posts list"),r.a.createElement(ye,null),r.a.createElement(Oe,null))},_e=function(){return r.a.createElement("div",null,r.a.createElement(ee,null,"Kontakt"),r.a.createElement("p",null,"Your Favourite Blooger Ltd."),r.a.createElement("p",null,"9432 Division Street"),r.a.createElement("p",null,"Stone Mountain, GA 30083"),r.a.createElement("br",null),r.a.createElement("p",null,"Mobile Number: 207-914-3411"))},we=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found"))},xe=n(8),Ne=function(e){function t(){return Object(G.a)(this,t),Object(X.a)(this,Object(K.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(Q.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.random,n=e.loadSinglePost,a=e.loadRandomPost;if(t)return a();n()}},{key:"renderContent",value:function(){var e=this.props.request,t=e.pending,n=e.error,a=e.success,c=this.props,o=c.singlePost,s=c.location;switch(!0){case!t&&a&&null!==o:return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,o),r.a.createElement(te.FacebookProvider,{appId:"727203911061100"},r.a.createElement(te.Comments,{href:"".concat(ne).concat(s.pathname)})));case t&&!a:return r.a.createElement(he,null);case!t&&n:return r.a.createElement(Ee,{variant:"error"},n);default:return null}}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderContent())}}]),t}(a.Component);me.propTypes={singlePost:xe.PropTypes.object,request:xe.PropTypes.object,loadSinglePost:xe.PropTypes.func};var Se=Object(V.e)(function(e){return r.a.createElement(Ne,e)}),Ce=Object(u.b)(function(e){return{singlePost:(t=e,t.posts.singlePost),request:C(e)};var t},function(e,t){return{loadSinglePost:function(){return e(B(t.id))},loadRandomPost:function(){return e(function(){var e=Object(d.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(A()),e.prev=1,e.next=4,E.a.get("/api/posts/random");case 4:return n=e.sent,e.next=7,new Promise(function(e,t){return e()});case 7:t(R(n.data)),t(q()),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t(D(e.t0.message));case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}())}}})(Se),Te=function(e){var t=e.match.params.id;return r.a.createElement("div",null,r.a.createElement(Ce,{id:t}))},Ae=n(53),Re=n(105),Ue=n.n(Re),qe=(n(273),n(274),n(275),function(e){var t=e.value,n=e.label,a=e.onChange,c=Object(ae.a)(e,["value","label","onChange"]);return r.a.createElement("label",{className:"text-field"},r.a.createElement("span",{className:"text-field__label ".concat(!t.length>0?"text-field__label--big":"")},n),r.a.createElement("input",Object.assign({},c,{value:t,onChange:a,className:"text-field__input"})))}),De=(n(276),function(e){var t=e.children;return r.a.createElement("h2",{className:"section-title"},t)}),Le=(n(277),function(e){function t(){var e,n;Object(G.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(X.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(r)))).state={post:{title:"",author:"",content:""}},n.handleChange=function(e){var t=n.state.post;n.setState({post:Object(h.a)({},t,Object(Ae.a)({},e.target.name,e.target.value))})},n.handleEditor=function(e){var t=n.state.post;n.setState({post:Object(h.a)({},t,{content:e})})},n.sendPost=function(e){var t=n.props,a=t.addPost,r=t.updatePost,c=t.isUpdate,o=n.state.post,s=c?r:a;e.preventDefault(),s(o)},n}return Object(J.a)(t,e),Object(Q.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark(function e(){var t,n,a,r,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.loadPost,a=t.resetRequest,r=t.isUpdate,c=t.id,!r){e.next=8;break}return e.next=4,n(c);case 4:a(),this.setState({post:this.props.post}),e.next=9;break;case 8:a();case 9:case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.post,t=this.handleChange,n=this.handleEditor,a=this.sendPost,c=this.props,o=c.request,s=c.isUpdate;return o.error?r.a.createElement(Ee,{variant:"error"},o.error):o.success?r.a.createElement(Ee,{variant:"success"},"Post has been ".concat(s?"updated":"added","!")):o.pending?r.a.createElement(he,null):r.a.createElement("form",{onSubmit:a},r.a.createElement(qe,{label:"Title",value:e.title,onChange:t,name:"title"}),r.a.createElement(qe,{label:"Author",value:e.author,onChange:t,name:"author"}),r.a.createElement(De,null,"Edit post content"),r.a.createElement(Ue.a,{className:"content-editor",text:e.content,onChange:n,options:{placeholder:!1,toolbar:{buttons:["bold","italic","underline","anchor","h2","h3"]}}}),r.a.createElement(re,{variant:"primary"},s?"Update":"Add"," post"))}}]),t}(r.a.Component)),Ie=Object(u.b)(function(e){return{request:C(e),post:(t=e,t.posts.postToUpdate)};var t},function(e){return{addPost:function(t){return e(function(e){return function(){var t=Object(d.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(A()),t.prev=1,t.next=4,E.a.post("/api/posts",e);case 4:return t.next=6,new Promise(function(e,t){return e()});case 6:n(q()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(D(t.t0.message));case 12:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))},updatePost:function(t){return e(function(e){return function(){var t=Object(d.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(A()),t.prev=1,t.next=4,E.a.patch("/api/posts",e);case 4:return t.next=6,new Promise(function(e,t){return e()});case 6:n(q()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(D(t.t0.message));case 12:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))},resetRequest:function(){return e({type:w})},loadPost:function(t){return e(B(t,!0))}}})(Le),Be=function(){return r.a.createElement("div",null,r.a.createElement(Ie,null))},Fe=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement(Ie,{isUpdate:!0,id:t.params.id}))},Me=function(e){e.match;return r.a.createElement("div",null,r.a.createElement(Ce,{random:!0}))},Ge=function(e){function t(){return Object(G.a)(this,t),Object(X.a)(this,Object(K.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){return r.a.createElement($,null,r.a.createElement(V.c,null,r.a.createElement(V.a,{path:"/",exact:!0,component:Pe}),r.a.createElement(V.a,{path:"/posts",exact:!0,component:ke}),r.a.createElement(V.a,{path:"/contact",exact:!0,component:_e}),r.a.createElement(V.a,{path:"/posts/new",exact:!0,component:Be}),r.a.createElement(V.a,{path:"/posts/random",exact:!0,component:Me}),r.a.createElement(V.a,{path:"/posts/:id",exact:!0,component:Te}),r.a.createElement(V.a,{path:"/posts/edit/:id",exact:!0,component:Fe}),r.a.createElement(V.a,{component:we})))}}]),t}(r.a.Component);n(278),n(279);o.a.render(r.a.createElement(function(){return r.a.createElement(u.a,{store:M},r.a.createElement(s.a,null,r.a.createElement(Ge,null)))},null),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.73c2b9d5.chunk.js.map