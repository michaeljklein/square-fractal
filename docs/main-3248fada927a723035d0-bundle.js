(()=>{"use strict";var t,e={417:(t,e,n)=>{var r,i=n(500),o=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(){function t(){}return t.prototype.midpoint=function(t,e){return this.midpoint_weight?new i.E9({x:this.midpoint_weight*t.x+(1-this.midpoint_weight)*e.x,y:this.midpoint_weight*t.y+(1-this.midpoint_weight)*e.y}):new i.E9({x:(t.x+e.x)/2,y:(t.y+e.y)/2})},t.prototype.render_pointarray=function(){return new i.VC(this.render().flatMap((function(t){return[t.x,t.y]})))},t.prototype.fractalize=function(t,e,n,r,o){var s=(0,i.Wj)().addTo("body").size(e,e);s.polyline(this.render_pointarray()).fill("none").stroke({color:"#000",width:n});for(var p=0,a=[[this,0]],u=function(){var e=a.pop(),i=e[0],o=e[1];if(p++,s.polyline(i.render_pointarray()).fill("none").stroke({color:"#000",width:n}),o<=t){var u=crypto.getRandomValues(new Uint32Array(1))[0]/Math.pow(2,32),h=i.step_options(r),c=Math.floor(u*h);a.push.apply(a,i.next_step(c,r).map((function(t){return[t,o+1]})))}};a.length;)u();return p},t}(),p=function(t){function e(e,n,r){var i=t.call(this)||this;return i.pt0=e,i.pt1=n,i.pt2=r,i}return o(e,t),e.prototype.render=function(){return[this.pt0,this.pt1,this.pt2]},e.prototype.rotate=function(){var t=[this.pt0,this.pt1,this.pt2];this.pt1=t[0],this.pt2=t[1],this.pt0=t[2]},e.prototype.trisect=function(){var t=this.pt0,n=this.pt1,r=this.pt2,i=this.midpoint(t,n),o=this.midpoint(n,r),s=this.midpoint(r,t);return[new e(t,i,s),new e(i,n,o),new e(s,o,r),new e(i,o,s)]},e.prototype.t_split=function(){var t=this.pt0,n=this.pt1,r=this.pt2,i=this.midpoint(t,n),o=this.midpoint(n,r),s=this.midpoint(r,t),p=this.midpoint(i,s);return[new e(t,i,s),new a(p,i,n,o),new a(s,p,o,r)]},e.prototype.step_options=function(t){return t?5:9},e.prototype.next_step=function(t,e){if(e)switch(t){case 0:return this.trisect();case 1:return this.t_split();case 2:return this.rotate(),this.t_split();case 3:return this.rotate(),this.rotate(),this.t_split();case 4:return[];default:throw new Error("next_step: index out of range")}else switch(t){case 0:case 1:case 2:return this.trisect();case 3:return this.t_split();case 4:return this.rotate(),this.t_split();case 5:return this.rotate(),this.rotate(),this.t_split();case 6:case 7:case 8:return[];default:throw new Error("next_step: index out of range")}},e}(s),a=function(t){function e(e,n,r,i){var o=t.call(this)||this;return o.pt0=e,o.pt1=n,o.pt2=r,o.pt3=i,o}return o(e,t),e.prototype.render=function(){return[this.pt0,this.pt1,this.pt2,this.pt3]},e.prototype.rotate=function(){var t=[this.pt0,this.pt1,this.pt2,this.pt3];this.pt1=t[0],this.pt2=t[1],this.pt3=t[2],this.pt0=t[3]},e.prototype.step_options=function(t){return 1},e.prototype.next_step=function(t,e){if(0===t)return[];throw new Error("next_step: index out of range")},e}(s),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.quadsect=function(){var t=this.pt0,n=this.pt1,r=this.pt2,i=this.pt3,o=this.midpoint(this.pt0,this.pt1),s=this.midpoint(this.pt1,this.pt2),a=this.midpoint(this.pt2,this.pt3),u=this.midpoint(this.pt3,this.pt0);return[new p(t,o,u),new p(o,n,s),new p(s,r,a),new p(u,a,i),new e(o,s,a,u)]},e.prototype.bisect=function(){var t=this.pt0,e=this.pt1,n=this.pt2,r=this.pt3;return[new p(t,e,n),new p(t,n,r)]},e.prototype.step_options=function(t){return t?4:6},e.prototype.next_step=function(t,e){if(e)switch(t){case 0:return this.quadsect();case 1:return this.bisect();case 2:return this.rotate(),this.bisect();case 3:return[];default:throw new Error("next_step: index out of range")}else switch(t){case 0:case 1:return this.quadsect();case 2:return this.bisect();case 3:return this.rotate(),this.bisect();case 4:case 5:return[];default:throw new Error("next_step: index out of range")}},e}(a);window.onload=function(){return t=this,e=void 0,r=function(){var t,e,n,r,o,s,p,a,h,c,l,f,d;return function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:p(0),throw:p(1),return:p(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function p(p){return function(a){return function(p){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,p[0]&&(s=0)),s;)try{if(n=1,r&&(i=2&p[0]?r.return:p[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,p[1])).done)return i;switch(r=0,i&&(p=[2&p[0],i.value]),p[0]){case 0:case 1:i=p;break;case 4:return s.label++,{value:p[1],done:!1};case 5:s.label++,r=p[1],p=[0];continue;case 7:p=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==p[0]&&2!==p[0])){s=0;continue}if(3===p[0]&&(!i||p[1]>i[0]&&p[1]<i[3])){s.label=p[1];break}if(6===p[0]&&s.label<i[1]){s.label=i[1],i=p;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(p);break}i[2]&&s.ops.pop(),s.trys.pop();continue}p=e.call(t,s)}catch(t){p=[6,t],r=0}finally{n=i=0}if(5&p[0])throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}([p,a])}}}(this,(function(w){for(t=Math.min(window.innerHeight,window.innerWidth),console.log("pixel size:",t),e=new i.E9({x:0,y:t}),n=new i.E9({x:t,y:t}),r=new i.E9({x:t,y:0}),o=new i.E9({x:0,y:0}),s=new u(e,n,r,o),p=new URLSearchParams(window.location.search),(a=Number(p.get("depth")))||(a=3),(h=Number(p.get("stroke")))||(h=3),c=Number(p.get("midpoint")),l=p.get("uniform"),f=!l||"t"==l,d=s.fractalize(a,t,h,f,c),console.log("num_shapes",d);d<2;)document.body.removeChild(document.body.children[0]),d=s.fractalize(a,t,h,f,c),console.log("num_shapes",d);return[2]}))},new((n=void 0)||(n=Promise))((function(i,o){function s(t){try{a(r.next(t))}catch(t){o(t)}}function p(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,p)}a((r=r.apply(t,e||[])).next())}));var t,e,n,r}}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,r),o.exports}r.m=e,t=[],r.O=(e,n,i,o)=>{if(!n){var s=1/0;for(h=0;h<t.length;h++){for(var[n,i,o]=t[h],p=!0,a=0;a<n.length;a++)(!1&o||s>=o)&&Object.keys(r.O).every((t=>r.O[t](n[a])))?n.splice(a--,1):(p=!1,o<s&&(s=o));if(p){t.splice(h--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1];t[h]=[n,i,o]},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var i,o,[s,p,a]=n,u=0;if(s.some((e=>0!==t[e]))){for(i in p)r.o(p,i)&&(r.m[i]=p[i]);if(a)var h=a(r)}for(e&&e(n);u<s.length;u++)o=s[u],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(h)},n=self.webpackChunksquare_fractal=self.webpackChunksquare_fractal||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var i=r.O(void 0,[500],(()=>r(417)));i=r.O(i)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1iMzVjMDU0YzM1NWIyZTZmZDM2MC1idW5kbGUuanMiLCJtYXBwaW5ncyI6InVCQUFJQSxFLG1lQzZCSiwwQkErREEsUUE1REUsWUFBQUMsU0FBQSxTQUFTQyxFQUFXQyxHQUNsQixPQUFJQyxLQUFLQyxnQkFDQSxJQUFJLEtBQU0sQ0FDZkMsRUFBR0YsS0FBS0MsZ0JBQWtCSCxFQUFHSSxHQUFLLEVBQUlGLEtBQUtDLGlCQUFtQkYsRUFBR0csRUFDakVDLEVBQUdILEtBQUtDLGdCQUFrQkgsRUFBR0ssR0FBSyxFQUFJSCxLQUFLQyxpQkFBbUJGLEVBQUdJLElBRzVELElBQUksS0FBTSxDQUNmRCxHQUFJSixFQUFHSSxFQUFJSCxFQUFHRyxHQUFLLEVBQ25CQyxHQUFJTCxFQUFHSyxFQUFJSixFQUFHSSxHQUFLLEdBR3pCLEVBVUEsWUFBQUMsa0JBQUEsV0FDRSxPQUFPLElBQUksS0FBV0osS0FBS0ssU0FBU0MsU0FBUSxTQUFDQyxHQUFRLE1BQU8sQ0FBQ0EsRUFBR0wsRUFBR0ssRUFBR0osRUFBRSxJQUMxRSxFQUdBLFlBQUFLLFdBQUEsU0FDRUMsRUFDQUMsRUFDQUMsRUFDQUMsRUFDQVgsR0FHQSxJQUFJWSxHQUFPLFVBQU1DLE1BQU0sUUFBUUMsS0FBS0wsRUFBWUEsR0FDaERHLEVBQUtHLFNBQVNoQixLQUFLSSxxQkFBcUJhLEtBQUssUUFBUUMsT0FBTyxDQUFFQyxNQUFPLE9BQVFDLE1BQU9ULElBS3BGLElBRkEsSUFBSVUsRUFBaUIsRUFDakJDLEVBQXVDLENBQUMsQ0FBQ3RCLEtBQU0sSSxhQUU3QyxNQUFpQ3NCLEVBQWtCQyxNQUFsREMsRUFBYSxLQUFFQyxFQUFhLEtBSWpDLEdBSEFKLElBQ0FSLEVBQUtHLFNBQVNRLEVBQWNwQixxQkFBcUJhLEtBQUssUUFBUUMsT0FBTyxDQUFFQyxNQUFPLE9BQVFDLE1BQU9ULElBRXpGYyxHQUFpQmhCLEVBQVcsQ0FDOUIsSUFBSWlCLEVBQWtCQyxPQUFPQyxnQkFBZ0IsSUFBSUMsWUFBWSxJQUFJLEdBQUcsV0FBRyxJQUNuRUMsRUFBTU4sRUFBY08sYUFBYW5CLEdBQ2pDb0IsRUFBa0JDLEtBQUtDLE1BQU1SLEVBQWtCSSxHQUNuRFIsRUFBa0JhLEtBQUksTUFBdEJiLEVBQTBCRSxFQUFjWSxVQUFVSixFQUFpQnBCLEdBQWlCeUIsS0FBSSxTQUFDbkMsR0FFdkYsTUFEMkIsQ0FBQ0EsRUFBR3VCLEVBQWdCLEVBRWpELElBQ0YsQyxFQWJLSCxFQUFrQmdCLFEsSUFnQnpCLE9BQU9qQixDQUNULEVBRUYsRUEvREEsR0FrRUEsY0FNRSxXQUFZa0IsRUFBWUMsRUFBWUMsR0FDbEMsUUFBSyxZQUFFLEssT0FDUCxFQUFLRixJQUFNQSxFQUNYLEVBQUtDLElBQU1BLEVBQ1gsRUFBS0MsSUFBTUEsRSxDQUNiLENBa0lGLE9BN0l1QixPQWFyQixZQUFBcEMsT0FBQSxXQUNFLE1BQU8sQ0FBQ0wsS0FBS3VDLElBQUt2QyxLQUFLd0MsSUFBS3hDLEtBQUt5QyxJQUNuQyxFQUVBLFlBQUFDLE9BQUEsV0FDRSxJQUFJQyxFQUFTLENBQUMzQyxLQUFLdUMsSUFBS3ZDLEtBQUt3QyxJQUFLeEMsS0FBS3lDLEtBQ3RDekMsS0FBS3dDLElBQTJCRyxFQUFNLEdBQTVCM0MsS0FBS3lDLElBQWlCRSxFQUFNLEdBQWxCM0MsS0FBS3VDLElBQU9JLEVBQU0sRUFDekMsRUFlQSxZQUFBQyxRQUFBLFdBQ0UsSUFBSUwsRUFBTXZDLEtBQUt1QyxJQUNYQyxFQUFNeEMsS0FBS3dDLElBQ1hDLEVBQU16QyxLQUFLeUMsSUFFWEksRUFBTzdDLEtBQUtILFNBQVMwQyxFQUFLQyxHQUMxQk0sRUFBTzlDLEtBQUtILFNBQVMyQyxFQUFLQyxHQUMxQk0sRUFBTy9DLEtBQUtILFNBQVM0QyxFQUFLRixHQU85QixNQUFPLENBTFUsSUFBSVMsRUFBU1QsRUFBS00sRUFBTUUsR0FDeEIsSUFBSUMsRUFBU0gsRUFBTUwsRUFBS00sR0FDeEIsSUFBSUUsRUFBU0QsRUFBTUQsRUFBTUwsR0FDekIsSUFBSU8sRUFBU0gsRUFBTUMsRUFBTUMsR0FPNUMsRUFlQSxZQUFBRSxRQUFBLFdBQ0UsSUFBSVYsRUFBTXZDLEtBQUt1QyxJQUNYQyxFQUFNeEMsS0FBS3dDLElBQ1hDLEVBQU16QyxLQUFLeUMsSUFFWEksRUFBTzdDLEtBQUtILFNBQVMwQyxFQUFLQyxHQUMxQk0sRUFBTzlDLEtBQUtILFNBQVMyQyxFQUFLQyxHQUMxQk0sRUFBTy9DLEtBQUtILFNBQVM0QyxFQUFLRixHQUMxQlcsRUFBUWxELEtBQUtILFNBQVNnRCxFQUFNRSxHQU1oQyxNQUFPLENBSlUsSUFBSUMsRUFBU1QsRUFBS00sRUFBTUUsR0FDbkIsSUFBSUksRUFBY0QsRUFBT0wsRUFBTUwsRUFBS00sR0FDcEMsSUFBSUssRUFBY0osRUFBTUcsRUFBT0osRUFBTUwsR0FNN0QsRUFFQSxZQUFBVixhQUFBLFNBQWFuQixHQUNYLE9BQUlBLEVBQ0ssRUFFQSxDQUVYLEVBRUEsWUFBQXdCLFVBQUEsU0FBVWdCLEVBQWV4QyxHQUN2QixHQUFJQSxFQUNGLE9BQVF3QyxHQUNOLEtBQUssRUFDSCxPQUFPcEQsS0FBSzRDLFVBQ2QsS0FBSyxFQUNILE9BQU81QyxLQUFLaUQsVUFDZCxLQUFLLEVBRUgsT0FEQWpELEtBQUswQyxTQUNFMUMsS0FBS2lELFVBQ2QsS0FBSyxFQUdILE9BRkFqRCxLQUFLMEMsU0FDTDFDLEtBQUswQyxTQUNFMUMsS0FBS2lELFVBQ2QsS0FBSyxFQUNILE1BQU8sR0FDVCxRQUNFLE1BQU0sSUFBSUksTUFBTSxzQ0FHcEIsT0FBUUQsR0FDTixLQUFLLEVBQ0wsS0FBSyxFQUNMLEtBQUssRUFDSCxPQUFPcEQsS0FBSzRDLFVBQ2QsS0FBSyxFQUNILE9BQU81QyxLQUFLaUQsVUFDZCxLQUFLLEVBRUgsT0FEQWpELEtBQUswQyxTQUNFMUMsS0FBS2lELFVBQ2QsS0FBSyxFQUdILE9BRkFqRCxLQUFLMEMsU0FDTDFDLEtBQUswQyxTQUNFMUMsS0FBS2lELFVBQ2QsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0gsTUFBTyxHQUNULFFBQ0UsTUFBTSxJQUFJSSxNQUFNLGlDQUd4QixFQUVGLEVBN0lBLENBQXVCQyxHQWdKdkIsY0FPRSxXQUFZZixFQUFZQyxFQUFZQyxFQUFZYyxHQUM5QyxRQUFLLFlBQUUsSyxPQUNQLEVBQUtoQixJQUFNQSxFQUNYLEVBQUtDLElBQU1BLEVBQ1gsRUFBS0MsSUFBTUEsRUFDWCxFQUFLYyxJQUFNQSxFLENBQ2IsQ0F3QkYsT0FyQzRCLE9BZTFCLFlBQUFsRCxPQUFBLFdBQ0UsTUFBTyxDQUFDTCxLQUFLdUMsSUFBS3ZDLEtBQUt3QyxJQUFLeEMsS0FBS3lDLElBQUt6QyxLQUFLdUQsSUFDN0MsRUFFQSxZQUFBYixPQUFBLFdBQ0UsSUFBSUMsRUFBUyxDQUFDM0MsS0FBS3VDLElBQUt2QyxLQUFLd0MsSUFBS3hDLEtBQUt5QyxJQUFLekMsS0FBS3VELEtBQ2hEdkQsS0FBS3dDLElBQXFDRyxFQUFNLEdBQXRDM0MsS0FBS3lDLElBQTJCRSxFQUFNLEdBQTVCM0MsS0FBS3VELElBQWlCWixFQUFNLEdBQWxCM0MsS0FBS3VDLElBQU9JLEVBQU0sRUFDbkQsRUFFQSxZQUFBWixhQUFBLFNBQWFuQixHQUNYLE9BQU8sQ0FDVCxFQUVBLFlBQUF3QixVQUFBLFNBQVVnQixFQUFleEMsR0FDdkIsR0FDTyxJQURDd0MsRUFFSixNQUFPLEdBRVAsTUFBTSxJQUFJQyxNQUFNLGdDQUV0QixFQUVGLEVBckNBLENBQTRCQyxHQXdDNUIsMkIsOENBdUhBLFFBdkhxQixPQW9CbkIsWUFBQUUsU0FBQSxXQUNFLElBQUlqQixFQUFNdkMsS0FBS3VDLElBQ1hDLEVBQU14QyxLQUFLd0MsSUFDWEMsRUFBTXpDLEtBQUt5QyxJQUNYYyxFQUFNdkQsS0FBS3VELElBRVhWLEVBQU83QyxLQUFLSCxTQUFTRyxLQUFLdUMsSUFBS3ZDLEtBQUt3QyxLQUNwQ00sRUFBTzlDLEtBQUtILFNBQVNHLEtBQUt3QyxJQUFLeEMsS0FBS3lDLEtBQ3BDZ0IsRUFBT3pELEtBQUtILFNBQVNHLEtBQUt5QyxJQUFLekMsS0FBS3VELEtBQ3BDRyxFQUFPMUQsS0FBS0gsU0FBU0csS0FBS3VELElBQUt2RCxLQUFLdUMsS0FReEMsTUFBTyxDQU5VLElBQUlTLEVBQVNULEVBQUtNLEVBQU1hLEdBQ3hCLElBQUlWLEVBQVNILEVBQU1MLEVBQUtNLEdBQ3hCLElBQUlFLEVBQVNGLEVBQU1MLEVBQUtnQixHQUN4QixJQUFJVCxFQUFTVSxFQUFNRCxFQUFNRixHQUMzQixJQUFJSSxFQUFPZCxFQUFNQyxFQUFNVyxFQUFNQyxHQVE5QyxFQW9CQSxZQUFBRSxPQUFBLFdBQ0UsSUFBSXJCLEVBQU12QyxLQUFLdUMsSUFDWEMsRUFBTXhDLEtBQUt3QyxJQUNYQyxFQUFNekMsS0FBS3lDLElBQ1hjLEVBQU12RCxLQUFLdUQsSUFLZixNQUFPLENBSFUsSUFBSVAsRUFBU1QsRUFBS0MsRUFBS0MsR0FDdkIsSUFBSU8sRUFBU1QsRUFBS0UsRUFBS2MsR0FLMUMsRUFFQSxZQUFBeEIsYUFBQSxTQUFhbkIsR0FDWCxPQUFJQSxFQUNLLEVBRUEsQ0FFWCxFQUVBLFlBQUF3QixVQUFBLFNBQVVnQixFQUFleEMsR0FDdkIsR0FBSUEsRUFDRixPQUFRd0MsR0FDTixLQUFLLEVBQ0gsT0FBT3BELEtBQUt3RCxXQUNkLEtBQUssRUFDSCxPQUFPeEQsS0FBSzRELFNBQ2QsS0FBSyxFQUVILE9BREE1RCxLQUFLMEMsU0FDRTFDLEtBQUs0RCxTQUNkLEtBQUssRUFDSCxNQUFPLEdBQ1QsUUFDRSxNQUFNLElBQUlQLE1BQU0sc0NBR3BCLE9BQVFELEdBQ04sS0FBSyxFQUNMLEtBQUssRUFDSCxPQUFPcEQsS0FBS3dELFdBQ2QsS0FBSyxFQUNILE9BQU94RCxLQUFLNEQsU0FDZCxLQUFLLEVBRUgsT0FEQTVELEtBQUswQyxTQUNFMUMsS0FBSzRELFNBQ2QsS0FBSyxFQUNMLEtBQUssRUFDSCxNQUFPLEdBQ1QsUUFDRSxNQUFNLElBQUlQLE1BQU0saUNBR3hCLEVBRUYsRUF2SEEsQ0FBcUJGLEdBK0pyQlUsT0FBT0MsT0FyQ1AsVyxxcENBeUJFLElBeEJJcEQsRUFBYXVCLEtBQUs4QixJQUFJRixPQUFPRyxZQUFhSCxPQUFPSSxZQUNyREMsUUFBUUMsSUFBSSxjQUFlekQsR0FFckI2QixFQUFNLElBQUksS0FBTSxDQUFDckMsRUFBRyxFQUFHQyxFQUFHTyxJQUMxQjhCLEVBQU0sSUFBSSxLQUFNLENBQUN0QyxFQUFHUSxFQUFZUCxFQUFHTyxJQUNuQytCLEVBQU0sSUFBSSxLQUFNLENBQUN2QyxFQUFHUSxFQUFZUCxFQUFHLElBQ25Db0QsRUFBTSxJQUFJLEtBQU0sQ0FBQ3JELEVBQUcsRUFBR0MsRUFBRyxJQUMxQmlFLEVBQWUsSUFBSVQsRUFBT3BCLEVBQUtDLEVBQUtDLEVBQUtjLEdBRXpDYyxFQUFhLElBQUlDLGdCQUFnQlQsT0FBT1UsU0FBU0MsU0FDbkQvRCxFQUFZZ0UsT0FBT0osRUFBV0ssSUFBSSxhQUVwQ2pFLEVBQVksSUFFVkUsRUFBZThELE9BQU9KLEVBQVdLLElBQUksY0FFdkMvRCxFQUFlLEdBRWJWLEVBQWtCd0UsT0FBT0osRUFBV0ssSUFBSSxhQUN0Q0MsRUFBd0JOLEVBQVdLLElBQUksV0FDdkM5RCxHQUFtQitELEdBQW1ELEtBQXpCQSxFQUUvQ0MsRUFBYVIsRUFBYTVELFdBQVdDLEVBQVdDLEVBQVlDLEVBQWNDLEVBQWlCWCxHQUMvRmlFLFFBQVFDLElBQUksYUFBY1MsR0FDbkJBLEVBQWEsR0FFbEJDLFNBQVNDLEtBQUtDLFlBQVlGLFNBQVNDLEtBQUtFLFNBQVMsSUFHakRKLEVBQWFSLEVBQWE1RCxXQUFXQyxFQUFXQyxFQUFZQyxFQUFjQyxFQUFpQlgsR0FDM0ZpRSxRQUFRQyxJQUFJLGFBQWNTLEcsZ1RDL2ExQkssRUFBMkIsQ0FBQyxFQUdoQyxTQUFTQyxFQUFvQkMsR0FFNUIsSUFBSUMsRUFBZUgsRUFBeUJFLEdBQzVDLFFBQXFCRSxJQUFqQkQsRUFDSCxPQUFPQSxFQUFhRSxRQUdyQixJQUFJQyxFQUFTTixFQUF5QkUsR0FBWSxDQUdqREcsUUFBUyxDQUFDLEdBT1gsT0FIQUUsRUFBb0JMLEdBQVVJLEVBQVFBLEVBQU9ELFFBQVNKLEdBRy9DSyxFQUFPRCxPQUNmLENBR0FKLEVBQW9CTyxFQUFJRCxFRnpCcEI1RixFQUFXLEdBQ2ZzRixFQUFvQlEsRUFBSSxDQUFDQyxFQUFRQyxFQUFVQyxFQUFJQyxLQUM5QyxJQUFHRixFQUFILENBTUEsSUFBSUcsRUFBZUMsSUFDbkIsSUFBU0MsRUFBSSxFQUFHQSxFQUFJckcsRUFBUzBDLE9BQVEyRCxJQUFLLENBR3pDLElBRkEsSUFBS0wsRUFBVUMsRUFBSUMsR0FBWWxHLEVBQVNxRyxHQUNwQ0MsR0FBWSxFQUNQQyxFQUFJLEVBQUdBLEVBQUlQLEVBQVN0RCxPQUFRNkQsTUFDcEIsRUFBWEwsR0FBc0JDLEdBQWdCRCxJQUFhTSxPQUFPQyxLQUFLbkIsRUFBb0JRLEdBQUdZLE9BQU9DLEdBQVNyQixFQUFvQlEsRUFBRWEsR0FBS1gsRUFBU08sTUFDOUlQLEVBQVNZLE9BQU9MLElBQUssSUFFckJELEdBQVksRUFDVEosRUFBV0MsSUFBY0EsRUFBZUQsSUFHN0MsR0FBR0ksRUFBVyxDQUNidEcsRUFBUzRHLE9BQU9QLElBQUssR0FDckIsSUFBSVEsRUFBSVosU0FDRVIsSUFBTm9CLElBQWlCZCxFQUFTYyxFQUMvQixDQUNELENBQ0EsT0FBT2QsQ0FuQlAsQ0FKQ0csRUFBV0EsR0FBWSxFQUN2QixJQUFJLElBQUlHLEVBQUlyRyxFQUFTMEMsT0FBUTJELEVBQUksR0FBS3JHLEVBQVNxRyxFQUFJLEdBQUcsR0FBS0gsRUFBVUcsSUFBS3JHLEVBQVNxRyxHQUFLckcsRUFBU3FHLEVBQUksR0FDckdyRyxFQUFTcUcsR0FBSyxDQUFDTCxFQUFVQyxFQUFJQyxFQXFCakIsRUd6QmRaLEVBQW9Cd0IsRUFBSSxDQUFDcEIsRUFBU3FCLEtBQ2pDLElBQUksSUFBSUosS0FBT0ksRUFDWHpCLEVBQW9CMEIsRUFBRUQsRUFBWUosS0FBU3JCLEVBQW9CMEIsRUFBRXRCLEVBQVNpQixJQUM1RUgsT0FBT1MsZUFBZXZCLEVBQVNpQixFQUFLLENBQUVPLFlBQVksRUFBTXBDLElBQUtpQyxFQUFXSixJQUUxRSxFQ05EckIsRUFBb0IwQixFQUFJLENBQUNHLEVBQUtDLElBQVVaLE9BQU9hLFVBQVVDLGVBQWVDLEtBQUtKLEVBQUtDLEcsTUNLbEYsSUFBSUksRUFBa0IsQ0FDckIsSUFBSyxHQWFObEMsRUFBb0JRLEVBQUVTLEVBQUtrQixHQUEwQyxJQUE3QkQsRUFBZ0JDLEdBR3hELElBQUlDLEVBQXVCLENBQUNDLEVBQTRCQyxLQUN2RCxJQUdJckMsRUFBVWtDLEdBSFR6QixFQUFVNkIsRUFBYUMsR0FBV0YsRUFHaEJ2QixFQUFJLEVBQzNCLEdBQUdMLEVBQVMrQixNQUFNQyxHQUFnQyxJQUF4QlIsRUFBZ0JRLEtBQWEsQ0FDdEQsSUFBSXpDLEtBQVlzQyxFQUNadkMsRUFBb0IwQixFQUFFYSxFQUFhdEMsS0FDckNELEVBQW9CTyxFQUFFTixHQUFZc0MsRUFBWXRDLElBR2hELEdBQUd1QyxFQUFTLElBQUkvQixFQUFTK0IsRUFBUXhDLEVBQ2xDLENBRUEsSUFER3FDLEdBQTRCQSxFQUEyQkMsR0FDckR2QixFQUFJTCxFQUFTdEQsT0FBUTJELElBQ3pCb0IsRUFBVXpCLEVBQVNLLEdBQ2hCZixFQUFvQjBCLEVBQUVRLEVBQWlCQyxJQUFZRCxFQUFnQkMsSUFDckVELEVBQWdCQyxHQUFTLEtBRTFCRCxFQUFnQkMsR0FBVyxFQUU1QixPQUFPbkMsRUFBb0JRLEVBQUVDLEVBQU8sRUFHakNrQyxFQUFxQkMsS0FBaUMsMkJBQUlBLEtBQWlDLDRCQUFLLEdBQ3BHRCxFQUFtQkUsUUFBUVQsRUFBcUJVLEtBQUssS0FBTSxJQUMzREgsRUFBbUIxRixLQUFPbUYsRUFBcUJVLEtBQUssS0FBTUgsRUFBbUIxRixLQUFLNkYsS0FBS0gsRyxLQzdDdkYsSUFBSUksRUFBc0IvQyxFQUFvQlEsT0FBRUwsRUFBVyxDQUFDLE1BQU0sSUFBT0gsRUFBb0IsT0FDN0YrQyxFQUFzQi9DLEVBQW9CUSxFQUFFdUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NxdWFyZS1mcmFjdGFsL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vc3F1YXJlLWZyYWN0YWwvLi9mcmFjdGFsLnRzIiwid2VicGFjazovL3NxdWFyZS1mcmFjdGFsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NxdWFyZS1mcmFjdGFsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcXVhcmUtZnJhY3RhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NxdWFyZS1mcmFjdGFsL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3NxdWFyZS1mcmFjdGFsL3dlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCJpbXBvcnQgeyBTVkcsIFBvaW50LCBQb2ludEFycmF5IH0gZnJvbSAnQHN2Z2RvdGpzL3N2Zy5qcydcblxuLy8gVE9ETzpcbi8vIC0gY2hhbmdlIHdlaWdodHNcbi8vIC0gY2hhbmdlIG1pZHBvaW50IGZyYWN0aW9uXG5cbi8vIHNxdWFyZSBmcmFjdGFsOlxuLy8gLSBzdGFydCB3aXRoIGEgc3F1YXJlXG4vLyAtIGVhY2ggc2hhcGUgY2FuIGJlOlxuLy8gICArIHNxdWFyZVxuLy8gICAgICogc3F1YXJlIGluc2lkZVxuLy8gICAgICogc3BsaXQgaW50byB0d28gdHJpYW5nbGVzIHR3byB3YXlzXG4vLyAgICAgKiBsZWF2ZSBlbXB0eVxuLy8gICArIHRyaWFuZ2xlXG4vLyAgICAgKiB0cmlhbmdsZSBpbnNpZGVcbi8vICAgICAqIHNwbGl0IGludG8gXCJUXCI6IHRyaWFuZ2xlIGFuZCB0d28gfnJob21idXMnXG4vLyAgICsgcmhvbWJ1c1xuLy8gICAgICogbGVhdmUgZW1wdHlcbi8vXG4vLyBzbyB3ZSBlaXRoZXI6XG4vLyAgIDEuIHRha2UgdGhlIGlucHV0IChOKSBhcyBhIG1peGVkLWJhc2Ugc2VlZFxuLy8gICAyLiBwaWNrIHJhbmRvbWx5IGVhY2ggc3RlcFxuLy9cbi8vIHR3byBsaXN0czpcbi8vIC0gbm9uLWRvbmUgcXVldWUgKHRyaWFuZ2xlIHwgc3F1YXJlKVxuLy8gLSBkb25lIHF1ZXVlICh0cmlhbmdsZSB8IHNxdWFyZSB8IH5yaG9tYnVzKVxuLy9cbi8vIGZpbmFsbHksIHJlbmRlciB0cmlhbmdsZXxzcXVhcmV8cmhvbWJ1cyAtPiBTVkdcblxuYWJzdHJhY3QgY2xhc3MgU2hhcGUge1xuICBhYnN0cmFjdCBtaWRwb2ludF93ZWlnaHQ6IG51bWJlciB8IG51bGw7XG5cbiAgbWlkcG9pbnQoeHM6IFBvaW50LCB5czogUG9pbnQpOiBQb2ludCB7XG4gICAgaWYgKHRoaXMubWlkcG9pbnRfd2VpZ2h0KSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KHtcbiAgICAgICAgeDogdGhpcy5taWRwb2ludF93ZWlnaHQgKiB4cy54ICsgKDEgLSB0aGlzLm1pZHBvaW50X3dlaWdodCkgKiB5cy54LFxuICAgICAgICB5OiB0aGlzLm1pZHBvaW50X3dlaWdodCAqIHhzLnkgKyAoMSAtIHRoaXMubWlkcG9pbnRfd2VpZ2h0KSAqIHlzLnksXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KHtcbiAgICAgICAgeDogKHhzLnggKyB5cy54KSAvIDIsXG4gICAgICAgIHk6ICh4cy55ICsgeXMueSkgLyAyLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhYnN0cmFjdCByZW5kZXIoKTogUG9pbnRbXTtcblxuICBhYnN0cmFjdCByb3RhdGUoKTogdm9pZDtcblxuICBhYnN0cmFjdCBzdGVwX29wdGlvbnModW5pZm9ybV93ZWlnaHRzOiBib29sZWFuKTogbnVtYmVyO1xuXG4gIGFic3RyYWN0IG5leHRfc3RlcChpbmRleDogbnVtYmVyLCB1bmlmb3JtX3dlaWdodHM6IGJvb2xlYW4pOiBTaGFwZVtdO1xuXG4gIHJlbmRlcl9wb2ludGFycmF5KCk6IFBvaW50QXJyYXkge1xuICAgIHJldHVybiBuZXcgUG9pbnRBcnJheSh0aGlzLnJlbmRlcigpLmZsYXRNYXAoKHB0KSA9PiB7cmV0dXJuIFtwdC54LCBwdC55XX0pKTtcbiAgfVxuXG4gIC8vIHJldHVybnMgdGhlIG51bWJlciBvZiBzdWItc2hhcGVzIGRyYXduXG4gIGZyYWN0YWxpemUoXG4gICAgbWF4X2RlcHRoOiBudW1iZXIsXG4gICAgcGl4ZWxfc2l6ZTogbnVtYmVyLFxuICAgIHN0cm9rZV93aWR0aDogbnVtYmVyLFxuICAgIHVuaWZvcm1fd2VpZ2h0czogYm9vbGVhbixcbiAgICBtaWRwb2ludF93ZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgICAvLyBib3JkZXJfcGl4ZWxzOiBudW1iZXIsIC8vIFRPRE8gP1xuICApOiBudW1iZXIge1xuICAgIHZhciBkcmF3ID0gU1ZHKCkuYWRkVG8oJ2JvZHknKS5zaXplKHBpeGVsX3NpemUsIHBpeGVsX3NpemUpO1xuICAgIGRyYXcucG9seWxpbmUodGhpcy5yZW5kZXJfcG9pbnRhcnJheSgpKS5maWxsKCdub25lJykuc3Ryb2tlKHsgY29sb3I6ICcjMDAwJywgd2lkdGg6IHN0cm9rZV93aWR0aCB9KTtcblxuICAgIC8vIFtzaGFwZSwgZGVwdGhdXG4gICAgdmFyIG51bV9zdWJfc2hhcGVzID0gMDtcbiAgICB2YXIgdW5maW5pc2hlZF9zaGFwZXM6IFtTaGFwZSwgbnVtYmVyXVtdID0gW1t0aGlzLCAwXV07XG4gICAgd2hpbGUgKHVuZmluaXNoZWRfc2hhcGVzLmxlbmd0aCkge1xuICAgICAgbGV0IFtjdXJyZW50X3NoYXBlLCBjdXJyZW50X2RlcHRoXSA9IHVuZmluaXNoZWRfc2hhcGVzLnBvcCgpO1xuICAgICAgbnVtX3N1Yl9zaGFwZXMrKztcbiAgICAgIGRyYXcucG9seWxpbmUoY3VycmVudF9zaGFwZS5yZW5kZXJfcG9pbnRhcnJheSgpKS5maWxsKCdub25lJykuc3Ryb2tlKHsgY29sb3I6ICcjMDAwJywgd2lkdGg6IHN0cm9rZV93aWR0aCB9KTtcblxuICAgICAgaWYgKGN1cnJlbnRfZGVwdGggPD0gbWF4X2RlcHRoKSB7XG4gICAgICAgIGxldCBuZXh0X3JhbmRvbV9udW0gPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50MzJBcnJheSgxKSlbMF0vMioqMzI7XG4gICAgICAgIGxldCBtYXggPSBjdXJyZW50X3NoYXBlLnN0ZXBfb3B0aW9ucyh1bmlmb3JtX3dlaWdodHMpO1xuICAgICAgICBsZXQgbmV4dF9zdGVwX2luZGV4ID0gTWF0aC5mbG9vcihuZXh0X3JhbmRvbV9udW0gKiBtYXgpO1xuICAgICAgICB1bmZpbmlzaGVkX3NoYXBlcy5wdXNoKC4uLmN1cnJlbnRfc2hhcGUubmV4dF9zdGVwKG5leHRfc3RlcF9pbmRleCwgdW5pZm9ybV93ZWlnaHRzKS5tYXAoKHgpID0+IHtcbiAgICAgICAgICBsZXQgcmV0OiBbU2hhcGUsIG51bWJlcl0gPSBbeCwgY3VycmVudF9kZXB0aCArIDFdO1xuICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudW1fc3ViX3NoYXBlc1xuICB9XG5cbn1cblxuXG5jbGFzcyBUcmlhbmdsZSBleHRlbmRzIFNoYXBlIHtcbiAgbWlkcG9pbnRfd2VpZ2h0OiBudW1iZXIgfCBudWxsO1xuICBwdDA6IFBvaW50O1xuICBwdDE6IFBvaW50O1xuICBwdDI6IFBvaW50O1xuXG4gIGNvbnN0cnVjdG9yKHB0MDogUG9pbnQsIHB0MTogUG9pbnQsIHB0MjogUG9pbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucHQwID0gcHQwO1xuICAgIHRoaXMucHQxID0gcHQxO1xuICAgIHRoaXMucHQyID0gcHQyO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBbdGhpcy5wdDAsIHRoaXMucHQxLCB0aGlzLnB0Ml1cbiAgfVxuXG4gIHJvdGF0ZSgpIHtcbiAgICBsZXQgcG9pbnRzID0gW3RoaXMucHQwLCB0aGlzLnB0MSwgdGhpcy5wdDJdO1xuICAgIFt0aGlzLnB0MSwgdGhpcy5wdDIsIHRoaXMucHQwXSA9IHBvaW50cztcbiAgfVxuXG4gIC8vIHAwXG4gIC8vIHxcXFxuICAvLyB8IFxcXG4gIC8vIHwgIFxcXG4gIC8vIHwgICBcXFxuICAvLyB8IEEgIFxcXG4gIC8vIHwgICAgIFxcXG4gIC8vIHw8cDIwX19cXCA8cDAxXG4gIC8vIHwgXFwgTSAgL1xcXG4gIC8vIHwgIFxcICAvICBcXFxuICAvLyB8IEMgXFwvIEIgIFxcXG4gIC8vIC0tLS0tLS0tLS0tIHAxXG4gIC8vIHAyICAgcDEyXG4gIHRyaXNlY3QoKTogW1RyaWFuZ2xlLCBUcmlhbmdsZSwgVHJpYW5nbGUsIFRyaWFuZ2xlXSB7XG4gICAgbGV0IHB0MCA9IHRoaXMucHQwO1xuICAgIGxldCBwdDEgPSB0aGlzLnB0MTtcbiAgICBsZXQgcHQyID0gdGhpcy5wdDI7XG5cbiAgICBsZXQgcHQwMSA9IHRoaXMubWlkcG9pbnQocHQwLCBwdDEpO1xuICAgIGxldCBwdDEyID0gdGhpcy5taWRwb2ludChwdDEsIHB0Mik7XG4gICAgbGV0IHB0MjAgPSB0aGlzLm1pZHBvaW50KHB0MiwgcHQwKTtcblxuICAgIGxldCB0cmlhbmdsZV9BID0gbmV3IFRyaWFuZ2xlKHB0MCwgcHQwMSwgcHQyMCk7XG4gICAgbGV0IHRyaWFuZ2xlX0IgPSBuZXcgVHJpYW5nbGUocHQwMSwgcHQxLCBwdDEyKTtcbiAgICBsZXQgdHJpYW5nbGVfQyA9IG5ldyBUcmlhbmdsZShwdDIwLCBwdDEyLCBwdDIpO1xuICAgIGxldCB0cmlhbmdsZV9NID0gbmV3IFRyaWFuZ2xlKHB0MDEsIHB0MTIsIHB0MjApO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHRyaWFuZ2xlX0EsXG4gICAgICB0cmlhbmdsZV9CLFxuICAgICAgdHJpYW5nbGVfQyxcbiAgICAgIHRyaWFuZ2xlX01dXG4gIH1cblxuICAvLyAgICAgcDBcbiAgLy8gICAgIHxcXFxuICAvLyAgICAgfCBcXFxuICAvLyAgICAgfCAgXFxcbiAgLy8gICAgIHwgICBcXFxuICAvLyAgICAgfCBBICBcXFxuICAvLyAgICAgfCAgICAgXFxcbiAgLy8gcDIwPnxfcDIwMV9cXCA8cDAxXG4gIC8vICAgICB8ICAgfCAgIFxcXG4gIC8vICAgICB8IEMgfCBCICBcXFxuICAvLyAgICAgfCAgIHwgICAgIFxcXG4gIC8vICAgICAtLS0tLS0tLS0tLSBwMVxuICAvLyBwMiAgIHAxMlxuICB0X3NwbGl0KCk6IFtUcmlhbmdsZSwgUXVhZHJpbGF0ZXJhbCwgUXVhZHJpbGF0ZXJhbF0ge1xuICAgIGxldCBwdDAgPSB0aGlzLnB0MDtcbiAgICBsZXQgcHQxID0gdGhpcy5wdDE7XG4gICAgbGV0IHB0MiA9IHRoaXMucHQyO1xuXG4gICAgbGV0IHB0MDEgPSB0aGlzLm1pZHBvaW50KHB0MCwgcHQxKTtcbiAgICBsZXQgcHQxMiA9IHRoaXMubWlkcG9pbnQocHQxLCBwdDIpO1xuICAgIGxldCBwdDIwID0gdGhpcy5taWRwb2ludChwdDIsIHB0MCk7XG4gICAgbGV0IHB0MjAxID0gdGhpcy5taWRwb2ludChwdDAxLCBwdDIwKTtcblxuICAgIGxldCB0cmlhbmdsZV9BID0gbmV3IFRyaWFuZ2xlKHB0MCwgcHQwMSwgcHQyMCk7XG4gICAgbGV0IHF1YWRyaWxhdGVyYWxfQiA9IG5ldyBRdWFkcmlsYXRlcmFsKHB0MjAxLCBwdDAxLCBwdDEsIHB0MTIpO1xuICAgIGxldCBxdWFkcmlsYXRlcmFsX0MgPSBuZXcgUXVhZHJpbGF0ZXJhbChwdDIwLCBwdDIwMSwgcHQxMiwgcHQyKTtcblxuICAgIHJldHVybiBbXG4gICAgICB0cmlhbmdsZV9BLFxuICAgICAgcXVhZHJpbGF0ZXJhbF9CLFxuICAgICAgcXVhZHJpbGF0ZXJhbF9DXVxuICB9XG5cbiAgc3RlcF9vcHRpb25zKHVuaWZvcm1fd2VpZ2h0czogYm9vbGVhbikge1xuICAgIGlmICh1bmlmb3JtX3dlaWdodHMpIHtcbiAgICAgIHJldHVybiA1XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA5XG4gICAgfVxuICB9XG5cbiAgbmV4dF9zdGVwKGluZGV4OiBudW1iZXIsIHVuaWZvcm1fd2VpZ2h0czogYm9vbGVhbik6IFNoYXBlW10ge1xuICAgIGlmICh1bmlmb3JtX3dlaWdodHMpIHtcbiAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiB0aGlzLnRyaXNlY3QoKVxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcmV0dXJuIHRoaXMudF9zcGxpdCgpXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLnJvdGF0ZSgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLnRfc3BsaXQoKVxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5yb3RhdGUoKTtcbiAgICAgICAgICB0aGlzLnJvdGF0ZSgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLnRfc3BsaXQoKVxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduZXh0X3N0ZXA6IGluZGV4IG91dCBvZiByYW5nZScpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gdGhpcy50cmlzZWN0KClcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiB0aGlzLnRfc3BsaXQoKVxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5yb3RhdGUoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy50X3NwbGl0KClcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHRoaXMucm90YXRlKCk7XG4gICAgICAgICAgdGhpcy5yb3RhdGUoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy50X3NwbGl0KClcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICBjYXNlIDc6XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25leHRfc3RlcDogaW5kZXggb3V0IG9mIHJhbmdlJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5cbmNsYXNzIFF1YWRyaWxhdGVyYWwgZXh0ZW5kcyBTaGFwZSB7XG4gIG1pZHBvaW50X3dlaWdodDogbnVtYmVyIHwgbnVsbDtcbiAgcHQwOiBQb2ludDtcbiAgcHQxOiBQb2ludDtcbiAgcHQyOiBQb2ludDtcbiAgcHQzOiBQb2ludDtcblxuICBjb25zdHJ1Y3RvcihwdDA6IFBvaW50LCBwdDE6IFBvaW50LCBwdDI6IFBvaW50LCBwdDM6IFBvaW50KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnB0MCA9IHB0MDtcbiAgICB0aGlzLnB0MSA9IHB0MTtcbiAgICB0aGlzLnB0MiA9IHB0MjtcbiAgICB0aGlzLnB0MyA9IHB0MztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gW3RoaXMucHQwLCB0aGlzLnB0MSwgdGhpcy5wdDIsIHRoaXMucHQzXVxuICB9XG5cbiAgcm90YXRlKCkge1xuICAgIGxldCBwb2ludHMgPSBbdGhpcy5wdDAsIHRoaXMucHQxLCB0aGlzLnB0MiwgdGhpcy5wdDNdO1xuICAgIFt0aGlzLnB0MSwgdGhpcy5wdDIsIHRoaXMucHQzLCB0aGlzLnB0MF0gPSBwb2ludHM7XG4gIH1cblxuICBzdGVwX29wdGlvbnModW5pZm9ybV93ZWlnaHRzOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIG5leHRfc3RlcChpbmRleDogbnVtYmVyLCB1bmlmb3JtX3dlaWdodHM6IGJvb2xlYW4pOiBTaGFwZVtdIHtcbiAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduZXh0X3N0ZXA6IGluZGV4IG91dCBvZiByYW5nZScpXG4gICAgfVxuICB9XG5cbn1cblxuXG5jbGFzcyBTcXVhcmUgZXh0ZW5kcyBRdWFkcmlsYXRlcmFsIHtcblxuICAvLyAgICAgcDAgICAgIHAwMSAgICAgIHAxXG4gIC8vICAgICBfX19fX19fX19fX19fX19fX1xuICAvLyAgICAgfCAgICAgIC8gXFwgICAgICB8XG4gIC8vICAgICB8IEEgICAvICAgXFwgIEIgIHxcbiAgLy8gICAgIHwgICAgLyAgICAgXFwgICAgfFxuICAvLyAgICAgfCAgIC8gICAgICAgXFwgICB8XG4gIC8vICAgICB8ICAvICAgICAgICAgXFwgIHxcbiAgLy8gICAgIHwgLyAgICAgICAgICAgXFwgfFxuICAvLyBwMzAgfC8gICAgICBNICAgICAgXFx8IHAxMlxuICAvLyAgICAgfFxcICAgICAgICAgICAgIC98XG4gIC8vICAgICB8IFxcICAgICAgICAgICAvIHxcbiAgLy8gICAgIHwgIFxcICAgICAgICAgLyAgfFxuICAvLyAgICAgfCAgIFxcICAgICAgIC8gICB8XG4gIC8vICAgICB8ICAgIFxcICAgICAvICAgIHxcbiAgLy8gICAgIHwgRCAgIFxcICAgLyAgQyAgfFxuICAvLyAgICAgfCAgICAgIFxcIC8gICAgICB8XG4gIC8vICAgICB8LS0tLS0tLS0tLS0tLS0tfCBwMlxuICAvLyAgICAgcDMgICAgIHAyM1xuICBxdWFkc2VjdCgpOiBbVHJpYW5nbGUsIFRyaWFuZ2xlLCBUcmlhbmdsZSwgVHJpYW5nbGUsIFNxdWFyZV0ge1xuICAgIGxldCBwdDAgPSB0aGlzLnB0MDtcbiAgICBsZXQgcHQxID0gdGhpcy5wdDE7XG4gICAgbGV0IHB0MiA9IHRoaXMucHQyO1xuICAgIGxldCBwdDMgPSB0aGlzLnB0MztcblxuICAgIGxldCBwdDAxID0gdGhpcy5taWRwb2ludCh0aGlzLnB0MCwgdGhpcy5wdDEpO1xuICAgIGxldCBwdDEyID0gdGhpcy5taWRwb2ludCh0aGlzLnB0MSwgdGhpcy5wdDIpO1xuICAgIGxldCBwdDIzID0gdGhpcy5taWRwb2ludCh0aGlzLnB0MiwgdGhpcy5wdDMpO1xuICAgIGxldCBwdDMwID0gdGhpcy5taWRwb2ludCh0aGlzLnB0MywgdGhpcy5wdDApO1xuXG4gICAgbGV0IHRyaWFuZ2xlX0EgPSBuZXcgVHJpYW5nbGUocHQwLCBwdDAxLCBwdDMwKTtcbiAgICBsZXQgdHJpYW5nbGVfQiA9IG5ldyBUcmlhbmdsZShwdDAxLCBwdDEsIHB0MTIpO1xuICAgIGxldCB0cmlhbmdsZV9DID0gbmV3IFRyaWFuZ2xlKHB0MTIsIHB0MiwgcHQyMyk7XG4gICAgbGV0IHRyaWFuZ2xlX0QgPSBuZXcgVHJpYW5nbGUocHQzMCwgcHQyMywgcHQzKTtcbiAgICBsZXQgc3F1YXJlX00gPSBuZXcgU3F1YXJlKHB0MDEsIHB0MTIsIHB0MjMsIHB0MzApO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHRyaWFuZ2xlX0EsXG4gICAgICB0cmlhbmdsZV9CLFxuICAgICAgdHJpYW5nbGVfQyxcbiAgICAgIHRyaWFuZ2xlX0QsXG4gICAgICBzcXVhcmVfTV1cbiAgfVxuXG4gIC8vIHAwICAgICAgICAgICAgICBwMVxuICAvLyBfX19fX19fX19fX19fX19fX1xuICAvLyB8XFwgICAgICAgICAgICAgIHxcbiAgLy8gfCBcXCAgICAgICAgICAgICB8XG4gIC8vIHwgIFxcICAgICAgICAgICAgfFxuICAvLyB8ICAgXFwgICAgICBBICAgIHxcbiAgLy8gfCAgICBcXCAgICAgICAgICB8XG4gIC8vIHwgICAgIFxcICAgICAgICAgfFxuICAvLyB8ICAgICAgXFwgICAgICAgIHxcbiAgLy8gfCAgICAgICBcXCAgICAgICB8XG4gIC8vIHwgICAgICAgIFxcICAgICAgfFxuICAvLyB8ICAgICAgICAgXFwgICAgIHxcbiAgLy8gfCAgICAgICAgICBcXCAgICB8XG4gIC8vIHwgICBCICAgICAgIFxcICAgfFxuICAvLyB8ICAgICAgICAgICAgXFwgIHxcbiAgLy8gfCAgICAgICAgICAgICBcXCB8XG4gIC8vIHwtLS0tLS0tLS0tLS0tLS18IHAyXG4gIC8vIHAzXG4gIGJpc2VjdCgpOiBbVHJpYW5nbGUsIFRyaWFuZ2xlXSB7XG4gICAgbGV0IHB0MCA9IHRoaXMucHQwO1xuICAgIGxldCBwdDEgPSB0aGlzLnB0MTtcbiAgICBsZXQgcHQyID0gdGhpcy5wdDI7XG4gICAgbGV0IHB0MyA9IHRoaXMucHQzO1xuXG4gICAgbGV0IHRyaWFuZ2xlX0EgPSBuZXcgVHJpYW5nbGUocHQwLCBwdDEsIHB0Mik7XG4gICAgbGV0IHRyaWFuZ2xlX0IgPSBuZXcgVHJpYW5nbGUocHQwLCBwdDIsIHB0Myk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgdHJpYW5nbGVfQSxcbiAgICAgIHRyaWFuZ2xlX0JdXG4gIH1cblxuICBzdGVwX29wdGlvbnModW5pZm9ybV93ZWlnaHRzOiBib29sZWFuKSB7XG4gICAgaWYgKHVuaWZvcm1fd2VpZ2h0cykge1xuICAgICAgcmV0dXJuIDRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDZcbiAgICB9XG4gIH1cblxuICBuZXh0X3N0ZXAoaW5kZXg6IG51bWJlciwgdW5pZm9ybV93ZWlnaHRzOiBib29sZWFuKTogU2hhcGVbXSB7XG4gICAgaWYgKHVuaWZvcm1fd2VpZ2h0cykge1xuICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucXVhZHNlY3QoKVxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmlzZWN0KClcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMucm90YXRlKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmlzZWN0KClcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbmV4dF9zdGVwOiBpbmRleCBvdXQgb2YgcmFuZ2UnKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHJldHVybiB0aGlzLnF1YWRzZWN0KClcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiB0aGlzLmJpc2VjdCgpXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0aGlzLnJvdGF0ZSgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLmJpc2VjdCgpXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbmV4dF9zdGVwOiBpbmRleCBvdXQgb2YgcmFuZ2UnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cblxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcbiAgbGV0IHBpeGVsX3NpemUgPSBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQsIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgY29uc29sZS5sb2coJ3BpeGVsIHNpemU6JywgcGl4ZWxfc2l6ZSk7XG5cbiAgY29uc3QgcHQwID0gbmV3IFBvaW50KHt4OiAwLCB5OiBwaXhlbF9zaXplfSk7XG4gIGNvbnN0IHB0MSA9IG5ldyBQb2ludCh7eDogcGl4ZWxfc2l6ZSwgeTogcGl4ZWxfc2l6ZX0pO1xuICBjb25zdCBwdDIgPSBuZXcgUG9pbnQoe3g6IHBpeGVsX3NpemUsIHk6IDB9KTtcbiAgY29uc3QgcHQzID0gbmV3IFBvaW50KHt4OiAwLCB5OiAwfSk7XG4gIGNvbnN0IGZyYWN0YWxfc2VlZCA9IG5ldyBTcXVhcmUocHQwLCBwdDEsIHB0MiwgcHQzKTtcblxuICBjb25zdCB1cmxfcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgdmFyIG1heF9kZXB0aCA9IE51bWJlcih1cmxfcGFyYW1zLmdldCgnZGVwdGgnKSk7XG4gIGlmICghbWF4X2RlcHRoKSB7XG4gICAgbWF4X2RlcHRoID0gM1xuICB9XG4gIHZhciBzdHJva2Vfd2lkdGggPSBOdW1iZXIodXJsX3BhcmFtcy5nZXQoJ3N0cm9rZScpKTtcbiAgaWYgKCFzdHJva2Vfd2lkdGgpIHtcbiAgICBzdHJva2Vfd2lkdGggPSAzXG4gIH1cbiAgdmFyIG1pZHBvaW50X3dlaWdodCA9IE51bWJlcih1cmxfcGFyYW1zLmdldCgnbWlkcG9pbnQnKSk7XG4gIGNvbnN0IHVuaWZvcm1fd2VpZ2h0c19wYXJhbSA9IHVybF9wYXJhbXMuZ2V0KCd1bmlmb3JtJyk7XG4gIGNvbnN0IHVuaWZvcm1fd2VpZ2h0cyA9ICF1bmlmb3JtX3dlaWdodHNfcGFyYW0gfHwgKHVuaWZvcm1fd2VpZ2h0c19wYXJhbSA9PSAndCcpO1xuXG4gIHZhciBudW1fc2hhcGVzID0gZnJhY3RhbF9zZWVkLmZyYWN0YWxpemUobWF4X2RlcHRoLCBwaXhlbF9zaXplLCBzdHJva2Vfd2lkdGgsIHVuaWZvcm1fd2VpZ2h0cywgbWlkcG9pbnRfd2VpZ2h0KTtcbiAgY29uc29sZS5sb2coJ251bV9zaGFwZXMnLCBudW1fc2hhcGVzKTtcbiAgd2hpbGUgKG51bV9zaGFwZXMgPCAyKSB7XG4gICAgLy8gcmVtb3ZlIHByZXZpb3VzIFNWR1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5jaGlsZHJlblswXSk7XG5cbiAgICAvLyByZS1nZW5lcmF0ZVxuICAgIG51bV9zaGFwZXMgPSBmcmFjdGFsX3NlZWQuZnJhY3RhbGl6ZShtYXhfZGVwdGgsIHBpeGVsX3NpemUsIHN0cm9rZV93aWR0aCwgdW5pZm9ybV93ZWlnaHRzLCBtaWRwb2ludF93ZWlnaHQpO1xuICAgIGNvbnNvbGUubG9nKCdudW1fc2hhcGVzJywgbnVtX3NoYXBlcyk7XG4gIH1cblxufVxuXG4vLyBydW4gbWFpbiBvbiBsb2FkIChhZnRlciA8Ym9keT4gZXhpc3RzLi4pXG53aW5kb3cub25sb2FkID0gbWFpbjtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDE3OTogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3F1YXJlX2ZyYWN0YWxcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3F1YXJlX2ZyYWN0YWxcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFs1MDBdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg0MTcpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwibmFtZXMiOlsiZGVmZXJyZWQiLCJtaWRwb2ludCIsInhzIiwieXMiLCJ0aGlzIiwibWlkcG9pbnRfd2VpZ2h0IiwieCIsInkiLCJyZW5kZXJfcG9pbnRhcnJheSIsInJlbmRlciIsImZsYXRNYXAiLCJwdCIsImZyYWN0YWxpemUiLCJtYXhfZGVwdGgiLCJwaXhlbF9zaXplIiwic3Ryb2tlX3dpZHRoIiwidW5pZm9ybV93ZWlnaHRzIiwiZHJhdyIsImFkZFRvIiwic2l6ZSIsInBvbHlsaW5lIiwiZmlsbCIsInN0cm9rZSIsImNvbG9yIiwid2lkdGgiLCJudW1fc3ViX3NoYXBlcyIsInVuZmluaXNoZWRfc2hhcGVzIiwicG9wIiwiY3VycmVudF9zaGFwZSIsImN1cnJlbnRfZGVwdGgiLCJuZXh0X3JhbmRvbV9udW0iLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50MzJBcnJheSIsIm1heCIsInN0ZXBfb3B0aW9ucyIsIm5leHRfc3RlcF9pbmRleCIsIk1hdGgiLCJmbG9vciIsInB1c2giLCJuZXh0X3N0ZXAiLCJtYXAiLCJsZW5ndGgiLCJwdDAiLCJwdDEiLCJwdDIiLCJyb3RhdGUiLCJwb2ludHMiLCJ0cmlzZWN0IiwicHQwMSIsInB0MTIiLCJwdDIwIiwiVHJpYW5nbGUiLCJ0X3NwbGl0IiwicHQyMDEiLCJRdWFkcmlsYXRlcmFsIiwiaW5kZXgiLCJFcnJvciIsIlNoYXBlIiwicHQzIiwicXVhZHNlY3QiLCJwdDIzIiwicHQzMCIsIlNxdWFyZSIsImJpc2VjdCIsIndpbmRvdyIsIm9ubG9hZCIsIm1pbiIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJmcmFjdGFsX3NlZWQiLCJ1cmxfcGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJOdW1iZXIiLCJnZXQiLCJ1bmlmb3JtX3dlaWdodHNfcGFyYW0iLCJudW1fc2hhcGVzIiwiZG9jdW1lbnQiLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJjaGlsZHJlbiIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibSIsIk8iLCJyZXN1bHQiLCJjaHVua0lkcyIsImZuIiwicHJpb3JpdHkiLCJub3RGdWxmaWxsZWQiLCJJbmZpbml0eSIsImkiLCJmdWxmaWxsZWQiLCJqIiwiT2JqZWN0Iiwia2V5cyIsImV2ZXJ5Iiwia2V5Iiwic3BsaWNlIiwiciIsImQiLCJkZWZpbml0aW9uIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpbnN0YWxsZWRDaHVua3MiLCJjaHVua0lkIiwid2VicGFja0pzb25wQ2FsbGJhY2siLCJwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiIsImRhdGEiLCJtb3JlTW9kdWxlcyIsInJ1bnRpbWUiLCJzb21lIiwiaWQiLCJjaHVua0xvYWRpbmdHbG9iYWwiLCJzZWxmIiwiZm9yRWFjaCIsImJpbmQiLCJfX3dlYnBhY2tfZXhwb3J0c19fIl0sInNvdXJjZVJvb3QiOiIifQ==