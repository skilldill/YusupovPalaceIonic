(this["webpackJsonpyusupov-palace"]=this["webpackJsonpyusupov-palace"]||[]).push([[56],{150:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return i}));var o=n(9),i=function(t){var e,n,i,l,f=10*-v,p=0,L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),m=new WeakMap,h=function(t){f=Object(o.o)(t),w(t)},E=function(){clearTimeout(l),l=void 0,n&&(y(!1),n=void 0)},b=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,g(a(t),t))},w=function(t){g(void 0,t)},g=function(t,e){if(!t||t!==n){clearTimeout(l),l=void 0;var i=Object(o.p)(e),a=i.x,c=i.y;if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(s)||T(n,a,c),y(!0)}if(t){var d=m.get(t);d&&(clearTimeout(d),m.delete(t));var v=r(t)?0:u;t.classList.remove(s),l=setTimeout((function(){T(t,a,c),l=void 0}),v)}n=t}},T=function(t,e,n){p=Date.now(),t.classList.add(s);var o=L&&c(t);o&&o.addRipple&&(j(),i=o.addRipple(e,n))},j=function(){void 0!==i&&(i.then((function(t){return t()})),i=void 0)},y=function(t){j();var e=n;if(e){var o=d-Date.now()+p;if(t&&o>0&&!r(e)){var i=setTimeout((function(){e.classList.remove(s),m.delete(e)}),d);m.set(e,i)}else e.classList.remove(s)}},O=document;O.addEventListener("ionScrollStart",(function(t){e=t.target,E()})),O.addEventListener("ionScrollEnd",(function(){e=void 0})),O.addEventListener("ionGestureCaptured",E),O.addEventListener("touchstart",(function(t){f=Object(o.o)(t),b(t)}),!0),O.addEventListener("touchcancel",h,!0),O.addEventListener("touchend",h,!0),O.addEventListener("mousedown",(function(t){var e=Object(o.o)(t)-v;f<e&&b(t)}),!0),O.addEventListener("mouseup",(function(t){var e=Object(o.o)(t)-v;f<e&&w(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var o=e[n];if(o.classList&&o.classList.contains("ion-activatable"))return o}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,v=2500}}]);
//# sourceMappingURL=56.1dd49212.chunk.js.map