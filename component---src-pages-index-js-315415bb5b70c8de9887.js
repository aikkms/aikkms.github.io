(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5RGn":function(e,t,a){e.exports=a.p+"static/2-d0401bfa4507660807c560f80fd2de12.jpg"},"9DkT":function(e,t,a){e.exports=a.p+"static/1-62a2a4bf1ec66e315e29aae2033ceaff.jpg"},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),o=a("7vrA"),l=a("3Z9Z"),i=a("JI6e"),u=a("wx14"),s=a("zLVn"),d=a("TSYQ"),m=a.n(d),f=a("vUet"),b=a("YdCC"),v=function(e){return r.a.forwardRef((function(t,a){return r.a.createElement("div",Object(u.a)({},t,{ref:a,className:m()(t.className,e)}))}))},p=a("Wzyw"),E=["bsPrefix","className","variant","as"],O=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.variant,o=e.as,l=void 0===o?"img":o,i=Object(s.a)(e,E),d=Object(f.a)(a,"card-img");return r.a.createElement(l,Object(u.a)({ref:t,className:m()(c?d+"-"+c:d,n)},i))}));O.displayName="CardImg",O.defaultProps={variant:null};var j=O,h=["bsPrefix","className","bg","text","border","body","children","as"],y=v("h5"),g=v("h6"),N=Object(b.a)("card-body"),k=Object(b.a)("card-title",{Component:y}),x=Object(b.a)("card-subtitle",{Component:g}),w=Object(b.a)("card-link",{Component:"a"}),C=Object(b.a)("card-text",{Component:"p"}),I=Object(b.a)("card-header"),S=Object(b.a)("card-footer"),T=Object(b.a)("card-img-overlay"),R=r.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.bg,l=e.text,i=e.border,d=e.body,b=e.children,v=e.as,E=void 0===v?"div":v,O=Object(s.a)(e,h),j=Object(f.a)(a,"card"),y=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return r.a.createElement(p.a.Provider,{value:y},r.a.createElement(E,Object(u.a)({ref:t},O,{className:m()(c,j,o&&"bg-"+o,l&&"text-"+l,i&&"border-"+i)}),d?r.a.createElement(N,null,b):b))}));R.displayName="Card",R.defaultProps={body:!1},R.Img=j,R.Title=k,R.Subtitle=x,R.Body=N,R.Link=w,R.Text=C,R.Header=I,R.Footer=S,R.ImgOverlay=T;var P=R,M=a("dbZe"),A=["bsPrefix","variant","size","active","className","block","type","as"],K=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,c=e.size,o=e.active,l=e.className,i=e.block,d=e.type,b=e.as,v=Object(s.a)(e,A),p=Object(f.a)(a,"btn"),E=m()(l,p,o&&"active",n&&p+"-"+n,i&&p+"-block",c&&p+"-"+c);if(v.href)return r.a.createElement(M.a,Object(u.a)({},v,{as:b,ref:t,className:m()(E,v.disabled&&"disabled")}));t&&(v.ref=t),d?v.type=d:b||(v.type="button");var O=b||"button";return r.a.createElement(O,Object(u.a)({},v,{className:E}))}));K.displayName="Button",K.defaultProps={variant:"primary",active:!1,disabled:!1};var L=K,H=a("ZCiN");var D=function(e,t){var a=Object(n.useRef)(!0);Object(n.useEffect)((function(){if(!a.current)return e();a.current=!1}),t)},B=a("Xyuu"),z=a("XcHJ");function F(e){var t,a,r=(t=e,(a=Object(n.useRef)(t)).current=t,a);Object(n.useEffect)((function(){return function(){return r.current()}}),[])}var J=Math.pow(2,31)-1;function X(){var e=Object(z.a)(),t=Object(n.useRef)();return F((function(){return clearTimeout(t.current)})),Object(n.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(n,r){void 0===r&&(r=0),e()&&(a(),r<=J?t.current=setTimeout(n,r):function e(t,a,n){var r=n-Date.now();t.current=r<=J?setTimeout(a,r):setTimeout((function(){return e(t,a,n)}),J)}(t,n,Date.now()+r))},clear:a}}),[])}var G=a("dRu9"),Z=a("17x9"),q=a.n(Z),Q=a("y8DL"),U=Object(b.a)("carousel-caption"),V=["as","bsPrefix","children","className"],Y=r.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"div":a,c=e.bsPrefix,o=e.children,l=e.className,i=Object(s.a)(e,V),d=m()(l,Object(f.a)(c,"carousel-item"));return r.a.createElement(n,Object(u.a)({ref:t},i,{className:d}),o)}));Y.displayName="CarouselItem";var W=Y;function $(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}var _=a("wsUu"),ee=a("z+q/"),te=["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"],ae={bsPrefix:q.a.string,as:q.a.elementType,slide:q.a.bool,fade:q.a.bool,controls:q.a.bool,indicators:q.a.bool,activeIndex:q.a.number,onSelect:q.a.func,onSlide:q.a.func,onSlid:q.a.func,interval:q.a.number,keyboard:q.a.bool,pause:q.a.oneOf(["hover",!1]),wrap:q.a.bool,touch:q.a.bool,prevIcon:q.a.node,prevLabel:q.a.string,nextIcon:q.a.node,nextLabel:q.a.string},ne={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function re(e,t){var a=Object(Q.a)(e,{activeIndex:"onSelect"}),c=a.as,o=void 0===c?"div":c,l=a.bsPrefix,i=a.slide,d=a.fade,b=a.controls,v=a.indicators,p=a.activeIndex,E=a.onSelect,O=a.onSlide,j=a.onSlid,h=a.interval,y=a.keyboard,g=a.onKeyDown,N=a.pause,k=a.onMouseOver,x=a.onMouseOut,w=a.wrap,C=a.touch,I=a.onTouchStart,S=a.onTouchMove,T=a.onTouchEnd,R=a.prevIcon,P=a.prevLabel,A=a.nextIcon,K=a.nextLabel,L=a.className,z=a.children,F=Object(s.a)(a,te),J=Object(f.a)(l,"carousel"),Z=Object(n.useRef)(null),q=Object(n.useState)("next"),U=q[0],V=q[1],Y=Object(n.useState)(!1),W=Y[0],ae=Y[1],ne=Object(n.useState)(!1),re=ne[0],ce=ne[1],oe=Object(n.useState)(p||0),le=oe[0],ie=oe[1];re||p===le||(Z.current?V(Z.current):V((p||0)>le?"next":"prev"),i&&ce(!0),ie(p||0)),Object(n.useEffect)((function(){Z.current&&(Z.current=null)}));var ue,se=0;!function(e,t){var a=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,a++)}))}(z,(function(e,t){++se,t===p&&(ue=e.props.interval)}));var de=Object(B.a)(ue),me=Object(n.useCallback)((function(e){if(!re){var t=le-1;if(t<0){if(!w)return;t=se-1}Z.current="prev",E&&E(t,e)}}),[re,le,E,w,se]),fe=Object(H.a)((function(e){if(!re){var t=le+1;if(t>=se){if(!w)return;t=0}Z.current="next",E&&E(t,e)}})),be=Object(n.useRef)();Object(n.useImperativeHandle)(t,(function(){return{element:be.current,prev:me,next:fe}}));var ve=Object(H.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(be.current)&&fe()})),pe="next"===U?"left":"right";D((function(){i||(O&&O(le,pe),j&&j(le,pe))}),[le]);var Ee=J+"-item-"+U,Oe=J+"-item-"+pe,je=Object(n.useCallback)((function(e){Object(ee.a)(e),O&&O(le,pe)}),[O,le,pe]),he=Object(n.useCallback)((function(){ce(!1),j&&j(le,pe)}),[j,le,pe]),ye=Object(n.useCallback)((function(e){if(y&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void me(e);case"ArrowRight":return e.preventDefault(),void fe(e)}g&&g(e)}),[y,g,me,fe]),ge=Object(n.useCallback)((function(e){"hover"===N&&ae(!0),k&&k(e)}),[N,k]),Ne=Object(n.useCallback)((function(e){ae(!1),x&&x(e)}),[x]),ke=Object(n.useRef)(0),xe=Object(n.useRef)(0),we=X(),Ce=Object(n.useCallback)((function(e){ke.current=e.touches[0].clientX,xe.current=0,"hover"===N&&ae(!0),I&&I(e)}),[N,I]),Ie=Object(n.useCallback)((function(e){e.touches&&e.touches.length>1?xe.current=0:xe.current=e.touches[0].clientX-ke.current,S&&S(e)}),[S]),Se=Object(n.useCallback)((function(e){if(C){var t=xe.current;Math.abs(t)>40&&(t>0?me(e):fe(e))}"hover"===N&&we.set((function(){ae(!1)}),h||void 0),T&&T(e)}),[C,N,me,fe,we,h,T]),Te=null!=h&&!W&&!re,Re=Object(n.useRef)();Object(n.useEffect)((function(){var e,t;if(Te)return Re.current=window.setInterval(document.visibilityState?ve:fe,null!=(e=null!=(t=de.current)?t:h)?e:void 0),function(){null!==Re.current&&clearInterval(Re.current)}}),[Te,fe,de,h,ve]);var Pe=Object(n.useMemo)((function(){return v&&Array.from({length:se},(function(e,t){return function(e){E&&E(t,e)}}))}),[v,se,E]);return r.a.createElement(o,Object(u.a)({ref:be},F,{onKeyDown:ye,onMouseOver:ge,onMouseOut:Ne,onTouchStart:Ce,onTouchMove:Ie,onTouchEnd:Se,className:m()(L,J,i&&"slide",d&&J+"-fade")}),v&&r.a.createElement("ol",{className:J+"-indicators"},$(z,(function(e,t){return r.a.createElement("li",{key:t,className:t===le?"active":void 0,onClick:Pe?Pe[t]:void 0})}))),r.a.createElement("div",{className:J+"-inner"},$(z,(function(e,t){var a=t===le;return i?r.a.createElement(G.e,{in:a,onEnter:a?je:void 0,onEntered:a?he:void 0,addEndListener:_.a},(function(t){return r.a.cloneElement(e,{className:m()(e.props.className,a&&"entered"!==t&&Ee,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&Oe)})})):r.a.cloneElement(e,{className:m()(e.props.className,a&&"active")})}))),b&&r.a.createElement(r.a.Fragment,null,(w||0!==p)&&r.a.createElement(M.a,{className:J+"-control-prev",onClick:me},R,P&&r.a.createElement("span",{className:"sr-only"},P)),(w||p!==se-1)&&r.a.createElement(M.a,{className:J+"-control-next",onClick:fe},A,K&&r.a.createElement("span",{className:"sr-only"},K))))}var ce=r.a.forwardRef(re);ce.displayName="Carousel",ce.propTypes=ae,ce.defaultProps=ne,ce.Caption=U,ce.Item=W;var oe=ce,le=a("xQRS"),ie=a.n(le),ue=a("5RGn"),se=a.n(ue),de=a("9DkT"),me=a.n(de),fe=function(){return r.a.createElement(oe,null,r.a.createElement(oe.Item,null,r.a.createElement("img",{className:"d-block w-100",src:ie.a,alt:"First slide",onClick:function(){return Object(c.navigate)("/karnataka-wide-protest-26Nov21")},style:{cursor:"pointer"}}),r.a.createElement(oe.Caption,null,r.a.createElement("div",{className:"d-none d-sm-block",style:{backgroundColor:"rgb(32, 35, 42)",padding:"8px",opacity:".8",color:"white",cursor:"pointer"},onClick:function(){return Object(c.navigate)("/karnataka-wide-protest-26Nov21")}},r.a.createElement("h3",null,"Karnataka wide protest on 26th November")))),r.a.createElement(oe.Item,null,r.a.createElement("img",{className:"d-block w-100",src:se.a,alt:"First slide",onClick:function(){return Object(c.navigate)("/historic-movement")},style:{cursor:"pointer"}}),r.a.createElement(oe.Caption,null,r.a.createElement("div",{className:"d-none d-sm-block",style:{backgroundColor:"rgb(32, 35, 42)",padding:"8px",opacity:".8",color:"white",cursor:"pointer"},onClick:function(){return Object(c.navigate)("/historic-movement")}},r.a.createElement("h3",null,"Historic Peasants","'"," Movement - Fountain of Endless Inspiration")))),r.a.createElement(oe.Item,null,r.a.createElement("img",{className:"d-block w-100",src:me.a,alt:"First slide",onClick:function(){return Object(c.navigate)("/online-convention")},style:{cursor:"pointer"}}),r.a.createElement(oe.Caption,null,r.a.createElement("div",{className:"d-none d-sm-block",style:{backgroundColor:"rgb(32, 35, 42)",padding:"8px",opacity:".8",color:"white",cursor:"pointer"},onClick:function(){return Object(c.navigate)("/online-convention")}},r.a.createElement("h3",null,"National Convention on “Ongoing peasant movement”")))))},be=a("Bl7J"),ve=a("vrFN");t.default=function(){return r.a.createElement(be.a,{pageInfo:{pageName:"index"}},r.a.createElement(ve.a,{title:"Home",keywords:["gatsby","react","bootstrap"]}),r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement(i.a,{md:{span:8}},r.a.createElement(fe,null),r.a.createElement("br",null),r.a.createElement(l.a,null,r.a.createElement(i.a,{md:{span:6}},r.a.createElement(P,null,r.a.createElement(P.Header,null,"News"),r.a.createElement(P.Body,null,r.a.createElement(P.Title,null,"Karnataka wide protest on 26th November"),r.a.createElement(P.Text,null,'On the call of a "SAMYUKTA HORATA - KARNATAKA" Nandur village in Kalaburagi district was blocked off the 150 National highway and protested...'),r.a.createElement(L,{variant:"primary",onClick:function(){return Object(c.navigate)("/karnataka-wide-protest-26Nov21")}},"Read")))),r.a.createElement(i.a,{md:{span:6}},r.a.createElement(P,null,r.a.createElement(P.Header,null,"News"),r.a.createElement(P.Body,null,r.a.createElement(P.Title,null,"National Convention on ",'"',"Ongoing Peasants","'"," movement",'"'),r.a.createElement(P.Text,null,"This online  National convention, at the call of All India Kisan Khet Mazdoor Sangathan, AIKKMS, expresses its wholehearted revolutionary greetings to the struggling farmers across the country..."),r.a.createElement(L,{variant:"primary",onClick:function(){return Object(c.navigate)("/online-convention")}},"Read")))))),r.a.createElement(i.a,{md:{span:4}},r.a.createElement(P,null,r.a.createElement(P.Header,null,"Statement"),r.a.createElement(P.Body,null,r.a.createElement(P.Text,null,"Sri Satyawan, President and Sankar Ghosh, General secretary of AIKKMS said in a statement on November 29"),r.a.createElement(L,{variant:"primary",onClick:function(){return Object(c.navigate)("/statement-on-bill-repeal")}},"Read"))),r.a.createElement("br",null),r.a.createElement(P,null,r.a.createElement(P.Header,null,"Featured"),r.a.createElement(P.Body,null,r.a.createElement(P.Text,null,"Memorandum to Prime Minister"),r.a.createElement(L,{variant:"primary",onClick:function(){return Object(c.navigate)("/memorandum")}},"Read"))),r.a.createElement("br",null)))))}},XcHJ:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI");function r(){var e=Object(n.useRef)(!0),t=Object(n.useRef)((function(){return e.current}));return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},xQRS:function(e,t,a){e.exports=a.p+"static/karnataka-wide-protest-26Nov21-4-2f9d45c6b4fc7944dbfdf12a517f93c7.jpeg"}}]);
//# sourceMappingURL=component---src-pages-index-js-315415bb5b70c8de9887.js.map