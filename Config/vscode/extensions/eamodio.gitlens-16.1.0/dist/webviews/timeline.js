var e,t,o={47:(e,t,o)=>{const r=o(602),n=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,s=/[\x00-\x1F\x7F-\x9F]{1,1000}/y,a=/(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F)(?:\u200d(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F))*/uy,l=/[\x20-\x7E\xA0-\xFF]{1,1000}/y,c=/\p{M}+/gu,h={limit:1/0,ellipsis:""},d=(e,t={},o={})=>{const p=t.limit??1/0,u=t.ellipsis??"",g=t?.ellipsisWidth??(u?d(u,h,o).width:0),m=o.ansiWidth??0,f=o.controlWidth??0,v=o.ambiguousWidth??1,y=o.emojiWidth??2,w=o.fullWidthWidth??2,x=o.regularWidth??1,_=o.wideWidth??2;let $=0,C=0,P=e.length,S=0,A=!1,D=P,T=Math.max(0,p-g),O=0,E=0,B=0,F=0;e:for(;;){if(E>O||C>=P&&C>$){const t=e.slice(O,E)||e.slice($,C);S=0;for(const e of t.replaceAll(c,"")){const t=e.codePointAt(0)||0;if(F=(0,r.isFullWidth)(t)?w:(0,r.isWide)(t)?_:v!==x&&(0,r.isAmbiguous)(t)?v:x,B+F>T&&(D=Math.min(D,Math.max(O,$)+S)),B+F>p){A=!0;break e}S+=e.length,B+=F}O=E=0}if(C>=P)break;if(l.lastIndex=C,l.test(e)){if(S=l.lastIndex-C,F=S*x,B+F>T&&(D=Math.min(D,C+Math.floor((T-B)/x))),B+F>p){A=!0;break}B+=F,O=$,E=C,C=$=l.lastIndex}else if(n.lastIndex=C,n.test(e)){if(B+m>T&&(D=Math.min(D,C)),B+m>p){A=!0;break}B+=m,O=$,E=C,C=$=n.lastIndex}else if(s.lastIndex=C,s.test(e)){if(S=s.lastIndex-C,F=S*f,B+F>T&&(D=Math.min(D,C+Math.floor((T-B)/f))),B+F>p){A=!0;break}B+=F,O=$,E=C,C=$=s.lastIndex}else if(a.lastIndex=C,a.test(e)){if(B+y>T&&(D=Math.min(D,C)),B+y>p){A=!0;break}B+=y,O=$,E=C,C=$=a.lastIndex}else C+=1}return{width:A?T:B,index:A?D:P,truncated:A,ellipsed:A&&p>=g}}},602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0;t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109;t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510;t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var s=r[e]={exports:{}};return o[e](s,s.exports,n),s.exports}n.m=o,n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[])),n.u=e=>"lib-billboard.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="#{root}/dist/webviews/",void 0!==n&&Object.defineProperty(n,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}}),e={122:0},t=t=>{var o,r,{__webpack_ids__:s,__webpack_modules__:a,__webpack_runtime__:l}=t,c=0;for(o in a)n.o(a,o)&&(n.m[o]=a[o]);for(l&&l(n);c<s.length;c++)r=s[c],n.o(e,r)&&e[r]&&e[r][0](),e[s[c]]=0},n.f.j=(o,r)=>{var s=n.o(e,o)?e[o]:void 0;if(0!==s)if(s)r.push(s[1]);else{var a=import("./"+n.u(o)).then(t,(t=>{throw 0!==e[o]&&(e[o]=void 0),t}));a=Promise.race([a,new Promise((t=>s=e[o]=[t]))]),r.push(s[1]=a)}};var s={};n.d(s,{h:()=>TimelineApp});const a=14;var l=(e=>(e.Community="community",e.CommunityWithAccount="community-with-account",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))(l||{}),c=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Community=0]="Community",e[e.ProPreview=1]="ProPreview",e[e.ProPreviewExpired=2]="ProPreviewExpired",e[e.ProTrial=3]="ProTrial",e[e.ProTrialExpired=4]="ProTrialExpired",e[e.ProTrialReactivationEligible=5]="ProTrialReactivationEligible",e[e.Paid=6]="Paid",e))(c||{});const h=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,d=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,p=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let u;const g=new Map;let m,f,v;function y(e,t,o,r=!0){const n=`${o??""}:${t=t??void 0}`;let s=g.get(n);if(null==s){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=d.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(h))if(null!=t)for(const[e,r]of Object.entries(t))if(null!=r)switch(e){case"year":o.year=4===r.length?"numeric":"2-digit";break;case"month":switch(r.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===r?"2-digit":"numeric";break;case"weekday":switch(r.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===r.length?"2-digit":"numeric",o.hour12="hh"===r||"h"===r;break;case"minute":o.minute=2===r.length?"2-digit":"numeric";break;case"second":o.second=2===r.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===r.length?"long":"short"}return o}(t);let a;a=null==o?m:"system"===o?void 0:[o],s=new Intl.DateTimeFormat(a,e),r&&g.set(n,s)}if(null==t||d.test(t))return s.format(e);function a(e){const t=`${o??""}:time:${e}`;let n=g.get(t);if(null==n){const s={localeMatcher:"best fit",timeStyle:e};let a;a=null==o?m:"system"===o?void 0:[o],n=new Intl.DateTimeFormat(a,s),r&&g.set(t,n)}return n}const l=s.formatToParts(e);return t.replace(h,((t,o,r,n,s,c,h,d,p,u,g,m,f,v,y)=>{if(null!=o)return o.substring(1,o.length-1);for(const[t,o]of Object.entries(y)){if(null==o)continue;const r=l.find((e=>e.type===t));if("Do"===o&&"day"===r?.type)return x(Number(r.value));if("a"===o&&"dayPeriod"===r?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??r)?.value??""}`}return r?.value??""}return""}))}const w=["th","st","nd","rd"];function x(e){const t=e%100;return`${e}${w[(t-20)%10]??w[t]??w[0]}`}function _(e){return`GitLens ${function(e){switch(e){case l.CommunityWithAccount:return"Community";case l.Pro:return"Pro";case l.Teams:return"Teams";case l.Enterprise:return"Enterprise";case l.Community:default:return"Community"}}(e)}`}l.Community,l.CommunityWithAccount,l.Pro,l.Teams,l.Enterprise;function $(e,t){return C(e.plan.effective.expiresOn,t)}function C(e,t){return null!=e?function(e,t,o,r){const n=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),s=r??Math.floor;switch(o){case"days":return s(n/864e5);case"hours":return s(n/36e5);case"minutes":return s(n/6e4);case"seconds":return s(n/1e3);default:return n}}(Date.now(),new Date(e),t,Math.round):void 0}function P(e){return(t=e.plan.actual.id)!==l.Community&&t!==l.CommunityWithAccount;var t}class IpcCall{constructor(e,t,o=!1,r=!1){this.scope=e,this.reset=o,this.pack=r,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcNotification extends IpcCall{}const S=new IpcCommand("core","webview/ready"),A=new IpcCommand("core","webview/focus/changed"),D=(new IpcCommand("core","command/execute"),new IpcCommand("core","configuration/update"),new IpcCommand("core","telemetry/sendEvent"));function T(e){return null!=e&&"object"==typeof e&&"__ipc"in e&&"promise"===e.__ipc&&"id"in e&&"string"==typeof e.id&&"method"in e&&"string"==typeof e.method}const O=new IpcNotification("core","ipc/promise/settled"),E=(new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const B="timeline",F=new IpcCommand(B,"point/open"),W=new IpcCommand(B,"period/update"),U=new IpcNotification(B,"didChange");class context_request_event_s extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}}class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}class context_provider_e extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{const t=e.composedPath()[0];e.context===this.context&&t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{const t=e.composedPath()[0];if(e.context!==this.context||t===this.host)return;const o=new Set;for(const[e,{consumerHost:t}]of this.subscriptions)o.has(e)||(o.add(e),t.dispatchEvent(new context_request_event_s(this.context,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context))}}function V(e,t,o){let r,n,s,a,l;function c(){const e=Date.now();if(function(e){const o=e-(n??0);return null==n||o>=t||o<0}(e))h();else{l=setTimeout(c,t-(e-(n??0)))}}function h(){return l=void 0,r?function(){const t=r,o=s;return r=s=void 0,a=e.apply(o,t),a}():(r=void 0,s=void 0,a)}function d(...e){const h=Date.now();return r=null!=o&&r?o(r,e):e,s=this,n=h,null==l&&(l=setTimeout(c,t)),a}return d.cancel=function(){null!=l&&clearTimeout(l),r=void 0,n=void 0,s=void 0,l=void 0},d.flush=function(){return null==l?a:(clearTimeout(l),h())},d.pending=function(){return null!=l},d}const j=/\(([\s\S]*)\)/,G=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,q=/\s?=.*$/;function Q(e){const t=.001*performance.now();let o=Math.floor(t),r=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],r-=e[1],r<0&&(o--,r+=1e9)),[o,r]}function J(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const Y=J(),K=new Map;function Z(e){K.delete(e)}function X(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} → ${e.toString(16).padStart(5)}]`}function ee(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};const o=t?Y.current:void 0,r=Y.next();return{scopeId:r,prevScopeId:o,prefix:`${X(r,o)} ${e}`}}Error;function te(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;n(47);var ie=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(ie||{});Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));const oe="utm_source=gitlens-extension&utm_medium=in-app-links",re=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${oe}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${oe}`,graph:`https://gitkraken.com/solutions/commit-graph?${oe}`,launchpad:`https://gitkraken.com/solutions/launchpad?${oe}`,platform:`https://gitkraken.com/devex?${oe}`,pricing:`https://gitkraken.com/gitlens/pricing?${oe}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${oe}`,security:`https://help.gitkraken.com/gitlens/security?${oe}`,workspaces:`https://gitkraken.com/solutions/workspaces?${oe}`,cli:`https://gitkraken.com/cli?${oe}`,browserExtension:`https://gitkraken.com/browser-extension?${oe}`,desktop:`https://gitkraken.com/git-client?${oe}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${oe}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${oe}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${oe}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${oe}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${oe}`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${oe}#streamline-collaboration`}),{fromCharCode:ne}=String;new TextEncoder;function se(e){const[t,o]=Q(e);return 1e3*t+Math.floor(o/1e6)}function ae(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const r=1===t?e:o.plural??`${e}s`;return o.only?r:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${r}`}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);const le=Symbol("logInstanceNameFn");function ce(e){return function(e,t=!1){let o,r,n,s,a,l=0,c=!1,h=!1,d=!0;null!=e&&({args:o,if:r,enter:n,exit:s,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:h=!1,timed:d=!0}=e);l>0&&(h=!0,d=!0);d&&(c=!0);const p=pe.isDebugging,u=t?pe.debug:pe.log,g=p?"debug":"info";return(e,t,m)=>{let f,v;if("function"==typeof m.value?(f=m.value,v="value"):"function"==typeof m.get&&(f=m.get,v="get"),null==f||null==v)throw new Error("Not supported");const y=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(G,"")||t,t=t.slice(0,t.indexOf("{"));let o=t.indexOf("("),r=t.indexOf(")");o=o>=0?o+1:0,r=r>0?r:t.indexOf("="),t=t.slice(o,r),t=`(${t})`;const n=j.exec(t);return null!=n?n[1].split(",").map((e=>e.trim().replace(q,""))):[]}(f):[];m[v]=function(...e){if(!p&&!pe.enabled(g)||null!=r&&!r.apply(this,e))return f.apply(this,e);const m=Y.current,v=Y.next(),w=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let o=t?.name??"";const r=o.indexOf("_");o=-1===r?o:o.substring(r+1),null!=t?.[le]&&(o=t[le](e,o));return o}(this):void 0;let x,_=w?c?`${X(v,m)} ${w}.${t}`:`${w}.${t}`:t;null!=a&&(_=a({id:v,instance:this,instanceName:w??"",name:t,prefix:_},...e)),c&&(x=function(e,t){return t={prevScopeId:Y.current,...t},K.set(e,t),t}(v,{scopeId:v,prevScopeId:m,prefix:_}));const $=null!=n?n(...e):"";let C;if(!1===o||0===e.length)C="",h||u.call(pe,`${_}${$}`);else{let t;C="";let r,n,s,a=-1;for(s of e){if(r=y[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if(C.length>0&&(C+=", "),"string"==typeof t){C+=t;continue}n=String(t(s))}else C.length>0&&(C+=", "),n=pe.toLoggable(s);C+=r?`${r}=${n}`:n}h||u.call(pe,C?`${_}${$}(${C})`:`${_}${$}`)}if(h||d||null!=s){const t=d?Q():void 0,o=e=>{const o=void 0!==t?` [${se(t)}ms]`:"";h?pe.error(e,C?`${_}${$}(${C})`:`${_}${$}`,x?.exitDetails?`failed${x.exitDetails}${o}`:`failed${o}`):pe.error(e,_,x?.exitDetails?`failed${x.exitDetails}${o}`:`failed${o}`),c&&Z(v)};let r;try{r=f.apply(this,e)}catch(e){throw o(e),e}const n=e=>{let o,r,n,a;if(null!=t?(o=se(t),o>500?(r=pe.warn,n=` [*${o}ms] (slow)`):(r=u,n=` [${o}ms]`)):(n="",r=u),null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${pe.toLoggable(e)}`);else x?.exitFailed?(a=x.exitFailed,r=(e,...t)=>pe.error(null,e,...t)):a="completed";h?(0===l||o>l)&&r.call(pe,C?`${_}${$}(${C}) ${a}${x?.exitDetails||""}${n}`:`${_}${$} ${a}${x?.exitDetails||""}${n}`):r.call(pe,C?`${_}(${C}) ${a}${x?.exitDetails||""}${n}`:`${_} ${a}${x?.exitDetails||""}${n}`),c&&Z(v)};return null!=r&&te(r)?r.then(n,o):n(r),r}return f.apply(this,e)}}}(e,!0)}const he=new Set(["accessToken","password","token"]),de=function(e,t){return he.has(e)?`<${t}>`:t},pe=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=ue(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=ue(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let r;if(r=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==r){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(r=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(t??=this.provider.sanitize??de,Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function ue(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const ge={enabled:e=>pe.enabled(e)||pe.isDebugging,log:(e,t,o,...r)=>{switch(e){case"error":pe.error(void 0,t,o,...r);break;case"warn":pe.warn(t,o,...r);break;case"info":pe.log(t,o,...r);break;default:pe.debug(t,o,...r)}}};class LoggerContext{constructor(e){this.scope=ee(e,void 0),pe.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?pe.log(this.scope,e,...t):pe.log(e,t.shift(),...t)}}class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(D,e)}dispose(){this.disposables.forEach((e=>e.dispose()))}}var me;function fe(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function be(e,t){return new Promise((o=>{e.addEventListener(t,(function r(n){n.target===e&&(e.removeEventListener(t,r),o())}))}))}(me||(me={})).on=function(e,t,o,r){let n=!1;if("string"==typeof e){const s=function(t){const r=t?.target?.closest(e);null!=r&&o(t,r)};return document.addEventListener(t,s,r??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(t,s,r??!0))}}}const s=function(e){o(e,this)};return e.addEventListener(t,s,r??!1),{dispose:()=>{n||(n=!0,e.removeEventListener(t,s,r??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let r;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:ee(e??"",!1),r="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??ge,this._time=Q(),null!=r){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=Q(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=Q(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,r]=Q(this._time),n=1e3*o+Math.floor(r/1e6),s=e?.message??"";this.logProvider.log(n>250?"warn":this.logLevel,this.logScope,`${s?`${s} `:""}[${n}ms]${e?.suffix??""}`)}}const ve=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const r=this.listeners.push(null==t?e:[e,t]),n={dispose:()=>{n.dispose=_Emitter._noop,this._disposed||r()}};return Array.isArray(o)&&o.push(n),n}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};ve._noop=function(){};let ye=ve;const we={done:!0,value:void 0},ke=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};ke.Undefined=new ke(void 0);let xe=ke;class LinkedList{constructor(){this._first=xe.Undefined,this._last=xe.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===xe.Undefined}clear(){this._first=xe.Undefined,this._last=xe.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new xe(e);if(this._first===xe.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let r=!1;return()=>{r||(r=!0,this._remove(o))}}shift(){if(this._first===xe.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===xe.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==xe.Undefined&&e.next!==xe.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===xe.Undefined&&e.next===xe.Undefined?(this._first=xe.Undefined,this._last=xe.Undefined):e.next===xe.Undefined?(this._last=this._last.prev,this._last.next=xe.Undefined):e.prev===xe.Undefined&&(this._first=this._first.next,this._first.prev=xe.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===xe.Undefined?we:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==xe.Undefined;t=t.next)e.push(t.element);return e}}var _e=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,Ce=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?$e(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&_e(t,o,s),s};let Pe;function Se(){return Pe??=acquireVsCodeApi()}const Ae=J();function Re(){return`webview:${Ae.next()}`}let De=class{constructor(e){this.appName=e,this._onReceiveMessage=new ye,this._pendingHandlers=new Map,this._api=Se(),this._disposable=me.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=K.get(Y.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const r=function(e,t,...o){return(t?.provider??ge).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(ee(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),r?.stop()}if(this.replaceIpcPromisesWithPromises(o.params),null==o.completionId)this._onReceiveMessage.fire(o);else{const e=Oe(o.method,o.completionId);this._pendingHandlers.get(e)?.(o)}}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(const t in e){const o=e[t];T(o)?e[t]=this.getResponsePromise(o.method,o.id):this.replaceIpcPromisesWithPromises(o)}}sendCommand(e,t){const o=Re();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const o=Re(),r=this.getResponsePromise(e.response.method,o);return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),r}getResponsePromise(e,t){return new Promise(((o,r)=>{const n=Oe(e,t);let s;function a(){clearTimeout(s),s=void 0,this._pendingHandlers.delete(n)}s=setTimeout((()=>{a.call(this),r(new Error(`Timed out waiting for completion of ${n}`))}),60*(pe.isDebugging?60:5)*1e3),this._pendingHandlers.set(n,(e=>{if(a.call(this),e.method===O.method){const t=e.params;"rejected"===t.status?queueMicrotask((()=>r(new Error(t.reason)))):queueMicrotask((()=>o(t.value)))}else queueMicrotask((()=>o(e.params)))}))}))}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var Te;function Oe(e,t){return`${e}|${t}`}Ce([ce({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],De.prototype,"onMessageReceived",1),Ce([ce({args:{0:e=>e.method,1:!1}})],De.prototype,"sendCommand",1),Ce([ce({args:{0:e=>e.method,1:!1,2:!1}})],De.prototype,"sendRequest",1),Ce([ce({args:{0:e=>`${e.id}, method=${e.method}`}})],De.prototype,"postMessage",1),De=Ce([(Te=(e,t)=>`${e.appName}(${t})`,e=>{e[le]=Te})],De);const Le="gl-telemetry-fired";function Ee(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,r=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=Ee(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,r){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Ee(Math.max(Math.min(1,t),0),3),this.l=Ee(Math.max(Math.min(1,o),0),3),this.a=Ee(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,r=e.b/255,n=e.a,s=Math.max(t,o,r),a=Math.min(t,o,r);let l=0,c=0;const h=(a+s)/2,d=s-a;if(d>0){switch(c=Math.min(h<=.5?d/(2*h):d/(2-2*h),1),s){case t:l=(o-r)/d+(o<r?6:0);break;case o:l=(r-t)/d+2;break;case r:l=(t-o)/d+4}l*=60,l=Math.round(l)}return new HSLA(l,c,h,n)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:r,a:n}=e;let s,a,l;if(0===o)s=a=l=r;else{const e=r<.5?r*(1+o):r+o-r*o,n=2*r-e;s=HSLA._hue2rgb(n,e,t+1/3),a=HSLA._hue2rgb(n,e,t),l=HSLA._hue2rgb(n,e,t-1/3)}return new RGBA(Math.round(255*s),Math.round(255*a),Math.round(255*l),n)}}class HSVA{constructor(e,t,o,r){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Ee(Math.max(Math.min(1,t),0),3),this.v=Ee(Math.max(Math.min(1,o),0),3),this.a=Ee(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,r=e.b/255,n=Math.max(t,o,r),s=n-Math.min(t,o,r),a=0===n?0:s/n;let l;return l=0===s?0:n===t?((o-r)/s%6+6)%6:n===o?(r-t)/s+2:(t-o)/s+4,new HSVA(Math.round(60*l),a,n,e.a)}static toRGBA(e){const{h:t,s:o,v:r,a:n}=e,s=r*o,a=s*(1-Math.abs(t/60%2-1)),l=r-s;let[c,h,d]=[0,0,0];return t<60?(c=s,h=a):t<120?(c=a,h=s):t<180?(h=s,d=a):t<240?(h=a,d=s):t<300?(c=a,d=s):t<=360&&(c=s,d=a),c=Math.round(255*(c+l)),h=Math.round(255*(h+l)),d=Math.round(255*(d+l)),new RGBA(c,h,d,n)}}function Be(e,t){return t.getPropertyValue(e).trim()}const Fe=class _Color{static from(e){return e instanceof _Color?e:He(e)||_Color.red}static fromCssVariable(e,t){return He(Be(e,t))||_Color.red}static fromHex(e){return Ve(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return Ee(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new Ie(new RGBA(0,0,0,e.rgba.a));if(1===t)return new Ie(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let r=20;const n=(e,o)=>{const s=e.mix(o,.5),a=s.getRelativeLuminance();return Math.abs(t-a)<1e-7||!r--?s:a>t?n(e,s):n(s,o)},s=(o>t?n(Ie.black,e):n(e,Ie.white)).rgba;return new Ie(new RGBA(s.r,s.g,s.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:r,a:n}=this.rgba;return new _Color(new RGBA(t,o,r,n*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,r=t.a,n=o+r*(1-o);if(n<1e-6)return _Color.transparent;const s=this.rgba.r*o/n+t.r*r*(1-o)/n,a=this.rgba.g*o/n+t.g*r*(1-o)/n,l=this.rgba.b*o/n+t.b*r*(1-o)/n;return new _Color(new RGBA(s,a,l,n))}mix(e,t){return function(e,t,o){const r=e.rgba,n=t.rgba;return new Ie(new RGBA(r.r+o*(n.r-r.r),r.g+o*(n.g-r.g),r.b+o*(n.b-r.b),r.a+o*(n.a-r.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:r,a:n}=this.rgba;return new _Color(new RGBA(e.rgba.r-n*(e.rgba.r-t),e.rgba.g-n*(e.rgba.g-o),e.rgba.b-n*(e.rgba.b-r),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return ze(e);return Me(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const r=e.getRelativeLuminance(),n=t.getRelativeLuminance();return o=o*(n-r)/n,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const r=e.getRelativeLuminance();return o=o*(r-t.getRelativeLuminance())/r,e.darken(o)}};Fe.white=new Fe(new RGBA(255,255,255,1)),Fe.black=new Fe(new RGBA(0,0,0,1)),Fe.red=new Fe(new RGBA(255,0,0,1)),Fe.blue=new Fe(new RGBA(0,0,255,1)),Fe.green=new Fe(new RGBA(0,255,0,1)),Fe.cyan=new Fe(new RGBA(0,255,255,1)),Fe.lightgrey=new Fe(new RGBA(211,211,211,1)),Fe.transparent=new Fe(new RGBA(0,0,0,0));let Ie=Fe;function Me(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function We(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function ze(e){return`#${We(e.rgba.r)}${We(e.rgba.g)}${We(e.rgba.b)}`}const Ue=/^((?:rgb|hsl)a?)\((-?\d+(?:%|deg)?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function He(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===ie.Hash)return Ve(e);const t=Ue.exec(e);if(null==t)return null;const o=t[1];let r;switch(o){case"rgb":case"hsl":r=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":r=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new Ie(new RGBA(r[0],r[1],r[2],r[3]));case"hsl":case"hsla":return new Ie(new HSLA(r[0],r[1],r[2],r[3]))}return Ie.red}function Ve(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==ie.Hash)return null;switch(t){case 7:{const t=16*Ne(e.charCodeAt(1))+Ne(e.charCodeAt(2)),o=16*Ne(e.charCodeAt(3))+Ne(e.charCodeAt(4)),r=16*Ne(e.charCodeAt(5))+Ne(e.charCodeAt(6));return new Ie(new RGBA(t,o,r,1))}case 9:{const t=16*Ne(e.charCodeAt(1))+Ne(e.charCodeAt(2)),o=16*Ne(e.charCodeAt(3))+Ne(e.charCodeAt(4)),r=16*Ne(e.charCodeAt(5))+Ne(e.charCodeAt(6)),n=16*Ne(e.charCodeAt(7))+Ne(e.charCodeAt(8));return new Ie(new RGBA(t,o,r,n/255))}case 4:{const t=Ne(e.charCodeAt(1)),o=Ne(e.charCodeAt(2)),r=Ne(e.charCodeAt(3));return new Ie(new RGBA(16*t+t,16*o+o,16*r+r))}case 5:{const t=Ne(e.charCodeAt(1)),o=Ne(e.charCodeAt(2)),r=Ne(e.charCodeAt(3)),n=Ne(e.charCodeAt(4));return new Ie(new RGBA(16*t+t,16*o+o,16*r+r,(16*n+n)/255))}default:return null}}function Ne(e){switch(e){case ie.Digit0:return 0;case ie.Digit1:return 1;case ie.Digit2:return 2;case ie.Digit3:return 3;case ie.Digit4:return 4;case ie.Digit5:return 5;case ie.Digit6:return 6;case ie.Digit7:return 7;case ie.Digit8:return 8;case ie.Digit9:return 9;case ie.a:case ie.A:return 10;case ie.b:case ie.B:return 11;case ie.c:case ie.C:return 12;case ie.d:case ie.D:return 13;case ie.e:case ie.E:return 14;case ie.f:case ie.F:return 15}return 0}const je=new ye,Ge=je.event;function qe(e){const t=document.documentElement,o=window.getComputedStyle(t),r=document.body.classList,n=r.contains("vscode-light")||r.contains("vscode-high-contrast-light"),s=r.contains("vscode-high-contrast")||r.contains("vscode-high-contrast-light"),a=Be("--vscode-editor-background",o);let l=Be("--vscode-editor-foreground",o);return l||(l=Be("--vscode-foreground",o)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:n,isHighContrastTheme:s,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],o=qe();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(Ge(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(e),this.log("opening..."),this._api=Se(),this._hostIpc=new De(this.appName),t.push(this._hostIpc),this._telemetry=new TelemetryContext(this._hostIpc),t.push(this._telemetry),new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),new i(document.body,{context:"telemetry",initialValue:this._telemetry}),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{je.fire(qe(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===E.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(S,void 0),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(me.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0}))),t.push(me.on(window,Le,(e=>{this._telemetry.sendEvent(e.detail)}))),this.log("opened")}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=V((e=>{this.sendCommand(A,e)}),150);this.bindDisposables.push(me.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),me.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){this._logger.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}class TimelineChart{constructor(e,t){this.placement=t,this._onDidClickDataPoint=new ye,this._commitsByTimestamp=new Map,this._authorsByIndex=new Map,this._indexByAuthors=new Map,this._dateFormat=void 0,this._shortDateFormat=void 0,this._selector=e;const o=()=>{const e=this._size;this._chart?.resize({width:e.width,height:e.height})},r=this.compact?32:0,n=this.compact?16:0;this.$container=document.querySelector(e).parentElement,this._resizeObserver=new ResizeObserver((e=>{const t=e[0].borderBoxSize[0],s={width:Math.floor(t.inlineSize)+r,height:Math.floor(t.blockSize)+n};this._size=s,requestAnimationFrame(o)}));const s=this.$container.getBoundingClientRect();this._size={height:Math.floor(s.height)+r,width:Math.floor(s.width)+n},this._resizeObserver.observe(this.$container,{box:"border-box"})}get onDidClickDataPoint(){return this._onDidClickDataPoint.event}get compact(){return"editor"!==this.placement}dispose(){this._resizeObserver.disconnect(),this._chart?.destroy()}reset(){this._chart?.unselect(),this._chart?.unzoom()}setEmptyState(e,t){const o=document.getElementById("empty"),r=document.getElementById("header");null!=t.uri?(0===e?.length?(o.innerHTML="<p>No commits found for the specified time period.</p>",o.removeAttribute("hidden")):o.setAttribute("hidden",""),r.removeAttribute("hidden")):null==e?(o.innerHTML="<p>There are no editors open that can provide file history information.</p>",o.removeAttribute("hidden"),r.setAttribute("hidden","")):(o.setAttribute("hidden",""),r.removeAttribute("hidden"))}async updateChart(e){this._dateFormat=e.dateFormat,this._shortDateFormat=e.shortDateFormat,this._commitsByTimestamp.clear(),this._authorsByIndex.clear(),this._indexByAuthors.clear();let t=e?.dataset;if(null!=t||e.access.allowed||"editor"!==this.placement||(t=function(){const e=[],t=["Eric Amodio","Justin Roberts","Keith Daulton","Ramin Tadayon","Ada Lovelace","Grace Hopper"],o=10;for(let r=0;r<o;r++){const n=new Date((new Date).getTime()-Math.floor(7776e6*Math.random()));e.push({commit:String(r),author:t[Math.floor(Math.random()*t.length)],date:n.toISOString(),message:"",additions:0===r?2:r===o-1?50:Math.floor(20*Math.random())+1,deletions:0===r?1:r===o-1?25:Math.floor(20*Math.random())+1,sort:n.getTime()})}return e.sort(((e,t)=>t.sort-e.sort))}()),this.setEmptyState(t,e),null==t||0===t.length)return this._chart?.destroy(),void(this._chart=void 0);const o={},r={},s={},a={},l={},c=[],h={},d=[];let p,u,g,m,f,v=0;const{bb:y,bar:w,bubble:x,zoom:_}=await n.e(162).then(n.bind(n,10));for(p of t){({author:u,date:g,additions:m,deletions:f}=p),this._indexByAuthors.has(u)||(this._indexByAuthors.set(u,v),this._authorsByIndex.set(v,u),v--);const e="time";null==h[e]&&(h[e]=[],h.additions=[],h.deletions=[],o.additions=e,o.deletions=e,a.additions="y2",a.deletions="y2",s.additions="Additions",s.deletions="Deletions",r.additions="rgba(73, 190, 71, 1)",r.deletions="rgba(195, 32, 45, 1)",l.additions=w(),l.deletions=w(),d.push(e),c.push(["additions","deletions"]));const t=`${e}.${u}`;null==h[t]&&(h[t]=[],h[u]=[],o[u]=t,a[u]="y",s[u]=u,l[u]=x(),d.push(t)),h[e].push(g),h.additions.push(m??0),h.deletions.push(f??0),h[t].push(g);const n=null==m&&null==f?6:(m??0)+(f??0);h[u].push({y:this._indexByAuthors.get(u),z:n}),this._commitsByTimestamp.set(g,p)}c.push(d);const $=Object.entries(h).map((([e,t])=>[e,...t]));null!=this._chart&&null!=this._loading&&(this._loading.cancel(),this._loading=void 0,this._chart?.destroy(),this._chart=void 0),this._loading=function(){const e={pending:!0,promise:void 0,fulfill:void 0,cancel:void 0};return e.promise=new Promise(((t,o)=>{e.fulfill=function(o){e.pending=!1,t(o)},e.cancel=function(t){e.pending=!1,null!=t?o(t):o()}})),e}();try{if(null==this._chart){const e=this.getChartOptions(_);null==e.axis&&(e.axis={y:{tick:{}}}),null==e.axis.y&&(e.axis.y={tick:{}}),null==e.axis.y.tick&&(e.axis.y.tick={}),e.axis.y.min=v-2,e.axis.y.tick.values=[...this._authorsByIndex.keys()],e.data={...e.data,axes:a,colors:r,columns:$,groups:c,names:s,types:l,xs:o},e.onafterinit=()=>setTimeout((()=>{this._loading?.fulfill(),this._loading=void 0}),250),this._chart=y.generate(e)}else this._chart.config("axis.y.tick.values",[...this._authorsByIndex.keys()],!1),this._chart.config("axis.y.min",v-2,!1),this._chart.groups(c),this._chart.load({axes:a,colors:r,columns:$,names:s,types:l,xs:o,unload:!0,done:()=>{setTimeout((()=>{this._loading?.fulfill(),this._loading=void 0}),250)}});return await this._loading.promise}catch(e){}}getChartOptions(e){const t={bindto:this._selector,data:{xFormat:"%Y-%m-%dT%H:%M:%S.%LZ",xLocaltime:!1,onclick:this.onDataPointClicked.bind(this)},axis:{x:{type:"timeseries",clipPath:!1,localtime:!0,show:!0,tick:{centered:!0,culling:!1,fit:!1,format:e=>this.compact?"":"number"==typeof e?e:y(e,this._shortDateFormat??"short"),multiline:!1,show:!1,outer:!this.compact}},y:{max:0,padding:{top:75,bottom:100},show:!0,tick:{format:e=>this.compact?"":this._authorsByIndex.get(e)??"",outer:!this.compact,show:this.compact}},y2:{padding:this.compact?{top:0,bottom:0}:void 0,label:this.compact?void 0:{text:"Lines changed",position:"outer-middle"},show:!0,tick:{format:e=>this.compact?"":e,outer:!this.compact}}},bar:{width:2,sensitivity:4,padding:2},bubble:{maxR:100,zerobased:!0},grid:{focus:{edge:!0,show:!0,y:!0},front:!1,lines:{front:!1},x:{show:!1},y:{show:!0}},legend:{show:!this.compact,padding:10},point:{sensitivity:"radius"},resize:{auto:!1},size:this._size,tooltip:{grouped:!0,format:{title:this.getTooltipTitle.bind(this),name:this.getTooltipName.bind(this),value:this.getTooltipValue.bind(this)},show:!0,order:"desc"},zoom:{enabled:e(),type:"drag",rescale:!0,resetButton:!0,extent:[1,.01],x:{min:100}}};return t}getTooltipName(e,t,o,r){if("additions"===o||"deletions"===o)return e;const n=new Date(this._chart.data(o)[0].values[r].x),s=this._commitsByTimestamp.get(n.toISOString());return s?.commit.slice(0,8)??"00000000"}getTooltipTitle(e){const t=new Date(e),o=`${function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,r,n,s]of p){const a=Math.abs(o);if(a>=r||1e3===r)return t?(null==u&&(null!=v?u=v.resolvedOptions().locale:null!=f?u=f.resolvedOptions().locale:(v=new Intl.RelativeTimeFormat(m,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),u=v.resolvedOptions().locale)),"en"===u||u?.startsWith("en-")?`${Math.round(a/n)}${s}`:(null==v&&(v=new Intl.RelativeTimeFormat(m,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),v.format(Math.round(o/n),e))):(null==f&&(f=new Intl.RelativeTimeFormat(m,{localeMatcher:"best fit",numeric:"auto",style:"long"})),f.format(Math.round(o/n),e))}return""}(t))}   (${y(t,this._dateFormat)})`,r=this._commitsByTimestamp.get(t.toISOString());return null==r?o:`${r.author}, ${o}`}getTooltipValue(e,t,o,r){if("additions"===o||"deletions"===o)return 0===e?void 0:e;const n=new Date(this._chart.data(o)[0].values[r].x),s=this._commitsByTimestamp.get(n.toISOString());return s?.message??"???"}onDataPointClicked(e,t){const o=this._commitsByTimestamp.get(new Date(e.x).toISOString());null!=o&&this._onDidClickDataPoint.fire({data:{id:o.commit,selected:!0}})}}const Qe=globalThis,Je=Qe.ShadowRoot&&(void 0===Qe.ShadyCSS||Qe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ye=Symbol(),Ke=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Je&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=Ke.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ke.set(t,e))}return e}toString(){return this.cssText}}const Ze=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,Ye),Xe=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1]),e[0]);return new css_tag_n(o,e,Ye)},et=Je?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Ze(t)})(e):e,{is:tt,defineProperty:it,getOwnPropertyDescriptor:ot,getOwnPropertyNames:rt,getOwnPropertySymbols:nt,getPrototypeOf:st}=Object,at=globalThis,lt=at.trustedTypes,ct=lt?lt.emptyScript:"",ht=at.reactiveElementPolyfillSupport,dt=(e,t)=>e,pt={toAttribute(e,t){switch(t){case Boolean:e=e?ct:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},ut=(e,t)=>!tt(e,t),gt={attribute:!0,type:String,converter:pt,reflect:!1,hasChanged:ut};Symbol.metadata??=Symbol("metadata"),at.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=gt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&it(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){const{get:r,set:n}=ot(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){const s=r?.call(this);n.call(this,t),this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??gt}static _$Ei(){if(this.hasOwnProperty(dt("elementProperties")))return;const e=st(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(dt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(dt("properties"))){const e=this.properties,t=[...rt(e),...nt(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(et(e))}else void 0!==e&&t.push(et(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Je)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),r=Qe.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:pt).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){const o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=o.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:pt;this._$Em=r,this[r]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??ut)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[dt("elementProperties")]=new Map,b[dt("finalized")]=new Map,ht?.({ReactiveElement:b}),(at.reactiveElementVersions??=[]).push("2.0.4");const mt=globalThis,ft=mt.trustedTypes,bt=ft?ft.createPolicy("lit-html",{createHTML:e=>e}):void 0,vt="$lit$",yt=`lit$${Math.random().toFixed(9).slice(2)}$`,wt="?"+yt,kt=`<${wt}>`,xt=document,_t=()=>xt.createComment(""),$t=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Ct=Array.isArray,Pt=e=>Ct(e)||"function"==typeof e?.[Symbol.iterator],St="[ \t\n\f\r]",At=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rt=/-->/g,Dt=/>/g,Tt=RegExp(`>|${St}(?:([^\\s"'>=/]+)(${St}*=${St}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Ot=/'/g,Lt=/"/g,Et=/^(?:script|style|textarea|title)$/i,Bt=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Ft=Bt(1),It=(Bt(2),Bt(3),Symbol.for("lit-noChange")),Mt=Symbol.for("lit-nothing"),Wt=new WeakMap,zt=xt.createTreeWalker(xt,129);function Ut(e,t){if(!Ct(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==bt?bt.createHTML(t):t}const Ht=(e,t)=>{const o=e.length-1,r=[];let n,s=2===t?"<svg>":3===t?"<math>":"",a=At;for(let t=0;t<o;t++){const o=e[t];let l,c,h=-1,d=0;for(;d<o.length&&(a.lastIndex=d,c=a.exec(o),null!==c);)d=a.lastIndex,a===At?"!--"===c[1]?a=Rt:void 0!==c[1]?a=Dt:void 0!==c[2]?(Et.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=Tt):void 0!==c[3]&&(a=Tt):a===Tt?">"===c[0]?(a=n??At,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?Tt:'"'===c[3]?Lt:Ot):a===Lt||a===Ot?a=Tt:a===Rt||a===Dt?a=At:(a=Tt,n=void 0);const p=a===Tt&&e[t+1].startsWith("/>")?" ":"";s+=a===At?o+kt:h>=0?(r.push(l),o.slice(0,h)+vt+o.slice(h)+yt+p):o+yt+(-2===h?t:p)}return[Ut(e,s+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class N{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let n=0,s=0;const a=e.length-1,l=this.parts,[c,h]=Ht(e,t);if(this.el=N.createElement(c,o),zt.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=zt.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(vt)){const t=h[s++],o=r.getAttribute(e).split(yt),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:n,name:a[2],strings:o,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),r.removeAttribute(e)}else e.startsWith(yt)&&(l.push({type:6,index:n}),r.removeAttribute(e));if(Et.test(r.tagName)){const e=r.textContent.split(yt),t=e.length-1;if(t>0){r.textContent=ft?ft.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],_t()),zt.nextNode(),l.push({type:2,index:++n});r.append(e[t],_t())}}}else if(8===r.nodeType)if(r.data===wt)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(yt,e+1));)l.push({type:7,index:n}),e+=yt.length-1}n++}}static createElement(e,t){const o=xt.createElement("template");return o.innerHTML=e,o}}function Vt(e,t,o=e,r){if(t===It)return t;let n=void 0!==r?o._$Co?.[r]:o._$Cl;const s=$t(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(e),n._$AT(e,o,r)),void 0!==r?(o._$Co??=[])[r]=n:o._$Cl=n),void 0!==n&&(t=Vt(e,n._$AS(e,t.values),n,r)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??xt).importNode(t,!0);zt.currentNode=r;let n=zt.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new R(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new z(n,this,e)),this._$AV.push(t),l=o[++a]}s!==l?.index&&(n=zt.nextNode(),s++)}return zt.currentNode=xt,r}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=Mt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Vt(this,e,t),$t(e)?e===Mt||null==e||""===e?(this._$AH!==Mt&&this._$AR(),this._$AH=Mt):e!==this._$AH&&e!==It&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Pt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Mt&&$t(this._$AH)?this._$AA.nextSibling.data=e:this.T(xt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=N.createElement(Ut(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new M(r,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=Wt.get(e.strings);return void 0===t&&Wt.set(e.strings,t=new N(e)),t}k(e){Ct(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,r=0;for(const n of e)r===t.length?t.push(o=new R(this.O(_t()),this.O(_t()),this,this.options)):o=t[r],o._$AI(n),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,n){this.type=1,this._$AH=Mt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Mt}_$AI(e,t=this,o,r){const n=this.strings;let s=!1;if(void 0===n)e=Vt(this,e,t,0),s=!$t(e)||e!==this._$AH&&e!==It,s&&(this._$AH=e);else{const r=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=Vt(this,r[o+a],t,a),l===It&&(l=this._$AH[a]),s||=!$t(l)||l!==this._$AH[a],l===Mt?e=Mt:e!==Mt&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}s&&!r&&this.j(e)}j(e){e===Mt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Mt?void 0:e}}class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Mt)}}class L extends k{constructor(e,t,o,r,n){super(e,t,o,r,n),this.type=5}_$AI(e,t=this){if((e=Vt(this,e,t,0)??Mt)===It)return;const o=this._$AH,r=e===Mt&&o!==Mt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==Mt&&(o===Mt||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Vt(this,e)}}const Nt=mt.litHtmlPolyfillSupport;Nt?.(N,R),(mt.litHtmlVersions??=[]).push("3.2.1");class lit_element_r extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const r=o?.renderBefore??t;let n=r._$litPart$;if(void 0===n){const e=o?.renderBefore??null;r._$litPart$=n=new R(t.insertBefore(_t(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return It}}lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});const jt=globalThis.litElementPolyfillSupport;jt?.({LitElement:lit_element_r});(globalThis.litElementVersions??=[]).push("4.1.1");const Gt=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},qt={attribute:!0,type:String,converter:pt,reflect:!1,hasChanged:ut},Qt=(e=qt,t,o)=>{const{kind:r,metadata:n}=o;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(o.name,e),"accessor"===r){const{name:r}=o;return{set(o){const n=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,n,e)},init(t){return void 0!==t&&this.P(r,void 0,e),t}}}if("setter"===r){const{name:r}=o;return function(o){const n=this[r];t.call(this,o),this.requestUpdate(r,n,e)}}throw Error("Unsupported decorator location: "+r)};function Jt(e){return(t,o)=>"object"==typeof o?Qt(e,t,o):((e,t,o)=>{const r=t.hasOwnProperty(o);return t.constructor.createProperty(o,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const Yt=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function Kt(e,t){return(o,r,n)=>{const s=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof r?o:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Yt(o,r,{get(){let o=e.call(this);return void 0===o&&(o=s(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return Yt(o,r,{get(){return s(this)}})}}const Zt=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33"}),Xt=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141"});var ei=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,ii=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?ti(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&ei(t,o,s),s};function oi(e,t=""){return Ze(Object.entries(e).map((([e,o])=>function(e,t,o=""){return`:host([icon='${o}${e}'])::before { content: '${t}'; }`}(e,o,t))).join(""))}let ri=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};ri.styles=Xe`
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

		${oi(Zt)}
		${oi(Xt,"gl-")}

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
	`,ii([Jt({reflect:!0})],ri.prototype,"icon",2),ii([Jt({reflect:!0})],ri.prototype,"modifier",2),ii([Jt({type:Number})],ri.prototype,"size",2),ii([Jt({reflect:!0})],ri.prototype,"flip",2),ii([Jt({reflect:!0})],ri.prototype,"rotate",2),ri=ii([Gt("code-icon")],ri);var ni=Object.defineProperty,si=Object.getOwnPropertyDescriptor,ai=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?si(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&ni(t,o,s),s};let li=class extends lit_element_r{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return Ft`<div class="progress-bar"></div>`}};li.styles=Xe`
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
	`,ai([Jt({reflect:!0})],li.prototype,"mode",2),ai([Jt({type:Boolean})],li.prototype,"active",2),ai([Jt()],li.prototype,"position",2),li=ai([Gt("progress-indicator")],li);const ci=e=>e??Mt,hi=(Xe`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus):not(:focus-within) {
		${Xe`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`}
	}
