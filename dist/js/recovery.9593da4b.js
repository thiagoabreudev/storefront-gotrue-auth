(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["recovery"],{1671:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(t){o(this,e),this.user=t}return n(e,[{key:"listUsers",value:function(e){return this.user._request("/admin/users",{method:"GET",audience:e})}},{key:"getUser",value:function(e){return this.user._request("/admin/users/"+e.id)}},{key:"updateUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.user._request("/admin/users/"+e.id,{method:"PUT",body:JSON.stringify(t)})}},{key:"createUser",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.email=e,r.password=t,this.user._request("/admin/users",{method:"POST",body:JSON.stringify(r)})}},{key:"deleteUser",value:function(e){return this.user._request("/admin/users/"+e.id,{method:"DELETE"})}}]),e}();t.default=s},3020:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r("9cc8"),a=c(s),i=r("1671"),u=c(i);function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var f=6e4,d="gotrue.user",h={},v=null,p={api:1,token:1,audience:1,url:1},y={api:1},m=function(){return"undefined"!==typeof window},g=function(){function e(t,r,n){l(this,e),this.api=t,this.url=t.apiURL,this.audience=n,this._processTokenResponse(r),v=this}return o(e,[{key:"update",value:function(e){var t=this;return this._request("/user",{method:"PUT",body:JSON.stringify(e)}).then((function(e){return t._saveUserData(e)._refreshSavedSession()}))}},{key:"jwt",value:function(e){var t=this.tokenDetails(),r=t.expires_at,n=t.refresh_token,o=t.access_token;return e||r-f<Date.now()?this._refreshToken(n):Promise.resolve(o)}},{key:"logout",value:function(){return this._request("/logout",{method:"POST"}).then(this.clearSession.bind(this)).catch(this.clearSession.bind(this))}},{key:"_refreshToken",value:function(e){var t=this;return h[e]?h[e]:h[e]=this.api.request("/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=refresh_token&refresh_token="+e}).then((function(r){return delete h[e],t._processTokenResponse(r),t._refreshSavedSession(),t.token.access_token})).catch((function(r){return delete h[e],t.clearSession(),Promise.reject(r)}))}},{key:"_request",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r.headers=r.headers||{};var o=r.audience||this.audience;return o&&(r.headers["X-JWT-AUD"]=o),this.jwt().then((function(o){return t.api.request(e,n({headers:Object.assign(r.headers,{Authorization:"Bearer "+o})},r)).catch((function(e){return e instanceof s.JSONHTTPError&&e.json&&(e.json.msg?e.message=e.json.msg:e.json.error&&(e.message=e.json.error+": "+e.json.error_description)),Promise.reject(e)}))}))}},{key:"getUserData",value:function(){return this._request("/user").then(this._saveUserData.bind(this)).then(this._refreshSavedSession.bind(this))}},{key:"_saveUserData",value:function(t,r){for(var n in t)n in e.prototype||n in p||(this[n]=t[n]);return r&&(this._fromStorage=!0),this}},{key:"_processTokenResponse",value:function(e){this.token=e;var t=void 0;try{t=JSON.parse(_(e.access_token.split(".")[1])),this.token.expires_at=1e3*t.exp}catch(r){console.error(new Error("Gotrue-js: Failed to parse tokenResponse claims: "+JSON.stringify(e)))}}},{key:"_refreshSavedSession",value:function(){return m()&&localStorage.getItem(d)&&this._saveSession(),this}},{key:"_saveSession",value:function(){return m()&&localStorage.setItem(d,JSON.stringify(this._details)),this}},{key:"tokenDetails",value:function(){return this.token}},{key:"clearSession",value:function(){e.removeSavedSession(),this.token=null,v=null}},{key:"admin",get:function(){return new u.default(this)}},{key:"_details",get:function(){var t={};for(var r in this)r in e.prototype||r in y||(t[r]=this[r]);return t}}],[{key:"removeSavedSession",value:function(){m()&&localStorage.removeItem(d)}},{key:"recoverSession",value:function(t){if(v)return v;var r=m()&&localStorage.getItem(d);if(r)try{var n=JSON.parse(r),o=n.url,s=n.token,i=n.audience;if(!o||!s)return null;var u=t||new a.default(o,{});return new e(u,s,i)._saveUserData(n,!0)}catch(c){return console.error(new Error("Gotrue-js: Error recovering session: "+c)),null}return null}}]),e}();function _(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}var r=window.atob(t);try{return decodeURIComponent(escape(r))}catch(n){return r}}t.default=g},"413c":function(e,t,r){"use strict";var n=r("7f61"),o=r.n(n);o.a},4889:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"recover"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.updatePassword(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"new-password"}},[e._v("New Passoword: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],staticClass:"form-control",attrs:{id:"new-password",type:"password",required:""},domProps:{value:e.newPassword},on:{input:function(t){t.target.composing||(e.newPassword=t.target.value)}}})]),r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[e._v("Confirm")]),e.error?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" "+e._s(e.error)+" ")]):e._e(),e.passwordUpdated?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[e._v(" password changed successfully! ")]):e._e()])])])])},o=[],s=r("85ce"),a=r.n(s),i={name:"Recover",data:function(){return{newPassword:void 0,user:{},error:void 0,passwordUpdated:!1}},created:function(){this.verify()},methods:{verify:function(){var e=this,t=new a.a({APIUrl:"https://gotrue.ecomplus.biz",audience:"",setCookie:!1});t.recover(this.$route.params.token).then((function(t){e.user=t})).catch((function(t){e.error=t}))},updatePassword:function(){var e=this;this.user.update({password:this.newPassword}).then((function(t){e.user=t,e.passwordUpdated=!0,e.error=void 0})).catch((function(t){e.error=t}))}}},u=i,c=(r("413c"),r("2877")),l=Object(c["a"])(u,n,o,!1,null,null,null);t["default"]=l.exports},"7f61":function(e,t,r){},"85ce":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r("9cc8"),s=u(o),a=r("3020"),i=u(a);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=/^http:\/\//,f="/.netlify/identity",d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.APIUrl,n=void 0===r?f:r,o=t.audience,a=void 0===o?"":o,i=t.setCookie,u=void 0!==i&&i;c(this,e),n.match(l)&&console.warn("Warning:\n\nDO NOT USE HTTP IN PRODUCTION FOR GOTRUE EVER!\nGoTrue REQUIRES HTTPS to work securely."),a&&(this.audience=a),this.setCookie=u,this.api=new s.default(n)}return n(e,[{key:"_request",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.headers=t.headers||{};var r=t.audience||this.audience;return r&&(t.headers["X-JWT-AUD"]=r),this.api.request(e,t).catch((function(e){return e instanceof o.JSONHTTPError&&e.json&&(e.json.msg?e.message=e.json.msg:e.json.error&&(e.message=e.json.error+": "+e.json.error_description)),Promise.reject(e)}))}},{key:"settings",value:function(){return this._request("/settings")}},{key:"signup",value:function(e,t,r){return this._request("/signup",{method:"POST",body:JSON.stringify({email:e,password:t,data:r})})}},{key:"login",value:function(e,t,r){var n=this;return this._setRememberHeaders(r),this._request("/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=password&username="+encodeURIComponent(e)+"&password="+encodeURIComponent(t)}).then((function(e){return i.default.removeSavedSession(),n.createUser(e,r)}))}},{key:"loginExternalUrl",value:function(e){return this.api.apiURL+"/authorize?provider="+e}},{key:"confirm",value:function(e,t){return this._setRememberHeaders(t),this.verify("signup",e,t)}},{key:"requestPasswordRecovery",value:function(e){return this._request("/recover",{method:"POST",body:JSON.stringify({email:e})})}},{key:"recover",value:function(e,t){return this._setRememberHeaders(t),this.verify("recovery",e,t)}},{key:"acceptInvite",value:function(e,t,r){var n=this;return this._setRememberHeaders(r),this._request("/verify",{method:"POST",body:JSON.stringify({token:e,password:t,type:"signup"})}).then((function(e){return n.createUser(e,r)}))}},{key:"acceptInviteExternalUrl",value:function(e,t){return this.api.apiURL+"/authorize?provider="+e+"&invite_token="+t}},{key:"createUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this._setRememberHeaders(t);var r=new i.default(this.api,e,this.audience);return r.getUserData().then((function(e){return t&&e._saveSession(),e}))}},{key:"currentUser",value:function(){var e=i.default.recoverSession(this.api);return e&&this._setRememberHeaders(e._fromStorage),e}},{key:"verify",value:function(e,t,r){var n=this;return this._setRememberHeaders(r),this._request("/verify",{method:"POST",body:JSON.stringify({token:t,type:e})}).then((function(e){return n.createUser(e,r)}))}},{key:"_setRememberHeaders",value:function(e){this.setCookie&&(this.api.defaultHeaders=this.api.defaultHeaders||{},this.api.defaultHeaders["X-Use-Cookie"]=e?"1":"session")}}]),e}();t.default=d,"undefined"!==typeof window&&(window.GoTrue=d)},"9cc8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JSONHTTPError=t.TextHTTPError=t.HTTPError=t.getPagination=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r("ceaa");function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){function t(){var t=Reflect.construct(e,Array.from(arguments));return Object.setPrototypeOf(t,Object.getPrototypeOf(this)),t}return t.prototype=Object.create(e.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}Object.defineProperty(t,"getPagination",{enumerable:!0,get:function(){return s.getPagination}});var l=t.HTTPError=function(e){function t(e){a(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.statusText));return r.name=r.constructor.name,"function"===typeof Error.captureStackTrace?Error.captureStackTrace(r,r.constructor):r.stack=new Error(e.statusText).stack,r.status=e.status,r}return u(t,e),t}(c(Error)),f=t.TextHTTPError=function(e){function t(e,r){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.data=r,n}return u(t,e),t}(l),d=t.JSONHTTPError=function(e){function t(e,r){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.json=r,n}return u(t,e),t}(l),h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments[1];a(this,e),this.apiURL=t,this.apiURL.match(/\/[^\/]?/)&&(this._sameOrigin=!0),this.defaultHeaders=r&&r.defaultHeaders||{}}return o(e,[{key:"headers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n({},this.defaultHeaders,{"Content-Type":"application/json"},e)}},{key:"parseJsonResponse",value:function(e){return e.json().then((function(t){if(!e.ok)return Promise.reject(new d(e,t));var r=(0,s.getPagination)(e);return r?{pagination:r,items:t}:t}))}},{key:"request",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=this.headers(r.headers||{});return this._sameOrigin&&(r.credentials=r.credentials||"same-origin"),fetch(this.apiURL+e,n({},r,{headers:o})).then((function(e){var r=e.headers.get("Content-Type");return r&&r.match(/json/)?t.parseJsonResponse(e):e.ok?e.text().then((function(e){})):e.text().then((function(t){return Promise.reject(new f(e,t))}))}))}}]),e}();t.default=h},ceaa:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){var r=[],n=!0,o=!1,s=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done);n=!0)if(r.push(a.value),t&&r.length===t)break}catch(u){o=!0,s=u}finally{try{!n&&i["return"]&&i["return"]()}finally{if(o)throw s}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function o(e){var t=e.headers.get("Link"),r={};if(null==t)return null;t=t.split(",");for(var o=e.headers.get("X-Total-Count"),s=0,a=t.length;s<a;s++){var i=t[s].replace(/(^\s*|\s*$)/,""),u=i.split(";"),c=n(u,2),l=c[0],f=c[1],d=l.match(/page=(\d+)/),h=d&&parseInt(d[1],10);f.match(/last/)?r.last=h:f.match(/next/)?r.next=h:f.match(/prev/)?r.prev=h:f.match(/first/)&&(r.first=h)}return r.last=Math.max(r.last||0,r.prev&&r.prev+1||0),r.current=r.next?r.next-1:r.last||1,r.total=o?parseInt(o,10):null,r}t.getPagination=o}}]);
//# sourceMappingURL=recovery.9593da4b.js.map