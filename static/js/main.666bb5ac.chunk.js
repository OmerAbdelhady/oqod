(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{108:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),i=(n(81),n(14)),s=n(15),l=n(17),j=n(16),d=(n(82),n(52)),h=n.n(d),u=n(67),b=n(33),p=n(11),O=(n.p,n(6)),f=n(143),x=n(147),g=n(146),y=n(144),m=n(145),v=n(140),k=n(2);var w=Object(O.a)((function(t){return{root:{width:"100%",marginTop:3*t.spacing.unit,overflowX:"auto"},table:{minWidth:700}}}))((function(t){var e=t.classes,n=t.data;return Object(k.jsx)(v.a,{className:e.root,children:Object(k.jsxs)(f.a,{className:e.table,children:[Object(k.jsx)(y.a,{children:Object(k.jsxs)(m.a,{children:[Object(k.jsx)(g.a,{children:"Key"}),Object(k.jsx)(g.a,{align:"right",children:" id"}),Object(k.jsx)(g.a,{align:"right",children:" owner"}),Object(k.jsx)(g.a,{align:"right",children:" type"}),Object(k.jsx)(g.a,{align:"right",children:" quantity"})]})}),Object(k.jsx)(x.a,{children:n.map((function(t){return Object(k.jsxs)(m.a,{children:[Object(k.jsx)(g.a,{component:"th",scope:"row",children:t.Key}),Object(k.jsx)(g.a,{align:"right",children:t.Record.id}),Object(k.jsx)(g.a,{align:"right",children:t.Record.owner}),Object(k.jsx)(g.a,{align:"right",children:t.Record.type}),Object(k.jsx)(g.a,{align:"right",children:t.Record.quantity})]},t.id)}))})]})})})),C=n(148),S=n(156),T=n(149),_=n(157),D=n(150),q=n(154),I=n(152),A=n(32),B=n.n(A),N=n(155),L=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).handleDrawerToggle=function(){a.setState((function(t){return{mobileOpen:!t.mobileOpen}}))},a.drawerContent=Object(k.jsxs)(C.a,{children:[Object(k.jsx)(S.a,{children:Object(k.jsx)(T.a,{children:Object(k.jsx)("img",{class:"sealImage",src:"https://oqod.co/static/media/logo-primary.59f3b0bc.png",alt:"Girl",width:150,height:100})})}),Object(k.jsxs)(S.a,{button:!0,onClick:function(){return a.props.history.push("/")},children:[Object(k.jsx)(T.a,{}),Object(k.jsx)(_.a,{primary:"All Token"})]}),Object(k.jsxs)(S.a,{button:!0,onClick:function(){return a.props.history.push("/Token")},children:[Object(k.jsx)(T.a,{}),Object(k.jsx)(_.a,{primary:"Create Token"})]}),Object(k.jsxs)(S.a,{button:!0,onClick:function(){return a.props.history.push("/Transfer")},children:[Object(k.jsx)(T.a,{}),Object(k.jsx)(_.a,{primary:"transfer"})]}),Object(k.jsxs)(S.a,{button:!0,onClick:function(){return a.props.history.push("/TokenInfo")},children:[Object(k.jsx)(T.a,{}),Object(k.jsx)(_.a,{primary:"TokenInfo"})]})]}),a.state={mobileOpen:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.mobileOpen;return Object(k.jsxs)("div",{className:B.a.root,children:[Object(k.jsx)("div",{className:B.a.appBar,children:Object(k.jsx)(D.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:this.handleDrawerToggle,className:B.a.menuButton,children:Object(k.jsx)(N.a,{style:{color:"white"}})})}),Object(k.jsxs)("nav",{className:B.a.drawer,"aria-label":"mailbox folders",children:[Object(k.jsx)(q.a,{smUp:!0,implementation:"css",children:Object(k.jsx)(I.a,{variant:"temporary",open:t,onClose:this.handleDrawerToggle,classes:{paper:B.a.drawerPaper},ModalProps:{keepMounted:!0},children:this.drawerContent})}),Object(k.jsx)(q.a,{xsDown:!0,implementation:"css",children:Object(k.jsx)(I.a,{classes:{paper:B.a.drawerPaper},variant:"permanent",open:!0,children:this.drawerContent})})]}),Object(k.jsx)("main",{className:B.a.content,children:this.props.children})]})}}]),n}(a.Component),P=Object(p.f)(L),z=n(28),F=n.n(z),G=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).state={data:[]},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;F.a.get("http://3.227.84.96:10000/returnAllToken",{}).then((function(e){return t.setState({data:null===e||void 0===e?void 0:e.data})})).catch((function(t){return console.log("error",t)}))}},{key:"render",value:function(){return Object(k.jsx)(P,{children:Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)("header",{className:"App-header",children:[Object(k.jsxs)("div",{style:{width:"100%",paddingLeft:10},children:[Object(k.jsx)("h1",{style:{fontSize:30,color:"#000",textAlign:"left"},children:" all token"}),Object(k.jsx)("div",{style:{width:"10%",height:2,backgroundColor:"#000"}})]}),Object(k.jsx)(w,{data:this.state.data})]})})})}}]),n}(a.Component),M=n(153),R=n(151),J=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).SendData=function(){F.a.post("http://3.227.84.96:10000/CreatToken",{id:t.state.id,owner:t.state.owner,type:t.state.type,quantity:t.state.quantity}).then((function(t){return console.log("res",t.data)})).catch((function(t){return console.log("error",t)}))},t.state={id:"",owner:"",type:"",quantity:""},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(k.jsxs)(P,{children:[Object(k.jsx)("h1",{style:{fontSize:30,color:"#000",textAlign:"left"},children:" CreateToken"}),Object(k.jsx)("div",{style:{width:"13%",height:2,backgroundColor:"#000"}}),Object(k.jsx)(M.a,{placeholder:"id",style:{display:"block",width:"40%"},onChange:function(e,n){return t.setState({id:e.target.value})}}),Object(k.jsx)(M.a,{placeholder:"owner",style:{display:"block",width:"40%"},onChange:function(e,n){return t.setState({owner:e.target.value})}}),Object(k.jsx)(M.a,{placeholder:"type",style:{display:"block",width:"40%"},onChange:function(e,n){return t.setState({type:e.target.value})}}),Object(k.jsx)(M.a,{placeholder:"quantity",style:{display:"block",width:"40%"},onChange:function(e,n){return t.setState({quantity:e.target.value})}}),Object(k.jsx)(R.a,{variant:"contained",color:"primary",style:{alignSelf:"self-start",display:"block",margin:10,marginLeft:"15%"},onClick:function(){return t.SendData()},children:"Create"})]})}}]),n}(a.Component),K=Object(p.f)(J),V=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).sendData=function(){F.a.post("http://3.227.84.96:10000/transfer",{sid:t.state.sid,rid:t.state.rid,quant:t.state.quant}).then((function(t){return console.log("res",t.data)})).catch((function(t){return console.log("error",t.response.data)}))},t.state={sid:"",rid:"",quant:""},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(k.jsxs)(P,{children:[Object(k.jsx)("h1",{style:{fontSize:30,color:"#000",textAlign:"left"},children:" transfer"}),Object(k.jsx)("div",{style:{width:"13%",height:2,backgroundColor:"#000"}}),Object(k.jsx)(M.a,{placeholder:"sid",style:{display:"block",width:"40%"},onChange:function(e,n){return t.setState({sid:e.target.value})}}),Object(k.jsx)(M.a,{placeholder:"rid",style:{display:"block",width:"40%"},onChange:function(e,n){return t.setState({rid:e.target.value})}}),Object(k.jsx)(M.a,{placeholder:"quant",style:{display:"block",width:"40%"},onChange:function(e,n){return t.setState({quant:e.target.value})}}),Object(k.jsx)(R.a,{variant:"contained",color:"primary",style:{alignSelf:"self-start",display:"block",margin:10,marginLeft:"15%"},onClick:function(){return t.sendData()},children:"Create"})]})}}]),n}(a.Component),W=Object(p.f)(V),E=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).SendData=function(){F.a.post("https://cors-anywhere.herokuapp.com/http://3.227.84.96:10000/GettokenByID",{ID:t.state.Id}).then((function(t){return console.log("res",t.data)})).catch((function(t){return console.log("error",t.response.data)}))},t.state={Id:""},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(k.jsxs)(P,{children:[Object(k.jsx)("h1",{style:{fontSize:30,color:"#000",textAlign:"left"},children:" Get Token"}),Object(k.jsx)("div",{style:{width:"13%",height:2,backgroundColor:"#000"}}),Object(k.jsx)(M.a,{placeholder:"Id",style:{display:"block",width:"40%"},onChange:function(e,n){return t.setState({Id:e.target.value})}}),Object(k.jsx)(R.a,{onClick:function(){return t.SendData()},variant:"contained",color:"primary",style:{alignSelf:"self-start",display:"block",margin:10,marginLeft:"15%"},children:"Get Token"})]})}}]),n}(a.Component),U=Object(p.f)(E),X=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).componentDidMount=Object(u.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))),t.state={},t}return Object(s.a)(n,[{key:"render",value:function(){this.state.redirectToLogin;return Object(k.jsx)(b.a,{children:Object(k.jsxs)(p.c,{children:[Object(k.jsx)(p.a,{path:"/TokenInfo",component:U}),Object(k.jsx)(p.a,{path:"/Token",component:K}),Object(k.jsx)(p.a,{path:"/Transfer",component:W}),Object(k.jsx)(p.a,{path:"/",component:G})]})})}}]),n}(a.Component),Y=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(k.jsx)(X,{})}}]),n}(a.Component),Z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,158)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))};o.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(Y,{})}),document.getElementById("root")),Z()},32:function(t,e,n){t.exports={root:"style_root__1jCtp",appBar:"style_appBar__2YZ0_",menuButton:"style_menuButton__2VGAW",drawerPaper:"style_drawerPaper__175xT",content:"style_content__1VFzg",drawer:"style_drawer__3Jd2A"}},81:function(t,e,n){},82:function(t,e,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.666bb5ac.chunk.js.map