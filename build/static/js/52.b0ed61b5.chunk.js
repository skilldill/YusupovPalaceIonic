(this["webpackJsonpyusupov-palace"]=this["webpackJsonpyusupov-palace"]||[]).push([[52],{153:function(t,e,n){"use strict";n.r(e),n.d(e,"KEYBOARD_DID_CLOSE",(function(){return o})),n.d(e,"KEYBOARD_DID_OPEN",(function(){return i})),n.d(e,"copyVisualViewport",(function(){return l})),n.d(e,"keyboardDidClose",(function(){return g})),n.d(e,"keyboardDidOpen",(function(){return p})),n.d(e,"keyboardDidResize",(function(){return b})),n.d(e,"resetKeyboardAssist",(function(){return d})),n.d(e,"setKeyboardClose",(function(){return h})),n.d(e,"setKeyboardOpen",(function(){return f})),n.d(e,"startKeyboardAssist",(function(){return s})),n.d(e,"trackViewportChanges",(function(){return y}));var i="ionKeyboardDidShow",o="ionKeyboardDidHide",r={},u={},a=!1,d=function(){r={},u={},a=!1},s=function(t){c(t),t.visualViewport&&(u=l(t.visualViewport),t.visualViewport.onresize=function(){y(t),p()||b(t)?f(t):g(t)&&h(t)})},c=function(t){t.addEventListener("keyboardDidShow",(function(e){return f(t,e)})),t.addEventListener("keyboardDidHide",(function(){return h(t)}))},f=function(t,e){v(t,e),a=!0},h=function(t){w(t),a=!1},p=function(){var t=(r.height-u.height)*u.scale;return!a&&r.width===u.width&&t>150},b=function(t){return a&&!g(t)},g=function(t){return a&&u.height===t.innerHeight},v=function(t,e){var n=e?e.keyboardHeight:t.innerHeight-u.height,o=new CustomEvent(i,{detail:{keyboardHeight:n}});t.dispatchEvent(o)},w=function(t){var e=new CustomEvent(o);t.dispatchEvent(e)},y=function(t){r=Object.assign({},u),u=l(t.visualViewport)},l=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}}}]);
//# sourceMappingURL=52.b0ed61b5.chunk.js.map