`,Xe`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`),di=Xe`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,pi=Xe`
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
`,ui=Xe`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${hi}
	}
	a:hover {
		text-decoration: underline;
	}
`;Xe`
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
`;var gi=Object.defineProperty,mi=Object.defineProperties,fi=Object.getOwnPropertyDescriptor,bi=Object.getOwnPropertyDescriptors,vi=Object.getOwnPropertySymbols,yi=Object.prototype.hasOwnProperty,wi=Object.prototype.propertyIsEnumerable,ki=(e,t,o)=>t in e?gi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,xi=(e,t)=>{for(var o in t||(t={}))yi.call(t,o)&&ki(e,o,t[o]);if(vi)for(var o of vi(t))wi.call(t,o)&&ki(e,o,t[o]);return e},_i=(e,t)=>mi(e,bi(t)),$i=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?fi(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&gi(t,o,s),s},Ci=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)},Pi=new Map,Si=new WeakMap;function Ai(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function Ri(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Di(e,t){Pi.set(e,Ai(t))}function Ti(e,t,o){const r=Si.get(e);if(null==r?void 0:r[t])return Ri(r[t],o.dir);const n=Pi.get(t);return n?Ri(n,o.dir):{keyframes:[],options:{duration:0}}}var Oi=Xe`
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
`,Li=Xe`
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
`;const Ei=new Set,Bi=new Map;let Fi,Ii="ltr",Mi="en";const Wi="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Wi){const e=new MutationObserver(Ui);Ii=document.documentElement.dir||"ltr",Mi=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function zi(...e){e.map((e=>{const t=e.$code.toLowerCase();Bi.has(t)?Bi.set(t,Object.assign(Object.assign({},Bi.get(t)),e)):Bi.set(t,e),Fi||(Fi=e)})),Ui()}function Ui(){Wi&&(Ii=document.documentElement.dir||"ltr",Mi=document.documentElement.lang||navigator.language),[...Ei.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ei.add(this.host)}hostDisconnected(){Ei.delete(this.host)}dir(){return`${this.host.dir||Ii}`.toLowerCase()}lang(){return`${this.host.lang||Mi}`.toLowerCase()}getTranslationData(e){var t,o;const r=new Intl.Locale(e.replace(/_/g,"-")),n=null==r?void 0:r.language.toLowerCase(),s=null!==(o=null===(t=null==r?void 0:r.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:r,language:n,region:s,primary:Bi.get(`${n}-${s}`),secondary:Bi.get(n)}}exists(e,t){var o;const{primary:r,secondary:n}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(r&&r[e]||n&&n[e]||t.includeFallback&&Fi&&Fi[e])}term(e,...t){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let n;if(o&&o[e])n=o[e];else if(r&&r[e])n=r[e];else{if(!Fi||!Fi[e])return String(e);n=Fi[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}var Hi={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};zi(Hi);var Vi=Hi,Ni=class extends LocalizeController{};zi(Vi);var ji,Gi=Xe`
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
`,qi=class extends lit_element_r{constructor(){super(),((e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)})(this,ji,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const o=new CustomEvent(e,xi({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const r=customElements.get(e);if(!r){try{customElements.define(e,t,o)}catch(r){customElements.define(e,class extends t{},o)}return}let n=" (unknown version)",s=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in r&&r.version&&(s=" v"+r.version)}attributeChangedCallback(e,t,o){var r,n,s;Ci(r=this,n=ji,"read from private field"),(s?s.call(r):n.get(r))||(this.constructor.elementProperties.forEach(((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])})),((e,t,o,r)=>{Ci(e,t,"write to private field"),r?r.call(e,o):t.set(e,o)})(this,ji,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach(((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)}))}};ji=new WeakMap,qi.version="2.18.0",qi.dependencies={},$i([Jt()],qi.prototype,"dir",2),$i([Jt()],qi.prototype,"lang",2);const Qi=Math.min,Ji=Math.max,Yi=Math.round,Ki=Math.floor,Zi=e=>({x:e,y:e}),Xi={left:"right",right:"left",bottom:"top",top:"bottom"},eo={start:"end",end:"start"};function to(e,t,o){return Ji(e,Qi(t,o))}function io(e,t){return"function"==typeof e?e(t):e}function oo(e){return e.split("-")[0]}function ro(e){return e.split("-")[1]}function no(e){return"x"===e?"y":"x"}function so(e){return"y"===e?"height":"width"}function ao(e){return["top","bottom"].includes(oo(e))?"y":"x"}function lo(e){return no(ao(e))}function co(e){return e.replace(/start|end/g,(e=>eo[e]))}function ho(e){return e.replace(/left|right|bottom|top/g,(e=>Xi[e]))}function po(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function uo(e){const{x:t,y:o,width:r,height:n}=e;return{width:r,height:n,top:o,left:t,right:t+r,bottom:o+n,x:t,y:o}}function go(e,t,o){let{reference:r,floating:n}=e;const s=ao(t),a=lo(t),l=so(a),c=oo(t),h="y"===s,d=r.x+r.width/2-n.width/2,p=r.y+r.height/2-n.height/2,u=r[l]/2-n[l]/2;let g;switch(c){case"top":g={x:d,y:r.y-n.height};break;case"bottom":g={x:d,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-n.width,y:p};break;default:g={x:r.x,y:r.y}}switch(ro(t)){case"start":g[a]-=u*(o&&h?-1:1);break;case"end":g[a]+=u*(o&&h?-1:1)}return g}async function mo(e,t){var o;void 0===t&&(t={});const{x:r,y:n,platform:s,rects:a,elements:l,strategy:c}=e,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:u=!1,padding:g=0}=io(t,e),m=po(g),f=l[u?"floating"===p?"reference":"floating":p],v=uo(await s.getClippingRect({element:null==(o=await(null==s.isElement?void 0:s.isElement(f)))||o?f:f.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(l.floating)),boundary:h,rootBoundary:d,strategy:c})),y="floating"===p?{x:r,y:n,width:a.floating.width,height:a.floating.height}:a.reference,w=await(null==s.getOffsetParent?void 0:s.getOffsetParent(l.floating)),x=await(null==s.isElement?void 0:s.isElement(w))&&await(null==s.getScale?void 0:s.getScale(w))||{x:1,y:1},_=uo(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:w,strategy:c}):y);return{top:(v.top-_.top+m.top)/x.y,bottom:(_.bottom-v.bottom+m.bottom)/x.y,left:(v.left-_.left+m.left)/x.x,right:(_.right-v.right+m.right)/x.x}}function fo(){return"undefined"!=typeof window}function bo(e){return wo(e)?(e.nodeName||"").toLowerCase():"#document"}function vo(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function yo(e){var t;return null==(t=(wo(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function wo(e){return!!fo()&&(e instanceof Node||e instanceof vo(e).Node)}function ko(e){return!!fo()&&(e instanceof Element||e instanceof vo(e).Element)}function xo(e){return!!fo()&&(e instanceof HTMLElement||e instanceof vo(e).HTMLElement)}function _o(e){return!(!fo()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof vo(e).ShadowRoot)}function $o(e){const{overflow:t,overflowX:o,overflowY:r,display:n}=Do(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!["inline","contents"].includes(n)}function Co(e){return["table","td","th"].includes(bo(e))}function Po(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function So(e){const t=Ao(),o=ko(e)?Do(e):e;return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Ao(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ro(e){return["html","body","#document"].includes(bo(e))}function Do(e){return vo(e).getComputedStyle(e)}function To(e){return ko(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Oo(e){if("html"===bo(e))return e;const t=e.assignedSlot||e.parentNode||_o(e)&&e.host||yo(e);return _o(t)?t.host:t}function Lo(e){const t=Oo(e);return Ro(t)?e.ownerDocument?e.ownerDocument.body:e.body:xo(t)&&$o(t)?t:Lo(t)}function Eo(e,t,o){var r;void 0===t&&(t=[]),void 0===o&&(o=!0);const n=Lo(e),s=n===(null==(r=e.ownerDocument)?void 0:r.body),a=vo(n);if(s){const e=Bo(a);return t.concat(a,a.visualViewport||[],$o(n)?n:[],e&&o?Eo(e):[])}return t.concat(n,Eo(n,[],o))}function Bo(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Fo(e){const t=Do(e);let o=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const n=xo(e),s=n?e.offsetWidth:o,a=n?e.offsetHeight:r,l=Yi(o)!==s||Yi(r)!==a;return l&&(o=s,r=a),{width:o,height:r,$:l}}function Io(e){return ko(e)?e:e.contextElement}function Mo(e){const t=Io(e);if(!xo(t))return Zi(1);const o=t.getBoundingClientRect(),{width:r,height:n,$:s}=Fo(t);let a=(s?Yi(o.width):o.width)/r,l=(s?Yi(o.height):o.height)/n;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const Wo=Zi(0);function zo(e){const t=vo(e);return Ao()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Wo}function Uo(e,t,o,r){void 0===t&&(t=!1),void 0===o&&(o=!1);const n=e.getBoundingClientRect(),s=Io(e);let a=Zi(1);t&&(r?ko(r)&&(a=Mo(r)):a=Mo(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==vo(e))&&t}(s,o,r)?zo(s):Zi(0);let c=(n.left+l.x)/a.x,h=(n.top+l.y)/a.y,d=n.width/a.x,p=n.height/a.y;if(s){const e=vo(s),t=r&&ko(r)?vo(r):r;let o=e,n=Bo(o);for(;n&&r&&t!==o;){const e=Mo(n),t=n.getBoundingClientRect(),r=Do(n),s=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,h*=e.y,d*=e.x,p*=e.y,c+=s,h+=a,o=vo(n),n=Bo(o)}}return uo({width:d,height:p,x:c,y:h})}function Ho(e,t){const o=To(e).scrollLeft;return t?t.left+o:Uo(yo(e)).left+o}function Vo(e,t,o){void 0===o&&(o=!1);const r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-(o?0:Ho(e,r)),y:r.top+t.scrollTop}}function No(e,t,o){let r;if("viewport"===t)r=function(e,t){const o=vo(e),r=yo(e),n=o.visualViewport;let s=r.clientWidth,a=r.clientHeight,l=0,c=0;if(n){s=n.width,a=n.height;const e=Ao();(!e||e&&"fixed"===t)&&(l=n.offsetLeft,c=n.offsetTop)}return{width:s,height:a,x:l,y:c}}(e,o);else if("document"===t)r=function(e){const t=yo(e),o=To(e),r=e.ownerDocument.body,n=Ji(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Ji(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-o.scrollLeft+Ho(e);const l=-o.scrollTop;return"rtl"===Do(r).direction&&(a+=Ji(t.clientWidth,r.clientWidth)-n),{width:n,height:s,x:a,y:l}}(yo(e));else if(ko(t))r=function(e,t){const o=Uo(e,!0,"fixed"===t),r=o.top+e.clientTop,n=o.left+e.clientLeft,s=xo(e)?Mo(e):Zi(1);return{width:e.clientWidth*s.x,height:e.clientHeight*s.y,x:n*s.x,y:r*s.y}}(t,o);else{const o=zo(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return uo(r)}function jo(e,t){const o=Oo(e);return!(o===t||!ko(o)||Ro(o))&&("fixed"===Do(o).position||jo(o,t))}function Go(e,t,o){const r=xo(t),n=yo(t),s="fixed"===o,a=Uo(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const c=Zi(0);if(r||!r&&!s)if(("body"!==bo(t)||$o(n))&&(l=To(t)),r){const e=Uo(t,!0,s,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else n&&(c.x=Ho(n));const h=!n||r||s?Zi(0):Vo(n,l);return{x:a.left+l.scrollLeft-c.x-h.x,y:a.top+l.scrollTop-c.y-h.y,width:a.width,height:a.height}}function qo(e){return"static"===Do(e).position}function Qo(e,t){if(!xo(e)||"fixed"===Do(e).position)return null;if(t)return t(e);let o=e.offsetParent;return yo(e)===o&&(o=o.ownerDocument.body),o}function Jo(e,t){const o=vo(e);if(Po(e))return o;if(!xo(e)){let t=Oo(e);for(;t&&!Ro(t);){if(ko(t)&&!qo(t))return t;t=Oo(t)}return o}let r=Qo(e,t);for(;r&&Co(r)&&qo(r);)r=Qo(r,t);return r&&Ro(r)&&qo(r)&&!So(r)?o:r||function(e){let t=Oo(e);for(;xo(t)&&!Ro(t);){if(So(t))return t;if(Po(t))return null;t=Oo(t)}return null}(e)||o}const Yo={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:r,strategy:n}=e;const s="fixed"===n,a=yo(r),l=!!t&&Po(t.floating);if(r===a||l&&s)return o;let c={scrollLeft:0,scrollTop:0},h=Zi(1);const d=Zi(0),p=xo(r);if((p||!p&&!s)&&(("body"!==bo(r)||$o(a))&&(c=To(r)),xo(r))){const e=Uo(r);h=Mo(r),d.x=e.x+r.clientLeft,d.y=e.y+r.clientTop}const u=!a||p||s?Zi(0):Vo(a,c,!0);return{width:o.width*h.x,height:o.height*h.y,x:o.x*h.x-c.scrollLeft*h.x+d.x+u.x,y:o.y*h.y-c.scrollTop*h.y+d.y+u.y}},getDocumentElement:yo,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:r,strategy:n}=e;const s=[..."clippingAncestors"===o?Po(t)?[]:function(e,t){const o=t.get(e);if(o)return o;let r=Eo(e,[],!1).filter((e=>ko(e)&&"body"!==bo(e))),n=null;const s="fixed"===Do(e).position;let a=s?Oo(e):e;for(;ko(a)&&!Ro(a);){const t=Do(a),o=So(a);o||"fixed"!==t.position||(n=null),(s?!o&&!n:!o&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||$o(a)&&!o&&jo(e,a))?r=r.filter((e=>e!==a)):n=t,a=Oo(a)}return t.set(e,r),r}(t,this._c):[].concat(o),r],a=s[0],l=s.reduce(((e,o)=>{const r=No(t,o,n);return e.top=Ji(r.top,e.top),e.right=Qi(r.right,e.right),e.bottom=Qi(r.bottom,e.bottom),e.left=Ji(r.left,e.left),e}),No(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:Jo,getElementRects:async function(e){const t=this.getOffsetParent||Jo,o=this.getDimensions,r=await o(e.floating);return{reference:Go(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=Fo(e);return{width:t,height:o}},getScale:Mo,isElement:ko,isRTL:function(e){return"rtl"===Do(e).direction}};function Ko(e,t,o,r){void 0===r&&(r={});const{ancestorScroll:n=!0,ancestorResize:s=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=r,h=Io(e),d=n||s?[...h?Eo(h):[],...Eo(t)]:[];d.forEach((e=>{n&&e.addEventListener("scroll",o,{passive:!0}),s&&e.addEventListener("resize",o)}));const p=h&&l?function(e,t){let o,r=null;const n=yo(e);function s(){var e;clearTimeout(o),null==(e=r)||e.disconnect(),r=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),s();const{left:h,top:d,width:p,height:u}=e.getBoundingClientRect();if(l||t(),!p||!u)return;const g={rootMargin:-Ki(d)+"px "+-Ki(n.clientWidth-(h+p))+"px "+-Ki(n.clientHeight-(d+u))+"px "+-Ki(h)+"px",threshold:Ji(0,Qi(1,c))||1};let m=!0;function f(e){const t=e[0].intersectionRatio;if(t!==c){if(!m)return a();t?a(!1,t):o=setTimeout((()=>{a(!1,1e-7)}),1e3)}m=!1}try{r=new IntersectionObserver(f,{...g,root:n.ownerDocument})}catch(e){r=new IntersectionObserver(f,g)}r.observe(e)}(!0),s}(h,o):null;let u,g=-1,m=null;a&&(m=new ResizeObserver((e=>{let[r]=e;r&&r.target===h&&m&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=m)||e.observe(t)}))),o()})),h&&!c&&m.observe(h),m.observe(t));let f=c?Uo(e):null;return c&&function t(){const r=Uo(e);!f||r.x===f.x&&r.y===f.y&&r.width===f.width&&r.height===f.height||o();f=r,u=requestAnimationFrame(t)}(),o(),()=>{var e;d.forEach((e=>{n&&e.removeEventListener("scroll",o),s&&e.removeEventListener("resize",o)})),null==p||p(),null==(e=m)||e.disconnect(),m=null,c&&cancelAnimationFrame(u)}}const Zo=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,r;const{x:n,y:s,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:o,platform:r,elements:n}=e,s=await(null==r.isRTL?void 0:r.isRTL(n.floating)),a=oo(o),l=ro(o),c="y"===ao(o),h=["left","top"].includes(a)?-1:1,d=s&&c?-1:1,p=io(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:m}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&"number"==typeof m&&(g="end"===l?-1*m:m),c?{x:g*d,y:u*h}:{x:u*h,y:g*d}}(t,e);return a===(null==(o=l.offset)?void 0:o.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:n+c.x,y:s+c.y,data:{...c,placement:a}}}}},Xo=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:r,placement:n}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=io(e,t),h={x:o,y:r},d=await mo(t,c),p=ao(oo(n)),u=no(p);let g=h[u],m=h[p];if(s){const e="y"===u?"bottom":"right";g=to(g+d["y"===u?"top":"left"],g,g-d[e])}if(a){const e="y"===p?"bottom":"right";m=to(m+d["y"===p?"top":"left"],m,m-d[e])}const f=l.fn({...t,[u]:g,[p]:m});return{...f,data:{x:f.x-o,y:f.y-r,enabled:{[u]:s,[p]:a}}}}}},er=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,r;const{placement:n,middlewareData:s,rects:a,initialPlacement:l,platform:c,elements:h}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:f=!0,...v}=io(e,t);if(null!=(o=s.arrow)&&o.alignmentOffset)return{};const y=oo(n),w=ao(l),x=oo(l)===l,_=await(null==c.isRTL?void 0:c.isRTL(h.floating)),$=u||(x||!f?[ho(l)]:function(e){const t=ho(e);return[co(e),t,co(t)]}(l)),C="none"!==m;!u&&C&&$.push(...function(e,t,o,r){const n=ro(e);let s=function(e,t,o){const r=["left","right"],n=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?n:r:t?r:n;case"left":case"right":return t?s:a;default:return[]}}(oo(e),"start"===o,r);return n&&(s=s.map((e=>e+"-"+n)),t&&(s=s.concat(s.map(co)))),s}(l,f,m,_));const P=[l,...$],S=await mo(t,v),A=[];let D=(null==(r=s.flip)?void 0:r.overflows)||[];if(d&&A.push(S[y]),p){const e=function(e,t,o){void 0===o&&(o=!1);const r=ro(e),n=lo(e),s=so(n);let a="x"===n?r===(o?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=ho(a)),[a,ho(a)]}(n,a,_);A.push(S[e[0]],S[e[1]])}if(D=[...D,{placement:n,overflows:A}],!A.every((e=>e<=0))){var T,O;const e=((null==(T=s.flip)?void 0:T.index)||0)+1,t=P[e];if(t)return{data:{index:e,overflows:D},reset:{placement:t}};let o=null==(O=D.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:O.placement;if(!o)switch(g){case"bestFit":{var E;const e=null==(E=D.filter((e=>{if(C){const t=ao(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(o=e);break}case"initialPlacement":o=l}if(n!==o)return{reset:{placement:o}}}return{}}}},tr=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,r;const{placement:n,rects:s,platform:a,elements:l}=t,{apply:c=()=>{},...h}=io(e,t),d=await mo(t,h),p=oo(n),u=ro(n),g="y"===ao(n),{width:m,height:f}=s.floating;let v,y;"top"===p||"bottom"===p?(v=p,y=u===(await(null==a.isRTL?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(y=p,v="end"===u?"top":"bottom");const w=f-d.top-d.bottom,x=m-d.left-d.right,_=Qi(f-d[v],w),$=Qi(m-d[y],x),C=!t.middlewareData.shift;let P=_,S=$;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(S=x),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(P=w),C&&!u){const e=Ji(d.left,0),t=Ji(d.right,0),o=Ji(d.top,0),r=Ji(d.bottom,0);g?S=m-2*(0!==e||0!==t?e+t:Ji(d.left,d.right)):P=f-2*(0!==o||0!==r?o+r:Ji(d.top,d.bottom))}await c({...t,availableWidth:S,availableHeight:P});const A=await a.getDimensions(l.floating);return m!==A.width||f!==A.height?{reset:{rects:!0}}:{}}}},ir=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:r,placement:n,rects:s,platform:a,elements:l,middlewareData:c}=t,{element:h,padding:d=0}=io(e,t)||{};if(null==h)return{};const p=po(d),u={x:o,y:r},g=lo(n),m=so(g),f=await a.getDimensions(h),v="y"===g,y=v?"top":"left",w=v?"bottom":"right",x=v?"clientHeight":"clientWidth",_=s.reference[m]+s.reference[g]-u[g]-s.floating[m],$=u[g]-s.reference[g],C=await(null==a.getOffsetParent?void 0:a.getOffsetParent(h));let P=C?C[x]:0;P&&await(null==a.isElement?void 0:a.isElement(C))||(P=l.floating[x]||s.floating[m]);const S=_/2-$/2,A=P/2-f[m]/2-1,D=Qi(p[y],A),T=Qi(p[w],A),O=D,E=P-f[m]-T,B=P/2-f[m]/2+S,F=to(O,B,E),W=!c.arrow&&null!=ro(n)&&B!==F&&s.reference[m]/2-(B<O?D:T)-f[m]/2<0,U=W?B<O?B-O:B-E:0;return{[g]:u[g]+U,data:{[g]:F,centerOffset:B-F-U,...W&&{alignmentOffset:U}},reset:W}}}),or=(e,t,o)=>{const r=new Map,n={platform:Yo,...o},s={...n.platform,_c:r};return(async(e,t,o)=>{const{placement:r="bottom",strategy:n="absolute",middleware:s=[],platform:a}=o,l=s.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:d,y:p}=go(h,r,c),u=r,g={},m=0;for(let o=0;o<l.length;o++){const{name:s,fn:f}=l[o],{x:v,y,data:w,reset:x}=await f({x:d,y:p,initialPlacement:r,placement:u,strategy:n,middlewareData:g,rects:h,platform:a,elements:{reference:e,floating:t}});d=null!=v?v:d,p=null!=y?y:p,g={...g,[s]:{...g[s],...w}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(u=x.placement),x.rects&&(h=!0===x.rects?await a.getElementRects({reference:e,floating:t,strategy:n}):x.rects),({x:d,y:p}=go(h,u,c))),o=-1)}return{x:d,y:p,placement:u,strategy:n,middlewareData:g}})(e,t,{...n,platform:s})},rr=1;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const nr=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends directive_i{constructor(e){if(super(e),e.type!==rr||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return It}});function sr(e){return lr(e)}function ar(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function lr(e){for(let t=e;t;t=ar(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=ar(e);t;t=ar(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var cr=class extends qi{constructor(){super(...arguments),this.localize=new Ni(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let o=0,r=0,n=0,s=0,a=0,l=0,c=0,h=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(o=e.left,r=e.bottom,n=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):(o=t.left,r=t.bottom,n=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):e.left<t.left?(o=e.right,r=e.top,n=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom):(o=t.right,r=t.top,n=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=Ko(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[Zo({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(tr({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(er({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Xo({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(tr({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(ir({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>Yo.getOffsetParent(e,sr):Yo.getOffsetParent;or(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:_i(xi({},Yo),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:o,placement:r})=>{const n="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=o.arrow.x,t=o.arrow.y;let r="",a="",l="",c="";if("start"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=n?o:"",c=n?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=n?"":o,c=n?o:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",r="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",r="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:r,right:a,bottom:l,left:c,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return Ft`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${nr({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${nr({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Ft`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function hr(e,t){return new Promise((o=>{e.addEventListener(t,(function r(n){n.target===e&&(e.removeEventListener(t,r),o())}))}))}function dr(e,t,o){return new Promise((r=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,_i(xi({},o),{duration:ur()?0:o.duration}));n.addEventListener("cancel",r,{once:!0}),n.addEventListener("finish",r,{once:!0})}))}function pr(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function ur(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function gr(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}function mr(e,t){const o=xi({waitUntilFirstUpdate:!1},t);return(t,r)=>{const{update:n}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach((t=>{const n=t;if(e.has(n)){const t=e.get(n),s=this[n];t!==s&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[r](t,s))}})),n.call(this,e)}}}cr.styles=[Gi,Li],$i([Kt(".popup")],cr.prototype,"popup",2),$i([Kt(".popup__arrow")],cr.prototype,"arrowEl",2),$i([Jt()],cr.prototype,"anchor",2),$i([Jt({type:Boolean,reflect:!0})],cr.prototype,"active",2),$i([Jt({reflect:!0})],cr.prototype,"placement",2),$i([Jt({reflect:!0})],cr.prototype,"strategy",2),$i([Jt({type:Number})],cr.prototype,"distance",2),$i([Jt({type:Number})],cr.prototype,"skidding",2),$i([Jt({type:Boolean})],cr.prototype,"arrow",2),$i([Jt({attribute:"arrow-placement"})],cr.prototype,"arrowPlacement",2),$i([Jt({attribute:"arrow-padding",type:Number})],cr.prototype,"arrowPadding",2),$i([Jt({type:Boolean})],cr.prototype,"flip",2),$i([Jt({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],cr.prototype,"flipFallbackPlacements",2),$i([Jt({attribute:"flip-fallback-strategy"})],cr.prototype,"flipFallbackStrategy",2),$i([Jt({type:Object})],cr.prototype,"flipBoundary",2),$i([Jt({attribute:"flip-padding",type:Number})],cr.prototype,"flipPadding",2),$i([Jt({type:Boolean})],cr.prototype,"shift",2),$i([Jt({type:Object})],cr.prototype,"shiftBoundary",2),$i([Jt({attribute:"shift-padding",type:Number})],cr.prototype,"shiftPadding",2),$i([Jt({attribute:"auto-size"})],cr.prototype,"autoSize",2),$i([Jt()],cr.prototype,"sync",2),$i([Jt({type:Object})],cr.prototype,"autoSizeBoundary",2),$i([Jt({attribute:"auto-size-padding",type:Number})],cr.prototype,"autoSizePadding",2),$i([Jt({attribute:"hover-bridge",type:Boolean})],cr.prototype,"hoverBridge",2);var fr=class extends qi{constructor(){super(),this.localize=new Ni(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=pr(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=pr(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await gr(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:o}=Ti(this,"tooltip.show",{dir:this.localize.dir()});await dr(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await gr(this.body);const{keyframes:e,options:o}=Ti(this,"tooltip.hide",{dir:this.localize.dir()});await dr(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,hr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,hr(this,"sl-after-hide")}render(){return Ft`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${nr({tooltip:!0,"tooltip--open":this.open})}
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
    `}};fr.styles=[Gi,Oi],fr.dependencies={"sl-popup":cr},$i([Kt("slot:not([name])")],fr.prototype,"defaultSlot",2),$i([Kt(".tooltip__body")],fr.prototype,"body",2),$i([Kt("sl-popup")],fr.prototype,"popup",2),$i([Jt()],fr.prototype,"content",2),$i([Jt()],fr.prototype,"placement",2),$i([Jt({type:Boolean,reflect:!0})],fr.prototype,"disabled",2),$i([Jt({type:Number})],fr.prototype,"distance",2),$i([Jt({type:Boolean,reflect:!0})],fr.prototype,"open",2),$i([Jt({type:Number})],fr.prototype,"skidding",2),$i([Jt()],fr.prototype,"trigger",2),$i([Jt({type:Boolean})],fr.prototype,"hoist",2),$i([mr("open",{waitUntilFirstUpdate:!0})],fr.prototype,"handleOpenChange",1),$i([mr(["content","distance","hoist","placement","skidding"])],fr.prototype,"handleOptionsChange",1),$i([mr("disabled")],fr.prototype,"handleDisabledChange",1),Di("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),Di("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});fr.define("sl-tooltip");var br=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,yr=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?vr(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&br(t,o,s),s};Di("tooltip.show",null),Di("tooltip.hide",null);let wr=class extends lit_element_r{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return Ft`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??Mt}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};wr.styles=Xe`
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
	`,yr([Jt()],wr.prototype,"content",2),yr([Jt({reflect:!0})],wr.prototype,"placement",2),yr([Jt({type:Boolean})],wr.prototype,"disabled",2),yr([Jt({type:Number})],wr.prototype,"distance",2),yr([Jt({type:Boolean})],wr.prototype,"hoist",2),wr=yr([Gt("gl-tooltip")],wr);var kr=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,_r=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?xr(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&kr(t,o,s),s};let $r=class extends lit_element_r{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom"}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?Ft`<gl-tooltip .content=${this.tooltip} placement=${ci(this.tooltipPlacement)}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?Ft`<gl-tooltip placement=${ci(this.tooltipPlacement)}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?Ft`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:Ft`<button
			class="control"
			role=${ci(this.role)}
			aria-checked=${ci(this.ariaChecked)}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};$r.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},$r.styles=[pi,Xe`
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
				${di}
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
		`],_r([Kt(".control")],$r.prototype,"control",2),_r([Jt({reflect:!0})],$r.prototype,"appearance",2),_r([Jt({type:Boolean,reflect:!0})],$r.prototype,"disabled",2),_r([Jt({reflect:!0})],$r.prototype,"density",2),_r([Jt({type:Boolean,reflect:!0})],$r.prototype,"full",2),_r([Jt()],$r.prototype,"href",2),_r([Jt({reflect:!0})],$r.prototype,"role",1),_r([Jt()],$r.prototype,"tooltip",2),_r([Jt()],$r.prototype,"tooltipPlacement",2),$r=_r([Gt("gl-button")],$r);var Cr=(e=>(e.AddAuthors="gitlens.addAuthors",e.AssociateIssueWithBranch="gitlens.associateIssueWithBranch",e.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",e.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",e.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",e.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",e.ClearFileAnnotations="gitlens.clearFileAnnotations",e.CloseUnchangedFiles="gitlens.closeUnchangedFiles",e.CompareWith="gitlens.compareWith",e.CompareHeadWith="gitlens.compareHeadWith",e.CompareWorkingWith="gitlens.compareWorkingWith",e.ComputingFileAnnotations="gitlens.computingFileAnnotations",e.ConnectRemoteProvider="gitlens.connectRemoteProvider",e.CopyCurrentBranch="gitlens.copyCurrentBranch",e.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",e.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",e.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",e.CopyDeepLinkToFile="gitlens.copyDeepLinkToFile",e.CopyDeepLinkToFileAtRevision="gitlens.copyDeepLinkToFileAtRevision",e.CopyDeepLinkToLines="gitlens.copyDeepLinkToLines",e.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",e.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",e.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",e.CopyMessageToClipboard="gitlens.copyMessageToClipboard",e.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",e.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",e.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",e.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",e.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",e.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",e.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",e.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",e.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",e.CopyShaToClipboard="gitlens.copyShaToClipboard",e.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",e.ApplyPatchFromClipboard="gitlens.applyPatchFromClipboard",e.PastePatchFromClipboard="gitlens.pastePatchFromClipboard",e.CopyPatchToClipboard="gitlens.copyPatchToClipboard",e.CopyWorkingChangesToWorktree="gitlens.copyWorkingChangesToWorktree",e.CreatePatch="gitlens.createPatch",e.CreateCloudPatch="gitlens.createCloudPatch",e.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",e.DiffDirectory="gitlens.diffDirectory",e.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",e.DiffFolderWithRevision="gitlens.diffFolderWithRevision",e.DiffFolderWithRevisionFrom="gitlens.diffFolderWithRevisionFrom",e.DiffWith="gitlens.diffWith",e.DiffWithNext="gitlens.diffWithNext",e.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",e.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",e.DiffWithPrevious="gitlens.diffWithPrevious",e.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",e.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",e.DiffLineWithPrevious="gitlens.diffLineWithPrevious",e.DiffWithRevision="gitlens.diffWithRevision",e.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",e.DiffWithWorking="gitlens.diffWithWorking",e.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",e.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",e.DiffLineWithWorking="gitlens.diffLineWithWorking",e.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",e.DisableDebugLogging="gitlens.disableDebugLogging",e.EnableDebugLogging="gitlens.enableDebugLogging",e.DisableRebaseEditor="gitlens.disableRebaseEditor",e.EnableRebaseEditor="gitlens.enableRebaseEditor",e.ExternalDiff="gitlens.externalDiff",e.ExternalDiffAll="gitlens.externalDiffAll",e.FetchRepositories="gitlens.fetchRepositories",e.GenerateCommitMessage="gitlens.generateCommitMessage",e.GenerateCommitMessageScm="gitlens.scm.generateCommitMessage",e.GetStarted="gitlens.getStarted",e.GKSwitchOrganization="gitlens.gk.switchOrganization",e.InviteToLiveShare="gitlens.inviteToLiveShare",e.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",e.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",e.OpenBranchOnRemote="gitlens.openBranchOnRemote",e.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",e.OpenChangedFiles="gitlens.openChangedFiles",e.OpenCommitOnRemote="gitlens.openCommitOnRemote",e.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",e.OpenFileHistory="gitlens.openFileHistory",e.OpenFileFromRemote="gitlens.openFileFromRemote",e.OpenFileOnRemote="gitlens.openFileOnRemote",e.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",e.OpenFileAtRevision="gitlens.openFileRevision",e.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",e.OpenFolderHistory="gitlens.openFolderHistory",e.OpenOnRemote="gitlens.openOnRemote",e.OpenCloudPatch="gitlens.openCloudPatch",e.OpenPatch="gitlens.openPatch",e.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",e.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",e.OpenRepoOnRemote="gitlens.openRepoOnRemote",e.OpenRevisionFile="gitlens.openRevisionFile",e.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",e.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",e.OpenWalkthrough="gitlens.openWalkthrough",e.OpenWorkingFile="gitlens.openWorkingFile",e.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",e.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",e.PullRepositories="gitlens.pullRepositories",e.PushRepositories="gitlens.pushRepositories",e.GitCommands="gitlens.gitCommands",e.GitCommandsBranch="gitlens.gitCommands.branch",e.GitCommandsBranchCreate="gitlens.gitCommands.branch.create",e.GitCommandsBranchDelete="gitlens.gitCommands.branch.delete",e.GitCommandsBranchPrune="gitlens.gitCommands.branch.prune",e.GitCommandsBranchRename="gitlens.gitCommands.branch.rename",e.GitCommandsCheckout="gitlens.gitCommands.checkout",e.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",e.GitCommandsHistory="gitlens.gitCommands.history",e.GitCommandsMerge="gitlens.gitCommands.merge",e.GitCommandsRebase="gitlens.gitCommands.rebase",e.GitCommandsRemote="gitlens.gitCommands.remote",e.GitCommandsRemoteAdd="gitlens.gitCommands.remote.add",e.GitCommandsRemotePrune="gitlens.gitCommands.remote.prune",e.GitCommandsRemoteRemove="gitlens.gitCommands.remote.remove",e.GitCommandsReset="gitlens.gitCommands.reset",e.GitCommandsRevert="gitlens.gitCommands.revert",e.GitCommandsShow="gitlens.gitCommands.show",e.GitCommandsStash="gitlens.gitCommands.stash",e.GitCommandsStashDrop="gitlens.gitCommands.stash.drop",e.GitCommandsStashList="gitlens.gitCommands.stash.list",e.GitCommandsStashPop="gitlens.gitCommands.stash.pop",e.GitCommandsStashPush="gitlens.gitCommands.stash.push",e.GitCommandsStashRename="gitlens.gitCommands.stash.rename",e.GitCommandsStatus="gitlens.gitCommands.status",e.GitCommandsSwitch="gitlens.gitCommands.switch",e.GitCommandsTag="gitlens.gitCommands.tag",e.GitCommandsTagCreate="gitlens.gitCommands.tag.create",e.GitCommandsTagDelete="gitlens.gitCommands.tag.delete",e.GitCommandsWorktree="gitlens.gitCommands.worktree",e.GitCommandsWorktreeCreate="gitlens.gitCommands.worktree.create",e.GitCommandsWorktreeDelete="gitlens.gitCommands.worktree.delete",e.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",e.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",e.PlusConnectCloudIntegrations="gitlens.plus.cloudIntegrations.connect",e.PlusHide="gitlens.plus.hide",e.PlusLogin="gitlens.plus.login",e.PlusLogout="gitlens.plus.logout",e.PlusManage="gitlens.plus.manage",e.PlusManageCloudIntegrations="gitlens.plus.cloudIntegrations.manage",e.PlusReactivateProTrial="gitlens.plus.reactivateProTrial",e.PlusResendVerification="gitlens.plus.resendVerification",e.PlusRestore="gitlens.plus.restore",e.PlusShowPlans="gitlens.plus.showPlans",e.PlusSignUp="gitlens.plus.signUp",e.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",e.PlusContinueFeaturePreview="gitlens.plus.continueFeaturePreview",e.PlusUpgrade="gitlens.plus.upgrade",e.PlusValidate="gitlens.plus.validate",e.PlusSimulateSubscription="gitlens.plus.simulateSubscription",e.QuickOpenFileHistory="gitlens.quickOpenFileHistory",e.RefreshLaunchpad="gitlens.launchpad.refresh",e.RefreshGraph="gitlens.graph.refresh",e.RefreshHover="gitlens.refreshHover",e.Reset="gitlens.reset",e.ResetAIKey="gitlens.resetAIKey",e.ResetViewsLayout="gitlens.resetViewsLayout",e.RevealCommitInView="gitlens.revealCommitInView",e.ShareAsCloudPatch="gitlens.shareAsCloudPatch",e.SearchCommits="gitlens.showCommitSearch",e.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",e.ShowBranchesView="gitlens.showBranchesView",e.ShowCommitDetailsView="gitlens.showCommitDetailsView",e.ShowCommitInView="gitlens.showCommitInView",e.ShowCommitsInView="gitlens.showCommitsInView",e.ShowCommitsView="gitlens.showCommitsView",e.ShowContributorsView="gitlens.showContributorsView",e.ShowDraftsView="gitlens.showDraftsView",e.ShowFileHistoryView="gitlens.showFileHistoryView",e.ShowGraph="gitlens.showGraph",e.ShowGraphPage="gitlens.showGraphPage",e.ShowGraphView="gitlens.showGraphView",e.ShowHomeView="gitlens.showHomeView",e.ShowAccountView="gitlens.showAccountView",e.ShowInCommitGraph="gitlens.showInCommitGraph",e.ShowInCommitGraphView="gitlens.showInCommitGraphView",e.ShowInDetailsView="gitlens.showInDetailsView",e.ShowInTimeline="gitlens.showInTimeline",e.ShowLastQuickPick="gitlens.showLastQuickPick",e.ShowLaunchpad="gitlens.showLaunchpad",e.ShowLaunchpadView="gitlens.showLaunchpadView",e.ShowLineCommitInView="gitlens.showLineCommitInView",e.ShowLineHistoryView="gitlens.showLineHistoryView",e.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",e.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",e.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",e.ShowQuickCommit="gitlens.showQuickCommitDetails",e.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",e.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",e.ShowQuickFileHistory="gitlens.showQuickFileHistory",e.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",e.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",e.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",e.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",e.ShowQuickStashList="gitlens.showQuickStashList",e.ShowRemotesView="gitlens.showRemotesView",e.ShowRepositoriesView="gitlens.showRepositoriesView",e.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",e.ShowSettingsPage="gitlens.showSettingsPage",e.ShowSettingsPageAndJumpToFileAnnotations="gitlens.showSettingsPage!file-annotations",e.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",e.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",e.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",e.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",e.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",e.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",e.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",e.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",e.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",e.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",e.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",e.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",e.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",e.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",e.ShowStashesView="gitlens.showStashesView",e.ShowTagsView="gitlens.showTagsView",e.ShowTimelinePage="gitlens.showTimelinePage",e.ShowTimelineView="gitlens.showTimelineView",e.ShowWorktreesView="gitlens.showWorktreesView",e.ShowWorkspacesView="gitlens.showWorkspacesView",e.StartWork="gitlens.startWork",e.StashApply="gitlens.stashApply",e.StashSave="gitlens.stashSave",e.StashSaveFiles="gitlens.stashSaveFiles",e.SwitchAIModel="gitlens.switchAIModel",e.SwitchMode="gitlens.switchMode",e.ToggleCodeLens="gitlens.toggleCodeLens",e.ToggleFileBlame="gitlens.toggleFileBlame",e.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",e.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",e.ToggleFileChanges="gitlens.toggleFileChanges",e.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",e.ToggleFileHeatmap="gitlens.toggleFileHeatmap",e.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",e.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",e.ToggleLaunchpadIndicator="gitlens.launchpad.indicator.toggle",e.ToggleGraph="gitlens.toggleGraph",e.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",e.ToggleLineBlame="gitlens.toggleLineBlame",e.ToggleReviewMode="gitlens.toggleReviewMode",e.ToggleZenMode="gitlens.toggleZenMode",e.ViewsCopy="gitlens.views.copy",e.ViewsCopyAsMarkdown="gitlens.views.copyAsMarkdown",e.ViewsCopyUrl="gitlens.views.copyUrl",e.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",e.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",e.ViewsOpenUrl="gitlens.views.openUrl",e.WalkthroughConnectIntegrations="gitlens.walkthrough.connectIntegrations",e.WalkthroughGitLensInspect="gitlens.walkthrough.gitlensInspect",e.WalkthroughOpenAcceleratePrReviews="gitlens.walkthrough.openAcceleratePrReviews",e.WalkthroughOpenCommunityVsPro="gitlens.walkthrough.openCommunityVsPro",e.WalkthroughOpenHelpCenter="gitlens.walkthrough.openHelpCenter",e.WalkthroughOpenInteractiveCodeHistory="gitlens.walkthrough.openInteractiveCodeHistory",e.WalkthroughOpenStartIntegrations="gitlens.walkthrough.openStartIntegrations",e.WalkthroughOpenStreamlineCollaboration="gitlens.walkthrough.openStreamlineCollaboration",e.WalkthroughOpenWalkthrough="gitlens.walkthrough.openWalkthrough",e.WalkthroughPlusSignUp="gitlens.walkthrough.plus.signUp",e.WalkthroughPlusUpgrade="gitlens.walkthrough.plus.upgrade",e.WalkthroughPlusReactivate="gitlens.walkthrough.plus.reactivate",e.WalkthroughShowAutolinks="gitlens.walkthrough.showAutolinks",e.WalkthroughShowDraftsView="gitlens.walkthrough.showDraftsView",e.WalkthroughShowGraph="gitlens.walkthrough.showGraph",e.WalkthroughShowLaunchpad="gitlens.walkthrough.showLaunchpad",e.WalkthroughWorktreeCreate="gitlens.walkthrough.worktree.create",e.WalkthoughOpenDevExPlatform="gitlens.walkthrough.openDevExPlatform",e.Deprecated_DiffHeadWith="gitlens.diffHeadWith",e.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",e.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",e.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",e.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",e.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",e.Deprecated_OpenInRemote="gitlens.openInRemote",e.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",e.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",e))(Cr||{});const Pr=[{key:"gkholiday",code:"GKHOLIDAY",states:[c.Community,c.ProPreview,c.ProPreviewExpired,c.ProTrial,c.ProTrialExpired,c.ProTrialReactivationEligible],startsOn:new Date("2024-12-09T06:59:00.000Z").getTime(),expiresOn:new Date("2025-01-07T06:59:00.000Z").getTime(),command:{tooltip:"Get the gift of a better DevEx in 2025! Save up to 80% now"},quickpick:{detail:"$(star-full) Get the gift of a better DevEx in 2025! Save up to 80% now"}},{key:"pro50",states:[c.Community,c.ProPreview,c.ProPreviewExpired,c.ProTrial,c.ProTrialExpired,c.ProTrialReactivationEligible],command:{tooltip:"Save 33% or more on your 1st seat of Pro."},locations:["account","badge","gate"],quickpick:{detail:"$(star-full) Save 33% or more on your 1st seat of Pro"}}];function Sr(e,t,o){if(null!=e)for(const r of Pr)if((null==o||o===r.key)&&Ar(r,e)){if(null==t||null==r.locations||r.locations.includes(t))return r;break}}function Ar(e,t){const o=Date.now();return(null==e.states||e.states.includes(t))&&(null==e.expiresOn||e.expiresOn>o)&&(null==e.startsOn||e.startsOn<o)}const Rr=Xe`
	a {
		border: 0;
		color: var(--link-foreground);
		font-weight: 400;
		outline: none;
		text-decoration: var(--link-decoration-default, none);
	}
	a:focus,
	a:focus-visible {
		outline-color: var(--color-focus-border);
		outline-style: solid;
		outline-width: 1px;
		border-radius: 0.2rem;
	}
	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;var Dr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,Or=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?Tr(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Dr(t,o,s),s};let Lr=class extends lit_element_r{constructor(){super(...arguments),this.type="info"}get hasPromo(){return null!=this.promo}render(){if(!this.promo)return;const e=this.renderPromo(this.promo);return e?"link"===this.type?Ft`<a
				class="link"
				href="${this.promo.command?.command??"command:gitlens.plus.upgrade"}"
				title="${ci(this.promo.command?.tooltip)}"
				>${e}</a
			>`:Ft`<p class="promo">${e}</p>`:void 0}renderPromo(e){switch(e.key){case"gkholiday":return Ft`<span class="content${"link"===this.type?Mt:" muted"}"
					>Get the gift of a better DevEx in 2025! <b>Save up to 80% now</b></span
				>`;case"pro50":return Ft`<span class="content${"link"===this.type?Mt:" muted"}"
					><b>Save 33% or more</b> on your 1st seat of Pro</span
				>`;default:return e.key,Mt}}};Lr.styles=[Xe`
			:host {
				display: block;
			}

			.promo {
				margin: 0;
				margin-top: 0.8rem;
				text-align: center;
			}

			.header {
				margin-right: 0.4rem;
			}

			.content {
				font-size: smaller;
			}

			.muted {
				opacity: 0.7;
			}

			.link {
				display: block;
				color: inherit;
				max-width: 100%;
				text-align: center;
				text-decoration: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],Or([Jt({type:Object})],Lr.prototype,"promo",2),Or([Jt({reflect:!0,type:String})],Lr.prototype,"type",2),Or([Jt({reflect:!0,type:Boolean,attribute:"has-promo"})],Lr.prototype,"hasPromo",1),Lr=Or([Gt("gl-promo")],Lr);var Er=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,Fr=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?Br(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Er(t,o,s),s};let Ir=class extends lit_element_r{firstUpdated(){"alert"===this.appearance&&queueMicrotask((()=>this.button.focus()))}render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":Mt,t=this.state?Sr(this.state,"gate"):void 0;switch(this.state){case c.VerificationRequired:return Ft`
					<slot name="feature"></slot>
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Mr(Cr.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Mr(Cr.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case c.Community:case c.ProPreviewExpired:return this.featurePreview&&"expired"!==function(e){const t=e?.usages;if(!t?.length)return"eligible";const o=(new Date(t[t.length-1].expiresOn).getTime()-(new Date).getTime())/36e5;return t.length<=3&&o>0&&o<24?"active":"expired"}(this.featurePreview)?Ft`${this.renderFeaturePreview(this.featurePreview)}`:Ft`<slot name="feature"></slot>
					<p>
						Use on privately-hosted repos requires
						<a href="${re.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Mr(Cr.PlusSignUp,this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${Mr(Cr.PlusLogin,this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Get ${ae("day",a)} of
						<a href="${re.communityVsPro}">GitLens Pro</a> for free — no credit card required.
					</p>`;case c.ProTrialExpired:return Ft`<slot name="feature"></slot>
					<p>Use on privately-hosted repos requires <a href="${re.communityVsPro}">GitLens Pro</a>.</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Mr(Cr.PlusUpgrade,this.source)}"
							>Upgrade to Pro</gl-button
						><span
							>or
							<a href="${Mr(Cr.PlusLogin,this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>${this.renderPromo(t)}</p>`;case c.ProTrialReactivationEligible:return Ft`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Mr(Cr.PlusReactivateProTrial,this.source)}"
							>Continue</gl-button
						><span
							>or
							<a href="${Mr(Cr.PlusLogin,this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Reactivate your GitLens Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${ae("day",a)}!
					</p> `}}renderFeaturePreview(e){const t="alert"===(this.appearance??"alert")?"alert":Mt,o=e.usages.length;if(0===o)return Ft`<slot name="feature"></slot>
				<gl-button appearance="${t}" href="${this.featurePreviewCommandLink}">Continue</gl-button>
				<p>
					Continue to preview
					${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
					repos, or
					<a href="${Mr(Cr.PlusLogin,this.source)}" title="Sign In">sign in</a
					>.<br />
					${"alert"!==t?Ft`<br />`:""} For full access to all GitLens Pro features,
					<a href="${Mr(Cr.PlusSignUp,this.source)}"
						>start your free ${a}-day Pro trial</a
					>
					— no credit card required.
				</p> `;const r=3-o;return Ft`
			${this.renderFeaturePreviewStep(e,o)}
			<p class="actions-row">
				<gl-button class="inline" appearance="${t}" href="${this.featurePreviewCommandLink}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${Mr(Cr.PlusLogin,this.source)}" title="Sign In">sign in</a></span
				>
			</p>
			<p>
				After continuing, you will have ${ae("day",r,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
				repos.<br />
				${"alert"!==t?Ft`<br />`:""} For full access to all GitLens Pro features,
				<a href="${Mr(Cr.PlusSignUp,this.source)}"
					>start your free ${a}-day Pro trial</a
				>
				— no credit card required.
			</p>
		`}renderFeaturePreviewStep(e,t){if("graph"===e.feature)switch(t){case 1:return Ft`<p>Try Commit Search</p>
							<p>
								Search for commits in your repo by author, commit message, SHA, file, change, or type.
								Turn on the commit filter to show only commits that match your query.
							</p>
							<p>
								<img
									src="${this.webroot??""}/media/graph-commit-search.webp"
									style="width:100%"
									alt="Graph Commit Search"
								/>
							</p> `;case 2:return Ft`
							<p>Try the Graph Minimap</p>
							<p>
								Visualize the amount of changes to a repository over time, and inspect specific points
								in the history to locate branches, stashes, tags and pull requests.
							</p>
							<p>
								<img
									src="${this.webroot??""}/media/graph-minimap.webp"
									style="width:100%"
									alt="Graph Minimap"
								/>
							</p>
						`;default:return Ft`<slot name="feature"></slot>`}return Ft`<slot name="feature"></slot>`}renderPromo(e){return Ft`<gl-promo .promo=${e}></gl-promo>`}};function Mr(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}Ir.styles=[Rr,Xe`
			:host {
				--gk-action-radius: 0.3rem;
				container-type: inline-size;
			}

			:host([appearance='welcome']) gl-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button:not(.inline) {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button:not(.inline) {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}

			.actions {
				text-align: center;
			}

			.actions-row {
				display: flex;
				gap: 0.6em;
				align-items: baseline;
				justify-content: center;
				white-space: nowrap;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],Fr([Kt("gl-button")],Ir.prototype,"button",2),Fr([Jt({type:Object})],Ir.prototype,"featurePreview",2),Fr([Jt({type:String})],Ir.prototype,"featurePreviewCommandLink",2),Fr([Jt({type:String})],Ir.prototype,"appearance",2),Fr([Jt()],Ir.prototype,"featureWithArticleIfNeeded",2),Fr([Jt({type:Object})],Ir.prototype,"source",2),Fr([Jt({attribute:!1,type:Number})],Ir.prototype,"state",2),Fr([Jt({type:String})],Ir.prototype,"webroot",2),Ir=Fr([Gt("gl-feature-gate-plus-state")],Ir);var Wr=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,Ur=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?zr(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Wr(t,o,s),s};let Hr=class extends lit_element_r{render(){if(!this.visible||null!=this.state&&(null!=(e=this.state)&&(e===c.Paid||e===c.ProPreview||e===c.ProTrial)))return void(this.hidden=!0);var e;const t=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,Ft`
			<section>
				<slot></slot>
				<gl-feature-gate-plus-state
					appearance=${t}
					.featurePreview=${this.featurePreview}
					.featurePreviewCommandLink=${this.featurePreviewCommandLink}
					.featureWithArticleIfNeeded=${this.featureWithArticleIfNeeded}
					.source=${this.source}
					.state=${this.state}
					.webroot=${this.webroot}
				>
					<slot name="feature" slot="feature"></slot>
				</gl-feature-gate-plus-state>
			</section>
		`}};Hr.styles=[Rr,Xe`
			:host {
				--background: var(--vscode-sideBar-background);
				--foreground: var(--vscode-sideBar-foreground);

				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				overflow: auto;
				z-index: 100;

				box-sizing: border-box;
			}

			:host-context(body[data-placement='editor']),
			:host([appearance='alert']) {
				--background: transparent;
				--foreground: var(--vscode-editor-foreground);

				backdrop-filter: blur(3px) saturate(0.8);
				padding: 0 2rem;
			}

			::slotted(p) {
				margin: revert !important;
			}

			::slotted(p:first-child) {
				margin-top: 0 !important;
			}

			section {
				--section-foreground: var(--foreground);
				--section-background: var(--background);
				--section-border-color: transparent;

				display: flex;
				flex-direction: column;
				padding: 0 2rem 1.3rem 2rem;
				background: var(--section-background);
				color: var(--section-foreground);
				border: 1px solid var(--section-border-color);

				height: min-content;
			}

			:host-context(body[data-placement='editor']) section,
			:host([appearance='alert']) section {
				--section-foreground: var(--color-alert-foreground);
				--section-background: var(--color-alert-infoBackground);
				--section-border-color: var(--color-alert-infoBorder);

				--link-decoration-default: underline;
				--link-foreground: var(--vscode-foreground);
				/* --link-foreground-active: var(--vscode-foreground); */

				/* --link-foreground: var(--vscode-textLink-foreground); */
				--link-foreground-active: var(--vscode-textLink-activeForeground);

				border-radius: 0.3rem;
				max-width: 600px;
				max-height: min-content;
				margin: 0.2rem auto;
				padding: 1.3rem;
			}

			:host-context(body[data-placement='editor']) section ::slotted(gl-button),
			:host([appearance='alert']) section ::slotted(gl-button) {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}
		`],Ur([Jt({reflect:!0})],Hr.prototype,"appearance",2),Ur([Jt({type:Object})],Hr.prototype,"featurePreview",2),Ur([Jt({type:String})],Hr.prototype,"featurePreviewCommandLink",2),Ur([Jt()],Hr.prototype,"featureWithArticleIfNeeded",2),Ur([Jt({type:Object})],Hr.prototype,"source",2),Ur([Jt({attribute:!1,type:Number})],Hr.prototype,"state",2),Ur([Jt({type:Boolean})],Hr.prototype,"visible",2),Ur([Jt({type:String})],Hr.prototype,"webroot",2),Hr=Ur([Gt("gl-feature-gate")],Hr);const Vr=new WeakMap;function Nr(e,t){return function(o,r,n){let s=Vr.get(o.constructor);null==s&&Vr.set(o.constructor,s=[]),s.push({method:n.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_r{emit(e,t,o){const r=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(r),r}update(e){const t=Vr.get(this.constructor);if(null!=t)for(const{keys:o,method:r,afterFirstUpdate:n}of t){if(n&&!this.hasUpdated)continue;const t=o.filter((t=>e.has(t)));t.length&&r.call(this,t)}super.update(e)}}cr.define("sl-popup");var jr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,qr=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?Gr(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&jr(t,o,s),s};let Qr=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.relatedTarget&&this.contains(e.relatedTarget))return;this.hide()}},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick)return void(this._skipHideOnClick=!1);if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{const t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{const t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=fe(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show("hover")),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus()||"hover"!==this._triggeredBy)return;const o=fe(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),super.disconnectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return Ft`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			?arrow=${this.arrow}
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}async show(e){if(null!=this._triggeredBy&&"hover"===e||(this._triggeredBy=e),!this.open)return this.open=!0,be(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,be(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};Qr.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Qr.styles=Xe`
		:host {
			--hide-delay: 0ms;
			--show-delay: 500ms;

			display: contents;
		}

		.popover {
			--arrow-size: var(--sl-tooltip-arrow-size);
			--arrow-color: var(--sl-tooltip-background-color);
		}

		.popover::part(popup) {
			z-index: var(--sl-z-index-tooltip);
		}

		.popover::part(arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		.popover[placement^='top']::part(popup) {
			transform-origin: bottom;
		}

		.popover[placement^='bottom']::part(popup) {
			transform-origin: top;
		}

		.popover[placement^='left']::part(popup) {
			transform-origin: right;
		}

		.popover[placement^='right']::part(popup) {
			transform-origin: left;
		}

		.popover[data-current-placement^='top']::part(arrow) {
			border-top-width: 0;
			border-left-width: 0;
			clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
		}

		.popover[data-current-placement^='bottom']::part(arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
			clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
		}

		.popover[data-current-placement^='left']::part(arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
			clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 30%);
		}

		.popover[data-current-placement^='right']::part(arrow) {
			border-top-width: 0;
			border-right-width: 0;
			clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 70%, 30% 0);
		}

		.popover__body {
			display: block;
			width: fit-content;
			border: 1px solid var(--gl-tooltip-border-color);
			border-radius: var(--sl-tooltip-border-radius);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
			background-color: var(--sl-tooltip-background-color);
			font-family: var(--sl-tooltip-font-family);
			font-size: var(--sl-tooltip-font-size);
			font-weight: var(--sl-tooltip-font-weight);
			line-height: var(--sl-tooltip-line-height);
			text-align: start;
			white-space: normal;
			color: var(--sl-tooltip-color);
			padding: var(--sl-tooltip-padding);
			user-select: none;
			-webkit-user-select: none;
			max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
			/* max-height: var(--auto-size-available-height);
			overflow: auto; */
			pointer-events: all;
		}

		.popover[data-current-placement^='top'] .popover__body,
		.popover[data-current-placement^='bottom'] .popover__body {
			width: max-content;
		}

		/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
	`,qr([Kt("#popover")],Qr.prototype,"body",2),qr([Kt("sl-popup")],Qr.prototype,"popup",2),qr([Jt({reflect:!0})],Qr.prototype,"placement",2),qr([Jt({type:Object})],Qr.prototype,"anchor",2),qr([Jt({reflect:!0,type:Boolean})],Qr.prototype,"disabled",2),qr([Jt({type:Number})],Qr.prototype,"distance",2),qr([Jt({reflect:!0,type:Boolean})],Qr.prototype,"open",2),qr([Jt({reflect:!0,type:Boolean})],Qr.prototype,"arrow",2),qr([Jt({type:Number})],Qr.prototype,"skidding",2),qr([Jt()],Qr.prototype,"trigger",2),qr([Jt({type:Boolean})],Qr.prototype,"hoist",2),qr([Nr("open",{afterFirstUpdate:!0})],Qr.prototype,"handleOpenChange",1),qr([Nr(["distance","hoist","placement","skidding"])],Qr.prototype,"handleOptionsChange",1),qr([Nr("disabled")],Qr.prototype,"handleDisabledChange",1),Qr=qr([Gt("gl-popover")],Qr);var Jr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Kr=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?Yr(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Jr(t,o,s),s};let Zr=class extends lit_element_r{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:$(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return Ft`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){const e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===c.VerificationRequired)return Ft`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;if(P(this.subscription)||this.cloud&&null!=this.subscription.account)return Ft`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(t===c.ProPreview||t===c.ProTrial))return Ft`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}var t;return e}renderPopoverHeader(){const e=Ft`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===c.Paid?Ft`<div class="popup-header">${e}</div>`:this.cloud?this.preview?Ft`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:Ft`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?Ft`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:Ft`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){if(null==this.subscription)return Mt;let e;switch(this.state){case c.Paid:e=Ft`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${Xr(Cr.ShowAccountView,void 0)}"
							>${_(this.subscription?.plan.actual.id??l.Pro)}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case c.VerificationRequired:e=Ft`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Xr(Cr.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${Xr(Cr.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case c.ProTrial:{const t=this.daysRemaining;e=Ft`<p>
						You have
						<strong>${t<1?"<1 day":ae("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case c.ProTrialExpired:e=Ft`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(Ft`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case c.ProTrialReactivationEligible:e=Ft`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${ae("day",a)}!
					</p>
					<div class="actions center">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Xr(Cr.PlusReactivateProTrial,this.source)}"
							tooltip="Reactivate your Pro trial for another ${ae("day",a)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===c.ProPreview){const t=this.daysRemaining;e=Ft`<p>
							You have
							<strong>${t<1?"<1 day":ae("day",t,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}e=Ft`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return Ft`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return Ft`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button
				appearance="primary"
				density="tight"
				href="${Xr(Cr.PlusSignUp,this.source)}"
				>Start ${a}-day Pro Trial</gl-button
			>
			&nbsp;or <a href="${Xr(Cr.PlusLogin,this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){const t=Sr(this.state,"badge");return Ft`<div class="actions">
			${e??Mt}
			<gl-button
				appearance="primary"
				density="tight"
				href="${Xr(Cr.PlusUpgrade,this.source)}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo(t)}
		</div>`}renderPromo(e){return Ft`<gl-promo .promo=${e}></gl-promo>`}};function Xr(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}Zr.styles=[pi,ui,Xe`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
			}

			.badge:focus {
				${Ze(hi)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.8rem;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],Kr([Jt({type:Boolean})],Zr.prototype,"cloud",2),Kr([Jt({reflect:!0})],Zr.prototype,"placement",2),Kr([Jt({type:Boolean})],Zr.prototype,"preview",2),Kr([Jt({type:Object})],Zr.prototype,"source",2),Kr([Jt({attribute:!1})],Zr.prototype,"subscription",2),Zr=Kr([Gt("gl-feature-badge")],Zr);class TimelineApp extends App{constructor(){super("TimelineApp")}onInitialize(){this.updateState()}onBind(){const e=super.onBind?.()??[];return e.push(me.on(document,"keydown",(e=>this.onKeyDown(e))),me.on(document.getElementById("periods"),"change",((e,t)=>this.onPeriodChanged(e,t))),{dispose:()=>this._chart?.dispose()}),e}onMessageReceived(e){if(!0===U.is(e))this.state=e.params.state,this.setState(this.state),this.updateState();else super.onMessageReceived?.(e)}onChartDataPointClicked(e){this.sendCommand(F,e)}onKeyDown(e){"Escape"!==e.key&&"Esc"!==e.key||this._chart?.reset()}onPeriodChanged(e,t){const o=t.options[t.selectedIndex].value;!function(e){if("all"===e)return;const[t,o]=e.split("|");if(isNaN(Number(t))||"D"!==o&&"M"!==o&&"Y"!==o)throw new Error(`Invalid period: ${e}`)}(o),this.log(`onPeriodChanged(): name=${t.name}, value=${o}`),this.updateLoading(!0),this.sendCommand(W,{period:o})}updateState(){const e=document.getElementById("subscription-gate");null!=e&&(e.source={source:"timeline",detail:"gate"},e.state=this.state.access.subscription.current.state,e.visible=!0!==this.state.access.allowed);const t=null==this.state.access.subscription?.current||!P(this.state.access.subscription?.current),o=document.querySelectorAll("gl-feature-badge");for(const e of o)e.source={source:"timeline",detail:"badge"},e.subscription=this.state.access.subscription.current,e.hidden=!t;null==this._chart&&(this._chart=new TimelineChart("#chart",this.placement),this._chart.onDidClickDataPoint(this.onChartDataPointClicked,this));let{title:r,sha:n}=this.state,s="";if(null!=r){const e=r.lastIndexOf("/");if(e>=0){const t=r.substring(e+1);s=r.substring(0,e),r=t}}else"editor"!==this.placement||null!=this.state.dataset||this.state.access.allowed||(r="index.ts",s="src/app");function a(e,t,o){const r=document.querySelector(`[data-bind="${e}"]`);null!=r&&(o?.html?r.innerHTML=t??"":r.textContent=t??"")}a("title",r),a("description",s),a("sha",n?`<code-icon icon="git-commit" size="16"></code-icon><span class="sha">${n}</span>`:void 0,{html:!0});const l=document.getElementById("periods");if(null!=l){const e=this.state?.period,t=l.getElementsByTagName("option");for(const o of t)e===o.getAttribute("value")?o.setAttribute("selected",""):o.removeAttribute("selected")}this._chart.updateChart(this.state).finally((()=>this.updateLoading(!1)))}updateLoading(e){document.getElementById("spinner")?.setAttribute("active",e?"true":"false")}}new TimelineApp;var en=s.h;export{en as TimelineApp};