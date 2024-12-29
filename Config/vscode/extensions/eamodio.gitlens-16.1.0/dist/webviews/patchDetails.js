var e={47:(e,t,n)=>{const o=n(602),r=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,a=/[\x00-\x1F\x7F-\x9F]{1,1000}/y,l=/(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F)(?:\u200d(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F))*/uy,c=/[\x20-\x7E\xA0-\xFF]{1,1000}/y,d=/\p{M}+/gu,h={limit:1/0,ellipsis:""},p=(e,t={},n={})=>{const u=t.limit??1/0,f=t.ellipsis??"",g=t?.ellipsisWidth??(f?p(f,h,n).width:0),m=n.ansiWidth??0,b=n.controlWidth??0,v=n.ambiguousWidth??1,y=n.emojiWidth??2,w=n.fullWidthWidth??2,x=n.regularWidth??1,k=n.wideWidth??2;let _=0,A=0,C=e.length,S=0,E=!1,P=C,R=Math.max(0,u-g),T=0,O=0,M=0,L=0;e:for(;;){if(O>T||A>=C&&A>_){const t=e.slice(T,O)||e.slice(_,A);S=0;for(const e of t.replaceAll(d,"")){const t=e.codePointAt(0)||0;if(L=(0,o.isFullWidth)(t)?w:(0,o.isWide)(t)?k:v!==x&&(0,o.isAmbiguous)(t)?v:x,M+L>R&&(P=Math.min(P,Math.max(T,_)+S)),M+L>u){E=!0;break e}S+=e.length,M+=L}T=O=0}if(A>=C)break;if(c.lastIndex=A,c.test(e)){if(S=c.lastIndex-A,L=S*x,M+L>R&&(P=Math.min(P,A+Math.floor((R-M)/x))),M+L>u){E=!0;break}M+=L,T=_,O=A,A=_=c.lastIndex}else if(r.lastIndex=A,r.test(e)){if(M+m>R&&(P=Math.min(P,A)),M+m>u){E=!0;break}M+=m,T=_,O=A,A=_=r.lastIndex}else if(a.lastIndex=A,a.test(e)){if(S=a.lastIndex-A,L=S*b,M+L>R&&(P=Math.min(P,A+Math.floor((R-M)/b))),M+L>u){E=!0;break}M+=L,T=_,O=A,A=_=a.lastIndex}else if(l.lastIndex=A,l.test(e)){if(M+y>R&&(P=Math.min(P,A)),M+y>u){E=!0;break}M+=y,T=_,O=A,A=_=l.lastIndex}else A+=1}return{width:E?R:M,index:E?P:C,truncated:E,ellipsed:E&&u>=g}}},602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0;t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109;t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510;t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),void 0!==n&&Object.defineProperty(n,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var o={};n.d(o,{I:()=>PatchDetailsApp,w:()=>kl});class IpcCall{constructor(e,t,n=!1,o=!1){this.scope=e,this.reset=n,this.pack=o,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcRequest extends IpcCall{constructor(e,t,n,o){super(e,t,n,o),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}}class IpcNotification extends IpcCall{}const r=new IpcCommand("core","webview/ready"),a=new IpcCommand("core","webview/focus/changed"),l=new IpcCommand("core","command/execute"),c=(new IpcCommand("core","configuration/update"),new IpcCommand("core","telemetry/sendEvent"));function d(e){return null!=e&&"object"==typeof e&&"__ipc"in e&&"promise"===e.__ipc&&"id"in e&&"string"==typeof e.id&&"method"in e&&"string"==typeof e.method}const h=new IpcNotification("core","ipc/promise/settled"),p=(new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const u="patchDetails",f=new IpcCommand(u,"apply"),g=new IpcCommand(u,"archive"),m=new IpcCommand(u,"create"),b=(new IpcCommand(u,"openInGraph"),new IpcCommand(u,"checked")),v=new IpcCommand(u,"selectRepo"),y=new IpcCommand(u,"selectBase"),w=new IpcCommand(u,"file/actions/execute"),x=new IpcCommand(u,"file/open"),k=new IpcCommand(u,"file/openOnRemote"),_=new IpcCommand(u,"file/compareWorking"),A=new IpcCommand(u,"file/comparePrevious"),C=new IpcCommand(u,"preferences/update"),S=new IpcCommand(u,"switchMode"),E=new IpcCommand(u,"cloud/copyLink"),P=new IpcCommand(u,"local/createPatch"),R=new IpcCommand(u,"create/repository/check"),T=new IpcCommand(u,"update/create/metadata"),O=new IpcCommand(u,"update/draft/metadata"),M=new IpcCommand(u,"update/draft/permissions"),L=new IpcCommand(u,"update/users"),D=new IpcCommand(u,"update/userSelection"),I=new IpcRequest(u,"explain"),B=new IpcRequest(u,"generate"),N=new IpcNotification(u,"didChange",!0),j=new IpcNotification(u,"create/didChange"),U=new IpcNotification(u,"draft/didChange"),H=new IpcNotification(u,"preferences/didChange"),F=new IpcNotification(u,"draft/didChangeRepository");new IpcNotification(u,"org/settings/didChange");function q(e,t,n){let o,r,a,l,c;function d(){const e=Date.now();if(function(e){const n=e-(r??0);return null==r||n>=t||n<0}(e))h();else{c=setTimeout(d,t-(e-(r??0)))}}function h(){return c=void 0,o?function(){const t=o,n=a;return o=a=void 0,l=e.apply(n,t),l}():(o=void 0,a=void 0,l)}function p(...e){const h=Date.now();return o=null!=n&&o?n(o,e):e,a=this,r=h,null==c&&(c=setTimeout(d,t)),l}return p.cancel=function(){null!=c&&clearTimeout(c),o=void 0,r=void 0,a=void 0,c=void 0},p.flush=function(){return null==c?l:(clearTimeout(c),h())},p.pending=function(){return null!=c},p}const V=/\(([\s\S]*)\)/,W=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,G=/\s?=.*$/;class context_request_event_s extends Event{constructor(e,t,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=n??!1}}class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}}class context_provider_e extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class i extends value_notifier_s{constructor(e,t,n){super(void 0!==t.context?t.initialValue:n),this.onContextRequest=e=>{const t=e.composedPath()[0];e.context===this.context&&t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{const t=e.composedPath()[0];if(e.context!==this.context||t===this.host)return;const n=new Set;for(const[e,{consumerHost:t}]of this.subscriptions)n.has(e)||(n.add(e),t.dispatchEvent(new context_request_event_s(this.context,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context))}}function K(e){const t=.001*performance.now();let n=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(n-=e[0],o-=e[1],o<0&&(n--,o+=1e9)),[n,o]}function Z(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const Y=Z(),X=new Map;function J(e){X.delete(e)}function ee(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} → ${e.toString(16).padStart(5)}]`}function te(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};const n=t?Y.current:void 0,o=Y.next();return{scopeId:o,prevScopeId:n,prefix:`${ee(o,n)} ${e}`}}Error;function ie(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;n(47);var ne=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(ne||{});Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));const oe="utm_source=gitlens-extension&utm_medium=in-app-links",re=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${oe}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${oe}`,graph:`https://gitkraken.com/solutions/commit-graph?${oe}`,launchpad:`https://gitkraken.com/solutions/launchpad?${oe}`,platform:`https://gitkraken.com/devex?${oe}`,pricing:`https://gitkraken.com/gitlens/pricing?${oe}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${oe}`,security:`https://help.gitkraken.com/gitlens/security?${oe}`,workspaces:`https://gitkraken.com/solutions/workspaces?${oe}`,cli:`https://gitkraken.com/cli?${oe}`,browserExtension:`https://gitkraken.com/browser-extension?${oe}`,desktop:`https://gitkraken.com/git-client?${oe}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${oe}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${oe}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${oe}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${oe}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${oe}`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}#streamline-collaboration`}),{fromCharCode:se}=String;new TextEncoder;function ae(e){const[t,n]=K(e);return 1e3*t+Math.floor(n/1e6)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);const le=Symbol("logInstanceNameFn");function ce(e){return function(e,t=!1){let n,o,r,a,l,c=0,d=!1,h=!1,p=!0;null!=e&&({args:n,if:o,enter:r,exit:a,prefix:l,logThreshold:c=0,scoped:d=!0,singleLine:h=!1,timed:p=!0}=e);c>0&&(h=!0,p=!0);p&&(d=!0);const u=pe.isDebugging,f=t?pe.debug:pe.log,g=u?"debug":"info";return(e,t,m)=>{let b,v;if("function"==typeof m.value?(b=m.value,v="value"):"function"==typeof m.get&&(b=m.get,v="get"),null==b||null==v)throw new Error("Not supported");const y=!1!==n?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(W,"")||t,t=t.slice(0,t.indexOf("{"));let n=t.indexOf("("),o=t.indexOf(")");n=n>=0?n+1:0,o=o>0?o:t.indexOf("="),t=t.slice(n,o),t=`(${t})`;const r=V.exec(t);return null!=r?r[1].split(",").map((e=>e.trim().replace(G,""))):[]}(b):[];m[v]=function(...e){if(!u&&!pe.enabled(g)||null!=o&&!o.apply(this,e))return b.apply(this,e);const m=Y.current,v=Y.next(),w=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let n=t?.name??"";const o=n.indexOf("_");n=-1===o?n:n.substring(o+1),null!=t?.[le]&&(n=t[le](e,n));return n}(this):void 0;let x,k=w?d?`${ee(v,m)} ${w}.${t}`:`${w}.${t}`:t;null!=l&&(k=l({id:v,instance:this,instanceName:w??"",name:t,prefix:k},...e)),d&&(x=function(e,t){return t={prevScopeId:Y.current,...t},X.set(e,t),t}(v,{scopeId:v,prevScopeId:m,prefix:k}));const _=null!=r?r(...e):"";let A;if(!1===n||0===e.length)A="",h||f.call(pe,`${k}${_}`);else{let t;A="";let o,r,a,l=-1;for(a of e){if(o=y[++l],t=n?.[l],null!=t){if("boolean"==typeof t)continue;if(A.length>0&&(A+=", "),"string"==typeof t){A+=t;continue}r=String(t(a))}else A.length>0&&(A+=", "),r=pe.toLoggable(a);A+=o?`${o}=${r}`:r}h||f.call(pe,A?`${k}${_}(${A})`:`${k}${_}`)}if(h||p||null!=a){const t=p?K():void 0,n=e=>{const n=void 0!==t?` [${ae(t)}ms]`:"";h?pe.error(e,A?`${k}${_}(${A})`:`${k}${_}`,x?.exitDetails?`failed${x.exitDetails}${n}`:`failed${n}`):pe.error(e,k,x?.exitDetails?`failed${x.exitDetails}${n}`:`failed${n}`),d&&J(v)};let o;try{o=b.apply(this,e)}catch(e){throw n(e),e}const r=e=>{let n,o,r,l;if(null!=t?(n=ae(t),n>500?(o=pe.warn,r=` [*${n}ms] (slow)`):(o=f,r=` [${n}ms]`)):(r="",o=f),null!=a)if("function"==typeof a)try{l=a(e)}catch(e){l=`@log.exit error: ${e}`}else!0===a&&(l=`returned ${pe.toLoggable(e)}`);else x?.exitFailed?(l=x.exitFailed,o=(e,...t)=>pe.error(null,e,...t)):l="completed";h?(0===c||n>c)&&o.call(pe,A?`${k}${_}(${A}) ${l}${x?.exitDetails||""}${r}`:`${k}${_} ${l}${x?.exitDetails||""}${r}`):o.call(pe,A?`${k}(${A}) ${l}${x?.exitDetails||""}${r}`:`${k} ${l}${x?.exitDetails||""}${r}`),d&&J(v)};return null!=o&&ie(o)?o.then(r,n):r(o),o}return b.apply(this,e)}}}(e,!0)}const de=new Set(["accessToken","password","token"]),he=function(e,t){return de.has(e)?`<${t}>`:t},pe=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,n=!1){this.provider=e,this._isDebugging=n,this.logLevel=t}enabled(e){return this.level>=ue(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=ue(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let n;"string"==typeof e?n=e:(n=t.shift(),null!=e&&(n=`${e.prefix} ${n??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...n){if(this.level<1&&!this.isDebugging)return;let o;if(o=null==t||"string"==typeof t?t:`${t.prefix} ${n.shift()??""}`,null==o){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,n)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let n;"string"==typeof e?n=e:(n=t.shift(),null!=e&&(n=`${e.prefix} ${n??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let n;"string"==typeof e?n=e:(n=t.shift(),null!=e&&(n=`${e.prefix} ${n??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(t??=this.provider.sanitize??he,Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const n=this.provider.toLoggable?.(e);if(null!=n)return n;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const n=t.map((e=>this.toLoggable(e))).join(", ");return 0!==n.length?` — ${n}`:""}};function ue(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const fe={enabled:e=>pe.enabled(e)||pe.isDebugging,log:(e,t,n,...o)=>{switch(e){case"error":pe.error(void 0,t,n,...o);break;case"warn":pe.warn(t,n,...o);break;case"info":pe.log(t,n,...o);break;default:pe.debug(t,n,...o)}}};class LoggerContext{constructor(e){this.scope=te(e,void 0),pe.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?pe.log(this.scope,e,...t):pe.log(e,t.shift(),...t)}}class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(c,e)}dispose(){this.disposables.forEach((e=>e.dispose()))}}var ge;(ge||(ge={})).on=function(e,t,n,o){let r=!1;if("string"==typeof e){const a=function(t){const o=t?.target?.closest(e);null!=o&&n(t,o)};return document.addEventListener(t,a,o??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,a,o??!0))}}}const a=function(e){n(e,this)};return e.addEventListener(t,a,o??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,a,o??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...n){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:te(e??"",!1),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??fe,this._time=K(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;n.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...n):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=K(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=K(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[n,o]=K(this._time),r=1e3*n+Math.floor(o/1e6),a=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${a?`${a} `:""}[${r}ms]${e?.suffix??""}`)}}const me=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,n)=>{null==this.listeners&&(this.listeners=new LinkedList);const o=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=_Emitter._noop,this._disposed||o()}};return Array.isArray(n)&&n.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),n=t.next();!n.done;n=t.next())this._deliveryQueue.push([n.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};me._noop=function(){};let be=me;const ve={done:!0,value:void 0},ye=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};ye.Undefined=new ye(void 0);let we=ye;class LinkedList{constructor(){this._first=we.Undefined,this._last=we.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===we.Undefined}clear(){this._first=we.Undefined,this._last=we.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const n=new we(e);if(this._first===we.Undefined)this._first=n,this._last=n;else if(t){const e=this._last;this._last=n,n.prev=e,e.next=n}else{const e=this._first;this._first=n,n.next=e,e.prev=n}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(n))}}shift(){if(this._first===we.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===we.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==we.Undefined&&e.next!==we.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===we.Undefined&&e.next===we.Undefined?(this._first=we.Undefined,this._last=we.Undefined):e.next===we.Undefined?(this._last=this._last.prev,this._last.next=we.Undefined):e.prev===we.Undefined&&(this._first=this._first.next,this._first.prev=we.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===we.Undefined?ve:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==we.Undefined;t=t.next)e.push(t.element);return e}}var ke=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,Ae=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?_e(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&ke(t,n,a),a};let Ce;function Ee(){return Ce??=acquireVsCodeApi()}const Pe=Z();function Re(){return`webview:${Pe.next()}`}let Te=class{constructor(e){this.appName=e,this._onReceiveMessage=new be,this._pendingHandlers=new Map,this._api=Ee(),this._disposable=ge.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=X.get(Y.current),n=e.data;if(n.packed&&n.params instanceof Uint8Array){const o=function(e,t,...n){return(t?.provider??fe).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...n):void 0}(te(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,n.params=JSON.parse(this._textDecoder.decode(n.params)),o?.stop()}if(this.replaceIpcPromisesWithPromises(n.params),null==n.completionId)this._onReceiveMessage.fire(n);else{const e=Me(n.method,n.completionId);this._pendingHandlers.get(e)?.(n)}}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(const t in e){const n=e[t];d(n)?e[t]=this.getResponsePromise(n.method,n.id):this.replaceIpcPromisesWithPromises(n)}}sendCommand(e,t){const n=Re();this.postMessage({id:n,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const n=Re(),o=this.getResponsePromise(e.response.method,n);return this.postMessage({id:n,scope:e.scope,method:e.method,params:t,completionId:n}),o}getResponsePromise(e,t){return new Promise(((n,o)=>{const r=Me(e,t);let a;function l(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(r)}a=setTimeout((()=>{l.call(this),o(new Error(`Timed out waiting for completion of ${r}`))}),60*(pe.isDebugging?60:5)*1e3),this._pendingHandlers.set(r,(e=>{if(l.call(this),e.method===h.method){const t=e.params;"rejected"===t.status?queueMicrotask((()=>o(new Error(t.reason)))):queueMicrotask((()=>n(t.value)))}else queueMicrotask((()=>n(e.params)))}))}))}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var Oe;function Me(e,t){return`${e}|${t}`}Ae([ce({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],Te.prototype,"onMessageReceived",1),Ae([ce({args:{0:e=>e.method,1:!1}})],Te.prototype,"sendCommand",1),Ae([ce({args:{0:e=>e.method,1:!1,2:!1}})],Te.prototype,"sendRequest",1),Ae([ce({args:{0:e=>`${e.id}, method=${e.method}`}})],Te.prototype,"postMessage",1),Te=Ae([(Oe=(e,t)=>`${e.appName}(${t})`,e=>{e[le]=Oe})],Te);const De="gl-telemetry-fired";function ze(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}class RGBA{constructor(e,t,n,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,n)),this.a=ze(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,n,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ze(Math.max(Math.min(1,t),0),3),this.l=ze(Math.max(Math.min(1,n),0),3),this.a=ze(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,n=e.g/255,o=e.b/255,r=e.a,a=Math.max(t,n,o),l=Math.min(t,n,o);let c=0,d=0;const h=(l+a)/2,p=a-l;if(p>0){switch(d=Math.min(h<=.5?p/(2*h):p/(2-2*h),1),a){case t:c=(n-o)/p+(n<o?6:0);break;case n:c=(o-t)/p+2;break;case o:c=(t-n)/p+4}c*=60,c=Math.round(c)}return new HSLA(c,d,h,r)}static _hue2rgb(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}static toRGBA(e){const t=e.h/360,{s:n,l:o,a:r}=e;let a,l,c;if(0===n)a=l=c=o;else{const e=o<.5?o*(1+n):o+n-o*n,r=2*o-e;a=HSLA._hue2rgb(r,e,t+1/3),l=HSLA._hue2rgb(r,e,t),c=HSLA._hue2rgb(r,e,t-1/3)}return new RGBA(Math.round(255*a),Math.round(255*l),Math.round(255*c),r)}}class HSVA{constructor(e,t,n,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ze(Math.max(Math.min(1,t),0),3),this.v=ze(Math.max(Math.min(1,n),0),3),this.a=ze(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,n=e.g/255,o=e.b/255,r=Math.max(t,n,o),a=r-Math.min(t,n,o),l=0===r?0:a/r;let c;return c=0===a?0:r===t?((n-o)/a%6+6)%6:r===n?(o-t)/a+2:(t-n)/a+4,new HSVA(Math.round(60*c),l,r,e.a)}static toRGBA(e){const{h:t,s:n,v:o,a:r}=e,a=o*n,l=a*(1-Math.abs(t/60%2-1)),c=o-a;let[d,h,p]=[0,0,0];return t<60?(d=a,h=l):t<120?(d=l,h=a):t<180?(h=a,p=l):t<240?(h=l,p=a):t<300?(d=l,p=a):t<=360&&(d=a,p=l),d=Math.round(255*(d+c)),h=Math.round(255*(h+c)),p=Math.round(255*(p+c)),new RGBA(d,h,p,r)}}function Ie(e,t){return t.getPropertyValue(e).trim()}const Ne=class _Color{static from(e){return e instanceof _Color?e:We(e)||_Color.red}static fromCssVariable(e,t){return We(Ie(e,t))||_Color.red}static fromHex(e){return Ke(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return ze(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new je(new RGBA(0,0,0,e.rgba.a));if(1===t)return new je(new RGBA(255,255,255,e.rgba.a));const n=e.getRelativeLuminance();let o=20;const r=(e,n)=>{const a=e.mix(n,.5),l=a.getRelativeLuminance();return Math.abs(t-l)<1e-7||!o--?a:l>t?r(e,a):r(a,n)},a=(n>t?r(je.black,e):r(e,je.white)).rgba;return new je(new RGBA(a.r,a.g,a.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),n=e.getRelativeLuminance();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:n,b:o,a:r}=this.rgba;return new _Color(new RGBA(t,n,o,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,n=this.rgba.a,o=t.a,r=n+o*(1-n);if(r<1e-6)return _Color.transparent;const a=this.rgba.r*n/r+t.r*o*(1-n)/r,l=this.rgba.g*n/r+t.g*o*(1-n)/r,c=this.rgba.b*n/r+t.b*o*(1-n)/r;return new _Color(new RGBA(a,l,c,r))}mix(e,t){return function(e,t,n){const o=e.rgba,r=t.rgba;return new je(new RGBA(o.r+n*(r.r-o.r),o.g+n*(r.g-o.g),o.b+n*(r.b-o.b),o.a+n*(r.a-o.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:n,b:o,a:r}=this.rgba;return new _Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-n),e.rgba.b-r*(e.rgba.b-o),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const n=1-e.rgba.a;return new _Color(new RGBA(n*t.rgba.r+e.rgba.a*e.rgba.r,n*t.rgba.g+e.rgba.a*e.rgba.g,n*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return qe(e);return Ue(e)}(this)),this._toString}static getLighterColor(e,t,n){if(e.isLighterThan(t))return e;n=n||.5;const o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return n=n*(r-o)/r,e.lighten(n)}static getDarkerColor(e,t,n){if(e.isDarkerThan(t))return e;n=n||.5;const o=e.getRelativeLuminance();return n=n*(o-t.getRelativeLuminance())/o,e.darken(n)}};Ne.white=new Ne(new RGBA(255,255,255,1)),Ne.black=new Ne(new RGBA(0,0,0,1)),Ne.red=new Ne(new RGBA(255,0,0,1)),Ne.blue=new Ne(new RGBA(0,0,255,1)),Ne.green=new Ne(new RGBA(0,255,0,1)),Ne.cyan=new Ne(new RGBA(0,255,255,1)),Ne.lightgrey=new Ne(new RGBA(211,211,211,1)),Ne.transparent=new Ne(new RGBA(0,0,0,0));let je=Ne;function Ue(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function Fe(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function qe(e){return`#${Fe(e.rgba.r)}${Fe(e.rgba.g)}${Fe(e.rgba.b)}`}const Ve=/^((?:rgb|hsl)a?)\((-?\d+(?:%|deg)?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function We(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===ne.Hash)return Ke(e);const t=Ve.exec(e);if(null==t)return null;const n=t[1];let o;switch(n){case"rgb":case"hsl":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(n){case"rgb":case"rgba":return new je(new RGBA(o[0],o[1],o[2],o[3]));case"hsl":case"hsla":return new je(new HSLA(o[0],o[1],o[2],o[3]))}return je.red}function Ke(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==ne.Hash)return null;switch(t){case 7:{const t=16*Ze(e.charCodeAt(1))+Ze(e.charCodeAt(2)),n=16*Ze(e.charCodeAt(3))+Ze(e.charCodeAt(4)),o=16*Ze(e.charCodeAt(5))+Ze(e.charCodeAt(6));return new je(new RGBA(t,n,o,1))}case 9:{const t=16*Ze(e.charCodeAt(1))+Ze(e.charCodeAt(2)),n=16*Ze(e.charCodeAt(3))+Ze(e.charCodeAt(4)),o=16*Ze(e.charCodeAt(5))+Ze(e.charCodeAt(6)),r=16*Ze(e.charCodeAt(7))+Ze(e.charCodeAt(8));return new je(new RGBA(t,n,o,r/255))}case 4:{const t=Ze(e.charCodeAt(1)),n=Ze(e.charCodeAt(2)),o=Ze(e.charCodeAt(3));return new je(new RGBA(16*t+t,16*n+n,16*o+o))}case 5:{const t=Ze(e.charCodeAt(1)),n=Ze(e.charCodeAt(2)),o=Ze(e.charCodeAt(3)),r=Ze(e.charCodeAt(4));return new je(new RGBA(16*t+t,16*n+n,16*o+o,(16*r+r)/255))}default:return null}}function Ze(e){switch(e){case ne.Digit0:return 0;case ne.Digit1:return 1;case ne.Digit2:return 2;case ne.Digit3:return 3;case ne.Digit4:return 4;case ne.Digit5:return 5;case ne.Digit6:return 6;case ne.Digit7:return 7;case ne.Digit8:return 8;case ne.Digit9:return 9;case ne.a:case ne.A:return 10;case ne.b:case ne.B:return 11;case ne.c:case ne.C:return 12;case ne.d:case ne.D:return 13;case ne.e:case ne.E:return 14;case ne.f:case ne.F:return 15}return 0}const Ye=new be,Qe=Ye.event;function Xe(e){const t=document.documentElement,n=window.getComputedStyle(t),o=document.body.classList,r=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),a=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),l=Ie("--vscode-editor-background",n);let c=Ie("--vscode-editor-foreground",n);return c||(c=Ie("--vscode-foreground",n)),{colors:{background:l,foreground:c},computedStyle:n,isLightTheme:r,isHighContrastTheme:a,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],n=Xe();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(n),t.push(Qe(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(e),this.log("opening..."),this._api=Ee(),this._hostIpc=new Te(this.appName),t.push(this._hostIpc),this._telemetry=new TelemetryContext(this._hostIpc),t.push(this._telemetry),new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),new i(document.body,{context:"telemetry",initialValue:this._telemetry}),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{Ye.fire(Xe(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===p.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(r,void 0),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(ge.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0}))),t.push(ge.on(window,De,(e=>{this._telemetry.sendEvent(e.detail)}))),this.log("opened")}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=q((e=>{this.sendCommand(a,e)}),150);this.bindDisposables.push(ge.on(document,"focusin",(t=>{const n=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===n||(this._focused=!0,this._inputFocused=n,e({focused:!0,inputFocused:n}))})),ge.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){this._logger.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}var tt={408:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),g=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||m}function w(){}function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=y.prototype;var k=x.prototype=new w;k.constructor=x,b(k,y.prototype),k.isPureReactComponent=!0;var _=Array.isArray,A=Object.prototype.hasOwnProperty,C={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,o){var r,a={},l=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)A.call(t,r)&&!S.hasOwnProperty(r)&&(a[r]=t[r]);var d=arguments.length-2;if(1===d)a.children=o;else if(1<d){for(var h=Array(d),p=0;p<d;p++)h[p]=arguments[p+2];a.children=h}if(e&&e.defaultProps)for(r in d=e.defaultProps)void 0===a[r]&&(a[r]=d[r]);return{$$typeof:n,type:e,key:l,ref:c,props:a,_owner:C.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,r,a,l){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var d=!1;if(null===e)d=!0;else switch(c){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case n:case o:d=!0}}if(d)return l=l(d=e),e=""===a?"."+T(d,0):a,_(l)?(r="",null!=e&&(r=e.replace(R,"$&/")+"/"),O(l,t,r,"",(function(e){return e}))):null!=l&&(P(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||d&&d.key===l.key?"":(""+l.key).replace(R,"$&/")+"/")+e)),t.push(l)),1;if(d=0,a=""===a?".":a+":",_(e))for(var h=0;h<e.length;h++){var p=a+T(c=e[h],h);d+=O(c,t,r,p,l)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),h=0;!(c=e.next()).done;)d+=O(c=c.value,t,r,p=a+T(c,h++),l);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return d}function M(e,t,n){if(null==e)return e;var o=[],r=0;return O(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},I={transition:null},B={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:I,ReactCurrentOwner:C};t.Children={map:M,forEach:function(e,t,n){M(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return M(e,(function(){t++})),t},toArray:function(e){return M(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=r,t.Profiler=l,t.PureComponent=x,t.StrictMode=a,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=b({},e.props),a=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=C.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(h in t)A.call(t,h)&&!S.hasOwnProperty(h)&&(r[h]=void 0===t[h]&&void 0!==d?d[h]:t[h])}var h=arguments.length-2;if(1===h)r.children=o;else if(1<h){d=Array(h);for(var p=0;p<h;p++)d[p]=arguments[p+2];r.children=d}return{$$typeof:n,type:e.type,key:a,ref:l,props:r,_owner:c}},t.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:h,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:L}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return D.current.useTransition()},t.version="18.2.0"},294:(e,t,n)=>{e.exports=n(408)}},lt={};function dt(e){var t=lt[e];if(void 0!==t)return t.exports;var n=lt[e]={exports:{}};return tt[e](n,n.exports,dt),n.exports}dt.d=(e,t)=>{for(var n in t)dt.o(t,n)&&!dt.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},dt.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var ht={};(()=>{dt.d(ht,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>Dt,ud:()=>Nt,wt:()=>jt,ne:()=>Ht,Ku:()=>Vt,FU:()=>Kt,XO:()=>di,Ze:()=>hi,K$:()=>pi,cX:()=>wi,Js:()=>xi,J9:()=>ki,si:()=>si,sg:()=>$i,hW:()=>Ai,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>Ci,WV:()=>le,h4:()=>ae,kZ:()=>se});const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;class s{constructor(e,t,o){if(this._$cssResult$=!0,o!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const n=this.t;if(t&&void 0===e){const t=void 0!==n&&1===n.length;t&&(e=o.get(n)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&o.set(n,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1]),e[0]);return new s(o,e,n)},a=(n,o)=>{if(t)n.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of o){const o=document.createElement("style"),r=e.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=t.cssText,n.appendChild(o)}},l=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:f}=Object,g=globalThis,m=g.trustedTypes,b=m?m.emptyScript:"",v=g.reactiveElementPolyfillSupport,y=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},x=(e,t)=>!c(e,t),k={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&d(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:r}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const a=o?.call(this);r.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...p(e),...u(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const r=(void 0!==n.converter?.toAttribute?n.converter:w).toAttribute(t,n.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this._$Em=o,this[o]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n,o=!1,r){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??x)(o?r:this[e],t))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,v?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.0.0");const _=globalThis,A=_.trustedTypes,C=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,P="?"+E,R=`<${P}>`,T=document,O=()=>T.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,D="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,N=/>/g,j=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,H=/"/g,F=/^(?:script|style|textarea|title)$/i,q=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),V=q(1),W=(q(2),Symbol.for("lit-noChange")),G=Symbol.for("lit-nothing"),K=new WeakMap,Z=T.createTreeWalker(T,129);function Y(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}class Q{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,a=0;const l=e.length-1,c=this.parts,[d,h]=((e,t)=>{const n=e.length-1,o=[];let r,a=2===t?"<svg>":"",l=I;for(let t=0;t<n;t++){const n=e[t];let c,d,h=-1,p=0;for(;p<n.length&&(l.lastIndex=p,d=l.exec(n),null!==d);)p=l.lastIndex,l===I?"!--"===d[1]?l=B:void 0!==d[1]?l=N:void 0!==d[2]?(F.test(d[2])&&(r=RegExp("</"+d[2],"g")),l=j):void 0!==d[3]&&(l=j):l===j?">"===d[0]?(l=r??I,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,c=d[1],l=void 0===d[3]?j:'"'===d[3]?H:U):l===H||l===U?l=j:l===B||l===N?l=I:(l=j,r=void 0);const u=l===j&&e[t+1].startsWith("/>")?" ":"";a+=l===I?n+R:h>=0?(o.push(c),n.slice(0,h)+S+n.slice(h)+E+u):n+E+(-2===h?t:u)}return[Y(e,a+(e[n]||"<?>")+(2===t?"</svg>":"")),o]})(e,t);if(this.el=Q.createElement(d,n),Z.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=Z.nextNode())&&c.length<l;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(S)){const t=h[a++],n=o.getAttribute(e).split(E),l=/([.?@])?(.*)/.exec(t);c.push({type:1,index:r,name:l[2],strings:n,ctor:"."===l[1]?it:"?"===l[1]?rt:"@"===l[1]?st:nt}),o.removeAttribute(e)}else e.startsWith(E)&&(c.push({type:6,index:r}),o.removeAttribute(e));if(F.test(o.tagName)){const e=o.textContent.split(E),t=e.length-1;if(t>0){o.textContent=A?A.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],O()),Z.nextNode(),c.push({type:2,index:++r});o.append(e[t],O())}}}else if(8===o.nodeType)if(o.data===P)c.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(E,e+1));)c.push({type:7,index:r}),e+=E.length-1}r++}}static createElement(e,t){const n=T.createElement("template");return n.innerHTML=e,n}}function X(e,t,n=e,o){if(t===W)return t;let r=void 0!==o?n._$Co?.[o]:n._$Cl;const a=M(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=r:n._$Cl=r),void 0!==r&&(t=X(e,r._$AS(e,t.values),r,o)),t}class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??T).importNode(t,!0);Z.currentNode=o;let r=Z.nextNode(),a=0,l=0,c=n[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new ot(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new at(r,this,e)),this._$AV.push(t),c=n[++l]}a!==c?.index&&(r=Z.nextNode(),a++)}return Z.currentNode=T,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),M(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==G&&M(this._$AH)?this._$AA.nextSibling.data=e:this.$(T.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=Q.createElement(Y(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new et(o,this),n=e.u(this.options);e.p(t),this.$(n),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new Q(e)),t}T(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const r of e)o===t.length?t.push(n=new ot(this.k(O()),this.k(O()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=G}_$AI(e,t=this,n,o){const r=this.strings;let a=!1;if(void 0===r)e=X(this,e,t,0),a=!M(e)||e!==this._$AH&&e!==W,a&&(this._$AH=e);else{const o=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=X(this,o[n+l],t,l),c===W&&(c=this._$AH[l]),a||=!M(c)||c!==this._$AH[l],c===G?e=G:e!==G&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!o&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class st extends nt{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??G)===W)return;const n=this._$AH,o=e===G&&n!==G||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==G&&(n===G||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class at{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const J=_.litHtmlPolyfillSupport;J?.(Q,ot),(_.litHtmlVersions??=[]).push("3.0.0");class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const o=n?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=n?.renderBefore??null;o._$litPart$=r=new ot(t.insertBefore(O(),e),e,void 0,n??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const ee=globalThis.litElementPolyfillSupport;ee?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");const te={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:x},ie=(e=te,t,n)=>{const{kind:o,metadata:r}=n;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),a.set(n.name,e),"accessor"===o){const{name:o}=n;return{set(n){const r=t.get.call(this);t.set.call(this,n),this.requestUpdate(o,r,e)},init(t){return void 0!==t&&this.C(o,void 0,e),t}}}if("setter"===o){const{name:o}=n;return function(n){const r=this[o];t.call(this,n),this.requestUpdate(o,r,e)}}throw Error("Unsupported decorator location: "+o)};function ne(e){return(t,n)=>"object"==typeof n?ie(e,t,n):((e,t,n)=>{const o=t.hasOwnProperty(n);return t.constructor.createProperty(n,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}const oe=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,n),n);function re(e,t){return(n,o,r)=>{const a=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:l}="object"==typeof o?n:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return oe(n,o,{get(){if(t){let t=e.call(this);return void 0===t&&(t=a(this),l.call(this,t)),t}return a(this)}})}return oe(n,o,{get(){return a(this)}})}}class gt extends ct{}const se=r`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,ae=r``,le=r`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,ce=Math.min,de=Math.max,he=Math.round,pe=(Math.floor,e=>({x:e,y:e})),ue={left:"right",right:"left",bottom:"top",top:"bottom"},fe={start:"end",end:"start"};function ge(e,t,n){return de(e,ce(t,n))}function me(e,t){return"function"==typeof e?e(t):e}function be(e){return e.split("-")[0]}function ve(e){return e.split("-")[1]}function ye(e){return"x"===e?"y":"x"}function we(e){return"y"===e?"height":"width"}function ke(e){return["top","bottom"].includes(be(e))?"y":"x"}function _e(e){return ye(ke(e))}function Ae(e){return e.replace(/start|end/g,(e=>fe[e]))}function Ce(e){return e.replace(/left|right|bottom|top/g,(e=>ue[e]))}function Ee(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Pe(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Re(e,t,n){let{reference:o,floating:r}=e;const a=ke(t),l=_e(t),c=we(l),d=be(t),h="y"===a,p=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,f=o[c]/2-r[c]/2;let g;switch(d){case"top":g={x:p,y:o.y-r.height};break;case"bottom":g={x:p,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:u};break;case"left":g={x:o.x-r.width,y:u};break;default:g={x:o.x,y:o.y}}switch(ve(t)){case"start":g[l]-=f*(n&&h?-1:1);break;case"end":g[l]+=f*(n&&h?-1:1)}return g}async function Te(e,t){var n;void 0===t&&(t={});const{x:o,y:r,platform:a,rects:l,elements:c,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:f=!1,padding:g=0}=me(t,e),m=Ee(g),b=c[f?"floating"===u?"reference":"floating":u],v=Pe(await a.getClippingRect({element:null==(n=await(null==a.isElement?void 0:a.isElement(b)))||n?b:b.contextElement||await(null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:p,strategy:d})),y="floating"===u?{...l.floating,x:o,y:r}:l.reference,w=await(null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),x=await(null==a.isElement?void 0:a.isElement(w))&&await(null==a.getScale?void 0:a.getScale(w))||{x:1,y:1},k=Pe(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:w,strategy:d}):y);return{top:(v.top-k.top+m.top)/x.y,bottom:(k.bottom-v.bottom+m.bottom)/x.y,left:(v.left-k.left+m.left)/x.x,right:(k.right-v.right+m.right)/x.x}}const Oe=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:a,rects:l,initialPlacement:c,platform:d,elements:h}=t,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:b=!0,...v}=me(e,t);if(null!=(n=a.arrow)&&n.alignmentOffset)return{};const y=be(r),w=be(c)===c,x=await(null==d.isRTL?void 0:d.isRTL(h.floating)),k=f||(w||!b?[Ce(c)]:function(e){const t=Ce(e);return[Ae(e),t,Ae(t)]}(c));f||"none"===m||k.push(...function(e,t,n,o){const r=ve(e);let a=function(e,t,n){const o=["left","right"],r=["right","left"],a=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?a:l;default:return[]}}(be(e),"start"===n,o);return r&&(a=a.map((e=>e+"-"+r)),t&&(a=a.concat(a.map(Ae)))),a}(c,b,m,x));const _=[c,...k],A=await Te(t,v),C=[];let S=(null==(o=a.flip)?void 0:o.overflows)||[];if(p&&C.push(A[y]),u){const e=function(e,t,n){void 0===n&&(n=!1);const o=ve(e),r=_e(e),a=we(r);let l="x"===r?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=Ce(l)),[l,Ce(l)]}(r,l,x);C.push(A[e[0]],A[e[1]])}if(S=[...S,{placement:r,overflows:C}],!C.every((e=>e<=0))){var E,P;const e=((null==(E=a.flip)?void 0:E.index)||0)+1,t=_[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let n=null==(P=S.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:P.placement;if(!n)switch(g){case"bestFit":{var R;const e=null==(R=S.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:R[0];e&&(n=e);break}case"initialPlacement":n=c}if(r!==n)return{reset:{placement:n}}}return{}}}},Me=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:o}=t,r=await async function(e,t){const{placement:n,platform:o,elements:r}=e,a=await(null==o.isRTL?void 0:o.isRTL(r.floating)),l=be(n),c=ve(n),d="y"===ke(n),h=["left","top"].includes(l)?-1:1,p=a&&d?-1:1,u=me(t,e);let{mainAxis:f,crossAxis:g,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&"number"==typeof m&&(g="end"===c?-1*m:m),d?{x:g*p,y:f*h}:{x:f*h,y:g*p}}(t,e);return{x:n+r.x,y:o+r.y,data:r}}}};function De(e){return Ne(e)?(e.nodeName||"").toLowerCase():"#document"}function ze(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Ie(e){var t;return null==(t=(Ne(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Ne(e){return e instanceof Node||e instanceof ze(e).Node}function je(e){return e instanceof Element||e instanceof ze(e).Element}function Ue(e){return e instanceof HTMLElement||e instanceof ze(e).HTMLElement}function Fe(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof ze(e).ShadowRoot)}function qe(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=Ye(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function Ve(e){return["table","td","th"].includes(De(e))}function We(e){const t=Ke(),n=Ye(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Ke(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ze(e){return["html","body","#document"].includes(De(e))}function Ye(e){return ze(e).getComputedStyle(e)}function Qe(e){return je(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Xe(e){if("html"===De(e))return e;const t=e.assignedSlot||e.parentNode||Fe(e)&&e.host||Ie(e);return Fe(t)?t.host:t}function tt(e){const t=Xe(e);return Ze(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ue(t)&&qe(t)?t:tt(t)}function lt(e,t,n){var o;void 0===t&&(t=[]),void 0===n&&(n=!0);const r=tt(e),a=r===(null==(o=e.ownerDocument)?void 0:o.body),l=ze(r);return a?t.concat(l,l.visualViewport||[],qe(r)?r:[],l.frameElement&&n?lt(l.frameElement):[]):t.concat(r,lt(r,[],n))}function pt(e){const t=Ye(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=Ue(e),a=r?e.offsetWidth:n,l=r?e.offsetHeight:o,c=he(n)!==a||he(o)!==l;return c&&(n=a,o=l),{width:n,height:o,$:c}}function ut(e){return je(e)?e:e.contextElement}function ft(e){const t=ut(e);if(!Ue(t))return pe(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:a}=pt(t);let l=(a?he(n.width):n.width)/o,c=(a?he(n.height):n.height)/r;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const mt=pe(0);function bt(e){const t=ze(e);return Ke()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:mt}function vt(e,t,n,o){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=e.getBoundingClientRect(),a=ut(e);let l=pe(1);t&&(o?je(o)&&(l=ft(o)):l=ft(e));const c=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==ze(e))&&t}(a,n,o)?bt(a):pe(0);let d=(r.left+c.x)/l.x,h=(r.top+c.y)/l.y,p=r.width/l.x,u=r.height/l.y;if(a){const e=ze(a),t=o&&je(o)?ze(o):o;let n=e.frameElement;for(;n&&o&&t!==e;){const e=ft(n),t=n.getBoundingClientRect(),o=Ye(n),r=t.left+(n.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(n.clientTop+parseFloat(o.paddingTop))*e.y;d*=e.x,h*=e.y,p*=e.x,u*=e.y,d+=r,h+=a,n=ze(n).frameElement}}return Pe({width:p,height:u,x:d,y:h})}function yt(e){return vt(Ie(e)).left+Qe(e).scrollLeft}function wt(e,t,n){let o;if("viewport"===t)o=function(e,t){const n=ze(e),o=Ie(e),r=n.visualViewport;let a=o.clientWidth,l=o.clientHeight,c=0,d=0;if(r){a=r.width,l=r.height;const e=Ke();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,d=r.offsetTop)}return{width:a,height:l,x:c,y:d}}(e,n);else if("document"===t)o=function(e){const t=Ie(e),n=Qe(e),o=e.ownerDocument.body,r=de(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),a=de(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+yt(e);const c=-n.scrollTop;return"rtl"===Ye(o).direction&&(l+=de(t.clientWidth,o.clientWidth)-r),{width:r,height:a,x:l,y:c}}(Ie(e));else if(je(t))o=function(e,t){const n=vt(e,!0,"fixed"===t),o=n.top+e.clientTop,r=n.left+e.clientLeft,a=Ue(e)?ft(e):pe(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:r*a.x,y:o*a.y}}(t,n);else{const n=bt(e);o={...t,x:t.x-n.x,y:t.y-n.y}}return Pe(o)}function xt(e,t){const n=Xe(e);return!(n===t||!je(n)||Ze(n))&&("fixed"===Ye(n).position||xt(n,t))}function kt(e,t,n){const o=Ue(t),r=Ie(t),a="fixed"===n,l=vt(e,!0,a,t);let c={scrollLeft:0,scrollTop:0};const d=pe(0);if(o||!o&&!a)if(("body"!==De(t)||qe(r))&&(c=Qe(t)),o){const e=vt(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else r&&(d.x=yt(r));return{x:l.left+c.scrollLeft-d.x,y:l.top+c.scrollTop-d.y,width:l.width,height:l.height}}function _t(e,t){return Ue(e)&&"fixed"!==Ye(e).position?t?t(e):e.offsetParent:null}function $t(e,t){const n=ze(e);if(!Ue(e))return n;let o=_t(e,t);for(;o&&Ve(o)&&"static"===Ye(o).position;)o=_t(o,t);return o&&("html"===De(o)||"body"===De(o)&&"static"===Ye(o).position&&!We(o))?n:o||function(e){let t=Xe(e);for(;Ue(t)&&!Ze(t);){if(We(t))return t;t=Xe(t)}return null}(e)||n}const At={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:o}=e;const r=Ue(n),a=Ie(n);if(n===a)return t;let l={scrollLeft:0,scrollTop:0},c=pe(1);const d=pe(0);if((r||!r&&"fixed"!==o)&&(("body"!==De(n)||qe(a))&&(l=Qe(n)),Ue(n))){const e=vt(n);c=ft(n),d.x=e.x+n.clientLeft,d.y=e.y+n.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+d.x,y:t.y*c.y-l.scrollTop*c.y+d.y}},getDocumentElement:Ie,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const a=[..."clippingAncestors"===n?function(e,t){const n=t.get(e);if(n)return n;let o=lt(e,[],!1).filter((e=>je(e)&&"body"!==De(e))),r=null;const a="fixed"===Ye(e).position;let l=a?Xe(e):e;for(;je(l)&&!Ze(l);){const t=Ye(l),n=We(l);n||"fixed"!==t.position||(r=null),(a?!n&&!r:!n&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||qe(l)&&!n&&xt(e,l))?o=o.filter((e=>e!==l)):r=t,l=Xe(l)}return t.set(e,o),o}(t,this._c):[].concat(n),o],l=a[0],c=a.reduce(((e,n)=>{const o=wt(t,n,r);return e.top=de(o.top,e.top),e.right=ce(o.right,e.right),e.bottom=ce(o.bottom,e.bottom),e.left=de(o.left,e.left),e}),wt(t,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:$t,getElementRects:async function(e){let{reference:t,floating:n,strategy:o}=e;const r=this.getOffsetParent||$t,a=this.getDimensions;return{reference:kt(t,await r(n),o),floating:{x:0,y:0,...await a(n)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return pt(e)},getScale:ft,isElement:je,isRTL:function(e){return"rtl"===Ye(e).direction}},Ct=r`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var St=function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l};class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[le,se,Ct]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[Me(6),Oe(),(t={padding:5},void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...d}=me(t,e),h={x:n,y:o},p=await Te(e,d),u=ke(be(r)),f=ye(u);let g=h[f],m=h[u];if(a){const e="y"===f?"bottom":"right";g=ge(g+p["y"===f?"top":"left"],g,g-p[e])}if(l){const e="y"===u?"bottom":"right";m=ge(m+p["y"===u?"top":"left"],m,m-p[e])}const b=c.fn({...e,[f]:g,[u]:m});return{...b,data:{x:b.x-n,y:b.y-o}}}})];var t;this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:a,platform:l,elements:c,middlewareData:d}=t,{element:h,padding:p=0}=me(e,t)||{};if(null==h)return{};const u=Ee(p),f={x:n,y:o},g=_e(r),m=we(g),b=await l.getDimensions(h),v="y"===g,y=v?"top":"left",w=v?"bottom":"right",x=v?"clientHeight":"clientWidth",k=a.reference[m]+a.reference[g]-f[g]-a.floating[m],_=f[g]-a.reference[g],A=await(null==l.getOffsetParent?void 0:l.getOffsetParent(h));let C=A?A[x]:0;C&&await(null==l.isElement?void 0:l.isElement(A))||(C=c.floating[x]||a.floating[m]);const S=k/2-_/2,E=C/2-b[m]/2-1,P=ce(u[y],E),R=ce(u[w],E),T=P,O=C-b[m]-R,M=C/2-b[m]/2+S,L=ge(T,M,O),D=!d.arrow&&null!=ve(r)&&M!=L&&a.reference[m]/2-(M<T?P:R)-b[m]/2<0,I=D?M<T?M-T:M-O:0;return{[g]:f[g]+I,data:{[g]:L,centerOffset:M-L-I,...D&&{alignmentOffset:I}},reset:D}}}))({element:this.arrowEl})),await((e,t,n)=>{const o=new Map,r={platform:At,...n},a={...r.platform,_c:o};return(async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:l}=n,c=a.filter(Boolean),d=await(null==l.isRTL?void 0:l.isRTL(t));let h=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:p,y:u}=Re(h,o,d),f=o,g={},m=0;for(let n=0;n<c.length;n++){const{name:a,fn:b}=c[n],{x:v,y,data:w,reset:x}=await b({x:p,y:u,initialPlacement:o,placement:f,strategy:r,middlewareData:g,rects:h,platform:l,elements:{reference:e,floating:t}});p=null!=v?v:p,u=null!=y?y:u,g={...g,[a]:{...g[a],...w}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(f=x.placement),x.rects&&(h=!0===x.rects?await l.getElementRects({reference:e,floating:t,strategy:r}):x.rects),({x:p,y:u}=Re(h,f,d))),n=-1)}return{x:p,y:u,placement:f,strategy:r,middlewareData:g}})(e,t,{...r,platform:a})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:n,middlewareData:o})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=o.arrow?.x,t=o.arrow?.y,r={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[r]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?V`<div part="arrow" class="arrow"></div>`:""}render(){return V`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}St([ne({type:Boolean})],xe.prototype,"arrow",void 0),St([ne({type:Boolean})],xe.prototype,"hover",void 0),St([ne()],xe.prototype,"placement",void 0),St([ne({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),St([ne({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),St([re('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),St([re(".popover")],xe.prototype,"popoverEl",void 0),St([re(".arrow")],xe.prototype,"arrowEl",void 0),St([ne({state:!0,attribute:!1})],xe.prototype,"open",void 0);const Et=r`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[le,se,Et]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return V`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);a>3&&l&&Object.defineProperty(t,n,l)}([ne({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);const Pt=r`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=Pt}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return V`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);a>3&&l&&Object.defineProperty(t,n,l)}([ne({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);const Rt=new Set(["children","localName","ref","style","className"]),Tt=new WeakMap,Ot=(e,t,n,o,r)=>{const a=r?.[t];void 0===a||n===o?(e[t]=n,null==n&&t in HTMLElement.prototype&&e.removeAttribute(t)):((e,t,n)=>{let o=Tt.get(e);void 0===o&&Tt.set(e,o=new Map);let r=o.get(t);void 0!==n?void 0===r?(o.set(t,r={handleEvent:n}),e.addEventListener(t,r)):r.handleEvent=n:void 0!==r&&(o.delete(t),e.removeEventListener(t,r))})(e,a,n)},Mt=({react:e,tagName:t,elementClass:n,events:o,displayName:r})=>{const a=new Set(Object.keys(o??{})),l=e.forwardRef(((r,l)=>{const c=e.useRef(null),d=e.useRef(null),h={},p={};for(const[e,t]of Object.entries(r))Rt.has(e)?h["className"===e?"class":e]=t:a.has(e)||e in n.prototype?p[e]=t:h[e]=t;return e.useLayoutEffect((()=>{if(null!==d.current){for(const e in p)Ot(d.current,e,r[e],c.current?c.current[e]:void 0,o);c.current=r}})),e.useLayoutEffect((()=>{d.current?.removeAttribute("defer-hydration")}),[]),h.suppressHydrationWarning=!0,e.createElement(t,{...h,ref:e=>{d.current=e,"function"==typeof l?l(e):null!==l&&(l.current=e)}})}));return l.displayName=r??n.name,l};var Lt=dt(294);const Dt=Mt({react:Lt,tagName:Se.elementName,elementClass:Se}),zt=r`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,It=r`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var Bt=function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l};class He extends gt{static{this.styles=[le,zt]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?V`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:V`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}Bt([ne()],He.prototype,"src",void 0),Bt([ne()],He.prototype,"indicator",void 0);class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[le,It]}render(){return V`<slot class="avatar-group" part="base"></slot>`}}const Nt=Mt({react:Lt,tagName:He.elementName,elementClass:He}),jt=Mt({react:Lt,tagName:Le.elementName,elementClass:Le}),Ut=r`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=Ut}static{this.elementName="gk-badge"}render(){return V`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);a>3&&l&&Object.defineProperty(t,n,l)}([ne()],Be.prototype,"variant",void 0);const Ht=Mt({react:Lt,tagName:Be.elementName,elementClass:Be}),Ft=r`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var qt=function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l};class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=Ft}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return V`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}qt([ne({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),qt([ne({reflect:!0})],Ge.prototype,"type",void 0),qt([ne()],Ge.prototype,"variant",void 0);const Vt=Mt({react:Lt,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),Wt=r`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var Gt=function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l};class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[le,se,Wt]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return V`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>V`<span class="complexity-indicator__box"></span>`))}</div>`}}Gt([ne({type:Number})],Je.prototype,"level",void 0),Gt([ne()],Je.prototype,"label",void 0);const Kt=Mt({react:Lt,tagName:Je.elementName,elementClass:Je}),Zt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Yt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Qt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Xt;const Jt=new Map;let ei,ti,ii;new Map;const ni=["th","st","nd","rd"];function oi(e){const t=e%100;return`${e}${ni[(t-20)%10]??ni[t]??ni[0]}`}var ri=function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l};class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[le]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(e){const t=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,o,r]of Qt){const a=Math.abs(t);if(a>=n||1e3===n)return null==Xt&&(null!=ii?Xt=ii.resolvedOptions().locale:null!=ti?Xt=ti.resolvedOptions().locale:(ii=new Intl.RelativeTimeFormat(ei,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Xt=ii.resolvedOptions().locale)),"en"===Xt||Xt?.startsWith("en-")?`${Math.round(a/o)}${r}`:(null==ii&&(ii=new Intl.RelativeTimeFormat(ei,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),ii.format(Math.round(t/o),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return V`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,n,o=!0){const r=`${n??""}:${t=t??void 0}`;let a=Jt.get(r);if(null==a){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Yt.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:n}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:n||void 0}}const n={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Zt))if(null!=t)for(const e in t){const o=t[e];if(null!=o)switch(e){case"year":n.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:n.month="long";break;case 3:n.month="short";break;case 2:n.month="2-digit";break;case 1:n.month="numeric"}break;case"day":n.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:n.weekday="long";break;case 3:n.weekday="short";break;case 2:n.weekday="narrow"}break;case"hour":n.hour=2===o.length?"2-digit":"numeric",n.hour12="hh"===o||"h"===o;break;case"minute":n.minute=2===o.length?"2-digit":"numeric";break;case"second":n.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":n.fractionalSecondDigits=3;break;case"dayPeriod":n.dayPeriod="narrow",n.hour12=!0,n.hourCycle="h12";break;case"timeZoneName":n.timeZoneName=2===o.length?"long":"short"}}return n}(t);let l;l=null==n?ei:"system"===n?void 0:[n],a=new Intl.DateTimeFormat(l,e),o&&Jt.set(r,a)}if(null==t||Yt.test(t))return a.format(e);function l(e){const t=`${n??""}:time:${e}`;let r=Jt.get(t);if(null==r){const a={localeMatcher:"best fit",timeStyle:e};let l;l=null==n?ei:"system"===n?void 0:[n],r=new Intl.DateTimeFormat(l,a),o&&Jt.set(t,r)}return r}const c=a.formatToParts(e);return t.replace(Zt,((t,n,o,r,a,d,h,p,u,f,g,m,b,v,y)=>{if(null!=n)return n.substring(1,n.length-1);for(const t in y){const n=y[t];if(null==n)continue;const o=c.find((e=>e.type===t));if("Do"===n&&"day"===o?.type)return oi(Number(o.value));if("a"===n&&"dayPeriod"===o?.type){const t=l("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??o)?.value??""}`}return o?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}ri([ne({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],po.prototype,"date",void 0),ri([ne()],po.prototype,"format",void 0);const si=Mt({react:Lt,tagName:po.elementName,elementClass:po}),ai=r`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,li=r`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,ci=r`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class yo extends gt{static{this.styles=[le,ci]}static{this.elementName="gk-focus-item"}render(){return V`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class vo extends gt{static{this.styles=[le,li]}static{this.elementName="gk-focus-row"}render(){return V`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class bo extends gt{static{this.styles=[le,li,ci,ai]}static{this.elementName="gk-focus-container"}render(){return V`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const di=Mt({react:Lt,tagName:yo.elementName,elementClass:yo}),hi=Mt({react:Lt,tagName:vo.elementName,elementClass:vo}),pi=Mt({react:Lt,tagName:bo.elementName,elementClass:bo});class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const ui=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const n=e.element.classList;for(const e of this.it)e in t||(n.remove(e),this.it.delete(e));for(const e in t){const o=!!t[e];o===this.it.has(e)||this.st?.has(e)||(o?(n.add(e),this.it.add(e)):(n.remove(e),this.it.delete(e)))}return W}}),fi=e=>e??G,gi=r`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var mi=function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l};class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[le,se,gi]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return V`<div class="field"><label class="${ui({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${ui({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${fi(this.autocomplete)}" autocorrect="${fi(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${fi(this.name)}" part="input" placeholder="${fi(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}}mi([ne()],Ro.prototype,"autocomplete",void 0),mi([ne()],Ro.prototype,"autocorrect",void 0),mi([ne({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),mi([ne()],Ro.prototype,"label",void 0),mi([ne({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),mi([ne()],Ro.prototype,"name",void 0),mi([ne()],Ro.prototype,"placeholder",void 0),mi([ne({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),mi([ne({reflect:!0})],Ro.prototype,"type",void 0),mi([ne()],Ro.prototype,"value",void 0);const bi=r`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,vi=r`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,yi=r`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[le,bi]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const n=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(n)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),n=t.length;let o=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?o=(o-1+n)%n:"ArrowDown"===e.key?o=(o+1)%n:"Home"===e.key?o=0:"End"===e.key&&(o=n-1),this._setCurrentItem(t[o]),t[o].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return V`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);a>3&&l&&Object.defineProperty(t,n,l)}([function(e){return(t,n)=>{const{slot:o,selector:r}=e??{},a="slot"+(o?`[name=${o}]`:":not([name])");return oe(t,n,{get(){const t=this.renderRoot?.querySelector(a),n=t?.assignedElements(e)??[];return void 0===r?n:n.filter((e=>e.matches(r)))}})}}({flatten:!0})],Mo.prototype,"slotChildren",void 0);class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[le,vi]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return V`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);a>3&&l&&Object.defineProperty(t,n,l)}([ne({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);class Ho extends gt{static{this.styles=[le,yi]}static{this.elementName="gk-menu-label"}render(){return V`<slot class="menu-label" part="base"></slot>`}}const wi=Mt({react:Lt,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),xi=Mt({react:Lt,tagName:Do.elementName,elementClass:Do}),ki=Mt({react:Lt,tagName:Ho.elementName,elementClass:Ho}),_i=r`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Bo extends gt{static{this.styles=[le,_i]}static{this.elementName="gk-tag"}render(){return V`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);a>3&&l&&Object.defineProperty(t,n,l)}([ne()],Bo.prototype,"variant",void 0);const $i=Mt({react:Lt,tagName:Bo.elementName,elementClass:Bo}),Ai=Mt({react:Lt,tagName:$e.elementName,elementClass:$e});function Ci(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&Ci(...e.components))}))}})();var pt=ht.qE,ut=ht.Ct,ft=ht.zx,mt=ht.v2,bt=ht.sN,vt=ht.J2,yt=ht.fW;const wt=globalThis,xt=wt.ShadowRoot&&(void 0===wt.ShadyCSS||wt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kt=Symbol(),_t=new WeakMap;class css_tag_n{constructor(e,t,n){if(this._$cssResult$=!0,n!==kt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(xt&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=_t.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&_t.set(t,e))}return e}toString(){return this.cssText}}const $t=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,kt),At=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1]),e[0]);return new css_tag_n(n,e,kt)},Ct=xt?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return $t(t)})(e):e,{is:St,defineProperty:Et,getOwnPropertyDescriptor:Pt,getOwnPropertyNames:Rt,getOwnPropertySymbols:Tt,getPrototypeOf:Ot}=Object,Mt=globalThis,Lt=Mt.trustedTypes,Dt=Lt?Lt.emptyScript:"",zt=Mt.reactiveElementPolyfillSupport,It=(e,t)=>e,Bt={toAttribute(e,t){switch(t){case Boolean:e=e?Dt:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},Nt=(e,t)=>!St(e,t),jt={attribute:!0,type:String,converter:Bt,reflect:!1,hasChanged:Nt};Symbol.metadata??=Symbol("metadata"),Mt.litPropertyMetadata??=new WeakMap;class reactive_element_b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=jt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&Et(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:r}=Pt(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const a=o?.call(this);r.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??jt}static _$Ei(){if(this.hasOwnProperty(It("elementProperties")))return;const e=Ot(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(It("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(It("properties"))){const e=this.properties,t=[...Rt(e),...Tt(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(Ct(e))}else void 0!==e&&t.push(Ct(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(xt)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const n of t){const t=document.createElement("style"),o=wt.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=n.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const r=(void 0!==n.converter?.toAttribute?n.converter:Bt).toAttribute(t,n.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Bt;this._$Em=o,this[o]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??Nt)(this[e],t))return;this.P(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}reactive_element_b.elementStyles=[],reactive_element_b.shadowRootOptions={mode:"open"},reactive_element_b[It("elementProperties")]=new Map,reactive_element_b[It("finalized")]=new Map,zt?.({ReactiveElement:reactive_element_b}),(Mt.reactiveElementVersions??=[]).push("2.0.4");const Ut=globalThis,Ht=Ut.trustedTypes,Ft=Ht?Ht.createPolicy("lit-html",{createHTML:e=>e}):void 0,qt="$lit$",Vt=`lit$${Math.random().toFixed(9).slice(2)}$`,Wt="?"+Vt,Gt=`<${Wt}>`,Kt=document,Zt=()=>Kt.createComment(""),Yt=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Qt=Array.isArray,Xt=e=>Qt(e)||"function"==typeof e?.[Symbol.iterator],Jt="[ \t\n\f\r]",ei=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ti=/-->/g,ii=/>/g,ni=RegExp(`>|${Jt}(?:([^\\s"'>=/]+)(${Jt}*=${Jt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),oi=/'/g,ri=/"/g,si=/^(?:script|style|textarea|title)$/i,ai=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),li=ai(1),ci=(ai(2),ai(3),Symbol.for("lit-noChange")),di=Symbol.for("lit-nothing"),hi=new WeakMap,pi=Kt.createTreeWalker(Kt,129);function ui(e,t){if(!Qt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Ft?Ft.createHTML(t):t}const fi=(e,t)=>{const n=e.length-1,o=[];let r,a=2===t?"<svg>":3===t?"<math>":"",l=ei;for(let t=0;t<n;t++){const n=e[t];let c,d,h=-1,p=0;for(;p<n.length&&(l.lastIndex=p,d=l.exec(n),null!==d);)p=l.lastIndex,l===ei?"!--"===d[1]?l=ti:void 0!==d[1]?l=ii:void 0!==d[2]?(si.test(d[2])&&(r=RegExp("</"+d[2],"g")),l=ni):void 0!==d[3]&&(l=ni):l===ni?">"===d[0]?(l=r??ei,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,c=d[1],l=void 0===d[3]?ni:'"'===d[3]?ri:oi):l===ri||l===oi?l=ni:l===ti||l===ii?l=ei:(l=ni,r=void 0);const u=l===ni&&e[t+1].startsWith("/>")?" ":"";a+=l===ei?n+Gt:h>=0?(o.push(c),n.slice(0,h)+qt+n.slice(h)+Vt+u):n+Vt+(-2===h?t:u)}return[ui(e,a+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class lit_html_N{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,a=0;const l=e.length-1,c=this.parts,[d,h]=fi(e,t);if(this.el=lit_html_N.createElement(d,n),pi.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=pi.nextNode())&&c.length<l;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(qt)){const t=h[a++],n=o.getAttribute(e).split(Vt),l=/([.?@])?(.*)/.exec(t);c.push({type:1,index:r,name:l[2],strings:n,ctor:"."===l[1]?lit_html_H:"?"===l[1]?lit_html_I:"@"===l[1]?lit_html_L:lit_html_k}),o.removeAttribute(e)}else e.startsWith(Vt)&&(c.push({type:6,index:r}),o.removeAttribute(e));if(si.test(o.tagName)){const e=o.textContent.split(Vt),t=e.length-1;if(t>0){o.textContent=Ht?Ht.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],Zt()),pi.nextNode(),c.push({type:2,index:++r});o.append(e[t],Zt())}}}else if(8===o.nodeType)if(o.data===Wt)c.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(Vt,e+1));)c.push({type:7,index:r}),e+=Vt.length-1}r++}}static createElement(e,t){const n=Kt.createElement("template");return n.innerHTML=e,n}}function gi(e,t,n=e,o){if(t===ci)return t;let r=void 0!==o?n._$Co?.[o]:n._$Cl;const a=Yt(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=r:n._$Cl=r),void 0!==r&&(t=gi(e,r._$AS(e,t.values),r,o)),t}class lit_html_M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??Kt).importNode(t,!0);pi.currentNode=o;let r=pi.nextNode(),a=0,l=0,c=n[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new lit_html_R(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new z(r,this,e)),this._$AV.push(t),c=n[++l]}a!==c?.index&&(r=pi.nextNode(),a++)}return pi.currentNode=Kt,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class lit_html_R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=di,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=gi(this,e,t),Yt(e)?e===di||null==e||""===e?(this._$AH!==di&&this._$AR(),this._$AH=di):e!==this._$AH&&e!==ci&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Xt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==di&&Yt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Kt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=lit_html_N.createElement(ui(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new lit_html_M(o,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=hi.get(e.strings);return void 0===t&&hi.set(e.strings,t=new lit_html_N(e)),t}k(e){Qt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const r of e)o===t.length?t.push(n=new lit_html_R(this.O(Zt()),this.O(Zt()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class lit_html_k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,r){this.type=1,this._$AH=di,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=di}_$AI(e,t=this,n,o){const r=this.strings;let a=!1;if(void 0===r)e=gi(this,e,t,0),a=!Yt(e)||e!==this._$AH&&e!==ci,a&&(this._$AH=e);else{const o=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=gi(this,o[n+l],t,l),c===ci&&(c=this._$AH[l]),a||=!Yt(c)||c!==this._$AH[l],c===di?e=di:e!==di&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!o&&this.j(e)}j(e){e===di?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class lit_html_H extends lit_html_k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===di?void 0:e}}class lit_html_I extends lit_html_k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==di)}}class lit_html_L extends lit_html_k{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){if((e=gi(this,e,t,0)??di)===ci)return;const n=this._$AH,o=e===di&&n!==di||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==di&&(n===di||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){gi(this,e)}}const mi={M:qt,P:Vt,A:Wt,C:1,L:fi,R:lit_html_M,D:Xt,V:gi,I:lit_html_R,H:lit_html_k,N:lit_html_I,U:lit_html_L,B:lit_html_H,F:z},bi=Ut.litHtmlPolyfillSupport;bi?.(lit_html_N,lit_html_R),(Ut.litHtmlVersions??=[]).push("3.2.1");class lit_element_r extends reactive_element_b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const o=n?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=n?.renderBefore??null;o._$litPart$=r=new lit_html_R(t.insertBefore(Zt(),e),e,void 0,n??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ci}}lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});const vi=globalThis.litElementPolyfillSupport;vi?.({LitElement:lit_element_r});(globalThis.litElementVersions??=[]).push("4.1.1");const yi=e=>(t,n)=>{void 0!==n?n.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},wi={attribute:!0,type:String,converter:Bt,reflect:!1,hasChanged:Nt},xi=(e=wi,t,n)=>{const{kind:o,metadata:r}=n;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),a.set(n.name,e),"accessor"===o){const{name:o}=n;return{set(n){const r=t.get.call(this);t.set.call(this,n),this.requestUpdate(o,r,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===o){const{name:o}=n;return function(n){const r=this[o];t.call(this,n),this.requestUpdate(o,r,e)}}throw Error("Unsupported decorator location: "+o)};function ki(e){return(t,n)=>"object"==typeof n?xi(e,t,n):((e,t,n)=>{const o=t.hasOwnProperty(n);return t.constructor.createProperty(n,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function _i(e){return ki({...e,state:!0,attribute:!1})}const $i=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,n),n);function Ai(e,t){return(n,o,r)=>{const a=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof o?n:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return $i(n,o,{get(){let n=e.call(this);return void 0===n&&(n=a(this),(null!==n||this.hasUpdated)&&t.call(this,n)),n}})}return $i(n,o,{get(){return a(this)}})}}function Ci(e){return(t,n)=>{const{slot:o,selector:r}=e??{},a="slot"+(o?`[name=${o}]`:":not([name])");return $i(t,n,{get(){const t=this.renderRoot?.querySelector(a),n=t?.assignedElements(e)??[];return void 0===r?n:n.filter((e=>e.matches(r)))}})}}function Si(e,t,n){return e?t(e):n?.(e)}const Ei=new WeakMap;class GlElement extends lit_element_r{emit(e,t,n){const o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...n,detail:t});return this.dispatchEvent(o),o}update(e){const t=Ei.get(this.constructor);if(null!=t)for(const{keys:n,method:o,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;const t=n.filter((t=>e.has(t)));t.length&&o.call(this,t)}super.update(e)}}const Pi=e=>e??di;function*Ri(e,t){if(void 0!==e){let n=0;for(const o of e)yield t(o,n++)}}const Ti=1,Oi=2,Mi=e=>(...t)=>({_$litDirective$:e,values:t});class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{I:Li}=mi,Di=()=>document.createComment(""),zi=(e,t,n)=>{const o=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===n){const t=o.insertBefore(Di(),r),a=o.insertBefore(Di(),r);n=new Li(t,a,e,e.options)}else{const t=n._$AB.nextSibling,a=n._$AM,l=a!==e;if(l){let t;n._$AQ?.(e),n._$AM=e,void 0!==n._$AP&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==r||l){let e=n._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,r),e=t}}}return n},Ii=(e,t,n=e)=>(e._$AI(t,n),e),Bi={},Ni=e=>{e._$AP?.(!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const e=t.nextSibling;t.remove(),t=e}},ji=(e,t,n)=>{const o=new Map;for(let r=t;r<=n;r++)o.set(e[r],r);return o},Ui=Mi(class extends directive_i{constructor(e){if(super(e),e.type!==Oi)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let o;void 0===n?n=t:void 0!==t&&(o=t);const r=[],a=[];let l=0;for(const t of e)r[l]=o?o(t,l):l,a[l]=n(t,l),l++;return{values:a,keys:r}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,o]){const r=(e=>e._$AH)(e),{values:a,keys:l}=this.dt(t,n,o);if(!Array.isArray(r))return this.ut=l,a;const c=this.ut??=[],d=[];let h,p,u=0,f=r.length-1,g=0,m=a.length-1;for(;u<=f&&g<=m;)if(null===r[u])u++;else if(null===r[f])f--;else if(c[u]===l[g])d[g]=Ii(r[u],a[g]),u++,g++;else if(c[f]===l[m])d[m]=Ii(r[f],a[m]),f--,m--;else if(c[u]===l[m])d[m]=Ii(r[u],a[m]),zi(e,d[m+1],r[u]),u++,m--;else if(c[f]===l[g])d[g]=Ii(r[f],a[g]),zi(e,r[u],r[f]),f--,g++;else if(void 0===h&&(h=ji(l,g,m),p=ji(c,u,f)),h.has(c[u]))if(h.has(c[f])){const t=p.get(l[g]),n=void 0!==t?r[t]:null;if(null===n){const t=zi(e,r[u]);Ii(t,a[g]),d[g]=t}else d[g]=Ii(n,a[g]),zi(e,r[u],n),r[t]=null;g++}else Ni(r[f]),f--;else Ni(r[u]),u++;for(;g<=m;){const t=zi(e,d[m+1]);Ii(t,a[g]),d[g++]=t}for(;u<=f;){const e=r[u++];null!==e&&Ni(e)}return this.ut=l,((e,t=Bi)=>{e._$AH=t})(e,d),ci}});class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=di,e.type!==Oi)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===di||null==e)return this._t=void 0,this.it=e;if(e===ci)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const Hi=Mi(unsafe_html_e);function Fi(e,t,n,o=!1,r){const a={name:"",relativePath:"",children:new Map,descendants:[]};let l=e.reduce(((e,o)=>{let r=e,a="";for(const e of t(o)){a=n(a,e),void 0===r.children&&(r.children=new Map);let t=r.children.get(e);void 0===t&&(t={name:e,relativePath:a,parent:r,children:void 0,descendants:void 0},r.children.set(e,t)),void 0===r.descendants&&(r.descendants=[]),r.descendants.push(o),r=t}return r.value=o,e}),a);return o&&(l=qi(l,n,!0,r)),l}function qi(e,t,n=!0,o){if(void 0===e.children)return e;const r=[...e.children.values()];for(const e of r)qi(e,t,!1,o);if(!n&&1===r.length){const n=r[0];(void 0===n.value||o?.(n.value))&&(e.name=t(e.name,n.name),e.relativePath=n.relativePath,e.children=n.children,e.descendants=n.descendants,e.value=n.value)}return e}function Vi(e,t){if(null==e)return 0;let n=0;for(const o of e)n+=t(o);return n}At`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus):not(:focus-within) {
		${At`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`}
	}
`;const Wi=At`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,Gi=At`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;var Ki=Object.defineProperty,Zi=Object.defineProperties,Yi=Object.getOwnPropertyDescriptor,Qi=Object.getOwnPropertyDescriptors,Xi=Object.getOwnPropertySymbols,Ji=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable,tn=(e,t,n)=>t in e?Ki(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nn=(e,t)=>{for(var n in t||(t={}))Ji.call(t,n)&&tn(e,n,t[n]);if(Xi)for(var n of Xi(t))en.call(t,n)&&tn(e,n,t[n]);return e},on=(e,t)=>Zi(e,Qi(t)),rn=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?Yi(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&Ki(t,n,a),a},sn=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},an=new Map,ln=new WeakMap;function cn(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function dn(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function hn(e,t){an.set(e,cn(t))}function pn(e,t,n){const o=ln.get(e);if(null==o?void 0:o[t])return dn(o[t],n.dir);const r=an.get(t);return r?dn(r,n.dir):{keyframes:[],options:{duration:0}}}var un=At`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,fn=At`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const gn=new Set,mn=new Map;let bn,vn="ltr",yn="en";const wn="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(wn){const e=new MutationObserver(kn);vn=document.documentElement.dir||"ltr",yn=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function xn(...e){e.map((e=>{const t=e.$code.toLowerCase();mn.has(t)?mn.set(t,Object.assign(Object.assign({},mn.get(t)),e)):mn.set(t,e),bn||(bn=e)})),kn()}function kn(){wn&&(vn=document.documentElement.dir||"ltr",yn=document.documentElement.lang||navigator.language),[...gn.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){gn.add(this.host)}hostDisconnected(){gn.delete(this.host)}dir(){return`${this.host.dir||vn}`.toLowerCase()}lang(){return`${this.host.lang||yn}`.toLowerCase()}getTranslationData(e){var t,n;const o=new Intl.Locale(e.replace(/_/g,"-")),r=null==o?void 0:o.language.toLowerCase(),a=null!==(n=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==n?n:"";return{locale:o,language:r,region:a,primary:mn.get(`${r}-${a}`),secondary:mn.get(r)}}exists(e,t){var n;const{primary:o,secondary:r}=this.getTranslationData(null!==(n=t.lang)&&void 0!==n?n:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||r&&r[e]||t.includeFallback&&bn&&bn[e])}term(e,...t){const{primary:n,secondary:o}=this.getTranslationData(this.lang());let r;if(n&&n[e])r=n[e];else if(o&&o[e])r=o[e];else{if(!bn||!bn[e])return String(e);r=bn[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}}var _n={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};xn(_n);var $n=_n,An=class extends LocalizeController{};xn($n);var Cn,Sn=At`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,En=class extends lit_element_r{constructor(){super(),((e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)})(this,Cn,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const n=new CustomEvent(e,nn({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){const o=customElements.get(e);if(!o){try{customElements.define(e,t,n)}catch(o){customElements.define(e,class extends t{},n)}return}let r=" (unknown version)",a=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in o&&o.version&&(a=" v"+o.version)}attributeChangedCallback(e,t,n){var o,r,a;sn(o=this,r=Cn,"read from private field"),(a?a.call(o):r.get(o))||(this.constructor.elementProperties.forEach(((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])})),((e,t,n,o)=>{sn(e,t,"write to private field"),o?o.call(e,n):t.set(e,n)})(this,Cn,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach(((t,n)=>{e.has(n)&&null==this[n]&&(this[n]=t)}))}};Cn=new WeakMap,En.version="2.18.0",En.dependencies={},rn([ki()],En.prototype,"dir",2),rn([ki()],En.prototype,"lang",2);const Pn=Math.min,Rn=Math.max,Tn=Math.round,On=Math.floor,Mn=e=>({x:e,y:e}),Ln={left:"right",right:"left",bottom:"top",top:"bottom"},Dn={start:"end",end:"start"};function zn(e,t,n){return Rn(e,Pn(t,n))}function In(e,t){return"function"==typeof e?e(t):e}function Bn(e){return e.split("-")[0]}function Nn(e){return e.split("-")[1]}function jn(e){return"x"===e?"y":"x"}function Un(e){return"y"===e?"height":"width"}function Hn(e){return["top","bottom"].includes(Bn(e))?"y":"x"}function Fn(e){return jn(Hn(e))}function qn(e){return e.replace(/start|end/g,(e=>Dn[e]))}function Vn(e){return e.replace(/left|right|bottom|top/g,(e=>Ln[e]))}function Wn(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Gn(e){const{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}function Kn(e,t,n){let{reference:o,floating:r}=e;const a=Hn(t),l=Fn(t),c=Un(l),d=Bn(t),h="y"===a,p=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,f=o[c]/2-r[c]/2;let g;switch(d){case"top":g={x:p,y:o.y-r.height};break;case"bottom":g={x:p,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:u};break;case"left":g={x:o.x-r.width,y:u};break;default:g={x:o.x,y:o.y}}switch(Nn(t)){case"start":g[l]-=f*(n&&h?-1:1);break;case"end":g[l]+=f*(n&&h?-1:1)}return g}async function Zn(e,t){var n;void 0===t&&(t={});const{x:o,y:r,platform:a,rects:l,elements:c,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:f=!1,padding:g=0}=In(t,e),m=Wn(g),b=c[f?"floating"===u?"reference":"floating":u],v=Gn(await a.getClippingRect({element:null==(n=await(null==a.isElement?void 0:a.isElement(b)))||n?b:b.contextElement||await(null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:p,strategy:d})),y="floating"===u?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,w=await(null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),x=await(null==a.isElement?void 0:a.isElement(w))&&await(null==a.getScale?void 0:a.getScale(w))||{x:1,y:1},k=Gn(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:w,strategy:d}):y);return{top:(v.top-k.top+m.top)/x.y,bottom:(k.bottom-v.bottom+m.bottom)/x.y,left:(v.left-k.left+m.left)/x.x,right:(k.right-v.right+m.right)/x.x}}function Yn(){return"undefined"!=typeof window}function Qn(e){return eo(e)?(e.nodeName||"").toLowerCase():"#document"}function Xn(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Jn(e){var t;return null==(t=(eo(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function eo(e){return!!Yn()&&(e instanceof Node||e instanceof Xn(e).Node)}function to(e){return!!Yn()&&(e instanceof Element||e instanceof Xn(e).Element)}function io(e){return!!Yn()&&(e instanceof HTMLElement||e instanceof Xn(e).HTMLElement)}function no(e){return!(!Yn()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof Xn(e).ShadowRoot)}function oo(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=ho(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function ro(e){return["table","td","th"].includes(Qn(e))}function so(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function ao(e){const t=lo(),n=to(e)?ho(e):e;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function lo(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function co(e){return["html","body","#document"].includes(Qn(e))}function ho(e){return Xn(e).getComputedStyle(e)}function uo(e){return to(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function fo(e){if("html"===Qn(e))return e;const t=e.assignedSlot||e.parentNode||no(e)&&e.host||Jn(e);return no(t)?t.host:t}function go(e){const t=fo(e);return co(t)?e.ownerDocument?e.ownerDocument.body:e.body:io(t)&&oo(t)?t:go(t)}function mo(e,t,n){var o;void 0===t&&(t=[]),void 0===n&&(n=!0);const r=go(e),a=r===(null==(o=e.ownerDocument)?void 0:o.body),l=Xn(r);if(a){const e=wo(l);return t.concat(l,l.visualViewport||[],oo(r)?r:[],e&&n?mo(e):[])}return t.concat(r,mo(r,[],n))}function wo(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function xo(e){const t=ho(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=io(e),a=r?e.offsetWidth:n,l=r?e.offsetHeight:o,c=Tn(n)!==a||Tn(o)!==l;return c&&(n=a,o=l),{width:n,height:o,$:c}}function ko(e){return to(e)?e:e.contextElement}function _o(e){const t=ko(e);if(!io(t))return Mn(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:a}=xo(t);let l=(a?Tn(n.width):n.width)/o,c=(a?Tn(n.height):n.height)/r;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const Ao=Mn(0);function Co(e){const t=Xn(e);return lo()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Ao}function So(e,t,n,o){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=e.getBoundingClientRect(),a=ko(e);let l=Mn(1);t&&(o?to(o)&&(l=_o(o)):l=_o(e));const c=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==Xn(e))&&t}(a,n,o)?Co(a):Mn(0);let d=(r.left+c.x)/l.x,h=(r.top+c.y)/l.y,p=r.width/l.x,u=r.height/l.y;if(a){const e=Xn(a),t=o&&to(o)?Xn(o):o;let n=e,r=wo(n);for(;r&&o&&t!==n;){const e=_o(r),t=r.getBoundingClientRect(),o=ho(r),a=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,l=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;d*=e.x,h*=e.y,p*=e.x,u*=e.y,d+=a,h+=l,n=Xn(r),r=wo(n)}}return Gn({width:p,height:u,x:d,y:h})}function Eo(e,t){const n=uo(e).scrollLeft;return t?t.left+n:So(Jn(e)).left+n}function Po(e,t,n){void 0===n&&(n=!1);const o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-(n?0:Eo(e,o)),y:o.top+t.scrollTop}}function To(e,t,n){let o;if("viewport"===t)o=function(e,t){const n=Xn(e),o=Jn(e),r=n.visualViewport;let a=o.clientWidth,l=o.clientHeight,c=0,d=0;if(r){a=r.width,l=r.height;const e=lo();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,d=r.offsetTop)}return{width:a,height:l,x:c,y:d}}(e,n);else if("document"===t)o=function(e){const t=Jn(e),n=uo(e),o=e.ownerDocument.body,r=Rn(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),a=Rn(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+Eo(e);const c=-n.scrollTop;return"rtl"===ho(o).direction&&(l+=Rn(t.clientWidth,o.clientWidth)-r),{width:r,height:a,x:l,y:c}}(Jn(e));else if(to(t))o=function(e,t){const n=So(e,!0,"fixed"===t),o=n.top+e.clientTop,r=n.left+e.clientLeft,a=io(e)?_o(e):Mn(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:r*a.x,y:o*a.y}}(t,n);else{const n=Co(e);o={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Gn(o)}function Oo(e,t){const n=fo(e);return!(n===t||!to(n)||co(n))&&("fixed"===ho(n).position||Oo(n,t))}function Lo(e,t,n){const o=io(t),r=Jn(t),a="fixed"===n,l=So(e,!0,a,t);let c={scrollLeft:0,scrollTop:0};const d=Mn(0);if(o||!o&&!a)if(("body"!==Qn(t)||oo(r))&&(c=uo(t)),o){const e=So(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else r&&(d.x=Eo(r));const h=!r||o||a?Mn(0):Po(r,c);return{x:l.left+c.scrollLeft-d.x-h.x,y:l.top+c.scrollTop-d.y-h.y,width:l.width,height:l.height}}function zo(e){return"static"===ho(e).position}function Io(e,t){if(!io(e)||"fixed"===ho(e).position)return null;if(t)return t(e);let n=e.offsetParent;return Jn(e)===n&&(n=n.ownerDocument.body),n}function No(e,t){const n=Xn(e);if(so(e))return n;if(!io(e)){let t=fo(e);for(;t&&!co(t);){if(to(t)&&!zo(t))return t;t=fo(t)}return n}let o=Io(e,t);for(;o&&ro(o)&&zo(o);)o=Io(o,t);return o&&co(o)&&zo(o)&&!ao(o)?n:o||function(e){let t=fo(e);for(;io(t)&&!co(t);){if(ao(t))return t;if(so(t))return null;t=fo(t)}return null}(e)||n}const jo={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const a="fixed"===r,l=Jn(o),c=!!t&&so(t.floating);if(o===l||c&&a)return n;let d={scrollLeft:0,scrollTop:0},h=Mn(1);const p=Mn(0),u=io(o);if((u||!u&&!a)&&(("body"!==Qn(o)||oo(l))&&(d=uo(o)),io(o))){const e=So(o);h=_o(o),p.x=e.x+o.clientLeft,p.y=e.y+o.clientTop}const f=!l||u||a?Mn(0):Po(l,d,!0);return{width:n.width*h.x,height:n.height*h.y,x:n.x*h.x-d.scrollLeft*h.x+p.x+f.x,y:n.y*h.y-d.scrollTop*h.y+p.y+f.y}},getDocumentElement:Jn,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const a=[..."clippingAncestors"===n?so(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let o=mo(e,[],!1).filter((e=>to(e)&&"body"!==Qn(e))),r=null;const a="fixed"===ho(e).position;let l=a?fo(e):e;for(;to(l)&&!co(l);){const t=ho(l),n=ao(l);n||"fixed"!==t.position||(r=null),(a?!n&&!r:!n&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||oo(l)&&!n&&Oo(e,l))?o=o.filter((e=>e!==l)):r=t,l=fo(l)}return t.set(e,o),o}(t,this._c):[].concat(n),o],l=a[0],c=a.reduce(((e,n)=>{const o=To(t,n,r);return e.top=Rn(o.top,e.top),e.right=Pn(o.right,e.right),e.bottom=Pn(o.bottom,e.bottom),e.left=Rn(o.left,e.left),e}),To(t,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:No,getElementRects:async function(e){const t=this.getOffsetParent||No,n=this.getDimensions,o=await n(e.floating);return{reference:Lo(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=xo(e);return{width:t,height:n}},getScale:_o,isElement:to,isRTL:function(e){return"rtl"===ho(e).direction}};function Uo(e,t,n,o){void 0===o&&(o={});const{ancestorScroll:r=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:d=!1}=o,h=ko(e),p=r||a?[...h?mo(h):[],...mo(t)]:[];p.forEach((e=>{r&&e.addEventListener("scroll",n,{passive:!0}),a&&e.addEventListener("resize",n)}));const u=h&&c?function(e,t){let n,o=null;const r=Jn(e);function a(){var e;clearTimeout(n),null==(e=o)||e.disconnect(),o=null}return function l(c,d){void 0===c&&(c=!1),void 0===d&&(d=1),a();const{left:h,top:p,width:u,height:f}=e.getBoundingClientRect();if(c||t(),!u||!f)return;const g={rootMargin:-On(p)+"px "+-On(r.clientWidth-(h+u))+"px "+-On(r.clientHeight-(p+f))+"px "+-On(h)+"px",threshold:Rn(0,Pn(1,d))||1};let m=!0;function b(e){const t=e[0].intersectionRatio;if(t!==d){if(!m)return l();t?l(!1,t):n=setTimeout((()=>{l(!1,1e-7)}),1e3)}m=!1}try{o=new IntersectionObserver(b,{...g,root:r.ownerDocument})}catch(e){o=new IntersectionObserver(b,g)}o.observe(e)}(!0),a}(h,n):null;let f,g=-1,m=null;l&&(m=new ResizeObserver((e=>{let[o]=e;o&&o.target===h&&m&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=m)||e.observe(t)}))),n()})),h&&!d&&m.observe(h),m.observe(t));let b=d?So(e):null;return d&&function t(){const o=So(e);!b||o.x===b.x&&o.y===b.y&&o.width===b.width&&o.height===b.height||n();b=o,f=requestAnimationFrame(t)}(),n(),()=>{var e;p.forEach((e=>{r&&e.removeEventListener("scroll",n),a&&e.removeEventListener("resize",n)})),null==u||u(),null==(e=m)||e.disconnect(),m=null,d&&cancelAnimationFrame(f)}}const Fo=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:a,placement:l,middlewareData:c}=t,d=await async function(e,t){const{placement:n,platform:o,elements:r}=e,a=await(null==o.isRTL?void 0:o.isRTL(r.floating)),l=Bn(n),c=Nn(n),d="y"===Hn(n),h=["left","top"].includes(l)?-1:1,p=a&&d?-1:1,u=In(t,e);let{mainAxis:f,crossAxis:g,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&"number"==typeof m&&(g="end"===c?-1*m:m),d?{x:g*p,y:f*h}:{x:f*h,y:g*p}}(t,e);return l===(null==(n=c.offset)?void 0:n.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:r+d.x,y:a+d.y,data:{...d,placement:l}}}}},qo=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...d}=In(e,t),h={x:n,y:o},p=await Zn(t,d),u=Hn(Bn(r)),f=jn(u);let g=h[f],m=h[u];if(a){const e="y"===f?"bottom":"right";g=zn(g+p["y"===f?"top":"left"],g,g-p[e])}if(l){const e="y"===u?"bottom":"right";m=zn(m+p["y"===u?"top":"left"],m,m-p[e])}const b=c.fn({...t,[f]:g,[u]:m});return{...b,data:{x:b.x-n,y:b.y-o,enabled:{[f]:a,[u]:l}}}}}},Vo=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:a,rects:l,initialPlacement:c,platform:d,elements:h}=t,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:b=!0,...v}=In(e,t);if(null!=(n=a.arrow)&&n.alignmentOffset)return{};const y=Bn(r),w=Hn(c),x=Bn(c)===c,k=await(null==d.isRTL?void 0:d.isRTL(h.floating)),_=f||(x||!b?[Vn(c)]:function(e){const t=Vn(e);return[qn(e),t,qn(t)]}(c)),A="none"!==m;!f&&A&&_.push(...function(e,t,n,o){const r=Nn(e);let a=function(e,t,n){const o=["left","right"],r=["right","left"],a=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?a:l;default:return[]}}(Bn(e),"start"===n,o);return r&&(a=a.map((e=>e+"-"+r)),t&&(a=a.concat(a.map(qn)))),a}(c,b,m,k));const C=[c,..._],S=await Zn(t,v),E=[];let P=(null==(o=a.flip)?void 0:o.overflows)||[];if(p&&E.push(S[y]),u){const e=function(e,t,n){void 0===n&&(n=!1);const o=Nn(e),r=Fn(e),a=Un(r);let l="x"===r?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=Vn(l)),[l,Vn(l)]}(r,l,k);E.push(S[e[0]],S[e[1]])}if(P=[...P,{placement:r,overflows:E}],!E.every((e=>e<=0))){var R,T;const e=((null==(R=a.flip)?void 0:R.index)||0)+1,t=C[e];if(t)return{data:{index:e,overflows:P},reset:{placement:t}};let n=null==(T=P.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:T.placement;if(!n)switch(g){case"bestFit":{var O;const e=null==(O=P.filter((e=>{if(A){const t=Hn(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:O[0];e&&(n=e);break}case"initialPlacement":n=c}if(r!==n)return{reset:{placement:n}}}return{}}}},Wo=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var n,o;const{placement:r,rects:a,platform:l,elements:c}=t,{apply:d=()=>{},...h}=In(e,t),p=await Zn(t,h),u=Bn(r),f=Nn(r),g="y"===Hn(r),{width:m,height:b}=a.floating;let v,y;"top"===u||"bottom"===u?(v=u,y=f===(await(null==l.isRTL?void 0:l.isRTL(c.floating))?"start":"end")?"left":"right"):(y=u,v="end"===f?"top":"bottom");const w=b-p.top-p.bottom,x=m-p.left-p.right,k=Pn(b-p[v],w),_=Pn(m-p[y],x),A=!t.middlewareData.shift;let C=k,S=_;if(null!=(n=t.middlewareData.shift)&&n.enabled.x&&(S=x),null!=(o=t.middlewareData.shift)&&o.enabled.y&&(C=w),A&&!f){const e=Rn(p.left,0),t=Rn(p.right,0),n=Rn(p.top,0),o=Rn(p.bottom,0);g?S=m-2*(0!==e||0!==t?e+t:Rn(p.left,p.right)):C=b-2*(0!==n||0!==o?n+o:Rn(p.top,p.bottom))}await d({...t,availableWidth:S,availableHeight:C});const E=await l.getDimensions(c.floating);return m!==E.width||b!==E.height?{reset:{rects:!0}}:{}}}},Go=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:a,platform:l,elements:c,middlewareData:d}=t,{element:h,padding:p=0}=In(e,t)||{};if(null==h)return{};const u=Wn(p),f={x:n,y:o},g=Fn(r),m=Un(g),b=await l.getDimensions(h),v="y"===g,y=v?"top":"left",w=v?"bottom":"right",x=v?"clientHeight":"clientWidth",k=a.reference[m]+a.reference[g]-f[g]-a.floating[m],_=f[g]-a.reference[g],A=await(null==l.getOffsetParent?void 0:l.getOffsetParent(h));let C=A?A[x]:0;C&&await(null==l.isElement?void 0:l.isElement(A))||(C=c.floating[x]||a.floating[m]);const S=k/2-_/2,E=C/2-b[m]/2-1,P=Pn(u[y],E),R=Pn(u[w],E),T=P,O=C-b[m]-R,M=C/2-b[m]/2+S,L=zn(T,M,O),D=!d.arrow&&null!=Nn(r)&&M!==L&&a.reference[m]/2-(M<T?P:R)-b[m]/2<0,I=D?M<T?M-T:M-O:0;return{[g]:f[g]+I,data:{[g]:L,centerOffset:M-L-I,...D&&{alignmentOffset:I}},reset:D}}}),Ko=(e,t,n)=>{const o=new Map,r={platform:jo,...n},a={...r.platform,_c:o};return(async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:l}=n,c=a.filter(Boolean),d=await(null==l.isRTL?void 0:l.isRTL(t));let h=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:p,y:u}=Kn(h,o,d),f=o,g={},m=0;for(let n=0;n<c.length;n++){const{name:a,fn:b}=c[n],{x:v,y,data:w,reset:x}=await b({x:p,y:u,initialPlacement:o,placement:f,strategy:r,middlewareData:g,rects:h,platform:l,elements:{reference:e,floating:t}});p=null!=v?v:p,u=null!=y?y:u,g={...g,[a]:{...g[a],...w}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(f=x.placement),x.rects&&(h=!0===x.rects?await l.getElementRects({reference:e,floating:t,strategy:r}):x.rects),({x:p,y:u}=Kn(h,f,d))),n=-1)}return{x:p,y:u,placement:f,strategy:r,middlewareData:g}})(e,t,{...r,platform:a})},Zo=Mi(class extends directive_i{constructor(e){if(super(e),e.type!==Ti||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const n=e.element.classList;for(const e of this.st)e in t||(n.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return ci}});function Yo(e){return Xo(e)}function Qo(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Xo(e){for(let t=e;t;t=Qo(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=Qo(e);t;t=Qo(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var Jo=class extends En{constructor(){super(...arguments),this.localize=new An(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let n=0,o=0,r=0,a=0,l=0,c=0,d=0,h=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(n=e.left,o=e.bottom,r=e.right,a=e.bottom,l=t.left,c=t.top,d=t.right,h=t.top):(n=t.left,o=t.bottom,r=t.right,a=t.bottom,l=e.left,c=e.top,d=e.right,h=e.top):e.left<t.left?(n=e.right,o=e.top,r=t.left,a=t.top,l=e.right,c=e.bottom,d=t.left,h=t.bottom):(n=t.right,o=t.top,r=e.left,a=e.top,l=t.right,c=t.bottom,d=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${n}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=Uo(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[Fo({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Wo({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,n="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=n?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Vo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(qo({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Wo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Go({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>jo.getOffsetParent(e,Yo):jo.getOffsetParent;Ko(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:on(nn({},jo),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:n,placement:o})=>{const r="rtl"===this.localize.dir(),a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=n.arrow.x,t=n.arrow.y;let o="",l="",c="",d="";if("start"===this.arrowPlacement){const n="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",l=r?n:"",d=r?"":n}else if("end"===this.arrowPlacement){const n="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";l=r?"":n,d=r?n:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(d="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(d="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:l,bottom:c,left:d,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return li`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Zo({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Zo({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?li`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function er(e,t){return new Promise((n=>{e.addEventListener(t,(function o(r){r.target===e&&(e.removeEventListener(t,o),n())}))}))}function tr(e,t,n){return new Promise((o=>{if((null==n?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,on(nn({},n),{duration:nr()?0:n.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})}))}function ir(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function nr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function or(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}function rr(e,t){const n=nn({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:r}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach((t=>{const r=t;if(e.has(r)){const t=e.get(r),a=this[r];t!==a&&(n.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,a))}})),r.call(this,e)}}}Jo.styles=[Sn,fn],rn([Ai(".popup")],Jo.prototype,"popup",2),rn([Ai(".popup__arrow")],Jo.prototype,"arrowEl",2),rn([ki()],Jo.prototype,"anchor",2),rn([ki({type:Boolean,reflect:!0})],Jo.prototype,"active",2),rn([ki({reflect:!0})],Jo.prototype,"placement",2),rn([ki({reflect:!0})],Jo.prototype,"strategy",2),rn([ki({type:Number})],Jo.prototype,"distance",2),rn([ki({type:Number})],Jo.prototype,"skidding",2),rn([ki({type:Boolean})],Jo.prototype,"arrow",2),rn([ki({attribute:"arrow-placement"})],Jo.prototype,"arrowPlacement",2),rn([ki({attribute:"arrow-padding",type:Number})],Jo.prototype,"arrowPadding",2),rn([ki({type:Boolean})],Jo.prototype,"flip",2),rn([ki({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],Jo.prototype,"flipFallbackPlacements",2),rn([ki({attribute:"flip-fallback-strategy"})],Jo.prototype,"flipFallbackStrategy",2),rn([ki({type:Object})],Jo.prototype,"flipBoundary",2),rn([ki({attribute:"flip-padding",type:Number})],Jo.prototype,"flipPadding",2),rn([ki({type:Boolean})],Jo.prototype,"shift",2),rn([ki({type:Object})],Jo.prototype,"shiftBoundary",2),rn([ki({attribute:"shift-padding",type:Number})],Jo.prototype,"shiftPadding",2),rn([ki({attribute:"auto-size"})],Jo.prototype,"autoSize",2),rn([ki()],Jo.prototype,"sync",2),rn([ki({type:Object})],Jo.prototype,"autoSizeBoundary",2),rn([ki({attribute:"auto-size-padding",type:Number})],Jo.prototype,"autoSizePadding",2),rn([ki({attribute:"hover-bridge",type:Boolean})],Jo.prototype,"hoverBridge",2);var sr=class extends En{constructor(){super(),this.localize=new An(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=ir(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=ir(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await or(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:n}=pn(this,"tooltip.show",{dir:this.localize.dir()});await tr(this.popup.popup,t,n),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await or(this.body);const{keyframes:e,options:n}=pn(this,"tooltip.hide",{dir:this.localize.dir()});await tr(this.popup.popup,e,n),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,er(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,er(this,"sl-after-hide")}render(){return li`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Zo({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};sr.styles=[Sn,un],sr.dependencies={"sl-popup":Jo},rn([Ai("slot:not([name])")],sr.prototype,"defaultSlot",2),rn([Ai(".tooltip__body")],sr.prototype,"body",2),rn([Ai("sl-popup")],sr.prototype,"popup",2),rn([ki()],sr.prototype,"content",2),rn([ki()],sr.prototype,"placement",2),rn([ki({type:Boolean,reflect:!0})],sr.prototype,"disabled",2),rn([ki({type:Number})],sr.prototype,"distance",2),rn([ki({type:Boolean,reflect:!0})],sr.prototype,"open",2),rn([ki({type:Number})],sr.prototype,"skidding",2),rn([ki()],sr.prototype,"trigger",2),rn([ki({type:Boolean})],sr.prototype,"hoist",2),rn([rr("open",{waitUntilFirstUpdate:!0})],sr.prototype,"handleOpenChange",1),rn([rr(["content","distance","hoist","placement","skidding"])],sr.prototype,"handleOptionsChange",1),rn([rr("disabled")],sr.prototype,"handleDisabledChange",1),hn("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),hn("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});sr.define("sl-tooltip");var ar=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,cr=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?lr(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&ar(t,n,a),a};hn("tooltip.show",null),hn("tooltip.hide",null);let dr=class extends lit_element_r{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return li`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??di}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};dr.styles=At`
		sl-tooltip {
			--max-width: 320px;
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}
	`,cr([ki()],dr.prototype,"content",2),cr([ki({reflect:!0})],dr.prototype,"placement",2),cr([ki({type:Boolean})],dr.prototype,"disabled",2),cr([ki({type:Number})],dr.prototype,"distance",2),cr([ki({type:Boolean})],dr.prototype,"hoist",2),dr=cr([yi("gl-tooltip")],dr);const hr=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33"}),pr=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141"});var ur=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,gr=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?fr(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&ur(t,n,a),a};function mr(e,t=""){return $t(Object.entries(e).map((([e,n])=>function(e,t,n=""){return`:host([icon='${n}${e}'])::before { content: '${t}'; }`}(e,n,t))).join(""))}let br=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};br.styles=At`
		:host {
			--code-icon-size: 16px;
			--code-icon-v-align: text-bottom;

			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${mr(hr)}
		${mr(pr,"gl-")}

		:host([icon='custom-start-work']) {
			position: relative;
		}
		:host([icon='custom-start-work'])::before {
			content: '\\ea68';
		}
		:host([icon='custom-start-work'])::after {
			content: '\\ea60';
			position: absolute;
			right: -0.2em;
			bottom: -0.2em;
			font-size: 0.6em;
			line-height: normal;
		}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,gr([ki({reflect:!0})],br.prototype,"icon",2),gr([ki({reflect:!0})],br.prototype,"modifier",2),gr([ki({type:Number})],br.prototype,"size",2),gr([ki({reflect:!0})],br.prototype,"flip",2),gr([ki({reflect:!0})],br.prototype,"rotate",2),br=gr([yi("code-icon")],br);var vr=Object.defineProperty,yr=Object.getOwnPropertyDescriptor,wr=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?yr(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&vr(t,n,a),a};let xr=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.disabled=!1}render(){return li`
			<gl-tooltip hoist content="${this.label??di}">
				<a
					role="${this.href?di:"button"}"
					type="${this.href?di:"button"}"
					aria-label="${this.label??di}"
					?disabled=${this.disabled}
					href=${this.href??di}
				>
					<code-icon icon="${this.icon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};xr.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},xr.styles=At`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: inherit;
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus-within) {
			${Wi}
		}

		:host(:hover) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}

		a {
			color: inherit;
		}
		a:focus {
			outline: none;
		}
	`,wr([ki()],xr.prototype,"href",2),wr([ki()],xr.prototype,"label",2),wr([ki()],xr.prototype,"icon",2),wr([ki({type:Boolean})],xr.prototype,"disabled",2),wr([Ai("a")],xr.prototype,"defaultFocusEl",2),xr=wr([yi("action-item")],xr);var kr=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,$r=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?_r(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&kr(t,n,a),a};const Ar={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};let Cr=class extends lit_element_r{get statusName(){return this.status?Ar[this.status]:""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return li`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return li`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return li`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return li`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return li`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return li`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return li`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return li`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return li`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};Cr.styles=[At`
			:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],$r([ki()],Cr.prototype,"status",2),$r([_i()],Cr.prototype,"statusName",1),Cr=$r([yi("gl-git-status")],Cr);const Sr=At`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`,Er=(At`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Wi}
	}
	a:hover {
		text-decoration: underline;
	}
`,At`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}

	:host-context(.preload) .scrollable {
		transition: none;
	}
`),Pr=[Sr,At``],Rr=[Sr,At`
		:host {
			--tree-connector-spacing: 0.6rem;
			--tree-connector-size: var(--gitlens-tree-indent, 1.6rem);
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			/* padding-right: var(--gitlens-scrollbar-gutter-width); */
			padding-right: 0.5rem;
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--gitlens-tree-foreground, var(--vscode-foreground));

			content-visibility: auto;
			contain-intrinsic-size: auto 2.2rem;
			cursor: pointer;
		}

		:host(:hover),
		:host(:focus-within) {
			content-visibility: visible;
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host([aria-selected='true']) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* TODO: these should be :has(.input:focus) instead of :focus-within */
		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true']:focus-within) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.6rem;
			width: 100%;
			padding: 0;
			font-family: inherit;
			font-size: inherit;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			min-width: 0;
		}

		/* FIXME: remove, this is for debugging
		.item:focus {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}
 		*/
		.icon {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		slot[name='icon']::slotted(*) {
			width: 1.6rem;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.node {
			display: inline-block;
			width: var(--tree-connector-size);
			text-align: center;
			flex: none;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		.node:last-of-type {
			margin-right: 0.3rem;
		}

		.node--connector {
			position: relative;
		}

		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-1px, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		:host-context([guides='always']) .node--connector::before,
		:host-context([guides='onHover']:focus-within) .node--connector::before,
		:host-context([guides='onHover']:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.branch {
			display: inline-block;
			margin-right: 0.6rem;
			height: 2.2rem;
			line-height: 2.2rem;
			vertical-align: text-bottom;
		}

		.text {
			line-height: 1.6rem;
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.main {
			display: inline;
		}

		.description {
			display: inline;
			opacity: 0.7;
			font-size: 0.9em;
			margin-left: 0.3rem;
			pointer-events: none;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host(:not(:hover):not(:focus-within)) .actions {
			display: none;
		}

		.checkbox {
			position: relative;
			display: inline-flex;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			text-align: center;
			color: var(--vscode-checkbox-foreground);
			background: var(--vscode-checkbox-background);
			border: 1px solid var(--vscode-checkbox-border);
			border-radius: 0.3rem;
			// overflow: hidden;
			margin-right: 0.6rem;
		}

		.checkbox:has(:checked) {
			color: var(--vscode-inputOption-activeForeground);
			border-color: var(--vscode-inputOption-activeBorder);
			background-color: var(--vscode-inputOption-activeBackground);
		}

		.checkbox:has(:disabled) {
			opacity: 0.4;
		}

		.checkbox__input {
			position: absolute;
			top: 0;
			left: 0;
			appearance: none;
			width: 1.4rem;
			aspect-ratio: 1 / 1;
			margin: 0;
			cursor: pointer;
			border-radius: 0.3rem;
		}

		.checkbox__input:disabled {
			cursor: default;
		}

		.checkbox__check {
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			opacity: 0;
			transition: opacity 0.1s linear;
			color: var(--vscode-checkbox-foreground);
			pointer-events: none;
		}

		.checkbox__input:checked + .checkbox__check {
			opacity: 1;
		}

		slot[name='decorations'] {
			display: inline-block;
			margin-left: 0.4rem;
		}
	`];var Tr=Object.defineProperty,Or=Object.getOwnPropertyDescriptor,Mr=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?Or(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&Tr(t,n,a),a};let Lr=class extends lit_element_r{disconnectedCallback(){super.disconnectedCallback(),this._slotSubscriptionsDisposer?.()}firstUpdated(){this.setAttribute("role","tree")}render(){return li`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(){if(!this.treeItems?.length)return;const e=this.handleKeydown.bind(this),t=this.handleBeforeSelected.bind(this),n=this.handleSelected.bind(this),o=this.treeItems.map((o=>(o.addEventListener("keydown",e,!1),o.addEventListener("gl-tree-item-select",t,!1),o.addEventListener("gl-tree-item-selected",n,!1),{dispose:function(){o?.removeEventListener("keydown",e,!1),o?.removeEventListener("gl-tree-item-select",t,!1),o?.removeEventListener("gl-tree-item-selected",n,!1)}})));this._slotSubscriptionsDisposer=()=>{o?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target)return;const t=e.target;if("ArrowUp"===e.key){const e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){const e=t.nextElementSibling;e?.focus()}}handleBeforeSelected(e){if(!e.target)return;const t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.node.branch)return;function t(e){const t=e.level;let n=e.previousElementSibling;for(;n;){if(n.level<t)return n;n=n.previousElementSibling}}const n=e.target,o=n.level;let r=n.nextElementSibling;for(;r&&o!==r.level;){const n=t(r);r.parentExpanded=!1!==n?.expanded,r.expanded=e.detail.node.expanded,r=r.nextElementSibling}}};Lr.styles=Pr,Mr([ki({reflect:!0})],Lr.prototype,"guides",2),Mr([Ci({flatten:!0})],Lr.prototype,"treeItems",2),Lr=Mr([yi("gl-tree")],Lr);var Dr=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,Ir=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?zr(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&Dr(t,n,a),a};let Br=class extends lit_element_r{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.()}render(){return li`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;const t=this.handleKeydown.bind(this),n=`${this.actionNodes.length}`,o=this.actionNodes.map(((e,o)=>(e.setAttribute("aria-posinset",`${o+1}`),e.setAttribute("aria-setsize",n),e.setAttribute("tabindex",0===o?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}})));this._slotSubscriptionsDisposer=()=>{o?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;const t=e.target,n=parseInt(t.getAttribute("aria-posinset")??"0",10);let o=null;if("ArrowLeft"===e.key){const e=1===n?this.actionNodes.length-1:n-2;o=this.actionNodes[e]}else if("ArrowRight"===e.key){const e=n===this.actionNodes.length?0:n;o=this.actionNodes[e]}null!=o&&o!==t&&(t.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),o.focus())}};Br.styles=At`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,Ir([Ci({flatten:!0})],Br.prototype,"actionNodes",2),Br=Ir([yi("action-nav")],Br);var Nr=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,Ur=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?jr(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&Nr(t,n,a),a};let Hr=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.selected=!1,this.focused=!1,this.onComponentClickBound=this.onComponentClick.bind(this)}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.onComponentClickBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onComponentClickBound)}onComponentClick(e){this.selectCore({dblClick:!1,altKey:e.altKey}),this.buttonEl.focus()}updateAttrs(e,t=!1){(e.has("expanded")||t)&&this.setAttribute("aria-expanded",this.expanded.toString()),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){const e=this.level-1;if(e<1&&!this.branch)return di;const t=[];if(e>0)for(let n=0;n<e;n++)t.push(li`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(li`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?li`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:di}renderActions(){return li`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return li`<slot name="decorations" class="decorations"></slot>`}render(){return li`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
			>
				${Si(this.showIcon,(()=>li`<slot name="icon" class="icon"></slot>`))}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.emit("gl-tree-item-select"),this.branch&&(this.expanded=!this.expanded),this.selected=!0,t||window.requestAnimationFrame((()=>{this.emit("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})}))}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.emit("gl-tree-item-checked",{node:this,checked:this.checked})}};Hr.styles=Rr,Ur([ki({type:Boolean})],Hr.prototype,"branch",2),Ur([ki({type:Boolean})],Hr.prototype,"expanded",2),Ur([ki({type:String})],Hr.prototype,"path",2),Ur([ki({type:String,attribute:"parent-path"})],Hr.prototype,"parentPath",2),Ur([ki({type:Boolean,attribute:"parent-expanded"})],Hr.prototype,"parentExpanded",2),Ur([ki({type:Number})],Hr.prototype,"level",2),Ur([ki({type:Number})],Hr.prototype,"size",2),Ur([ki({type:Number})],Hr.prototype,"position",2),Ur([ki({type:Boolean})],Hr.prototype,"checkable",2),Ur([ki({type:Boolean})],Hr.prototype,"checked",2),Ur([ki({type:Boolean})],Hr.prototype,"disableCheck",2),Ur([ki({type:Boolean})],Hr.prototype,"showIcon",2),Ur([_i()],Hr.prototype,"selected",2),Ur([_i()],Hr.prototype,"focused",2),Ur([Ai("#button")],Hr.prototype,"buttonEl",2),Hr=Ur([yi("gl-tree-item")],Hr);var Fr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Vr=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?qr(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&Fr(t,n,a),a};let Wr=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0}set model(e){if(this._model===e)return;let t;if(this._model=e,null!=this._model){const e=this._model.length;t=this._model.reduce(((t,n,o)=>(t.push(...Gr(n,e,o+1)),t)),[])}this.treeItems=t}get model(){return this._model}renderIcon(e){return null==e?di:"string"==typeof e?li`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?di:li`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){const t=e.actions;return null==t||0===t.length?di:t.map((t=>li`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${n=>this.onTreeItemActionClicked(n,e,t)}
				@dblclick=${n=>this.onTreeItemActionDblClicked(n,e,t)}
			></action-item>`))}renderDecorations(e){const t=e.decorations;return null==t||0===t.length?di:t.map((e=>"icon"===e.type?li`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?li`<span slot="decorations">${e.label}</span>`:void 0))}renderTreeItem(e){return li`<gl-tree-item
			.branch=${e.branch}
			.expanded=${e.expanded}
			.path=${e.path}
			.parentPath=${e.parentPath}
			.parentExpanded=${e.parentExpanded}
			.level=${e.level}
			.size=${e.size}
			.position=${e.position}
			.checkable=${e.checkable}
			.checked=${e.checked??!1}
			.disableCheck=${e.disableCheck??!1}
			.showIcon=${null!=e.icon}
			@gl-tree-item-selected=${t=>this.onTreeItemSelected(t,e)}
			@gl-tree-item-checked=${t=>this.onTreeItemChecked(t,e)}
		>
			${this.renderIcon(e.icon)}
			${e.label}${Si(null!=e.description,(()=>li`<span slot="description">${e.description}</span>`))}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}renderTree(e){return e?.map((e=>this.renderTreeItem(e)))}render(){return li`<gl-tree>${this.renderTree(this.treeItems)}</gl-tree>`}onTreeItemSelected(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,n){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:n,dblClick:!1,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onTreeItemActionDblClicked(e,t,n){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:n,dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}};function Gr(e,t=1,n=1){const o={size:t,position:n};for(const[t,n]of Object.entries(e))null!=n&&"children"!==t&&(o[t]=n);const r=[o];if(null!=e.children&&e.children.length>0){const t=e.children.length;for(let n=0;n<t;n++)r.push(...Gr(e.children[n],t,n+1))}return r}Wr.styles=At`
		:host {
			display: contents;
		}
	`,Vr([_i()],Wr.prototype,"treeItems",2),Vr([ki({reflect:!0})],Wr.prototype,"guides",2),Vr([ki({type:Array,attribute:!1})],Wr.prototype,"model",1),Wr=Vr([yi("gl-tree-generator")],Wr);var Kr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,Yr=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?Zr(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&Kr(t,n,a),a};let Qr=class extends lit_element_r{constructor(){super(...arguments),this.lines=1}render(){const e=`--skeleton-lines: ${this.lines};`;return li`<div class="skeleton" style=${e}></div>`}};Qr.styles=At`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,Yr([ki({type:Number})],Qr.prototype,"lines",2),Qr=Yr([yi("skeleton-loader")],Qr);class GlTreeBase extends GlElement{renderLoading(){return li`
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
		`}renderLayoutAction(e){if(!e)return di;let t="tree",n="list-tree",o="View as Tree";switch(e){case"auto":t="list",n="gl-list-auto",o="View as List";break;case"list":t="tree",n="list-flat",o="View as Tree";break;case"tree":t="auto",n="list-tree",o="View as Auto"}return li`<action-item data-switch-value="${t}" label="${o}" icon="${n}"></action-item>`}renderTreeView(e,t="none"){return li`<gl-tree-generator
			.model=${e}
			.guides=${t}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}renderFiles(e,t=!1,n=!1,o=2){const r=[];if(t){const t=Fi(e,(e=>e.path.split("/")),((...e)=>e.join("/")),n);if(null!=t.children)for(const e of t.children.values()){const t=this.walkFileTree(e,{level:o});r.push(t)}}else for(const t of e){const e=this.fileToTreeModel(t,{level:o,branch:!1},!0);r.push(e)}return r}walkFileTree(e,t={level:1}){let n;if(void 0===t.level&&(t.level=1),n=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){const o=[];for(const n of e.children.values()){const e=this.walkFileTree(n,{...t,level:t.level+1});o.push(e)}o.length>0&&(n.branch=!0,n.children=o)}return n}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}getRepoActions(e,t,n){return[]}emptyTreeModel(e,t){return{branch:!1,expanded:!0,path:"",level:1,checkable:!0,checked:!0,icon:void 0,label:e,...t}}repoToTreeModel(e,t,n,o){return{branch:!1,expanded:!0,path:t,level:1,checkable:!0,checked:!0,icon:"repo",label:e,description:o,context:[t],actions:this.getRepoActions(e,t,n),...n}}getFileActions(e,t){return[]}fileToTreeModel(e,t,n=!1,o="/"){const r=e.path.lastIndexOf(o),a=-1!==r?e.path.substring(r+1):e.path,l=n&&-1!==r?e.path.substring(0,r):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:"file",label:a,description:!0===n?l:void 0,context:[e],actions:this.getFileActions(e,t),decorations:[{type:"text",label:e.status}],...t}}}const Xr=At`
	.badge {
		display: inline-flex;
		font-size: var(--gl-badge-font-size, x-small);
		font-variant: all-small-caps;
		font-weight: 600;
		color: var(--gl-badge-color, var(--color-foreground--50));
		border: currentColor 1px solid;
		border-radius: 1rem;
		padding: 0 0.8rem 0.1rem;
		white-space: nowrap;
	}
`;var Jr=Object.defineProperty,es=Object.getOwnPropertyDescriptor;let ts=class extends lit_element_r{render(){return li`<slot class="badge" part="base"></slot>`}};ts.styles=[Xr],ts=((e,t,n,o)=>{for(var r,a=o>1?void 0:o?es(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&Jr(t,n,a),a})([yi("gl-badge")],ts);var is=Object.defineProperty,ns=Object.getOwnPropertyDescriptor,os=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?ns(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&is(t,n,a),a};let rs=class extends lit_element_r{constructor(){super(...arguments),this.editor=!1}render(){return li`<div class="group"><slot></slot></div>`}};rs.styles=[Sr,At`
			:host {
				--button-group-gap: 0.4rem;
				--button-group-wide-gap: 1rem;
				display: block;
				max-width: 30rem;
				margin-right: auto;
				margin-left: auto;
				text-align: left;
				transition: max-width 0.2s ease-out;
			}

			@media (min-width: 640px) {
				:host(:not([editor])) {
					max-width: 100%;
				}
			}

			.group {
				display: inline-flex;
				gap: var(--button-group-gap);
				width: 100%;
				max-width: 30rem;
			}

			:host([gap='wide']) .group {
				gap: var(--button-group-wide-gap);
			}
		`],os([ki({type:Boolean})],rs.prototype,"editor",2),os([ki({reflect:!0})],rs.prototype,"gap",2),rs=os([yi("button-container")],rs);var ss=Object.defineProperty,as=Object.getOwnPropertyDescriptor,ls=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?as(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&ss(t,n,a),a};let cs=class extends lit_element_r{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom"}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?li`<gl-tooltip .content=${this.tooltip} placement=${Pi(this.tooltipPlacement)}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?li`<gl-tooltip placement=${Pi(this.tooltipPlacement)}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?li`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:li`<button
			class="control"
			role=${Pi(this.role)}
			aria-checked=${Pi(this.ariaChecked)}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};cs.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},cs.styles=[Sr,At`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-input-padding: 0.1rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
				-webkit-font-smoothing: auto;
			}

			.control {
				box-sizing: border-box;
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);
				font-family: inherit;

				color: inherit;
				text-decoration: none;

				width: max-content;
				height: 100%;
				cursor: pointer;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-block;
				max-width: 100%;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${Gi}
			}

			:host([appearance='input']),
			:host([role='checkbox']:focus-within),
			:host([aria-checked]:focus-within) {
				outline-offset: -1px;
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='input']),
			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='input']) .control {
				padding: var(--button-input-padding);
				--button-line-height: 1.1;
				height: 1.8rem;
				gap: 0.2rem;
			}

			:host([appearance='input'][href]) > a,
			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([aria-checked]:hover:not([disabled]):not([aria-checked='true'])) {
				background-color: var(--vscode-inputOption-hoverBackground);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			:host([disabled][aria-checked='true']) {
				opacity: 0.8;
			}

			:host([aria-checked='true']) {
				background-color: var(--vscode-inputOption-activeBackground);
				color: var(--vscode-inputOption-activeForeground);
				border-color: var(--vscode-inputOption-activeBorder);
			}

			gl-tooltip {
				height: 100%;
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],ls([Ai(".control")],cs.prototype,"control",2),ls([ki({reflect:!0})],cs.prototype,"appearance",2),ls([ki({type:Boolean,reflect:!0})],cs.prototype,"disabled",2),ls([ki({reflect:!0})],cs.prototype,"density",2),ls([ki({type:Boolean,reflect:!0})],cs.prototype,"full",2),ls([ki()],cs.prototype,"href",2),ls([ki({reflect:!0})],cs.prototype,"role",1),ls([ki()],cs.prototype,"tooltip",2),ls([ki()],cs.prototype,"tooltipPlacement",2),cs=ls([yi("gl-button")],cs);const ds=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))}),hs=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,ps=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,us=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let fs;const gs=new Map;let ms,bs,vs;function ys(e,t,n,o=!0){const r=`${n??""}:${t=t??void 0}`;let a=gs.get(r);if(null==a){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=ps.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:n}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:n||void 0}}const n={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(hs))if(null!=t)for(const[e,o]of Object.entries(t))if(null!=o)switch(e){case"year":n.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:n.month="long";break;case 3:n.month="short";break;case 2:n.month="2-digit";break;case 1:n.month="numeric"}break;case"day":n.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:n.weekday="long";break;case 3:n.weekday="short";break;case 2:n.weekday="narrow"}break;case"hour":n.hour=2===o.length?"2-digit":"numeric",n.hour12="hh"===o||"h"===o;break;case"minute":n.minute=2===o.length?"2-digit":"numeric";break;case"second":n.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":n.fractionalSecondDigits=3;break;case"dayPeriod":n.dayPeriod="narrow",n.hour12=!0,n.hourCycle="h12";break;case"timeZoneName":n.timeZoneName=2===o.length?"long":"short"}return n}(t);let l;l=null==n?ms:"system"===n?void 0:[n],a=new Intl.DateTimeFormat(l,e),o&&gs.set(r,a)}if(null==t||ps.test(t))return a.format(e);function l(e){const t=`${n??""}:time:${e}`;let r=gs.get(t);if(null==r){const a={localeMatcher:"best fit",timeStyle:e};let l;l=null==n?ms:"system"===n?void 0:[n],r=new Intl.DateTimeFormat(l,a),o&&gs.set(t,r)}return r}const c=a.formatToParts(e);return t.replace(hs,((t,n,o,r,a,d,h,p,u,f,g,m,b,v,y)=>{if(null!=n)return n.substring(1,n.length-1);for(const[t,n]of Object.entries(y)){if(null==n)continue;const o=c.find((e=>e.type===t));if("Do"===n&&"day"===o?.type)return xs(Number(o.value));if("a"===n&&"dayPeriod"===o?.type){const t=l("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??o)?.value??""}`}return o?.value??""}return""}))}const ws=["th","st","nd","rd"];function xs(e){const t=e%100;return`${e}${ws[(t-20)%10]??ws[t]??ws[0]}`}var ks=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,$s=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?_s(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&ks(t,n,a),a};let As=class extends lit_element_r{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date,this.tooltip=""}render(){const e=ys(this.date,this.format??"MMMM Do, YYYY h:mma");return li`<gl-tooltip content="${this.tooltip} ${e}"
			><time datetime="${this.date.toISOString()}"
				>${"relative"===this.dateStyle?function(e,t){const n=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,o,r,a]of us){const l=Math.abs(n);if(l>=o||1e3===o)return t?(null==fs&&(null!=vs?fs=vs.resolvedOptions().locale:null!=bs?fs=bs.resolvedOptions().locale:(vs=new Intl.RelativeTimeFormat(ms,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),fs=vs.resolvedOptions().locale)),"en"===fs||fs?.startsWith("en-")?`${Math.round(l/r)}${a}`:(null==vs&&(vs=new Intl.RelativeTimeFormat(ms,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),vs.format(Math.round(n/r),e))):(null==bs&&(bs=new Intl.RelativeTimeFormat(ms,{localeMatcher:"best fit",numeric:"auto",style:"long"})),bs.format(Math.round(n/r),e))}return""}(this.date):e}</time
			></gl-tooltip
		>`}};$s([ki()],As.prototype,"format",2),$s([ki({attribute:"date-style"})],As.prototype,"dateStyle",2),$s([ki({converter:ds(),reflect:!0})],As.prototype,"date",2),$s([ki()],As.prototype,"tooltip",2),As=$s([yi("formatted-date")],As);var Cs=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,Es=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?Ss(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&Cs(t,n,a),a};let Ps=class extends lit_element_r{constructor(){super(...arguments),this.name="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.dateStyle="relative",this.committer=!1}renderAvatar(){return this.showAvatar&&this.avatarUrl?.length?li`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:li`<code-icon icon="person" size="18"></code-icon>`}render(){return li`
			<gl-tooltip>
				${Si(null!=this.url,(()=>li`<a class="author" href="${this.url}"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name" href="${this.url}">${this.name}</span></a
						>`),(()=>li`<span class="author"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name" href="${this.url}">${this.name}</span></span
						>`))}
				<div class="author-hover" slot="content">
					${this.avatarUrl?.length?li`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:di}
					<span>${this.name}</span>
				</div>
			</gl-tooltip>
			<span class="date">
				${this.actionLabel}
				<formatted-date
					.date=${this.date}
					.format=${this.dateFormat}
					.dateStyle=${this.dateStyle}
				></formatted-date>
			</span>
		`}};Ps.styles=At`
		:host,
		.author {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0 0.6rem;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.author-hover {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.6rem;
			margin: 0.6rem 0.2rem 0.2rem 0.2rem;
		}

		.author-hover img {
			max-width: 64px;
		}

		.avatar {
			width: 1.8rem;
		}

		.thumb {
			width: 100%;
			height: auto;
			vertical-align: middle;
			border-radius: 0.4rem;
		}

		.name {
			flex: 1;
			font-size: 1.3rem;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.date {
			flex: none;
			margin-inline-start: auto;
			font-size: 1.3rem;
			color: var(--color-foreground--50);
		}
	`,Es([ki()],Ps.prototype,"name",2),Es([ki()],Ps.prototype,"url",2),Es([ki({converter:ds(),reflect:!0})],Ps.prototype,"date",2),Es([ki()],Ps.prototype,"avatarUrl",2),Es([ki({type:Boolean,attribute:"show-avatar",reflect:!0})],Ps.prototype,"showAvatar",2),Es([ki()],Ps.prototype,"dateFormat",2),Es([ki()],Ps.prototype,"dateStyle",2),Es([ki({type:Boolean})],Ps.prototype,"committer",2),Es([ki()],Ps.prototype,"actionLabel",2),Ps=Es([yi("commit-identity")],Ps);const Rs=(e,t)=>{const n=e._$AN;if(void 0===n)return!1;for(const e of n)e._$AO?.(t,!1),Rs(e,t);return!0},Ts=e=>{let t,n;do{if(void 0===(t=e._$AM))break;n=t._$AN,n.delete(e),e=t}while(0===n?.size)},Os=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ds(t)}};function Ms(e){void 0!==this._$AN?(Ts(this),this._$AM=e,Os(this)):this._$AM=e}function Ls(e,t=!1,n=0){const o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(o))for(let e=n;e<o.length;e++)Rs(o[e],!1),Ts(o[e]);else null!=o&&(Rs(o,!1),Ts(o));else Rs(this,e)}const Ds=e=>{e.type==Oi&&(e._$AP??=Ls,e._$AQ??=Ms)};class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Os(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Rs(this,e),Ts(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class private_async_helpers_s{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class private_async_helpers_i{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((e=>this.q=e))}resume(){this.q?.(),this.Z=this.q=void 0}}const zs=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,Is=1073741823;const Bs=Mi(class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=Is,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find((e=>!zs(e)))??ci}update(e,t){const n=this._$Cbt;let o=n.length;this._$Cbt=t;const r=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const l=t[e];if(!zs(l))return this._$Cwt=e,l;e<o&&l===n[e]||(this._$Cwt=Is,o=0,Promise.resolve(l).then((async e=>{for(;a.get();)await a.get();const t=r.deref();if(void 0!==t){const n=t._$Cbt.indexOf(l);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}})))}return ci}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});function Ns(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let js={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};function Us(e){js=e}const Hs={exec:()=>null};function Fs(e,t=""){let n="string"==typeof e?e:e.source;const o={replace:(e,t)=>{let r="string"==typeof t?t:t.source;return r=r.replace(qs.caret,"$1"),n=n.replace(e,r),o},getRegex:()=>new RegExp(n,t)};return o}const qs={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[\t ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Vs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ws=/(?:[*+-]|\d{1,9}[.)])/,Gs=Fs(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Ws).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Ks=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Zs=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Ys=Fs(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Zs).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Qs=Fs(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ws).getRegex(),Xs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Js=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ea=Fs("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))","i").replace("comment",Js).replace("tag",Xs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ta=Fs(Ks).replace("hr",Vs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Xs).getRegex(),ia={blockquote:Fs(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ta).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:Ys,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:Vs,html:ea,lheading:Gs,list:Qs,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:ta,table:Hs,text:/^[^\n]+/},na=Fs("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Vs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}\t)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Xs).getRegex(),oa={...ia,table:na,paragraph:Fs(Ks).replace("hr",Vs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",na).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Xs).getRegex()},ra={...ia,html:Fs("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Js).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Hs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Fs(Ks).replace("hr",Vs).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Gs).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},sa=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,aa=/^( {2,}|\\)\n(?!\s*$)/,la=/[\p{P}\p{S}]/u,ca=/[\s\p{P}\p{S}]/u,da=/[^\s\p{P}\p{S}]/u,ha=Fs(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ca).getRegex(),pa=Fs(/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,"u").replace(/punct/g,la).getRegex(),ua=Fs("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)","gu").replace(/notPunctSpace/g,da).replace(/punctSpace/g,ca).replace(/punct/g,la).getRegex(),fa=Fs("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,da).replace(/punctSpace/g,ca).replace(/punct/g,la).getRegex(),ga=Fs(/\\(punct)/,"gu").replace(/punct/g,la).getRegex(),ma=Fs(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ba=Fs(Js).replace("(?:--\x3e|$)","--\x3e").getRegex(),va=Fs("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",ba).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ya=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,wa=Fs(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",ya).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),xa=Fs(/^!?\[(label)\]\[(ref)\]/).replace("label",ya).replace("ref",Zs).getRegex(),ka=Fs(/^!?\[(ref)\](?:\[\])?/).replace("ref",Zs).getRegex(),_a={_backpedal:Hs,anyPunctuation:ga,autolink:ma,blockSkip:/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,br:aa,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:Hs,emStrongLDelim:pa,emStrongRDelimAst:ua,emStrongRDelimUnd:fa,escape:sa,link:wa,nolink:ka,punctuation:ha,reflink:xa,reflinkSearch:Fs("reflink|nolink(?!\\()","g").replace("reflink",xa).replace("nolink",ka).getRegex(),tag:va,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:Hs},$a={..._a,link:Fs(/^!?\[(label)\]\((.*?)\)/).replace("label",ya).getRegex(),reflink:Fs(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ya).getRegex()},Aa={..._a,escape:Fs(sa).replace("])","~|])").getRegex(),url:Fs(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ca={...Aa,br:Fs(aa).replace("{2,}","*").getRegex(),text:Fs(Aa.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Sa={normal:ia,gfm:oa,pedantic:ra},Ea={normal:_a,gfm:Aa,breaks:Ca,pedantic:$a},Pa={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ra=e=>Pa[e];function Ta(e,t){if(t){if(qs.escapeTest.test(e))return e.replace(qs.escapeReplace,Ra)}else if(qs.escapeTestNoEncode.test(e))return e.replace(qs.escapeReplaceNoEncode,Ra);return e}function Oa(e){try{e=encodeURI(e).replace(qs.percentDecode,"%")}catch{return null}return e}function Ma(e,t){const n=e.replace(qs.findPipe,((e,t,n)=>{let o=!1,r=t;for(;--r>=0&&"\\"===n[r];)o=!o;return o?"|":" |"})),o=n.split(qs.splitPipe);let r=0;if(o[0].trim()||o.shift(),o.length>0&&!o.at(-1)?.trim()&&o.pop(),t)if(o.length>t)o.splice(t);else for(;o.length<t;)o.push("");for(;r<o.length;r++)o[r]=o[r].trim().replace(qs.slashPipe,"|");return o}function La(e,t,n){const o=e.length;if(0===o)return"";let r=0;for(;r<o;){const a=e.charAt(o-r-1);if(a!==t||n){if(a===t||!n)break;r++}else r++}return e.slice(0,o-r)}function Da(e,t,n,o,r){const a=t.href,l=t.title||null,c=e[1].replace(r.other.outputLinkReplace,"$1");if("!"!==e[0].charAt(0)){o.state.inLink=!0;const e={type:"link",raw:n,href:a,title:l,text:c,tokens:o.inlineTokens(c)};return o.state.inLink=!1,e}return{type:"image",raw:n,href:a,title:l,text:c}}class _Tokenizer{options;rules;lexer;constructor(e){this.options=e||js}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:La(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t,n){const o=e.match(n.other.indentCodeCompensation);if(null===o)return t;const r=o[1];return t.split("\n").map((e=>{const t=e.match(n.other.beginningSpace);if(null===t)return e;const[o]=t;return o.length>=r.length?e.slice(r.length):e})).join("\n")}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){const t=La(e,"#");this.options.pedantic?e=t.trim():t&&!this.rules.other.endingSpaceChar.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:La(t[0],"\n")}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let e=La(t[0],"\n").split("\n"),n="",o="";const r=[];for(;e.length>0;){let t=!1;const a=[];let l;for(l=0;l<e.length;l++)if(this.rules.other.blockquoteStart.test(e[l]))a.push(e[l]),t=!0;else{if(t)break;a.push(e[l])}e=e.slice(l);const c=a.join("\n"),d=c.replace(this.rules.other.blockquoteSetextReplace,"\n    $1").replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}\n${c}`:c,o=o?`${o}\n${d}`:d;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,r,!0),this.lexer.state.top=h,0===e.length)break;const p=r.at(-1);if("code"===p?.type)break;if("blockquote"===p?.type){const t=p,a=t.raw+"\n"+e.join("\n"),l=this.blockquote(a);r[r.length-1]=l,n=n.substring(0,n.length-t.raw.length)+l.raw,o=o.substring(0,o.length-t.text.length)+l.text;break}if("list"!==p?.type);else{const t=p,a=t.raw+"\n"+e.join("\n"),l=this.list(a);r[r.length-1]=l,n=n.substring(0,n.length-p.raw.length)+l.raw,o=o.substring(0,o.length-t.raw.length)+l.raw,e=a.substring(r.at(-1).raw.length).split("\n")}}return{type:"blockquote",raw:n,tokens:r,text:o}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const o=n.length>1,r={type:"list",raw:"",ordered:o,start:o?+n.slice(0,-1):"",loose:!1,items:[]};n=o?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=o?n:"[*+-]");const a=this.rules.other.listItemRegex(n);let l=!1;for(;e;){let n=!1,o="",c="";if(!(t=a.exec(e)))break;if(this.rules.block.hr.test(e))break;o=t[0],e=e.substring(o.length);let d=t[2].split("\n",1)[0].replace(this.rules.other.listReplaceTabs,(e=>" ".repeat(3*e.length))),h=e.split("\n",1)[0],p=!d.trim(),u=0;if(this.options.pedantic?(u=2,c=d.trimStart()):p?u=t[1].length+1:(u=t[2].search(this.rules.other.nonSpaceChar),u=u>4?1:u,c=d.slice(u),u+=t[1].length),p&&this.rules.other.blankLine.test(h)&&(o+=h+"\n",e=e.substring(h.length+1),n=!0),!n){const t=this.rules.other.nextBulletRegex(u),n=this.rules.other.hrRegex(u),r=this.rules.other.fencesBeginRegex(u),a=this.rules.other.headingBeginRegex(u),l=this.rules.other.htmlBeginRegex(u);for(;e;){const f=e.split("\n",1)[0];let g;if(h=f,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),g=h):g=h.replace(this.rules.other.tabCharGlobal,"    "),r.test(h))break;if(a.test(h))break;if(l.test(h))break;if(t.test(h))break;if(n.test(h))break;if(g.search(this.rules.other.nonSpaceChar)>=u||!h.trim())c+="\n"+g.slice(u);else{if(p)break;if(d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4)break;if(r.test(d))break;if(a.test(d))break;if(n.test(d))break;c+="\n"+h}p||h.trim()||(p=!0),o+=f+"\n",e=e.substring(f.length+1),d=g.slice(u)}}r.loose||(l?r.loose=!0:this.rules.other.doubleBlankLine.test(o)&&(l=!0));let f,g=null;this.options.gfm&&(g=this.rules.other.listIsTask.exec(c),g&&(f="[ ] "!==g[0],c=c.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:o,task:!!g,checked:f,loose:!1,text:c,tokens:[]}),r.raw+=o}const c=r.items.at(-1);c&&(c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd()),r.raw=r.raw.trimEnd();for(let e=0;e<r.items.length;e++)if(this.lexer.state.top=!1,r.items[e].tokens=this.lexer.blockTokens(r.items[e].text,[]),!r.loose){const t=r.items[e].tokens.filter((e=>"space"===e.type)),n=t.length>0&&t.some((e=>this.rules.other.anyLine.test(e.raw)));r.loose=n}if(r.loose)for(let e=0;e<r.items.length;e++)r.items[e].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t){return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}}def(e){const t=this.rules.block.def.exec(e);if(t){const e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:n,title:o}}}table(e){const t=this.rules.block.table.exec(e);if(!t)return;if(!this.rules.other.tableDelimiter.test(t[2]))return;const n=Ma(t[1]),o=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split("\n"):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===o.length){for(const e of o)this.rules.other.tableAlignRight.test(e)?a.align.push("right"):this.rules.other.tableAlignCenter.test(e)?a.align.push("center"):this.rules.other.tableAlignLeft.test(e)?a.align.push("left"):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(const e of r)a.rows.push(Ma(e,a.header.length).map(((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]}))));return a}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;const t=La(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;let n=0;for(let o=0;o<e.length;o++)if("\\"===e[o])o++;else if(e[o]===t[0])n++;else if(e[o]===t[1]&&(n--,n<0))return o;return-1}(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],o="";if(this.options.pedantic){const e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],o=e[3])}else o=t[3]?t[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),Da(t,{href:n?n.replace(this.rules.inline.anyPunctuation,"$1"):n,title:o?o.replace(this.rules.inline.anyPunctuation,"$1"):o},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return Da(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!o)return;if(o[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(o[1]||o[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const n=[...o[0]].length-1;let r,a,l=n,c=0;const d="*"===o[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+n);null!=(o=d.exec(t));){if(r=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!r)continue;if(a=[...r].length,o[3]||o[4]){l+=a;continue}if((o[5]||o[6])&&n%3&&!((n+a)%3)){c+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+c);const t=[...o[0]][0].length,d=e.slice(0,n+o.index+t+a);if(Math.min(n,a)%2){const e=d.slice(1,-1);return{type:"em",raw:d,text:e,tokens:this.lexer.inlineTokens(e)}}const h=d.slice(2,-2);return{type:"strong",raw:d,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," ");const n=this.rules.other.nonSpaceChar.test(e),o=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&o&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let e,n;return"@"===t[2]?(e=t[1],n="mailto:"+e):(e=t[1],n=e),{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if("@"===t[2])e=t[0],n="mailto:"+e;else{let o;do{o=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??""}while(o!==t[0]);e=t[0],n="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}}class _Lexer{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||js,this.options.tokenizer=this.options.tokenizer||new _Tokenizer,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:qs,block:Sa.normal,inline:Ea.normal};this.options.pedantic?(t.block=Sa.pedantic,t.inline=Ea.pedantic):this.options.gfm&&(t.block=Sa.gfm,this.options.breaks?t.inline=Ea.breaks:t.inline=Ea.gfm),this.tokenizer.rules=t}static get rules(){return{block:Sa,inline:Ea}}static lex(e,t){return new _Lexer(t).lex(e)}static lexInline(e,t){return new _Lexer(t).inlineTokens(e)}lex(e){e=e.replace(qs.carriageReturn,"\n"),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.options.pedantic&&(e=e.replace(qs.tabCharGlobal,"    ").replace(qs.spaceLine,""));e;){let o;if(this.options.extensions?.block?.some((n=>!!(o=n.call({lexer:this},e,t))&&(e=e.substring(o.raw.length),t.push(o),!0))))continue;if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length);const n=t.at(-1);1===o.raw.length&&void 0!==n?n.raw+="\n":t.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length);const n=t.at(-1);"paragraph"===n?.type||"text"===n?.type?(n.raw+="\n"+o.raw,n.text+="\n"+o.text,this.inlineQueue.at(-1).src=n.text):t.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length);const n=t.at(-1);"paragraph"===n?.type||"text"===n?.type?(n.raw+="\n"+o.raw,n.text+="\n"+o.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),t.push(o);continue}let r=e;if(this.options.extensions?.startBlock){let t=1/0;const n=e.slice(1);let o;this.options.extensions.startBlock.forEach((e=>{o=e.call({lexer:this},n),"number"==typeof o&&o>=0&&(t=Math.min(t,o))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(this.state.top&&(o=this.tokenizer.paragraph(r))){const a=t.at(-1);n&&"paragraph"===a?.type?(a.raw+="\n"+o.raw,a.text+="\n"+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(o),n=r.length!==e.length,e=e.substring(o.raw.length)}else if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length);const n=t.at(-1);"text"===n?.type?(n.raw+="\n"+o.raw,n.text+="\n"+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(o)}else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n=e,o=null;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(o=this.tokenizer.rules.inline.reflinkSearch.exec(n));)e.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(o=this.tokenizer.rules.inline.blockSkip.exec(n));)n=n.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(o=this.tokenizer.rules.inline.anyPunctuation.exec(n));)n=n.slice(0,o.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let r=!1,a="";for(;e;){let o;if(r||(a=""),r=!1,this.options.extensions?.inline?.some((n=>!!(o=n.call({lexer:this},e,t))&&(e=e.substring(o.raw.length),t.push(o),!0))))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);const n=t.at(-1);"text"===o.type&&"text"===n?.type?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,a)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let l=e;if(this.options.extensions?.startInline){let t=1/0;const n=e.slice(1);let o;this.options.extensions.startInline.forEach((e=>{o=e.call({lexer:this},n),"number"==typeof o&&o>=0&&(t=Math.min(t,o))})),t<1/0&&t>=0&&(l=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(l)){e=e.substring(o.raw.length),"_"!==o.raw.slice(-1)&&(a=o.raw.slice(-1)),r=!0;const n=t.at(-1);"text"===n?.type?(n.raw+=o.raw,n.text+=o.text):t.push(o)}else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw new Error(t)}}return t}}class _Renderer{options;parser;constructor(e){this.options=e||js}space(e){return""}code({text:e,lang:t,escaped:n}){const o=(t||"").match(qs.notSpaceStart)?.[0],r=e.replace(qs.endingNewline,"")+"\n";return o?'<pre><code class="language-'+Ta(o)+'">'+(n?r:Ta(r,!0))+"</code></pre>\n":"<pre><code>"+(n?r:Ta(r,!0))+"</code></pre>\n"}blockquote({tokens:e}){return`<blockquote>\n${this.parser.parse(e)}</blockquote>\n`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>\n`}hr(e){return"<hr>\n"}list(e){const t=e.ordered,n=e.start;let o="";for(let t=0;t<e.items.length;t++){const n=e.items[t];o+=this.listitem(n)}const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+o+"</"+r+">\n"}listitem(e){let t="";if(e.task){const n=this.checkbox({checked:!!e.checked});e.loose?"paragraph"===e.tokens[0]?.type?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=n+" "+Ta(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>\n`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>\n`}table(e){let t="",n="";for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let o="";for(let t=0;t<e.rows.length;t++){const r=e.rows[t];n="";for(let e=0;e<r.length;e++)n+=this.tablecell(r[e]);o+=this.tablerow({text:n})}return o&&(o=`<tbody>${o}</tbody>`),"<table>\n<thead>\n"+t+"</thead>\n"+o+"</table>\n"}tablerow({text:e}){return`<tr>\n${e}</tr>\n`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>\n`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ta(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const o=this.parser.parseInline(n),r=Oa(e);if(null===r)return o;let a='<a href="'+(e=r)+'"';return t&&(a+=' title="'+Ta(t)+'"'),a+=">"+o+"</a>",a}image({href:e,title:t,text:n}){const o=Oa(e);if(null===o)return Ta(n);let r=`<img src="${e=o}" alt="${n}"`;return t&&(r+=` title="${Ta(t)}"`),r+=">",r}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Ta(e.text)}}class _TextRenderer{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class _Parser{options;renderer;textRenderer;constructor(e){this.options=e||js,this.options.renderer=this.options.renderer||new _Renderer,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new _TextRenderer}static parse(e,t){return new _Parser(t).parse(e)}static parseInline(e,t){return new _Parser(t).parseInline(e)}parse(e,t=!0){let n="";for(let o=0;o<e.length;o++){const r=e[o];if(this.options.extensions?.renderers?.[r.type]){const e=r,t=this.options.extensions.renderers[e.type].call({parser:this},e);if(!1!==t||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(e.type)){n+=t||"";continue}}const a=r;switch(a.type){case"space":n+=this.renderer.space(a);continue;case"hr":n+=this.renderer.hr(a);continue;case"heading":n+=this.renderer.heading(a);continue;case"code":n+=this.renderer.code(a);continue;case"table":n+=this.renderer.table(a);continue;case"blockquote":n+=this.renderer.blockquote(a);continue;case"list":n+=this.renderer.list(a);continue;case"html":n+=this.renderer.html(a);continue;case"paragraph":n+=this.renderer.paragraph(a);continue;case"text":{let r=a,l=this.renderer.text(r);for(;o+1<e.length&&"text"===e[o+1].type;)r=e[++o],l+="\n"+this.renderer.text(r);n+=t?this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l,escaped:!0}]}):l;continue}default:{const e='Token with "'+a.type+'" type was not found.';if(this.options.silent)return"";throw new Error(e)}}}return n}parseInline(e,t=this.renderer){let n="";for(let o=0;o<e.length;o++){const r=e[o];if(this.options.extensions?.renderers?.[r.type]){const e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=e||"";continue}}const a=r;switch(a.type){case"escape":case"text":n+=t.text(a);break;case"html":n+=t.html(a);break;case"link":n+=t.link(a);break;case"image":n+=t.image(a);break;case"strong":n+=t.strong(a);break;case"em":n+=t.em(a);break;case"codespan":n+=t.codespan(a);break;case"br":n+=t.br(a);break;case"del":n+=t.del(a);break;default:{const e='Token with "'+a.type+'" type was not found.';if(this.options.silent)return"";throw new Error(e)}}}return n}}class _Hooks{options;block;constructor(e){this.options=e||js}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?_Lexer.lex:_Lexer.lexInline}provideParser(){return this.block?_Parser.parse:_Parser.parseInline}}const za=new class Marked{defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=_Parser;Renderer=_Renderer;TextRenderer=_TextRenderer;Lexer=_Lexer;Tokenizer=_Tokenizer;Hooks=_Hooks;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(const o of e)switch(n=n.concat(t.call(this,o)),o.type){case"table":{const e=o;for(const o of e.header)n=n.concat(this.walkTokens(o.tokens,t));for(const o of e.rows)for(const e of o)n=n.concat(this.walkTokens(e.tokens,t));break}case"list":{const e=o;n=n.concat(this.walkTokens(e.items,t));break}default:{const e=o;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach((o=>{const r=e[o].flat(1/0);n=n.concat(this.walkTokens(r,t))})):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach((e=>{const n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if("renderer"in e){const n=t.renderers[e.name];t.renderers[e.name]=n?function(...t){let o=e.renderer.apply(this,t);return!1===o&&(o=n.apply(this,t)),o}:e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");const n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)})),n.extensions=t),e.renderer){const t=this.defaults.renderer||new _Renderer(this.defaults);for(const n in e.renderer){if(!(n in t))throw new Error(`renderer '${n}' does not exist`);if(["options","parser"].includes(n))continue;const o=n,r=e.renderer[o],a=t[o];t[o]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=a.apply(t,e)),n||""}}n.renderer=t}if(e.tokenizer){const t=this.defaults.tokenizer||new _Tokenizer(this.defaults);for(const n in e.tokenizer){if(!(n in t))throw new Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;const o=n,r=e.tokenizer[o],a=t[o];t[o]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){const t=this.defaults.hooks||new _Hooks;for(const n in e.hooks){if(!(n in t))throw new Error(`hook '${n}' does not exist`);if(["options","block"].includes(n))continue;const o=n,r=e.hooks[o],a=t[o];_Hooks.passThroughHooks.has(n)?t[o]=e=>{if(this.defaults.async)return Promise.resolve(r.call(t,e)).then((e=>a.call(t,e)));const n=r.call(t,e);return a.call(t,n)}:t[o]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){const t=this.defaults.walkTokens,o=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(o.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}})),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return _Lexer.lex(e,t??this.defaults)}parser(e,t){return _Parser.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{const o={...n},r={...this.defaults,...o},a=this.onError(!!r.silent,!!r.async);if(!0===this.defaults.async&&!1===o.async)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(null==t)return a(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=e);const l=r.hooks?r.hooks.provideLexer():e?_Lexer.lex:_Lexer.lexInline,c=r.hooks?r.hooks.provideParser():e?_Parser.parse:_Parser.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(t):t).then((e=>l(e,r))).then((e=>r.hooks?r.hooks.processAllTokens(e):e)).then((e=>r.walkTokens?Promise.all(this.walkTokens(e,r.walkTokens)).then((()=>e)):e)).then((e=>c(e,r))).then((e=>r.hooks?r.hooks.postprocess(e):e)).catch(a);try{r.hooks&&(t=r.hooks.preprocess(t));let e=l(t,r);r.hooks&&(e=r.hooks.processAllTokens(e)),r.walkTokens&&this.walkTokens(e,r.walkTokens);let n=c(e,r);return r.hooks&&(n=r.hooks.postprocess(n)),n}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",e){const e="<p>An error occurred:</p><pre>"+Ta(n.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function Ia(e,t){return za.parse(e,t)}Ia.options=Ia.setOptions=function(e){return za.setOptions(e),Ia.defaults=za.defaults,Us(Ia.defaults),Ia},Ia.getDefaults=Ns,Ia.defaults=js,Ia.use=function(...e){return za.use(...e),Ia.defaults=za.defaults,Us(Ia.defaults),Ia},Ia.walkTokens=function(e,t){return za.walkTokens(e,t)},Ia.parseInline=za.parseInline,Ia.Parser=_Parser,Ia.parser=_Parser.parse,Ia.Renderer=_Renderer,Ia.TextRenderer=_TextRenderer,Ia.Lexer=_Lexer,Ia.lexer=_Lexer.lex,Ia.Tokenizer=_Tokenizer,Ia.Hooks=_Hooks,Ia.parse=Ia;Ia.options,Ia.setOptions,Ia.use,Ia.walkTokens,Ia.parseInline,_Parser.parse,_Lexer.lex;var Ba=Object.defineProperty,Na=Object.getOwnPropertyDescriptor,ja=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?Na(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&Ba(t,n,a),a};let Ua=class extends lit_element_r{constructor(){super(...arguments),this.markdown=""}render(){return li`${this.markdown?Bs(this.renderMarkdown(this.markdown),"Loading..."):""}`}async renderMarkdown(e){Ia.setOptions({gfm:!0}),Ia.use({renderer:{image:function({href:e,title:t,text:n}){let o=[],r=[];return e&&(({href:e,dimensions:o}=function(e){const t=[],n=e.split("|").map((e=>e.trim()));e=n[0];const o=n[1];if(o){const e=/height=(\d+)/.exec(o),n=/width=(\d+)/.exec(o),r=e?e[1]:"",a=n?n[1]:"",l=isFinite(parseInt(a)),c=isFinite(parseInt(r));l&&t.push(`width="${a}"`),c&&t.push(`height="${r}"`)}return{href:e,dimensions:t}}(e)),r.push(`src="${Za(e)}"`)),n&&r.push(`alt="${Za(n)}"`),t&&r.push(`title="${Za(t)}"`),o.length&&(r=r.concat(o)),`<img ${r.join(" ")}>`},paragraph:function({tokens:e}){const t=this.parser.parseInline(e);return`<p>${t}</p>`},link:function({href:e,title:t,tokens:n}){if("string"!=typeof e)return"";let o=this.parser.parseInline(n);return e===o&&(o=Ya(o)),t="string"==typeof t?Za(Ya(t)):"",`<a href="${e=Ya(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}" title="${t||e}" draggable="false">${o}</a>`},code:function({text:e,lang:t}){return e=e.replace(/</g,"&lt;"),`<pre class="language-${t}"><code>${e}</code></pre>`},codespan:function({text:e}){return`<code>${e=e.replace(/</g,"&lt;")}</code>`}}});let t=await Ia.parse((n=e,n.replace(Wa,(e=>`\\${e}`))));var n;return t=function(e){const t=[];let n,o=0,r=0;for(;null!==(n=Ga.exec(e));){r=n.index||0,o<r&&t.push(e.substring(o,r)),o=(n.index||0)+n[0].length;const[,a,l]=n;t.push(a?`$(${l})`:Ka({id:l}))}o<e.length&&t.push(e.substring(o));return t.join("")}(t),Hi(t)}};Ua.styles=At`
		a,
		a code {
			text-decoration: none;
			color: var(--vscode-textLink-foreground);
		}

		a:hover,
		a:hover code {
			color: var(--vscode-textLink-activeForeground);
		}

		a:hover:not(.disabled) {
			cursor: pointer;
		}

		p,
		.code,
		ul,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 8px 0;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			line-height: 1.1;
		}

		code {
			background: var(--vscode-textCodeBlock-background);
			border-radius: 3px;
			padding: 0px 4px 2px 4px;
			font-family: var(--vscode-editor-font-family);
		}

		code code-icon {
			color: inherit;
			font-size: inherit;
			vertical-align: middle;
		}

		hr {
			border: none;
			border-top: 1px solid var(--color-foreground--25);
		}

		p:first-child,
		.code:first-child,
		ul:first-child {
			margin-top: 0;
		}

		p:last-child,
		.code:last-child,
		ul:last-child {
			margin-bottom: 0;
		}

		/* MarkupContent Layout */
		ul {
			padding-left: 20px;
		}
		ol {
			padding-left: 20px;
		}

		li > p {
			margin-bottom: 0;
		}

		li > ul {
			margin-top: 0;
		}
	`,ja([ki({type:String})],Ua.prototype,"markdown",2),Ua=ja([yi("gl-markdown")],Ua);const Ha="[A-Za-z0-9-]+",Fa="~[A-Za-z]+",qa=new RegExp(`^(${Ha})(${Fa})?$`),Va=new RegExp(`\\$\\(${Ha}(?:${Fa})?\\)`,"g"),Wa=new RegExp(`\\\\${Va.source}`,"g"),Ga=new RegExp(`(\\\\)?\\$\\((${Ha}(?:${Fa})?)\\)`,"g");function Ka(e){const t=qa.exec(e.id);let[,n,o]=t??[void 0,"error",void 0];return n.startsWith("gitlens-")&&(n=`gl-${n.substring(8)}`),`<code-icon icon="${n}"${o?` modifier="${o}"`:""}></code-icon>`}function Za(e){return e.replace(/"/g,"&quot;")}function Ya(e){return e?e.replace(/\\([\\`*_{}[\]()#+\-.!~])/g,"$1"):e}var Qa=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,Ja=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?Xa(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&Qa(t,n,a),a};let el=class extends lit_element_r{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return li`<div class="progress-bar"></div>`}};el.styles=At`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,Ja([ki({reflect:!0})],el.prototype,"mode",2),Ja([ki({type:Boolean})],el.prototype,"active",2),Ja([ki()],el.prototype,"position",2),el=Ja([yi("progress-indicator")],el);var tl=Object.defineProperty,il=Object.getOwnPropertyDescriptor,nl=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?il(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&tl(t,n,a),a};let ol=class extends lit_element_r{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?li`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:li`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return li`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};ol.styles=[Er,At`
			:host {
				display: flex;
				flex-direction: column;
				background-color: var(--vscode-sideBar-background);
				min-height: 23px;
			}

			* {
				box-sizing: border-box;
			}

			.header {
				flex: none;
				display: flex;
				background-color: var(--vscode-sideBarSectionHeader-background);
				color: var(--vscode-sideBarSectionHeader-foreground);
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				position: relative;
			}

			.header:focus-within {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.label {
				appearance: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				border: none;
				text-align: left;
				font-family: var(--font-family);
				font-size: 1.1rem;
				line-height: 2.2rem;
				height: 2.2rem;
				background: transparent;
				color: inherit;
				outline: none;
				text-overflow: ellipsis;
				user-select: none;
			}

			:host([collapsable]) .label {
				cursor: pointer;
			}

			.title {
				font-weight: bold;
				text-transform: uppercase;
			}

			:host(:not([collapsable])) .title {
				margin-left: 0.8rem;
			}

			.subtitle {
				margin-left: 1rem;
				opacity: 0.6;
			}

			.icon {
				font-weight: normal;
				margin: 0 0.2rem;
			}

			.content {
				flex: 1;
				overflow: auto;
				min-height: 0;
				/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
				padding-top: 0.6rem;
			}

			:host([collapsable]:not([expanded])) .content,
			:host([collapsable][expanded='false']) .content {
				display: none;
			}

			slot[name='actions']::slotted(*) {
				flex: none;
				margin-left: auto;
			}
		`],nl([ki({type:Boolean,reflect:!0})],ol.prototype,"collapsable",2),nl([ki({type:Boolean,reflect:!0})],ol.prototype,"expanded",2),nl([ki({type:Boolean,reflect:!0})],ol.prototype,"loading",2),ol=nl([yi("webview-pane")],ol);var rl=Object.defineProperty,sl=Object.getOwnPropertyDescriptor,al=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?sl(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&rl(t,n,a),a};let ll=class extends GlTreeBase{constructor(){super(),this.explainBusy=!1,this.selectedPatches=[],this._copiedLink=!1,yt(pt,ft,vt,mt,bt)}get cloudDraft(){if("cloud"===this.state.draft?.draftType)return this.state.draft}get isCodeSuggestion(){return"suggested_pr_change"===this.cloudDraft?.type}get canSubmit(){return this.selectedPatches.length>0}updated(e){if(e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="ai-explanation"]')?.scrollIntoView()),e.has("state")){const e=this.state?.draft?.patches;if(e?.length){this.selectedPatches=e.map((e=>e.id));for(const t of e){const e=this.selectedPatches.indexOf(t.id);t.repository.located?-1===e&&this.selectedPatches.push(t.id):e>-1&&this.selectedPatches.splice(e,1)}}else this.selectedPatches=[]}}renderEmptyContent(){return li`
			<div class="section section--empty" id="empty">
				<button-container>
					<gl-button full href="command:gitlens.openPatch">Open Patch...</gl-button>
				</button-container>
			</div>
		`}renderPatchMessage(){if(null==this.state?.draft?.title)return;let e=this.cloudDraft?.description;return null!=e?(e=e.trim(),li`
			<div class="message-block">
				<p class="message-block__text scrollable" data-region="message">
					<span>${Hi(e)}</span>
				</p>
			</div>
		`):void 0}renderExplainAi(){if(!1===this.state?.orgSettings.ai)return;const e=null!=this.explain?.result?`${this.explain.result.summary}\n\n${this.explain.result.body}`:void 0;return li`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<span slot="subtitle"><code-icon icon="beaker" size="12"></code-icon></span>
				<action-nav slot="actions">
					<action-item data-action="switch-ai" label="Switch AI Model" icon="hubot"></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this patch.</p>
					<p class="button-container">
						<span class="button-group button-group--single">
							<gl-button
								full
								class="button--busy"
								data-action="ai-explain"
								aria-busy="${Pi(this.explainBusy?"true":void 0)}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
								><code-icon icon="loading" modifier="spin" slot="prefix"></code-icon>Explain
								Changes</gl-button
							>
						</span>
					</p>
					${e?li`<div class="ai-content" data-region="commit-explanation">
								<gl-markdown
									class="ai-content__summary scrollable"
									markdown="${e}"
								></gl-markdown>
						  </div>`:this.explain?.error?li`<div class="ai-content has-error" data-region="commit-explanation">
									<p class="ai-content__summary scrollable">
										${this.explain.error.message??"Error retrieving content"}
									</p>
						    </div>`:void 0}
				</div>
			</webview-pane>
		`}renderChangedFiles(){const e=this.state?.preferences?.files?.layout??"auto";return li`
			<webview-pane collapsable expanded>
				<span slot="title">Files changed </span>
				<!-- <span slot="subtitle" data-region="stats">\${this.renderCommitStats()}</span> -->
				<action-nav slot="actions">${this.renderLayoutAction(e)}</action-nav>

				${Si(null!=this.validityMessage,(()=>li`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`))}
				<div class="change-list" data-region="files">
					${Si(null==this.state?.draft?.patches,(()=>this.renderLoading()),(()=>this.renderTreeView(this.treeModel,this.state?.preferences?.indentGuides)))}
				</div>
			</webview-pane>
		`}get treeModel(){if(null==this.state?.draft?.patches)return[];const{draft:{patches:e}}=this.state,t=this.state?.preferences?.files?.layout??"auto";let n=!1;const o=Vi(e,(e=>e?.files?.length??0));n="auto"===t?o>(this.state.preferences?.files?.threshold??5):"tree"===t;const r=e?.map((e=>this.draftPatchToTreeModel(e,n,this.state.preferences?.files?.compact,{checkable:!0,checked:this.selectedPatches.includes(e.id)})));return r}renderUserSelection(e,t){if("delete"===e.change)return;const n=e.pendingRole??e.user.role,o=new Map([["owner","owner"],["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),r=o.get(n);return li`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gk-avatar .src=${e.avatarUrl}></gk-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${e.member?.name??e.member?.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					${Si("owner"!==n&&("owner"===t||"admin"===t),(()=>li`
							<gk-popover>
								<gk-button slot="trigger"
									>${r} <code-icon icon="chevron-down"></code-icon
								></gk-button>
								<gk-menu>
									${Ri(o,(([t,o])=>"owner"===t?void 0:li`<gk-menu-item
													@click=${n=>this.onChangeSelectionRole(n,e,t)}
											  >
													<code-icon
														icon="check"
														class="user-selection__check ${n===t?"is-active":""}"
													></code-icon>
													${o}
											  </gk-menu-item>`))}
								</gk-menu>
							</gk-popover>
						`),(()=>li`${r}`))}
				</div>
			</div>
		`}renderUserSelectionList(e,t=!1){if(!e.userSelections?.length)return;let n=e.userSelections;return!1===t&&(n=n.filter((e=>"owner"!==e.user?.role))),li`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${Ui(n,(e=>e.member?.id??e.user?.id),(t=>this.renderUserSelection(t,e.role)))}
				</div>
			</div>
		`}renderPatchPermissions(){const e=this.cloudDraft;if(null!=e){if("admin"===e.role||"owner"===e.role){const t=e.userSelections?.some((e=>void 0!==e.change));let n;switch(e.visibility){case"private":n="organization";break;case"invite_only":n="lock";break;default:n="globe"}return li`
				${Si(!0!==this.isCodeSuggestion,(()=>li` <div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${n}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===e.visibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===e.visibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===e.visibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>`))}
				${this.renderUserSelectionList(e)}
				${Si(t,(()=>li`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${this.onUpdatePatch}
									>Update Patch</gl-button
								>
							</span>
						</p>
					`))}
			`}return li`
			${Si(!0!==this.isCodeSuggestion,(()=>li` <div class="message-input">
						<div class="message-input__control message-input__control--text">
							${Si("public"===e.visibility,(()=>li`<code-icon icon="globe"></code-icon> Anyone with the link`))}
							${Si("private"===e.visibility,(()=>li`<code-icon icon="organization"></code-icon> Members of my Org with the link`))}
							${Si("invite_only"===e.visibility,(()=>li`<code-icon icon="lock"></code-icon> Collaborators only`))}
						</div>
					</div>`))}
			${this.renderUserSelectionList(e,!0)}
		`}}renderCodeSuggectionActions(){if(this.isCodeSuggestion&&null!=this.cloudDraft&&!this.cloudDraft.isArchived&&"viewer"!==this.cloudDraft.role)return li`
			<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button appearance="secondary" full @click=${()=>this.onArchiveDraft("accepted")}
						>Accept</gl-button
					>
					<gl-button appearance="secondary" full @click=${()=>this.onArchiveDraft("rejected")}
						>Reject</gl-button
					>
				</span>
			</p>
		`}renderPatches(){return li`
			<div class="section section--action">
				${this.renderPatchPermissions()}
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full @click=${this.onApplyPatch}>Apply Patch</gl-button>
						<gk-popover placement="top">
							<gl-button
								slot="trigger"
								density="compact"
								aria-label="Apply Patch Options..."
								title="Apply Patch Options..."
								><code-icon icon="chevron-down"></code-icon
							></gl-button>
							<gk-menu class="mine-menu" @select=${this.onSelectApplyOption}>
								<gk-menu-item data-value="branch">Apply to a Branch</gk-menu-item>
								<!-- <gk-menu-item data-value="worktree">Apply to new worktree</gk-menu-item> -->
							</gk-menu>
						</gk-popover>
					</span>
				</p>
				${this.renderCodeSuggectionActions()}
			</div>
		`}renderActionbar(){const e=this.state?.draft;if(null!=e)return"local"===e.draftType?li`
				<div class="top-details__actionbar">
					<div class="top-details__actionbar-group"></div>
					<div class="top-details__actionbar-group">
						<a
							class="commit-action"
							href="#"
							aria-label="Share Patch"
							title="Share Patch"
							@click=${this.onShareLocalPatch}
							>Share</a
						>
					</div>
				</div>
			`:li`
			<div class="top-details__actionbar">
				<div class="top-details__actionbar-group"></div>
				<div class="top-details__actionbar-group">
					<a class="commit-action" href="#" @click=${this.onCopyCloudLink}>
						<code-icon icon="${this._copiedLink?"check":"link"}"></code-icon>
						<span class="top-details__sha">Copy Link</span></a
					>
					${Si(null!=this.cloudDraft?.gkDevLink,(()=>li`
							<a class="commit-action" href=${this.cloudDraft.gkDevLink} title="Open on gitkraken.dev">
								<code-icon icon="globe"></code-icon>
							</a>
						`))}
				</div>
			</div>
		`}renderDraftInfo(){if(null==this.state.draft?.title)return di;let e;if(this.cloudDraft?.isArchived){const t=this.cloudDraft.archivedReason??"archived";e=li`<gl-badge class="title__badge">${t}</gl-badge>`}return li`
			<h1 class="title">${this.state.draft?.title} ${e}</h1>
			${this.renderPatchMessage()}
		`}render(){return null==this.state?.draft?li` <div class="commit-detail-panel scrollable">${this.renderEmptyContent()}</div>`:li`
			<div class="pane-groups">
				<div class="pane-groups__group-fixed">
					<div class="section">${this.renderActionbar()}${this.renderDraftInfo()}</div>
				</div>
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">
					${this.renderExplainAi()}${this.renderPatches()}
				</div>
			</div>
		`}createRenderRoot(){return this}onInviteUsers(e){this.emit("gl-patch-details-invite-users")}onChangeSelectionRole(e,t,n){this.emit("gl-patch-details-update-selection",{selection:t,role:n});const o=e.target?.closest("gk-popover");o?.hidePopover()}onVisibilityChange(e){const t=this.state.draft;t.visibility=e.target.value,this.emit("gl-patch-details-update-metadata",{visibility:t.visibility})}onUpdatePatch(e){this.emit("gl-patch-details-update-permissions")}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key)return e.preventDefault(),void e.stopPropagation();this.explainBusy=!0}onTreeItemActionClicked(e){if(!e.detail.context||!e.detail.action)return;switch(e.detail.action.action){case"apply-patch":this.onApplyPatch();break;case"change-patch-base":this.onChangePatchBase();break;case"show-patch-in-graph":this.onShowInGraph();break;case"file-open":this.onOpenFile(e);break;case"file-compare-working":this.onCompareWorking(e)}}fireFileEvent(e,t,n){const o=new CustomEvent(e,{detail:{...t,showOptions:n}});this.dispatchEvent(o)}onCompareWorking(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-compare-working",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onOpenFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onTreeItemChecked(e){if(!e.detail.context)return;const[t]=e.detail.context,n=this.state.draft?.patches?.find((e=>e.gkRepositoryId===t));if(!n)return;const o=this.selectedPatches.indexOf(n?.id);e.detail.checked?-1===o&&(this.selectedPatches.push(n.id),this.validityMessage=void 0):o>-1&&this.selectedPatches.splice(o,1);const r=new CustomEvent("gl-patch-checked",{detail:{patch:n,checked:e.detail.checked}});this.dispatchEvent(r)}onTreeItemSelected(e){const{node:t,context:n}=e.detail;if(!0===t.branch||null==n)return;const[o]=n;this.emit("gl-patch-file-compare-previous",{...o})}onApplyPatch(e,t="current"){!1!==this.canSubmit?(this.validityMessage=void 0,this.emit("gl-patch-apply-patch",{draft:this.state.draft,target:t,selectedPatches:this.selectedPatches})):this.validityMessage="Please select changes to apply"}onArchiveDraft(e){this.emit("gl-draft-archive",{reason:e})}onSelectApplyOption(e){if(!1===this.canSubmit)return void(this.validityMessage="Please select changes to apply");const t=e.detail?.target;null!=t?.dataset?.value&&this.onApplyPatch(void 0,t.dataset.value)}onChangePatchBase(e){const t=new CustomEvent("change-patch-base",{detail:{draft:this.state.draft}});this.dispatchEvent(t)}onSelectPatchRepo(e){const t=new CustomEvent("select-patch-repo",{detail:{draft:this.state.draft}});this.dispatchEvent(t)}onShowInGraph(e){this.emit("gl-patch-details-graph-show-patch",{draft:this.state.draft})}onCopyCloudLink(){this.emit("gl-patch-details-copy-cloud-link",{draft:this.state.draft}),this._copiedLink=!0,setTimeout((()=>this._copiedLink=!1),1e3)}onShareLocalPatch(){this.emit("gl-patch-details-share-local-patch",{draft:this.state.draft})}draftPatchToTreeModel(e,t=!1,n=!0,o){const r=this.repoToTreeModel(e.repository.name,e.gkRepositoryId,o,e.repository.located?void 0:"missing");if(!e.files?.length)return r;const a=[];if(t){const t=Fi(e.files,(e=>e.path.split("/")),((...e)=>e.join("/")),n);if(null!=t.children)for(const e of t.children.values()){const t=this.walkFileTree(e,{level:2});a.push(t)}}else for(const t of e.files){const e=this.fileToTreeModel(t,{level:2,branch:!1},!0);a.push(e)}return a.length>0&&(r.branch=!0,r.children=a),r}getFileActions(e,t){return[{icon:"go-to-file",label:"Open file",action:"file-open"},{icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}]}};al([ki({type:Object})],ll.prototype,"state",2),al([_i()],ll.prototype,"explainBusy",2),al([ki({type:Object})],ll.prototype,"explain",2),al([_i()],ll.prototype,"selectedPatches",2),al([_i()],ll.prototype,"validityMessage",2),al([_i()],ll.prototype,"_copiedLink",2),ll=al([yi("gl-draft-details")],ll);var cl=Object.defineProperty,dl=Object.getOwnPropertyDescriptor,hl=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?dl(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&cl(t,n,a),a};const pl=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","trash"]]]);let ul=class extends lit_element_r{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return pl.map((([e,t])=>this.renderStat(e,t)))}renderStat(e,t){const n=this[e];return null==n?di:li`<span class="stat ${e}" aria-label="${n} ${e}"
			><span class="label">${this.renderSymbol(t)}${n}</span></span
		>`}renderSymbol([e,t]){return"icons"===this.symbol?li`<code-icon class="icon" icon="${t}"></code-icon>`:li`<span>${e}</span>`}};ul.styles=At`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			white-space: nowrap;
			font-size: 1rem;
		}

		:host([symbol='icons']) {
			gap: 0.8rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.removed {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
			align-content: center;
			user-select: none;
		}

		.icon {
			--code-icon-size: 0.94017em;
			margin-inline-end: 0.2rem;
		}
	`,hl([ki({type:Number})],ul.prototype,"added",2),hl([ki({type:Number})],ul.prototype,"modified",2),hl([ki({type:Number})],ul.prototype,"removed",2),hl([ki()],ul.prototype,"symbol",2),ul=hl([yi("commit-stats")],ul);var fl=Object.defineProperty,gl=Object.getOwnPropertyDescriptor,ml=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?gl(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&fl(t,n,a),a};let bl=class extends GlTreeBase{constructor(){super(),this.review=!1,this.generateBusy=!1,this.creationBusy=!1,this.onDebounceTitleInput=q(this.onTitleInput,500),this.onDebounceDescriptionInput=q(this.onDescriptionInput,500),yt(pt,ft,mt,bt,vt)}get create(){return this.state.create}get createChanges(){return Object.values(this.create.changes)}get createEntries(){return Object.entries(this.create.changes)}get hasWipChanges(){return this.createChanges.some((e=>"wip"===e?.type))}get selectedChanges(){return 1===this.createChanges.length?this.createEntries:this.createEntries.filter((([,e])=>!1!==e.checked))}get canSubmit(){return null!=this.create.title&&this.create.title.length>0&&this.selectedChanges.length>0}get fileLayout(){return this.state?.preferences?.files?.layout??"auto"}get isCompact(){return this.state?.preferences?.files?.compact??!0}get filesModified(){return Vi(this.createChanges,(e=>e.files?.length??0))}get draftVisibility(){return this.state?.create?.visibility??"public"}updated(e){e.has("state")&&(this.creationBusy=!1),e.has("generate")&&(this.generateBusy=!1,this.generateAiButton.scrollIntoView())}firstUpdated(){window.requestAnimationFrame((()=>{this.titleInput.focus()}))}renderUserSelection(e){const t=e.pendingRole,n=new Map([["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),o=n.get(t);return li`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gk-avatar .src=${e.avatarUrl}></gk-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${e.member.name??e.member.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					<gk-popover>
						<gk-button slot="trigger">${o} <code-icon icon="chevron-down"></code-icon></gk-button>
						<gk-menu>
							${Ri(n,(([n,o])=>li`<gk-menu-item
										@click=${t=>this.onChangeSelectionRole(t,e,n)}
									>
										<code-icon
											icon="check"
											class="user-selection__check ${t===n?"is-active":""}"
										></code-icon>
										${o}
									</gk-menu-item>`))}
						</gk-menu>
					</gk-popover>
				</div>
			</div>
		`}renderUserSelectionList(){if(null!=this.state?.create?.userSelections&&0!==this.state?.create?.userSelections.length)return li`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${Ui(this.state.create.userSelections,(e=>e.member.id),(e=>this.renderUserSelection(e)))}
				</div>
			</div>
		`}renderForm(){let e;switch(this.draftVisibility){case"private":e="organization";break;case"invite_only":e="lock";break;default:e="globe"}const t=this.review?"Code Suggestion":"Cloud Patch",n=this.review?"Code Suggestions":"Cloud Patches";return li`
			<div class="section section--action">
				${Si(null!=this.state?.create?.creationError,(()=>li` <div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.state.create.creationError}</p>
						</div>`))}
				${Si(!1===this.review,(()=>li`
						<div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${e}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===this.draftVisibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===this.draftVisibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===this.draftVisibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>
						${this.renderUserSelectionList()}
					`))}
				<div class="message-input message-input--with-menu">
					<input
						id="title"
						type="text"
						class="message-input__control"
						placeholder="Title (required)"
						maxlength="100"
						.value=${this.create.title??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceTitleInput(e)}
					/>
					${Si(!0===this.state?.orgSettings.ai,(()=>li`<div class="message-input__menu">
								<gl-button
									id="generate-ai"
									appearance="toolbar"
									density="compact"
									tooltip="Generate Title and Description..."
									@click=${e=>this.onGenerateTitleClick(e)}
									?disabled=${this.generateBusy}
									><code-icon
										icon=${this.generateBusy?"loading":"sparkle"}
										modifier="${this.generateBusy?"spin":""}"
									></code-icon
								></gl-button>
							</div>`))}
				</div>

				${Si(null!=this.generate?.error,(()=>li`
						<div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.generate.error.message??"Error retrieving content"}</p>
						</div>
					`))}
				<div class="message-input">
					<textarea
						id="desc"
						class="message-input__control"
						placeholder="Description (optional)"
						maxlength="10000"
						.value=${this.create.description??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceDescriptionInput(e)}
					></textarea>
				</div>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button ?disabled=${this.creationBusy} full @click=${e=>this.onCreateAll(e)}
							>Create ${t}</gl-button
						>
					</span>
				</p>
				${Si(!0===this.review,(()=>li`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${()=>this.onCancel()}
									>Cancel</gl-button
								>
							</span>
						</p>
					`))}
				${Si(!1===this.state?.orgSettings.byob,(()=>li`<p class="h-deemphasize">
							<code-icon icon="lock"></code-icon>
							<a
								href="${re.cloudPatches}"
								title="Learn more about ${n}"
								aria-label="Learn more about ${n}"
								>${n}</a
							>
							are
							<a
								href="https://help.gitkraken.com/gitlens/security"
								title="Learn more about GitKraken security"
								aria-label="Learn more about GitKraken security"
								>securely stored</a
							>
							by GitKraken.
						</p>`),(()=>li`<p class="h-deemphasize">
							<code-icon icon="info"></code-icon>
							Your
							<a
								href="${re.cloudPatches}"
								title="Learn more about ${n}"
								aria-label="Learn more about ${n}"
								>${t}</a
							>
							will be securely stored in your organization's self-hosted storage
						</p>`))}
			</div>
		`}render(){return li`
			<div class="pane-groups">
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">${this.renderForm()}</div>
			</div>
		`}renderChangedFiles(){return li`
			<webview-pane class="h-no-border" expanded>
				<span slot="title">${this.review?"Changes to Suggest":"Changes to Include"}</span>
				<action-nav slot="actions">${this.renderLayoutAction(this.fileLayout)}</action-nav>

				${Si(null!=this.validityMessage,(()=>li`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`))}
				<div class="change-list" data-region="files">
					${Si(null==this.create.changes,(()=>this.renderLoading()),(()=>this.renderTreeViewWithModel()))}
				</div>
			</webview-pane>
		`}onTreeItemChecked(e){if(null==e.detail.context||e.detail.context.length<1)return;const[t,n]=e.detail.context;let o=e.detail.checked;"unstaged"===n&&(o=!!e.detail.checked||"staged");const r=this.getChangeForRepo(t);null!=r&&r.checked!==o&&(r.checked=o,this.requestUpdate("state"),this.emit("gl-patch-create-repo-checked",{repoUri:t,checked:o}))}onTreeItemSelected(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-compare-previous",{...t})}renderTreeViewWithModel(){if(null==this.createChanges||0===this.createChanges.length)return this.renderTreeView([{label:"No changes",path:"",level:1,branch:!1,checkable:!1,expanded:!0,checked:!1}]);const e=[],t=this.createChanges.length>1,n=this.isTree(this.filesModified??0),o=this.isCompact;if(t)for(const t of this.createChanges){const r=this.getTreeForChange(t,!0,n,o);null!=r&&e.push(...r)}else{const t=this.createChanges[0],r=this.getTreeForChange(t,!1,n,o);null!=r&&e.push(...r)}return this.renderTreeView(e,this.state?.preferences?.indentGuides)}getTreeForChange(e,t=!1,n=!1,o=!0){if(null==e.files||0===e.files.length)return;const r=[];if("wip"===e.type){const a=[],l=[];for(const t of e.files)t.staged?a.push(t):l.push(t);0===a.length||0===l.length?r.push(...this.renderFiles(e.files,n,o,t?2:1)):(l.length&&r.push({label:"Unstaged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!0===e.checked,context:[e.repository.uri,"unstaged"],children:this.renderFiles(l,n,o,t?3:2)}),a.length&&r.push({label:"Staged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!1!==e.checked,disableCheck:!0,children:this.renderFiles(a,n,o,t?3:2)}))}else r.push(...this.renderFiles(e.files,n,o));if(!t)return r;const a=this.repoToTreeModel(e.repository.name,e.repository.uri,{branch:!0,checkable:!0,checked:!1!==e.checked});return a.children=r,[a]}isTree(e){return"auto"===this.fileLayout?e>(this.state?.preferences?.files?.threshold??5):"tree"===this.fileLayout}createPatch(){if(!this.canSubmit)return 0===this.titleInput.value.length?(this.titleInput.setCustomValidity("Title is required"),this.titleInput.reportValidity(),this.titleInput.focus()):this.titleInput.setCustomValidity(""),void(null==this.selectedChanges||0===this.selectedChanges.length?this.validityMessage="Check at least one change":this.validityMessage=void 0);this.validityMessage=void 0,this.titleInput.setCustomValidity("");const e=this.selectedChanges.reduce(((e,[t,n])=>(e[t]=n,e)),{}),t={title:this.create.title??"",description:this.create.description,changesets:e,visibility:this.create.visibility,userSelections:this.create.userSelections};this.emit("gl-patch-create-patch",t)}onCreateAll(e){this.createPatch(),this.state?.create&&(this.creationBusy=!0)}onSelectCreateOption(e){}getChangeForRepo(e){return this.create.changes[e]}onTitleInput(e){this.create.title=this.titleInput.value,this.fireMetadataUpdate()}onDescriptionInput(e){this.create.description=this.descInput.value,this.fireMetadataUpdate()}onInviteUsers(e){this.emit("gl-patch-create-invite-users")}onChangeSelectionRole(e,t,n){this.emit("gl-patch-create-update-selection",{selection:t,role:n});const o=e.target?.closest("gk-popover");o?.hidePopover()}onVisibilityChange(e){this.create.visibility=e.target.value,this.fireMetadataUpdate()}onGenerateTitleClick(e){this.generateBusy=!0,this.emit("gl-patch-generate-title",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}fireMetadataUpdate(){this.emit("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}createRenderRoot(){return this}onTreeItemActionClicked(e){if(!e.detail.context||!e.detail.action)return;switch(e.detail.action.action){case"show-patch-in-graph":this.onShowInGraph(e);break;case"file-open":this.onOpenFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-unstage":this.onUnstageFile(e)}}onOpenFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onStageFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-stage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onUnstageFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-unstage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onShowInGraph(e){}onCancel(){this.emit("gl-patch-create-cancelled")}getFileActions(e,t){const n={icon:"go-to-file",label:"Open file",action:"file-open"};return this.review?[n]:!0===e.staged?[n,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[n,{icon:"plus",label:"Stage changes",action:"file-stage"}]}getRepoActions(e,t,n){return[{icon:"gl-graph",label:"Open in Commit Graph",action:"show-patch-in-graph"}]}};ml([ki({type:Object})],bl.prototype,"state",2),ml([ki({type:Boolean})],bl.prototype,"review",2),ml([ki({type:Object})],bl.prototype,"generate",2),ml([_i()],bl.prototype,"generateBusy",2),ml([_i()],bl.prototype,"creationBusy",2),ml([Ai("#title")],bl.prototype,"titleInput",2),ml([Ai("#desc")],bl.prototype,"descInput",2),ml([Ai("#generate-ai")],bl.prototype,"generateAiButton",2),ml([_i()],bl.prototype,"validityMessage",2),bl=ml([yi("gl-patch-create")],bl);var vl=Object.defineProperty,yl=Object.getOwnPropertyDescriptor,wl=(e,t,n,o)=>{for(var r,a=o>1?void 0:o?yl(t,n):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o?r(t,n,a):r(a))||a);return o&&a&&vl(t,n,a),a};let xl=class extends GlElement{constructor(){super(),this.indentPreference=16,yt(ut,vt,mt,bt)}get wipChangesCount(){return null==this.state?.create?0:Object.values(this.state.create.changes).reduce(((e,t)=>e+=t.files?.length??0),0)}get wipChangeState(){if(null==this.state?.create)return;const e=Object.values(this.state.create.changes).reduce(((e,t)=>(null!=t.files&&(e.files+=t.files.length,e.on.add(t.repository.uri)),e)),{files:0,on:new Set});return{count:e.files,branches:Array.from(e.on).join(", ")}}get mode(){return this.state?.mode??"view"}updateDocumentProperties(){const e=this.state?.preferences?.indent;if(e===this.indentPreference)return;this.indentPreference=e??16;document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`)}updated(e){e.has("state")&&this.updateDocumentProperties()}render(){return li`
			<div class="commit-detail-panel scrollable">
				<main id="main" tabindex="-1">
					${Si("view"===this.mode,(()=>li`<gl-draft-details .state=${this.state} .explain=${this.explain}></gl-draft-details>`),(()=>li`<gl-patch-create .state=${this.state} .generate=${this.generate}></gl-patch-create>`))}
				</main>
			</div>
		`}createRenderRoot(){return this}};wl([ki({type:Object})],xl.prototype,"state",2),wl([ki({type:Object})],xl.prototype,"explain",2),wl([ki({type:Object})],xl.prototype,"generate",2),wl([ki({attribute:!1,type:Object})],xl.prototype,"app",2),xl=wl([yi("gl-patch-details-app")],xl);const kl="0000000000000000000000000000000000000000";class PatchDetailsApp extends App{constructor(){super("PatchDetailsApp"),this.debouncedAttachState=q(this.attachState.bind(this),100)}onInitialize(){this.debouncedAttachState()}onBind(){return[ge.on("[data-switch-value]","click",(e=>this.onToggleFilesLayout(e))),ge.on('[data-action="ai-explain"]',"click",(e=>this.onAIExplain(e))),ge.on('[data-action="switch-ai"]',"click",(e=>this.onSwitchAIModel(e))),ge.on('[data-action="mode"]',"click",(e=>this.onModeClicked(e))),ge.on("gl-draft-details","gl-patch-apply-patch",(e=>this.onApplyPatch(e.detail))),ge.on("gl-draft-details","gl-draft-archive",(e=>this.onArchiveDraft(e.detail.reason))),ge.on("gl-patch-details-app","change-patch-base",(e=>this.onChangePatchBase(e.detail))),ge.on("gl-patch-details-app","select-patch-repo",(e=>this.onSelectPatchRepo(e.detail))),ge.on("gl-patch-details-app","gl-patch-details-graph-show-patch",(e=>this.onShowPatchInGraph(e.detail))),ge.on("gl-patch-details-app","gl-patch-create-patch",(e=>this.onCreatePatch(e.detail))),ge.on("gl-patch-details-app","gl-patch-share-local-patch",(()=>this.onShareLocalPatch())),ge.on("gl-draft-details","gl-patch-details-copy-cloud-link",(()=>this.onCopyCloudLink())),ge.on("gl-patch-create","gl-patch-create-invite-users",(()=>this.onInviteUsers())),ge.on("gl-draft-details","gl-patch-details-invite-users",(()=>this.onInviteUsers())),ge.on("gl-patch-create","gl-patch-create-update-selection",(e=>this.onUpdateUserSelection(e.detail))),ge.on("gl-draft-details","gl-patch-details-update-selection",(e=>this.onUpdateUserSelection(e.detail))),ge.on("gl-patch-create","gl-patch-create-repo-checked",(e=>this.onCreateCheckRepo(e.detail))),ge.on("gl-patch-create","gl-patch-generate-title",(e=>this.onCreateGenerateTitle(e.detail))),ge.on("gl-patch-create","gl-patch-create-update-metadata",(e=>this.onCreateUpdateMetadata(e.detail))),ge.on("gl-draft-details","gl-patch-details-update-metadata",(e=>this.onDraftUpdateMetadata(e.detail))),ge.on("gl-draft-details","gl-patch-details-update-permissions",(()=>this.onDraftUpdatePermissions())),ge.on("gl-patch-create,gl-draft-details","gl-patch-file-compare-previous",(e=>this.onCompareFileWithPrevious(e.detail))),ge.on("gl-patch-create,gl-draft-details","gl-patch-file-compare-working",(e=>this.onCompareFileWithWorking(e.detail))),ge.on("gl-patch-create,gl-draft-details","gl-patch-file-open",(e=>this.onOpenFile(e.detail))),ge.on("gl-draft-details","gl-patch-checked",(e=>this.onPatchChecked(e.detail)))]}onMessageReceived(e){switch(!0){case N.is(e):e.params.state,this.state=e.params.state,this.setState(this.state),this.debouncedAttachState();break;case j.is(e):case U.is(e):case H.is(e):this.state={...this.state,...e.params},this.setState(this.state),this.debouncedAttachState(!0);break;case F.is(e):{const t=this.state.draft,n=t.patches,o=n.findIndex((t=>t.id===e.params.patch.id));n.splice(o,1,e.params.patch),this.state={...this.state,draft:t},this.setState(this.state),this.debouncedAttachState(!0);break}default:super.onMessageReceived?.(e)}}onPatchChecked(e){this.sendCommand(b,e)}onCreateCheckRepo(e){this.sendCommand(R,e)}onCreateUpdateMetadata(e){this.sendCommand(T,e)}async onCreateGenerateTitle(e){try{const e=await this.sendRequest(B,void 0);e.error?this.component.generate={error:{message:e.error.message??"Error retrieving content"}}:e.title||e.description?(this.component.generate={title:e.title,description:e.description},this.state={...this.state,create:{...this.state.create,title:e.title??this.state.create?.title,description:e.description??this.state.create?.description}},this.setState(this.state),this.debouncedAttachState()):this.component.generate=void 0}catch(e){this.component.generate={error:{message:"Error retrieving content"}}}}onDraftUpdateMetadata(e){this.sendCommand(O,e)}onDraftUpdatePermissions(){this.sendCommand(M,void 0)}onShowPatchInGraph(e){}onCreatePatch(e){this.sendCommand(m,e)}onShareLocalPatch(){this.sendCommand(P,void 0)}onCopyCloudLink(){this.sendCommand(E,void 0)}onModeClicked(e){const t=e.target?.dataset.actionValue??void 0;t!==this.state.mode&&this.sendCommand(S,{mode:t})}onApplyPatch(e){null!=e.selectedPatches&&0!==e.selectedPatches.length&&this.sendCommand(f,{details:e.draft,target:e.target??"current",selected:e.selectedPatches})}onArchiveDraft(e){this.sendCommand(g,{reason:e})}onChangePatchBase(e){this.sendCommand(y,void 0)}onSelectPatchRepo(e){this.sendCommand(v,void 0)}onCommandClickedCore(e){const t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this.sendCommand(l,{command:t})}onSwitchAIModel(e){this.onCommandClickedCore("gitlens.switchAIModel")}async onAIExplain(e){try{const e=await this.sendRequest(I,void 0);e.error?this.component.explain={error:{message:e.error.message??"Error retrieving content"}}:this.component.explain=e}catch(e){this.component.explain={error:{message:"Error retrieving content"}}}}onToggleFilesLayout(e){const t=e.target?.dataset.switchValue??void 0;if(t===this.state.preferences.files?.layout)return;const n={...this.state.preferences.files,layout:t??"auto",compact:this.state.preferences.files?.compact??!0,threshold:this.state.preferences.files?.threshold??5,icon:this.state.preferences.files?.icon??"type"};this.state={...this.state,preferences:{...this.state.preferences,files:n}},this.debouncedAttachState(),this.sendCommand(C,{files:n})}onInviteUsers(){this.sendCommand(L,void 0)}onUpdateUserSelection(e){this.sendCommand(D,e)}onOpenFileOnRemote(e){this.sendCommand(k,e)}onOpenFile(e){this.sendCommand(x,e)}onCompareFileWithWorking(e){this.sendCommand(_,e)}onCompareFileWithPrevious(e){this.sendCommand(A,e)}onFileMoreActions(e){this.sendCommand(w,e)}get component(){return null==this._component&&(this._component=document.getElementById("app"),this._component.app=this),this._component}attachState(e){this.component.state=this.state}}new PatchDetailsApp;var _l=o.I,$l=o.w;export{_l as PatchDetailsApp,$l as uncommittedSha};