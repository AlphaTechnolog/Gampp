(this.webpackJsonpgampplux=this.webpackJsonpgampplux||[]).push([[0],{19:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n(10),l=n.n(o),s=n(13),m=n(11),u=8e3,i="localhost",p=Object(a.createContext)();function E(e){var t=e.children,n=Object(a.useState)("/"),c=Object(m.a)(n,2),o=c[0],E=c[1],f=Object(a.useState)({directories:[],files:[]}),v=Object(m.a)(f,2),d=v[0],x=v[1],b=Object(a.useState)(!0),C=Object(m.a)(b,2),j=C[0],O=C[1];Object(a.useEffect)((function(){Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,g();case 3:O(!1);case 4:case"end":return e.stop()}}),e)})))()}),[o]);var g=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://".concat(i,":").concat(u).concat(o,"json"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,x(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(p.Provider,{value:{url:o,setUrl:E,content:d,setContent:x,loadingContent:j,setLoadingContent:O}},t)}function f(e){var t=e.Component,n=Object(a.useContext)(p).url;return r.a.createElement(t,{text:"Content of /servers".concat(n)})}function v(e){var t=e.Component,n=Object(a.useContext)(p),c=n.url,o=n.setUrl;return r.a.createElement(t,{props:{onClick:function(){return function(e){var t=e.split("/");t.pop(),t.pop(),t=t.join("/"),o("".concat(t,"/"))}(c)}}})}function d(e){var t=e.Folder,n=e.File,c=Object(a.useContext)(p),o=c.content,l=c.url,s=c.setUrl;return r.a.createElement(r.a.Fragment,null,o.directories.map((function(e,n){return r.a.createElement(t,{key:n,name:e,props:{onClick:function(){return t=e,void s("".concat(l).concat(t,"/"));var t}}})})),o.files.map((function(e,t){return r.a.createElement(n,{key:t,name:e,props:{onClick:function(){return t=e,void(window.location="http://".concat(i,":").concat(u).concat(l).concat(t));var t}}})})))}function x(e){var t=e.Title,n=e.Content,c=e.ContentUpDir,o=e.ContentLoader,l=e.Footer,s=Object(a.useContext)(p),m=s.loadingContent,u=s.content;return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,null),m?r.a.createElement(o,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(c,null),r.a.createElement(n,null),r.a.createElement(l,{platform:u.platform,version:u.version})))}function b(e){return r.a.createElement(E,null,r.a.createElement(x,e))}var C=n(14);function j(e){var t=e.text;return r.a.createElement(C.a,{bg:"dark",variant:"dark"},r.a.createElement(C.a.Brand,null,t))}function O(){return r.a.createElement(f,{Component:j})}var g=n(8),h=n(7),N=n(6),k=n(30),y=n(31);function w(e){var t=e.name,n=e.props;return r.a.createElement(N.a,{className:"text-center",sm:"4",md:"3"},r.a.createElement(h.a,Object.assign({},n,{style:{cursor:"pointer"}}),r.a.createElement(N.a,{className:"text-center",sm:"12"},r.a.createElement(k.a,{size:"40"})),r.a.createElement(N.a,{sm:"12"},r.a.createElement("p",{className:"text-center"},t))))}function F(e){var t=e.name,n=e.props;return r.a.createElement(N.a,{className:"text-center",sm:"4",md:"3"},r.a.createElement(h.a,Object.assign({},n,{style:{cursor:"pointer"}}),r.a.createElement(N.a,{className:"text-center",sm:"12"},r.a.createElement(y.a,{style:{fontSize:40}})),r.a.createElement(N.a,{sm:"12"},r.a.createElement("p",{className:"text-center",style:{cursor:"pointer"}},t))))}var U=function(){return r.a.createElement(g.a,{className:"mt-5 mb-4"},r.a.createElement(h.a,null,r.a.createElement(d,{Folder:w,File:F})))};function L(e){var t=e.props;return r.a.createElement(N.a,{className:"text-center",sm:"12"},r.a.createElement(h.a,Object.assign({},t,{style:{cursor:"pointer"}}),r.a.createElement(N.a,{className:"text-center",sm:"12"},r.a.createElement(k.a,{size:"40"})),r.a.createElement(N.a,{sm:"12"},r.a.createElement("p",{className:"text-center"},".."))))}var S=function(){return r.a.createElement(g.a,{className:"mt-5 mb-4"},r.a.createElement(h.a,null,r.a.createElement(v,{Component:L})))},z=n(16);var T=function(){return r.a.createElement(g.a,{className:"text-center mx-auto"},r.a.createElement("h5",null,"Loading..."),r.a.createElement(z.a,{animation:"border",variant:"primary",className:"mx-auto"},r.a.createElement("span",{className:"sr-only"},"load spinner")))},B=n(17);var D=function(e){var t=e.platform,n=e.version;return r.a.createElement("footer",{style:Object(B.a)({},{position:"fixed",background:"#343a40",color:"white",width:"100%",paddingTop:13,textAlign:"center",bottom:"0"})},r.a.createElement("p",null,"Gampp is running on ",n," ",t))};var J=function(){return r.a.createElement(b,{Title:O,Content:U,ContentUpDir:S,ContentLoader:T,Footer:D})},A=(n(27),document.getElementById("root"));Object(c.render)(r.a.createElement(J,null),A)}},[[19,1,2]]]);
//# sourceMappingURL=main.99add8b7.chunk.js.map