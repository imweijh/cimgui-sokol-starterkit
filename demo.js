
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},f),ca=[],da="./this.program",k=(a,b)=>{throw b;},ea="object"===typeof window,l="function"===typeof importScripts,t="",fa,u,v,fs,w,ha;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)t=l?require("path").dirname(t)+"/":__dirname+"/",ha=function(){w||(fs=require("fs"),w=require("path"))},fa=function(a,b){ha();a=w.normalize(a);return fs.readFileSync(a,b?null:"utf8")},v=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},u=function(a,b,c){ha();a=w.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,
"/")),ca=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof x))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime||0<ia)throw process.exitCode=a,b;b instanceof x||y("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea||l)l?t=self.location.href:"undefined"!==typeof document&&document.currentScript&&(t=document.currentScript.src),
t=0!==t.indexOf("blob:")?t.substr(0,t.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var ja=f.print||console.log.bind(console),y=f.printErr||console.warn.bind(console);aa(f,ba);ba=null;f.arguments&&(ca=f.arguments);f.thisProgram&&(da=f.thisProgram);f.quit&&(k=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&A("no native wasm support detected");var ka,la=!1;
function ma(a,b,c){var d={string:function(n){var q=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;q=B(r);C(n,D,q,r)}return q},array:function(n){var q=B(n.length);na.set(n,q);return q}};a=f["_"+a];var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=oa()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&pa(h);return n}(b)}var qa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ra(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&qa)return qa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function E(a,b){return a?ra(D,a,b):""}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=B(b);C(a,na,c,b);return c}var na,D,ua,va,F,wa,G,H,xa,ya=[],za=[],Aa=[],Ba=[],Ca=[],ia=0;function Da(){var a=f.preRun.shift();ya.unshift(a)}var I=0,Ea=null,J=null;f.preloadedImages={};f.preloadedAudios={};
function A(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";y(a);la=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Fa(){return K.startsWith("data:application/octet-stream;base64,")}var K;K="demo.wasm";if(!Fa()){var Ga=K;K=f.locateFile?f.locateFile(Ga,t):t+Ga}function Ha(){var a=K;try{if(a==K&&z)return new Uint8Array(z);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}
function Ia(){if(!z&&(ea||l)){if("function"===typeof fetch&&!K.startsWith("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ha()});if(u)return new Promise(function(a,b){u(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ha()})}
function Ja(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.uc;"number"===typeof c?void 0===b.Tb?L(c)():L(c)(b.Tb):c(void 0===b.Tb?null:b.Tb)}}}function L(a){return xa.get(a)}var Ka=[null,[],[]],La={},Ma=0;function Na(){for(var a=N.length-1;0<=a;--a)Oa(a);N=[];Pa=[]}var Pa=[];function Qa(){if(Ma&&Ra.Ob)for(var a=0;a<Pa.length;++a){var b=Pa[a];Pa.splice(a,1);--a;b.Dc.apply(null,b.qc)}}var N=[];
function Oa(a){var b=N[a];b.target.removeEventListener(b.Ib,b.lc,b.Jb);N.splice(a,1)}function O(a){function b(d){++Ma;Ra=a;Qa();a.Lb(d);Qa();--Ma}if(a.Kb)a.lc=b,a.target.addEventListener(a.Ib,b,a.Jb),N.push(a),Sa||(Ba.push(Na),Sa=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Ib==a.Ib&&Oa(c--)}function Ta(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Sa,Ra,Ua,Va,Wa,Xa,Ya,Za,$a,ab=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){a=2<a?E(a):a;return ab[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function bb(a){return 0>ab.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function cb(a,b,c,d,e,h){Ua||(Ua=Q(256));a={target:P(a),Ib:h,Kb:d,Lb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ua;C(Ta(g.target),D,n+0,128);C(m,D,n+128,128);L(d)(e,n,b)&&g.preventDefault()},Jb:c};O(a)}
function db(a,b,c,d,e,h){Va||(Va=Q(176));a={target:P(a),Ob:!0,Ib:h,Kb:d,Lb:function(g){var m=Va;H[m>>3]=g.timeStamp;var n=m>>2;F[n+2]=g.location;F[n+3]=g.ctrlKey;F[n+4]=g.shiftKey;F[n+5]=g.altKey;F[n+6]=g.metaKey;F[n+7]=g.repeat;F[n+8]=g.charCode;F[n+9]=g.keyCode;F[n+10]=g.which;C(g.key||"",D,m+44,32);C(g.code||"",D,m+76,32);C(g.char||"",D,m+108,32);C(g.locale||"",D,m+140,32);L(d)(e,m,b)&&g.preventDefault()},Jb:c};O(a)}
function eb(a,b,c){H[a>>3]=b.timeStamp;a>>=2;F[a+2]=b.screenX;F[a+3]=b.screenY;F[a+4]=b.clientX;F[a+5]=b.clientY;F[a+6]=b.ctrlKey;F[a+7]=b.shiftKey;F[a+8]=b.altKey;F[a+9]=b.metaKey;ua[2*a+20]=b.button;ua[2*a+21]=b.buttons;F[a+11]=b.movementX;F[a+12]=b.movementY;c=bb(c);F[a+13]=b.clientX-c.left;F[a+14]=b.clientY-c.top}
function R(a,b,c,d,e,h){Wa||(Wa=Q(72));a=P(a);O({target:a,Ob:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ib:h,Kb:d,Lb:function(g){g=g||event;eb(Wa,g,a);L(d)(e,Wa,b)&&g.preventDefault()},Jb:c})}function fb(a,b,c,d,e){Xa||(Xa=Q(260));O({target:a,Ib:e,Kb:d,Lb:function(h){h=h||event;var g=Xa,m=document.pointerLockElement||document.Vb||document.Xb||document.Wb;F[g>>2]=!!m;var n=m&&m.id?m.id:"";C(Ta(m),D,g+4,128);C(n,D,g+132,128);L(d)(20,g,b)&&h.preventDefault()},Jb:c})}
function gb(a,b,c,d,e){O({target:a,Ib:e,Kb:d,Lb:function(h){h=h||event;L(d)(38,0,b)&&h.preventDefault()},Jb:c})}
function hb(a,b,c,d){Ya||(Ya=Q(36));a=P(a);O({target:a,Ib:"resize",Kb:d,Lb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Ya;F[g>>2]=e.detail;F[g+4>>2]=h.clientWidth;F[g+8>>2]=h.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;L(d)(10,g,b)&&e.preventDefault()}}},Jb:c})}
function ib(a,b,c,d,e,h){Za||(Za=Q(1696));a=P(a);O({target:a,Ob:"touchstart"==h||"touchend"==h,Ib:h,Kb:d,Lb:function(g){for(var m,n={},q=g.touches,r=0;r<q.length;++r)m=q[r],m.$b=m.ac=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.$b=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].ac=1;q=Za;H[q>>3]=g.timeStamp;var p=q>>2;F[p+3]=g.ctrlKey;F[p+4]=g.shiftKey;F[p+5]=g.altKey;F[p+6]=g.metaKey;p+=7;var M=bb(a),mb=0;for(r in n)if(m=
n[r],F[p]=m.identifier,F[p+1]=m.screenX,F[p+2]=m.screenY,F[p+3]=m.clientX,F[p+4]=m.clientY,F[p+5]=m.pageX,F[p+6]=m.pageY,F[p+7]=m.$b,F[p+8]=m.ac,F[p+9]=m.clientX-M.left,F[p+10]=m.clientY-M.top,p+=13,31<++mb)break;F[q+8>>2]=mb;L(d)(e,q,b)&&g.preventDefault()},Jb:c})}function jb(a,b,c,d,e,h){a={target:P(a),Ib:h,Kb:d,Lb:function(g){g=g||event;L(d)(e,0,b)&&g.preventDefault()},Jb:c};O(a)}
function kb(a,b,c,d){$a||($a=Q(104));O({target:a,Ob:!0,Ib:"wheel",Kb:d,Lb:function(e){e=e||event;var h=$a;eb(h,e,a);H[h+72>>3]=e.deltaX;H[h+80>>3]=e.deltaY;H[h+88>>3]=e.deltaZ;F[h+96>>2]=e.deltaMode;L(d)(9,h,b)&&e.preventDefault()},Jb:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function nb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function pb(a){a.yc=a.getExtension("WEBGL_multi_draw")}
var qb=1,rb=[],S=[],sb=[],tb=[],ub=[],T=[],vb=[],wb={};function U(a){xb||(xb=a)}function yb(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}function zb(a,b){a.Zb||(a.Zb=a.getContext,a.getContext=function(d,e){e=a.Zb(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?Ab(c,b):0}function Ab(a,b){var c=yb(vb),d={wc:c,attributes:b,version:b.oc,Sb:a};a.canvas&&(a.canvas.pc=d);vb[c]=d;("undefined"===typeof b.Yb||b.Yb)&&Bb(d);return c}
function Bb(a){a||(a=Cb);if(!a.nc){a.nc=!0;var b=a.Sb;lb(b);nb(b);ob(b);b.sc=b.getExtension("EXT_disjoint_timer_query");pb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var xb,Cb,Db=["default","low-power","high-performance"];function Eb(a,b,c,d){for(var e=0;e<a;e++){var h=V[c](),g=h&&yb(d);h?(h.name=g,d[g]=h):U(1282);F[b+4*e>>2]=g}}
function Fb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else U(1281)}function Gb(a){var b=sa(a)+1,c=Q(b);C(a,D,c,b);return c}
function Hb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function W(a){var b=V.kc;if(b){var c=b.Nb[a];"number"===typeof c&&(b.Nb[a]=c=V.getUniformLocation(b,b.ic[a]+(0<c?"["+c+"]":"")));return c}U(1282)}for(var X=[],Y=[],V,Ib=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Ib.subarray(0,Z+1);var Jb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Jb.subarray(0,Z+1);
var Ob={aa:function(){return 0},Ya:function(){return 0},_a:function(){},J:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ca:function(a,b,c){a=P(a);if(!a)return-4;a=bb(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},Va:function(a,b,c){D.copyWithin(a,b,b+c)},Ea:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Wa:function(){A("OOM")},I:function(a,b,c,d){cb(a,b,c,d,12,"blur");return 0},F:function(a,b,c){a=P(a);if(!a)return-4;a.width=
b;a.height=c;return 0},K:function(a,b,c,d){cb(a,b,c,d,13,"focus");return 0},T:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},R:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},S:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},Z:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},W:function(a,b,c,d){R(a,b,c,d,33,"mouseenter");return 0},V:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},X:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},Y:function(a,b,c,d){R(a,b,c,d,6,"mouseup");
return 0},M:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Vb||document.body.Xb||document.body.Wb))return-1;a=P(a);if(!a)return-4;fb(a,b,c,d,"pointerlockchange");fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");return 0},L:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Vb||document.body.Xb||document.body.Wb))return-1;a=P(a);if(!a)return-4;gb(a,b,c,d,"pointerlockerror");
gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},Sa:function(a,b,c,d){hb(a,b,c,d);return 0},N:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},O:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},P:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},Q:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},H:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},G:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");
return 0},U:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(kb(a,b,c,d),0):-1},ba:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Db[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],oc:F[b+8],xc:F[b+9],Yb:F[b+10],mc:F[b+11],zc:F[b+12],Ac:F[b+13]};a=P(a);return!a||b.mc?0:zb(a,b)},Ta:function(a,b){a=vb[a];b=E(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==
b&&lb(V);"OES_vertex_array_object"==b&&nb(V);"WEBGL_draw_buffers"==b&&ob(V);"WEBGL_multi_draw"==b&&pb(V);return!!a.Sb.getExtension(b)},rb:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},Za:function(a){Cb=vb[a];f.rc=V=Cb&&Cb.Sb;return!a||V?0:-5},_:function(){return 0},Xa:function(a,b,c,d){a=La.vc(a);b=La.tc(a,b,c);F[d>>2]=b;return 0},Ua:function(){},$:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var g=F[b>>2],m=F[b+4>>2];b+=8;for(var n=0;n<m;n++){var q=D[g+
n],r=Ka[a];0===q||10===q?((1===a?ja:y)(ra(r,0)),r.length=0):r.push(q)}e+=m}F[d>>2]=e;return 0},D:function(a){V.activeTexture(a)},t:function(a,b){V.attachShader(S[a],T[b])},f:function(a,b){V.bindBuffer(a,rb[b])},p:function(a,b){V.bindFramebuffer(a,sb[b])},wa:function(a,b){V.bindRenderbuffer(a,tb[b])},e:function(a,b){V.bindTexture(a,ub[b])},y:function(a,b,c,d){V.blendColor(a,b,c,d)},z:function(a,b){V.blendEquationSeparate(a,b)},A:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},ya:function(a,b,c,d){V.bufferData(a,
c?D.subarray(c,c+b):b,d)},u:function(a,b,c,d){V.bufferSubData(a,b,D.subarray(d,d+c))},da:function(a){V.clear(a)},ga:function(a,b,c,d){V.clearColor(a,b,c,d)},fa:function(a){V.clearDepth(a)},ea:function(a){V.clearStencil(a)},g:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},ka:function(a){V.compileShader(T[a])},ta:function(a,b,c,d,e,h,g,m){V.compressedTexImage2D(a,b,c,d,e,h,m?D.subarray(m,m+g):null)},ra:function(){var a=yb(S),b=V.createProgram();b.name=a;b.Rb=b.Pb=b.Qb=0;b.Ub=1;S[a]=b;return a},ma:function(a){var b=
yb(T);T[b]=V.createShader(a);return b},v:function(a){V.cullFace(a)},Ga:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=rb[d];e&&(V.deleteBuffer(e),e.name=0,rb[d]=null)}},m:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=sb[d];e&&(V.deleteFramebuffer(e),e.name=0,sb[d]=null)}},C:function(a){if(a){var b=S[a];b?(V.deleteProgram(b),b.name=0,S[a]=null):U(1281)}},E:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=tb[d];e&&(V.deleteRenderbuffer(e),e.name=0,tb[d]=null)}},i:function(a){if(a){var b=
T[a];b?(V.deleteShader(b),T[a]=null):U(1281)}},Fa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=ub[d];e&&(V.deleteTexture(e),e.name=0,ub[d]=null)}},l:function(a){V.depthFunc(a)},k:function(a){V.depthMask(!!a)},a:function(a){V.disable(a)},B:function(a){V.disableVertexAttribArray(a)},$a:function(a,b,c){V.drawArrays(a,b,c)},ab:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},bb:function(a,b,c,d){V.drawElements(a,b,c,d)},cb:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},c:function(a){V.enable(a)},
mb:function(a){V.enableVertexAttribArray(a)},w:function(a){V.frontFace(a)},Aa:function(a,b){Eb(a,b,"createBuffer",rb)},xa:function(a,b){Eb(a,b,"createRenderbuffer",tb)},ua:function(a,b){Eb(a,b,"createTexture",ub)},ha:function(a,b){return V.getAttribLocation(S[a],E(b))},b:function(a,b){Fb(a,b)},oa:function(a,b,c,d){a=V.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},s:function(a,b,c){if(c)if(a>=qb)U(1281);else if(a=S[a],35716==b)a=V.getProgramInfoLog(a),
null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b){if(!a.Rb)for(b=0;b<V.getProgramParameter(a,35718);++b)a.Rb=Math.max(a.Rb,V.getActiveUniform(a,b).name.length+1);F[c>>2]=a.Rb}else if(35722==b){if(!a.Pb)for(b=0;b<V.getProgramParameter(a,35721);++b)a.Pb=Math.max(a.Pb,V.getActiveAttrib(a,b).name.length+1);F[c>>2]=a.Pb}else if(35381==b){if(!a.Qb)for(b=0;b<V.getProgramParameter(a,35382);++b)a.Qb=Math.max(a.Qb,V.getActiveUniformBlockName(a,b).length+1);F[c>>2]=a.Qb}else F[c>>2]=V.getProgramParameter(a,
b);else U(1281)},ia:function(a,b,c,d){a=V.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},q:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(T[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=V.getShaderParameter(T[a],b):U(1281)},Ha:function(a){var b=wb[a];if(!b){switch(a){case 7939:b=V.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Gb(b.join(" "));
break;case 7936:case 7937:case 37445:case 37446:(b=V.getParameter(a))||U(1280);b=b&&Gb(b);break;case 7938:b=Gb("OpenGL ES 2.0 ("+V.getParameter(7938)+")");break;case 35724:b=V.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Gb(b);break;default:U(1280)}wb[a]=b}return b},r:function(a,b){b=E(b);if(a=S[a]){var c=a,d=c.Nb,e=c.jc,h;if(!d)for(c.Nb=d={},c.ic={},h=0;h<V.getProgramParameter(c,
35718);++h){var g=V.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Hb(m);n=0<n?m.slice(0,n):m;var q=c.Ub;c.Ub+=g;e[n]=[g,q];for(m=0;m<g;++m)d[q]=m,c.ic[q++]=n}c=a.Nb;d=0;e=b;h=Hb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.jc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else U(1281);return-1},pa:function(a){a=S[a];V.linkProgram(a);a.Nb=0;a.jc={}},x:function(a,b){V.polygonOffset(a,b)},va:function(a,b,c,d){V.renderbufferStorage(a,b,c,d)},n:function(a,b,c,
d){V.scissor(a,b,c,d)},la:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?F[d+4*h>>2]:-1;e+=E(F[c+4*h>>2],0>g?void 0:g)}V.shaderSource(T[a],e)},Da:function(a,b,c){V.stencilFunc(a,b,c)},qb:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},j:function(a){V.stencilMask(a)},Ba:function(a,b,c){V.stencilOp(a,b,c)},pb:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},sa:function(a,b,c,d,e,h,g,m,n){var q=V,r=q.texImage2D;if(n){var p=m-5120;p=1==p?D:4==p?F:6==p?G:5==p||28922==p?wa:va;var M=31-Math.clz32(p.BYTES_PER_ELEMENT);
n=p.subarray(n>>M,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4}[g-6402]||1)*(1<<M)+4-1&-4)>>M)}else n=null;r.call(q,a,b,c,d,e,h,g,m,n)},d:function(a,b,c){V.texParameteri(a,b,c)},lb:function(a,b,c){if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);V.uniform1fv(W(a),d)},na:function(a,b){V.uniform1i(W(a),b)},hb:function(a,b,c){if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),d)},kb:function(a,b,c){if(144>=b)for(var d=
X[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);V.uniform2fv(W(a),d)},gb:function(a,b,c){if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);V.uniform2iv(W(a),d)},jb:function(a,b,c){if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)},fb:function(a,b,c){if(96>=b)for(var d=Y[3*b-
1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)},ib:function(a,b,c){if(72>=b){var d=X[4*b-1],e=G;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)},eb:function(a,b,c){if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2],d[e+3]=F[c+(4*e+12)>>2];else d=F.subarray(c>>
2,c+16*b>>2);V.uniform4iv(W(a),d)},db:function(a,b,c,d){if(18>=b){var e=X[16*b-1],h=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=G.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(W(a),!!c,e)},h:function(a){a=S[a];V.useProgram(a);V.kc=a},nb:function(a,b){V.vertexAttribDivisor(a,
b)},ob:function(a,b,c,d,e,h){V.vertexAttribPointer(a,b,c,!!d,e,h)},o:function(a,b,c,d){V.viewport(a,b,c,d)},Ra:function(){f.bc=function(a){0!=Kb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.bc)},Qa:function(){f.hc=function(a){a=a.clipboardData.getData("text");ma("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.hc)},Pa:function(a){f.Bc=[];a=E(a);a=document.getElementById(a);f.cc=function(b){b.stopPropagation();b.preventDefault()};f.dc=function(b){b.stopPropagation();
b.preventDefault()};f.ec=function(b){b.stopPropagation();b.preventDefault()};f.fc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Cc=c;Lb(c.length);var d;for(d=0;d<c.length;d++)ma("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Mb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.cc,!1);a.addEventListener("dragleave",f.dc,!1);a.addEventListener("dragover",f.ec,!1);a.addEventListener("drop",f.fc,!1)},za:function(){var a=document.getElementById("sokol-app-favicon");
a&&document.head.removeChild(a)},Na:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Nb()});document.body.append(a)},Ma:function(){document.getElementById("_sokol_app_input_element").focus()},sb:function(a){a=E(a);f.Mb=document.getElementById(a);f.Mb||console.log("sokol_app.h: invalid target:"+a);f.Mb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Ka:function(){window.removeEventListener("beforeunload",f.bc)},Ja:function(){window.removeEventListener("paste",f.hc)},Ia:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.cc);a.removeEventListener("dragleave",f.dc);a.removeEventListener("dragover",f.ec);a.removeEventListener("drop",f.fc)},Oa:function(){f.Mb&&f.Mb.requestPointerLock&&f.Mb.requestPointerLock()},qa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),
h=e.createImageData(a,b);h.data.set(D.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},La:function(){document.getElementById("_sokol_app_input_element").blur()},Ca:function(a){a=E(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left=
"-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},ja:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;ka=f.asm.tb;e=ka.buffer;f.HEAP8=na=new Int8Array(e);f.HEAP16=ua=new Int16Array(e);f.HEAP32=F=new Int32Array(e);f.HEAPU8=D=new Uint8Array(e);f.HEAPU16=va=new Uint16Array(e);f.HEAPU32=wa=new Uint32Array(e);f.HEAPF32=G=new Float32Array(e);f.HEAPF64=H=new Float64Array(e);xa=f.asm.vb;za.unshift(f.asm.ub);I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);0==I&&(null!==Ea&&(clearInterval(Ea),Ea=null),J&&(e=J,J=null,e()))}function b(e){a(e.instance)}function c(e){return Ia().then(function(h){return WebAssembly.instantiate(h,
d)}).then(function(h){return h}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);A(h)})}var d={a:Ob};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||K.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,
d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.ub).apply(null,arguments)};var Nb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Nb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.wb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.xb).apply(null,arguments)};
var Kb=f.__sapp_html5_get_ask_leave_site=function(){return(Kb=f.__sapp_html5_get_ask_leave_site=f.asm.yb).apply(null,arguments)},Lb=f.__sapp_emsc_begin_drop=function(){return(Lb=f.__sapp_emsc_begin_drop=f.asm.zb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Ab).apply(null,arguments)};var Mb=f.__sapp_emsc_end_drop=function(){return(Mb=f.__sapp_emsc_end_drop=f.asm.Bb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Cb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Db).apply(null,arguments)};
var Q=f._malloc=function(){return(Q=f._malloc=f.asm.Eb).apply(null,arguments)},oa=f.stackSave=function(){return(oa=f.stackSave=f.asm.Fb).apply(null,arguments)},pa=f.stackRestore=function(){return(pa=f.stackRestore=f.asm.Gb).apply(null,arguments)},B=f.stackAlloc=function(){return(B=f.stackAlloc=f.asm.Hb).apply(null,arguments)},Pb;function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Qb(){Pb||Rb();Pb||(J=Qb)};
function Rb(a){function b(){if(!Pb&&(Pb=!0,f.calledRun=!0,!la)){Ja(za);Ja(Aa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Sb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=B(4*(e+1));F[h>>2]=ta(da);for(var g=1;g<e;g++)F[(h>>2)+g]=ta(c[g-1]);F[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ia)){if(f.onExit)f.onExit(m);la=!0}k(m,new x(m))}catch(n){n instanceof x||"unwind"==n||k(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Ca.unshift(c);Ja(Ca)}}a=a||ca;if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Da();Ja(ya);0<I||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Rb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Sb=!0;f.noInitialRun&&(Sb=!1);Rb();
