(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],Array(19).concat([function(e,t,a){e.exports=a.p+"static/media/Resume.12eb916d.pdf"},,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/react.7ddd8191.svg"},,,,,function(e,t,a){e.exports=a(74)},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.a22651a7.svg"},function(e,t,a){e.exports=a.p+"static/media/python.fbef321e.svg"},function(e,t,a){e.exports=a.p+"static/media/java.00d6a383.svg"},function(e,t,a){e.exports=a.p+"static/media/csharp.2b51d9ab.svg"},function(e,t,a){e.exports=a.p+"static/media/cpp.0cc4bc06.svg"},function(e,t,a){e.exports=a.p+"static/media/javascript.08f445b6.svg"},function(e,t,a){e.exports=a.p+"static/media/html.84894ab2.svg"},function(e,t,a){e.exports=a.p+"static/media/css.f2fff6f1.svg"},function(e,t,a){e.exports=a.p+"static/media/swift.23184a95.svg"},function(e,t,a){e.exports=a.p+"static/media/visualbasic.c6e2e79d.svg"},function(e,t,a){e.exports=a.p+"static/media/tux.5961fdae.svg"},function(e,t,a){e.exports=a.p+"static/media/mysql.7c4f9c84.svg"},,function(e,t,a){e.exports=a.p+"static/media/SugoifridgeTriple.28f766d5.png"},function(e,t,a){e.exports=a.p+"static/media/Where2Meet.eee6cf1a.png"},function(e,t,a){e.exports=a.p+"static/media/GOTOLocker.12cadc68.png"},function(e,t,a){e.exports=a.p+"static/media/ZotSleep.b808da8d.png"},function(e,t,a){e.exports=a.p+"static/media/LAParking.72c5b8de.png"},function(e,t,a){e.exports=a.p+"static/media/PCLearning.69a9c874.png"},function(e,t,a){e.exports=a.p+"static/media/lavabob.2a75a731.gif"},function(e,t,a){e.exports=a.p+"static/media/FacialDetection.8bc45391.png"},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(17),i=a.n(l),c=a(13),o=a(8),s=a(5),m=function(e){var t=e.component,a=e.layout,r=Object(s.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(c.d,Object.assign({},r,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},d=a(18),u=a(4),v=a.n(u),p=a(29),g=n.a.forwardRef((function(e,t){var a=Object(r.useState)(window.innerHeight),l=Object(d.a)(a,2),i=l[0],c=l[1],o=Object(r.useState)([]),s=Object(d.a)(o,2),m=s[0],u=s[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},g=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),r=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=i-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,r)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(r.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(r.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",h),window.addEventListener("resize",b)),g())}),[m]);var f=function(){v()&&(window.removeEventListener("scroll",h),window.removeEventListener("resize",b))},h=Object(p.throttle)((function(){f(),g()}),30),b=Object(p.throttle)((function(){c(window.innerHeight)}),30);return Object(r.useEffect)((function(){f(),g()}),[i]),n.a.createElement(n.a.Fragment,null,e.children())}));g.propTypes={children:v.a.func.isRequired};var f=g,h=a(24),b=a(2),E=a.n(b),N=a(11),O=a(36),y=a.n(O),x=a(15),w=function(e){var t=e.className,a=e.src,l=e.width,i=e.height,c=e.alt,o=Object(s.a)(e,["className","src","width","height","alt"]),m=Object(r.useRef)(null);return n.a.createElement("img",Object.assign({},o,{ref:m,className:t,src:a,width:l,height:i,alt:c}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var k=w,j=function(e){var t=e.className,r=Object(s.a)(e,["className"]),l=E()("brand",t);return n.a.createElement("div",Object.assign({},r,{className:l}),n.a.createElement("h1",{className:"m-0"},n.a.createElement(x.Link,{to:"/portfolio"},n.a.createElement(k,{src:a(48),alt:"Open",width:32,height:32}))))},D=a(19),S=a.n(D);y.a.polyfill();var C=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,i=e.hideSignin,c=e.bottomOuterDivider,o=e.bottomDivider,m=Object(s.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(r.useState)(!1),v=Object(d.a)(u,2),p=v[0],g=v[1],f=Object(r.useRef)(null),h=Object(r.useRef)(null);Object(r.useEffect)((function(){return p&&b(),document.addEventListener("keydown",y),document.addEventListener("click",x),function(){document.removeEventListener("keydown",y),document.addEventListener("click",x),O()}}));var b=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",g(!0)},O=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),g(!1)},y=function(e){p&&27===e.keyCode&&O()},x=function(e){f.current&&p&&!f.current.contains(e.target)&&e.target!==h.current&&O()},w=E()("site-header",c&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},m,{className:w}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:E()("site-header-inner",o&&"has-bottom-divider")},n.a.createElement(j,null),!l&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{ref:h,className:"header-nav-toggle",onClick:p?O:b},n.a.createElement("span",{className:"screen-reader"},"Menu"),n.a.createElement("span",{className:"hamburger"},n.a.createElement("span",{className:"hamburger-inner"}))),n.a.createElement("nav",{ref:f,className:E()("header-nav",p&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))},n.a.createElement("li",null,n.a.createElement(N.HashLink,{smooth:!0,to:"#skills",onClick:O},"Skills")),n.a.createElement("li",null,n.a.createElement(N.HashLink,{smooth:!0,to:"#experiences",onClick:O},"Experiences")),n.a.createElement("li",null,n.a.createElement(N.HashLink,{smooth:!0,to:"#projects",onClick:O},"Projects")),n.a.createElement("li",null,n.a.createElement(N.HashLink,{smooth:!0,to:"#contact",onClick:O},"Contact me"))),!i&&n.a.createElement("ul",{className:"list-reset header-nav-right"},n.a.createElement("li",null,n.a.createElement(N.HashLink,{to:S.a,target:"_blank",className:"button button-secondary button-wide-mobile button-sm",onClick:O},"Resume")))))))))};C.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var P=C,L=function(e){var t=e.className,a=e.topOuterDivider,r=e.topDivider,l=Object(s.a)(e,["className","topOuterDivider","topDivider"]),i=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},l,{className:i}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:E()("site-footer-inner",r&&"has-top-divider")},n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement("div",{className:"footer-copyright"},"Made using React and Cruip template.")))))};L.defaultProps={topOuterDivider:!1,topDivider:!1};var F=L,A=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(P,{navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(F,null))},R=a(6),M={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},T={types:Object(R.a)({},M.types),defaults:Object(R.a)({},M.defaults)},B={types:Object(R.a)({},M.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(R.a)({},M.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},H={types:Object(R.a)({},M.types,{pushLeft:v.a.bool}),defaults:Object(R.a)({},M.defaults,{pushLeft:!1})},I=function(e){var t=e.className,a=Object(s.a)(e,["className"]),r=E()("button-group",t);return n.a.createElement("div",Object.assign({},a,{className:r}))},_=Object(R.a)({},T.defaults),z=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,i=e.bottomDivider,c=e.hasBgColor,o=e.invertColor,m=Object(s.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),d=E()("hero section center-content",a&&"has-top-divider",r&&"has-bottom-divider",c&&"has-bg-color",o&&"invert-color",t),u=E()("hero-inner section-inner",l&&"has-top-divider",i&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},m,{className:d}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:u},n.a.createElement("div",{className:"hero-content center-content"},n.a.createElement("h1",{className:"welcome-content mt-0 mb-16 reveal-from-bottom"},n.a.createElement("span",{className:"reveal-from-bottom","data-reveal-delay":"200"},"Hello, ",n.a.createElement("br",null)),n.a.createElement("span",{className:"reveal-from-bottom","data-reveal-delay":"800"},"my name is ",n.a.createElement("span",{className:"text-color-primary"},"Richard Hsu"),".")),n.a.createElement("div",{className:"subheader container-xs"},n.a.createElement("p",{className:"description text-color-low mb-32 reveal-from-bottom","data-reveal-delay":"1400"},"I am a Software Engineer in Southern California with all-round experience in front-end, back-end, and machine learning."),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"1400"},n.a.createElement(I,null,n.a.createElement(N.HashLink,{className:"button button-primary",smooth:!0,to:"#skills"},"About Me"),n.a.createElement(N.HashLink,{className:"button button-primary",smooth:!0,to:"#contact"},"Get in Touch"))))))))};z.defaultProps=_;var G=z,W=function(e){var t=e.className,a=e.data,r=e.children,l=e.tag,i=Object(s.a)(e,["className","data","children","tag"]),c=E()("section-header",t),o=l;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},i,{className:c}),n.a.createElement("div",{className:"container-xs"},r,a.title&&n.a.createElement(o,{className:E()("text-color-primary mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};W.defaultProps={children:null,tag:"h2"};var J=W;function K(e){var t=e.imageSrc,a=e.title,r=e.delay;return n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":r},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(k,{src:t,alt:"Features tile "+a+" icon",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("p",{className:"m-0 text-color-high text-base"},a))))}var U=Object(R.a)({},H.defaults),q=function(e){var t=e.className,r=e.topOuterDivider,l=e.bottomOuterDivider,i=e.topDivider,c=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(s.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=E()("features-tiles section",r&&"has-top-divider",l&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),p=E()("features-tiles-inner section-inner",i&&"has-top-divider",c&&"has-bottom-divider"),g=E()("tiles-wrap center-content",d&&"push-left");return n.a.createElement("section",Object.assign({},u,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:p},n.a.createElement(J,{data:{title:"Skills"},className:"center-content"}),n.a.createElement("div",{className:g},n.a.createElement(K,{imageSrc:a(49),title:"Python"}),n.a.createElement(K,{imageSrc:a(50),title:"Java",delay:"200"}),n.a.createElement(K,{imageSrc:a(51),title:"C#",delay:"300"}),n.a.createElement(K,{imageSrc:a(52),title:"C++",delay:"400"}),n.a.createElement(K,{imageSrc:a(33),title:"React Native",delay:"500"}),n.a.createElement(K,{imageSrc:a(33),title:"React",delay:"600"}),n.a.createElement(K,{imageSrc:a(53),title:"JavaScript",delay:"700"}),n.a.createElement(K,{imageSrc:a(54),title:"HTML",delay:"800"}),n.a.createElement(K,{imageSrc:a(55),title:"CSS",delay:"900"}),n.a.createElement(K,{imageSrc:a(56),title:"Swift",delay:"1000"}),n.a.createElement(K,{imageSrc:a(57),title:"VisualBasic",delay:"1100"}),n.a.createElement(K,{imageSrc:a(58),title:"Unix",delay:"1200"}),n.a.createElement(K,{imageSrc:a(59),title:"MySQL",delay:"1300"})))))};q.defaultProps=U;var V=q,Q=Object(R.a)({},B.defaults),X=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,i=e.bottomDivider,c=e.hasBgColor,o=e.invertColor,m=e.invertMobile,d=e.invertDesktop,u=e.alignTop,v=(e.imageFill,Object(s.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"])),p=E()("features-split section",a&&"has-top-divider",r&&"has-bottom-divider",c&&"has-bg-color",o&&"invert-color",t),g=E()("features-split-inner section-inner",l&&"has-top-divider",i&&"has-bottom-divider"),f=E()("split-wrap",m&&"invert-mobile",d&&"invert-desktop",u&&"align-top");return n.a.createElement("section",Object.assign({},v,{className:p}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:g},n.a.createElement(J,{data:{title:"Work Experiences",paragraph:""},className:"center-content"}),n.a.createElement("div",{className:f},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"August 2020 - Present"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Software Engineer Intern ",n.a.createElement("span",{className:"text-color-secondary"},"@ Auri Online ")),n.a.createElement("ul",{className:"text-color-high m-0"},n.a.createElement("li",null,"Implement dynamic color schemes on React website based on subdomain."),n.a.createElement("li",null,"Designed and developed React Native app using custom functional components."),n.a.createElement("li",null,"Coordinated with other team members using GitFlow branching model.")))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"July 2019 \u2013 August 2019"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Intern ",n.a.createElement("span",{className:"text-color-secondary"},"@ Advanced Communication Technology & Solutions ")),n.a.createElement("ul",{className:"text-color-high m-0"},n.a.createElement("li",null,"Programmed bash script and packaged dependencies into Docker images to perform offline server deployment."),n.a.createElement("li",null,"Researched into neural networks, and developed a fullstack web app that trains and infers text from hand-written words."),n.a.createElement("ul",{type:"circle"},n.a.createElement("li",null,"Resources utilized include TensorFlow, Flask, HTML, CSS, JavaScript, ELK, MetricBeat.")),n.a.createElement("li",null,"Trained and taught around 20 coworkers in a workshop on Introduction to AI and Neural Networks.")))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"March 2018 \u2013 June 2019"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Peer Tutor & Reader ",n.a.createElement("span",{className:"text-color-secondary"},"@ University of California, Irvine")),n.a.createElement("ul",{className:"text-color-high m-0"},n.a.createElement("li",null,"Tutored in-class labs, and graded homework for around 40 students per quarter on \u201cIntermediate Programming in Python\u201d."),n.a.createElement("li",null,"Topics taught included regular expressions, trees, linked lists, inheritance, and function complexity."))))))))};X.defaultProps=Q;var Z=X,$=a(37),Y=a(23);a(60);function ee(e){var t=e.subtext,a=e.title,r=e.message,l=e.imageSrc,i=e.imageFill;return n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},t),n.a.createElement("h3",{className:"mt-0 mb-12"},a),n.a.createElement("p",{className:"m-0"},r)),n.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",i&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(k,{src:l,alt:"".concat(a," Picture"),width:528,height:396})))}function te(e){var t=e.splitClasses,r=e.imageFill;return n.a.createElement("div",{className:t},n.a.createElement(ee,{subtext:"Xcode, Swift, Alamofire, Parse, SwiftyJSON, Spoonacular API",title:"SugoiFridge",message:"Developed a Swift application on Xcode that lets users record their groceries, and help suggest possible recipes to make based on available ingredients.",imageSrc:a(61),imageFill:r}),n.a.createElement(ee,{subtext:"Docker, Python, Flask, Google Maps API",title:"Where2Meet",message:"Back-end work building and deploying a Python Flask Docker image on AWS that suggests meeting locations based on each person's preferences.",imageSrc:a(62),imageFill:r}),n.a.createElement(ee,{subtext:"Android Studio, Java, AWS, Google Maps API",title:"GOTOLockers",message:"Android developer for semi-finalist UCI New Venture Competition project. The app allows users to locate  and reserve lockers on campus. They can also use the app to lock/unlock lockers.",imageSrc:a(63),imageFill:r}),n.a.createElement(ee,{subtext:"Android Studio, Java",title:"ZotSleep",message:"Developed an Android Wear application that suggests to users when to sleep and wake up to feel less groggy during the day. It takes into account of the user's daily schedule and sleep cycle to set optimal alarms.",imageSrc:a(64),imageFill:r}),n.a.createElement(ee,{subtext:"Android Studio, Java, Google Maps API",title:"LA Parking",message:"Programmed Android app for LAHacks 2018 that utilized LA city's parking lot dataset and GoogleMaps API to  help users find nearest and cheapest available parking spots.",imageSrc:a(65),imageFill:r}))}function ae(e){var t=e.splitClasses,r=e.imageFill;return n.a.createElement("div",{className:t},n.a.createElement(ee,{subtext:"Python, Tensorflow, Keras, Pandas",title:"Prostate Cancer Detection",message:"Developed machine learning pipeline to process raw medical image, identify prostate cancer existence, and display outline. Experimented with various neural network architectures including ResNet, GoogleNet, and U-Net with 88.8% validation accuracy from  the best architecture.",imageSrc:a(66),imageFill:r}),n.a.createElement(ee,{subtext:"Pytorch, OpenAI Gym, Microsoft Malmo",title:"ObstaclesRL",message:"Trained a reinforcement learning agent in Minecraft to navigate obstacle courses by jumping over lava and opening doors. Experimented with various reinforcement learning algorithms, such as tabular Q, policy gradient, CNN, and DCRN.",imageSrc:a(67),imageFill:r}),n.a.createElement(ee,{subtext:"Python, numpy",title:"Visions",message:"Worked on various imaging projects ranging from generating panoramas to object detection to face-swapping.",imageSrc:a(68),imageFill:r}))}function re(e){var t=e.splitClasses;e.imageFill;return n.a.createElement("div",{className:t},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"}),n.a.createElement("h3",{className:"mt-0 mb-12"}),n.a.createElement("p",{className:"m-0"},"This area is currently under construction, please check back again later :)"))))}var ne=Object(R.a)({},B.defaults),le=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,i=e.bottomDivider,c=e.hasBgColor,o=e.invertColor,m=e.invertMobile,d=e.invertDesktop,u=e.alignTop,v=e.imageFill,p=Object(s.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),g=E()("features-split section",a&&"has-top-divider",r&&"has-bottom-divider",c&&"has-bg-color",o&&"invert-color",t),f=E()("features-split-inner section-inner",l&&"has-top-divider",i&&"has-bottom-divider"),h=E()("split-wrap",m&&"invert-mobile",d&&"invert-desktop",u&&"align-top");return n.a.createElement("section",Object.assign({},p,{className:g}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:f},n.a.createElement(J,{data:{title:"Past Projects",paragraph:""},className:"center-content"}),n.a.createElement("div",{className:"text-color-high"},n.a.createElement($.a,{defaultActiveKey:"fullstack"},n.a.createElement(Y.a,{eventKey:"fullstack",title:"Full Stack"},n.a.createElement(te,{splitClasses:h,imageFill:v})),n.a.createElement(Y.a,{eventKey:"machinelearning",title:"Machine Learning"},n.a.createElement(ae,{splitClasses:h,imageFill:v})),n.a.createElement(Y.a,{eventKey:"gamedev",title:"Game Dev"},n.a.createElement(re,{splitClasses:h,imageFill:v})))))))};le.defaultProps=ne;var ie=le;function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var se=n.a.createElement("g",null,n.a.createElement("path",{d:"M230,49.585c0-0.263,0.181-0.519,0.169-0.779l-70.24,67.68l70.156,65.518c0.041-0.468-0.085-0.94-0.085-1.418V49.585z"}),n.a.createElement("path",{d:"M149.207,126.901l-28.674,27.588c-1.451,1.396-3.325,2.096-5.2,2.096c-1.836,0-3.672-0.67-5.113-2.013l-28.596-26.647 L11.01,195.989c1.717,0.617,3.56,1.096,5.49,1.096h197.667c2.866,0,5.554-0.873,7.891-2.175L149.207,126.901z"}),n.a.createElement("path",{d:"M115.251,138.757L222.447,35.496c-2.427-1.443-5.252-2.411-8.28-2.411H16.5c-3.943,0-7.556,1.531-10.37,3.866 L115.251,138.757z"}),n.a.createElement("path",{d:"M0,52.1v128.484c0,1.475,0.339,2.897,0.707,4.256l69.738-67.156L0,52.1z"})),me=n.a.createElement("g",null),de=n.a.createElement("g",null),ue=n.a.createElement("g",null),ve=n.a.createElement("g",null),pe=n.a.createElement("g",null),ge=n.a.createElement("g",null),fe=n.a.createElement("g",null),he=n.a.createElement("g",null),be=n.a.createElement("g",null),Ee=n.a.createElement("g",null),Ne=n.a.createElement("g",null),Oe=n.a.createElement("g",null),ye=n.a.createElement("g",null),xe=n.a.createElement("g",null),we=n.a.createElement("g",null),ke=function(e){var t=e.svgRef,a=e.title,r=oe(e,["svgRef","title"]);return n.a.createElement("svg",ce({id:"Capa_1",x:"0px",y:"0px",width:32,height:32,viewBox:"0 0 230.17 230.17",style:{enableBackground:"new 0 0 230.17 230.17"},xmlSpace:"preserve",ref:t},r),a?n.a.createElement("title",null,a):null,se,me,de,ue,ve,pe,ge,fe,he,be,Ee,Ne,Oe,ye,xe,we)},je=n.a.forwardRef((function(e,t){return n.a.createElement(ke,ce({svgRef:t},e))}));a.p;function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function Se(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var Ce=n.a.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}),Pe=function(e){var t=e.svgRef,a=e.title,r=Se(e,["svgRef","title"]);return n.a.createElement("svg",De({width:32,height:32,viewBox:"0 0 24 24",ref:t},r),a?n.a.createElement("title",null,a):null,Ce)},Le=n.a.forwardRef((function(e,t){return n.a.createElement(Pe,De({svgRef:t},e))}));a.p;function Fe(){return(Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function Ae(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var Re=n.a.createElement("g",null,n.a.createElement("path",{d:"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"})),Me=n.a.createElement("g",null),Te=n.a.createElement("g",null),Be=n.a.createElement("g",null),He=n.a.createElement("g",null),Ie=n.a.createElement("g",null),_e=n.a.createElement("g",null),ze=n.a.createElement("g",null),Ge=n.a.createElement("g",null),We=n.a.createElement("g",null),Je=n.a.createElement("g",null),Ke=n.a.createElement("g",null),Ue=n.a.createElement("g",null),qe=n.a.createElement("g",null),Ve=n.a.createElement("g",null),Qe=n.a.createElement("g",null),Xe=function(e){var t=e.svgRef,a=e.title,r=Ae(e,["svgRef","title"]);return n.a.createElement("svg",Fe({id:"Capa_1",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 438.549 438.549",style:{enableBackground:"new 0 0 438.549 438.549"},xmlSpace:"preserve",ref:t},r),a?n.a.createElement("title",null,a):null,Re,Me,Te,Be,He,Ie,_e,ze,Ge,We,Je,Ke,Ue,qe,Ve,Qe)},Ze=n.a.forwardRef((function(e,t){return n.a.createElement(Xe,Fe({svgRef:t},e))})),$e=(a.p,function(e){var t=e.className,a=Object(s.a)(e,["className"]),r=E()("footer-social",t);return n.a.createElement("div",Object.assign({},a,{className:r}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement(N.HashLink,{to:S.a,target:"_blank",className:"footer-resume button button-secondary button-wide-mobile button-sm"},"Resume")),n.a.createElement("li",null,n.a.createElement("a",{className:"footer-icon",href:"mailto:richardhsusw@outlook.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(je,null))),n.a.createElement("li",null,n.a.createElement("a",{className:"footer-icon",href:"https://www.linkedin.com/in/swrichard-hsu/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(Le,null))),n.a.createElement("li",null,n.a.createElement("a",{className:"footer-icon",href:"https://github.com/richardhsw",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(Ze,null)))))}),Ye=Object(R.a)({},H.defaults),et=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,i=e.bottomDivider,c=e.hasBgColor,o=e.invertColor,m=(e.pushLeft,Object(s.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"])),d=E()("testimonial section",a&&"has-top-divider",r&&"has-bottom-divider",c&&"has-bg-color",o&&"invert-color",t),u=E()("testimonial-inner section-inner",l&&"has-top-divider",i&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},m,{className:d}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:u},n.a.createElement(J,{data:{title:"Contact Me",paragraph:""},className:"center-content"}),n.a.createElement("div",{className:"container-xs center-content"},n.a.createElement("p",{className:"text-color-high mb-8"},"Feel free to shoot me an email or check out my past projects!"),n.a.createElement($e,null)))))};et.defaultProps=Ye;var tt=et,at=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(G,null),n.a.createElement(V,{id:"skills",topDivider:!0}),n.a.createElement(Z,{id:"experiences",invertMobile:!0,topDivider:!0,imageFill:!0}),n.a.createElement(ie,{id:"projects",invertMobile:!0,topDivider:!0,imageFill:!0}),n.a.createElement(tt,{id:"contact",topDivider:!0}))};h.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var rt=function(){var e=Object(r.useRef)(),t=Object(c.l)();return Object(r.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){h.a.set({page:e}),h.a.pageview(e)}(a)}),[t]),n.a.createElement(f,{ref:e,children:function(){return n.a.createElement(c.g,null,n.a.createElement(m,{exact:!0,path:"/portfolio",component:at,layout:A}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(73);var nt=Object(o.a)();i.a.render(n.a.createElement(c.e,{history:nt},n.a.createElement(rt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[38,1,2]]]);
//# sourceMappingURL=main.74185533.chunk.js.map