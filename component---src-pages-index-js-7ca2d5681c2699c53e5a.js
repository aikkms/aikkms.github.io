(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5RGn":function(e,t,a){e.exports=a.p+"static/2-d0401bfa4507660807c560f80fd2de12.jpg"},CPBt:function(e,t,a){e.exports=a.p+"static/1-7ffe3f7073837748f9e95a121d7d1924.jpg"},CcfZ:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI");function r(){var e=Object(n.useRef)(!0),t=Object(n.useRef)((function(){return e.current}));return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("7vrA"),o=a("3Z9Z"),l=a("JI6e"),i=a("wx14"),u=a("zLVn"),s=a("TSYQ"),d=a.n(s),f=a("vUet"),m=a("YdCC"),b=function(e){return r.a.forwardRef((function(t,a){return r.a.createElement("div",Object(i.a)({},t,{ref:a,className:d()(t.className,e)}))}))},v=a("Wzyw"),p=["bsPrefix","className","variant","as"],E=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.variant,o=e.as,l=void 0===o?"img":o,s=Object(u.a)(e,p),m=Object(f.a)(a,"card-img");return r.a.createElement(l,Object(i.a)({ref:t,className:d()(c?m+"-"+c:m,n)},s))}));E.displayName="CardImg",E.defaultProps={variant:null};var O=E,j=["bsPrefix","className","bg","text","border","body","children","as"],h=b("h5"),y=b("h6"),x=Object(m.a)("card-body"),N=Object(m.a)("card-title",{Component:h}),g=Object(m.a)("card-subtitle",{Component:y}),w=Object(m.a)("card-link",{Component:"a"}),C=Object(m.a)("card-text",{Component:"p"}),k=Object(m.a)("card-header"),I=Object(m.a)("card-footer"),P=Object(m.a)("card-img-overlay"),S=r.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.bg,l=e.text,s=e.border,m=e.body,b=e.children,p=e.as,E=void 0===p?"div":p,O=Object(u.a)(e,j),h=Object(f.a)(a,"card"),y=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return r.a.createElement(v.a.Provider,{value:y},r.a.createElement(E,Object(i.a)({ref:t},O,{className:d()(c,h,o&&"bg-"+o,l&&"text-"+l,s&&"border-"+s)}),m?r.a.createElement(x,null,b):b))}));S.displayName="Card",S.defaultProps={body:!1},S.Img=O,S.Title=N,S.Subtitle=g,S.Body=x,S.Link=w,S.Text=C,S.Header=k,S.Footer=I,S.ImgOverlay=P;var T=S,M=a("dbZe"),R=["bsPrefix","variant","size","active","className","block","type","as"],L=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,c=e.size,o=e.active,l=e.className,s=e.block,m=e.type,b=e.as,v=Object(u.a)(e,R),p=Object(f.a)(a,"btn"),E=d()(l,p,o&&"active",n&&p+"-"+n,s&&p+"-block",c&&p+"-"+c);if(v.href)return r.a.createElement(M.a,Object(i.a)({},v,{as:b,ref:t,className:d()(E,v.disabled&&"disabled")}));t&&(v.ref=t),m?v.type=m:b||(v.type="button");var O=b||"button";return r.a.createElement(O,Object(i.a)({},v,{className:E}))}));L.displayName="Button",L.defaultProps={variant:"primary",active:!1,disabled:!1};var z=L,B=a("Wbzz"),F=a("VMY1");var H=function(e,t){var a=Object(n.useRef)(!0);Object(n.useEffect)((function(){if(!a.current)return e();a.current=!1}),t)},A=a("6Euu"),D=a("CcfZ");function K(e){var t,a,r=(t=e,(a=Object(n.useRef)(t)).current=t,a);Object(n.useEffect)((function(){return function(){return r.current()}}),[])}var Z=Math.pow(2,31)-1;function q(){var e=Object(D.a)(),t=Object(n.useRef)();return K((function(){return clearTimeout(t.current)})),Object(n.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(n,r){void 0===r&&(r=0),e()&&(a(),r<=Z?t.current=setTimeout(n,r):function e(t,a,n){var r=n-Date.now();t.current=r<=Z?setTimeout(a,r):setTimeout((function(){return e(t,a,n)}),Z)}(t,n,Date.now()+r))},clear:a}}),[])}var J=a("xgq2"),V=a("17x9"),X=a.n(V),Y=a("zM55"),G=Object(m.a)("carousel-caption"),U=["as","bsPrefix","children","className"],W=r.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"div":a,c=e.bsPrefix,o=e.children,l=e.className,s=Object(u.a)(e,U),m=d()(l,Object(f.a)(c,"carousel-item"));return r.a.createElement(n,Object(i.a)({ref:t},s,{className:m}),o)}));W.displayName="CarouselItem";var Q=W;function $(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}var _=a("wsUu"),ee=a("z+q/"),te=["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"],ae={bsPrefix:X.a.string,as:X.a.elementType,slide:X.a.bool,fade:X.a.bool,controls:X.a.bool,indicators:X.a.bool,activeIndex:X.a.number,onSelect:X.a.func,onSlide:X.a.func,onSlid:X.a.func,interval:X.a.number,keyboard:X.a.bool,pause:X.a.oneOf(["hover",!1]),wrap:X.a.bool,touch:X.a.bool,prevIcon:X.a.node,prevLabel:X.a.string,nextIcon:X.a.node,nextLabel:X.a.string},ne={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function re(e,t){var a=Object(Y.a)(e,{activeIndex:"onSelect"}),c=a.as,o=void 0===c?"div":c,l=a.bsPrefix,s=a.slide,m=a.fade,b=a.controls,v=a.indicators,p=a.activeIndex,E=a.onSelect,O=a.onSlide,j=a.onSlid,h=a.interval,y=a.keyboard,x=a.onKeyDown,N=a.pause,g=a.onMouseOver,w=a.onMouseOut,C=a.wrap,k=a.touch,I=a.onTouchStart,P=a.onTouchMove,S=a.onTouchEnd,T=a.prevIcon,R=a.prevLabel,L=a.nextIcon,z=a.nextLabel,B=a.className,D=a.children,K=Object(u.a)(a,te),Z=Object(f.a)(l,"carousel"),V=Object(n.useRef)(null),X=Object(n.useState)("next"),G=X[0],U=X[1],W=Object(n.useState)(!1),Q=W[0],ae=W[1],ne=Object(n.useState)(!1),re=ne[0],ce=ne[1],oe=Object(n.useState)(p||0),le=oe[0],ie=oe[1];re||p===le||(V.current?U(V.current):U((p||0)>le?"next":"prev"),s&&ce(!0),ie(p||0)),Object(n.useEffect)((function(){V.current&&(V.current=null)}));var ue,se=0;!function(e,t){var a=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,a++)}))}(D,(function(e,t){++se,t===p&&(ue=e.props.interval)}));var de=Object(A.a)(ue),fe=Object(n.useCallback)((function(e){if(!re){var t=le-1;if(t<0){if(!C)return;t=se-1}V.current="prev",E&&E(t,e)}}),[re,le,E,C,se]),me=Object(F.a)((function(e){if(!re){var t=le+1;if(t>=se){if(!C)return;t=0}V.current="next",E&&E(t,e)}})),be=Object(n.useRef)();Object(n.useImperativeHandle)(t,(function(){return{element:be.current,prev:fe,next:me}}));var ve=Object(F.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(be.current)&&me()})),pe="next"===G?"left":"right";H((function(){s||(O&&O(le,pe),j&&j(le,pe))}),[le]);var Ee=Z+"-item-"+G,Oe=Z+"-item-"+pe,je=Object(n.useCallback)((function(e){Object(ee.a)(e),O&&O(le,pe)}),[O,le,pe]),he=Object(n.useCallback)((function(){ce(!1),j&&j(le,pe)}),[j,le,pe]),ye=Object(n.useCallback)((function(e){if(y&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void fe(e);case"ArrowRight":return e.preventDefault(),void me(e)}x&&x(e)}),[y,x,fe,me]),xe=Object(n.useCallback)((function(e){"hover"===N&&ae(!0),g&&g(e)}),[N,g]),Ne=Object(n.useCallback)((function(e){ae(!1),w&&w(e)}),[w]),ge=Object(n.useRef)(0),we=Object(n.useRef)(0),Ce=q(),ke=Object(n.useCallback)((function(e){ge.current=e.touches[0].clientX,we.current=0,"hover"===N&&ae(!0),I&&I(e)}),[N,I]),Ie=Object(n.useCallback)((function(e){e.touches&&e.touches.length>1?we.current=0:we.current=e.touches[0].clientX-ge.current,P&&P(e)}),[P]),Pe=Object(n.useCallback)((function(e){if(k){var t=we.current;Math.abs(t)>40&&(t>0?fe(e):me(e))}"hover"===N&&Ce.set((function(){ae(!1)}),h||void 0),S&&S(e)}),[k,N,fe,me,Ce,h,S]),Se=null!=h&&!Q&&!re,Te=Object(n.useRef)();Object(n.useEffect)((function(){var e,t;if(Se)return Te.current=window.setInterval(document.visibilityState?ve:me,null!=(e=null!=(t=de.current)?t:h)?e:void 0),function(){null!==Te.current&&clearInterval(Te.current)}}),[Se,me,de,h,ve]);var Me=Object(n.useMemo)((function(){return v&&Array.from({length:se},(function(e,t){return function(e){E&&E(t,e)}}))}),[v,se,E]);return r.a.createElement(o,Object(i.a)({ref:be},K,{onKeyDown:ye,onMouseOver:xe,onMouseOut:Ne,onTouchStart:ke,onTouchMove:Ie,onTouchEnd:Pe,className:d()(B,Z,s&&"slide",m&&Z+"-fade")}),v&&r.a.createElement("ol",{className:Z+"-indicators"},$(D,(function(e,t){return r.a.createElement("li",{key:t,className:t===le?"active":void 0,onClick:Me?Me[t]:void 0})}))),r.a.createElement("div",{className:Z+"-inner"},$(D,(function(e,t){var a=t===le;return s?r.a.createElement(J.e,{in:a,onEnter:a?je:void 0,onEntered:a?he:void 0,addEndListener:_.a},(function(t){return r.a.cloneElement(e,{className:d()(e.props.className,a&&"entered"!==t&&Ee,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&Oe)})})):r.a.cloneElement(e,{className:d()(e.props.className,a&&"active")})}))),b&&r.a.createElement(r.a.Fragment,null,(C||0!==p)&&r.a.createElement(M.a,{className:Z+"-control-prev",onClick:fe},T,R&&r.a.createElement("span",{className:"sr-only"},R)),(C||p!==se-1)&&r.a.createElement(M.a,{className:Z+"-control-next",onClick:me},L,z&&r.a.createElement("span",{className:"sr-only"},z))))}var ce=r.a.forwardRef(re);ce.displayName="Carousel",ce.propTypes=ae,ce.defaultProps=ne,ce.Caption=G,ce.Item=Q;var oe=ce,le=a("CPBt"),ie=a.n(le),ue=a("5RGn"),se=a.n(ue),de=function(){return r.a.createElement(oe,null,r.a.createElement(oe.Item,null,r.a.createElement("img",{className:"d-block w-100",src:ie.a,alt:"First slide"}),r.a.createElement(oe.Caption,null,r.a.createElement(B.Link,{to:"/historic-movement",className:"link-no-style"},r.a.createElement("div",{style:{backgroundColor:"rgb(32, 35, 42)",padding:"8px",opacity:".8",color:"white"}}," ",r.a.createElement("h3",null,"Historic Peasants","'"," Movement"),r.a.createElement("p",null,"Fountain of Endless Inspiration"))))),r.a.createElement(oe.Item,null,r.a.createElement("img",{className:"d-block w-100",src:se.a,alt:"First slide"}),r.a.createElement(oe.Caption,null,r.a.createElement(B.Link,{to:"/historic-movement",className:"link-no-style"},r.a.createElement("div",{style:{backgroundColor:"rgb(32, 35, 42)",padding:"8px",opacity:".8",color:"white"}}," ",r.a.createElement("h3",null,"Historic Peasants","'"," Movement"),r.a.createElement("p",null,"Fountain of Endless Inspiration"))))))},fe=a("Bl7J"),me=a("vrFN");t.default=function(){return r.a.createElement(fe.a,{pageInfo:{pageName:"index"}},r.a.createElement(me.a,{title:"Home",keywords:["gatsby","react","bootstrap"]}),r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement(l.a,{md:{span:8}},r.a.createElement(de,null)),r.a.createElement(l.a,{md:{span:4}},r.a.createElement(T,null,r.a.createElement(T.Header,null,"Featured"),r.a.createElement(T.Body,null,r.a.createElement(T.Title,null,"Memorandum to Prime Minister"),r.a.createElement(z,{variant:"primary"},"Read"))),r.a.createElement("br",null),r.a.createElement(T,null,r.a.createElement(T.Header,null,"News"),r.a.createElement(T.Body,null,r.a.createElement(T.Title,null,"National Convention on ",'"',"Ongoing Peasants","'"," movement",'"'),r.a.createElement(T.Text,null,"This online  National convention, at the call of All India Kisan Khet Mazdoor Sangathan, AIKKMS, expresses its wholehearted revolutionary greetings to the struggling farmers across the country..."),r.a.createElement(z,{variant:"primary"},"Read")))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-7ca2d5681c2699c53e5a.js.map