import{A as Be,a as vt,b as ct,c as _e,d as we,e as zt,f as ut,g as Jt,h as Se,i as Pe,j as Zt,k as ke,l as xt,m as Me,n as Ct,o as Te,p as Ft,q as $t,r as pt,s as Ie,t as Ee,u as Oe,v as J,w as Y,x as nt,y as gt,z}from"./chunk-O257KS42.js";import{a as De}from"./chunk-Q6S7J7JW.js";import{f as Nt}from"./chunk-BQH6ZVNM.js";import"./chunk-WV7YBYIM.js";import{$ as de,$a as Ot,Ca as It,Cb as U,Da as et,Eb as v,Fb as Yt,Ha as w,Hb as ve,I as A,Ia as q,J as G,Ja as F,Jb as C,Ka as Q,Kb as xe,L as R,La as M,Ma as E,N as p,Rb as at,S as se,Sa as j,Sb as lt,T as ae,Ta as f,Tb as Dt,U as Pt,Ua as a,Ub as Ce,Va as l,Vb as D,W as le,Wa as y,X as kt,Xa as Ut,Ya as Wt,Za as Gt,Zb as dt,_ as Mt,_a as Et,_b as Xt,a as h,ab as pe,b as St,bb as ge,c as re,ca as mt,cb as be,db as L,ea as I,eb as P,fb as it,ga as ce,gb as rt,ha as _,hb as me,ja as ot,jb as ht,kb as yt,lb as fe,mb as he,na as Tt,ob as Bt,pb as st,qb as ye,ra as ft,rb as k,sb as c,ta as ue,tb as O,ub as qt,va as g,xb as B,zb as Qt}from"./chunk-CSNC2YZ6.js";function Z(...o){if(o){let r=[];for(let t=0;t<o.length;t++){let e=o[t];if(!e)continue;let n=typeof e;if(n==="string"||n==="number")r.push(e);else if(n==="object"){let i=Array.isArray(e)?[Z(...e)]:Object.entries(e).map(([s,d])=>d?s:void 0);r=i.length?r.concat(i.filter(s=>!!s)):r}}return r.join(" ").trim()}}var fn=Object.defineProperty,Ne=Object.getOwnPropertySymbols,hn=Object.prototype.hasOwnProperty,yn=Object.prototype.propertyIsEnumerable,ze=(o,r,t)=>r in o?fn(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,Fe=(o,r)=>{for(var t in r||(r={}))hn.call(r,t)&&ze(o,t,r[t]);if(Ne)for(var t of Ne(r))yn.call(r,t)&&ze(o,t,r[t]);return o};function $e(...o){if(o){let r=[];for(let t=0;t<o.length;t++){let e=o[t];if(!e)continue;let n=typeof e;if(n==="string"||n==="number")r.push(e);else if(n==="object"){let i=Array.isArray(e)?[$e(...e)]:Object.entries(e).map(([s,d])=>d?s:void 0);r=i.length?r.concat(i.filter(s=>!!s)):r}}return r.join(" ").trim()}}function vn(o){return typeof o=="function"&&"call"in o&&"apply"in o}function Kt(...o){return o?.reduce((r,t={})=>{for(let e in t){let n=t[e];if(e==="style")r.style=Fe(Fe({},r.style),t.style);else if(e==="class"||e==="className")r[e]=$e(r[e],t[e]);else if(vn(n)){let i=r[e];r[e]=i?(...s)=>{i(...s),n(...s)}:n}else r[e]=n}return r},{})}var At={};function _t(o="pui_id_"){return Object.hasOwn(At,o)||(At[o]=0),At[o]++,`${o}${At[o]}`}var Ae=(()=>{class o extends z{name="common";static \u0275fac=(()=>{let t;return function(n){return(t||(t=_(o)))(n||o)}})();static \u0275prov=A({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),W=new R("PARENT_INSTANCE"),N=(()=>{class o{document=p(kt);platformId=p(Tt);el=p(ot);injector=p(le);cd=p(ve);renderer=p(It);config=p(Be);$parentInstance=p(W,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=p(Ae);baseStyle=p(z);scopedStyleEl;parent=this.$params.parent;cn=Z;_themeScopedListener;dt=v();unstyled=v();pt=v();ptOptions=v();$attrSelector=_t("pc");get $name(){return this.componentName||this.constructor?.name?.replace(/^_/,"")||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=mt(void 0);directiveUnstyled=mt(void 0);$unstyled=U(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=U(()=>Ft(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,t=>Ft(t,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,t=>this._getOptionValue(t,this.$hostName||this.$name,this.$params)||Ft(t,this.$params))}get $style(){return h(h({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let t=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:t}}}onInit(){}onChanges(t){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){I(t=>{this.document&&!Xt(this.platformId)&&(Y.off("theme:change",this._themeScopedListener),this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener(this._themeScopedListener)):this._unloadScopedThemeStyles()),t(()=>{Y.off("theme:change",this._themeScopedListener)})}),I(t=>{this.document&&!Xt(this.platformId)&&(Y.off("theme:change",this._loadCoreStyles),this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))),t(()=>{Y.off("theme:change",this._loadCoreStyles)})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(t){this.onChanges(t),this._hook("onChanges",t)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(t,...e){return Me(t)?t(...e):Kt(...e)}_getHostInstance(t){return t?this.$hostName?this.$name===this.$hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0}_getPropValue(t){return this[t]||this._getHostInstance(this)?.[t]}_getOptionValue(t,e="",n={}){return Ie(t,e,n)}_hook(t,...e){if(!this.$hostName){let n=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${t}`),i=this._useDefaultPT(this._getOptionValue,`hooks.${t}`);n?.(...e),i?.(...e)}}_load(){gt.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),gt.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener(()=>this._load())}_loadGlobalStyles(){let t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Ct(t)&&this.baseStyle.load(t,h({name:"global"},this.$styleOptions))}_loadCoreStyles(){!gt.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),gt.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!nt.isStyleNameLoaded("common")){let{primitive:t,semantic:e,global:n,style:i}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,h({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(e?.css,h({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,h({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(h({name:"global-style"},this.$styleOptions),i),nt.setLoadedStyleName("common")}if(!nt.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:t,style:e}=this.$style?.getComponentTheme?.()||{};this.$style?.load(t,h({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(h({name:`${this.$style?.name}-style`},this.$styleOptions),e),nt.setLoadedStyleName(this.$style?.name)}if(!nt.isStyleNameLoaded("layer-order")){let t=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,h({name:"layer-order",first:!0},this.$styleOptions)),nt.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(t){let{css:e}=this.$style?.getPresetTheme?.(t,`[${this.$attrSelector}]`)||{},n=this.$style?.load(e,h({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){gt.clearLoadedStyleNames(),Y.on("theme:change",t.bind(this))}_removeThemeListeners(){Y.off("theme:change",this._loadCoreStyles),Y.off("theme:change",this._load),Y.off("theme:change",this._themeScopedListener)}_getPTValue(t={},e="",n={},i=!0){let s=/./g.test(e)&&!!n[e.split(".")[0]],{mergeSections:d=!0,mergeProps:u=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},m=i?s?this._useGlobalPT(this._getPTClassValue,e,n):this._useDefaultPT(this._getPTClassValue,e,n):void 0,b=s?void 0:this._usePT(this._getPT(t,this.$hostName||this.$name),this._getPTClassValue,e,St(h({},n),{global:m||{}})),x=this._getPTDatasets(e);return d||!d&&b?u?this._mergeProps(u,m,b,x):h(h(h({},m),b),x):h(h({},b),x)}_getPTDatasets(t=""){let e="data-pc-",n=t==="root"&&Ct(this.$pt()?.["data-pc-section"]);return t!=="transition"&&St(h({},t==="root"&&St(h({[`${e}name`]:pt(n?this.$pt()?.["data-pc-section"]:this.$name)},n&&{[`${e}extend`]:pt(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${e}section`]:pt(t.includes(".")?t.split(".").at(-1)??"":t)})}_getPTClassValue(t,e,n){let i=this._getOptionValue(t,e,n);return $t(i)||Ee(i)?{class:i}:i}_getPT(t,e="",n){let i=(s,d=!1)=>{let u=n?n(s):s,m=pt(e),b=pt(this.$hostName||this.$name);return(d?m!==b?u?.[m]:void 0:u?.[m])??u};return t?.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:i(t.originalValue),value:i(t.value)}:i(t,!0)}_usePT(t,e,n,i){let s=d=>e?.call(this,d,n,i);if(t?.hasOwnProperty("_usept")){let{mergeSections:d=!0,mergeProps:u=!1}=t._usept||this.config?.ptOptions()||{},m=s(t.originalValue),b=s(t.value);return m===void 0&&b===void 0?void 0:$t(b)?b:$t(m)?m:d||!d&&b?u?this._mergeProps(u,m,b):h(h({},m),b):b}return s(t)}_useGlobalPT(t,e,n){return this._usePT(this.$globalPT,t,e,n)}_useDefaultPT(t,e,n){return this._usePT(this.$defaultPT,t,e,n)}ptm(t="",e={}){return this._getPTValue(this.$pt(),t,h(h({},this.$params),e))}ptms(t,e={}){return t.reduce((n,i)=>(n=Kt(n,this.ptm(i,e))||{},n),{})}ptmo(t={},e="",n={}){return this._getPTValue(t,e,h({instance:this},n),!1)}cx(t,e={}){return this.$unstyled()?void 0:Z(this._getOptionValue(this.$style.classes,t,h(h({},this.$params),e)))}sx(t="",e=!0,n={}){if(e){let i=this._getOptionValue(this.$style.inlineStyles,t,h(h({},this.$params),n)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,t,h(h({},this.$params),n));return h(h({},s),i)}}static \u0275fac=function(e){return new(e||o)};static \u0275dir=F({type:o,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[B([Ae,z]),ce]})}return o})();var je=(()=>{class o{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let n=e.trim().split(" ");for(let i=0;i<n.length;i++)t.classList.add(n[i])}else{let n=e.split(" ");for(let i=0;i<n.length;i++)t.className+=" "+n[i]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,n=0;for(var i=0;i<e.length;i++){if(e[i]==t)return n;e[i].nodeType==1&&n++}return-1}static indexWithinGroup(t,e){let n=t.parentNode?t.parentNode.childNodes:[],i=0;for(var s=0;s<n.length;s++){if(n[s]==t)return i;n[s].attributes&&n[s].attributes[e]&&n[s].nodeType==1&&i++}return-1}static appendOverlay(t,e,n="self"){n!=="self"&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,n="self",i=!0){t&&e&&(i&&(t.style.minWidth=`${o.getOuterWidth(e)}px`),n==="self"?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e,n=!0){let i=tt=>{if(tt)return getComputedStyle(tt).getPropertyValue("position")==="relative"?tt:i(tt.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),d=e.offsetHeight,u=e.getBoundingClientRect(),m=this.getWindowScrollTop(),b=this.getWindowScrollLeft(),x=this.getViewport(),T=i(t)?.getBoundingClientRect()||{top:-1*m,left:-1*b},V,X,wt="top";u.top+d+s.height>x.height?(V=u.top-T.top-s.height,wt="bottom",u.top+V<0&&(V=-1*u.top)):(V=d+u.top-T.top,wt="top");let ie=u.left+s.width-x.width,mn=u.left-T.left;if(s.width>x.width?X=(u.left-T.left)*-1:ie>0?X=mn-ie:X=u.left-T.left,t.style.top=V+"px",t.style.left=X+"px",t.style.transformOrigin=wt,n){let tt=_e(/-anchor-gutter$/)?.value;t.style.marginTop=wt==="bottom"?`calc(${tt??"2px"} * -1)`:tt??""}}static absolutePosition(t,e,n=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=i.height,d=i.width,u=e.offsetHeight,m=e.offsetWidth,b=e.getBoundingClientRect(),x=this.getWindowScrollTop(),H=this.getWindowScrollLeft(),T=this.getViewport(),V,X;b.top+u+s>T.height?(V=b.top+x-s,t.style.transformOrigin="bottom",V<0&&(V=x)):(V=u+b.top+x,t.style.transformOrigin="top"),b.left+d>T.width?X=Math.max(0,b.left+H+m-d):X=b.left+H,t.style.top=V+"px",t.style.left=X+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let n=this.getParents(t),i=/(auto|scroll)/,s=d=>{let u=window.getComputedStyle(d,null);return i.test(u.getPropertyValue("overflow"))||i.test(u.getPropertyValue("overflowX"))||i.test(u.getPropertyValue("overflowY"))};for(let d of n){let u=d.nodeType===1&&d.dataset.scrollselectors;if(u){let m=u.split(",");for(let b of m){let x=this.findSingle(d,b);x&&s(x)&&e.push(x)}}d.nodeType!==9&&s(d)&&e.push(d)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementDimensions(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}static scrollInView(t,e){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),d=s?parseFloat(s):0,u=t.getBoundingClientRect(),b=e.getBoundingClientRect().top+document.body.scrollTop-(u.top+document.body.scrollTop)-i-d,x=t.scrollTop,H=t.clientHeight,T=this.getOuterHeight(e);b<0?t.scrollTop=x+b:b+T>H&&(t.scrollTop=x+b-H+T)}static fadeIn(t,e){t.style.opacity=0;let n=+new Date,i=0,s=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-n)/e,t.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(t,e){var n=1,i=50,s=e,d=i/s;let u=setInterval(()=>{n=n-d,n<=0&&(n=0,clearInterval(u)),t.style.opacity=n},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){var n=Element.prototype,i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return i.call(t,e)}static getOuterWidth(t,e){let n=t.offsetWidth;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}static width(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),e}static getOuterHeight(t,e){let n=t.offsetHeight;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}static getHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}static getViewport(){let t=window,e=document,n=e.documentElement,i=e.getElementsByTagName("body")[0],s=t.innerWidth||n.clientWidth||i.clientWidth,d=t.innerHeight||n.clientHeight||i.clientHeight;return{width:s,height:d}}static getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let n=t.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return!0;var n=t.indexOf("Trident/");if(n>0){var i=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw"Cannot append "+e+" to "+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+e}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,n){t[e].apply(t,n)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,e=""){let n=this.find(t,this.getFocusableSelectorString(e)),i=[];for(let s of n){let d=getComputedStyle(s);this.isVisible(s)&&d.display!="none"&&d.visibility!="hidden"&&i.push(s)}return i}static getFocusableElement(t,e=""){let n=this.findSingle(t,this.getFocusableSelectorString(e));if(n){let i=getComputedStyle(n);if(this.isVisible(n)&&i.display!="none"&&i.visibility!="hidden")return n}return null}static getFirstFocusableElement(t,e=""){let n=this.getFocusableElements(t,e);return n.length>0?n[0]:null}static getLastFocusableElement(t,e){let n=this.getFocusableElements(t,e);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,e=!1){let n=o.getFocusableElements(t),i=0;if(n&&n.length>0){let s=n.indexOf(n[0].ownerDocument.activeElement);e?s==-1||s===0?i=n.length-1:i=s-1:s!=-1&&s!==n.length-1&&(i=s+1)}return n[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return e?.nextElementSibling;case"@prev":return e?.previousElementSibling;case"@parent":return e?.parentElement;case"@grandparent":return e?.parentElement?.parentElement;default:let n=typeof t;if(n==="string")return document.querySelector(t);if(n==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(d=>!!(d&&d.constructor&&d.call&&d.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let n=t.getAttribute(e);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,e={},...n){if(t){let i=document.createElement(t);return this.setAttributes(i,e),i.append(...n),i}}static setAttribute(t,e="",n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(e,n)}static setAttributes(t,e={}){if(this.isElement(t)){let n=(i,s)=>{let d=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[s].flat().reduce((u,m)=>{if(m!=null){let b=typeof m;if(b==="string"||b==="number")u.push(m);else if(b==="object"){let x=Array.isArray(m)?n(i,m):Object.entries(m).map(([H,T])=>i==="style"&&(T||T===0)?`${H.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${T}`:T?H:void 0);u=x.length?u.concat(x.filter(H=>!!H)):u}}return u},d)};Object.entries(e).forEach(([i,s])=>{if(s!=null){let d=i.match(/^on(.+)/);d?t.addEventListener(d[1].toLowerCase(),s):i==="pBind"?this.setAttributes(t,s):(s=i==="class"?[...new Set(n("class",s))].join(" ").trim():i==="style"?n("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=s),t.setAttribute(i,s))}})}}static isFocusableElement(t,e=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}}return o})();var Le=(()=>{class o extends N{autofocus=!1;focused=!1;platformId=p(Tt);document=p(kt);host=p(ot);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){dt(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=je.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=_(o)))(n||o)}})();static \u0275dir=F({type:o,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[M]})}return o})();var S=(()=>{class o{el;renderer;pBind=v(void 0);_attrs=mt(void 0);attrs=U(()=>this._attrs()||this.pBind());styles=U(()=>this.attrs()?.style);classes=U(()=>Z(this.attrs()?.class));listeners=[];constructor(t,e){this.el=t,this.renderer=e,I(()=>{let d=this.attrs()||{},{style:n,class:i}=d,s=re(d,["style","class"]);for(let[u,m]of Object.entries(s))if(u.startsWith("on")&&typeof m=="function"){let b=u.slice(2).toLowerCase();if(!this.listeners.some(x=>x.eventName===b)){let x=this.renderer.listen(this.el.nativeElement,b,m);this.listeners.push({eventName:b,unlisten:x})}}else m==null?this.renderer.removeAttribute(this.el.nativeElement,u):(this.renderer.setAttribute(this.el.nativeElement,u,m.toString()),u in this.el.nativeElement&&(this.el.nativeElement[u]=m))})}ngOnDestroy(){this.clearListeners()}setAttrs(t){Te(this._attrs(),t)||this._attrs.set(t)}clearListeners(){this.listeners.forEach(({unlisten:t})=>t()),this.listeners=[]}static \u0275fac=function(e){return new(e||o)(et(ot),et(It))};static \u0275dir=F({type:o,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(e,n){e&2&&(ye(n.styles()),k(n.classes()))},inputs:{pBind:[1,"pBind"]}})}return o})(),He=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=q({type:o});static \u0275inj=G({})}return o})();var Ve=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var xn=`
    ${Ve}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Cn={root:({instance:o})=>{let r=typeof o.value=="function"?o.value():o.value,t=typeof o.size=="function"?o.size():o.size,e=typeof o.badgeSize=="function"?o.badgeSize():o.badgeSize,n=typeof o.severity=="function"?o.severity():o.severity;return["p-badge p-component",{"p-badge-circle":Ct(r)&&String(r).length===1,"p-badge-dot":xt(r),"p-badge-sm":t==="small"||e==="small","p-badge-lg":t==="large"||e==="large","p-badge-xl":t==="xlarge"||e==="xlarge","p-badge-info":n==="info","p-badge-success":n==="success","p-badge-warn":n==="warn","p-badge-danger":n==="danger","p-badge-secondary":n==="secondary","p-badge-contrast":n==="contrast"}]}},Re=(()=>{class o extends z{name="badge";style=xn;classes=Cn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=_(o)))(n||o)}})();static \u0275prov=A({token:o,factory:o.\u0275fac})}return o})();var Ue=new R("BADGE_INSTANCE");var ee=(()=>{class o extends N{$pcBadge=p(Ue,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=v();badgeSize=v();size=v();severity=v();value=v();badgeDisabled=v(!1,{transform:C});_componentStyle=p(Re);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=_(o)))(n||o)}})();static \u0275cmp=w({type:o,selectors:[["p-badge"]],hostVars:5,hostBindings:function(e,n){e&2&&(j("data-p",n.dataP),k(n.cn(n.cx("root"),n.styleClass())),Bt("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[B([Re,{provide:Ue,useExisting:o},{provide:W,useExisting:o}]),Q([S]),M],decls:1,vars:1,template:function(e,n){e&1&&c(0),e&2&&O(n.value())},dependencies:[D,J,He],encapsulation:2,changeDetection:0})}return o})(),We=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=q({type:o});static \u0275inj=G({imports:[ee,J,J]})}return o})();var wn=["*"],Sn={root:"p-fluid"},Ge=(()=>{class o extends z{name="fluid";classes=Sn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=_(o)))(n||o)}})();static \u0275prov=A({token:o,factory:o.\u0275fac})}return o})();var qe=new R("FLUID_INSTANCE"),ne=(()=>{class o extends N{$pcFluid=p(qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=p(Ge);static \u0275fac=(()=>{let t;return function(n){return(t||(t=_(o)))(n||o)}})();static \u0275cmp=w({type:o,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(e,n){e&2&&k(n.cx("root"))},features:[B([Ge,{provide:qe,useExisting:o},{provide:W,useExisting:o}]),Q([S]),M],ngContentSelectors:wn,decls:1,vars:0,template:function(e,n){e&1&&(it(),rt(0))},dependencies:[D],encapsulation:2,changeDetection:0})}return o})();var Pn=["*"],kn=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Qe=(()=>{class o extends z{name="baseicon";css=kn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=_(o)))(n||o)}})();static \u0275prov=A({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Ye=(()=>{class o extends N{spin=!1;_componentStyle=p(Qe);getClassNames(){return Z("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=_(o)))(n||o)}})();static \u0275cmp=w({type:o,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(e,n){e&2&&k(n.getClassNames())},inputs:{spin:[2,"spin","spin",C]},features:[B([Qe]),M],ngContentSelectors:Pn,decls:1,vars:0,template:function(e,n){e&1&&(it(),rt(0))},encapsulation:2,changeDetection:0})}return o})();var Mn=["data-p-icon","spinner"],Xe=(()=>{class o extends Ye{pathId;onInit(){this.pathId="url(#"+_t()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=_(o)))(n||o)}})();static \u0275cmp=w({type:o,selectors:[["","data-p-icon","spinner"]],features:[M],attrs:Mn,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(e,n){e&1&&(Pt(),Ut(0,"g"),Gt(1,"path",0),Wt(),Ut(2,"defs")(3,"clipPath",1),Gt(4,"rect",2),Wt()()),e&2&&(j("clip-path",n.pathId),g(3),be("id",n.pathId))},encapsulation:2})}return o})();var Je=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Tn=`
    ${Je}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,In={root:"p-ink"},Ze=(()=>{class o extends z{name="ripple";style=Tn;classes=In;static \u0275fac=(()=>{let t;return function(n){return(t||(t=_(o)))(n||o)}})();static \u0275prov=A({token:o,factory:o.\u0275fac})}return o})();var Ke=(()=>{class o extends N{zone=p(de);_componentStyle=p(Ze);animationListener;mouseDownListener;timeout;constructor(){super(),I(()=>{dt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let e=this.getInk();if(!e||this.document.defaultView?.getComputedStyle(e,null).display==="none")return;if(!this.$unstyled()&&ct(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"),!Jt(e)&&!Zt(e)){let d=Math.max(we(this.el.nativeElement),Pe(this.el.nativeElement));e.style.height=d+"px",e.style.width=d+"px"}let n=Se(this.el.nativeElement),i=t.pageX-n.left+this.document.body.scrollTop-Zt(e)/2,s=t.pageY-n.top+this.document.body.scrollLeft-Jt(e)/2;this.renderer.setStyle(e,"top",s+"px"),this.renderer.setStyle(e,"left",i+"px"),!this.$unstyled()&&vt(e,"p-ink-active"),e.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let d=this.getInk();d&&(!this.$unstyled()&&ct(d,"p-ink-active"),d.setAttribute("data-p-ink-active","false"))},401)}getInk(){let t=this.el.nativeElement.children;for(let e=0;e<t.length;e++)if(typeof t[e].className=="string"&&t[e].className.indexOf("p-ink")!==-1)return t[e];return null}resetInk(){let t=this.getInk();t&&(!this.$unstyled()&&ct(t,"p-ink-active"),t.setAttribute("data-p-ink-active","false"))}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&ct(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"data-p-ink","true"),this.renderer.setAttribute(t,"data-p-ink-active","false"),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ke(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(e){return new(e||o)};static \u0275dir=F({type:o,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[B([Ze]),M]})}return o})();var tn=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var En=["content"],On=["loadingicon"],Bn=["icon"],Dn=["*"],ln=(o,r)=>({class:o,pt:r});function Nn(o,r){o&1&&pe(0)}function zn(o,r){if(o&1&&y(0,"span",7),o&2){let t=P(3);k(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon))),f("pBind",t.ptm("loadingIcon")),j("aria-hidden",!0)}}function Fn(o,r){if(o&1&&(Pt(),y(0,"svg",8)),o&2){let t=P(3);k(t.cn(t.cx("loadingIcon"),t.cx("spinnerIcon"))),f("pBind",t.ptm("loadingIcon"))("spin",!0),j("aria-hidden",!0)}}function $n(o,r){if(o&1&&(Et(0),E(1,zn,1,4,"span",3)(2,Fn,1,5,"svg",6),Ot()),o&2){let t=P(2);g(),f("ngIf",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon)),g(),f("ngIf",!(t.loadingIcon||t.buttonProps!=null&&t.buttonProps.loadingIcon))}}function An(o,r){}function jn(o,r){if(o&1&&E(0,An,0,0,"ng-template",9),o&2){let t=P(2);f("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Ln(o,r){if(o&1&&(Et(0),E(1,$n,3,2,"ng-container",2)(2,jn,1,1,null,5),Ot()),o&2){let t=P();g(),f("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),g(),f("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Qt(3,ln,t.cx("loadingIcon"),t.ptm("loadingIcon")))}}function Hn(o,r){if(o&1&&y(0,"span",7),o&2){let t=P(2);k(t.cn(t.cx("icon"),t.icon||(t.buttonProps==null?null:t.buttonProps.icon))),f("pBind",t.ptm("icon")),j("data-p",t.dataIconP)}}function Vn(o,r){}function Rn(o,r){if(o&1&&E(0,Vn,0,0,"ng-template",9),o&2){let t=P(2);f("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Un(o,r){if(o&1&&(Et(0),E(1,Hn,1,4,"span",3)(2,Rn,1,1,null,5),Ot()),o&2){let t=P();g(),f("ngIf",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!t.iconTemplate&&!t._iconTemplate),g(),f("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Qt(3,ln,t.cx("icon"),t.ptm("icon")))}}function Wn(o,r){if(o&1&&(a(0,"span",7),c(1),l()),o&2){let t=P();k(t.cx("label")),f("pBind",t.ptm("label")),j("aria-hidden",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!(t.label||t.buttonProps!=null&&t.buttonProps.label))("data-p",t.dataLabelP),g(),O(t.label||(t.buttonProps==null?null:t.buttonProps.label))}}function Gn(o,r){if(o&1&&y(0,"p-badge",10),o&2){let t=P();f("value",t.badge||(t.buttonProps==null?null:t.buttonProps.badge))("severity",t.badgeSeverity||(t.buttonProps==null?null:t.buttonProps.badgeSeverity))("pt",t.ptm("pcBadge"))("unstyled",t.unstyled())}}var qn={root:({instance:o})=>["p-button p-component",{"p-button-icon-only":o.hasIcon&&!o.label&&!o.buttonProps?.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading||o.buttonProps?.loading,"p-button-link":o.link||o.buttonProps?.link,[`p-button-${o.severity||o.buttonProps?.severity}`]:o.severity||o.buttonProps?.severity,"p-button-raised":o.raised||o.buttonProps?.raised,"p-button-rounded":o.rounded||o.buttonProps?.rounded,"p-button-text":o.text||o.variant==="text"||o.buttonProps?.text||o.buttonProps?.variant==="text","p-button-outlined":o.outlined||o.variant==="outlined"||o.buttonProps?.outlined||o.buttonProps?.variant==="outlined","p-button-sm":o.size==="small"||o.buttonProps?.size==="small","p-button-lg":o.size==="large"||o.buttonProps?.size==="large","p-button-plain":o.plain||o.buttonProps?.plain,"p-button-fluid":o.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:o})=>["p-button-icon",{[`p-button-icon-${o.iconPos||o.buttonProps?.iconPos}`]:o.label||o.buttonProps?.label,"p-button-icon-left":(o.iconPos==="left"||o.buttonProps?.iconPos==="left")&&o.label||o.buttonProps?.label,"p-button-icon-right":(o.iconPos==="right"||o.buttonProps?.iconPos==="right")&&o.label||o.buttonProps?.label,"p-button-icon-top":(o.iconPos==="top"||o.buttonProps?.iconPos==="top")&&o.label||o.buttonProps?.label,"p-button-icon-bottom":(o.iconPos==="bottom"||o.buttonProps?.iconPos==="bottom")&&o.label||o.buttonProps?.label},o.icon,o.buttonProps?.icon],spinnerIcon:({instance:o})=>Object.entries(o.cx("icon")).filter(([,r])=>!!r).reduce((r,[t])=>r+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},bt=(()=>{class o extends z{name="button";style=tn;classes=qn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=_(o)))(n||o)}})();static \u0275prov=A({token:o,factory:o.\u0275fac})}return o})();var en=new R("BUTTON_INSTANCE"),nn=new R("BUTTON_DIRECTIVE_INSTANCE"),on=new R("BUTTON_LABEL_INSTANCE"),rn=new R("BUTTON_ICON_INSTANCE"),K={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},sn=(()=>{class o extends N{ptButtonLabel=v();pButtonLabelPT=v();pButtonLabelUnstyled=v();$pcButtonLabel=p(on,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(S,{self:!0});constructor(){super(),I(()=>{let t=this.ptButtonLabel()||this.pButtonLabelPT();t&&this.directivePT.set(t)}),I(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(e){return new(e||o)};static \u0275dir=F({type:o,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(e,n){e&2&&st("p-button-label",!n.$unstyled()&&!0)},inputs:{ptButtonLabel:[1,"ptButtonLabel"],pButtonLabelPT:[1,"pButtonLabelPT"],pButtonLabelUnstyled:[1,"pButtonLabelUnstyled"]},features:[B([bt,{provide:on,useExisting:o},{provide:W,useExisting:o}]),Q([S]),M]})}return o})(),an=(()=>{class o extends N{ptButtonIcon=v();pButtonIconPT=v();pButtonUnstyled=v();$pcButtonIcon=p(rn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(S,{self:!0});constructor(){super(),I(()=>{let t=this.ptButtonIcon()||this.pButtonIconPT();t&&this.directivePT.set(t)}),I(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(e){return new(e||o)};static \u0275dir=F({type:o,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(e,n){e&2&&st("p-button-icon",!n.$unstyled()&&!0)},inputs:{ptButtonIcon:[1,"ptButtonIcon"],pButtonIconPT:[1,"pButtonIconPT"],pButtonUnstyled:[1,"pButtonUnstyled"]},features:[B([bt,{provide:rn,useExisting:o},{provide:W,useExisting:o}]),Q([S]),M]})}return o})(),dn=(()=>{class o extends N{$pcButtonDirective=p(nn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(S,{self:!0});_componentStyle=p(bt);ptButtonDirective=v();pButtonPT=v();pButtonUnstyled=v();hostName="";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}constructor(){super(),I(()=>{let t=this.ptButtonDirective()||this.pButtonPT();t&&this.directivePT.set(t)}),I(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())}),I(()=>{let t=this.$unstyled();this.initialized&&t&&this.setStyleClass()})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos="left";loadingIcon;fluid=v(void 0,{transform:C});iconSignal=Yt(an);labelSignal=Yt(sn);isIconOnly=U(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(K);pcFluid=p(ne,{optional:!0,host:!0,skipSelf:!0});isTextButton=U(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([e,n])=>this[`_${e}`]!==n&&(this[`_${e}`]=n))}get severity(){return this._severity}set severity(t){this._severity=t,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;onAfterViewInit(){!this.$unstyled()&&vt(this.htmlElement,this.getStyleClass().join(" ")),dt(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let t=[K.button,K.component];return this.icon&&!this.label&&xt(this.htmlElement.textContent)&&t.push(K.iconOnly),this.loading&&(t.push(K.disabled,K.loading),!this.icon&&this.label&&t.push(K.labelOnly),this.icon&&!this.label&&!xt(this.htmlElement.textContent)&&t.push(K.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),this.$unstyled()?[]:t}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let t=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}removeExistingSeverityClass(){let t=["success","info","warn","danger","help","primary","secondary","contrast"],e=this.htmlElement.classList.value.split(" ").find(n=>t.some(i=>n===`p-button-${i}`));e&&this.htmlElement.classList.remove(e)}createLabel(){if(!ut(this.htmlElement,'[data-pc-section="buttonlabel"]')&&this.label){let e=zt("span",{class:this.cx("label"),"p-bind":this.ptm("buttonlabel"),"aria-hidden":this.icon&&!this.label?"true":null});e.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(e)}}createIcon(){if(!ut(this.htmlElement,'[data-pc-section="buttonicon"]')&&(this.icon||this.loading)){let e=this.label&&!this.$unstyled()?"p-button-icon-"+this.iconPos:null,n=!this.$unstyled()&&this.getIconClass(),i=zt("span",{class:this.cn(this.cx("icon"),e,n),"aria-hidden":"true","p-bind":this.ptm("buttonicon")});!this.loadingIcon&&this.loading&&(i.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(i,this.htmlElement.firstChild)}}updateLabel(){let t=ut(this.htmlElement,'[data-pc-section="buttonlabel"]');if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=ut(this.htmlElement,'[data-pc-section="buttonicon"]'),e=ut(this.htmlElement,'[data-pc-section="buttonlabel"]');this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t&&!this.$unstyled()?this.iconPos?t.className="p-button-icon "+(e?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}onDestroy(){this.initialized=!1}static \u0275fac=function(e){return new(e||o)};static \u0275dir=F({type:o,selectors:[["","pButton",""]],contentQueries:function(e,n,i){e&1&&fe(i,n.iconSignal,an,5)(i,n.labelSignal,sn,5),e&2&&he(2)},hostVars:4,hostBindings:function(e,n){e&2&&st("p-button-icon-only",!n.$unstyled()&&n.isIconOnly())("p-button-text",!n.$unstyled()&&n.isTextButton())},inputs:{ptButtonDirective:[1,"ptButtonDirective"],pButtonPT:[1,"pButtonPT"],pButtonUnstyled:[1,"pButtonUnstyled"],hostName:"hostName",text:[2,"text","text",C],plain:[2,"plain","plain",C],raised:[2,"raised","raised",C],size:"size",outlined:[2,"outlined","outlined",C],rounded:[2,"rounded","rounded",C],iconPos:"iconPos",loadingIcon:"loadingIcon",fluid:[1,"fluid"],label:"label",icon:"icon",loading:"loading",buttonProps:"buttonProps",severity:"severity"},features:[B([bt,{provide:nn,useExisting:o},{provide:W,useExisting:o}]),Q([S]),M]})}return o})(),Qn=(()=>{class o extends N{hostName="";$pcButton=p(en,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(S,{self:!0});_componentStyle=p(bt);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=v(void 0,{transform:C});onClick=new Mt;onFocus=new Mt;onBlur=new Mt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=p(ne,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=_(o)))(n||o)}})();static \u0275cmp=w({type:o,selectors:[["p-button"]],contentQueries:function(e,n,i){if(e&1&&me(i,En,5)(i,On,5)(i,Bn,5)(i,Oe,4),e&2){let s;ht(s=yt())&&(n.contentTemplate=s.first),ht(s=yt())&&(n.loadingIconTemplate=s.first),ht(s=yt())&&(n.iconTemplate=s.first),ht(s=yt())&&(n.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",C],raised:[2,"raised","raised",C],rounded:[2,"rounded","rounded",C],text:[2,"text","text",C],plain:[2,"plain","plain",C],outlined:[2,"outlined","outlined",C],link:[2,"link","link",C],tabindex:[2,"tabindex","tabindex",xe],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",C],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",C],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[B([bt,{provide:en,useExisting:o},{provide:W,useExisting:o}]),Q([S]),M],ngContentSelectors:Dn,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(e,n){e&1&&(it(),a(0,"button",0),L("click",function(s){return n.onClick.emit(s)})("focus",function(s){return n.onFocus.emit(s)})("blur",function(s){return n.onBlur.emit(s)}),rt(1),E(2,Nn,1,0,"ng-container",1)(3,Ln,3,6,"ng-container",2)(4,Un,3,6,"ng-container",2)(5,Wn,2,6,"span",3)(6,Gn,1,4,"p-badge",4),l()),e&2&&(k(n.cn(n.cx("root"),n.styleClass,n.buttonProps==null?null:n.buttonProps.styleClass)),f("ngStyle",n.style||(n.buttonProps==null?null:n.buttonProps.style))("disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("pAutoFocus",n.autofocus||(n.buttonProps==null?null:n.buttonProps.autofocus))("pBind",n.ptm("root")),j("type",n.type||(n.buttonProps==null?null:n.buttonProps.type))("aria-label",n.ariaLabel||(n.buttonProps==null?null:n.buttonProps.ariaLabel))("tabindex",n.tabindex||(n.buttonProps==null?null:n.buttonProps.tabindex))("data-p",n.dataP)("data-p-disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("data-p-severity",n.severity||(n.buttonProps==null?null:n.buttonProps.severity)),g(2),f("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),g(),f("ngIf",n.loading||(n.buttonProps==null?null:n.buttonProps.loading)),g(),f("ngIf",!(n.loading||n.buttonProps!=null&&n.buttonProps.loading)),g(),f("ngIf",!n.contentTemplate&&!n._contentTemplate&&(n.label||(n.buttonProps==null?null:n.buttonProps.label))),g(),f("ngIf",!n.contentTemplate&&!n._contentTemplate&&(n.badge||(n.buttonProps==null?null:n.buttonProps.badge))))},dependencies:[D,lt,Ce,Dt,Ke,Le,Xe,We,ee,J,S],encapsulation:2,changeDetection:0})}return o})(),cn=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=q({type:o});static \u0275inj=G({imports:[D,Qn,J,J]})}return o})();var un={name:"Jeremy Anton",email:"jeremyar792@gmail.com",role:"Systems Engineer",typingText:"Hi, I'm Jeremy Anton",description:"Frontend Developer apasionado por Angular, TypeScript y dise\xF1o UI/UX. Creando aplicaciones web modernas con PrimeNG, SCSS y arquitecturas escalables. De la interfaz hasta la base de datos, construyendo soluciones completas.",image:"https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773540298/foto-perfil_mhaf1t.jpg"},pn=[{url:"https://github.com/jere792",icon:"devicon-github-original",label:"GitHub",external:!0},{url:"https://www.linkedin.com/in/jeremy-ant\xF3n-61980235b/",icon:"pi pi-linkedin",label:"LinkedIn",external:!0},{url:"mailto:jeremyar792@gmail.com",icon:"pi pi-envelope",label:"Email",external:!1}],gn=[{name:"Angular",icon:"devicon-angular-plain colored",glow:"#dd0031",size:"xl",left:50,top:4,float:-10,z:10,delay:0,duration:4.2},{name:"TypeScript",icon:"devicon-typescript-plain colored",glow:"#3178c6",size:"xl",left:78,top:14,float:-8,z:9,delay:-1,duration:3.8},{name:"JavaScript",icon:"devicon-javascript-plain colored",glow:"#f7df1e",size:"lg",left:88,top:42,float:-9,z:8,delay:-2,duration:4.5},{name:"Node.js",icon:"devicon-nodejs-plain colored",glow:"#68a063",size:"lg",left:78,top:72,float:-7,z:8,delay:-3,duration:3.6},{name:"Express",icon:"devicon-express-original",glow:"#c9d1d9",size:"md",left:58,top:88,float:-6,z:7,delay:-4,duration:4},{name:"CSS3",icon:"devicon-css3-plain colored",glow:"#1572b6",size:"md",left:30,top:84,float:-8,z:7,delay:-1.5,duration:3.9},{name:"SCSS",icon:"devicon-sass-original colored",glow:"#cf649a",size:"sm",left:10,top:68,float:-5,z:6,delay:-2.5,duration:4.8},{name:"SQL Server",icon:"devicon-microsoftsqlserver-plain colored",glow:"#cc2927",size:"sm",left:6,top:44,float:-7,z:6,delay:-.5,duration:3.5},{name:"MySQL",icon:"devicon-mysql-plain colored",glow:"#4479a1",size:"md",left:10,top:20,float:-9,z:7,delay:-3.5,duration:4.3},{name:"MongoDB",icon:"devicon-mongodb-plain colored",glow:"#47a248",size:"lg",left:24,top:7,float:-8,z:8,delay:-1.8,duration:3.7},{name:"GraphQL",icon:"devicon-graphql-plain colored",glow:"#e10098",size:"md",left:66,top:26,float:-6,z:7,delay:-2.2,duration:4.1},{name:"Java",icon:"devicon-java-plain colored",glow:"#f89820",size:"md",left:34,top:26,float:-7,z:7,delay:-.8,duration:3.8},{name:"Spring Boot",icon:"devicon-spring-plain colored",glow:"#6db33f",size:"sm",left:68,top:58,float:-5,z:6,delay:-3.2,duration:4.6},{name:"C#",icon:"devicon-csharp-plain colored",glow:"#68217a",size:"sm",left:44,top:66,float:-6,z:6,delay:-1.2,duration:4},{name:"ASP.NET Core",icon:"devicon-dotnetcore-plain colored",glow:"#512bd4",size:"sm",left:24,top:58,float:-5,z:6,delay:-4,duration:3.5},{name:"Figma",icon:"devicon-figma-plain colored",glow:"#f24e1e",size:"sm",left:44,top:44,float:-8,z:9,delay:-.3,duration:4.4},{name:"Arduino",icon:"devicon-arduino-plain colored",glow:"#00979d",size:"sm",left:20,top:40,float:-6,z:6,delay:-2.8,duration:3.9},{name:"GitHub",icon:"devicon-github-original",glow:"#c9d1d9",size:"md",left:54,top:52,float:-7,z:8,delay:-1.6,duration:4.2}];function Jn(o,r){if(o&1&&(a(0,"a",16),y(1,"i"),l()),o&2){let t=r.$implicit;f("href",t.url,ft)("target",t.external?"_blank":"_self"),j("aria-label",t.label),g(),k(t.icon)}}var jt=class o{constructor(r){this.router=r}userInfo=un;socialLinks=pn;typedText="";typingSpeed=100;ngOnInit(){this.startTyping()}startTyping(r=0){r<this.userInfo.typingText.length&&(this.typedText+=this.userInfo.typingText.charAt(r),setTimeout(()=>this.startTyping(r+1),this.typingSpeed))}goToProjects(){this.router.navigate(["/projects"])}goToContact(){this.router.navigate(["/contact"])}static \u0275fac=function(t){return new(t||o)(et(Nt))};static \u0275cmp=w({type:o,selectors:[["app-hero"]],decls:20,vars:6,consts:[[1,"hero-section"],[1,"hero-grid"],[1,"hero-content"],[1,"hero-name"],[1,"typed-text"],[1,"cursor"],[1,"hero-role"],[1,"hero-description"],[1,"cta-buttons"],["pButton","","label","Ver Proyectos","icon","pi pi-arrow-right","iconPos","right",1,"p-button-raised",3,"click"],["pButton","","label","Cont\xE1ctame","icon","pi pi-envelope",1,"p-button-outlined",3,"click"],[1,"social-links"],["class","social-icon",3,"href","target",4,"ngFor","ngForOf"],[1,"hero-image"],[1,"image-container"],[1,"profile-image",3,"src","alt"],[1,"social-icon",3,"href","target"]],template:function(t,e){t&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3)(4,"span",4),c(5),l(),a(6,"span",5),c(7,"|"),l()(),a(8,"p",6),c(9),l(),a(10,"p",7),c(11),l(),a(12,"div",8)(13,"button",9),L("click",function(){return e.goToProjects()}),l(),a(14,"button",10),L("click",function(){return e.goToContact()}),l()(),a(15,"div",11),E(16,Jn,2,5,"a",12),l()(),a(17,"div",13)(18,"div",14),y(19,"img",15),l()()()()),t&2&&(g(5),O(e.typedText),g(4),O(e.userInfo.role),g(2),O(e.userInfo.description),g(5),f("ngForOf",e.socialLinks),g(3),f("src",e.userInfo.image,ft)("alt",e.userInfo.name))},dependencies:[D,at,cn,dn],styles:['.hero-section[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:60vh;width:100%;max-width:1400px;margin:0 auto}.hero-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:4rem}@media(max-width:968px){.hero-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:2rem}}.hero-grid[_ngcontent-%COMP%]{align-items:center;width:100%}.hero-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:0}.hero-name[_ngcontent-%COMP%]{font-size:clamp(2.5rem,6vw,3.5rem);font-weight:700;color:#c9d1d9;margin:0 0 1rem;line-height:1.2;font-family:Courier New,Consolas,Monaco,monospace}.typed-text[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2e5684,#2f6c8f);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.cursor[_ngcontent-%COMP%]{color:#2e5684;animation:_ngcontent-%COMP%_blink 1s step-end infinite}.hero-role[_ngcontent-%COMP%]{font-size:1.75rem;color:#7ee787;margin-bottom:1.5rem;font-weight:500;font-family:Courier New,Consolas,Monaco,monospace}.hero-description[_ngcontent-%COMP%]{color:#8b949e;font-size:1.1rem;line-height:1.7;margin:0 0 2.5rem;font-family:Segoe UI,system-ui,sans-serif}@media(max-width:768px){.hero-description[_ngcontent-%COMP%]{font-size:.95rem}}.cta-buttons[_ngcontent-%COMP%]{display:flex;gap:1rem;margin-bottom:2.5rem;flex-wrap:wrap}.cta-buttons[_ngcontent-%COMP%]     .p-button{font-family:Segoe UI,system-ui,sans-serif;font-weight:500;padding:.75rem 1.5rem}@media(max-width:768px){.cta-buttons[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.cta-buttons[_ngcontent-%COMP%]     .p-button{width:100%;max-width:300px;justify-content:center}}.social-links[_ngcontent-%COMP%]{display:flex;gap:1rem}.social-icon[_ngcontent-%COMP%]{width:52px;height:52px;border:1px solid #30363d;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#8b949e;font-size:1.5rem;text-decoration:none;transition:all .3s ease}.social-icon[_ngcontent-%COMP%]:hover{background:#21262d;border-color:#58a6ff;color:#58a6ff;transform:translateY(-3px)}.hero-image[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}@media(max-width:968px){.hero-image[_ngcontent-%COMP%]{order:-1}}.image-container[_ngcontent-%COMP%]{position:relative;width:100%;max-width:450px;aspect-ratio:1}.image-container[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-4px;background:linear-gradient(135deg,#2e5684,#7ee787,#58a6ff);border-radius:50%;z-index:-1;animation:_ngcontent-%COMP%_rotate 3s linear infinite}.profile-image[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;object-fit:cover;border:4px solid #0d1117;box-shadow:0 8px 32px #00000080;transition:all .3s ease}.profile-image[_ngcontent-%COMP%]:hover{transform:scale(1.05)}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_blink{0%,50%{opacity:1}51%,to{opacity:0}}']})};function Zn(o,r){o&1&&y(0,"div",10)}function Kn(o,r){if(o&1&&(a(0,"span",13),c(1),l()),o&2){let t=P().$implicit;g(),O(t.name)}}function to(o,r){if(o&1&&(a(0,"div",11),y(1,"i"),E(2,Kn,2,1,"span",12),l()),o&2){let t=r.$implicit,e=P();st("xl",t.size==="xl")("lg",t.size==="lg")("md",t.size==="md")("sm",t.size==="sm")("mobile",e.isMobile),f("ngStyle",e.getCardStyle(t)),g(),k(t.icon),g(),f("ngIf",!e.isMobile)}}var Ht=class o{cards=gn;circles=[1,2,3,4];translateX=0;translateY=0;isMobile=window.innerWidth<=768;onResize(){this.isMobile=window.innerWidth<=768}onMouseMove(r){let t=window.innerWidth/2,e=window.innerHeight/2;this.translateX=(r.clientX-t)/t*-10,this.translateY=(r.clientY-e)/e*-8}getSceneStyle(){return{transform:`translate(${this.translateX}px, ${this.translateY}px)`}}getCardStyle(r){let t=this.isMobile?{xl:"48px",lg:"40px",md:"34px",sm:"28px"}:{xl:"110px",lg:"90px",md:"74px",sm:"58px"},e=this.isMobile?{xl:"1.2rem",lg:"1rem",md:"0.85rem",sm:"0.7rem"}:{xl:"2.8rem",lg:"2.2rem",md:"1.75rem",sm:"1.4rem"};return{left:r.left+"%",top:r.top+"%","--glow":r.glow,"--float":r.float+"px","--card-size":t[r.size],"--icon-size":e[r.size],"animation-duration":r.duration+"s","animation-delay":r.delay+"s","z-index":r.z}}trackByName(r,t){return t.name}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["app-tech-collage"]],hostBindings:function(t,e){t&1&&L("resize",function(){return e.onResize()},ue)("mousemove",function(i){return e.onMouseMove(i)})},decls:10,vars:4,consts:[[1,"collage-host",3,"mousemove"],[1,"bg-grid"],[1,"bg-vignette"],[1,"scene",3,"ngStyle"],[1,"cross-lines"],[1,"circles"],["class","circle",4,"ngFor","ngForOf"],[1,"center-node"],[1,"cn-dot"],["class","card",3,"xl","lg","md","sm","mobile","ngStyle",4,"ngFor","ngForOf","ngForTrackBy"],[1,"circle"],[1,"card",3,"ngStyle"],["class","card-name",4,"ngIf"],[1,"card-name"]],template:function(t,e){t&1&&(a(0,"div",0),L("mousemove",function(i){return e.onMouseMove(i)}),y(1,"div",1)(2,"div",2),a(3,"div",3),y(4,"div",4),a(5,"div",5),E(6,Zn,1,0,"div",6),l(),a(7,"div",7),y(8,"div",8),l(),E(9,to,3,14,"div",9),l()()),t&2&&(g(3),f("ngStyle",e.getSceneStyle()),g(3),f("ngForOf",e.circles),g(3),f("ngForOf",e.cards)("ngForTrackBy",e.trackByName))},dependencies:[D,at,lt,Dt],styles:['[_nghost-%COMP%]{display:block;width:100%}.collage-host[_ngcontent-%COMP%]{position:relative;width:100%;height:700px;display:flex;align-items:center;justify-content:center;overflow:hidden}@media(max-width:768px){.collage-host[_ngcontent-%COMP%]{height:360px}}@media(max-width:480px){.collage-host[_ngcontent-%COMP%]{height:300px}}.scene[_ngcontent-%COMP%]{position:relative;width:640px;height:640px;transition:transform .08s ease-out;z-index:5}@media(max-width:768px){.scene[_ngcontent-%COMP%]{width:340px;height:340px}}@media(max-width:480px){.scene[_ngcontent-%COMP%]{width:280px;height:280px}}.circles[_ngcontent-%COMP%]{position:absolute;inset:0;pointer-events:none;z-index:0}.circle[_ngcontent-%COMP%]{position:absolute;border-radius:50%;border:1px solid rgba(88,166,255,.07);top:50%;left:50%;transform:translate(-50%,-50%);animation:_ngcontent-%COMP%_circle-pulse 4s ease-in-out infinite alternate}.circle[_ngcontent-%COMP%]:nth-child(1){width:160px;height:160px}.circle[_ngcontent-%COMP%]:nth-child(2){width:300px;height:300px;animation-delay:-1s}.circle[_ngcontent-%COMP%]:nth-child(3){width:460px;height:460px;animation-delay:-2s}.circle[_ngcontent-%COMP%]:nth-child(4){width:610px;height:610px;animation-delay:-3s}@media(max-width:768px){.circle[_ngcontent-%COMP%]:nth-child(1){width:80px;height:80px}.circle[_ngcontent-%COMP%]:nth-child(2){width:150px;height:150px}.circle[_ngcontent-%COMP%]:nth-child(3){width:230px;height:230px}.circle[_ngcontent-%COMP%]:nth-child(4){width:310px;height:310px}}@keyframes _ngcontent-%COMP%_circle-pulse{0%{opacity:.4}to{opacity:.9}}.cross-lines[_ngcontent-%COMP%]{position:absolute;inset:0;pointer-events:none;z-index:0}.cross-lines[_ngcontent-%COMP%]:before, .cross-lines[_ngcontent-%COMP%]:after{content:"";position:absolute;background:#58a6ff12}.cross-lines[_ngcontent-%COMP%]:before{width:1px;top:0;bottom:0;left:50%}.cross-lines[_ngcontent-%COMP%]:after{height:1px;left:0;right:0;top:50%}.center-node[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:5;pointer-events:none;display:flex;flex-direction:column;gap:.25rem;align-items:center}.cn-dot[_ngcontent-%COMP%]{width:6px;height:6px;background:#58a6ff80;border-radius:50%;box-shadow:0 0 10px #58a6ff99;animation:_ngcontent-%COMP%_dot-pulse 2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_dot-pulse{0%,to{transform:scale(1);opacity:.6}50%{transform:scale(1.7);opacity:1}}.card[_ngcontent-%COMP%]{position:absolute;width:var(--card-size);height:var(--card-size);transform:translate(-50%,-50%);border-radius:18px;display:flex;flex-direction:column;gap:5px;align-items:center;justify-content:center;cursor:pointer;animation:_ngcontent-%COMP%_float-card ease-in-out infinite alternate;background:#ffffff0a;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.08);-webkit-mask-image:radial-gradient(ellipse 72% 72% at 50% 50%,black 38%,transparent 100%);mask-image:radial-gradient(ellipse 72% 72% at 50% 50%,black 38%,transparent 100%);transition:all .35s cubic-bezier(.34,1.56,.64,1),box-shadow .3s,border-color .3s,background .3s}.card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block;font-size:var(--icon-size);line-height:1;pointer-events:none;transition:all .3s ease;filter:brightness(.88)}.card[_ngcontent-%COMP%]   .card-name[_ngcontent-%COMP%]{font-size:.52rem;color:#ffffff73;font-family:Courier New,Consolas,Monaco,monospace;letter-spacing:.3px;text-align:center;pointer-events:none;transition:color .3s;white-space:nowrap}.card.mobile[_ngcontent-%COMP%]{border-radius:10px;gap:0}.card[_ngcontent-%COMP%]:hover{-webkit-mask-image:none;mask-image:none;background:#ffffff1a;border-color:var(--glow, rgba(255, 255, 255, .3));box-shadow:0 0 22px var(--glow, rgba(255, 255, 255, .2)),0 8px 32px #00000080,inset 0 1px #ffffff14;transform:translate(-50%,-50%) scale(1.18)!important;z-index:9999!important}.card[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:scale(1.12);filter:brightness(1.25) drop-shadow(0 0 8px var(--glow, #fff))}.card[_ngcontent-%COMP%]:hover   .card-name[_ngcontent-%COMP%]{color:#fffffff2}@keyframes _ngcontent-%COMP%_float-card{0%{transform:translate(-50%,-50%) translateY(0)}to{transform:translate(-50%,-50%) translateY(var(--float, -8px))}}']})};var Vt=class o{static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["app-tech-stack"]],decls:69,vars:0,consts:[[1,"tech-stack-section"],[1,"section-header"],[1,"section-eyebrow"],[1,"pi","pi-code"],[1,"section-heading"],[1,"tech-grid"],[1,"col-collage"],[1,"col-info"],[1,"section-desc"],[1,"highlight"],[1,"categories"],[1,"category"],[1,"cat-dot","frontend"],[1,"cat-label"],[1,"cat-techs"],[1,"cat-dot","backend"],[1,"cat-dot","database"],[1,"cat-dot","tools"]],template:function(t,e){t&1&&(a(0,"section",0)(1,"div",1)(2,"span",2),y(3,"i",3),a(4,"h2",4),c(5,"Tech Stack"),l()()(),a(6,"div",5)(7,"div",6),y(8,"app-tech-collage"),l(),a(9,"div",7)(10,"p",8),c(11," Trabajo con un stack completo que abarca desde interfaces modernas hasta arquitecturas de backend robustas. Me especializo en "),a(12,"span",9),c(13,"Angular"),l(),c(14," y "),a(15,"span",9),c(16,"TypeScript"),l(),c(17," en el frontend, con experiencia s\xF3lida en APIs REST y GraphQL con "),a(18,"span",9),c(19,"Node.js"),l(),c(20,", "),a(21,"span",9),c(22,"Spring Boot"),l(),c(23," y "),a(24,"span",9),c(25,"ASP.NET Core"),l(),c(26,". "),l(),a(27,"p",8),c(28," En base de datos manejo tanto relacionales como no relacionales \u2014 "),a(29,"span",9),c(30,"SQL Server"),l(),c(31,", "),a(32,"span",9),c(33,"MySQL"),l(),c(34," y "),a(35,"span",9),c(36,"MongoDB"),l(),c(37,". El dise\xF1o UI/UX con "),a(38,"span",9),c(39,"Figma"),l(),c(40," y el control de versiones con "),a(41,"span",9),c(42,"GitHub"),l(),c(43," son parte de mi flujo diario. "),l(),a(44,"div",10)(45,"div",11),y(46,"span",12),a(47,"span",13),c(48,"Frontend"),l(),a(49,"span",14),c(50,"Angular \xB7 TypeScript \xB7 SCSS"),l()(),a(51,"div",11),y(52,"span",15),a(53,"span",13),c(54,"Backend"),l(),a(55,"span",14),c(56,"Node.js \xB7 Spring Boot \xB7 ASP.NET"),l()(),a(57,"div",11),y(58,"span",16),a(59,"span",13),c(60,"Database"),l(),a(61,"span",14),c(62,"SQL Server \xB7 MySQL \xB7 MongoDB"),l()(),a(63,"div",11),y(64,"span",17),a(65,"span",13),c(66,"Tools"),l(),a(67,"span",14),c(68,"Figma \xB7 GitHub \xB7 Arduino"),l()()()()()())},dependencies:[D,Ht],styles:[".tech-stack-section[_ngcontent-%COMP%]{width:100%;max-width:1400px;margin:0 auto;display:flex;flex-direction:column;gap:3rem}.section-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem;align-items:center;text-align:center}.section-eyebrow[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.5rem;font-family:Courier New,Consolas,Monaco,monospace;font-size:.75rem;color:#58a6ff;text-transform:uppercase;letter-spacing:4px}.section-eyebrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.75rem}.section-heading[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:#c9d1d9;font-family:Courier New,Consolas,Monaco,monospace;margin:0;line-height:1.2}@media(max-width:768px){.section-heading[_ngcontent-%COMP%]{font-size:2rem}}.tech-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:8rem;align-items:center}@media(max-width:968px){.tech-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1.5rem}}.col-collage[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}@media(max-width:968px){.col-collage[_ngcontent-%COMP%]{order:2;width:100%;overflow:hidden;margin-top:2rem}}@media(max-width:768px){.col-collage[_ngcontent-%COMP%]{margin-top:1.5rem}}.col-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}@media(max-width:968px){.col-info[_ngcontent-%COMP%]{order:1}}.section-desc[_ngcontent-%COMP%]{font-size:.95rem;color:#8b949e;font-family:Segoe UI,system-ui,sans-serif;line-height:1.8;margin:0}.highlight[_ngcontent-%COMP%]{color:#58a6ff;font-weight:500}.categories[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem;padding-top:.5rem}.category[_ngcontent-%COMP%]{display:grid;grid-template-columns:10px 90px 1fr;align-items:center;gap:.75rem}.cat-dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;flex-shrink:0}.cat-dot.frontend[_ngcontent-%COMP%]{background:#58a6ff;box-shadow:0 0 6px #58a6ff}.cat-dot.backend[_ngcontent-%COMP%]{background:#7ee787;box-shadow:0 0 6px #7ee787}.cat-dot.database[_ngcontent-%COMP%]{background:gold;box-shadow:0 0 6px gold}.cat-dot.tools[_ngcontent-%COMP%]{background:#e10098;box-shadow:0 0 6px #e10098}.cat-label[_ngcontent-%COMP%]{font-family:Courier New,Consolas,Monaco,monospace;font-size:.85rem;font-weight:500;color:#c9d1d9}.cat-techs[_ngcontent-%COMP%]{font-family:Courier New,Consolas,Monaco,monospace;font-size:.85rem;color:#8b949e}"]})};function eo(o,r){if(o&1&&(a(0,"span",31),c(1),l()),o&2){let t=r.$implicit;g(),O(t)}}function no(o,r){if(o&1&&(a(0,"span",32),c(1),l()),o&2){let t=P().$implicit;g(),qt(" +",t.technologies.length-4," ")}}function oo(o,r){if(o&1){let t=ge();a(0,"div",13),L("click",function(){let n=se(t).$implicit,i=P();return ae(i.goToProject(n))}),a(1,"div",14),y(2,"img",15),a(3,"div",16)(4,"span",17),y(5,"i",18),c(6," Ver proyecto "),l()(),a(7,"div",19),y(8,"span",20),c(9," En desarrollo "),l()(),a(10,"div",21)(11,"div",22)(12,"span",23),y(13,"i",24),c(14),l(),a(15,"span",25),c(16),l()(),a(17,"h3",26),c(18),l(),a(19,"p",27),c(20),l(),a(21,"div",28),E(22,eo,2,1,"span",29)(23,no,2,1,"span",30),l()()()}if(o&2){let t=r.$implicit,e=r.index,n=P();Bt("--accent",n.getCategoryColor(e)),g(2),f("src",t.images[0],ft)("alt",t.title),g(12),qt(" ",t.date," "),g(2),O(t.client),g(2),O(t.title),g(2),O(t.description),g(2),f("ngForOf",t.technologies.slice(0,4)),g(),f("ngIf",t.technologies.length>4)}}var Rt=class o{constructor(r){this.router=r}recentProjects=De.flatMap(r=>r.projects).slice(0,2);goToProjects(){this.router.navigate(["/projects"])}goToProject(r){this.router.navigate(["/projects"],{queryParams:{highlight:r.id}})}getCategoryColor(r){return["#58a6ff","#7ee787"][r]??"#58a6ff"}static \u0275fac=function(t){return new(t||o)(et(Nt))};static \u0275cmp=w({type:o,selectors:[["app-recent-projects"]],decls:20,vars:1,consts:[[1,"recent-section"],[1,"section-header"],[1,"header-left"],[1,"eyebrow"],[1,"pi","pi-code"],[1,"section-title"],[1,"btn-more",3,"click"],[1,"pi","pi-arrow-right"],[1,"projects-grid"],["class","project-card",3,"--accent","click",4,"ngFor","ngForOf"],[1,"bottom-cta"],[1,"btn-all",3,"click"],[1,"pi","pi-folder-open"],[1,"project-card",3,"click"],[1,"card-image"],[3,"src","alt"],[1,"card-overlay"],[1,"overlay-label"],[1,"pi","pi-external-link"],[1,"card-status"],[1,"status-dot"],[1,"card-body"],[1,"card-meta"],[1,"card-date"],[1,"pi","pi-calendar"],[1,"card-client"],[1,"card-title"],[1,"card-desc"],[1,"card-techs"],["class","tech-badge",4,"ngFor","ngForOf"],["class","tech-more",4,"ngIf"],[1,"tech-badge"],[1,"tech-more"]],template:function(t,e){t&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"span",3),y(4,"i",4),c(5," En desarrollo "),l(),a(6,"h2",5),c(7,"Proyectos Recientes"),l()(),a(8,"button",6),L("click",function(){return e.goToProjects()}),a(9,"span"),c(10,"Ver todos"),l(),y(11,"i",7),l()(),a(12,"div",8),E(13,oo,24,10,"div",9),l(),a(14,"div",10)(15,"button",11),L("click",function(){return e.goToProjects()}),y(16,"i",12),a(17,"span"),c(18,"Ver todos los proyectos"),l(),y(19,"i",7),l()()()),t&2&&(g(13),f("ngForOf",e.recentProjects))},dependencies:[D,at,lt],styles:[".recent-section[_ngcontent-%COMP%]{width:100%;max-width:1400px;margin:0 auto;display:flex;flex-direction:column;gap:2.5rem}.section-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1rem}.header-left[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.eyebrow[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;justify-content:flex-start;gap:.5rem;font-family:Courier New,Consolas,Monaco,monospace;font-size:.75rem;color:#58a6ff;text-transform:uppercase;letter-spacing:4px}.eyebrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.75rem}.section-title[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:#c9d1d9;font-family:Courier New,Consolas,Monaco,monospace;margin:0}@media(max-width:768px){.section-title[_ngcontent-%COMP%]{font-size:2rem}}.btn-more[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.5rem;background:transparent;border:1px solid #30363d;color:#8b949e;font-family:Courier New,Consolas,Monaco,monospace;font-size:.85rem;padding:.5rem 1.25rem;border-radius:8px;cursor:pointer;transition:all .3s ease;white-space:nowrap}.btn-more[_ngcontent-%COMP%]:hover{border-color:#58a6ff;color:#58a6ff;transform:translate(4px)}@media(max-width:768px){.btn-more[_ngcontent-%COMP%]{display:none}}.projects-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:2rem}@media(max-width:768px){.projects-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1.5rem}}.project-card[_ngcontent-%COMP%]{background:#161b22;border:1px solid #30363d;border-radius:12px;transition:all .3s ease}.project-card[_ngcontent-%COMP%]:hover{border-color:#58a6ff;box-shadow:0 8px 24px #58a6ff26}.project-card[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;border-left:3px solid var(--accent, #58a6ff)}.project-card[_ngcontent-%COMP%]:hover{transform:translateY(-6px);border-color:var(--accent, #58a6ff);box-shadow:0 12px 32px #0006}.project-card[_ngcontent-%COMP%]:hover   .card-overlay[_ngcontent-%COMP%]{opacity:1}.project-card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.05)}.card-image[_ngcontent-%COMP%]{position:relative;width:100%;height:220px;overflow:hidden;background:#21262d}.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .4s ease}@media(max-width:768px){.card-image[_ngcontent-%COMP%]{height:180px}}.card-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:#0009;display:flex;align-items:center;justify-content:center;opacity:0;transition:all .3s ease}.card-overlay[_ngcontent-%COMP%]   .overlay-label[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.5rem;color:#fff;font-family:Courier New,Consolas,Monaco,monospace;font-size:.95rem;font-weight:500}.card-overlay[_ngcontent-%COMP%]   .overlay-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.1rem}.card-status[_ngcontent-%COMP%]{position:absolute;top:.75rem;right:.75rem;display:flex;align-items:center;justify-content:center;gap:.5rem;background:#161b22eb;border:1px solid #30363d;border-radius:20px;padding:.25rem .75rem;font-family:Courier New,Consolas,Monaco,monospace;font-size:.7rem;color:#7ee787;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.status-dot[_ngcontent-%COMP%]{width:6px;height:6px;background:#7ee787;border-radius:50%;animation:_ngcontent-%COMP%_pulse-dot 2s infinite}@keyframes _ngcontent-%COMP%_pulse-dot{0%,to{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}.card-body[_ngcontent-%COMP%]{padding:1.5rem;display:flex;flex-direction:column;gap:1rem}.card-meta[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem}.card-date[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.25rem;font-family:Courier New,Consolas,Monaco,monospace;font-size:.7rem;color:#6e7681}.card-date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.7rem;color:#58a6ff}.card-client[_ngcontent-%COMP%]{font-family:Courier New,Consolas,Monaco,monospace;font-size:.7rem;color:var(--accent, #58a6ff);font-weight:500}.card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;color:#fff;font-family:Courier New,Consolas,Monaco,monospace;margin:0}@media(max-width:768px){.card-title[_ngcontent-%COMP%]{font-size:1.25rem}}.card-desc[_ngcontent-%COMP%]{font-size:.85rem;color:#8b949e;font-family:Segoe UI,system-ui,sans-serif;line-height:1.7;margin:0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.card-techs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem}.tech-badge[_ngcontent-%COMP%]{background:#21262d;border:1px solid #30363d;color:#58a6ff;padding:.25rem .75rem;border-radius:8px;font-size:.8rem;font-family:Courier New,Consolas,Monaco,monospace;transition:all .3s ease}.tech-badge[_ngcontent-%COMP%]:hover{background:#30363d;border-color:#58a6ff;transform:translateY(-2px)}.tech-badge[_ngcontent-%COMP%]{font-size:.7rem;padding:2px .5rem}.tech-more[_ngcontent-%COMP%]{font-family:Courier New,Consolas,Monaco,monospace;font-size:.7rem;color:#6e7681;padding:2px .5rem;border:1px dashed #30363d;border-radius:8px;display:flex;align-items:center;justify-content:center}.bottom-cta[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding-top:1rem}.btn-all[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.75rem;background:transparent;border:1px solid #30363d;color:#8b949e;font-family:Courier New,Consolas,Monaco,monospace;font-size:.9rem;padding:1rem 2.5rem;border-radius:8px;cursor:pointer;transition:all .3s ease}.btn-all[_ngcontent-%COMP%]:hover{border-color:#58a6ff;color:#58a6ff;box-shadow:0 0 20px #58a6ff4d}.btn-all[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]:last-child{transform:translate(4px)}.btn-all[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:transform .3s ease}@media(max-width:768px){.btn-all[_ngcontent-%COMP%]{width:100%;justify-content:center}}"]})};var bn=class o{static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["app-home"]],decls:4,vars:0,consts:[[1,"home-container"]],template:function(t,e){t&1&&(a(0,"div",0),y(1,"app-hero")(2,"app-tech-stack")(3,"app-recent-projects"),l())},dependencies:[jt,Vt,Rt],styles:[".home-container[_ngcontent-%COMP%]{min-height:calc(100vh - 80px);background:#0d1117;color:#c9d1d9;padding:4rem 2rem;display:flex;flex-direction:column;gap:4rem}@media(max-width:768px){.home-container[_ngcontent-%COMP%]{padding:2rem 1rem;gap:3rem}}"]})};export{bn as Home};
