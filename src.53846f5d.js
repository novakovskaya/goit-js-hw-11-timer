parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"yCUT":[function(require,module,exports) {
class t{constructor({selector:t,targetDate:e}){this.selector=document.querySelector(t),this.targetDate=e,this.intervalId=null,this.timerDays=this.selector.querySelector('[data-value="days"]'),this.timerHours=this.selector.querySelector('[data-value="hours"]'),this.timerMins=this.selector.querySelector('[data-value="mins"]'),this.timerSecs=this.selector.querySelector('[data-value="secs"]')}start(){this.intervalId=setInterval(()=>{const t=Date.now(),e=this.targetDate-t,s=this.getTimeComponents(e);this.insertValues(s)},1e3)}stop(){clearInterval(this.intervalId)}pad(t){return String(t).padStart(2,"0")}getTimeComponents(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}insertValues({days:t,hours:e,mins:s,secs:r}){this.timerDays.textContent=t,this.timerHours.textContent=e,this.timerMins.textContent=s,this.timerSecs.textContent=r}}const e=new t({selector:"#timer-1",targetDate:new Date("Nov 26, 2021")});e.start();
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/timer");
},{"./sass/main.scss":"clu1","./js/timer":"yCUT"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.53846f5d.js.map