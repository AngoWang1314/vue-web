(function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],s=0,f=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={index:0},a=[];function i(e){return u.p+"js/"+({Child:"Child"}[e]||e)+"."+{Child:"df1d1dbf"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/index/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonpIndex"]=window["webpackJsonpIndex"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("7dd7")},4621:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}",""]),e.exports=t},"4ca2":function(e,t,n){"use strict";var r=n("c891"),o=n.n(r);o.a},"7dd7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=n("3211"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],u={name:"App"},c=u,l=(n("4ca2"),n("2877")),s=Object(l["a"])(c,a,i,!1,null,null,null),d=s.exports,f=(n("b0c0"),n("d3b7"),function(){return n.e("Child").then(n.bind(null,"cddc"))}),p=new o["a"]({routes:[{path:"/subapp/x/y",name:"Child",component:f,meta:{needAuthenticate:!1}}]});p.beforeEach((function(e,t,n){"Child"!==e.name&&e.meta.needAuthenticate&&!localStorage.getItem("token")?n({name:"Child",query:{redirect:e.fullPath}}):n()}));var h=p;r["a"].config.productionTip=!1,r["a"].use(o["a"]);var v=new r["a"]({router:h,render:function(e){return e(d)}}).$mount("#appsub");window.addEventListener("unmount",(function(){console.log("unmount"),v.$destroy()}))},c891:function(e,t,n){var r=n("4621");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("bda24a56",r,!0,{sourceMap:!1,shadowMode:!1})}});