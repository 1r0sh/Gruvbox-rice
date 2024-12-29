exports.id=758,exports.ids=[758],exports.modules={1286:(e,t,r)=>{r.r(t),r.d(t,{AzureDevOpsAuthenticationProvider:()=>AzureDevOpsAuthenticationProvider});var i=r(1398),s=r(1646),n=r(7603),o=r(5630);let AzureDevOpsAuthenticationProvider=class AzureDevOpsAuthenticationProvider extends o.RH{get authProviderId(){return s.Q7.AzureDevOps}async createSession(e){let t,r=e?.organization;if(!r){let t=i.window.createInputBox();t.ignoreFocusOut=!0;let s=[];try{r=await new Promise(r=>{s.push(t.onDidHide(()=>r(void 0)),t.onDidChangeValue(()=>t.validationMessage=void 0),t.onDidAccept(()=>{let e=t.value.trim();if(!e){t.validationMessage="An organization is required";return}r(e)})),t.title=`Azure DevOps Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,t.placeholder="Organization",t.prompt="Enter your Azure DevOps organization",t.show()})}finally{t.dispose(),s.forEach(e=>void e.dispose())}}if(!r)return;let s=i.window.createInputBox();s.ignoreFocusOut=!0;let o=[];try{let n={iconPath:new i.ThemeIcon("link-external"),tooltip:"Open the Azure DevOps Access Tokens Page"};t=await new Promise(t=>{o.push(s.onDidHide(()=>t(void 0)),s.onDidChangeValue(()=>s.validationMessage=void 0),s.onDidAccept(()=>{let e=s.value.trim();if(!e){s.validationMessage="A personal access token is required";return}t(e)}),s.onDidTriggerButton(t=>{t===n&&i.env.openExternal(i.Uri.parse(`https://${e?.domain??"dev.azure.com"}/${r}/_usersSettings/tokens`))})),s.password=!0,s.title=`Azure DevOps Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,s.placeholder=`Requires ${e?.scopes.join(", ")??"all"} scopes`,s.prompt=`Paste your [Azure DevOps Personal Access Token](https://${e?.domain??"dev.azure.com"}/${r}/_usersSettings/tokens "Get your Azure DevOps Access Token")`,s.buttons=[n],s.show()})}finally{s.dispose(),o.forEach(e=>void e.dispose())}if(t)return{id:this.getSessionId(e),accessToken:(0,n.K3)(`:${t}`),scopes:e?.scopes??[],account:{id:"",label:""},cloud:!1}}}},4969:(e,t,r)=>{r.r(t),r.d(t,{BitbucketAuthenticationProvider:()=>BitbucketAuthenticationProvider});var i=r(1398),s=r(1646),n=r(7603),o=r(5630);let BitbucketAuthenticationProvider=class BitbucketAuthenticationProvider extends o.RH{get authProviderId(){return s.Q7.Bitbucket}async createSession(e){let t,r=e?.username;if(!r){let t={iconPath:new i.ThemeIcon("link-external"),tooltip:"Open the Bitbucket Settings Page"},s=i.window.createInputBox();s.ignoreFocusOut=!0;let n=[];try{r=await new Promise(r=>{n.push(s.onDidHide(()=>r(void 0)),s.onDidChangeValue(()=>s.validationMessage=void 0),s.onDidAccept(()=>{let e=s.value.trim();if(!e){s.validationMessage="A Bitbucket username is required";return}r(e)}),s.onDidTriggerButton(r=>{r===t&&i.env.openExternal(i.Uri.parse(`https://${e?.domain??"bitbucket.org"}/account/settings/`))})),s.title=`Bitbucket Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,s.placeholder="Username",s.prompt=`Enter your [Bitbucket Username](https://${e?.domain??"bitbucket.org"}/account/settings/ "Get your Bitbucket App Password")`,s.show()})}finally{s.dispose(),n.forEach(e=>void e.dispose())}}if(!r)return;let s=i.window.createInputBox();s.ignoreFocusOut=!0;let o=[];try{let r={iconPath:new i.ThemeIcon("link-external"),tooltip:"Open the Bitbucket App Passwords Page"};t=await new Promise(t=>{o.push(s.onDidHide(()=>t(void 0)),s.onDidChangeValue(()=>s.validationMessage=void 0),s.onDidAccept(()=>{let e=s.value.trim();if(!e){s.validationMessage="An app password is required";return}t(e)}),s.onDidTriggerButton(t=>{t===r&&i.env.openExternal(i.Uri.parse(`https://${e?.domain??"bitbucket.org"}/account/settings/app-passwords/`))})),s.password=!0,s.title=`Bitbucket Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,s.placeholder=`Requires ${e?.scopes.join(", ")??"all"} scopes`,s.prompt=`Paste your [Bitbucket App Password](https://${e?.domain??"bitbucket.org"}/account/settings/app-passwords/ "Get your Bitbucket App Password")`,s.buttons=[r],s.show()})}finally{s.dispose(),o.forEach(e=>void e.dispose())}if(t)return{id:this.getSessionId(e),accessToken:(0,n.K3)(`${r}:${t}`),scopes:e?.scopes??[],account:{id:"",label:""},cloud:!1}}}},7160:(e,t,r)=>{r.r(t),r.d(t,{CloudIntegrationService:()=>CloudIntegrationService});var i=r(4064),s=r(6450),n=r(3936);let CloudIntegrationService=class CloudIntegrationService{constructor(e,t){this.container=e,this.connection=t}async getConnections(){let e=(0,s.dQ)(),t=await this.connection.fetchGkDevApi("v1/provider-tokens",{method:"GET"},{organizationId:!1});if(!t.ok){let r=(await t.json())?.error,s="string"==typeof r?r:r?.message??t.statusText;null!=r&&i.Vy.error(void 0,e,`Failed to get connected providers from cloud: ${s}`),this.container.telemetry.enabled&&this.container.telemetry.sendEvent("cloudIntegrations/getConnections/failed",{code:t.status});return}return(await t.json())?.data}async getConnectionSession(e,t){let r=(0,s.dQ)(),o=!!t,a=n.xq[e];if(null==a){i.Vy.error(void 0,r,`Unsupported cloud integration type: ${e}`);return}let u=t?{method:"POST",body:JSON.stringify({access_token:t})}:{method:"GET"},l=await this.connection.fetchGkDevApi(`v1/provider-tokens/${a}${o?"/refresh":""}`,u,{organizationId:!1});if(!l.ok){let s=(await l.json())?.error,n="string"==typeof s?s:s?.message??l.statusText;null!=s&&i.Vy.error(void 0,r,`Failed to ${o?"refresh":"get"} ${e} token from cloud: ${n}`),this.container.telemetry.enabled&&this.container.telemetry.sendEvent(t?"cloudIntegrations/refreshConnection/failed":"cloudIntegrations/getConnection/failed",{code:l.status,"integration.id":e});return}return(await l.json())?.data}async disconnect(e){let t=(0,s.dQ)(),r=n.xq[e];if(null==r)return i.Vy.error(void 0,t,`Unsupported cloud integration type: ${e}`),!1;let o=await this.connection.fetchGkDevApi(`v1/provider-tokens/${r}`,{method:"DELETE"},{organizationId:!1});if(!o.ok){let r=(await o.json())?.error,s="string"==typeof r?r:r?.message??o.statusText;return null!=r&&i.Vy.error(void 0,t,`Failed to disconnect ${e} token from cloud: ${s}`),this.container.telemetry.enabled&&this.container.telemetry.sendEvent("cloudIntegrations/disconnect/failed",{code:o.status,"integration.id":e}),!1}return!0}}},1913:(e,t,r)=>{r.r(t),r.d(t,{GitHubAuthenticationProvider:()=>GitHubAuthenticationProvider,GitHubEnterpriseAuthenticationProvider:()=>GitHubEnterpriseAuthenticationProvider});var i=r(7223),s=r(1398),n=r(1646),o=r(5630);let GitHubAuthenticationProvider=class GitHubAuthenticationProvider extends o.DP{constructor(e){super(e),this.disposables.push(s.authentication.onDidChangeSessions(e=>{e.provider.id===this.authProviderId&&this.fireDidChange()}))}get authProviderId(){return n.Q7.GitHub}async getBuiltInExistingSession(e,t){if(null!=e)return(0,i.Ff)(this.container.integrations.ignoreSSLErrors({id:this.authProviderId,domain:e?.domain}),async()=>{let r=await s.authentication.getSession(this.authProviderId,e.scopes,{forceNewSession:!!t||void 0,silent:!t||void 0});if(null!=r)return{...r,cloud:!1}})}async getSession(e,t){let r=await this.getBuiltInExistingSession(e);return(null!=r&&t?.forceNewSession&&(r=await this.getBuiltInExistingSession(e,!0)),null!=r)?r:super.getSession(e,t)}getCompletionInputTitle(){return"Connect to GitHub"}};let GitHubEnterpriseAuthenticationProvider=class GitHubEnterpriseAuthenticationProvider extends o.RH{get authProviderId(){return n.PY.GitHubEnterprise}async createSession(e){let t;let r=s.window.createInputBox();r.ignoreFocusOut=!0;let i=[];try{let n={iconPath:new s.ThemeIcon("link-external"),tooltip:"Open the GitHub Access Tokens Page"};t=await new Promise(t=>{i.push(r.onDidHide(()=>t(void 0)),r.onDidChangeValue(()=>r.validationMessage=void 0),r.onDidAccept(()=>{let e=r.value.trim();if(!e){r.validationMessage="A personal access token is required";return}t(e)}),r.onDidTriggerButton(t=>{t===n&&s.env.openExternal(s.Uri.parse(`https://${e?.domain??"github.com"}/settings/tokens`))})),r.password=!0,r.title=`GitHub Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,r.placeholder=`Requires a classic token with ${e?.scopes.join(", ")??"all"} scopes`,r.prompt=`Paste your [GitHub Personal Access Token](https://${e?.domain??"github.com"}/settings/tokens "Get your GitHub Access Token")`,r.buttons=[n],r.show()})}finally{r.dispose(),i.forEach(e=>void e.dispose())}if(t)return{id:this.getSessionId(e),accessToken:t,scopes:e?.scopes??[],account:{id:"",label:""},cloud:!1}}}},1857:(e,t,r)=>{r.r(t),r.d(t,{GitLabCloudAuthenticationProvider:()=>GitLabCloudAuthenticationProvider,GitLabLocalAuthenticationProvider:()=>GitLabLocalAuthenticationProvider});var i=r(1398),s=r(1646),n=r(5630);let GitLabLocalAuthenticationProvider=class GitLabLocalAuthenticationProvider extends n.RH{constructor(e,t){super(e),this.authProviderId=t}async createSession(e){let t;let r=i.window.createInputBox();r.ignoreFocusOut=!0;let s=[];try{let n={iconPath:new i.ThemeIcon("link-external"),tooltip:"Open the GitLab Access Tokens Page"};t=await new Promise(t=>{s.push(r.onDidHide(()=>t(void 0)),r.onDidChangeValue(()=>r.validationMessage=void 0),r.onDidAccept(()=>{let e=r.value.trim();if(!e){r.validationMessage="A personal access token is required";return}t(e)}),r.onDidTriggerButton(t=>{t===n&&i.env.openExternal(i.Uri.parse(`https://${e?.domain??"gitlab.com"}/-/profile/personal_access_tokens`))})),r.password=!0,r.title=`GitLab Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,r.placeholder=`Requires ${e?.scopes.join(", ")??"all"} scopes`,r.prompt=`Paste your [GitLab Personal Access Token](https://${e?.domain??"gitlab.com"}/-/user_settings/personal_access_tokens?name=GitLens+Access+token&scopes=${e?.scopes.join(",")??"all"} "Get your GitLab Access Token")`,r.buttons=[n],r.show()})}finally{r.dispose(),s.forEach(e=>void e.dispose())}if(t)return{id:this.getSessionId(e),accessToken:t,scopes:e?.scopes??[],account:{id:"",label:""},cloud:!1}}};let GitLabCloudAuthenticationProvider=class GitLabCloudAuthenticationProvider extends n.DP{get authProviderId(){return s.Q7.GitLab}getCompletionInputTitle(){return"Connect to GitLab"}}},5198:(e,t,r)=>{r.r(t),r.d(t,{JiraAuthenticationProvider:()=>JiraAuthenticationProvider});var i=r(1646),s=r(5630);let JiraAuthenticationProvider=class JiraAuthenticationProvider extends s.DP{get authProviderId(){return i.tp.Jira}getCompletionInputTitle(){return"Connect to Jira"}}},2884:(e,t,r)=>{r.r(t),r.d(t,{AzureDevOpsIntegration:()=>AzureDevOpsIntegration});var i=r(1646),s=r(4064),n=r(9709);let o=r(3758).Mt[i.Q7.AzureDevOps],a=Object.freeze({id:o.id,scopes:o.scopes});let AzureDevOpsIntegration=class AzureDevOpsIntegration extends n.T5{authProvider=a;id=i.Q7.AzureDevOps;key=this.id;name="Azure DevOps";get domain(){return o.domain}get apiBaseUrl(){return"https://dev.azure.com"}async getReposForAzureProject(e,t,r){if(this.maybeConnected??await this.isConnected())try{return await (await this.getProvidersApi()).getReposForAzureProject(e,t,{cursor:r?.cursor})}catch(e){s.Vy.error(e,"getReposForAzureProject");return}}async mergeProviderPullRequest(e,t,r){return Promise.resolve(!1)}async getProviderAccountForCommit(e,t,r,i){return Promise.resolve(void 0)}async getProviderAccountForEmail(e,t,r,i){return Promise.resolve(void 0)}async getProviderDefaultBranch(e,t){return Promise.resolve(void 0)}async getProviderIssueOrPullRequest(e,t,r){return Promise.resolve(void 0)}async getProviderIssue(e,t,r){return Promise.resolve(void 0)}async getProviderPullRequestForBranch(e,t,r,i){return Promise.resolve(void 0)}async getProviderPullRequestForCommit(e,t,r){return Promise.resolve(void 0)}async getProviderRepositoryMetadata(e,t,r){return Promise.resolve(void 0)}async searchProviderMyPullRequests(e,t){return Promise.resolve(void 0)}async searchProviderMyIssues(e,t){return Promise.resolve(void 0)}}},1411:(e,t,r)=>{r.r(t),r.d(t,{BitbucketIntegration:()=>BitbucketIntegration});var i=r(1646),s=r(9709);let n=r(3758).Mt[i.Q7.Bitbucket],o=Object.freeze({id:n.id,scopes:n.scopes});let BitbucketIntegration=class BitbucketIntegration extends s.T5{authProvider=o;id=i.Q7.Bitbucket;key=this.id;name="Bitbucket";get domain(){return n.domain}get apiBaseUrl(){return"https://api.bitbucket.org/2.0"}async mergeProviderPullRequest(e,t,r){return Promise.resolve(!1)}async getProviderAccountForCommit(e,t,r,i){return Promise.resolve(void 0)}async getProviderAccountForEmail(e,t,r,i){return Promise.resolve(void 0)}async getProviderDefaultBranch(e,t){return Promise.resolve(void 0)}async getProviderIssueOrPullRequest(e,t,r){return Promise.resolve(void 0)}async getProviderIssue(e,t,r){return Promise.resolve(void 0)}async getProviderPullRequestForBranch(e,t,r,i){return Promise.resolve(void 0)}async getProviderPullRequestForCommit(e,t,r){return Promise.resolve(void 0)}async getProviderRepositoryMetadata(e,t,r){return Promise.resolve(void 0)}async searchProviderMyPullRequests(e,t){return Promise.resolve(void 0)}async searchProviderMyIssues(e,t){return Promise.resolve(void 0)}}},871:(e,t,r)=>{r.r(t),r.d(t,{GitHubEnterpriseIntegration:()=>GitHubEnterpriseIntegration,GitHubIntegration:()=>GitHubIntegration});var i=r(1646),s=r(4007),n=r(9258),o=r(9709),a=r(3758),u=Object.defineProperty,l=Object.getOwnPropertyDescriptor;let c=a.Mt[i.Q7.GitHub],d=Object.freeze({id:c.id,scopes:c.scopes}),h=a.Mt[i.PY.GitHubEnterprise],g=Object.freeze({id:h.id,scopes:h.scopes});let GitHubIntegrationBase=class GitHubIntegrationBase extends o.T5{async getProviderAccountForCommit({accessToken:e},t,r,i){return(await this.container.github)?.getAccountForCommit(this,e,t.owner,t.name,r,{...i,baseUrl:this.apiBaseUrl})}async getProviderAccountForEmail({accessToken:e},t,r,i){return(await this.container.github)?.getAccountForEmail(this,e,t.owner,t.name,r,{...i,baseUrl:this.apiBaseUrl})}async getProviderDefaultBranch({accessToken:e},t){return(await this.container.github)?.getDefaultBranch(this,e,t.owner,t.name,{baseUrl:this.apiBaseUrl})}async getProviderIssueOrPullRequest({accessToken:e},t,r){return(await this.container.github)?.getIssueOrPullRequest(this,e,t.owner,t.name,Number(r),{baseUrl:this.apiBaseUrl})}async getProviderIssue({accessToken:e},t,r){return(await this.container.github)?.getIssue(this,e,t.owner,t.name,Number(r),{baseUrl:this.apiBaseUrl,includeBody:!0})}async getProviderPullRequest({accessToken:e},t,r){return(await this.container.github)?.getPullRequest(this,e,t.owner,t.name,parseInt(r,10),{baseUrl:this.apiBaseUrl})}async getProviderPullRequestForBranch({accessToken:e},t,i,s){let{include:n,...o}=s??{},a=(await Promise.resolve().then(r.bind(r,3744))).toGitHubPullRequestState;return(await this.container.github)?.getPullRequestForBranch(this,e,t.owner,t.name,i,{...o,include:n?.map(e=>a(e)),baseUrl:this.apiBaseUrl})}async getProviderPullRequestForCommit({accessToken:e},t,r){return(await this.container.github)?.getPullRequestForCommit(this,e,t.owner,t.name,r,{baseUrl:this.apiBaseUrl})}async getProviderRepositoryMetadata({accessToken:e},t,r){return(await this.container.github)?.getRepositoryMetadata(this,e,t.owner,t.name,{baseUrl:this.apiBaseUrl},r)}async searchProviderMyPullRequests({accessToken:e},t,r,i){return(await this.container.github)?.searchMyPullRequests(this,e,{repos:t?.map(e=>`${e.owner}/${e.name}`),baseUrl:this.apiBaseUrl,silent:i},r)}async searchProviderMyIssues({accessToken:e},t,r){return(await this.container.github)?.searchMyIssues(this,e,{repos:t?.map(e=>`${e.owner}/${e.name}`),baseUrl:this.apiBaseUrl,includeBody:!0},r)}async searchProviderPullRequests({accessToken:e},t,r,i){return(await this.container.github)?.searchPullRequests(this,e,{search:t,repos:r?.map(e=>`${e.owner}/${e.name}`),baseUrl:this.apiBaseUrl},i)}async mergeProviderPullRequest({accessToken:e},t,r){let i=t.nodeId,s=t.refs?.head?.sha;return null!=i&&null!=s&&((await this.container.github)?.mergePullRequest(this,e,i,s,{mergeMethod:r?.mergeMethod})??!1)}async getProviderCurrentAccount({accessToken:e},t){return(await this.container.github)?.getCurrentAccount(this,e,{...t,baseUrl:this.apiBaseUrl})}};let GitHubIntegration=class GitHubIntegration extends GitHubIntegrationBase{authProvider=d;id=i.Q7.GitHub;key=this.id;name="GitHub";get domain(){return c.domain}get apiBaseUrl(){return"https://api.github.com"}access(){return Promise.resolve(!0)}async refresh(){let e=await this.authenticationService.get(this.authProvider.id),t=await e.getSession(this.authProviderDescriptor);null==t&&this.maybeConnected?this.disconnect():(t?.accessToken!==this._session?.accessToken&&(this._session=void 0),super.refresh())}};let GitHubEnterpriseIntegration=class GitHubEnterpriseIntegration extends GitHubIntegrationBase{constructor(e,t,r,i){super(e,t,r),this._domain=i}authProvider=g;id=i.PY.GitHubEnterprise;key=`${this.id}:${this.domain}`;name="GitHub Enterprise";get domain(){return this._domain}get apiBaseUrl(){return`https://${this._domain}/api/v3`}async connect(e){return!!await (0,n.KH)(this.container,`Rich integration with ${this.name} is a Pro feature.`,{source:"integrations",detail:{action:"connect",integration:this.id}})&&super.connect(e)}};((e,t,r,i)=>{for(var s,n=l(t,r),o=e.length-1;o>=0;o--)(s=e[o])&&(n=s(t,r,n)||n);return i&&n&&u(t,r,n)})([(0,s.Rm)()],GitHubEnterpriseIntegration.prototype,"connect",1)},765:(e,t,r)=>{r.r(t),r.d(t,{GitHubApi:()=>GitHubApi});var i=r(7223),s=r(2856);function n(){return"object"==typeof navigator&&"userAgent"in navigator?navigator.userAgent:"object"==typeof process&&void 0!==process.version?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}var o=`octokit-endpoint.js/0.0.0-development ${n()}`;function a(e){for(let t in e)void 0===e[t]&&delete e[t];return e}function u(e,t,r){var i;if("string"==typeof t){let[e,i]=t.split(" ");r=Object.assign(i?{method:e,url:i}:{url:e},r)}else r=Object.assign({},t);r.headers=(i=r.headers)?Object.keys(i).reduce((e,t)=>(e[t.toLowerCase()]=i[t],e),{}):{},a(r),a(r.headers);let s=function e(t,r){let i=Object.assign({},t);return Object.keys(r).forEach(s=>{(function(e){if("object"!=typeof e||null===e||"[object Object]"!==Object.prototype.toString.call(e))return!1;let t=Object.getPrototypeOf(e);if(null===t)return!0;let r=Object.prototype.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Function.prototype.call(r)===Function.prototype.call(e)})(r[s])&&s in t?i[s]=e(t[s],r[s]):Object.assign(i,{[s]:r[s]})}),i}(e||{},r);return"/graphql"===r.url&&(e&&e.mediaType.previews?.length&&(s.mediaType.previews=e.mediaType.previews.filter(e=>!s.mediaType.previews.includes(e)).concat(s.mediaType.previews)),s.mediaType.previews=(s.mediaType.previews||[]).map(e=>e.replace(/-preview/,""))),s}var l=/\{[^}]+\}/g;function c(e){return e.replace(/^\W+|\W+$/g,"").split(/,/)}function d(e,t){let r={__proto__:null};for(let i of Object.keys(e))-1===t.indexOf(i)&&(r[i]=e[i]);return r}function h(e){return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e}).join("")}function g(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function p(e,t,r){return(t="+"===e||"#"===e?h(t):g(t),r)?g(r)+"="+t:t}function m(e){return null!=e}function f(e){return";"===e||"&"===e||"?"===e}function v(e,t){var r=["+","#",".","/",";","?","&"];return"/"===(e=e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(e,i,s){if(!i)return h(s);{let e="",s=[];if(-1!==r.indexOf(i.charAt(0))&&(e=i.charAt(0),i=i.substr(1)),i.split(/,/g).forEach(function(r){var i=/([^:\*]*)(?::(\d+)|(\*))?/.exec(r);s.push(function(e,t,r,i){var s=e[r],n=[];if(m(s)&&""!==s){if("string"==typeof s||"number"==typeof s||"boolean"==typeof s)s=s.toString(),i&&"*"!==i&&(s=s.substring(0,parseInt(i,10))),n.push(p(t,s,f(t)?r:""));else if("*"===i)Array.isArray(s)?s.filter(m).forEach(function(e){n.push(p(t,e,f(t)?r:""))}):Object.keys(s).forEach(function(e){m(s[e])&&n.push(p(t,s[e],e))});else{let e=[];Array.isArray(s)?s.filter(m).forEach(function(r){e.push(p(t,r))}):Object.keys(s).forEach(function(r){m(s[r])&&(e.push(g(r)),e.push(p(t,s[r].toString())))}),f(t)?n.push(g(r)+"="+e.join(",")):0!==e.length&&n.push(e.join(","))}}else";"===t?m(s)&&n.push(g(r)):""===s&&("&"===t||"?"===t)?n.push(g(r)+"="):""===s&&n.push("");return n}(t,e,i[1],i[2]||i[3]))}),!e||"+"===e)return s.join(",");var n=",";return"?"===e?n="&":"#"!==e&&(n=e),(0!==s.length?e:"")+s.join(n)}}))?e:e.replace(/\/$/,"")}function y(e){let t,r=e.method.toUpperCase(),i=(e.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),s=Object.assign({},e.headers),n=d(e,["method","baseUrl","url","headers","request","mediaType"]),o=function(e){let t=e.match(l);return t?t.map(c).reduce((e,t)=>e.concat(t),[]):[]}(i);i=({expand:v.bind(null,i)}).expand(n),/^http/.test(i)||(i=e.baseUrl+i);let a=d(n,Object.keys(e).filter(e=>o.includes(e)).concat("baseUrl"));if(!/application\/octet-stream/i.test(s.accept)&&(e.mediaType.format&&(s.accept=s.accept.split(/,/).map(t=>t.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${e.mediaType.format}`)).join(",")),i.endsWith("/graphql")&&e.mediaType.previews?.length)){let t=s.accept.match(/[\w-]+(?=-preview)/g)||[];s.accept=t.concat(e.mediaType.previews).map(t=>{let r=e.mediaType.format?`.${e.mediaType.format}`:"+json";return`application/vnd.github.${t}-preview${r}`}).join(",")}return["GET","HEAD"].includes(r)?i=function(e,t){let r=/\?/.test(e)?"&":"?",i=Object.keys(t);return 0===i.length?e:e+r+i.map(e=>"q"===e?"q="+t.q.split("+").map(encodeURIComponent).join("+"):`${e}=${encodeURIComponent(t[e])}`).join("&")}(i,a):"data"in a?t=a.data:Object.keys(a).length&&(t=a),s["content-type"]||void 0===t||(s["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(r)&&void 0===t&&(t=""),Object.assign({method:r,url:i,headers:s},void 0!==t?{body:t}:null,e.request?{request:e.request}:null)}function w(e,t,r){return y(u(e,t,r))}var b=function e(t,r){let i=u(t,r);return Object.assign(w.bind(null,i),{DEFAULTS:i,defaults:e.bind(null,i),merge:u.bind(null,i),parse:y})}(null,{method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":o},mediaType:{format:""}});let RequestError=class RequestError extends Error{name;status;request;response;constructor(e,t,r){super(e),this.name="HttpError",this.status=Number.parseInt(t),Number.isNaN(this.status)&&(this.status=0),"response"in r&&(this.response=r.response);let i=Object.assign({},r.request);r.request.headers.authorization&&(i.headers=Object.assign({},r.request.headers,{authorization:r.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),i.url=i.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=i}};async function P(e){let t;let r=e.request?.fetch||globalThis.fetch;if(!r)throw Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");let i=e.request?.log||console,s=e.request?.parseSuccessResponseBody!==!1,n=function(e){if("object"!=typeof e||null===e||"[object Object]"!==Object.prototype.toString.call(e))return!1;let t=Object.getPrototypeOf(e);if(null===t)return!0;let r=Object.prototype.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Function.prototype.call(r)===Function.prototype.call(e)}(e.body)||Array.isArray(e.body)?JSON.stringify(e.body):e.body,o=Object.fromEntries(Object.entries(e.headers).map(([e,t])=>[e,String(t)]));try{t=await r(e.url,{method:e.method,body:n,redirect:e.request?.redirect,headers:o,signal:e.request?.signal,...e.body&&{duplex:"half"}})}catch(i){let t="Unknown Error";if(i instanceof Error){if("AbortError"===i.name)throw i.status=500,i;t=i.message,"TypeError"===i.name&&"cause"in i&&(i.cause instanceof Error?t=i.cause.message:"string"==typeof i.cause&&(t=i.cause))}let r=new RequestError(t,500,{request:e});throw r.cause=i,r}let a=t.status,u=t.url,l={};for(let[e,r]of t.headers)l[e]=r;let c={url:u,status:a,headers:l,data:""};if("deprecation"in l){let t=l.link&&l.link.match(/<([^>]+)>; rel="deprecation"/),r=t&&t.pop();i.warn(`[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${l.sunset}${r?`. See ${r}`:""}`)}if(204===a||205===a)return c;if("HEAD"===e.method){if(a<400)return c;throw new RequestError(t.statusText,a,{response:c,request:e})}if(304===a)throw c.data=await R(t),new RequestError("Not modified",a,{response:c,request:e});if(a>=400)throw c.data=await R(t),new RequestError(function(e){if("string"==typeof e)return e;if(e instanceof ArrayBuffer)return"Unknown error";if("message"in e){let t="documentation_url"in e?` - ${e.documentation_url}`:"";return Array.isArray(e.errors)?`${e.message}: ${e.errors.map(e=>JSON.stringify(e)).join(", ")}${t}`:`${e.message}${t}`}return`Unknown error: ${JSON.stringify(e)}`}(c.data),a,{response:c,request:e});return c.data=s?await R(t):t.body,c}async function R(e){let t=e.headers.get("content-type");return/application\/json/.test(t)?e.json().catch(()=>e.text()).catch(()=>""):!t||/^text\/|charset=utf-8$/.test(t)?e.text():e.arrayBuffer()}var $=function e(t,r){let i=t.defaults(r);return Object.assign(function(t,r){let s=i.merge(t,r);if(!s.request||!s.request.hook)return P(i.parse(s));let n=(e,t)=>P(i.parse(i.merge(e,t)));return Object.assign(n,{endpoint:i,defaults:e.bind(null,i)}),s.request.hook(n,s)},{endpoint:i,defaults:e.bind(null,i)})}(b,{headers:{"user-agent":`octokit-request.js/0.0.0-development ${n()}`}}),C=class extends Error{constructor(e,t,r){super(`Request failed due to following response errors:
`+r.errors.map(e=>` - ${e.message}`).join("\n")),this.request=e,this.headers=t,this.response=r,this.errors=r.errors,this.data=r.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}name="GraphqlResponseError";errors;data},F=["method","baseUrl","url","headers","request","query","mediaType"],A=["query","method","url"],q=/\/api\/v3\/?$/,G=function e(t,r){let i=t.defaults(r);return Object.assign((e,t)=>(function(e,t,r){if(r){if("string"==typeof t&&"query"in r)return Promise.reject(Error('[@octokit/graphql] "query" cannot be used as variable name'));for(let e in r)if(A.includes(e))return Promise.reject(Error(`[@octokit/graphql] "${e}" cannot be used as variable name`))}let i="string"==typeof t?Object.assign({query:t},r):t,s=Object.keys(i).reduce((e,t)=>(F.includes(t)?e[t]=i[t]:(e.variables||(e.variables={}),e.variables[t]=i[t]),e),{}),n=i.baseUrl||e.endpoint.DEFAULTS.baseUrl;return q.test(n)&&(s.url=n.replace(q,"/api/graphql")),e(s).then(e=>{if(e.data.errors){let t={};for(let r of Object.keys(e.headers))t[r]=e.headers[r];throw new C(s,t,e.data)}return e.data.data})})(i,e,t),{defaults:e.bind(null,i),endpoint:i.endpoint})}($,{headers:{"user-agent":`octokit-graphql.js/0.0.0-development ${n()}`},method:"POST",url:"/graphql"}),U=r(1398),k=r(4039),I=r(3444),S=r(5952),D=r(3234),E=r(6468),T=r(4007),H=r(5270),x=r(4064),j=r(6450),B=r(1165),_=r(7603),O=r(7074),M=r(1499),z=r(3744),L=Object.defineProperty,N=Object.getOwnPropertyDescriptor,Q=(e,t,r,i)=>{for(var s,n=i>1?void 0:i?N(t,r):t,o=e.length-1;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&L(t,r,n),n};let V=Object.freeze({values:[]}),Y=Object.freeze({ranges:[]}),J=`
closed
closedAt
createdAt
id
number
state
title
updatedAt
url
`,W=`
${J}
author {
	login
	avatarUrl(size: $avatarSize)
	url
}
baseRefName
baseRefOid
headRefName
headRefOid
headRepository {
	name
	owner {
		login
	}
	url
}
isCrossRepository
isDraft
mergedAt
permalink
repository {
	isFork
	name
	owner {
		login
	}
	url
	viewerPermission
}
`,K=`
${W}
additions
assignees(first: 10) {
	nodes {
		login
		avatarUrl(size: $avatarSize)
		url
	}
}
checksUrl
deletions
mergeable
mergedBy {
	login
}
reviewDecision
latestReviews(first: 10) {
	nodes {
		author {
			login
			avatarUrl(size: $avatarSize)
			url
		}
		state
	}
}
reviewRequests(first: 10) {
	nodes {
		asCodeOwner
		id
		requestedReviewer {
			... on User {
				login
				avatarUrl(size: $avatarSize)
				url
			}
		}
	}
}
statusCheckRollup {
	state
}
totalCommentsCount
viewerCanUpdate
`,Z=`
${J}
assignees(first: 100) {
	nodes {
		login
		url
		avatarUrl(size: $avatarSize)
	}
}
author {
	login
	avatarUrl
	url
}
comments {
	totalCount
}
labels(first: 20) {
	nodes {
		color
		name
	}
}
reactions(content: THUMBS_UP) {
	totalCount
}
repository {
	name
	owner {
		login
	}
	viewerPermission
	url
}
`;let GitHubApi=class GitHubApi{_onDidReauthenticate=new U.EventEmitter;get onDidReauthenticate(){return this._onDidReauthenticate.event}_disposable;constructor(e){this._disposable=M.H.onDidChangeAny(e=>{(M.H.changedCore(e,["http.proxy","http.proxyStrictSSL"])||M.H.changed(e,["outputLevel","proxy"]))&&this.resetCaches()})}dispose(){this._disposable.dispose()}resetCaches(){this._proxyAgent=null,this._defaults.clear(),this._enterpriseVersions.clear()}_proxyAgent=null;get proxyAgent(){if(!s.HZ)return null===this._proxyAgent&&(this._proxyAgent=(0,i.cQ)()),this._proxyAgent}async getCurrentAccount(e,t,r){let i=(0,j.dQ)();try{let s=`query getCurrentAccount($avatarSize: Int) {
	viewer {
		name
		email
		login
		avatarUrl(size: $avatarSize)
	}
}`,n=await this.graphql(e,t,s,{...r},i);if(n?.viewer?.login==null)return;return{provider:e,id:n.viewer.login,name:n.viewer.name??void 0,email:n.viewer.email??void 0,avatarUrl:!n.viewer.avatarUrl||X(r)?n.viewer.avatarUrl??void 0:n.viewer.email&&r?.baseUrl!=null?await this.createEnterpriseAvatarUrl(e,t,r.baseUrl,n.viewer.email,r.avatarSize):void 0,username:n.viewer.login??void 0}}catch(t){if(t instanceof k.LN)return;throw this.handleException(t,e,i)}}async getAccountForCommit(e,t,r,i,s,n){let o=(0,j.dQ)();try{let a=`query getAccountForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				author {
					name
					email
					avatarUrl(size: $avatarSize)
					user {
						login
					}
				}
			}
		}
	}
}`,u=await this.graphql(e,t,a,{...n,owner:r,repo:i,ref:s},o),l=u?.repository?.object?.author;if(null==l)return;return{provider:e,...l?.user?.login!=null?{id:l.user.login,username:l.user.login}:{id:void 0,username:void 0},name:l.name??void 0,email:l.email??void 0,avatarUrl:!l.avatarUrl||X(n)?l.avatarUrl??void 0:l.email&&n?.baseUrl!=null?await this.createEnterpriseAvatarUrl(e,t,n.baseUrl,l.email,n.avatarSize):void 0}}catch(t){if(t instanceof k.LN)return;throw this.handleException(t,e,o)}}async getAccountForEmail(e,t,r,i,s,n){let o=(0,j.dQ)();try{let a=`query getAccountForEmail(
	$emailQuery: String!
	$avatarSize: Int
) {
	search(type: USER, query: $emailQuery, first: 1) {
		nodes {
			... on User {
				name
				email
				avatarUrl(size: $avatarSize)
				login
			}
		}
	}
}`,u=await this.graphql(e,t,a,{...n,owner:r,repo:i,emailQuery:`in:email ${s}`},o),l=u?.search?.nodes?.[0];if(l?.login==null)return;return{provider:e,id:l.login,name:l.name??void 0,email:l.email??void 0,avatarUrl:!l.avatarUrl||X(n)?l.avatarUrl??void 0:l.email&&n?.baseUrl!=null?await this.createEnterpriseAvatarUrl(e,t,n.baseUrl,l.email,n.avatarSize):void 0,username:l.login??void 0}}catch(t){if(t instanceof k.LN)return;throw this.handleException(t,e,o)}}async getDefaultBranch(e,t,r,i,s){let n=(0,j.dQ)();try{let o=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		defaultBranchRef {
			name
		}
	}
}`,a=await this.graphql(e,t,o,{...s,owner:r,repo:i},n),u=a?.repository?.defaultBranchRef?.name??void 0;if(null==u)return;return{provider:e,name:u}}catch(t){if(t instanceof k.LN)return;throw this.handleException(t,e,n)}}async getIssueOrPullRequest(e,t,r,i,s,n){let o=(0,j.dQ)();try{let a=`query getIssueOrPullRequest(
	$owner: String!
	$repo: String!
	$number: Int!
) {
	repository(name: $repo, owner: $owner) {
		issueOrPullRequest(number: $number) {
			__typename
			... on Issue {
				${J}
			}
			... on PullRequest {
				${J}
			}
		}
	}
}`,u=await this.graphql(e,t,a,{...n,owner:r,repo:i,number:s},o),l=u?.repository?.issueOrPullRequest;if(null==l)return;return{provider:e,type:"PullRequest"===l.__typename?"pullrequest":"issue",id:String(l.number),nodeId:l.id,createdDate:new Date(l.createdAt),updatedDate:new Date(l.updatedAt),title:l.title,closed:l.closed,closedDate:null==l.closedAt?void 0:new Date(l.closedAt),url:l.url,state:(0,z.fromGitHubIssueOrPullRequestState)(l.state)}}catch(t){if(t instanceof k.LN)return;throw this.handleException(t,e,o)}}async getIssue(e,t,r,i,s,n){let o=(0,j.dQ)();try{let a=`query getIssue(
			$owner: String!
			$repo: String!
			$number: Int!
			$avatarSize: Int
		) {
			repository(name: $repo, owner: $owner) {
				issue(number: $number) {
					${Z}${n?.includeBody?`
						body
						`:""}
				}
			}
		}`,u=await this.graphql(e,t,a,{...n,owner:r,repo:i,number:s},o);if(u?.repository?.issue==null)return;return(0,z.fromGitHubIssue)(u.repository.issue,e)}catch(t){if(t instanceof k.LN)return;throw this.handleException(t,e,o)}}async getPullRequest(e,t,r,i,s,n){let o=(0,j.dQ)();try{let a=`query getPullRequest(
	$owner: String!
	$repo: String!
	$number: Int!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		pullRequest(number: $number) {
			${K}
		}
	}
}`,u=await this.graphql(e,t,a,{...n,owner:r,repo:i,number:s},o);if(u?.repository?.pullRequest==null)return;return(0,z.fromGitHubPullRequestLite)(u.repository.pullRequest,e)}catch(t){if(t instanceof k.LN)return;throw this.handleException(t,e,o)}}async getPullRequestForBranch(e,t,r,i,s,n){let o=(0,j.dQ)();try{let a=`query getPullRequestForBranch(
	$owner: String!
	$repo: String!
	$branch: String!
	$limit: Int!
	$include: [PullRequestState!]
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		ref(qualifiedName: $branch) {
			associatedPullRequests(first: $limit, orderBy: {field: UPDATED_AT, direction: DESC}, states: $include) {
				nodes {
					${W}
				}
			}
		}
	}
}`,u=await this.graphql(e,t,a,{...n,owner:r,repo:i,branch:`refs/heads/${s}`,limit:10},o),l=u?.repository?.ref?.associatedPullRequests?.nodes?.filter(e=>null!=e&&(!e.repository.isFork||e.repository.owner.login===r));if(null==l||0===l.length)return;return l.length>1&&l.sort((e,t)=>(e.repository.owner.login===r?-1:1)-(t.repository.owner.login===r?-1:1)||("OPEN"===e.state?-1:1)-("OPEN"===t.state?-1:1)||new Date(t.updatedAt).getTime()-new Date(e.updatedAt).getTime()),(0,z.fromGitHubPullRequestLite)(l[0],e)}catch(t){if(t instanceof k.LN)return;throw this.handleException(t,e,o)}}async getPullRequestForCommit(e,t,r,i,s,n,o){let a=(0,j.dQ)();try{let u=`query getPullRequestForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				associatedPullRequests(first: 2, orderBy: {field: UPDATED_AT, direction: DESC}) {
					nodes {
						${W}
					}
				}
			}
		}
	}
}`,l=await this.graphql(e,t,u,{...n,owner:r,repo:i,ref:s},a,o),c=l?.repository?.object?.associatedPullRequests?.nodes?.filter(e=>null!=e&&(!e.repository.isFork||e.repository.owner.login===r));if(null==c||0===c.length)return;return c.length>1&&c.sort((e,t)=>(e.repository.owner.login===r?-1:1)-(t.repository.owner.login===r?-1:1)||("MERGED"===e.state?-1:1)-("MERGED"===t.state?-1:1)||new Date(t.updatedAt).getTime()-new Date(e.updatedAt).getTime()),(0,z.fromGitHubPullRequestLite)(c[0],e)}catch(t){if(t instanceof k.LN)return;throw this.handleException(t,e,a)}}async getRepositoryMetadata(e,t,r,i,s,n){let o=(0,j.dQ)();try{let a=`query getRepositoryMetadata(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		owner {
			login
		}
		name
		parent {
			owner {
				login
			}
			name
		}
	}
}`,u=await this.graphql(e,t,a,{...s,owner:r,repo:i},o,n),l=u?.repository??void 0;if(null==l)return;return{provider:e,owner:l.owner.login,name:l.name,isFork:null!=l.parent,parent:null!=l.parent?{owner:l.parent.owner.login,name:l.parent.name}:void 0}}catch(t){if(t instanceof k.LN)return;throw this.handleException(t,e,o)}}async getBlame(e,t,r,i,s){let n=(0,j.dQ)();try{let o=`query getBlameRanges(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	viewer { name }
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			...on Commit {
				blame(path: $path) {
					ranges {
						startingLine
						endingLine
						commit {
							oid
							parents(first: 3) { nodes { oid } }
							message
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								date
								email
								name
							}
						}
					}
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,o,{owner:t,repo:r,ref:i,path:s},n);if(null==a)return Y;let u=a.repository?.object?.blame?.ranges;if(null==u||0===u.length)return{ranges:[],viewer:a.viewer?.name};return{ranges:u,viewer:a.viewer?.name}}catch(e){if(e instanceof k.LN)return Y;throw this.handleException(e,void 0,n)}}async getBranches(e,t,r,i){let s=(0,j.dQ)();try{let n=`query getBranches(
	$owner: String!
	$repo: String!
	$branchQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $branchQuery, refPrefix: "refs/heads/", first: $limit, after: $cursor) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					...on Commit {
						authoredDate
						committedDate
					}
				}
			}
		}
	}
}`,o=await this.graphql(void 0,e,n,{owner:t,repo:r,branchQuery:i?.query,cursor:i?.cursor,limit:Math.min(100,i?.limit??100)},s);if(null==o)return V;let a=o.repository?.refs;if(null==a)return V;return{paging:{cursor:a.pageInfo.endCursor,more:a.pageInfo.hasNextPage},values:a.nodes}}catch(e){if(e instanceof k.LN)return V;throw this.handleException(e,void 0,s)}}async getCommit(e,t,r,i){let s=(0,j.dQ)();try{let n=await this.request(void 0,e,"GET /repos/{owner}/{repo}/commits/{ref}",{owner:t,repo:r,ref:i},s),o=n?.data;if(null==o)return;let{commit:a}=o;return{oid:o.sha,parents:{nodes:o.parents.map(e=>({oid:e.sha}))},message:a.message,additions:o.stats?.additions,changedFiles:o.files?.length,deletions:o.stats?.deletions,author:{avatarUrl:o.author?.avatar_url??void 0,date:a.author?.date??new Date().toString(),email:a.author?.email??void 0,name:a.author?.name??""},committer:{date:a.committer?.date??new Date().toString(),email:a.committer?.email??void 0,name:a.committer?.name??""},files:o.files}}catch(e){if(e instanceof k.LN)return;throw this.handleException(e,void 0,s)}}async getCommitForFile(e,t,r,i,s){if((0,S.HH)(i))return this.getCommit(e,t,r,i);let n=await this.getCommits(e,t,r,i,{limit:1,path:s});if(0!==n.values.length)return{...await this.getCommit(e,t,r,n.values[0].oid)??n.values[0],viewer:n.viewer}}async getCommitBranches(e,t,r,i,s,n){let o=(0,j.dQ)();try{let a=`query getCommitBranches(
	$owner: String!
	$repo: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		refs(first: 20, refPrefix: "refs/heads/") {
			nodes {
				name
				target {
					... on Commit {
						history(first: ${"contains"===s?10:1}, since: $since until: $until) {
							nodes { oid }
						}
					}
				}
			}
		}
	}
}`,u=await this.graphql(void 0,e,a,{owner:t,repo:r,since:n?.toISOString(),until:n?.toISOString()},o),l=u?.repository?.refs?.nodes;if(null==l)return[];let c=[];for(let e of l)for(let t of e.target.history.nodes)if(i.includes(t.oid)){c.push(e.name);break}return c}catch(e){if(e instanceof k.LN)return[];throw this.handleException(e,void 0,o)}}async getCommitCount(e,t,r,i){let s=(0,j.dQ)();try{let n=`query getCommitCount(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: 1) {
						totalCount
					}
				}
			}
		}
	}
}`,o=await this.graphql(void 0,e,n,{owner:t,repo:r,ref:i},s);return o?.repository?.ref?.target.history.totalCount}catch(e){if(e instanceof k.LN)return;throw this.handleException(e,void 0,s)}}async getCommitOnBranch(e,t,r,i,s,n,o){let a=(0,j.dQ)();try{let u=`query getCommitOnBranch(
	$owner: String!
	$repo: String!
	$ref: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: ${"contains"===n?100:1}, since: $since until: $until) {
						nodes { oid }
					}
				}
			}
		}
	}
}`,l=await this.graphql(void 0,e,u,{owner:t,repo:r,ref:`refs/heads/${i}`,since:o?.toISOString(),until:o?.toISOString()},a),c=l?.repository?.ref.target.history.nodes;if(null==c)return[];let d=[];for(let e of c)if(s.includes(e.oid)){d.push(i);break}return d}catch(e){if(e instanceof k.LN)return[];throw this.handleException(e,void 0,a)}}async getCommits(e,t,r,i,s){let n=(0,j.dQ)();if(s?.limit===1&&s?.path==null)return this.getCommitsCoreSingle(e,t,r,i);if((0,S.p8)(i))return this.getCommitsCoreRange(e,t,r,i);try{let o;let a=`query getCommits(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String
	$author: CommitAuthor
	$after: String
	$before: String
	$limit: Int = 100
	$since: GitTimestamp
	$until: GitTimestamp
) {
	viewer { name }
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $limit, author: $author, path: $path, after: $after, before: $before, since: $since, until: $until) {
					pageInfo {
						startCursor
						endCursor
						hasNextPage
						hasPreviousPage
					}
					nodes {
						... on Commit {
							oid
							message
							parents(first: 3) { nodes { oid } }
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								 date
								 email
								 name
							 }
						}
					}
				}
			}
		}
	}
}`;if(s?.authors!=null){if(1===s.authors.length){let[e]=s.authors;o={id:e.id,emails:e.email?[e.email]:void 0}}else{let e=s.authors.filter(e=>e.email).map(e=>e.email);o=e.length?{emails:e}:void 0}}let u=await this.graphql(void 0,e,a,{owner:t,repo:r,ref:i,after:s?.after,before:s?.before,path:s?.path,author:o,limit:Math.min(100,s?.limit??100),since:"string"==typeof s?.since?s?.since:s?.since?.toISOString(),until:"string"==typeof s?.until?s?.until:s?.until?.toISOString()},n),l=u?.repository?.object?.history;if(null==l)return V;return{paging:null!=l.pageInfo.endCursor?{cursor:l.pageInfo.endCursor??void 0,more:l.pageInfo.hasNextPage}:void 0,values:l.nodes,viewer:u?.viewer.name}}catch(e){if(e instanceof k.LN)return V;throw this.handleException(e,void 0,n)}}async getCommitsCoreRange(e,t,r,i){let s=(0,j.dQ)();try{let s=await this.getComparison(e,t,r,i);if(null==s)return V;return{values:s.commits?.map(e=>({oid:e.sha,parents:{nodes:e.parents.map(e=>({oid:e.sha}))},message:e.commit.message,author:{avatarUrl:e.author?.avatar_url??void 0,date:e.commit.author?.date??e.commit.author?.date??new Date().toString(),email:e.author?.email??e.commit.author?.email??void 0,name:e.author?.name??e.commit.author?.name??""},committer:{date:e.commit.committer?.date??new Date().toString(),email:e.committer?.email??e.commit.committer?.email??void 0,name:e.committer?.name??e.commit.committer?.name??""}})).reverse()}}catch(e){if(e instanceof k.LN)return V;throw this.handleException(e,void 0,s)}}async getCommitsCoreSingle(e,t,r,i){let s=(0,j.dQ)();try{let n=`query getCommit(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	viewer { name }
	repository(name: $repo owner: $owner) {
		object(expression: $ref) {
			...on Commit {
				oid
				parents(first: 3) { nodes { oid } }
				message
				additions
				changedFiles
				deletions
				author {
					avatarUrl
					date
					email
					name
				}
				committer {
					date
					email
					name
				}
			}
		}
	}
}`,o=await this.graphql(void 0,e,n,{owner:t,repo:r,ref:i},s);if(null==o)return V;let a=o.repository?.object;return null!=a?{values:[a],viewer:o.viewer.name}:V}catch(e){if(e instanceof k.LN)return V;throw this.handleException(e,void 0,s)}}async getCommitRefs(e,t,r,i,s){let n=(0,j.dQ)();try{let o=`query getCommitRefs(
	$owner: String!
	$repo: String!
	$ref: String!
	$after: String
	$before: String
	$first: Int
	$last: Int
	$path: String
	$since: GitTimestamp
	$until: GitTimestamp
) {
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $first, last: $last, path: $path, since: $since, until: $until, after: $after, before: $before) {
					pageInfo { startCursor, endCursor, hasNextPage, hasPreviousPage }
					totalCount
					nodes { oid }
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,o,{owner:t,repo:r,ref:i,path:s?.path,first:s?.first,last:s?.last,after:s?.after,before:s?.before,since:s?.since,until:s?.until},n),u=a?.repository?.object?.history;if(null==u)return;return{pageInfo:u.pageInfo,totalCount:u.totalCount,values:u.nodes}}catch(e){if(e instanceof k.LN)return;throw this.handleException(e,void 0,n)}}async getCommitTags(e,t,r,i,s){let n=(0,j.dQ)();try{let o=`query getCommitTags(
	$owner: String!
	$repo: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		refs(first: 20, refPrefix: "refs/tags/") {
			nodes {
				name
				target {
					... on Commit {
						history(first: 3, since: $since until: $until) {
							nodes { oid }
						}
					}
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,o,{owner:t,repo:r,since:s.toISOString(),until:s.toISOString()},n),u=a?.repository?.refs?.nodes;if(null==u)return[];let l=[];for(let e of u)for(let t of e.target.history.nodes)if(t.oid===i){l.push(e.name);break}return l}catch(e){if(e instanceof k.LN)return[];throw this.handleException(e,void 0,n)}}async getNextCommitRefs(e,t,r,i,s,n){let o;let a=await this.getCommitDate(e,t,r,n);if(null==a)return[];let u=await this.getCommitRefs(e,t,r,i,{path:s,first:1,since:a});if(null==u)return[];let l=`${u.pageInfo.startCursor.split(" ",1)[0]} ${u.totalCount}`;if([,o]=l.split(" ",2),o=Math.min(parseInt(o,10),5),null==(u=await this.getCommitRefs(e,t,r,i,{path:s,last:o,before:l})))return[];let c=[];for(let{oid:e}of u.values){if(e===n)break;c.push(e)}return c.reverse()}async getCommitDate(e,t,r,i){let s=(0,j.dQ)();try{let n=`query getCommitDate(
	$owner: String!
	$repo: String!
	$sha: GitObjectID!
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $sha) {
			... on Commit { committer { date } }
		}
	}
}`,o=await this.graphql(void 0,e,n,{owner:t,repo:r,sha:i},s);return o?.repository?.object?.committer.date}catch(e){if(e instanceof k.LN)return;throw this.handleException(e,void 0,s)}}async getContributors(e,t,r){let i=(0,j.dQ)();try{let s=await this.request(void 0,e,"GET /repos/{owner}/{repo}/contributors",{owner:t,repo:r,per_page:100},i),n=s?.data;if(null==n)return[];return s.data}catch(e){if(e instanceof k.LN)return[];throw this.handleException(e,void 0,i)}}async getDefaultBranchName(e,t,r){let i=(0,j.dQ)();try{let s=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		defaultBranchRef {
			name
		}
	}
}`,n=await this.graphql(void 0,e,s,{owner:t,repo:r},i);if(null==n)return;return n.repository?.defaultBranchRef?.name??void 0}catch(e){if(e instanceof k.LN)return;throw this.handleException(e,void 0,i)}}async getCurrentUser(e,t,r){let i=(0,j.dQ)();try{let s=`query getCurrentUser(
	$owner: String!
	$repo: String!
) {
	viewer { name, email, login, id }
	repository(owner: $owner, name: $repo) { viewerPermission }
}`,n=await this.graphql(void 0,e,s,{owner:t,repo:r},i);if(null==n)return;return{name:n.viewer?.name,email:n.viewer?.email,username:n.viewer?.login,id:n.viewer?.id}}catch(e){if(e instanceof k.LN)return;throw this.handleException(e,void 0,i)}}async getComparison(e,t,r,i){let s=(0,j.dQ)();if(!(0,S.p8)(i,"qualified-triple-dot")){let e=(0,S.jY)(i);i=(0,S.Xn)(e?.left||"HEAD",e?.right||"HEAD","...")}try{let n=await this.request(void 0,e,"GET /repos/{owner}/{repo}/compare/{basehead}",{owner:t,repo:r,basehead:i},s),o=n?.data;if(null==o)return;return o}catch(e){if(e instanceof k.LN)return;throw this.handleException(e,void 0,s)}}async getRepositoryVisibility(e,t,r){let i=(0,j.dQ)();try{let s=`query getRepositoryVisibility(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		visibility
	}
}`,n=await this.graphql(void 0,e,s,{owner:t,repo:r},i);if(n?.repository?.visibility==null)return;return"PUBLIC"===n.repository.visibility?"public":"private"}catch(e){if(e instanceof k.LN)return;throw this.handleException(e,void 0,i)}}async getTags(e,t,r,i){let s=(0,j.dQ)();try{let n=`query getTags(
	$owner: String!
	$repo: String!
	$tagQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $tagQuery, refPrefix: "refs/tags/", first: $limit, after: $cursor, orderBy: { field: TAG_COMMIT_DATE, direction: DESC }) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					...on Tag {
						message
						tagger { date }
						target {
					...on Commit {
								oid
						authoredDate
						committedDate
						message
					}
						}
					}
				}
			}
		}
	}
}`,o=await this.graphql(void 0,e,n,{owner:t,repo:r,tagQuery:i?.query,cursor:i?.cursor,limit:Math.min(100,i?.limit??100)},s);if(null==o)return V;let a=o.repository?.refs;if(null==a)return V;return{paging:{cursor:a.pageInfo.endCursor,more:a.pageInfo.hasNextPage},values:a.nodes}}catch(e){if(e instanceof k.LN)return V;throw this.handleException(e,void 0,s)}}async resolveReference(e,t,r,i,s){let n=(0,j.dQ)();try{if(!s){let s=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			oid
		}
	}
}`,o=await this.graphql(void 0,e,s,{owner:t,repo:r,ref:i},n);return o?.repository?.object?.oid??void 0}let o=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			... on Commit {
				history(first: 1, path: $path) {
					nodes { oid }
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,o,{owner:t,repo:r,ref:i,path:s},n);return a?.repository?.object?.history.nodes?.[0]?.oid??void 0}catch(e){if(e instanceof k.LN)return;throw this.handleException(e,void 0,n)}}async searchCommits(e,t,r){let i,s,n;let o=(0,j.dQ)(),a=Math.min(100,r?.limit??100);r?.cursor!=null?([i,s,n]=r.cursor.split(" ",3),i=parseInt(i,10),s=parseInt(s,10),n=parseInt(n,10)):(i=1,s=a,n=0);try{let a=await this.request(void 0,e,"GET /search/commits",{q:t,sort:r?.sort,order:r?.order,per_page:s,page:i},o),u=a?.data;if(null==u||0===u.items.length)return;let l=u.items.map(e=>({oid:e.sha,parents:{nodes:e.parents.map(e=>({oid:e.sha}))},message:e.commit.message,author:{avatarUrl:e.author?.avatar_url??void 0,date:e.commit.author?.date??e.commit.author?.date??new Date().toString(),email:e.author?.email??e.commit.author?.email??void 0,name:e.author?.name??e.commit.author?.name??""},committer:{date:e.commit.committer?.date??e.committer?.date??new Date().toString(),email:e.committer?.email??e.commit.committer?.email??void 0,name:e.committer?.name??e.commit.committer?.name??""}})),c=n+u.items.length,d=u.incomplete_results||u.total_count>c;return{pageInfo:{startCursor:`${i} ${s} ${n}`,endCursor:d?`${i+1} ${s} ${c}`:void 0,hasPreviousPage:u.total_count>0&&i>1,hasNextPage:d},totalCount:u.total_count,values:l}}catch(e){if(e instanceof k.LN)return;throw this.handleException(e,void 0,o)}}async searchCommitShas(e,t,r){let i,s,n;let o=(0,j.dQ)(),a=Math.min(100,r?.limit??100);r?.cursor!=null?([i,s,n]=r.cursor.split(" ",3),i=parseInt(i,10),s=parseInt(s,10),n=parseInt(n,10)):(i=1,s=a,n=0);try{let a=await this.request(void 0,e,"GET /search/commits",{q:t,sort:r?.sort,order:r?.order,per_page:s,page:i},o),u=a?.data;if(null==u||0===u.items.length)return;let l=n+u.items.length,c=u.incomplete_results||u.total_count>l;return{pageInfo:{startCursor:`${i} ${s} ${n}`,endCursor:c?`${i+1} ${s} ${l}`:void 0,hasPreviousPage:u.total_count>0&&i>1,hasNextPage:c},totalCount:u.total_count,values:u.items.map(e=>({sha:e.sha,authorDate:new Date(e.commit.author.date).getTime(),committerDate:new Date(e.commit.committer?.date??e.commit.author.date).getTime()}))}}catch(e){if(e instanceof k.LN)return;throw this.handleException(e,void 0,o)}}_enterpriseVersions=new Map;async getEnterpriseVersion(e,t,r){let i=this._enterpriseVersions.get(t);if(null!=i)return i;if(null===i)return;let s=(0,j.dQ)();try{let n=await this.request(e,t,"GET /meta",r,s),o=n?.data?.installed_version;i=o?(0,O.sH)(o):null}catch{i=null}return this._enterpriseVersions.set(t,i),i??void 0}async graphql(e,t,r,s,n,o){try{let n;if(null!=o){if(o.isCancellationRequested)throw new k.AL;n=new AbortController,o.onCancellationRequested(()=>n.abort()),s={...s,request:{...s?.request,signal:n.signal}}}return await (0,i.Ff)(e?.getIgnoreSSLErrors()??!1,()=>this.getDefaults(t,G)(r,s))}catch(r){if(r instanceof C){switch(r.errors?.[0]?.type){case"NOT_FOUND":throw new k.LN(r);case"FORBIDDEN":throw new k.v3("github",k.R.Forbidden,r);case"RATE_LIMITED":{let e;let i=r.headers?.["x-ratelimit-reset"];throw null!=i&&Number.isNaN(e=parseInt(i,10))&&(e=void 0),new k.HG(r,t,e)}}x.Vy.isDebugging&&U.window.showErrorMessage(`GitHub request failed: ${r.errors?.[0]?.message??r.message}`)}else r instanceof RequestError||"AbortError"===r.name?this.handleRequestError(e,t,r,n):x.Vy.isDebugging&&U.window.showErrorMessage(`GitHub request failed: ${r.message}`);throw r}}async request(e,t,r,s,n,o){try{let n;if(null!=o){if(o.isCancellationRequested)throw new k.AL;n=new AbortController,o.onCancellationRequested(()=>n.abort()),s={...s,request:{...s?.request,signal:n.signal}}}return await (0,i.Ff)(e?.getIgnoreSSLErrors()??!1,()=>this.getDefaults(t,$)(r,s))}catch(r){throw r instanceof RequestError||"AbortError"===r.name?this.handleRequestError(e,t,r,n):x.Vy.isDebugging&&U.window.showErrorMessage(`GitHub request failed: ${r.message}`),r}}_defaults=new Map;getDefaults(e,t){let r=this._defaults.get(t);null==r&&(r=new Map,this._defaults.set(t,r));let n=r.get(e);return null==n&&(n=t.defaults({headers:{authorization:`token ${e}`},request:{agent:this.proxyAgent,fetch:s.HZ?(e,t)=>{if(null!=t.headers){let{"user-agent":e,...r}=t.headers;e&&(t.headers=r)}return(0,i.hd)(e,t)}:i.hd,hook:"debug"===x.Vy.logLevel||x.Vy.isDebugging?async(e,t)=>{let r=(0,B.u)(`[GITHUB] ${t.method} ${t.url}`,{log:!1});try{return await e(t)}finally{let e;try{if("string"==typeof t.query){let r=/(^[^({\n]+)/.exec(t.query);e=` ${r?.[1].trim()??t.query}`}}catch{}r?.stop({message:e})}}:void 0}}),r.set(e,n)),n}handleRequestError(e,t,r,i){if("AbortError"===r.name)throw new k.AL(r);switch(r.status){case 404:case 410:case 422:throw new k.LN(r);case 401:throw new k.v3("github",k.R.Unauthorized,r);case 403:if(r.message.includes("rate limit")){let e;let i=r.response?.headers?.["x-ratelimit-reset"];throw null!=i&&Number.isNaN(e=parseInt(i,10))&&(e=void 0),new k.HG(r,t,e)}throw new k.v3("github",k.R.Forbidden,r);case 500:x.Vy.error(r,i),null!=r.response&&(e?.trackRequestException(),(0,E.wW)(`${e?.name??"GitHub"} failed to respond and might be experiencing issues.${null==e||"github"===e.id?" Please visit the [GitHub status page](https://githubstatus.com) for more information.":""}`));return;case 502:if(x.Vy.error(r,i),r.message.includes("timeout")){e?.trackRequestException(),(0,E.lW)(e?.name??"GitHub");return}break;case 503:x.Vy.error(r,i),e?.trackRequestException(),(0,E.wW)(`${e?.name??"GitHub"} failed to respond and might be experiencing issues.${null==e||"github"===e.id?" Please visit the [GitHub status page](https://githubstatus.com) for more information.":""}`);return;default:if(r.status>=400&&r.status<500)throw new k.tk(r)}x.Vy.error(r,i),x.Vy.isDebugging&&U.window.showErrorMessage(`GitHub request failed: ${r.response?.errors?.[0]?.message??r.message}`)}handleException(e,t,r,i){return x.Vy.error(e,r),e instanceof k.v3&&!i&&this.showAuthenticationErrorMessage(e,t),e}async showAuthenticationErrorMessage(e,t){if(e.reason===k.R.Unauthorized||e.reason===k.R.Forbidden){let r="Reauthenticate";await U.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating${e.reason===k.R.Forbidden?" to provide additional access":""}?`,r)===r&&(await t?.reauthenticate(),this.resetCaches(),this._onDidReauthenticate.fire())}else U.window.showErrorMessage(e.message)}async createEnterpriseAvatarUrl(e,t,r,s,n){n=n??16;let o=await this.getEnterpriseVersion(e,t,{baseUrl:r});if((0,O.ib)(o,">= 3.0.0")){let o;let a=(0,D.P)(s);null!=a&&U.Uri.parse(r).authority===a.authority&&(null!=a.userId?o=`${r}/enterprise/avatars/u/${encodeURIComponent(a.userId)}?s=${n}`:null!=a.login&&(o=`${r}/enterprise/avatars/${encodeURIComponent(a.login)}?s=${n}`)),null==o&&(o=`${r}/enterprise/avatars/u/e?email=${encodeURIComponent(s)}&s=${n}`);let u=await (0,i.Ff)(e?.getIgnoreSSLErrors()??!1,()=>(0,i.hd)(o,{method:"GET",headers:{Authorization:`Bearer ${t}`}}));if(u.ok){let e=(0,_.K3)(new Uint8Array(await u.arrayBuffer())),t=u.headers.get("content-type");return`data:${t};base64,${e}`}}return`https://avatars.githubusercontent.com/u/e?email=${encodeURIComponent(s)}&s=${n}`}async searchMyPullRequests(e,t,r,i){let s=(0,j.dQ)(),n=Math.min(100,M.H.get("launchpad.experimental.queryLimit")??100);try{let o=function(t){let r=[];return t.author.login===h&&r.push("authored"),t.assignees.nodes.some(e=>e.login===h)&&r.push("assigned"),t.reviewRequests.nodes.some(e=>e.requestedReviewer?.login===h)&&r.push("review-requested"),0===r.length&&r.push("mentioned"),{pullRequest:(0,z.fromGitHubPullRequest)(t,e),reasons:r}},a=`query searchMyPullRequests(
	$search: String!
	$avatarSize: Int
) {
	search(first: ${n}, query: $search, type: ISSUE) {
		issueCount
		nodes {
			...on PullRequest {
				${K}
			}
		}
	}
	viewer {
		login
	}
}`,u=r?.search?.trim()??"";r?.user&&(u+=` user:${r.user}`),r?.repos?.length&&(u+=` repo:${r.repos.join(" repo:")}`);let l=M.H.get("launchpad.ignoredRepositories")??[];l.length&&(u+=` -repo:${l.join(" -repo:")}`);let c=M.H.get("launchpad.includedOrganizations")??[];if(c.length)u+=` org:${c.join(" org:")}`;else{let e=M.H.get("launchpad.ignoredOrganizations")??[];e.length&&(u+=` -org:${e.join(" -org:")}`)}let d=await this.graphql(e,t,a,{search:`is:open is:pr involves:@me archived:false ${u}`.trim(),baseUrl:r?.baseUrl,avatarSize:r?.avatarSize},s,i);if(null==d)return[];let h=d.viewer.login;return d.search.nodes.map(e=>o(e))}catch(t){throw this.handleException(t,e,s,r?.silent)}}async searchMyIssues(e,t,r,i){let s=(0,j.dQ)(),n=`${Z}${r?.includeBody?`
			body
			`:""}`,o=`query searchMyIssues(
				$authored: String!
				$assigned: String!
				$mentioned: String!
				$avatarSize: Int
			) {
				authored: search(first: 100, query: $authored, type: ISSUE) {
					nodes {
						... on Issue {
							${n}
						}
					}
				}
				assigned: search(first: 100, query: $assigned, type: ISSUE) {
					nodes {
						... on Issue {
							${n}
						}
					}
				}
				mentioned: search(first: 100, query: $mentioned, type: ISSUE) {
					nodes {
						... on Issue {
							${n}
						}
					}
				}
			}`,a=r?.search?.trim()??"";if(r?.user&&(a+=` user:${r.user}`),r?.repos!=null&&r.repos.length>0){let e="  repo:";a+=`${e}${r.repos.join(e)}`}let u="type:issue is:open archived:false";try{var l,c;let n=function(t,r){return{issue:(0,z.fromGitHubIssue)(t,e),reasons:r?[r]:[]}},d=await this.graphql(e,t,o,{authored:`${a} ${u} author:@me`.trim(),assigned:`${a} ${u} assignee:@me`.trim(),mentioned:`${a} ${u} mentions:@me`.trim(),baseUrl:r?.baseUrl,avatarSize:r?.avatarSize},s,i);if(null==d)return[];return l=[...d.assigned.nodes.map(e=>n(e,"assigned")),...d.mentioned.nodes.map(e=>n(e,"mentioned")),...d.authored.nodes.map(e=>n(e,"authored"))],c=e=>e.issue.url,[...(0,H.pD)(l,c,(e,t)=>(0!==t.reasons.length&&e.reasons.push(...t.reasons),e))]}catch(t){throw this.handleException(t,e,s)}}async searchPullRequests(e,t,r,i){let s=(0,j.dQ)();try{let n=`query searchPullRequests(
	$searchQuery: String!
	$avatarSize: Int
) {
	search(first: 10, query: $searchQuery, type: ISSUE) {
		nodes {
			...on PullRequest {
				${K}
			}
		}
	}
}`,o=r?.search?.trim()??"";if(r?.user&&(o+=` user:${r.user}`),r?.repos!=null&&r.repos.length>0){let e=" repo:";o+=`${e}${r.repos.join(e)}`}let a=await this.graphql(e,t,n,{searchQuery:`is:pr is:open archived:false ${o.trim()}`,baseUrl:r?.baseUrl,avatarSize:r?.avatarSize},s,i);if(null==a)return[];return a.search.nodes.map(t=>(0,z.fromGitHubPullRequest)(t,e))}catch(t){throw this.handleException(t,e,s)}}async mergePullRequest(e,t,r,i,s,n){let o;let a=(0,j.dQ)();switch(s?.mergeMethod){case I.e0.Merge:o="MERGE";break;case I.e0.Rebase:o="REBASE";break;case I.e0.Squash:o="SQUASH"}try{let u=`mutation mergePullRequest(
	$id: ID!
	$expectedSourceSha: GitObjectID!
	$mergeMethod: PullRequestMergeMethod
) {
	mergePullRequest(input: { pullRequestId: $id, expectedHeadOid: $expectedSourceSha, mergeMethod: $mergeMethod }) {
		pullRequest {
			id
		}
	}
}`,l=await this.graphql(e,t,u,{id:r,expectedSourceSha:i,mergeMethod:o,baseUrl:s?.baseUrl},a,n);return l?.pullRequest?.id===r}catch(t){throw this.handleException(t,e,a)}}};function X(e){return e?.baseUrl==null||"https://api.github.com"===e.baseUrl}Q([(0,T.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getAccountForCommit",1),Q([(0,T.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getAccountForEmail",1),Q([(0,T.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getDefaultBranch",1),Q([(0,T.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getIssueOrPullRequest",1),Q([(0,T.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getIssue",1),Q([(0,T.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getPullRequest",1),Q([(0,T.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getPullRequestForBranch",1),Q([(0,T.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getPullRequestForCommit",1),Q([(0,T.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getRepositoryMetadata",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getBlame",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getBranches",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommit",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitForFile",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitBranches",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitCount",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitOnBranch",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommits",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitRefs",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitTags",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getNextCommitRefs",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getContributors",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getDefaultBranchName",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCurrentUser",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getComparison",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getRepositoryVisibility",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getTags",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"resolveReference",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"searchCommits",1),Q([(0,T.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"searchCommitShas",1),Q([(0,T.Yz)({args:{0:e=>e?.name,1:"<token>"}})],GitHubApi.prototype,"getEnterpriseVersion",1),Q([(0,T.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"searchMyPullRequests",1),Q([(0,T.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"searchMyIssues",1),Q([(0,T.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"searchPullRequests",1),Q([(0,T.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"mergePullRequest",1)},8246:(e,t,r)=>{let i;r.r(t),r.d(t,{GitHubGitProvider:()=>GitHubGitProvider});var s,n,o=r(9018),a=r(2856),u=r(1398),l=r(5811),c=r(1646),d=r(1151),h=r(4039),g=r(6347),p=r(3386),m=r(5823),f=r(3492),v=r(1802),y=r(961),w=r(315),b=r(2696),P=r(9457),R=r(5612),$=r(1582),C=r(7672),F=r(5302),A=r(4931),q=r(5952),G=r(9988),U=r(8944),k=r(8457),I=r(6646),S=r(1977),D=r(1613),E=r(9919),T=r(1778),H=r(4007),x=r(5270),j=r(4064),B=r(6450),_=r(5891),O=r(471),M=r(1499),z=r(8538),L=r(2222),N=r(473),Q=r(6181);async function V(e){try{let e=u.extensions.getExtension("ms-vscode.remote-repositories")??u.extensions.getExtension("GitHub.remotehub");if(null==e)throw j.Vy.log("GitHub Repositories extension is not installed or enabled"),new h.dU("GitHub Repositories","GitHub.remotehub");return e.isActive?e.exports:await e.activate()}catch(t){if(j.Vy.error(t,"Unable to get required api from the GitHub Repositories extension"),h.dU,e)return;throw t}}var Y=((s=Y||{})[s.Branch=0]="Branch",s[s.RemoteBranch=1]="RemoteBranch",s[s.Tag=2]="Tag",s[s.Commit=3]="Commit",s),J=((n=J||{})[n.Branch=0]="Branch",n[n.Tag=1]="Tag",n[n.Commit=2]="Commit",n[n.PullRequest=3]="PullRequest",n[n.Tree=4]="Tree",n),W=r(3744),K=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,X=(e,t,r,i)=>{for(var s,n=i>1?void 0:i?Z(t,r):t,o=e.length-1;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&K(t,r,n),n};let ee=/"/g,et=Object.freeze([]),er=Object.freeze({values:[]}),ei=Promise.resolve(void 0),es=["repo","read:user","user:email"],en=/^[^/](?!.*\/\.)(?!.*\.\.)(?!.*\/\/)(?!.*@\{)[^\x00-\x1F\x7F ~^:?*[\\]+[^./]$/;let GitHubGitProvider=class GitHubGitProvider{constructor(e,t){this.container=e,this.authenticationService=t,this._disposables.push(this.container.events.on("git:cache:reset",e=>e.data.repoPath?this.resetCache(e.data.repoPath,...e.data.caches??et):this.resetCaches(...e.data.caches??et))),t.get(this.authenticationProviderId).then(e=>{this._disposables.push(e.onDidChange(this.onAuthenticationSessionsChanged,this))})}descriptor={id:"github",name:"GitHub",virtual:!0};authenticationDescriptor={domain:"github.com",scopes:es};authenticationProviderId=c.Q7.GitHub;supportedSchemes=new Set([l.xB.Virtual,l.xB.GitHub,l.xB.PRs]);_onDidChange=new u.EventEmitter;get onDidChange(){return this._onDidChange.event}_onDidChangeRepository=new u.EventEmitter;get onDidChangeRepository(){return this._onDidChangeRepository.event}_onDidCloseRepository=new u.EventEmitter;get onDidCloseRepository(){return this._onDidCloseRepository.event}_onDidOpenRepository=new u.EventEmitter;get onDidOpenRepository(){return this._onDidOpenRepository.event}_branchCache=new Map;_branchesCache=new Map;_repoInfoCache=new Map;_tagsCache=new Map;_disposables=[];dispose(){this._disposables.forEach(e=>void e.dispose())}onAuthenticationSessionsChanged(){this._sessionPromise=void 0,this.ensureSession(!1,!0)}onRepositoryChanged(e,t){this._branchCache.delete(e.path),this._branchesCache.delete(e.path),this._tagsCache.delete(e.path),this._repoInfoCache.delete(e.path),this._onDidChangeRepository.fire(t)}async discoverRepositories(e,t){if(!this.supportedSchemes.has(e.scheme))return[];try{let{remotehub:r}=await this.ensureRepositoryContext(e.toString(),!0),i=r.getVirtualWorkspaceUri(e);if(null==i)return[];return this.openRepository(void 0,i,!0,void 0,t?.silent)}catch(t){return t.message.startsWith("No provider registered with")&&(j.Vy.error(t,"No GitHub provider registered with Remote Repositories (yet); queuing pending discovery"),this._pendingDiscovery.add(e),this.ensurePendingRepositoryDiscovery()),[]}}_pendingDiscovery=new Set;_pendingTimer;ensurePendingRepositoryDiscovery(){null==this._pendingTimer&&0!==this._pendingDiscovery.size&&(this._pendingTimer=setTimeout(async()=>{try{let e=await V();for(let t of this._pendingDiscovery){if(null==e.getProvider(t)){this._pendingTimer=void 0,this.ensurePendingRepositoryDiscovery();return}this._pendingDiscovery.delete(t)}this._pendingTimer=void 0,setTimeout(()=>this._onDidChange.fire(),1),0!==this._pendingDiscovery.size&&this.ensurePendingRepositoryDiscovery()}catch{this._pendingTimer=void 0,this.ensurePendingRepositoryDiscovery()}},250))}updateContext(){(0,z.o)("gitlens:hasVirtualFolders",this.container.git.hasOpenRepositories(this.descriptor.id))}openRepository(e,t,r,i,s){return[new F.LN(this.container,this.onRepositoryChanged.bind(this),this.descriptor,e??u.workspace.getWorkspaceFolder(t),t,r,i??!u.window.state.focused,s)]}async supports(e){switch(e){case g.O5.Stashes:case g.O5.Worktrees:case g.O5.StashOnlyStaged:return!1;default:return!0}}async visibility(e){let t=await this.getRemotes(e,{sort:!0});if(0===t.length)return["local",void 0];for await(let e of(0,O.w)(t.map(e=>this.getRemoteVisibility(e))))if("fulfilled"===e.status&&"public"===e.value[0])return["public",(0,C.U6)(e.value[1])];return["private",(0,C.U6)(t)]}async getRemoteVisibility(e){if(e.provider?.id==="github"){let{github:t,metadata:r,session:i}=await this.ensureRepositoryContext(e.repoPath);return[await t.getRepositoryVisibility(i.accessToken,r.repo.owner,r.repo.name)??"private",e]}return["private",e]}async getOpenScmRepositories(){return[]}async getScmRepository(e){}async getOrOpenScmRepository(e){}canHandlePathOrUri(e,t){if(this.supportedSchemes.has(e))return"string"==typeof t?t:t.toString()}getAbsoluteUri(e,t){if("string"==typeof t){if((0,_.bm)(t))t=u.Uri.parse(t,!0);else throw u.window.showErrorMessage(`Unable to get absolute uri between ${"string"==typeof e?e:e.toString(!0)} and ${t}; Base path '${t}' must be a uri`),Error(`Base path '${t}' must be a uri`)}if("string"==typeof e&&!(0,_.bm)(e)){let r=(0,_.Fd)(e);if(!(0,_.oP)(r))return u.Uri.joinPath(t,r)}let r=this.getRelativePath(e,t);return u.Uri.joinPath(t,r)}async getBestRevisionUri(e,t,r){return r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t)}getRelativePath(e,t){let r;if("string"==typeof t){if((0,_.bm)(t))t=u.Uri.parse(t,!0);else throw u.window.showErrorMessage(`Unable to get relative path between ${"string"==typeof e?e:e.toString(!0)} and ${t}; Base path '${t}' must be a uri`),Error(`Base path '${t}' must be a uri`)}if("string"==typeof e){if(!(0,_.bm)(e))return e=(0,_.Fd)(e),(r=(0,_.oP)(e)&&e.startsWith(t.path)?e.slice(t.path.length):e).charCodeAt(0)===l.s7.Slash&&(r=r.slice(1)),r;e=u.Uri.parse(e,!0)}return(0,_.Fd)((0,L.V8)(t.path.slice(1),e.path.slice(1)))}getRevisionUri(e,t,r){let i=this.createProviderUri(e,r,t);return r===A.nB?i.with({query:"~"}):i}async getWorkingUri(e,t){return this.createVirtualUri(e,void 0,t.path)}async branchContainsCommit(e,t,r){return!1}resetCache(e,...t){(0===t.length||t.includes("branches"))&&(this._branchCache.delete(e),this._branchesCache.delete(e)),(0===t.length||t.includes("tags"))&&this._tagsCache.delete(e),0===t.length&&this._repoInfoCache.delete(e)}resetCaches(...e){(0===e.length||e.includes("branches"))&&(this._branchCache.clear(),this._branchesCache.clear()),(0===e.length||e.includes("tags"))&&this._tagsCache.clear(),0===e.length&&this._repoInfoCache.clear()}async excludeIgnoredUris(e,t){return t}async findRepositoryUri(e,t){let r=(0,B.dQ)();try{let t=await this.ensureRemoteHubApi();return await eo(e,t,e=>t.getProviderRootUri(e).with({scheme:l.xB.Virtual}))}catch(e){h.dU,j.Vy.error(e,r);return}}async getLeftRightCommitCount(e,t,r){if(null==e)return;let i=(0,B.dQ)(),{metadata:s,github:n,session:o}=await this.ensureRepositoryContext(e);try{let e=await n.getComparison(o.accessToken,s.repo.owner,s.repo.name,ea(t));if(null==e)return;return{left:e.behind_by,right:e.ahead_by}}catch(e){j.Vy.error(e,i);return}}async getBlame(e,t){let r=(0,B.dQ)();if(t?.isDirty)return;let i="blame";null!=e.sha&&(i+=`:${e.sha}`);let s=await this.container.documentTracker.getOrAdd(e);if(null!=s.state){let e=s.state.getBlame(i);if(null!=e)return j.Vy.debug(r,`Cache hit: '${i}'`),e.item}j.Vy.debug(r,`Cache miss: '${i}'`),null==s.state&&(s.state=new Q.VV);let n=this.getBlameCore(e,s,i,r);return null!=s.state&&(j.Vy.debug(r,`Cache add: '${i}'`),s.state.setBlame(i,{item:n})),n}async getBlameCore(e,t,r,i){try{let t=await this.ensureRepositoryContext(e.repoPath);if(null==t)return;let{metadata:r,github:i,remotehub:s,session:n}=t,o=s.getVirtualUri(s.getProviderRootUri(e)),a=this.getRelativePath(e,o);if(e.scheme===l.xB.Virtual){let[t,r]=await Promise.allSettled([u.workspace.fs.stat(e),u.workspace.fs.stat(e.with({scheme:l.xB.GitHub}))]);if("fulfilled"!==t.status||"fulfilled"!==r.status||t.value.mtime!==r.value.mtime)return}let c=e.sha&&"HEAD"!==e.sha?e.sha:(await r.getRevision()).revision,d=await i.getBlame(n.accessToken,r.repo.owner,r.repo.name,c,a),h=new Map,g=new Map,p=[];for(let t of d.ranges){let r=t.commit,{viewer:i=n.account.label}=d,s=null!=i&&r.author.name===i?"You":r.author.name,u=null!=i&&r.committer.name===i?"You":r.committer.name,l=h.get(s);null==l&&(l={name:s,lineCount:0},h.set(s,l)),l.lineCount+=t.endingLine-t.startingLine+1;let c=g.get(r.oid);null==c&&(c=new w.Yg(this.container,e.repoPath,r.oid,new w.M7(s,r.author.email,new Date(r.author.date),r.author.avatarUrl),new w.M7(u,r.committer.email,new Date(r.author.date)),r.message.split("\n",1)[0],r.parents.nodes[0]?.oid?[r.parents.nodes[0]?.oid]:[],r.message,new R.lY(o.toString(),a,R.NO.Modified),{changedFiles:r.changedFiles??0,additions:r.additions??0,deletions:r.deletions??0},[]),g.set(r.oid,c));for(let e=t.startingLine;e<=t.endingLine;e++){let t={sha:r.oid,originalLine:e,line:e};c.lines.push(t),p[e-1]=t}}let m=new Map([...h.entries()].sort((e,t)=>t[1].lineCount-e[1].lineCount));return{repoPath:e.repoPath,authors:m,commits:g,lines:p}}catch(e){if(null!=t.state&&!String(e).includes("No provider registered with")){let s=e?.toString()??"";return j.Vy.debug(i,`Cache replace (with empty promise): '${r}'`),t.state.setBlame(r,{item:ei,errorMessage:s}),t.setBlameFailure(e),ei}return}}async getBlameContents(e,t){}async getBlameForLine(e,t,r,i){let s=(0,B.dQ)();if(!r?.isDirty){if(!i?.forceSingleLine){let r=await this.getBlame(e);if(null==r)return;let i=r.lines[t];if(null==i){if(r.lines.length!==t)return;i=r.lines[t-1]}let s=r.commits.get(i.sha);if(null==s)return;return{author:{...r.authors.get(s.author.name),lineCount:s.lines.length},commit:s,line:i}}try{let r=await this.ensureRepositoryContext(e.repoPath);if(null==r)return;let{metadata:i,github:s,remotehub:n,session:o}=r,a=n.getVirtualUri(n.getProviderRootUri(e)),u=this.getRelativePath(e,a),l=e.sha&&"HEAD"!==e.sha?e.sha:(await i.getRevision()).revision,c=await s.getBlame(o.accessToken,i.repo.owner,i.repo.name,l,u),d=t+1,h=c.ranges.find(e=>e.startingLine===d);if(null==h)return;let g=h.commit,{viewer:p=o.account.label}=c,m=null!=p&&g.author.name===p?"You":g.author.name,f=null!=p&&g.committer.name===p?"You":g.committer.name,v=new w.Yg(this.container,e.repoPath,g.oid,new w.M7(m,g.author.email,new Date(g.author.date),g.author.avatarUrl),new w.M7(f,g.committer.email,new Date(g.author.date)),g.message.split("\n",1)[0],g.parents.nodes[0]?.oid?[g.parents.nodes[0]?.oid]:[],g.message,new R.lY(a.toString(),u,R.NO.Modified),{changedFiles:g.changedFiles??0,additions:g.additions??0,deletions:g.deletions??0},[]);for(let e=h.startingLine;e<=h.endingLine;e++){let t={sha:g.oid,originalLine:e,line:e};v.lines.push(t)}return{author:{name:m,lineCount:h.endingLine-h.startingLine+1},commit:v,line:{sha:g.oid,originalLine:h.startingLine,line:h.startingLine}}}catch(e){j.Vy.error(e,s);return}}}async getBlameForLineContents(e,t,r,i){}async getBlameForRange(e,t){let r=await this.getBlame(e);if(null!=r)return this.getBlameRange(r,e,t)}async getBlameForRangeContents(e,t,r){let i=await this.getBlameContents(e,r);if(null!=i)return this.getBlameRange(i,e,t)}getBlameRange(e,t,r){if(0===e.lines.length||0===r.start.line&&r.end.line===e.lines.length-1)return e;let i=e.lines.slice(r.start.line,r.end.line+1),s=new Set(i.map(e=>e.sha)),n=r.start.line+1,o=r.end.line+1,a=new Map,u=new Map;for(let t of e.commits.values()){if(!s.has(t.sha))continue;let e=t.with({lines:t.lines.filter(e=>e.line>=n&&e.line<=o)});u.set(t.sha,e);let r=a.get(e.author.name);null==r&&(r={name:e.author.name,lineCount:0},a.set(r.name,r)),r.lineCount+=e.lines.length}let l=new Map([...a.entries()].sort((e,t)=>t[1].lineCount-e[1].lineCount));return{repoPath:t.repoPath,authors:l,commits:u,lines:i}}async getBranch(e){let t=this._branchCache.get(e);return null==t&&(t=(async function(){let{values:[t]}=await this.getBranches(e,{filter:e=>e.current});if(null!=t)return t;try{let{metadata:t}=await this.ensureRepositoryContext(e),r=await t.getRevision();switch(r.type){case Y.Tag:case Y.Commit:return new v.Z(this.container,e,r.name,!1,!0,void 0,r.revision,void 0,void 0,void 0,!0)}return}catch(e){j.Vy.error(e,(0,B.dQ)());return}}).call(this),this._branchCache.set(e,t)),t}async getBranches(e,t){if(null==e)return er;let r=(0,B.dQ)(),i=t?.paging?.cursor?void 0:this._branchesCache.get(e);null==i&&(i=(async function(){try{let r;let{metadata:i,github:s,session:n}=await this.ensureRepositoryContext(e),o=[],a=await i.getRevision();switch(a.type){case Y.Branch:r=a.name;break;case Y.RemoteBranch:{let e=a.name.indexOf(":");r=-1===e?a.name:a.name.substring(e+1)}}let u=t?.paging?.cursor,l=null==u;for(;;){let t=await s.getBranches(n.accessToken,i.repo.owner,i.repo.name,{cursor:u});for(let i of t.values)!function(t,r,i){let s=new Date("author-date"===M.H.get("advanced.commitOrdering")?r.target.authoredDate:r.target.committedDate),n=r.target.oid;o.push(new v.Z(t,e,r.name,!1,i,s,n,{name:`origin/${r.name}`,missing:!1}),new v.Z(t,e,`origin/${r.name}`,!0,!1,s,n))}(this.container,i,i.name===r);if(!t.paging?.more||!l)return{...t,values:o};u=t.paging.cursor}}catch(t){return j.Vy.error(t,r),this._branchesCache.delete(e),er}}).call(this),t?.paging?.cursor==null&&this._branchesCache.set(e,i));let s=await i;return t?.filter!=null&&(s={...s,values:s.values.filter(t.filter)}),t?.sort!=null&&(0,E.Xn)(s.values,"boolean"==typeof t.sort?void 0:t.sort),s}async getChangedFilesCount(e,t){if(!t)return;let r=await this.getCommit(e,t);if(r?.stats==null)return;let{stats:i}=r,s=(0,b.Z)(i.changedFiles);return{additions:i.additions,deletions:i.deletions,changedFiles:s}}async getCommit(e,t){if(null==e)return;let r=(0,B.dQ)();try{let{metadata:r,github:i,session:s}=await this.ensureRepositoryContext(e),n=await i.getCommit(s.accessToken,r.repo.owner,r.repo.name,ea(t));if(null==n)return;let{viewer:o=s.account.label}=n,a=null!=o&&n.author.name===o?"You":n.author.name,u=null!=o&&n.committer.name===o?"You":n.committer.name;return new w.Yg(this.container,e,n.oid,new w.M7(a,n.author.email,new Date(n.author.date),n.author.avatarUrl),new w.M7(u,n.committer.email,new Date(n.committer.date)),n.message.split("\n",1)[0],n.parents.nodes.map(e=>e.oid),n.message,n.files?.map(t=>new R.lY(e,t.filename??"",W.fromCommitFileStatus(t.status)??R.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0}))??[],{changedFiles:n.changedFiles??0,additions:n.additions??0,deletions:n.deletions??0},[])}catch(e){j.Vy.error(e,r);return}}async getCommitBranches(e,t,r,i){if(null==e||i?.commitDate==null)return[];let s=(0,B.dQ)();try{let{metadata:s,github:n,session:o}=await this.ensureRepositoryContext(e);return r?await n.getCommitOnBranch(o.accessToken,s.repo.owner,s.repo.name,r,t.map(ea),i?.mode??"contains",i?.commitDate):await n.getCommitBranches(o.accessToken,s.repo.owner,s.repo.name,t.map(ea),i?.mode??"contains",i?.commitDate)}catch(e){return j.Vy.error(e,s),[]}}async getCommitCount(e,t){if(null==e)return;let r=(0,B.dQ)();try{let{metadata:r,github:i,session:s}=await this.ensureRepositoryContext(e);return await i.getCommitCount(s?.accessToken,r.repo.owner,r.repo.name,ea(t))}catch(e){j.Vy.error(e,r);return}}async getCommitForFile(e,t,r){if(null==e)return;let i=(0,B.dQ)();try{let{metadata:i,github:s,remotehub:n,session:o}=await this.ensureRepositoryContext(e),a=this.getRelativePath(t,n.getProviderRootUri(t)),u=r?.ref&&"HEAD"!==r.ref?r.ref:(await i.getRevision()).revision,l=await s.getCommitForFile(o.accessToken,i.repo.owner,i.repo.name,ea(u),a);if(null==l)return;let{viewer:c=o.account.label}=l,d=null!=c&&l.author.name===c?"You":l.author.name,h=null!=c&&l.committer.name===c?"You":l.committer.name,g=l.files?.map(t=>new R.lY(e,t.filename??"",W.fromCommitFileStatus(t.status)??R.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),p=g?.find(e=>e.path===a);return new w.Yg(this.container,e,l.oid,new w.M7(d,l.author.email,new Date(l.author.date),l.author.avatarUrl),new w.M7(h,l.committer.email,new Date(l.committer.date)),l.message.split("\n",1)[0],l.parents.nodes.map(e=>e.oid),l.message,{file:p,files:g},{changedFiles:l.changedFiles??0,additions:l.additions??0,deletions:l.deletions??0},[])}catch(e){j.Vy.error(e,i);return}}async getCommitsForGraph(e,t,r){let i=r?.limit??M.H.get("graph.defaultItemLimit")??5e3,s=M.H.get("graph.commitOrdering",void 0,"date"),n=M.H.get("graph.avatars",void 0,!0),[o,a,u,l,c,d]=await Promise.allSettled([this.getLog(e,{all:!0,ordering:s,limit:i}),this.getBranch(e),this.getBranches(e,{filter:e=>e.remote}),this.getRemotes(e),this.getTags(e),this.getCurrentUser(e)]),h=new Map,g=(0,O.Ro)(a),p=new Map,m=new Map;null!=g&&(p.set(g.name,g),null!=g.sha&&m.set(g.sha,[g.name]));let f=O.Ro(u)?.values;if(null!=f)for(let e of f){if(p.set(e.name,e),null==e.sha)continue;let t=m.get(e.sha);null==t?m.set(e.sha,[e.name]):t.push(e.name)}let v=new Set,y=(0,O.Ro)(l)[0],w=null!=y?new Map([[y.name,y]]):new Map,b=new Map,P=new Map,R=O.Ro(c)?.values;if(null!=R)for(let e of R){if(null==e.sha)continue;let t=P.get(e.sha);null==t?P.set(e.sha,[e.name]):t.push(e.name)}return this.getCommitsForGraphCore(e,t,(0,O.Ro)(o),g,p,m,y,w,b,P,(0,O.Ro)(d),h,v,void 0,void 0,void 0,{...r,useAvatars:n})}async getCommitsForGraphCore(e,t,r,i,s,n,o,a,u,l,c,h,g,p,m,f,v){let w,P,R,C,F,A,q,G,k;let I={...v?.include,stats:!0},S=new Map;if(null==r)return{repoPath:e,avatars:h,ids:g,includes:I,branches:s,remotes:a,downstreams:S,stashes:p,worktrees:m,worktreesByBranch:f,rows:[]};let E=(r.pagedCommits?.()??r.commits)?.values();if(null==E)return{repoPath:e,avatars:h,ids:g,includes:I,branches:s,remotes:a,downstreams:S,stashes:p,worktrees:m,worktreesByBranch:f,rows:[]};let T=[],H=!1,j=!1,B=i.upstream?.name;for(let r of E){if(g.add(r.sha),H=r.sha===i.sha){if(R={webviewItem:`gitlens:branch${H?"+current":""}${i?.upstream!=null?"+tracking":""}`,webviewItemValue:{type:"branch",ref:(0,$.kA)(i.name,e,{id:i.id,refType:"branch",name:i.name,remote:!1,upstream:i.upstream})}},F=[{id:i.id,name:i.name,isCurrentHead:!0,context:(0,N.C9)(R),upstream:null!=i.upstream?{name:i.upstream.name,id:(0,y.Yk)(e,!0,i.upstream.name)}:void 0}],null!=i.upstream){if(G=(0,y.Yk)(e,!0,i.name),w=((v?.useAvatars?o.provider?.avatarUri:void 0)??D.Wf(this.container,o,t))?.toString(!0),R={webviewItem:"gitlens:branch+remote",webviewItemValue:{type:"branch",ref:(0,$.kA)(i.name,e,{id:G,refType:"branch",name:i.name,remote:!0,upstream:{name:o.name,missing:!1}})}},A=[{id:G,name:i.name,owner:o.name,url:o.url,avatarUrl:w,context:(0,N.C9)(R),current:!0,hostingServiceType:o.provider?.gkProviderId}],null!=B){let e=S.get(B);null==e&&(e=[],S.set(B,e)),e.push(i.name)}}else A=[]}else{F=[],A=[];let i=n.get(r.sha);if(null!=i)for(let r of i)G=(0,y.Yk)(e,!0,r),P=(0,y.km)(r),w=((v?.useAvatars?o.provider?.avatarUri:void 0)??D.Wf(this.container,o,t))?.toString(!0),R={webviewItem:"gitlens:branch+remote",webviewItemValue:{type:"branch",ref:(0,$.kA)(r,e,{id:G,refType:"branch",name:r,remote:!0,upstream:{name:o.name,missing:!1}})}},A.push({id:G,name:P,owner:o.name,url:o.url,avatarUrl:w,context:(0,N.C9)(R),hostingServiceType:o.provider?.gkProviderId})}q=[];let s=l.get(r.sha);if(null!=s)for(let t of s)k=(0,U.gt)(e,t),R={webviewItem:"gitlens:tag",webviewItemValue:{type:"tag",ref:(0,$.kA)(t,e,{id:k,refType:"tag",name:t})}},q.push({id:k,name:t,annotated:!0,context:(0,N.C9)(R)});if(r.author.email&&!h.has(r.author.email)){let e=r.getCachedAvatarUri();null!=e&&h.set(r.author.email,e.toString(!0))}j="You"===r.author.name,C={row:(0,N.C9)({webviewItem:`gitlens:commit${H?"+HEAD":""}+current`,webviewItemValue:{type:"commit",ref:(0,$.kA)(r.sha,e,{refType:"revision",message:r.message})}}),avatar:(0,N.C9)({webviewItem:`gitlens:contributor${j?"+current":""}`,webviewItemValue:{type:"contributor",repoPath:e,name:j&&c?.name!=null?c.name:r.author.name,email:r.author.email,current:j}})},T.push({sha:r.sha,parents:r.parents,author:r.author.name,email:r.author.email??"",date:r.committer.date.getTime(),message:(0,d.E)(r.message&&String(r.message).length?r.message:r.summary),type:r.parents.length>1?"merge-node":"commit-node",heads:F,remotes:A,tags:q,contexts:C}),null!=r.stats&&u.set(r.sha,{files:(0,b.Z)(r.stats.changedFiles),additions:r.stats.additions,deletions:r.stats.deletions})}return v?.ref==="HEAD"?v.ref=x.$1(r.commits.values())?.sha:v?.ref!=null&&(v.ref=void 0),{repoPath:e,avatars:h,ids:g,includes:I,branches:s,remotes:a,downstreams:S,stashes:p,worktrees:m,worktreesByBranch:f,rows:T,id:v?.ref,paging:{limit:r.limit,startingCursor:r.startingCursor,hasMore:r.hasMore},more:async d=>{let y=await r.more?.(d);return this.getCommitsForGraphCore(e,t,y,i,s,n,o,a,u,l,c,h,g,p,m,f,v)}}}async getCommitTags(e,t,r){if(null==e||r?.commitDate==null)return[];let i=(0,B.dQ)();try{let{metadata:i,github:s,session:n}=await this.ensureRepositoryContext(e);return await s.getCommitTags(n.accessToken,i.repo.owner,i.repo.name,ea(t),r?.commitDate)}catch(e){return j.Vy.error(e,i),[]}}async getContributorsStats(e,t){if(null==e)return;let r=(0,B.dQ)();try{let{metadata:t,github:r,session:i}=await this.ensureRepositoryContext(e),s=(await r.getContributors(i.accessToken,t.repo.owner,t.repo.name)).map(e=>e.contributions).sort((e,t)=>t-e);return{count:s.length,contributions:s}}catch(e){j.Vy.error(e,r);return}}async getContributors(e,t){if(null==e)return[];let r=(0,B.dQ)();try{let{metadata:t,github:r,session:i}=await this.ensureRepositoryContext(e),s=await r.getContributors(i.accessToken,t.repo.owner,t.repo.name),n=await this.getCurrentUser(e),o=[];for(let t of s)"User"===t.type&&o.push(new P.sL(e,t.name,t.email,t.contributions,void 0,(0,k.h)(n,t.name,t.email,t.login),void 0,t.login,t.avatar_url,t.node_id));return o}catch(e){return j.Vy.error(e,r),[]}}async getCurrentUser(e){if(!e)return;let t=(0,B.dQ)(),r=this._repoInfoCache.get(e),i=r?.user;if(null!=i)return i;if(null!==i)try{let{metadata:t,github:s,session:n}=await this.ensureRepositoryContext(e);return i=await s.getCurrentUser(n.accessToken,t.repo.owner,t.repo.name),this._repoInfoCache.set(e,{...r,user:i??null}),i}catch(i){j.Vy.error(i,t),this._repoInfoCache.set(e,{...r,user:null});return}}async getDefaultBranchName(e,t){if(null==e)return;let r=(0,B.dQ)();try{let{metadata:t,github:r,session:i}=await this.ensureRepositoryContext(e);return await r.getDefaultBranchName(i.accessToken,t.repo.owner,t.repo.name)}catch(e){j.Vy.error(e,r);return}}async getDiffForFile(e,t,r){}async getDiffForFileContents(e,t,r){}async getDiffForLine(e,t,r,i){}async getDiffStatus(e,t,r,i){let s,n;if(null==e)return;let o=(0,B.dQ)(),{metadata:a,github:u,session:l}=await this.ensureRepositoryContext(e);if((0,q.p8)(t)){if(s=t,!(0,q.p8)(t,"qualified")){let e=(0,q.jY)(t);s=(0,q.Xn)(e?.left||"HEAD",e?.right||"HEAD",e?.notation??"...")}}else s=(0,q.Xn)(t||"HEAD",r||"HEAD","...");if((0,q.p8)(s,"qualified-double-dot")){let e=(0,q.jY)(s);s=(0,q.Xn)(e.left,e.right,"..."),n=(0,q.Xn)(e.right,e.left,"...")}try{let t=await u.getComparison(l.accessToken,a.repo.owner,a.repo.name,ea(s)),r=t?.files,i=r;if(n){t=await u.getComparison(l.accessToken,a.repo.owner,a.repo.name,ea(n));let e=t?.files;i=[...new Set((0,x.KC)(r,e))]}return i?.map(t=>new R.lY(e,t.filename??"",W.fromCommitFileStatus(t.status)??R.NO.Modified,t.previous_filename,void 0,n?void 0:{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0}))}catch(e){j.Vy.error(e,o);return}}async getFileStatusForCommit(e,t,r){if(r===A.nB||(0,q._k)(r))return;let i=await this.getCommitForFile(e,t,{ref:r});if(null!=i)return i.findFile(t)}async getLastFetchedTimestamp(e){}async getLog(e,t){if(null==e)return;let r=(0,B.dQ)(),i=this.getPagingLimit(t?.limit);try{let{metadata:r,github:s,session:n}=await this.ensureRepositoryContext(e),o=t?.ref&&"HEAD"!==t.ref?t.ref:(await r.getRevision()).revision,a=await s.getCommits(n.accessToken,r.repo.owner,r.repo.name,ea(o),{all:t?.all,authors:t?.authors,after:t?.cursor,limit:i,since:t?.since?new Date(t.since):void 0}),u=new Map,{viewer:l=n.account.label}=a;for(let t of a.values){let r=null!=l&&t.author.name===l?"You":t.author.name,i=null!=l&&t.committer.name===l?"You":t.committer.name,s=u.get(t.oid);null==s&&(s=new w.Yg(this.container,e,t.oid,new w.M7(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new w.M7(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,t.files?.map(t=>new R.lY(e,t.filename??"",W.fromCommitFileStatus(t.status)??R.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),u.set(t.oid,s))}let c={repoPath:e,commits:u,sha:o,range:void 0,count:u.size,limit:i,hasMore:a.paging?.more??!1,endingCursor:a.paging?.cursor,query:r=>this.getLog(e,{...t,limit:r})};return c.hasMore&&(c.more=this.getLogMoreFn(c,t)),c}catch(e){j.Vy.error(e,r);return}}async getLogRefsOnly(e,t){let r=await this.getLog(e,t);if(null!=r)return new Set([...r.commits.values()].map(e=>e.ref))}getLogMoreFn(e,t){return async r=>{let i=null!=r&&"object"==typeof r?r.until:void 0,s="number"==typeof r?r:void 0;if(i&&(0,x.zN)(e.commits.values(),e=>e.ref===i))return e;s=this.getPagingLimit(s);let n=await this.getLog(e.repoPath,{...t,limit:s,cursor:e.endingCursor});if(null==n)return{...e,hasMore:!1,more:void 0};let o=new Map([...e.commits,...n.commits]),a={repoPath:e.repoPath,commits:o,sha:e.sha,range:void 0,count:o.size,limit:null==i?(e.limit??0)+s:void 0,hasMore:null!=i||n.hasMore,startingCursor:x.HV(e.commits)?.[0],endingCursor:n.endingCursor,pagedCommits:()=>{for(let t of e.commits.keys())n.commits.delete(t);return n.commits},query:e.query};return a.hasMore&&(a.more=this.getLogMoreFn(a,t)),a}}async getLogForFile(e,t,r){if(null==e)return;let i=(0,B.dQ)(),s=this.getRelativePath(t,e);if(null!=e&&e===s)throw Error(`File name cannot match the repository path; path=${s}`);(r={reverse:!1,...r}).renames=!1,r.all=!1;let n="log";null!=r.ref&&(n+=`:${r.ref}`),r.limit=this.getPagingLimit(r?.limit),r.limit&&(n+=`:n${r.limit}`),r.renames&&(n+=":follow"),r.reverse&&(n+=":reverse"),r.since&&(n+=`:since=${r.since}`),r.skip&&(n+=`:skip${r.skip}`),r.cursor&&(n+=`:cursor=${r.cursor}`);let o=await this.container.documentTracker.getOrAdd(m.nk.fromFile(s,e,r.ref));if(!r.force&&null==r.range){if(null!=o.state){let s=o.state.getLog(n);if(null!=s)return j.Vy.debug(i,`Cache hit: '${n}'`),s.item;if(null!=r.ref||null!=r.limit){let s=o.state.getLog(`log${r.renames?":follow":""}${r.reverse?":reverse":""}`);if(null!=s){if(null==r.ref)return j.Vy.debug(i,`Cache hit: ~'${n}'`),s.item;j.Vy.debug(i,`Cache ?: '${n}'`);let o=await s.item;if(null!=o&&!o.hasMore&&o.commits.has(r.ref)){j.Vy.debug(i,`Cache hit: '${n}'`);let s=!0,a=0,u=new Map((0,x.x1)(o.commits.entries(),([e,t])=>{if(s){if(e!==r?.ref)return;s=!1}if(a++,r?.limit==null||!(a>r.limit))return[e,t]})),l={...r};return{...o,limit:r.limit,count:u.size,commits:u,query:r=>this.getLogForFile(e,t,{...l,limit:r})}}}}}j.Vy.debug(i,`Cache miss: '${n}'`),null==o.state&&(o.state=new Q.VV)}let a=this.getLogForFileCore(e,s,o,n,i,r);return null!=o.state&&null==r.range&&(j.Vy.debug(i,`Cache add: '${n}'`),o.state.setLog(n,{item:a})),a}async getLogForFileCore(e,t,r,i,s,n){if(null==e)return;let o=this.getPagingLimit(n?.limit);try{let r=await this.ensureRepositoryContext(e);if(null==r)return;let{metadata:i,github:s,remotehub:a,session:u}=r,l=this.getAbsoluteUri(t,e),c=this.getRelativePath(l,a.getProviderRootUri(l)),d=n?.ref&&"HEAD"!==n.ref?n.ref:(await i.getRevision()).revision,h=await s.getCommits(u.accessToken,i.repo.owner,i.repo.name,ea(d),{all:n?.all,after:n?.cursor,path:c,limit:o,since:n?.since?new Date(n.since):void 0}),g=new Map,{viewer:p=u.account.label}=h;for(let t of h.values){let r=null!=p&&t.author.name===p?"You":t.author.name,i=null!=p&&t.committer.name===p?"You":t.committer.name,s=g.get(t.oid);if(null==s){let n=t.files?.map(t=>new R.lY(e,t.filename??"",W.fromCommitFileStatus(t.status)??R.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),o=(0,_.Np)(c)?void 0:n?.find(e=>e.path===c)??new R.lY(e,c,R.NO.Modified,void 0,void 0,1===t.changedFiles?{additions:t.additions??0,deletions:t.deletions??0,changes:0}:void 0);s=new w.Yg(this.container,e,t.oid,new w.M7(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new w.M7(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,{file:o,files:n},{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),g.set(t.oid,s)}}let m={repoPath:e,commits:g,sha:d,range:void 0,count:g.size,limit:o,hasMore:h.paging?.more??!1,endingCursor:h.paging?.cursor,query:r=>this.getLogForFile(e,t,{...n,limit:r})};return m.hasMore&&(m.more=this.getLogForFileMoreFn(m,t,n)),m}catch(e){if(null!=r.state&&n?.range==null&&!n?.reverse){let t=e?.toString()??"";return j.Vy.debug(s,`Cache replace (with empty promise): '${i}'`),r.state.setLog(i,{item:ei,errorMessage:t}),ei}return}}getLogForFileMoreFn(e,t,r){return async i=>{let s=null!=i&&"object"==typeof i?i.until:void 0,n="number"==typeof i?i:void 0;if(s&&(0,x.zN)(e.commits.values(),e=>e.ref===s))return e;n=this.getPagingLimit(n);let o=await this.getLogForFile(e.repoPath,t,{...r,limit:null==s?n:0,cursor:e.endingCursor});if(null==o)return{...e,hasMore:!1,more:void 0};let a=new Map([...e.commits,...o.commits]),u={repoPath:e.repoPath,commits:a,sha:e.sha,range:e.range,count:a.size,limit:null==s?(e.limit??0)+n:void 0,hasMore:null!=s||o.hasMore,endingCursor:o.endingCursor,query:e.query};return u.hasMore&&(u.more=this.getLogForFileMoreFn(u,t,r)),u}}async getMergeBase(e,t,r,i){if(null==e)return;let s=(0,B.dQ)(),{metadata:n,github:o,session:a}=await this.ensureRepositoryContext(e);try{let e=await o.getComparison(a.accessToken,n.repo.owner,n.repo.name,(0,q.Xn)(ea(t),ea(r),"..."));return e?.merge_base_commit?.sha}catch(e){j.Vy.error(e,s);return}}async getMergeStatus(e){}async getRebaseStatus(e){}async getNextComparisonUris(e,t,r,i=0){if(!r)return;let s=(0,B.dQ)();try{let s=await this.ensureRepositoryContext(e);if(null==s)return;let{metadata:n,github:o,remotehub:a,session:u}=s,l=this.getRelativePath(t,a.getProviderRootUri(t)),c=(await n.getRevision()).revision;"HEAD"===r&&(r=c);let d=await o.getNextCommitRefs(u.accessToken,n.repo.owner,n.repo.name,c,l,ea(r));return{current:0===i?m.nk.fromFile(l,e,r):new m.nk(await this.getBestRevisionUri(e,l,d[i-1])),next:new m.nk(await this.getBestRevisionUri(e,l,d[i]))}}catch(e){throw j.Vy.error(e,s),e}}async getOldestUnpushedRefForFile(e,t){}async getPreviousComparisonUris(e,t,r,i=0){if(r===A.nB)return;let s=(0,B.dQ)();r===A.SU&&(r=void 0);try{let s=await this.ensureRepositoryContext(e);if(null==s)return;let{metadata:n,github:o,remotehub:a,session:u}=s,l=this.getRelativePath(t,a.getProviderRootUri(t)),c=null!=r?1:0,d=await o.getCommitRefs(u.accessToken,n.repo.owner,n.repo.name,ea(r&&"HEAD"!==r?r:(await n.getRevision()).revision),{path:l,first:c+i+1});if(null==d)return;let h=0===i?m.nk.fromFile(l,e,r):new m.nk(await this.getBestRevisionUri(e,l,d.values[c+i-1]?.oid??A.nB));if(null==h||h.sha===A.nB)return;return{current:h,previous:new m.nk(await this.getBestRevisionUri(e,l,d.values[c+i]?.oid??A.nB))}}catch(e){throw j.Vy.error(e,s),e}}async getPreviousComparisonUrisForLine(e,t,r,i,s=0){if(i===A.nB)return;let n=(0,B.dQ)();try{let n;let o=await this.ensureRepositoryContext(e);if(null==o)return;let{remotehub:a}=o,u=this.getRelativePath(t,a.getProviderRootUri(t)),l=m.nk.fromFile(u,e,i),c=r,d=r,h=r;for(let t=0;t<Math.max(0,s)+2;t++){let t=await this.getBlameForLine(n??l,h,void 0,{forceSingleLine:!0});if(null==t)break;i=t.commit.sha,u=t.commit.file?.path??t.commit.file?.originalPath??u,h=t.line.originalLine-1;let r=m.nk.fromFile(u,e,i);null==n||(l=n,c=d),n=r,d=h}if(null==l)return;return{current:l,previous:n,line:(c??r)+1}}catch(e){throw j.Vy.error(e,n),e}}async getIncomingActivity(e,t){}async getRemotes(e,t){if(null==e)return[];let r=(0,I.P)(M.H.get("remotes",null)),[,i,s]=u.Uri.parse(e,!0).path.split("/",3),n=`https://github.com/${i}/${s}.git`,o="github.com",a=`${i}/${s}`;return[new C.Xd(this.container,e,"origin","https",o,a,(0,I.m)(this.container,r)(n,o,a),[{type:"fetch",url:n},{type:"push",url:n}])]}async getRevisionContent(e,t,r){let i=r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t);return u.workspace.fs.readFile(i)}async getStatusForFile(e,t){}async getStatusForFiles(e,t){}async getStatus(e){if(null==e)return;let t=await this.ensureRepositoryContext(e);if(null==t)return;let r=await t.metadata.getRevision();if(null!=r)return new G.ls(e,r.name,r.revision,[],{ahead:0,behind:0},r.type===Y.Branch||r.type===Y.RemoteBranch?{name:`origin/${r.name}`,missing:!1}:void 0)}async getTags(e,t){if(null==e)return er;let r=(0,B.dQ)(),i=t?.paging?.cursor?void 0:this._tagsCache.get(e);null==i&&(i=(async function(){try{let r,i;let{metadata:s,github:n,session:o}=await this.ensureRepositoryContext(e),a=[],u=t?.paging?.cursor,l=null==u;for(;;){let t=await n.getTags(o.accessToken,s.repo.owner,s.repo.name,{cursor:u});for(let s of t.values)r=s.target.authoredDate??s.target.target?.authoredDate??s.target.tagger?.date,i=s.target.committedDate??s.target.target?.committedDate??s.target.tagger?.date,a.push(new U.rN(e,s.name,s.target.target?.oid??s.target.oid,s.target.message??s.target.target?.message??"",null!=r?new Date(r):void 0,null!=i?new Date(i):void 0));if(!t.paging?.more||!l)return{...t,values:a};u=t.paging.cursor}}catch(t){return j.Vy.error(t,r),this._tagsCache.delete(e),er}}).call(this),t?.paging?.cursor==null&&this._tagsCache.set(e,i));let s=await i;return t?.filter!=null&&(s={...s,values:s.values.filter(t.filter)}),t?.sort!=null&&(0,E.uO)(s.values,"boolean"==typeof t.sort?void 0:t.sort),s}async getTreeEntryForRevision(e,t,r){if(null==e||!t)return;if("HEAD"===r){let t=await this.ensureRepositoryContext(e);if(null==t)return;let i=await t.metadata.getRevision();r=i?.revision}let i=r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t),s=await u.workspace.fs.stat(i);if(null!=s)return{ref:r,oid:"",path:this.getRelativePath(i,e),size:s.size,type:(s.type&u.FileType.Directory)===u.FileType.Directory?"tree":"blob"}}async getTreeForRevision(e,t){if(null==e)return[];if("HEAD"===t){let r=await this.ensureRepositoryContext(e);if(null==r)return[];let i=await r.metadata.getRevision();t=i?.revision}let r=t?this.createProviderUri(e,t):this.createVirtualUri(e,t),i=await u.workspace.fs.readDirectory(r);if(null==i)return[];let s=[];for(let[e,n]of i){let i=this.getAbsoluteUri(e,r);s.push({ref:t,oid:"",path:this.getRelativePath(e,i),size:0,type:(n&u.FileType.Directory)===u.FileType.Directory?"tree":"blob"})}return[]}async hasBranchOrTag(e,t){let[{values:r},{values:i}]=await Promise.all([this.getBranches(e,{filter:t?.filter?.branches,sort:!1}),this.getTags(e,{filter:t?.filter?.tags,sort:!1})]);return 0!==r.length||0!==i.length}async hasCommitBeenPushed(e,t){return!0}async isAncestorOf(e,t,r){if(null==e)return!1;let i=(0,B.dQ)(),{metadata:s,github:n,session:o}=await this.ensureRepositoryContext(e);try{let e=await n.getComparison(o.accessToken,s.repo.owner,s.repo.name,(0,q.Xn)(ea(t),ea(r),"..."));switch(e?.status){case"ahead":case"diverged":default:return!1;case"identical":case"behind":return!0}}catch(e){return j.Vy.error(e,i),!1}}isTrackable(e){return this.supportedSchemes.has(e.scheme)}async isTracked(e){if(!this.isTrackable(e)||null==this.container.git.getRepository(e))return!1;let t=e.with({scheme:l.xB.GitHub});return null!=await u.workspace.fs.stat(t)}async resolveReference(e,t,r,i){let s;if(!t||t===A.nB||null==r&&(0,q.HH)(t)||null!=r&&(0,q._k)(t))return t;if(null!=r)s=this.getRelativePath(r,e);else if(!(0,q.a$)(t)||t.endsWith("^3"))return t;let n=await this.ensureRepositoryContext(e);if(null==n)return t;let{metadata:o,github:a,session:u}=n,l=await a.resolveReference(u.accessToken,o.repo.owner,o.repo.name,ea(t),s);return null!=l?l:s?A.nB:t}async richSearchCommits(e,t,r){if(null==e)return;let i=(0,B.dQ)(),s=(0,S.OM)(t),n=s.get("commit:");if(n?.size){let t=await this.getCommit(e,(0,x.$1)(n));if(null==t)return;return{repoPath:e,commits:new Map([[t.sha,t]]),sha:t.sha,range:void 0,count:1,limit:1,hasMore:!1}}let o=await this.getQueryArgsFromSearchQuery(t,s,e);if(0===o.length)return;let a=this.getPagingLimit(r?.limit);try{let{metadata:i,github:s,session:n}=await this.ensureRepositoryContext(e),u=`repo:${i.repo.owner}/${i.repo.name}+${o.join("+").trim()}`,l=await s.searchCommits(n.accessToken,u,{cursor:r?.cursor,limit:a,sort:r?.ordering==="date"?"committer-date":r?.ordering==="author-date"?"author-date":void 0});if(null==l)return;let c=new Map,d=n.account.label;for(let t of l.values){let r=null!=d&&t.author.name===d?"You":t.author.name,i=null!=d&&t.committer.name===d?"You":t.committer.name,s=c.get(t.oid);null==s&&(s=new w.Yg(this.container,e,t.oid,new w.M7(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new w.M7(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,t.files?.map(t=>new R.lY(e,t.filename??"",W.fromCommitFileStatus(t.status)??R.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),c.set(t.oid,s))}let h={repoPath:e,commits:c,sha:void 0,range:void 0,count:c.size,limit:a,hasMore:l.pageInfo?.hasNextPage??!1,endingCursor:l.pageInfo?.endCursor??void 0,query:t=>this.getLog(e,{...r,limit:t})};if(h.hasMore){let e=function(i){return async s=>{s=this.getPagingLimit(s);let n=await this.richSearchCommits(i.repoPath,t,{...r,limit:s,cursor:i.endingCursor});if(null==n)return{...i,hasMore:!1,more:void 0};let o=new Map([...i.commits,...n.commits]),a={repoPath:i.repoPath,commits:o,sha:i.sha,range:void 0,count:o.size,limit:(i.limit??0)+s,hasMore:n.hasMore,endingCursor:n.endingCursor,query:i.query};return a.hasMore&&(a.more=e.call(this,a)),a}};h.more=e.call(this,h)}return h}catch(e){j.Vy.error(e,i)}}async searchCommits(e,t,r){t={matchAll:!1,matchCase:!1,matchRegex:!0,...t};let i=(0,S.b4)(t);try{let n=new Map,o=(0,S.OM)(t),a=o.get("commit:");if(null!=a){let s=await Promise.allSettled((0,x.Tj)(a,t=>this.getCommit(e,t.replace(ee,"")))),o=0;for(let e of s){let t=(0,O.Ro)(e);null!=t&&n.set(t.sha,{i:o++,date:Number(r?.ordering==="author-date"?t.author.date:t.committer.date)})}return{repoPath:e,query:t,comparisonKey:i,results:n}}let u=await this.getQueryArgsFromSearchQuery(t,o,e);if(0===u.length)return{repoPath:e,query:t,comparisonKey:i,results:n};let{metadata:l,github:c,session:d}=await this.ensureRepositoryContext(e),h=`repo:${l.repo.owner}/${l.repo.name}+${u.join("+").trim()}`;async function s(o,a){if(r?.cancellation?.isCancellationRequested)return{repoPath:e,query:t,comparisonKey:i,results:n};o=this.getPagingLimit(o??M.H.get("advanced.maxSearchItems"));let u=await c.searchCommitShas(d.accessToken,h,{cursor:a,limit:o,sort:r?.ordering==="date"?"committer-date":r?.ordering==="author-date"?"author-date":void 0});if(null==u||r?.cancellation?.isCancellationRequested)return{repoPath:e,query:t,comparisonKey:i,results:n};for(let e of u.values)n.set(e.sha,{i:n.size,date:Number(r?.ordering==="author-date"?e.authorDate:e.committerDate)});return a=u.pageInfo?.endCursor??void 0,{repoPath:e,query:t,comparisonKey:i,results:n,paging:u.pageInfo?.hasNextPage?{limit:o,hasMore:!0}:void 0,more:async e=>s.call(this,e,a)}}return await s.call(this,r?.limit)}catch(e){if(e instanceof p.Do)throw e;throw new p.Do(e)}}async validateBranchOrTagName(e,t){return en.test(e)}async validateReference(e,t){return!0}async ensureRepositoryContext(e,t){let r,i,s=u.Uri.parse(e,!0);if(!/^github\+?/.test(s.authority))throw new h.gK(e,h.ax.NotAGitHubRepository);if(!t){let t=this.container.git.getRepository(s);if(null==t)throw new h.gK(e,h.ax.NotAGitHubRepository);s=t.uri}let n=this._remotehub;if(null==n)try{n=await this.ensureRemoteHubApi()}catch(t){throw h.dU,new h.gK(e,h.ax.RemoteHubApiNotFound,t)}let o=await eo(s,n,e=>n?.getMetadata(e));if(o?.provider.id!=="github")throw new h.gK(e,h.ax.NotAGitHubRepository);let a=(0,f.JG)(s.authority);if(a.metadata?.ref?.type===J.PullRequest){let e=await o.getRevision();if(e.type===Y.RemoteBranch){let[t]=e.name.split(":");t!==o.repo.owner&&(o.repo.owner=t)}}try{[r,i]=await Promise.all([this.ensureGitHub(),this.ensureSession()])}catch(t){if(t instanceof h.v3)throw new h.gK(e,t.reason===h.R.UserDidNotConsent?h.ax.GitHubAuthenticationDenied:h.ax.GitHubAuthenticationNotFound,t);throw new h.gK(e)}if(null==r)throw new h.gK(e);return{github:r,metadata:o,remotehub:n,session:i}}_github;async ensureGitHub(){if(null==this._github){let e=await this.container.github;null!=e&&this._disposables.push(e.onDidReauthenticate(()=>void this.ensureSession(!0))),this._github=e}return this._github}_remotehub;_remotehubPromise;async ensureRemoteHubApi(e){if(null==this._remotehubPromise&&(this._remotehubPromise=V(),this._remotehubPromise.then(e=>this._remotehub=e,()=>this._remotehub=void 0)),!e)return this._remotehubPromise;try{return await this._remotehubPromise}catch{return}}_sessionPromise;async ensureSession(e=!1,t=!1){if(t=t&&!a.HZ,e||null==this._sessionPromise){async function r(){let i=this.container.storage.get(`provider:authentication:skip:${this.descriptor.id}`,!1),s=await this.authenticationService.get(this.authenticationProviderId);try{let r;if(e?(i=!1,this.container.storage.delete(`provider:authentication:skip:${this.descriptor.id}`),r=await s.getSession(this.authenticationDescriptor,{forceNewSession:!0})):r=i||t?await s.getSession(this.authenticationDescriptor):await s.getSession(this.authenticationDescriptor,{createIfNeeded:!0}),null!=r)return r;throw Error("User did not consent")}catch(s){if(s instanceof Error&&s.message.includes("User did not consent")){if(!t&&(await this.container.storage.store(`provider:authentication:skip:${this.descriptor.id}`,!0),!i))return e||queueMicrotask(async()=>{let e="Re-enable";await u.window.showInformationMessage("GitLens has been disabled. Authentication is required for GitLens to work with remote GitHub repositories.",e)===e&&this.ensureSession(!0)}),e=!1,r.call(this);throw new h.v3("github",h.R.UserDidNotConsent)}throw j.Vy.error(s),new h.v3("github",void 0,s)}}this._sessionPromise=r.call(this)}return this._sessionPromise}createVirtualUri(e,t,r){var i;let s;if("string"==typeof t)t&&(s=(0,q.HH)(t)?{v:1,ref:{id:t,type:2}}:{v:1,ref:{id:t,type:4}});else switch(t?.refType){case"revision":case"stash":s={v:1,ref:{id:t.ref,type:2}};break;case"branch":case"tag":s={v:1,ref:{id:t.name,type:4}}}if("string"==typeof e&&(e=u.Uri.parse(e,!0)),r){let t=e.path;t.endsWith("/")&&(t=t.slice(0,-1)),r=this.getRelativePath(r,e),r=`${t}/${r.startsWith("/")?r.slice(0,-1):r}`}return e.with({scheme:l.xB.Virtual,authority:(i=s,`github${null!=i?`+${(0,o.l)(JSON.stringify(i))}`:""}`),path:r??e.path})}createProviderUri(e,t,r){let i=this.createVirtualUri(e,t,r);return null==this._remotehub?i.scheme!==l.xB.Virtual?i:i.with({scheme:l.xB.GitHub}):this._remotehub.getProviderUri(i)}getPagingLimit(e){return 0===(e=Math.min(100,e??M.H.get("advanced.maxListItems")??100))&&(e=100),e}async resolveReferenceCore(e,t,r){if(null==r||"HEAD"===r)return(await t.getRevision()).revision;if((0,q.HH)(r))return r;if((0,q.p8)(r))return;let[i,s]=await Promise.allSettled([this.getBranches(e,{filter:e=>e.name===r}),this.getTags(e,{filter:e=>e.name===r})]);return r=O.Ro(i)?.values[0]?.sha??O.Ro(s)?.values[0]?.sha}async getQueryArgsFromSearchQuery(e,t,r){let i=[];for(let[s,n]of t.entries())switch(s){case"message:":i.push(...(0,x.Tj)(n,e=>e.replace(/ /g,"+")));break;case"author:":{let t;for(let s of(n.has("@me")&&(t=await this.getCurrentUser(r)),n))if(s&&(s=s.replace(ee,e.matchRegex?"\\b":""))){if("@me"===s){if(t?.username==null)continue;s=`@${t.username}`}(s=s.replace(/ /g,"+")).startsWith("@")?i.push(`author:${s.slice(1)}`):s.includes("@")?i.push(`author-email:${s}`):i.push(`author-name:${s}`)}}}return i}};async function eo(e,t,r){let s=!1;for(;;)try{return await r(e)}catch(r){if(!s&&(/No provider registered/i.test(r.message)||null==t.getProvider(e))){i??=t.loadWorkspaceContents(e);try{await i,s=!0;continue}catch{}}throw r}}function ea(e){return e?.replace(/(?:^|(?<=..))origin\//,"")}X([(0,H.Rm)()],GitHubGitProvider.prototype,"getBestRevisionUri",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getWorkingUri",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"branchContainsCommit",1),X([(0,H.Rm)({singleLine:!0})],GitHubGitProvider.prototype,"resetCache",1),X([(0,H.Rm)({singleLine:!0})],GitHubGitProvider.prototype,"resetCaches",1),X([(0,H.Rm)({args:{1:e=>e.length}})],GitHubGitProvider.prototype,"excludeIgnoredUris",1),X([(0,T.G)(),(0,H.Yz)()],GitHubGitProvider.prototype,"findRepositoryUri",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getLeftRightCommitCount",1),X([(0,T.G)((e,t)=>`${e.toString()}|${t?.isDirty}`),(0,H.Rm)({args:{1:e=>e?.isDirty}})],GitHubGitProvider.prototype,"getBlame",1),X([(0,H.Rm)({args:{1:"<contents>"}})],GitHubGitProvider.prototype,"getBlameContents",1),X([(0,T.G)((e,t,r,i)=>`${e.toString()}|${t}|${r?.isDirty}|${i?.forceSingleLine}`),(0,H.Rm)({args:{2:e=>e?.isDirty}})],GitHubGitProvider.prototype,"getBlameForLine",1),X([(0,H.Rm)({args:{2:"<contents>"}})],GitHubGitProvider.prototype,"getBlameForLineContents",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getBlameForRange",1),X([(0,H.Rm)({args:{2:"<contents>"}})],GitHubGitProvider.prototype,"getBlameForRangeContents",1),X([(0,H.Rm)({args:{0:"<blame>"}})],GitHubGitProvider.prototype,"getBlameRange",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getBranch",1),X([(0,H.Rm)({args:{1:!1}})],GitHubGitProvider.prototype,"getBranches",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getChangedFilesCount",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getCommit",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getCommitBranches",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getCommitCount",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getCommitForFile",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getCommitsForGraph",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getCommitTags",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getContributorsStats",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getContributors",1),X([(0,T.G)(),(0,H.Rm)()],GitHubGitProvider.prototype,"getCurrentUser",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getDefaultBranchName",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getDiffForFile",1),X([(0,H.Rm)({args:{1:e=>"<contents>"}})],GitHubGitProvider.prototype,"getDiffForFileContents",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getDiffForLine",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getDiffStatus",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getFileStatusForCommit",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getLog",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getLogRefsOnly",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getLogForFile",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getMergeBase",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getMergeStatus",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getRebaseStatus",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getNextComparisonUris",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getOldestUnpushedRefForFile",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getPreviousComparisonUris",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getPreviousComparisonUrisForLine",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getIncomingActivity",1),X([(0,H.Rm)({args:{1:!1}})],GitHubGitProvider.prototype,"getRemotes",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getRevisionContent",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getStatusForFile",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getStatusForFiles",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getStatus",1),X([(0,H.Rm)({args:{1:!1}})],GitHubGitProvider.prototype,"getTags",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getTreeEntryForRevision",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"getTreeForRevision",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"hasBranchOrTag",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"hasCommitBeenPushed",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"isAncestorOf",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"resolveReference",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"richSearchCommits",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"searchCommits",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"validateBranchOrTagName",1),X([(0,H.Rm)()],GitHubGitProvider.prototype,"validateReference",1),X([(0,T.G)()],GitHubGitProvider.prototype,"ensureRepositoryContext",1),X([(0,T.G)()],GitHubGitProvider.prototype,"ensureGitHub",1)},5071:(e,t,r)=>{r.r(t),r.d(t,{GitLabIntegration:()=>GitLabIntegration,GitLabSelfHostedIntegration:()=>GitLabSelfHostedIntegration});var i=r(1398),s=r(1646),n=r(4007),o=r(5270),a=r(9258),u=r(9709),l=r(6760),c=r(3758),d=Object.defineProperty,h=Object.getOwnPropertyDescriptor;let g=c.Mt[s.Q7.GitLab],p=Object.freeze({id:g.id,scopes:g.scopes}),m=c.Mt[s.PY.GitLabSelfHosted],f=Object.freeze({id:m.id,scopes:m.scopes});let GitLabIntegrationBase=class GitLabIntegrationBase extends u.T5{async getProviderAccountForCommit({accessToken:e},t,r,i){return(await this.container.gitlab)?.getAccountForCommit(this,e,t.owner,t.name,r,{...i,baseUrl:this.apiBaseUrl})}async getProviderAccountForEmail({accessToken:e},t,r,i){return(await this.container.gitlab)?.getAccountForEmail(this,e,t.owner,t.name,r,{...i,baseUrl:this.apiBaseUrl})}async getProviderDefaultBranch({accessToken:e},t){return(await this.container.gitlab)?.getDefaultBranch(this,e,t.owner,t.name,{baseUrl:this.apiBaseUrl})}async getProviderIssueOrPullRequest({accessToken:e},t,r){return(await this.container.gitlab)?.getIssueOrPullRequest(this,e,t.owner,t.name,Number(r),{baseUrl:this.apiBaseUrl})}async getProviderIssue({accessToken:e},t,r){let i=await this.container.gitlab,s=await this.getProvidersApi();if(!i||!t||!r||!await i.getProjectId(this,e,t.owner,t.name,this.apiBaseUrl,void 0))return;let n=await s.getIssue(this.id,{namespace:t.owner,name:t.name,number:r},{accessToken:e}),o=null!=n?c.oH(n,this)?.issue:void 0;return null!=o?{...o,type:"issue"}:void 0}async getProviderPullRequestForBranch({accessToken:e},t,i,s){let{include:n,...o}=s??{},a=(await Promise.resolve().then(r.bind(r,6760))).toGitLabMergeRequestState;return(await this.container.gitlab)?.getPullRequestForBranch(this,e,t.owner,t.name,i,{...o,include:n?.map(e=>a(e)),baseUrl:this.apiBaseUrl})}async getProviderPullRequestForCommit({accessToken:e},t,r){return(await this.container.gitlab)?.getPullRequestForCommit(this,e,t.owner,t.name,r,{baseUrl:this.apiBaseUrl})}async getProviderRepositoryMetadata({accessToken:e},t,r){return(await this.container.gitlab)?.getRepositoryMetadata(this,e,t.owner,t.name,{baseUrl:this.apiBaseUrl},r)}async searchProviderMyPullRequests({accessToken:e},t){var r,i;let s;let n=await this.getProvidersApi(),a=(await this.getCurrentAccount())?.username;if(!a)return Promise.resolve([]);let u=await n.getPullRequestsForUser(this.id,a,{accessToken:e});if(null==u)return Promise.resolve([]);if(null!=t){let e=new Map;for(let r of t)e.set(`${r.owner}/${r.name}`,r);s=u.values.filter(t=>null!=e.get(`${t.repository.owner.login}/${t.repository.name}`))}else s=u.values;let d=(e,t)=>({pullRequest:(0,l.fromGitLabMergeRequestProvidersApi)(e,this),reasons:t?[t]:[]});return r=[...s.flatMap(e=>{let t=[];return e.assignees?.some(e=>e.username===a)&&t.push(d(e,"assigned")),e.reviews?.some(e=>e.reviewer?.username===a||e.state===c.lE.ReviewRequested)&&t.push(d(e,"review-requested")),e.author?.username===a&&t.push(d(e,"authored")),t})],i=e=>e.pullRequest.url,[...(0,o.pD)(r,i,(e,t)=>(0!==t.reasons.length&&e.reasons.push(...t.reasons),e))]}async searchProviderMyIssues({accessToken:e},t){let r=await this.container.gitlab,i=await this.getProvidersApi();if(!r||!t)return;let s=(await Promise.allSettled(t.map(t=>r.getProjectId(this,e,t.owner,t.name,this.apiBaseUrl,void 0))??[])).map(e=>"fulfilled"===e.status?e.value:void 0).filter(e=>null!=e);return(await i.getIssuesForRepos(this.id,s,{accessToken:e})).values.map(e=>(0,c.oH)(e,this)).filter(e=>null!=e)}async mergeProviderPullRequest(e,t,r){if(!this.isPullRequest(t))return!1;let i=await this.getProvidersApi();try{return await i.mergePullRequest(this.id,t,r)}catch(e){return this.showMergeErrorMessage(e),!1}}async showMergeErrorMessage(e){let t="Reauthenticate";await i.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating to provide additional access? Your token needs to have the 'api' scope to perform merge.`,t)===t&&await this.reauthenticate()}isPullRequest(e){return null!=e.refs}async getProviderCurrentAccount({accessToken:e}){let t=await this.getProvidersApi(),r=await t.getCurrentUser(this.id,{accessToken:e});if(null!=r)return{provider:{id:this.id,name:this.name,domain:this.domain,icon:this.icon},id:r.id,name:r.name||void 0,email:r.email||void 0,avatarUrl:r.avatarUrl||void 0,username:r.username||void 0}}};let GitLabIntegration=class GitLabIntegration extends GitLabIntegrationBase{authProvider=p;id=s.Q7.GitLab;key=this.id;name="GitLab";get domain(){return g.domain}get apiBaseUrl(){return"https://gitlab.com/api"}access(){return Promise.resolve(!0)}};let GitLabSelfHostedIntegration=class GitLabSelfHostedIntegration extends GitLabIntegrationBase{constructor(e,t,r,i){super(e,t,r),this._domain=i}authProvider=f;id=s.PY.GitLabSelfHosted;key=`${this.id}:${this.domain}`;name="GitLab Self-Hosted";get domain(){return this._domain}get apiBaseUrl(){return`https://${this._domain}/api`}async connect(e){return!!await (0,a.KH)(this.container,`Rich integration with ${this.name} is a Pro feature.`,{source:"integrations",detail:{action:"connect",integration:this.id}})&&super.connect(e)}};((e,t,r,i)=>{for(var s,n=h(t,r),o=e.length-1;o>=0;o--)(s=e[o])&&(n=s(t,r,n)||n);return i&&n&&d(t,r,n)})([(0,n.Rm)()],GitLabSelfHostedIntegration.prototype,"connect",1)},1465:(e,t,r)=>{r.r(t),r.d(t,{GitLabApi:()=>GitLabApi});var i=r(7223),s=r(2856),n=r(1398),o=r(4039),a=r(3444),u=r(6468),l=r(4007),c=r(4064),d=r(6450),h=r(1165),g=r(7603),p=r(1499),m=r(6760),f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,y=(e,t,r,i)=>{for(var s,n=i>1?void 0:i?v(t,r):t,o=e.length-1;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&f(t,r,n),n};let w="gid://gitlab/User/";let GitLabApi=class GitLabApi{_disposable;_projectIds=new Map;constructor(e){this._disposable=p.H.onDidChangeAny(e=>{(p.H.changedCore(e,["http.proxy","http.proxyStrictSSL"])||p.H.changed(e,["proxy","remotes"]))&&this.resetCaches()})}dispose(){this._disposable.dispose()}resetCaches(){this._projectIds.clear(),this._proxyAgents.clear()}_proxyAgents=new Map;getProxyAgent(e){if(s.HZ)return;let t=this._proxyAgents.get(e.id);if(void 0===t){let r=e.getIgnoreSSLErrors();t=(0,i.cQ)(!0!==r&&"force"!==r&&void 0),this._proxyAgents.set(e.id,t??null)}return t??void 0}async getAccountForCommit(e,t,r,i,s,a,u){let l=(0,d.dQ)(),c=await this.getProjectId(e,t,r,i,a?.baseUrl,u);if(c)try{let r;let i=await this.request(e,t,a?.baseUrl,`v4/projects/${c}/repository/commits/${s}?stats=false`,{method:"GET"},u,l);for(let s of(await this.findUser(e,t,i.author_name,a)))if(s.name===i.author_name||s.publicEmail&&s.publicEmail===i.author_email){if(r=s,"active"===s.state)break}else((0,g.Q_)(s.name,i.author_name)||s.publicEmail&&(0,g.Q_)(s.publicEmail,i.author_email))&&(r=s);if(null==r)return;return r.avatarUrl&&!/^([a-zA-Z][\w+.-]+):/.test(r.avatarUrl)&&(r.avatarUrl=n.Uri.joinPath(n.Uri.parse(r.webUrl),"..",r.avatarUrl).toString()),{provider:e,id:String(r.id),name:r.name||void 0,email:i.author_email||void 0,avatarUrl:r.avatarUrl||void 0,username:r.username||void 0}}catch(t){if(t instanceof o.LN)return;throw this.handleException(t,e,l)}}async getAccountForEmail(e,t,r,i,s,n){let a=(0,d.dQ)();try{let[r]=await this.findUser(e,t,s,n);if(null==r)return;return{provider:e,id:String(r.id),name:r.name||void 0,email:r.publicEmail||void 0,avatarUrl:r.avatarUrl||void 0,username:r.username||void 0}}catch(t){if(t instanceof o.LN)return;throw this.handleException(t,e,a)}}async getDefaultBranch(e,t,r,i,s,n){let a=(0,d.dQ)();try{let o=`query getDefaultBranch(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		repository {
			rootRef
		}
}`,u=await this.graphql(e,t,s?.baseUrl,o,{fullPath:`${r}/${i}`},n,a),l=u?.data?.project?.repository?.rootRef??void 0;if(null==l)return;return{provider:e,name:l}}catch(t){if(t instanceof o.LN)return;throw this.handleException(t,e,a)}}async getIssueOrPullRequest(e,t,r,i,s,n,a){let u=(0,d.dQ)();try{let o=`query getIssueOrMergeRequest(
	$fullPath: ID!
	$iid: String!
) {
	project(fullPath: $fullPath) {
		mergeRequest(iid: $iid) {
			author {
				id
				name
				avatarUrl
				webUrl
			}
			iid
			title
			description
			state
			createdAt
			updatedAt
			mergedAt
			webUrl
		}
		issue(iid: $iid) {
			author {
				id
				name
				avatarUrl
				webUrl
			}
			iid
			title
			description
			state
			createdAt
			updatedAt
			closedAt
			webUrl
		}
	}
}`,l=await this.graphql(e,t,n?.baseUrl,o,{fullPath:`${r}/${i}`,iid:String(s)},a,u);if(l?.data?.project?.issue!=null){let t=l.data.project.issue;return{provider:e,type:"issue",id:t.iid,nodeId:void 0,createdDate:new Date(t.createdAt),updatedDate:new Date(t.updatedAt),title:t.title,closed:"closed"===t.state,closedDate:null==t.closedAt?void 0:new Date(t.closedAt),url:t.webUrl,state:"locked"===t.state?"closed":t.state}}if(l?.data?.project?.mergeRequest!=null){let t=l.data.project.mergeRequest;return{provider:e,type:"pullrequest",id:t.iid,nodeId:void 0,createdDate:new Date(t.createdAt),updatedDate:new Date(t.updatedAt),title:t.title,closed:"closed"===t.state,closedDate:"closed"===t.state?new Date(t.updatedAt):void 0,url:t.webUrl,state:"locked"===t.state?"closed":t.state}}return}catch(t){if(t instanceof o.LN)return;throw this.handleException(t,e,u)}}async getPullRequestForBranch(e,t,r,i,s,n,u){let l=(0,d.dQ)();try{var c;let o;let d=`
			nodes {
				iid
				author {
					id
					name
					avatarUrl
					webUrl
				}
				title
				description
				state
				createdAt
				updatedAt
				mergedAt
				webUrl
			}`,h=`query getMergeRequestForBranch(
	$fullPath: ID!
	$branches: [String!]
) {
	project(fullPath: $fullPath) {
		${n?.include==null?`mergeRequests(sourceBranches: $branches sort: UPDATED_DESC first: 1) {
			${d}
		}`:""}
		${n?.include?.includes("opened")?`opened: mergeRequests(sourceBranches: $branches state: opened sort: UPDATED_DESC first: 1) {
			${d}
		}`:""}
		${n?.include?.includes("merged")?`merged: mergeRequests(sourceBranches: $branches state: merged sort: UPDATED_DESC first: 1) {
			${d}
		}`:""}
		${n?.include?.includes("closed")?`closed: mergeRequests(sourceBranches: $branches state: closed sort: UPDATED_DESC first: 1) {
			${d}
		}`:""}
	}
}`,g=await this.graphql(e,t,n?.baseUrl,h,{fullPath:`${r}/${i}`,branches:[s],state:n?.include},u,l);if(n?.include==null)o=g?.data?.project?.mergeRequests?.nodes?.[0];else for(let e of n.include){let t;"opened"===e?t=g?.data?.project?.opened?.nodes?.[0]:"merged"===e?t=g?.data?.project?.merged?.nodes?.[0]:"closed"===e&&(t=g?.data?.project?.closed?.nodes?.[0]),null!=t&&(null==o||new Date(t.updatedAt)>new Date(o.updatedAt))&&(o=t)}if(null==o)return;return new a.B9(e,{id:(c=o.author?.id,(c?.startsWith(w)?c.substring(w.length):c)??""),name:o.author?.name??"Unknown",avatarUrl:o.author?.avatarUrl??"",url:o.author?.webUrl??""},String(o.iid),void 0,o.title,o.webUrl,{owner:r,repo:i},(0,m.fromGitLabMergeRequestState)(o.state),new Date(o.createdAt),new Date(o.updatedAt),"closed"!==o.state?void 0:new Date(o.updatedAt),null==o.mergedAt?void 0:new Date(o.mergedAt))}catch(t){if(t instanceof o.LN)return;throw this.handleException(t,e,l)}}async getPullRequestForCommit(e,t,r,i,s,n,a){let u=(0,d.dQ)(),l=await this.getProjectId(e,t,r,i,n?.baseUrl,a);if(l)try{let o=await this.request(e,t,n?.baseUrl,`v4/projects/${l}/repository/commits/${s}/merge_requests`,{method:"GET"},a,u);if(null==o||0===o.length)return;return o.length>1&&o.sort((e,t)=>("opened"===e.state?-1:1)-("opened"===t.state?-1:1)||new Date(t.updated_at).getTime()-new Date(e.updated_at).getTime()),(0,m.fromGitLabMergeRequestREST)(o[0],e,{owner:r,repo:i})}catch(t){if(t instanceof o.LN)return;throw this.handleException(t,e,u)}}async getRepositoryMetadata(e,t,r,i,s,n){let a=(0,d.dQ)(),u=await this.getProjectId(e,t,r,i,s?.baseUrl,n);if(u)try{let r=await this.request(e,t,s?.baseUrl,`v4/projects/${u}`,{method:"GET"},n,a);if(null==r)return;return{provider:e,owner:r.namespace.full_path,name:r.path,isFork:null!=r.forked_from_project,parent:null!=r.forked_from_project?{owner:r.forked_from_project.namespace.full_path,name:r.forked_from_project.path}:void 0}}catch(t){if(t instanceof o.LN)return;throw this.handleException(t,e,a)}}async findUser(e,t,r,i,s){let n=(0,d.dQ)();try{let o=`query findUser(
$search: String!
) {
	users(search: $search) {
		nodes {
			id
			name
			username,
			publicEmail,
			state
			avatarUrl
			webUrl
		}
	}
}`,a=await this.graphql(e,t,i?.baseUrl,o,{search:r},s,n),u=a?.data?.users?.nodes;if(null==u||0===u.length)return[];let l=[];for(let e of u){let t=/gid:\/\/gitlab\/User\/([0-9]+)\b/.exec(e.id);null!=t&&l.push({id:parseInt(t[1],10),name:e.name,username:e.username,publicEmail:e.publicEmail||void 0,state:e.state,avatarUrl:e.avatarUrl,webUrl:e.webUrl})}return l}catch(t){if(t instanceof o.LN)return[];return this.handleException(t,e,n),[]}}getProjectId(e,t,r,i,s,n){let o=`${t}|${r}/${i}`,a=this._projectIds.get(o);return null==a&&(a=this.getProjectIdCore(e,t,r,i,s,n),this._projectIds.set(o,a)),a}async getProjectIdCore(e,t,r,i,s,n){let a=(0,d.dQ)();try{let o=`query getProjectId(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		id
	}
}`,u=await this.graphql(e,t,s,o,{fullPath:`${r}/${i}`},n,a),l=u?.data?.project?.id;if(null==l)return;let c=/gid:\/\/gitlab\/Project\/([0-9]+)\b/.exec(l);if(null==c)return;let h=c[1];return(0,d.TT)(a,` \u2022 projectId=${h}`),h}catch(t){if(t instanceof o.LN)return;this.handleException(t,e,a);return}}async graphql(e,t,r,s,a,u,l){let d;try{let n=(0,h.u)(`[GITLAB] POST ${r}`,{log:!1}),l=this.getProxyAgent(e);try{let n;if(null!=u){if(u.isCancellationRequested)throw new o.AL;n=new AbortController,u.onCancellationRequested(()=>n.abort())}if((d=await (0,i.Ff)(e.getIgnoreSSLErrors(),()=>(0,i.hd)(`${r??"https://gitlab.com/api"}/graphql`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},agent:l,signal:n?.signal,body:JSON.stringify({query:s,variables:a})}))).ok){let e=await d.json();if("errors"in e)throw new o.QI("GitLab",d,e.errors);return e}throw new o.QI("GitLab",d)}finally{let e=/(^[^({\n]+)/.exec(s),t=` ${e?.[1].trim()??s}`;n?.stop({message:t})}}catch(r){throw r instanceof o.QI||"AbortError"===r.name?this.handleRequestError(e,t,r,l):c.Vy.isDebugging&&n.window.showErrorMessage(`GitLab request failed: ${r.message}`),r}}async request(e,t,r,s,a,u,l){let d;let g=`${r??"https://gitlab.com/api"}/${s}`;try{let r=(0,h.u)(`[GITLAB] ${a?.method??"GET"} ${g}`,{log:!1}),s=this.getProxyAgent(e);try{let r;if(null!=u){if(u.isCancellationRequested)throw new o.AL;r=new AbortController,u.onCancellationRequested(()=>r.abort())}if((d=await (0,i.Ff)(e.getIgnoreSSLErrors(),()=>(0,i.hd)(g,{headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},agent:s,signal:r?.signal,...a}))).ok)return await d.json();throw new o.QI("GitLab",d)}finally{r?.stop()}}catch(r){throw r instanceof o.QI||"AbortError"===r.name?this.handleRequestError(e,t,r,l):c.Vy.isDebugging&&n.window.showErrorMessage(`GitLab request failed: ${r.message}`),r}}handleRequestError(e,t,r,i){if("AbortError"===r.name||!(r instanceof o.QI))throw new o.AL(r);switch(r.status){case 404:case 410:case 422:throw new o.LN(r);case 401:throw new o.v3("gitlab",o.R.Unauthorized,r);case 403:if(r.message.includes("rate limit exceeded")){let e;let i=r.response?.headers?.get("x-ratelimit-reset");throw null!=i&&Number.isNaN(e=parseInt(i,10))&&(e=void 0),new o.HG(r,t,e)}throw new o.v3("gitlab",o.R.Forbidden,r);case 500:c.Vy.error(r,i),null!=r.response&&(e?.trackRequestException(),(0,u.wW)(`${e?.name??"GitLab"} failed to respond and might be experiencing issues.${null==e||"gitlab"===e.id?" Please visit the [GitLab status page](https://status.gitlab.com) for more information.":""}`));return;case 502:if(c.Vy.error(r,i),r.message.includes("timeout")){e?.trackRequestException(),(0,u.lW)(e?.name??"GitLab");return}break;default:if(r.status>=400&&r.status<500)throw new o.tk(r)}c.Vy.error(r,i),c.Vy.isDebugging&&n.window.showErrorMessage(`GitLab request failed: ${r.response?.errors?.[0]?.message??r.message}`)}handleException(e,t,r){return c.Vy.error(e,r),e instanceof o.v3&&this.showAuthenticationErrorMessage(e,t),e}async showAuthenticationErrorMessage(e,t){if(e.reason===o.R.Unauthorized||e.reason===o.R.Forbidden){let r="Reauthenticate";await n.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating${e.reason===o.R.Forbidden?" to provide additional access":""}?`,r)===r&&(await t.reauthenticate(),this.resetCaches())}else n.window.showErrorMessage(e.message)}};y([(0,l.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getAccountForCommit",1),y([(0,l.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getAccountForEmail",1),y([(0,l.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getDefaultBranch",1),y([(0,l.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getIssueOrPullRequest",1),y([(0,l.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getPullRequestForBranch",1),y([(0,l.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getPullRequestForCommit",1),y([(0,l.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getRepositoryMetadata",1)},7516:(e,t,r)=>{r.r(t),r.d(t,{JiraIntegration:()=>JiraIntegration});var i=r(1646),s=r(5270),n=r(4064),o=r(9709),a=r(3758);let u=a.Mt[i.tp.Jira],l=Object.freeze({id:u.id,scopes:u.scopes});let JiraIntegration=class JiraIntegration extends o.On{authProvider=l;id=i.tp.Jira;key=this.id;name="Jira";get domain(){return u.domain}get apiBaseUrl(){return"https://api.atlassian.com"}_autolinks;async autolinks(){if(!(this.maybeConnected??await this.isConnected())||null==this._session||null==this._organizations||null==this._projects)return[];let e=this._autolinks?.get(this._session.accessToken);if(null!=e)return e;let t=[],r=this._organizations.get(this._session.accessToken);if(null!=r)for(let e of r){let r=this._projects.get(`${this._session.accessToken}:${e.id}`);if(null!=r)for(let i of r){let r=`${i.key}-`;t.push({prefix:r,url:`${e.url}/browse/${r}<num>`,alphanumeric:!1,ignoreCase:!1,title:`Open Issue ${r}<num> on ${e.name}`,type:"issue",description:`${e.name} Issue ${r}<num>`,descriptor:{...e}})}}return this._autolinks??=new Map,this._autolinks.set(this._session.accessToken,t),t}async getProviderAccountForResource({accessToken:e},t){let r=await this.getProvidersApi(),i=await r.getCurrentUserForResource(this.id,t.id,{accessToken:e});if(null!=i)return(0,a.tf)(i,this)}_organizations;async getProviderResourcesForUser({accessToken:e},t=!1){if(this._organizations??=new Map,null==this._organizations.get(e)||t){let t=await this.getProvidersApi(),r=await t.getJiraResourcesForCurrentUser({accessToken:e});this._organizations.set(e,null!=r?r.map(e=>({...e,key:e.id})):void 0)}return this._organizations.get(e)}_projects;async getProviderProjectsForResources({accessToken:e},t,r=!1){this._projects??=new Map;let i=[];if(r)i=t;else for(let r of t){let t=`${e}:${r.id}`;null==this._projects.get(t)&&i.push(r)}if(i.length>0){let t=await this.getProvidersApi(),r=await t.getJiraProjectsForResources(i.map(e=>e.id),{accessToken:e});for(let t of i){let i=r?.filter(e=>e.resourceId===t.id);null!=i&&this._projects.set(`${e}:${t.id}`,i.map(e=>({...e})))}}return t.reduce((t,r)=>{let i=this._projects.get(`${e}:${r.id}`);return null!=i&&t.push(...i),t},[])}async getProviderIssuesForProject({accessToken:e},t,r){let i;let n=await this.getProvidersApi(),o=async(r,i)=>{let s=await n.getIssuesForProject(this.id,t.name,t.resourceId,{authorLogin:i===a.mN.Author?r:void 0,assigneeLogins:i===a.mN.Assignee?[r]:void 0,mentionLogin:i===a.mN.Mention?r:void 0,accessToken:e});return s?.map(e=>a.oH(e,this,i)).filter(e=>void 0!==e)};if(r?.user!=null&&r.filters.length>0){let e=Promise.allSettled(r.filters.map(e=>o(r.user,e)));i=[...(0,s.Bq)((0,s.x1)(await e,e=>"fulfilled"===e.status&&null!=e.value?e.value:void 0))];let t=new Map;for(let e of i)if(t.has(e.issue.id)){let r=t.get(e.issue.id);r.reasons=[...r.reasons,...e.reasons]}else t.set(e.issue.id,e);return[...t.values()]}return i=await n.getIssuesForProject(this.id,t.name,t.resourceId,{accessToken:e}),i?.map(e=>a.oH(e,this)).filter(e=>void 0!==e)}async searchProviderMyIssues(e,t,r){let i=t??await this.getProviderResourcesForUser(e);if(!i)return;let s=await this.getProvidersApi(),o=[];for(let t of i)try{let r;let i=(await this.getProviderAccountForResource(e,t))?.username,n=!1,u=0;do{let l=await s.getIssuesForResourceForCurrentUser(this.id,t.id,{accessToken:e.accessToken,cursor:r});u+=1,n=l.paging?.more??!1,r=l.paging?.cursor;let c=l.values.map(e=>(0,a.oH)(e,this,void 0,i)).filter(e=>null!=e);c.length>0&&o.push(...c)}while(u<10&&n)}catch(e){n.Vy.error(e,"searchProviderMyIssues")}return o}async getProviderIssueOrPullRequest(e,t,r){let i=await this.getProvidersApi(),s=(await this.getProviderAccountForResource(e,t))?.username,n=await i.getIssue(this.id,{resourceId:t.id,number:r},{accessToken:e.accessToken});return null!=n?a.oH(n,this,void 0,s)?.issue:void 0}async getProviderIssue(e,t,r){let i=await this.getProvidersApi(),s=(await this.getProviderAccountForResource(e,t))?.username,n=await i.getIssue(this.id,{resourceId:t.id,number:r},{accessToken:e.accessToken}),o=null!=n?a.oH(n,this,void 0,s)?.issue:void 0;return null!=o?{...o,type:"issue"}:void 0}async providerOnConnect(){if(this._autolinks=void 0,null==this._session)return;let e=this.container.storage.get(`jira:${this._session.accessToken}:organizations`),t=this.container.storage.get(`jira:${this._session.accessToken}:projects`),r=e?.data?.map(e=>({...e})),i=t?.data?.map(e=>({...e}));for(let s of(null==e&&(r=await this.getProviderResourcesForUser(this._session,!0),await this.container.storage.deleteWithPrefix("jira"),await this.container.storage.store(`jira:${this._session.accessToken}:organizations`,{v:1,timestamp:Date.now(),data:r})),this._organizations??=new Map,this._organizations.set(this._session.accessToken,r),null==t&&r?.length&&(i=await this.getProviderProjectsForResources(this._session,r),await this.container.storage.store(`jira:${this._session.accessToken}:projects`,{v:1,timestamp:Date.now(),data:i})),this._projects??=new Map,i??[])){let e=`${this._session.accessToken}:${s.resourceId}`,t=this._projects.get(e);null==t?this._projects.set(e,[s]):t.push(s)}}providerOnDisconnect(){this._organizations=void 0,this._projects=void 0,this._autolinks=void 0}}},8554:(e,t,r)=>{r.r(t),r.d(t,{ProvidersApi:()=>ProvidersApi});var i=r(7223),s=r(2856),n=r(4839),o=r.n(n),a=r(1398),u=r(1646),l=r(4039),c=r(7603),d=r(3758);let ProvidersApi=class ProvidersApi{constructor(e,t){this.container=e,this.authenticationService=t;let r=(0,i.cQ)(),n=`${e.debugging?"GitLens-Debug":e.prerelease?"GitLens-Pre":"GitLens"}/${e.version} (${a.env.appName}/${a.version}; ${(0,s.uo)()})`,l=async({url:e,...t})=>h(await (0,i.hd)(e,{agent:r,...t,headers:{"User-Agent":n,...t.headers}})),c=o()({request:l});this.providers={[u.Q7.GitHub]:{...d.Mt[u.Q7.GitHub],provider:c.github,getCurrentUserFn:c.github.getCurrentUser.bind(c.github),getPullRequestsForReposFn:c.github.getPullRequestsForRepos.bind(c.github),getPullRequestsForUserFn:c.github.getPullRequestsAssociatedWithUser.bind(c.github),getIssuesForReposFn:c.github.getIssuesForRepos.bind(c.github)},[u.PY.GitHubEnterprise]:{...d.Mt[u.PY.GitHubEnterprise],provider:c.github,getCurrentUserFn:c.github.getCurrentUser.bind(c.github),getPullRequestsForReposFn:c.github.getPullRequestsForRepos.bind(c.github),getPullRequestsForUserFn:c.github.getPullRequestsAssociatedWithUser.bind(c.github),getIssuesForReposFn:c.github.getIssuesForRepos.bind(c.github)},[u.Q7.GitLab]:{...d.Mt[u.Q7.GitLab],provider:c.gitlab,getCurrentUserFn:c.gitlab.getCurrentUser.bind(c.gitlab),getPullRequestsForReposFn:c.gitlab.getPullRequestsForRepos.bind(c.gitlab),getPullRequestsForRepoFn:c.gitlab.getPullRequestsForRepo.bind(c.gitlab),getPullRequestsForUserFn:c.gitlab.getPullRequestsAssociatedWithUser.bind(c.gitlab),getIssueFn:c.gitlab.getIssue.bind(c.gitlab),getIssuesForReposFn:c.gitlab.getIssuesForRepos.bind(c.gitlab),getIssuesForRepoFn:c.gitlab.getIssuesForRepo.bind(c.gitlab),mergePullRequestFn:c.gitlab.mergePullRequest.bind(c.gitlab)},[u.PY.GitLabSelfHosted]:{...d.Mt[u.PY.GitLabSelfHosted],provider:c.gitlab,getCurrentUserFn:c.gitlab.getCurrentUser.bind(c.gitlab),getPullRequestsForReposFn:c.gitlab.getPullRequestsForRepos.bind(c.gitlab),getPullRequestsForRepoFn:c.gitlab.getPullRequestsForRepo.bind(c.gitlab),getPullRequestsForUserFn:c.gitlab.getPullRequestsAssociatedWithUser.bind(c.gitlab),getIssuesForReposFn:c.gitlab.getIssuesForRepos.bind(c.gitlab),getIssuesForRepoFn:c.gitlab.getIssuesForRepo.bind(c.gitlab)},[u.Q7.Bitbucket]:{...d.Mt[u.Q7.Bitbucket],provider:c.bitbucket,getCurrentUserFn:c.bitbucket.getCurrentUser.bind(c.bitbucket),getPullRequestsForReposFn:c.bitbucket.getPullRequestsForRepos.bind(c.bitbucket),getPullRequestsForUserFn:c.bitbucket.getPullRequestsForUser.bind(c.bitbucket),getPullRequestsForRepoFn:c.bitbucket.getPullRequestsForRepo.bind(c.bitbucket)},[u.Q7.AzureDevOps]:{...d.Mt[u.Q7.AzureDevOps],provider:c.azureDevOps,getCurrentUserFn:c.azureDevOps.getCurrentUser.bind(c.azureDevOps),getCurrentUserForInstanceFn:c.azureDevOps.getCurrentUserForInstance.bind(c.azureDevOps),getAzureResourcesForUserFn:c.azureDevOps.getOrgsForUser.bind(c.azureDevOps),getAzureProjectsForResourceFn:c.azureDevOps.getAzureProjects.bind(c.azureDevOps),getPullRequestsForReposFn:c.azureDevOps.getPullRequestsForRepos.bind(c.azureDevOps),getPullRequestsForRepoFn:c.azureDevOps.getPullRequestsForRepo.bind(c.azureDevOps),getPullRequestsForAzureProjectsFn:c.azureDevOps.getPullRequestsForProjects.bind(c.azureDevOps),getIssuesForAzureProjectFn:c.azureDevOps.getIssuesForAzureProject.bind(c.azureDevOps),getReposForAzureProjectFn:c.azureDevOps.getReposForAzureProject.bind(c.azureDevOps)},[u.tp.Jira]:{...d.Mt[u.tp.Jira],provider:c.jira,getCurrentUserForResourceFn:c.jira.getCurrentUserForResource.bind(c.jira),getJiraResourcesForCurrentUserFn:c.jira.getJiraResourcesForCurrentUser.bind(c.jira),getJiraProjectsForResourcesFn:c.jira.getJiraProjectsForResources.bind(c.jira),getIssueFn:c.jira.getIssue.bind(c.jira),getIssuesForProjectFn:c.jira.getIssuesForProject.bind(c.jira),getIssuesForResourceForCurrentUserFn:c.jira.getIssuesForResourceForCurrentUser.bind(c.jira)},[u.tp.Trello]:{...d.Mt[u.tp.Trello],provider:c.trello}}}providers;getScopesForProvider(e){return this.providers[e]?.scopes}getProviderDomain(e){return this.providers[e]?.domain}getProviderPullRequestsPagingMode(e){return this.providers[e]?.pullRequestsPagingMode}getProviderIssuesPagingMode(e){return this.providers[e]?.issuesPagingMode}providerSupportsPullRequestFilters(e,t){return this.providers[e]?.supportedPullRequestFilters!=null&&t.every(t=>this.providers[e]?.supportedPullRequestFilters?.includes(t))}providerSupportsIssueFilters(e,t){return this.providers[e]?.supportedIssueFilters!=null&&t.every(t=>this.providers[e]?.supportedIssueFilters?.includes(t))}isRepoIdsInput(e){return null!=e&&Array.isArray(e)&&e.every(e=>"string"==typeof e||"number"==typeof e)}async getProviderToken(e,t){let r=null==e.domain||null==e.scopes?void 0:{domain:e.domain,scopes:e.scopes};try{let i=await this.authenticationService.get(e.id);return(await i.getSession(r,{createIfNeeded:t?.createSessionIfNeeded}))?.accessToken}catch{return}}getAzurePATForOAuthToken(e){return(0,c.K3)(`PAT:${e}`)}async ensureProviderTokenAndFunction(e,t,r){let i=this.providers[e];if(null==i)throw Error(`Provider with id ${e} not registered`);let s=r??await this.getProviderToken(i);if(null==s)throw Error(`Not connected to provider ${e}`);if(null==i[t])throw Error(`Provider with id ${e} does not support function: ${t}`);return{provider:i,token:s}}handleProviderError(e,t,r){if(null==this.providers[e])throw Error(`Provider with id ${e} not registered`);if(e===u.tp.Jira&&r?.response?.status!=null){if(401===r.response.status)throw new l.v3(e,l.R.Forbidden,r);if(429===r.response.status){let e;let i=r.response.headers?.["x-ratelimit-reset"];throw null!=i&&Number.isNaN(e=parseInt(i,10))&&(e=void 0),new l.HG(r,t,e)}if(r.response.status>=400&&r.response.status<500)throw new l.tk(r)}throw r}async getPagedResult(e,t,r,i,s="{}",n=!1){let o;try{o=JSON.parse(s)}catch{o={}}let a=o.value,u=o.type,l={};"page"===u?l={page:a}:"cursor"===u&&(l={cursor:a});let c={...t,...l};try{let e=await r?.(c,{token:i,isPAT:n});if(null==e)return{values:[]};let t=e.pageInfo?.hasNextPage??!1,s="{}";return e.pageInfo?.endCursor!=null?s=JSON.stringify({value:e.pageInfo?.endCursor,type:"cursor"}):e.pageInfo?.nextPage!=null&&(s=JSON.stringify({value:e.pageInfo?.nextPage,type:"page"})),{values:e.data,paging:{cursor:s,more:t}}}catch(t){return this.handleProviderError(e.id,i,t)}}async getCurrentUser(e,t){let{provider:r,token:i}=await this.ensureProviderTokenAndFunction(e,"getCurrentUserFn",t?.accessToken);try{return(await r.getCurrentUserFn?.({},{token:i,isPAT:t?.isPAT}))?.data}catch(t){return this.handleProviderError(e,i,t)}}async getCurrentUserForInstance(e,t,r){let{provider:i,token:s}=await this.ensureProviderTokenAndFunction(e,"getCurrentUserForInstanceFn",r?.accessToken);return(await i.getCurrentUserForInstanceFn?.({namespace:t},{token:s,isPAT:r?.isPAT}))?.data}async getCurrentUserForResource(e,t,r){let{provider:i,token:s}=await this.ensureProviderTokenAndFunction(e,"getCurrentUserForResourceFn",r?.accessToken);try{return(await i.getCurrentUserForResourceFn?.({resourceId:t},{token:s}))?.data}catch(t){return this.handleProviderError(e,s,t)}}async getJiraResourcesForCurrentUser(e){let{provider:t,token:r}=await this.ensureProviderTokenAndFunction(u.tp.Jira,"getJiraResourcesForCurrentUserFn",e?.accessToken);try{return(await t.getJiraResourcesForCurrentUserFn?.({token:r}))?.data}catch(e){return this.handleProviderError(u.tp.Jira,r,e)}}async getAzureResourcesForUser(e,t){let{provider:r,token:i}=await this.ensureProviderTokenAndFunction(u.Q7.AzureDevOps,"getAzureResourcesForUserFn",t?.accessToken);try{return(await r.getAzureResourcesForUserFn?.({userId:e},{token:i}))?.data}catch(e){return this.handleProviderError(u.Q7.AzureDevOps,i,e)}}async getJiraProjectsForResources(e,t){let{provider:r,token:i}=await this.ensureProviderTokenAndFunction(u.tp.Jira,"getJiraProjectsForResourcesFn",t?.accessToken);try{return(await r.getJiraProjectsForResourcesFn?.({resourceIds:e},{token:i}))?.data}catch(e){return this.handleProviderError(u.tp.Jira,i,e)}}async getAzureProjectsForResource(e,t){let{provider:r,token:i}=await this.ensureProviderTokenAndFunction(u.Q7.AzureDevOps,"getAzureProjectsForResourceFn",t?.accessToken),s=t?.isPAT?i:this.getAzurePATForOAuthToken(i);try{return await this.getPagedResult(r,{namespace:e,...t},r.getAzureProjectsForResourceFn,s,t?.cursor,!0)}catch(e){return this.handleProviderError(u.Q7.AzureDevOps,i,e)}}async getReposForAzureProject(e,t,r){let{provider:i,token:s}=await this.ensureProviderTokenAndFunction(u.Q7.AzureDevOps,"getReposForAzureProjectFn",r?.accessToken);return this.getPagedResult(i,{namespace:e,project:t,...r},i.getReposForAzureProjectFn,s,r?.cursor)}async getPullRequestsForRepos(e,t,r){let{provider:i,token:s}=await this.ensureProviderTokenAndFunction(e,"getPullRequestsForReposFn",r?.accessToken);return this.getPagedResult(i,{...this.isRepoIdsInput(t)?{repoIds:t}:{repos:t},...r},i.getPullRequestsForReposFn,s,r?.cursor)}async getPullRequestsForRepo(e,t,r){let{provider:i,token:s}=await this.ensureProviderTokenAndFunction(e,"getPullRequestsForRepoFn",r?.accessToken);return this.getPagedResult(i,{repo:t,...r},i.getPullRequestsForRepoFn,s,r?.cursor)}async getPullRequestsForUser(e,t,r){let{provider:i,token:s}=await this.ensureProviderTokenAndFunction(e,"getPullRequestsForUserFn",r?.accessToken);return this.getPagedResult(i,{...e===u.Q7.Bitbucket?{userId:t}:{username:t},...r},i.getPullRequestsForUserFn,s,r?.cursor)}async getPullRequestsForAzureProjects(e,t){let{provider:r,token:i}=await this.ensureProviderTokenAndFunction(u.Q7.AzureDevOps,"getPullRequestsForAzureProjectsFn",t?.accessToken),s=t?.isPAT?i:this.getAzurePATForOAuthToken(i);try{return(await r.getPullRequestsForAzureProjectsFn?.({projects:e,...t},{token:s,isPAT:!0}))?.data}catch(e){return this.handleProviderError(u.Q7.AzureDevOps,i,e)}}async mergePullRequest(e,t,r){let{provider:i,token:s}=await this.ensureProviderTokenAndFunction(e,"mergePullRequestFn"),n=t.refs?.head;if(null==n)return!1;try{return await i.mergePullRequestFn?.({pullRequest:{headRef:{oid:n.sha},id:t.id,number:Number.parseInt(t.id,10),repository:{id:t.repository.repo,name:t.repository.repo,owner:{login:t.repository.owner}}},...r},{token:s}),!0}catch(t){return this.handleProviderError(e,s,t)}}async getIssuesForRepos(e,t,r){let{provider:i,token:s}=await this.ensureProviderTokenAndFunction(e,"getIssuesForReposFn",r?.accessToken);return this.getPagedResult(i,{...this.isRepoIdsInput(t)?{repoIds:t}:{repos:t},...r},i.getIssuesForReposFn,s,r?.cursor)}async getIssuesForRepo(e,t,r){let{provider:i,token:s}=await this.ensureProviderTokenAndFunction(e,"getIssuesForRepoFn",r?.accessToken);return this.getPagedResult(i,{repo:t,...r},i.getIssuesForRepoFn,s,r?.cursor)}async getIssuesForAzureProject(e,t,r){let{provider:i,token:s}=await this.ensureProviderTokenAndFunction(u.Q7.AzureDevOps,"getIssuesForAzureProjectFn",r?.accessToken);return this.getPagedResult(i,{namespace:e,project:t,...r},i.getIssuesForAzureProjectFn,s,r?.cursor)}async getIssuesForProject(e,t,r,i){let{provider:s,token:n}=await this.ensureProviderTokenAndFunction(e,"getIssuesForProjectFn",i?.accessToken);try{let e=await s.getIssuesForProjectFn?.({projectKey:t,resourceId:r,...i},{token:n});return e?.data}catch(t){return this.handleProviderError(e,n,t)}}async getIssuesForResourceForCurrentUser(e,t,r){let{provider:i,token:s}=await this.ensureProviderTokenAndFunction(e,"getIssuesForResourceForCurrentUserFn",r?.accessToken);return this.getPagedResult(i,{resourceId:t},i.getIssuesForResourceForCurrentUserFn,s,r?.cursor)}async getIssue(e,t,r){let{provider:i,token:s}=await this.ensureProviderTokenAndFunction(e,"getIssueFn",r?.accessToken);try{let e=await i.getIssueFn?.(t,{token:s});return e?.data}catch(t){return this.handleProviderError(e,s,t)}}};async function h(e){let t=e.headers.get("content-type")||"",r=null;if(t.startsWith("application/json")){let t=await e.text();r=t.trim().length>0?JSON.parse(t):null}else if(t.startsWith("text/")||""===t)r=await e.text();else if(t.startsWith("application/vnd.github.raw+json"))r=await e.arrayBuffer();else throw Error(`Unsupported content-type: ${t}`);let i={body:r,headers:Object.fromEntries(e.headers.entries()),status:e.status,statusText:e.statusText};if(!e.ok){let t=Error(e.statusText);throw Object.assign(t,{response:i}),t}return i}}};