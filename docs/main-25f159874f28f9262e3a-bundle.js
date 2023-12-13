(()=>{"use strict";var t,e={417:(t,e,r)=>{var n,o=r(500),i=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});function s(t,e){return new o.E9({x:(t.x+e.x)/2,y:(t.y+e.y)/2})}var p=function(){function t(){}return t.prototype.render_pointarray=function(){return new o.VC(this.render().flatMap((function(t){return[t.x,t.y]})))},t.prototype.fractalize=function(t,e,r,n,i){var s=(0,o.Wj)().addTo("body").size(e,e);s.polyline(this.render_pointarray()).fill("none").stroke({color:"#000",width:r});for(var p=0,a=[[this,0]],u=function(){var e=a.pop(),o=e[0],i=e[1];if(p++,s.polyline(o.render_pointarray()).fill("none").stroke({color:"#000",width:r}),i<=t){var u=crypto.getRandomValues(new Uint32Array(1))[0]/Math.pow(2,32),c=o.step_options(n),h=Math.floor(u*c);a.push.apply(a,o.next_step(h,n).map((function(t){return[t,i+1]})))}};a.length;)u();return p},t}(),a=function(t){function e(e,r,n){var o=t.call(this)||this;return o.pt0=e,o.pt1=r,o.pt2=n,o}return i(e,t),e.prototype.render=function(){return[this.pt0,this.pt1,this.pt2]},e.prototype.rotate=function(){var t=[this.pt0,this.pt1,this.pt2];this.pt1=t[0],this.pt2=t[1],this.pt0=t[2]},e.prototype.trisect=function(){var t=this.pt0,r=this.pt1,n=this.pt2,o=s(t,r),i=s(r,n),p=s(n,t);return[new e(t,o,p),new e(o,r,i),new e(p,i,n),new e(o,i,p)]},e.prototype.t_split=function(){var t=this.pt0,r=this.pt1,n=this.pt2,o=s(t,r),i=s(r,n),p=s(n,t),a=s(o,p);return[new e(t,o,p),new u(a,o,r,i),new u(p,a,i,n)]},e.prototype.step_options=function(t){return t?5:9},e.prototype.next_step=function(t,e){if(e)switch(t){case 0:return this.trisect();case 1:return this.t_split();case 2:return this.rotate(),this.t_split();case 3:return this.rotate(),this.rotate(),this.t_split();case 4:return[];default:throw new Error("next_step: index out of range")}else switch(t){case 0:case 1:case 2:return this.trisect();case 3:return this.t_split();case 4:return this.rotate(),this.t_split();case 5:return this.rotate(),this.rotate(),this.t_split();case 6:case 7:case 8:return[];default:throw new Error("next_step: index out of range")}},e}(p),u=function(t){function e(e,r,n,o){var i=t.call(this)||this;return i.pt0=e,i.pt1=r,i.pt2=n,i.pt3=o,i}return i(e,t),e.prototype.render=function(){return[this.pt0,this.pt1,this.pt2,this.pt3]},e.prototype.rotate=function(){var t=[this.pt0,this.pt1,this.pt2,this.pt3];this.pt1=t[0],this.pt2=t[1],this.pt3=t[2],this.pt0=t[3]},e.prototype.step_options=function(t){return 1},e.prototype.next_step=function(t,e){if(0===t)return[];throw new Error("next_step: index out of range")},e}(p),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.quadsect=function(){var t=this.pt0,r=this.pt1,n=this.pt2,o=this.pt3,i=s(this.pt0,this.pt1),p=s(this.pt1,this.pt2),u=s(this.pt2,this.pt3),c=s(this.pt3,this.pt0);return[new a(t,i,c),new a(i,r,p),new a(p,n,u),new a(c,u,o),new e(i,p,u,c)]},e.prototype.bisect=function(){var t=this.pt0,e=this.pt1,r=this.pt2,n=this.pt3;return[new a(t,e,r),new a(t,r,n)]},e.prototype.step_options=function(t){return t?4:6},e.prototype.next_step=function(t,e){if(e)switch(t){case 0:return this.quadsect();case 1:return this.bisect();case 2:return this.rotate(),this.bisect();case 3:return[];default:throw new Error("next_step: index out of range")}else switch(t){case 0:case 1:return this.quadsect();case 2:return this.bisect();case 3:return this.rotate(),this.bisect();case 4:case 5:return[];default:throw new Error("next_step: index out of range")}},e}(u);window.onload=function(){return t=this,e=void 0,n=function(){var t,e,r,n,i,s,p,a,u,h,l,f,w;return function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:p(0),throw:p(1),return:p(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function p(p){return function(a){return function(p){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,p[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&p[0]?n.return:p[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,p[1])).done)return o;switch(n=0,o&&(p=[2&p[0],o.value]),p[0]){case 0:case 1:o=p;break;case 4:return s.label++,{value:p[1],done:!1};case 5:s.label++,n=p[1],p=[0];continue;case 7:p=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==p[0]&&2!==p[0])){s=0;continue}if(3===p[0]&&(!o||p[1]>o[0]&&p[1]<o[3])){s.label=p[1];break}if(6===p[0]&&s.label<o[1]){s.label=o[1],o=p;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(p);break}o[2]&&s.ops.pop(),s.trys.pop();continue}p=e.call(t,s)}catch(t){p=[6,t],n=0}finally{r=o=0}if(5&p[0])throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}([p,a])}}}(this,(function(y){for(t=Math.min(window.innerHeight,window.innerWidth),console.log("pixel size:",t),e=new o.E9({x:0,y:t}),r=new o.E9({x:t,y:t}),n=new o.E9({x:t,y:0}),i=new o.E9({x:0,y:0}),s=new c(e,r,n,i),p=new URLSearchParams(window.location.search),(a=Number(p.get("depth")))||(a=3),(u=Number(p.get("stroke")))||(u=3),h=Number(p.get("midpoint")),l=p.get("uniform"),f=!l||"t"==l,w=s.fractalize(a,t,u,f,h),console.log("num_shapes",w);w<2;)document.body.removeChild(document.body.children[0]),w=s.fractalize(a,t,u,f,h),console.log("num_shapes",w);return[2]}))},new((r=void 0)||(r=Promise))((function(o,i){function s(t){try{a(n.next(t))}catch(t){i(t)}}function p(t){try{a(n.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,p)}a((n=n.apply(t,e||[])).next())}));var t,e,r,n}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,r,o,i)=>{if(!r){var s=1/0;for(c=0;c<t.length;c++){for(var[r,o,i]=t[c],p=!0,a=0;a<r.length;a++)(!1&i||s>=i)&&Object.keys(n.O).every((t=>n.O[t](r[a])))?r.splice(a--,1):(p=!1,i<s&&(s=i));if(p){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,o,i]},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,i,[s,p,a]=r,u=0;if(s.some((e=>0!==t[e]))){for(o in p)n.o(p,o)&&(n.m[o]=p[o]);if(a)var c=a(n)}for(e&&e(r);u<s.length;u++)i=s[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},r=self.webpackChunksquare_fractal=self.webpackChunksquare_fractal||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[500],(()=>n(417)));o=n.O(o)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1kNzZjNjEwMzdmZTI0MTY5NTFhZi1idW5kbGUuanMiLCJtYXBwaW5ncyI6InVCQUFJQSxFLG1lQzZCSixTQUFTQyxFQUFTQyxFQUFXQyxHQUMzQixPQUFPLElBQUksS0FBTSxDQUNmQyxHQUFJRixFQUFHRSxFQUFJRCxFQUFHQyxHQUFLLEVBQ25CQyxHQUFJSCxFQUFHRyxFQUFJRixFQUFHRSxHQUFLLEdBRXZCLENBRUEsOEJBK0NBLFFBdENFLFlBQUFDLGtCQUFBLFdBQ0UsT0FBTyxJQUFJLEtBQVdDLEtBQUtDLFNBQVNDLFNBQVEsU0FBQ0MsR0FBUSxNQUFPLENBQUNBLEVBQUdOLEVBQUdNLEVBQUdMLEVBQUUsSUFDMUUsRUFHQSxZQUFBTSxXQUFBLFNBQ0VDLEVBQ0FDLEVBQ0FDLEVBQ0FDLEVBQ0FkLEdBR0EsSUFBSWUsR0FBTyxVQUFNQyxNQUFNLFFBQVFDLEtBQUtMLEVBQVlBLEdBQ2hERyxFQUFLRyxTQUFTWixLQUFLRCxxQkFBcUJjLEtBQUssUUFBUUMsT0FBTyxDQUFFQyxNQUFPLE9BQVFDLE1BQU9ULElBS3BGLElBRkEsSUFBSVUsRUFBaUIsRUFDakJDLEVBQXVDLENBQUMsQ0FBQ2xCLEtBQU0sSSxhQUU3QyxNQUFpQ2tCLEVBQWtCQyxNQUFsREMsRUFBYSxLQUFFQyxFQUFhLEtBSWpDLEdBSEFKLElBQ0FSLEVBQUtHLFNBQVNRLEVBQWNyQixxQkFBcUJjLEtBQUssUUFBUUMsT0FBTyxDQUFFQyxNQUFPLE9BQVFDLE1BQU9ULElBRXpGYyxHQUFpQmhCLEVBQVcsQ0FDOUIsSUFBSWlCLEVBQWtCQyxPQUFPQyxnQkFBZ0IsSUFBSUMsWUFBWSxJQUFJLEdBQUcsV0FBRyxJQUNuRUMsRUFBTU4sRUFBY08sYUFBYW5CLEdBQ2pDb0IsRUFBa0JDLEtBQUtDLE1BQU1SLEVBQWtCSSxHQUNuRFIsRUFBa0JhLEtBQUksTUFBdEJiLEVBQTBCRSxFQUFjWSxVQUFVSixFQUFpQnBCLEdBQWlCeUIsS0FBSSxTQUFDcEMsR0FFdkYsTUFEMkIsQ0FBQ0EsRUFB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UixFQUFnQlEsS0FBYSxDQUN0RCxJQUFJekMsS0FBWXNDLEVBQ1p2QyxFQUFvQjBCLEVBQUVhLEVBQWF0QyxLQUNyQ0QsRUFBb0JPLEVBQUVOLEdBQVlzQyxFQUFZdEMsSUFHaEQsR0FBR3VDLEVBQVMsSUFBSS9CLEVBQVMrQixFQUFReEMsRUFDbEMsQ0FFQSxJQURHcUMsR0FBNEJBLEVBQTJCQyxHQUNyRHZCLEVBQUlMLEVBQVN0RCxPQUFRMkQsSUFDekJvQixFQUFVekIsRUFBU0ssR0FDaEJmLEVBQW9CMEIsRUFBRVEsRUFBaUJDLElBQVlELEVBQWdCQyxJQUNyRUQsRUFBZ0JDLEdBQVMsS0FFMUJELEVBQWdCQyxHQUFXLEVBRTVCLE9BQU9uQyxFQUFvQlEsRUFBRUMsRUFBTyxFQUdqQ2tDLEVBQXFCQyxLQUFpQywyQkFBSUEsS0FBaUMsNEJBQUssR0FDcEdELEVBQW1CRSxRQUFRVCxFQUFxQlUsS0FBSyxLQUFNLElBQzNESCxFQUFtQjFGLEtBQU9tRixFQUFxQlUsS0FBSyxLQUFNSCxFQUFtQjFGLEtBQUs2RixLQUFLSCxHLEtDN0N2RixJQUFJSSxFQUFzQi9DLEVBQW9CUSxPQUFFTCxFQUFXLENBQUMsTUFBTSxJQUFPSCxFQUFvQixPQUM3RitDLEVBQXNCL0MsRUFBb0JRLEVBQUV1QyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3F1YXJlLWZyYWN0YWwvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zcXVhcmUtZnJhY3RhbC8uL2ZyYWN0YWwudHMiLCJ3ZWJwYWNrOi8vc3F1YXJlLWZyYWN0YWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3F1YXJlLWZyYWN0YWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NxdWFyZS1mcmFjdGFsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3F1YXJlLWZyYWN0YWwvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3F1YXJlLWZyYWN0YWwvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsImltcG9ydCB7IFNWRywgUG9pbnQsIFBvaW50QXJyYXkgfSBmcm9tICdAc3ZnZG90anMvc3ZnLmpzJ1xuXG4vLyBUT0RPOlxuLy8gLSBjaGFuZ2Ugd2VpZ2h0c1xuLy8gLSBjaGFuZ2UgbWlkcG9pbnQgZnJhY3Rpb25cblxuLy8gc3F1YXJlIGZyYWN0YWw6XG4vLyAtIHN0YXJ0IHdpdGggYSBzcXVhcmVcbi8vIC0gZWFjaCBzaGFwZSBjYW4gYmU6XG4vLyAgICsgc3F1YXJlXG4vLyAgICAgKiBzcXVhcmUgaW5zaWRlXG4vLyAgICAgKiBzcGxpdCBpbnRvIHR3byB0cmlhbmdsZXMgdHdvIHdheXNcbi8vICAgICAqIGxlYXZlIGVtcHR5XG4vLyAgICsgdHJpYW5nbGVcbi8vICAgICAqIHRyaWFuZ2xlIGluc2lkZVxuLy8gICAgICogc3BsaXQgaW50byBcIlRcIjogdHJpYW5nbGUgYW5kIHR3byB+cmhvbWJ1cydcbi8vICAgKyByaG9tYnVzXG4vLyAgICAgKiBsZWF2ZSBlbXB0eVxuLy9cbi8vIHNvIHdlIGVpdGhlcjpcbi8vICAgMS4gdGFrZSB0aGUgaW5wdXQgKE4pIGFzIGEgbWl4ZWQtYmFzZSBzZWVkXG4vLyAgIDIuIHBpY2sgcmFuZG9tbHkgZWFjaCBzdGVwXG4vL1xuLy8gdHdvIGxpc3RzOlxuLy8gLSBub24tZG9uZSBxdWV1ZSAodHJpYW5nbGUgfCBzcXVhcmUpXG4vLyAtIGRvbmUgcXVldWUgKHRyaWFuZ2xlIHwgc3F1YXJlIHwgfnJob21idXMpXG4vL1xuLy8gZmluYWxseSwgcmVuZGVyIHRyaWFuZ2xlfHNxdWFyZXxyaG9tYnVzIC0+IFNWR1xuXG5mdW5jdGlvbiBtaWRwb2ludCh4czogUG9pbnQsIHlzOiBQb2ludCk6IFBvaW50IHtcbiAgcmV0dXJuIG5ldyBQb2ludCh7XG4gICAgeDogKHhzLnggKyB5cy54KSAvIDIsXG4gICAgeTogKHhzLnkgKyB5cy55KSAvIDIsXG4gIH0pXG59XG5cbmFic3RyYWN0IGNsYXNzIFNoYXBlIHtcbiAgYWJzdHJhY3QgcmVuZGVyKCk6IFBvaW50W107XG5cbiAgYWJzdHJhY3Qgcm90YXRlKCk6IHZvaWQ7XG5cbiAgYWJzdHJhY3Qgc3RlcF9vcHRpb25zKHVuaWZvcm1fd2VpZ2h0czogYm9vbGVhbik6IG51bWJlcjtcblxuICBhYnN0cmFjdCBuZXh0X3N0ZXAoaW5kZXg6IG51bWJlciwgdW5pZm9ybV93ZWlnaHRzOiBib29sZWFuKTogU2hhcGVbXTtcblxuICByZW5kZXJfcG9pbnRhcnJheSgpOiBQb2ludEFycmF5IHtcbiAgICByZXR1cm4gbmV3IFBvaW50QXJyYXkodGhpcy5yZW5kZXIoKS5mbGF0TWFwKChwdCkgPT4ge3JldHVybiBbcHQueCwgcHQueV19KSk7XG4gIH1cblxuICAvLyByZXR1cm5zIHRoZSBudW1iZXIgb2Ygc3ViLXNoYXBlcyBkcmF3blxuICBmcmFjdGFsaXplKFxuICAgIG1heF9kZXB0aDogbnVtYmVyLFxuICAgIHBpeGVsX3NpemU6IG51bWJlcixcbiAgICBzdHJva2Vfd2lkdGg6IG51bWJlcixcbiAgICB1bmlmb3JtX3dlaWdodHM6IGJvb2xlYW4sXG4gICAgbWlkcG9pbnQ/OiBudW1iZXIsXG4gICAgLy8gYm9yZGVyX3BpeGVsczogbnVtYmVyLCAvLyBUT0RPID9cbiAgKTogbnVtYmVyIHtcbiAgICB2YXIgZHJhdyA9IFNWRygpLmFkZFRvKCdib2R5Jykuc2l6ZShwaXhlbF9zaXplLCBwaXhlbF9zaXplKTtcbiAgICBkcmF3LnBvbHlsaW5lKHRoaXMucmVuZGVyX3BvaW50YXJyYXkoKSkuZmlsbCgnbm9uZScpLnN0cm9rZSh7IGNvbG9yOiAnIzAwMCcsIHdpZHRoOiBzdHJva2Vfd2lkdGggfSk7XG5cbiAgICAvLyBbc2hhcGUsIGRlcHRoXVxuICAgIHZhciBudW1fc3ViX3NoYXBlcyA9IDA7XG4gICAgdmFyIHVuZmluaXNoZWRfc2hhcGVzOiBbU2hhcGUsIG51bWJlcl1bXSA9IFtbdGhpcywgMF1dO1xuICAgIHdoaWxlICh1bmZpbmlzaGVkX3NoYXBlcy5sZW5ndGgpIHtcbiAgICAgIGxldCBbY3VycmVudF9zaGFwZSwgY3VycmVudF9kZXB0aF0gPSB1bmZpbmlzaGVkX3NoYXBlcy5wb3AoKTtcbiAgICAgIG51bV9zdWJfc2hhcGVzKys7XG4gICAgICBkcmF3LnBvbHlsaW5lKGN1cnJlbnRfc2hhcGUucmVuZGVyX3BvaW50YXJyYXkoKSkuZmlsbCgnbm9uZScpLnN0cm9rZSh7IGNvbG9yOiAnIzAwMCcsIHdpZHRoOiBzdHJva2Vfd2lkdGggfSk7XG5cbiAgICAgIGlmIChjdXJyZW50X2RlcHRoIDw9IG1heF9kZXB0aCkge1xuICAgICAgICBsZXQgbmV4dF9yYW5kb21fbnVtID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkoMSkpWzBdLzIqKjMyO1xuICAgICAgICBsZXQgbWF4ID0gY3VycmVudF9zaGFwZS5zdGVwX29wdGlvbnModW5pZm9ybV93ZWlnaHRzKTtcbiAgICAgICAgbGV0IG5leHRfc3RlcF9pbmRleCA9IE1hdGguZmxvb3IobmV4dF9yYW5kb21fbnVtICogbWF4KTtcbiAgICAgICAgdW5maW5pc2hlZF9zaGFwZXMucHVzaCguLi5jdXJyZW50X3NoYXBlLm5leHRfc3RlcChuZXh0X3N0ZXBfaW5kZXgsIHVuaWZvcm1fd2VpZ2h0cykubWFwKCh4KSA9PiB7XG4gICAgICAgICAgbGV0IHJldDogW1NoYXBlLCBudW1iZXJdID0gW3gsIGN1cnJlbnRfZGVwdGggKyAxXTtcbiAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVtX3N1Yl9zaGFwZXNcbiAgfVxuXG59XG5cblxuY2xhc3MgVHJpYW5nbGUgZXh0ZW5kcyBTaGFwZSB7XG4gIHB0MDogUG9pbnQ7XG4gIHB0MTogUG9pbnQ7XG4gIHB0MjogUG9pbnQ7XG5cbiAgY29uc3RydWN0b3IocHQwOiBQb2ludCwgcHQxOiBQb2ludCwgcHQyOiBQb2ludCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wdDAgPSBwdDA7XG4gICAgdGhpcy5wdDEgPSBwdDE7XG4gICAgdGhpcy5wdDIgPSBwdDI7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFt0aGlzLnB0MCwgdGhpcy5wdDEsIHRoaXMucHQyXVxuICB9XG5cbiAgcm90YXRlKCkge1xuICAgIGxldCBwb2ludHMgPSBbdGhpcy5wdDAsIHRoaXMucHQxLCB0aGlzLnB0Ml07XG4gICAgW3RoaXMucHQxLCB0aGlzLnB0MiwgdGhpcy5wdDBdID0gcG9pbnRzO1xuICB9XG5cbiAgLy8gcDBcbiAgLy8gfFxcXG4gIC8vIHwgXFxcbiAgLy8gfCAgXFxcbiAgLy8gfCAgIFxcXG4gIC8vIHwgQSAgXFxcbiAgLy8gfCAgICAgXFxcbiAgLy8gfDxwMjBfX1xcIDxwMDFcbiAgLy8gfCBcXCBNICAvXFxcbiAgLy8gfCAgXFwgIC8gIFxcXG4gIC8vIHwgQyBcXC8gQiAgXFxcbiAgLy8gLS0tLS0tLS0tLS0gcDFcbiAgLy8gcDIgICBwMTJcbiAgdHJpc2VjdCgpOiBbVHJpYW5nbGUsIFRyaWFuZ2xlLCBUcmlhbmdsZSwgVHJpYW5nbGVdIHtcbiAgICBsZXQgcHQwID0gdGhpcy5wdDA7XG4gICAgbGV0IHB0MSA9IHRoaXMucHQxO1xuICAgIGxldCBwdDIgPSB0aGlzLnB0MjtcblxuICAgIGxldCBwdDAxID0gbWlkcG9pbnQocHQwLCBwdDEpO1xuICAgIGxldCBwdDEyID0gbWlkcG9pbnQocHQxLCBwdDIpO1xuICAgIGxldCBwdDIwID0gbWlkcG9pbnQocHQyLCBwdDApO1xuXG4gICAgbGV0IHRyaWFuZ2xlX0EgPSBuZXcgVHJpYW5nbGUocHQwLCBwdDAxLCBwdDIwKTtcbiAgICBsZXQgdHJpYW5nbGVfQiA9IG5ldyBUcmlhbmdsZShwdDAxLCBwdDEsIHB0MTIpO1xuICAgIGxldCB0cmlhbmdsZV9DID0gbmV3IFRyaWFuZ2xlKHB0MjAsIHB0MTIsIHB0Mik7XG4gICAgbGV0IHRyaWFuZ2xlX00gPSBuZXcgVHJpYW5nbGUocHQwMSwgcHQxMiwgcHQyMCk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgdHJpYW5nbGVfQSxcbiAgICAgIHRyaWFuZ2xlX0IsXG4gICAgICB0cmlhbmdsZV9DLFxuICAgICAgdHJpYW5nbGVfTV1cbiAgfVxuXG4gIC8vICAgICBwMFxuICAvLyAgICAgfFxcXG4gIC8vICAgICB8IFxcXG4gIC8vICAgICB8ICBcXFxuICAvLyAgICAgfCAgIFxcXG4gIC8vICAgICB8IEEgIFxcXG4gIC8vICAgICB8ICAgICBcXFxuICAvLyBwMjA+fF9wMjAxX1xcIDxwMDFcbiAgLy8gICAgIHwgICB8ICAgXFxcbiAgLy8gICAgIHwgQyB8IEIgIFxcXG4gIC8vICAgICB8ICAgfCAgICAgXFxcbiAgLy8gICAgIC0tLS0tLS0tLS0tIHAxXG4gIC8vIHAyICAgcDEyXG4gIHRfc3BsaXQoKTogW1RyaWFuZ2xlLCBRdWFkcmlsYXRlcmFsLCBRdWFkcmlsYXRlcmFsXSB7XG4gICAgbGV0IHB0MCA9IHRoaXMucHQwO1xuICAgIGxldCBwdDEgPSB0aGlzLnB0MTtcbiAgICBsZXQgcHQyID0gdGhpcy5wdDI7XG5cbiAgICBsZXQgcHQwMSA9IG1pZHBvaW50KHB0MCwgcHQxKTtcbiAgICBsZXQgcHQxMiA9IG1pZHBvaW50KHB0MSwgcHQyKTtcbiAgICBsZXQgcHQyMCA9IG1pZHBvaW50KHB0MiwgcHQwKTtcbiAgICBsZXQgcHQyMDEgPSBtaWRwb2ludChwdDAxLCBwdDIwKTtcblxuICAgIGxldCB0cmlhbmdsZV9BID0gbmV3IFRyaWFuZ2xlKHB0MCwgcHQwMSwgcHQyMCk7XG4gICAgbGV0IHF1YWRyaWxhdGVyYWxfQiA9IG5ldyBRdWFkcmlsYXRlcmFsKHB0MjAxLCBwdDAxLCBwdDEsIHB0MTIpO1xuICAgIGxldCBxdWFkcmlsYXRlcmFsX0MgPSBuZXcgUXVhZHJpbGF0ZXJhbChwdDIwLCBwdDIwMSwgcHQxMiwgcHQyKTtcblxuICAgIHJldHVybiBbXG4gICAgICB0cmlhbmdsZV9BLFxuICAgICAgcXVhZHJpbGF0ZXJhbF9CLFxuICAgICAgcXVhZHJpbGF0ZXJhbF9DXVxuICB9XG5cbiAgc3RlcF9vcHRpb25zKHVuaWZvcm1fd2VpZ2h0czogYm9vbGVhbikge1xuICAgIGlmICh1bmlmb3JtX3dlaWdodHMpIHtcbiAgICAgIHJldHVybiA1XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA5XG4gICAgfVxuICB9XG5cbiAgbmV4dF9zdGVwKGluZGV4OiBudW1iZXIsIHVuaWZvcm1fd2VpZ2h0czogYm9vbGVhbik6IFNoYXBlW10ge1xuICAgIGlmICh1bmlmb3JtX3dlaWdodHMpIHtcbiAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiB0aGlzLnRyaXNlY3QoKVxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcmV0dXJuIHRoaXMudF9zcGxpdCgpXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLnJvdGF0ZSgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLnRfc3BsaXQoKVxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5yb3RhdGUoKTtcbiAgICAgICAgICB0aGlzLnJvdGF0ZSgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLnRfc3BsaXQoKVxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduZXh0X3N0ZXA6IGluZGV4IG91dCBvZiByYW5nZScpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gdGhpcy50cmlzZWN0KClcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiB0aGlzLnRfc3BsaXQoKVxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5yb3RhdGUoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy50X3NwbGl0KClcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHRoaXMucm90YXRlKCk7XG4gICAgICAgICAgdGhpcy5yb3RhdGUoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy50X3NwbGl0KClcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICBjYXNlIDc6XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25leHRfc3RlcDogaW5kZXggb3V0IG9mIHJhbmdlJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5cbmNsYXNzIFF1YWRyaWxhdGVyYWwgZXh0ZW5kcyBTaGFwZSB7XG4gIHB0MDogUG9pbnQ7XG4gIHB0MTogUG9pbnQ7XG4gIHB0MjogUG9pbnQ7XG4gIHB0MzogUG9pbnQ7XG5cbiAgY29uc3RydWN0b3IocHQwOiBQb2ludCwgcHQxOiBQb2ludCwgcHQyOiBQb2ludCwgcHQzOiBQb2ludCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wdDAgPSBwdDA7XG4gICAgdGhpcy5wdDEgPSBwdDE7XG4gICAgdGhpcy5wdDIgPSBwdDI7XG4gICAgdGhpcy5wdDMgPSBwdDM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFt0aGlzLnB0MCwgdGhpcy5wdDEsIHRoaXMucHQyLCB0aGlzLnB0M11cbiAgfVxuXG4gIHJvdGF0ZSgpIHtcbiAgICBsZXQgcG9pbnRzID0gW3RoaXMucHQwLCB0aGlzLnB0MSwgdGhpcy5wdDIsIHRoaXMucHQzXTtcbiAgICBbdGhpcy5wdDEsIHRoaXMucHQyLCB0aGlzLnB0MywgdGhpcy5wdDBdID0gcG9pbnRzO1xuICB9XG5cbiAgc3RlcF9vcHRpb25zKHVuaWZvcm1fd2VpZ2h0czogYm9vbGVhbikge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBuZXh0X3N0ZXAoaW5kZXg6IG51bWJlciwgdW5pZm9ybV93ZWlnaHRzOiBib29sZWFuKTogU2hhcGVbXSB7XG4gICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gW11cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbmV4dF9zdGVwOiBpbmRleCBvdXQgb2YgcmFuZ2UnKVxuICAgIH1cbiAgfVxuXG59XG5cblxuY2xhc3MgU3F1YXJlIGV4dGVuZHMgUXVhZHJpbGF0ZXJhbCB7XG5cbiAgLy8gICAgIHAwICAgICBwMDEgICAgICBwMVxuICAvLyAgICAgX19fX19fX19fX19fX19fX19cbiAgLy8gICAgIHwgICAgICAvIFxcICAgICAgfFxuICAvLyAgICAgfCBBICAgLyAgIFxcICBCICB8XG4gIC8vICAgICB8ICAgIC8gICAgIFxcICAgIHxcbiAgLy8gICAgIHwgICAvICAgICAgIFxcICAgfFxuICAvLyAgICAgfCAgLyAgICAgICAgIFxcICB8XG4gIC8vICAgICB8IC8gICAgICAgICAgIFxcIHxcbiAgLy8gcDMwIHwvICAgICAgTSAgICAgIFxcfCBwMTJcbiAgLy8gICAgIHxcXCAgICAgICAgICAgICAvfFxuICAvLyAgICAgfCBcXCAgICAgICAgICAgLyB8XG4gIC8vICAgICB8ICBcXCAgICAgICAgIC8gIHxcbiAgLy8gICAgIHwgICBcXCAgICAgICAvICAgfFxuICAvLyAgICAgfCAgICBcXCAgICAgLyAgICB8XG4gIC8vICAgICB8IEQgICBcXCAgIC8gIEMgIHxcbiAgLy8gICAgIHwgICAgICBcXCAvICAgICAgfFxuICAvLyAgICAgfC0tLS0tLS0tLS0tLS0tLXwgcDJcbiAgLy8gICAgIHAzICAgICBwMjNcbiAgcXVhZHNlY3QoKTogW1RyaWFuZ2xlLCBUcmlhbmdsZSwgVHJpYW5nbGUsIFRyaWFuZ2xlLCBTcXVhcmVdIHtcbiAgICBsZXQgcHQwID0gdGhpcy5wdDA7XG4gICAgbGV0IHB0MSA9IHRoaXMucHQxO1xuICAgIGxldCBwdDIgPSB0aGlzLnB0MjtcbiAgICBsZXQgcHQzID0gdGhpcy5wdDM7XG5cbiAgICBsZXQgcHQwMSA9IG1pZHBvaW50KHRoaXMucHQwLCB0aGlzLnB0MSk7XG4gICAgbGV0IHB0MTIgPSBtaWRwb2ludCh0aGlzLnB0MSwgdGhpcy5wdDIpO1xuICAgIGxldCBwdDIzID0gbWlkcG9pbnQodGhpcy5wdDIsIHRoaXMucHQzKTtcbiAgICBsZXQgcHQzMCA9IG1pZHBvaW50KHRoaXMucHQzLCB0aGlzLnB0MCk7XG5cbiAgICBsZXQgdHJpYW5nbGVfQSA9IG5ldyBUcmlhbmdsZShwdDAsIHB0MDEsIHB0MzApO1xuICAgIGxldCB0cmlhbmdsZV9CID0gbmV3IFRyaWFuZ2xlKHB0MDEsIHB0MSwgcHQxMik7XG4gICAgbGV0IHRyaWFuZ2xlX0MgPSBuZXcgVHJpYW5nbGUocHQxMiwgcHQyLCBwdDIzKTtcbiAgICBsZXQgdHJpYW5nbGVfRCA9IG5ldyBUcmlhbmdsZShwdDMwLCBwdDIzLCBwdDMpO1xuICAgIGxldCBzcXVhcmVfTSA9IG5ldyBTcXVhcmUocHQwMSwgcHQxMiwgcHQyMywgcHQzMCk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgdHJpYW5nbGVfQSxcbiAgICAgIHRyaWFuZ2xlX0IsXG4gICAgICB0cmlhbmdsZV9DLFxuICAgICAgdHJpYW5nbGVfRCxcbiAgICAgIHNxdWFyZV9NXVxuICB9XG5cbiAgLy8gcDAgICAgICAgICAgICAgIHAxXG4gIC8vIF9fX19fX19fX19fX19fX19fXG4gIC8vIHxcXCAgICAgICAgICAgICAgfFxuICAvLyB8IFxcICAgICAgICAgICAgIHxcbiAgLy8gfCAgXFwgICAgICAgICAgICB8XG4gIC8vIHwgICBcXCAgICAgIEEgICAgfFxuICAvLyB8ICAgIFxcICAgICAgICAgIHxcbiAgLy8gfCAgICAgXFwgICAgICAgICB8XG4gIC8vIHwgICAgICBcXCAgICAgICAgfFxuICAvLyB8ICAgICAgIFxcICAgICAgIHxcbiAgLy8gfCAgICAgICAgXFwgICAgICB8XG4gIC8vIHwgICAgICAgICBcXCAgICAgfFxuICAvLyB8ICAgICAgICAgIFxcICAgIHxcbiAgLy8gfCAgIEIgICAgICAgXFwgICB8XG4gIC8vIHwgICAgICAgICAgICBcXCAgfFxuICAvLyB8ICAgICAgICAgICAgIFxcIHxcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLXwgcDJcbiAgLy8gcDNcbiAgYmlzZWN0KCk6IFtUcmlhbmdsZSwgVHJpYW5nbGVdIHtcbiAgICBsZXQgcHQwID0gdGhpcy5wdDA7XG4gICAgbGV0IHB0MSA9IHRoaXMucHQxO1xuICAgIGxldCBwdDIgPSB0aGlzLnB0MjtcbiAgICBsZXQgcHQzID0gdGhpcy5wdDM7XG5cbiAgICBsZXQgdHJpYW5nbGVfQSA9IG5ldyBUcmlhbmdsZShwdDAsIHB0MSwgcHQyKTtcbiAgICBsZXQgdHJpYW5nbGVfQiA9IG5ldyBUcmlhbmdsZShwdDAsIHB0MiwgcHQzKTtcblxuICAgIHJldHVybiBbXG4gICAgICB0cmlhbmdsZV9BLFxuICAgICAgdHJpYW5nbGVfQl1cbiAgfVxuXG4gIHN0ZXBfb3B0aW9ucyh1bmlmb3JtX3dlaWdodHM6IGJvb2xlYW4pIHtcbiAgICBpZiAodW5pZm9ybV93ZWlnaHRzKSB7XG4gICAgICByZXR1cm4gNFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gNlxuICAgIH1cbiAgfVxuXG4gIG5leHRfc3RlcChpbmRleDogbnVtYmVyLCB1bmlmb3JtX3dlaWdodHM6IGJvb2xlYW4pOiBTaGFwZVtdIHtcbiAgICBpZiAodW5pZm9ybV93ZWlnaHRzKSB7XG4gICAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gdGhpcy5xdWFkc2VjdCgpXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gdGhpcy5iaXNlY3QoKVxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy5yb3RhdGUoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5iaXNlY3QoKVxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduZXh0X3N0ZXA6IGluZGV4IG91dCBvZiByYW5nZScpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucXVhZHNlY3QoKVxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmlzZWN0KClcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMucm90YXRlKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmlzZWN0KClcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduZXh0X3N0ZXA6IGluZGV4IG91dCBvZiByYW5nZScpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICBsZXQgcGl4ZWxfc2l6ZSA9IE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCwgd2luZG93LmlubmVyV2lkdGgpO1xuICBjb25zb2xlLmxvZygncGl4ZWwgc2l6ZTonLCBwaXhlbF9zaXplKTtcblxuICBjb25zdCBwdDAgPSBuZXcgUG9pbnQoe3g6IDAsIHk6IHBpeGVsX3NpemV9KTtcbiAgY29uc3QgcHQxID0gbmV3IFBvaW50KHt4OiBwaXhlbF9zaXplLCB5OiBwaXhlbF9zaXplfSk7XG4gIGNvbnN0IHB0MiA9IG5ldyBQb2ludCh7eDogcGl4ZWxfc2l6ZSwgeTogMH0pO1xuICBjb25zdCBwdDMgPSBuZXcgUG9pbnQoe3g6IDAsIHk6IDB9KTtcbiAgY29uc3QgZnJhY3RhbF9zZWVkID0gbmV3IFNxdWFyZShwdDAsIHB0MSwgcHQyLCBwdDMpO1xuXG4gIGNvbnN0IHVybF9wYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICB2YXIgbWF4X2RlcHRoID0gTnVtYmVyKHVybF9wYXJhbXMuZ2V0KCdkZXB0aCcpKTtcbiAgaWYgKCFtYXhfZGVwdGgpIHtcbiAgICBtYXhfZGVwdGggPSAzXG4gIH1cbiAgdmFyIHN0cm9rZV93aWR0aCA9IE51bWJlcih1cmxfcGFyYW1zLmdldCgnc3Ryb2tlJykpO1xuICBpZiAoIXN0cm9rZV93aWR0aCkge1xuICAgIHN0cm9rZV93aWR0aCA9IDNcbiAgfVxuICB2YXIgbWlkcG9pbnQgPSBOdW1iZXIodXJsX3BhcmFtcy5nZXQoJ21pZHBvaW50JykpO1xuICBjb25zdCB1bmlmb3JtX3dlaWdodHNfcGFyYW0gPSB1cmxfcGFyYW1zLmdldCgndW5pZm9ybScpO1xuICBjb25zdCB1bmlmb3JtX3dlaWdodHMgPSAhdW5pZm9ybV93ZWlnaHRzX3BhcmFtIHx8ICh1bmlmb3JtX3dlaWdodHNfcGFyYW0gPT0gJ3QnKTtcblxuICB2YXIgbnVtX3NoYXBlcyA9IGZyYWN0YWxfc2VlZC5mcmFjdGFsaXplKG1heF9kZXB0aCwgcGl4ZWxfc2l6ZSwgc3Ryb2tlX3dpZHRoLCB1bmlmb3JtX3dlaWdodHMsIG1pZHBvaW50KTtcbiAgY29uc29sZS5sb2coJ251bV9zaGFwZXMnLCBudW1fc2hhcGVzKTtcbiAgd2hpbGUgKG51bV9zaGFwZXMgPCAyKSB7XG4gICAgLy8gcmVtb3ZlIHByZXZpb3VzIFNWR1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5jaGlsZHJlblswXSk7XG5cbiAgICAvLyByZS1nZW5lcmF0ZVxuICAgIG51bV9zaGFwZXMgPSBmcmFjdGFsX3NlZWQuZnJhY3RhbGl6ZShtYXhfZGVwdGgsIHBpeGVsX3NpemUsIHN0cm9rZV93aWR0aCwgdW5pZm9ybV93ZWlnaHRzLCBtaWRwb2ludCk7XG4gICAgY29uc29sZS5sb2coJ251bV9zaGFwZXMnLCBudW1fc2hhcGVzKTtcbiAgfVxuXG59XG5cbi8vIHJ1biBtYWluIG9uIGxvYWQgKGFmdGVyIDxib2R5PiBleGlzdHMuLilcbndpbmRvdy5vbmxvYWQgPSBtYWluO1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MTc5OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzcXVhcmVfZnJhY3RhbFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzcXVhcmVfZnJhY3RhbFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgWzUwMF0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQxNykpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJuYW1lcyI6WyJkZWZlcnJlZCIsIm1pZHBvaW50IiwieHMiLCJ5cyIsIngiLCJ5IiwicmVuZGVyX3BvaW50YXJyYXkiLCJ0aGlzIiwicmVuZGVyIiwiZmxhdE1hcCIsInB0IiwiZnJhY3RhbGl6ZSIsIm1heF9kZXB0aCIsInBpeGVsX3NpemUiLCJzdHJva2Vfd2lkdGgiLCJ1bmlmb3JtX3dlaWdodHMiLCJkcmF3IiwiYWRkVG8iLCJzaXplIiwicG9seWxpbmUiLCJmaWxsIiwic3Ryb2tlIiwiY29sb3IiLCJ3aWR0aCIsIm51bV9zdWJfc2hhcGVzIiwidW5maW5pc2hlZF9zaGFwZXMiLCJwb3AiLCJjdXJyZW50X3NoYXBlIiwiY3VycmVudF9kZXB0aCIsIm5leHRfcmFuZG9tX251bSIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQzMkFycmF5IiwibWF4Iiwic3RlcF9vcHRpb25zIiwibmV4dF9zdGVwX2luZGV4IiwiTWF0aCIsImZsb29yIiwicHVzaCIsIm5leHRfc3RlcCIsIm1hcCIsImxlbmd0aCIsInB0MCIsInB0MSIsInB0MiIsInJvdGF0ZSIsInBvaW50cyIsInRyaXNlY3QiLCJwdDAxIiwicHQxMiIsInB0MjAiLCJUcmlhbmdsZSIsInRfc3BsaXQiLCJwdDIwMSIsIlF1YWRyaWxhdGVyYWwiLCJpbmRleCIsIkVycm9yIiwiU2hhcGUiLCJwdDMiLCJxdWFkc2VjdCIsInB0MjMiLCJwdDMwIiwiU3F1YXJlIiwiYmlzZWN0Iiwid2luZG93Iiwib25sb2FkIiwibWluIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvZyIsImZyYWN0YWxfc2VlZCIsInVybF9wYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsIk51bWJlciIsImdldCIsInVuaWZvcm1fd2VpZ2h0c19wYXJhbSIsIm51bV9zaGFwZXMiLCJkb2N1bWVudCIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImNoaWxkcmVuIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJtIiwiTyIsInJlc3VsdCIsImNodW5rSWRzIiwiZm4iLCJwcmlvcml0eSIsIm5vdEZ1bGZpbGxlZCIsIkluZmluaXR5IiwiaSIsImZ1bGZpbGxlZCIsImoiLCJPYmplY3QiLCJrZXlzIiwiZXZlcnkiLCJrZXkiLCJzcGxpY2UiLCJyIiwiZCIsImRlZmluaXRpb24iLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluc3RhbGxlZENodW5rcyIsImNodW5rSWQiLCJ3ZWJwYWNrSnNvbnBDYWxsYmFjayIsInBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uIiwiZGF0YSIsIm1vcmVNb2R1bGVzIiwicnVudGltZSIsInNvbWUiLCJpZCIsImNodW5rTG9hZGluZ0dsb2JhbCIsInNlbGYiLCJmb3JFYWNoIiwiYmluZCIsIl9fd2VicGFja19leHBvcnRzX18iXSwic291cmNlUm9vdCI6IiJ9