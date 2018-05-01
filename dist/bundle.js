!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./dom.js */"./dom.js");const o={request:function(){let e=document.getElementById("username_input_field").value;fetch("https://api.github.com/users/"+e).then(e=>{if(e.status>=200&&e.status<400)return e.json()}).then(e=>{r.default.display_result(e)}).catch(()=>{console.log("Something error")})}};t.default=o},"./dom.js":
/*!****************!*\
  !*** ./dom.js ***!
  \****************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);n(/*! ./api */"./api.js");function r(e,t,n){let r;if("hr"!==t)if(e[n])switch(t){case"img":(r=document.createElement(t)).src=e[n],r.classList.add(n);break;case"p":(r=document.createElement(t)).innerHTML=e[n],r.classList.add(n);break;case"a":(r=document.createElement(t)).innerHTML=e[n],r.href=e[n],r.classList.add(n);break;default:alert("something problem")}else(r=document.createElement("p")).textContent="not found",r.classList.add("nf_style");else r=document.createElement(t);return r}const o={display_result:function(e){let t=document.createDocumentFragment(),n=document.getElementById("OutputSection"),o=["img","p","p","p","hr","p","p","a","a"],c=["avatar_url","name","login","bio","hr","company","location","email","blog"];for(let n=0;n<o.length;n++)t.appendChild(r(e,o[n],c[n]));!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(n),n.appendChild(t)}};t.default=o},"./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./api */"./api.js");document.getElementById("confirm_button").addEventListener("click",function(){r.default.request()})},0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */function(e,t,n){e.exports=n(/*! ./index.js */"./index.js")}});