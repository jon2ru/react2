(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){e.exports={nav:"Nav_nav__36ixW",item:"Nav_item__LFmSp",activeLink:"Nav_activeLink__3ztyr",active:"Nav_active__2avk8",navitem:"Nav_navitem__1B1XH",friends:"Nav_friends__Wf18q",nu:"Nav_nu__1z16S",mnu:"Nav_mnu__1FeYR",pnu:"Nav_pnu__3voQI"}},134:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1nGhq",selectedPage:"Users_selectedPage__3hOW9"}},163:function(e,t,n){},18:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var r=n(91),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"66060485-250e-40e6-994f-36765b804827"}}),c={getUsera:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followApi:function(e){return a.delete("follow/".concat(e))},unfollowApi:function(e){return a.post("follow/".concat(e))},getProfileApi:function(e){return console.warn("Obsolete method. Please profileApi object."),s.getProfileApi(e)}},s={getProfileApi:function(e){return a.get("profile/"+e)},getUserStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},247:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var r=n(0),a=(n(163),n(9)),c=n(97),s=n(96),o=n(43),i=n(5),u=n(18),l="FOLLOW",d="UNFOLLOW",j="SET_USERS",f="SET_CURRENT_PAGE",b="SET_TOTAL_USERS_COUNT",p="TOGGLE_IS_FETCHING",g="FOLLOWING_IS_FETCHING",O={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},h=function(e){return{type:f,currentPage:e}},m=function(e){return{type:p,isFetching:e}},x=function(e,t){return{type:g,isFetching:e,userId:t}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case d:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case j:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case f:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case b:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case p:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case g:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},w=[{img2:Object(r.jsx)("img",{src:"https://i0.wp.com/andrey-eltsov.ru/wp-content/uploads/2018/02/SmailikSbor3.jpg"})},{img2:Object(r.jsx)("img",{src:"https://i0.wp.com/andrey-eltsov.ru/wp-content/uploads/2018/02/SmailikSbor3.jpg"})},{img2:Object(r.jsx)("img",{src:"https://i0.wp.com/andrey-eltsov.ru/wp-content/uploads/2018/02/SmailikSbor3.jpg"})}],P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return e},A=n(16),C=n.n(A),N=n(29),y=n(45),L="SET_USER_DATA",E={id:null,email:null,login:null,isAuth:!1},S=function(e,t,n,r){return{type:L,data:{email:e,login:t,id:n,isAuth:r}}},T=function(){return function(){var e=Object(N.a)(C.a.mark((function e(t){var n,r,a,c,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.email,c=r.login,s=r.id,t(S(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(i.a)(Object(i.a)({},e),t.data);default:return e}},k=n(130),I=n(132),F="INITIALIZED_SUCCESS",D={initialized:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(i.a)(Object(i.a)({},e),{},{initialized:!0});default:return e}},V=Object(a.c)({profilePage:s.b,dialogPages:c.b,sidebar:P,usersPage:v,form:k.a,auth:M,app:z}),Y=Object(a.e)(V,Object(a.a)(I.a));window.store=Y;var H=Y,G=n(1),B=n.n(G),R=n(64),U=n.n(R),J=n(34),X=n(35),K=n(37),q=n(36),W=(n(247),n(91),n(12)),Q=n(71),Z=n.n(Q),_=n(13),$=function(e){return Object(r.jsxs)("header",{className:Z.a.header,children:[Object(r.jsx)("div",{className:Z.a.item,children:"header"}),Object(r.jsx)("div",{className:Z.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login,"-",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(r.jsx)(_.b,{to:"/Login",children:"Login"})})]})},ee=function(e){Object(K.a)(n,e);var t=Object(q.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(X.a)(n,[{key:"render",value:function(){return Object(r.jsx)($,Object(i.a)({},this.props))}}]),n}(B.a.Component),te=Object(W.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0===e.sent.data.resultCode&&t(S(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ee),ne=n(10),re=n(11),ae=n.n(re),ce=function(e){return Object(r.jsx)("div",{className:ae.a.friends,children:Object(r.jsxs)("div",{className:ae.a.nu,children:[e.name,e.foto]})})},se=function(e){var t=e.friends.map((function(e){return Object(r.jsx)(ce,{name:e.nname,id:e.id,avatar:e.avatar})})),n=e.sideavata.map((function(e){return Object(r.jsx)(ce,{foto:e.img2})}));return Object(r.jsxs)("nav",{className:ae.a.nav,children:[Object(r.jsx)("div",{className:ae.a.item,children:Object(r.jsx)(_.b,{to:"/profile",activeClassName:ae.a.activeLink,children:"Profile"})}),Object(r.jsx)("div",{className:ae.a.item,children:Object(r.jsx)(_.b,{to:"/dialogs",activeClassName:ae.a.active,children:"Dialogs"})}),Object(r.jsx)("div",{className:ae.a.item,children:Object(r.jsx)(_.b,{to:"/users",activeClassName:ae.a.active,children:"Users"})}),Object(r.jsx)("div",{className:ae.a.item,children:Object(r.jsx)("a",{children:"News"})}),Object(r.jsx)("div",{className:ae.a.item,children:Object(r.jsx)(_.b,{to:"/musik",children:"Music"})}),Object(r.jsx)("div",{className:ae.a.item,children:Object(r.jsx)(_.b,{to:"/login",children:"Login"})}),Object(r.jsx)("div",{className:"".concat(ae.a.item," ").concat(ae.a.aert),children:Object(r.jsx)("a",{children:"Settings"})}),Object(r.jsx)("div",{children:" FRIENDS:"}),Object(r.jsxs)("div",{className:ae.a.navitem,children:[t,n]})]})},oe=Object(W.b)((function(e){return{friends:e.dialogPages.dialogs2,sideavata:e.sidebar}}))(se),ie=n(55),ue=n(69),le=n(129),de=n(44),je=n.n(de),fe=n(133),be=n.n(fe),pe=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,s=e.portionSize,o=void 0===s?10:s,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var d=Math.ceil(i/o),j=Object(G.useState)(1),f=Object(le.a)(j,2),b=f[0],p=f[1],g=(b-1)*o+1,O=b*o;return Object(r.jsxs)("div",{className:je.a.paginator,children:[b>1&&Object(r.jsx)("button",{className:je.a.button,onClick:function(){p(b-1)},children:"PREV"}),u.filter((function(e){return e>=g&&e<=O})).map((function(e){return Object(r.jsx)("span",{className:be()(Object(ue.a)({},je.a.selectedPage,a===e),je.a.pageNumber),onClick:function(t){c(e)},children:e})})),d>b&&Object(r.jsx)("button",{className:je.a.button,onClick:function(){p(b+1)},children:"NEXT"})]})},ge=n(134),Oe=n.n(ge),he=function(e){var t=e.user,n=e.followingInProgress,a=e.follow,c=e.unfollow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(_.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!==t.photos.small?t.photos.small:"data:image/png;base64,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",className:Oe.a.userPhoto})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Unfollow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.city"}),Object(r.jsx)("div",{children:"user.location.cantry"})]})]})]})},me=function(e){var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,s=Object(ie.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(pe,{onPageChanged:c,currentPage:a,pageSize:n,totalItemsCount:t}),Object(r.jsx)("div",{children:s.users.map((function(e){return Object(r.jsx)(he,{user:e,followingInProgress:s.followingInProgress,follow:s.follow,unfollow:s.unfollow},e.id)}))})]})},xe=n(67),ve=function(e){Object(K.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(J.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUserThunkCreator(t,e.props.pageSize)},e}return Object(X.a)(n,[{key:"componentDidMount",value:function(){this.props.getUserThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(xe.a,{}):null,Object(r.jsx)(me,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(B.a.Component),we=n(135),Pe=function(e){return e.usersPage.isFetching},Ae=Object(we.a)((function(e){return e.usersPage.users}),Pe,(function(e,t){return e.filter((function(e){return!0}))})),Ce=function(e){return e.usersPage.pageSize},Ne=function(e){return e.usersPage.totalUsersCount},ye=function(e){return e.usersPage.currentPage},Le=function(e){return e.usersPage.followingInProgress},Ee=Object(a.d)(Object(W.b)((function(e){return{users:Ae(e),pageSize:Ce(e),totalUsersCount:Ne(e),currentPage:ye(e),isFetching:Pe(e),followingInProgress:Le(e)}}),{follow:function(e){return function(t){t(x(!0,e)),u.c.followApi(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:l,userId:e}}(e)),t(x(!1,e))}))}},unfollow:function(e){return function(t){t(x(!0,e)),u.c.unfollowApi(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:d,userId:e}}(e)),t(x(!1,e))}))}},setcurrentpage:h,toggleFollowInProgress:x,getUserThunkCreator:function(e,t){return function(n){n(m(!0)),n(h(e)),u.c.getUsera(e,t).then((function(e){var t;n(m(!1)),n(function(e){return{type:j,users:e}}(e.items)),n((t=e.totalCount,{type:b,count:t}))}))}}}))(ve),Se=n(127),Te=n(128),Me=n(88),ke=n(65),Ie=n(33),Fe=n.n(Ie),De=Object(Te.a)({form:"login"})((function(e,t){return Object(r.jsxs)("form",{onSubmit:e,children:[Object(r.jsx)("div",{children:Object(r.jsx)(Se.a,{placeholder:"email",name:"email",component:ke.a,validate:[Me.b]})}),Object(r.jsx)("div",{children:Object(r.jsx)(Se.a,{placeholder:"password",component:ke.a,name:"password",type:"password",validate:[Me.b]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Se.a,{type:"checkbox",name:"rememberMe",component:ke.a}),"remember me"]}),t&&Object(r.jsx)("div",{className:Fe.a.formSummaryError,children:t}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),ze=Object(W.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(N.a)(C.a.mark((function r(a){var c,s;return C.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(T()):(s=c.data.messages.length>0?c.data.messages[0]:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",a(Object(y.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(ne.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"LOGIN"}),Object(r.jsx)(De,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ve=B.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),Ye=B.a.lazy((function(){return n.e(3).then(n.bind(null,297))})),He=function(e){Object(K.a)(n,e);var t=Object(q.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(X.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(te,{}),Object(r.jsx)(oe,{}),Object(r.jsxs)("div",{className:"app-content",children:[Object(r.jsx)(G.Suspense,{fallback:Object(r.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(r.jsxs)("section",{children:[Object(r.jsx)(ne.b,{path:"/dialogs/",render:function(){return Object(r.jsx)(Ve,{})}}),Object(r.jsx)(ne.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(Ye,{})}})]})}),Object(r.jsx)(ne.b,{path:"/users/",render:function(){return Object(r.jsx)(Ee,{})}}),Object(r.jsx)(ne.b,{path:"/login/",render:function(){return Object(r.jsx)(ze,{})}})]})]}):Object(r.jsx)(xe.a,{})}}]),n}(B.a.Component),Ge=Object(a.d)(ne.f,Object(W.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(T());Promise.all([t]).then((function(){e({type:F})}))}}}))(He),Be=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,296)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};U.a.render(Object(r.jsx)(_.a,{children:Object(r.jsx)(W.a,{store:H,children:Object(r.jsx)(Ge,{})})}),document.getElementById("root")),Be()},33:function(e,t,n){e.exports={formControl:"FormControls_formControl__r_7AK",error:"FormControls_error__1MweQ",formSummaryError:"FormControls_formSummaryError__11DO7"}},44:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__2mAnm",button:"Paginator_button__KcLB5",paginator:"Paginator_paginator__2zHpG",pageNumber:"Paginator_pageNumber__1X0PA"}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(0),a=n(5),c=n(55),s=(n(1),n(33)),o=n.n(s),i=function(e){var t=e.input,n=e.meta,s=Object(c.a)(e,["input","meta"]),i=n.touched&&n.error;return Object(r.jsxs)("div",{className:o.a.formControl+" "+(i?o.a.error:""),children:[Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("textarea",Object(a.a)(Object(a.a)({},t),s))," "]}),i&&Object(r.jsxs)("span",{children:[n.error," "]})]})},u=function(e){var t=e.input,n=e.meta,s=Object(c.a)(e,["input","meta"]),i=n.touched&&n.error;return Object(r.jsxs)("div",{className:o.a.formControl+" "+(i?o.a.error:""),children:[Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("input",Object(a.a)(Object(a.a)({},t),s))," "]}),i&&Object(r.jsxs)("span",{children:[n.error," "]})]})}},67:function(e,t,n){"use strict";var r=n(0),a=(n(1),n.p+"static/media/Spinner-1s-200px.d416e7cf.svg");t.a=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:a})})}},71:function(e,t,n){e.exports={header:"Header_header__ecVsK",item:"Header_item__3Z_Ny",loginBlock:"Header_loginBlock__3ct48"}},88:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"max length is ".concat(e," symbols")}}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return O}));var r=n(16),a=n.n(r),c=n(29),s=n(43),o=n(5),i=n(18),u="ADD-POST",l="SET_USER_PROFILE",d="GET_STATUS",j={post:[{id:1,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430",count:2},{id:2,message:"\u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e",count:5}],profile:null,status:""},f=function(e){return{type:u,newPostText:e}},b=function(e){return{type:d,status:e}},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getProfileApi(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getUserStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:3,message:t.newPostText,count:0};return Object(o.a)(Object(o.a)({},e),{},{post:[].concat(Object(s.a)(e.post),[n])});case l:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case d:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});default:return e}}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(43),a=n(5),c=n(0),s="ADD-NEW-DIALOG",o={dialogs2:[{id:1,nname:"Dimich",avatar:Object(c.jsx)("img",{src:"http://pngimg.com/uploads/spongebob/spongebob_PNG8.png"})},{id:2,nname:"Roma",avatar:Object(c.jsx)("img",{src:"http://pngimg.com/uploads/spongebob/spongebob_PNG8.png"})},{id:3,nname:"Petiya",avatar:Object(c.jsx)("img",{src:"http://pngimg.com/uploads/spongebob/spongebob_PNG8.png"})},{id:4,nname:"Igor",avatar:Object(c.jsx)("img",{src:"http://pngimg.com/uploads/spongebob/spongebob_PNG8.png"})}],messages2:[{id:1,message:"\u043f\u0440\u0438\u0432\u0435\u0442"},{id:2,message:"\u043f\u043e\u0437\u0432\u043e\u043d\u0438 \u043c\u043d\u0435"},{id:3,message:"\u043d\u0430\u043f\u0438\u0448\u0438 \u043d\u043e\u043c\u0435\u0440"}]},i=function(e){return{type:s,newDialog:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(a.a)(Object(a.a)({},e),{},{dialogs2:[].concat(Object(r.a)(e.dialogs2),[{id:5,nname:t.newDialog,avatar:Object(c.jsx)("img",{src:"http://pngimg.com/uploads/spongebob/spongebob_PNG8.png"})}])});default:return e}}}},[[290,1,2]]]);
//# sourceMappingURL=main.e7ea43ec.chunk.js.map