exports.id=53,exports.ids=[53],exports.modules={6332:(e,t,i)=>{i.r(t),i.d(t,{AIProviderService:()=>AIProviderService,getMaxCharacters:()=>W,getOrPromptApiKey:()=>B,showDiffTruncationWarning:()=>j});var n=i(1398),o=i(4039),a=i(315),r=i(5302),s=i(4931),d=i(2251),l=i(3408),c=i(3156);async function u(e,t){let i;let o=await (await e.ai)?.getModels()??[],a=[];for(let e of o){if(e.hidden)continue;i!==e.provider.id&&(i=e.provider.id,a.push({label:e.provider.name,kind:n.QuickPickItemKind.Separator}));let o=e.provider.id===t?.provider&&e.id===t?.model;a.push({label:e.name,iconPath:new n.ThemeIcon(o?"check":"blank"),model:e,picked:o})}let r=n.window.createQuickPick();r.ignoreFocusOut=(0,c.dW)();let s=[],u={iconPath:new n.ThemeIcon("clear-all"),tooltip:"Reset AI Keys..."};try{return await new Promise(e=>{s.push(r.onDidHide(()=>e(void 0)),r.onDidAccept(()=>{0!==r.activeItems.length&&e(r.activeItems[0])}),r.onDidTriggerButton(e=>{e===u&&(0,l.RS)(d.d.ResetAIKey)})),r.title="Choose AI Model",r.placeholder="Select an AI model to use",r.matchOnDescription=!0,r.matchOnDetail=!0,r.buttons=[u],r.items=a,r.show()})}finally{r.dispose(),s.forEach(e=>void e.dispose())}}var m=i(471),p=i(7603),h=i(1499),g=i(7223),f=i(5270);let v="You are an advanced AI programming assistant",y=`You are tasked with summarizing code changes into a concise but meaningful commit message. You will be provided with a code diff and optional additional context. Your goal is to analyze the changes and create a clear, informative commit message that accurately represents the modifications made to the code.

First, examine the following code changes provided in Git diff format:
<~~diff~~>
\${diff}
</~~diff~~>

Now, if provided, use this context to understand the motivation behind the changes and any relevant background information:
<~~additional-context~~>
\${context}
</~~additional-context~~>

To create an effective commit message, follow these steps:

1. Carefully analyze the diff and context, focusing on:
   - The purpose and rationale of the changes
   - Any problems addressed or benefits introduced
   - Any significant logic changes or algorithmic improvements
2. Ensure the following when composing the commit message:
   - Emphasize the 'why' of the change, its benefits, or the problem it addresses
   - Use an informal yet professional tone
   - Use a future-oriented manner, third-person singular present tense (e.g., 'Fixes', 'Updates', 'Improves', 'Adds', 'Removes')
   - Be clear and concise
   - Synthesize only meaningful information from the diff and context
   - Avoid outputting code, specific code identifiers, names, or file names unless crucial for understanding
   - Avoid repeating information, broad generalities, and unnecessary phrases like "this", "this commit", or "this change"
3. Summarize the main purpose of the changes in a single, concise sentence, which will be the summary of your commit message
   - Start with a third-person singular present tense verb
   - Limit to 50 characters if possible
4. If necessary, provide a brief explanation of the changes, which will be the body of your commit message
   - Add line breaks for readability and to separate independent ideas
   - Focus on the "why" rather than the "what" of the changes.
5. If the changes are related to a specific issue or ticket, include the reference (e.g., "Fixes #123" or "Relates to JIRA-456") at the end of the commit message.

Don't over explain and write your commit message summary inside <summary> tags and your commit message body inside <body> tags and include no other text.

Example format:
<summary>
Implements user authentication feature
</summary>
<body>
Adds login and registration endpoints
Updates user model to include password hashing
Integrates JWT for secure token generation

Fixes #789
</body>

\${instructions}

Now, based on the provided code diff and any additional context, create a concise but meaningful commit message following the instructions above.`,w="You are an advanced AI programming assistant",x=`You are tasked with summarizing code changes into a concise and meaningful title and description. You will be provided with a code diff and optional additional context. Your goal is to analyze the changes and create a clear, informative title and description that accurately represents the modifications made to the code.

First, examine the following code changes provided in Git diff format:
<~~diff~~>
\${diff}
</~~diff~~>

Now, if provided, use this context to understand the motivation behind the changes and any relevant background information:
<~~additional-context~~>
\${context}
</~~additional-context~~>

To create an effective title and description, follow these steps:

1. Carefully analyze the diff and context, focusing on:
   - The purpose and rationale of the changes
   - Any problems addressed or benefits introduced
   - Any significant logic changes or algorithmic improvements
2. Ensure the following when composing the title and description:
   - Emphasize the 'why' of the change, its benefits, or the problem it addresses
   - Use an informal yet professional tone
   - Use a future-oriented manner, third-person singular present tense (e.g., 'Fixes', 'Updates', 'Improves', 'Adds', 'Removes')
   - Be clear and concise
   - Synthesize only meaningful information from the diff and context
   - Avoid outputting code, specific code identifiers, names, or file names unless crucial for understanding
   - Avoid repeating information, broad generalities, and unnecessary phrases like "this", "this commit", or "this change"
3. Summarize the main purpose of the changes in a single, concise sentence, which will be the title.
4. If necessary, provide a brief explanation of the changes, which will be the description.
   - Add line breaks for readability and to separate independent ideas
   - Focus on the "why" rather than the "what" of the changes.

Write your title inside <summary> tags and your description inside <body> tags and include no other text.

Example format:
<summary>
Implements user authentication feature
</summary>
<body>
Adds login and registration endpoints
Updates user model to include password hashing
Integrates JWT for secure token generation
</body>

\${instructions}

Now, based on the provided code diff and any additional context, create a concise but meaningful title and description following the instructions above.`,k="You are an advanced AI programming assistant",b=`You are tasked with summarizing code changes into a concise and meaningful code review title and description. You will be provided with a code diff and optional additional context. Your goal is to analyze the changes and create a clear, informative code review title and description that accurately represents the modifications made to the code.

First, examine the following code changes provided in Git diff format:
<~~diff~~>
\${diff}
</~~diff~~>

Now, if provided, use this context to understand the motivation behind the changes and any relevant background information:
<~~additional-context~~>
\${context}
</~~additional-context~~>

To create an effective title and description, follow these steps:

1. Carefully analyze the diff and context, focusing on:
   - The purpose and rationale of the changes
   - Any problems addressed or benefits introduced
   - Any significant logic changes or algorithmic improvements
2. Ensure the following when composing the title and description:
   - Emphasize the 'why' of the change, its benefits, or the problem it addresses
   - Use an informal yet professional tone
   - Use a future-oriented manner, third-person singular present tense (e.g., 'Fixes', 'Updates', 'Improves', 'Adds', 'Removes')
   - Be clear and concise
   - Synthesize only meaningful information from the diff and context
   - Avoid outputting code, specific code identifiers, names, or file names unless crucial for understanding
   - Avoid repeating information, broad generalities, and unnecessary phrases like "this", "this commit", or "this change"
3. Summarize the main purpose of the changes in a single, concise sentence, which will be the title.
4. If necessary, provide a brief explanation of the changes, which will be the description.
   - Add line breaks for readability and to separate independent ideas
   - Focus on the "why" rather than the "what" of the changes.

Write your title inside <summary> tags and your description inside <body> tags and include no other text.

Example format:
<summary>
Implements user authentication feature
</summary>
<body>
Adds login and registration endpoints
Updates user model to include password hashing
Integrates JWT for secure token generation
</body>

\${instructions}

Now, based on the provided code diff and any additional context, create a concise but meaningful code review title and description following the instructions above.`,T="You are an advanced AI programming assistant",P=`You are tasked with creating clear, technical summaries of code changes that help reviewers understand the modifications and their implications. You will analyze a code diff and the author-provided message to produce a structured summary that captures the essential aspects of the changes.

First, examine the following code changes provided in Git diff format:
<~~diff~~>
\${diff}
</~~diff~~>

Now, review the author-provided message to help understand the motivation behind the changes and any relevant background information:
<~~message~~>
\${message}
</~~message~~>

Analysis Instructions:
1. Examine the technical changes and their direct implications
2. Consider the scope of changes (small fix vs. major modification)
3. Identify any structural or behavioral changes
4. Look for potential side effects or dependencies
5. Note any obvious testing implications

Write your summary inside <summary> and <body> tags in the following structured markdown format, text in [] brackets should be replaced with your own text, if applicable, not including the brackets:

<summary>
[Concise, one-line description of the change]

[2-3 sentences explaining the core changes and their purpose]
</summary>
<body>
### Changes
- [Key technical modifications]
- [Important structural changes]
- [Modified components/files]

### Impact
- [Behavioral changes]
- [Dependencies affected]
- [Breaking changes, if any]
- [Performance implications, if apparent]
</body>

Guidelines:
- Keep the initial description under 80 characters
- Use clear, technical language
- Focus on observable changes from the diff
- Highlight significant code structure changes
- Base conclusions only on the code diff and message
- Avoid assumptions about business context
- Include specific file/component names only when relevant

\${instructions}

Based on the provided code diff and message, create a focused technical summary following the format above.`;let OpenAICompatibleProvider=class OpenAICompatibleProvider{constructor(e){this.container=e}dispose(){}async getApiKey(){let{keyUrl:e,keyValidator:t}=this.config;return B(this.container.storage,{id:this.id,name:this.name,validator:null!=t?e=>t.test(e):()=>!0,url:e})}getHeaders(e,t,i){return{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${i}`}}async generateMessage(e,t,i,n,o){let a=await this.getApiKey();if(null!=a)try{let[r,s]=await this.fetch(e,a,(e,a)=>{let r={role:"system",content:n.systemPrompt},s=[{role:"user",content:(0,p.GW)(n.userPrompt,{diff:t.substring(0,e),context:o?.context??"",instructions:n.customInstructions??""})}];return i["retry.count"]=a,i["input.length"]=(i["input.length"]??0)+(0,f.cz)([r,...s],e=>e.content.length),[r,...s]},4096,o?.cancellation);return t.length>s&&j(s,e),r}catch(e){throw Error(`Unable to generate ${n.type} message: ${e.message}`)}}async generateDraftMessage(e,t,i,n){let o;return null!=n&&({codeSuggestion:o,...n}=n??{}),this.generateMessage(e,t,i,o?{type:"code-suggestion",systemPrompt:k,userPrompt:b,customInstructions:h.H.get("ai.generateCodeSuggestMessage.customInstructions")}:{type:"cloud-patch",systemPrompt:w,userPrompt:x,customInstructions:h.H.get("ai.generateCloudPatchMessage.customInstructions")},n)}async generateCommitMessage(e,t,i,n){return this.generateMessage(e,t,i,{type:"commit",systemPrompt:v,userPrompt:y,customInstructions:h.H.get("ai.generateCommitMessage.customInstructions")},n)}async explainChanges(e,t,i,n,o){let a=await this.getApiKey();if(null!=a)try{let[r,s]=await this.fetch(e,a,(e,o)=>{let a={role:"system",content:T},r=[{role:"user",content:(0,p.GW)(P,{diff:i.substring(0,e),message:t,instructions:h.H.get("ai.explainChanges.customInstructions")??""})}];return n["retry.count"]=o,n["input.length"]=(n["input.length"]??0)+(0,f.cz)([a,...r],e=>e.content.length),[a,...r]},4096,o?.cancellation);return i.length>s&&j(s,e),r}catch(e){throw Error(`Unable to explain changes: ${e.message}`)}}async fetch(e,t,i,n,o){let a=0,r=W(e,2600);for(;;){let s={model:e.id,messages:i(r,a),stream:!1,max_tokens:Math.min(n,e.maxTokens.output)},d=await this.fetchCore(e,t,s,o);if(!d.ok){let t;if(404===d.status)throw Error(`Your API key doesn't seem to have access to the selected '${e.id}' model`);if(429===d.status)throw Error(`(${this.name}:${d.status}) Too many requests (rate limit exceeded) or your API key is associated with an expired trial`);try{t=await d.json()}catch{}if(a++<2&&t?.error?.code==="context_length_exceeded"){r-=500*a;continue}throw Error(`(${this.name}:${d.status}) ${t?.error?.message||d.statusText}`)}let l=await d.json();return[l.choices[0].message.content?.trim()??"",r]}}async fetchCore(e,t,i,n){let a;null!=n&&(a=new AbortController,n.onCancellationRequested(()=>a?.abort()));let r=this.getUrl(e);try{return await (0,g.hd)(r,{headers:{Accept:"application/json","Content-Type":"application/json",...this.getHeaders(e,r,t)},method:"POST",body:JSON.stringify(i),signal:a?.signal})}catch(e){if("AbortError"===e.name)throw new o.AL(e);throw e}}};let A={id:"anthropic",name:"Anthropic"},I=[{id:"claude-3-5-sonnet-latest",name:"Claude 3.5 Sonnet",maxTokens:{input:204800,output:8192},provider:A},{id:"claude-3-5-sonnet-20240620",name:"Claude 3.5 Sonnet",maxTokens:{input:204800,output:8192},provider:A,hidden:!0},{id:"claude-3-5-haiku-latest",name:"Claude 3.5 Haiku",maxTokens:{input:204800,output:8192},provider:A},{id:"claude-3-5-haiku-20241022",name:"Claude 3.5 Haiku",maxTokens:{input:204800,output:8192},provider:A,hidden:!0},{id:"claude-3-opus-latest",name:"Claude 3 Opus",maxTokens:{input:204800,output:4096},provider:A},{id:"claude-3-opus-20240229",name:"Claude 3 Opus",maxTokens:{input:204800,output:4096},provider:A,hidden:!0},{id:"claude-3-sonnet-20240229",name:"Claude 3 Sonnet",maxTokens:{input:204800,output:4096},provider:A},{id:"claude-3-haiku-20240307",name:"Claude 3 Haiku",maxTokens:{input:204800,output:4096},provider:A,default:!0},{id:"claude-2.1",name:"Claude 2.1",maxTokens:{input:204800,output:4096},provider:A}];let AnthropicProvider=class AnthropicProvider extends OpenAICompatibleProvider{id=A.id;name=A.name;config={keyUrl:"https://console.anthropic.com/account/keys",keyValidator:/(?:sk-)?[a-zA-Z0-9-_]{32,}/};getModels(){return Promise.resolve(I)}getUrl(e){return"https://api.anthropic.com/v1/messages"}getHeaders(e,t,i){return{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${i}`,"x-api-key":i,"anthropic-version":"2023-06-01"}}async fetch(e,t,i,n,o){let a=0,r=W(e,2600);for(;;){let[s,...d]=i(r,a),l={model:e.id,messages:d,system:s.content,stream:!1,max_tokens:Math.min(n,e.maxTokens.output)},c=await this.fetchCore(e,t,l,o);if(!c.ok){let t;if(404===c.status)throw Error(`Your API key doesn't seem to have access to the selected '${e.id}' model`);if(429===c.status)throw Error(`(${this.name}:${c.status}) Too many requests (rate limit exceeded) or your API key is associated with an expired trial`);try{t=await c.json()}catch{}if(a++<2&&t?.error?.type==="invalid_request_error"&&t?.error?.message?.includes("prompt is too long")){r-=500*a;continue}throw Error(`(${this.name}:${c.status}) ${t?.error?.message||c.statusText})`)}return[(await c.json()).content.map(e=>e.text).join("\n").trim(),r]}}};let C={id:"gemini",name:"Google"},M=[{id:"gemini-2.0-flash-exp",name:"Gemini 2.0 Flash (Experimental)",maxTokens:{input:1048576,output:8192},provider:C},{id:"gemini-exp-1206",name:"Gemini Experimental 1206",maxTokens:{input:2097152,output:8192},provider:C},{id:"gemini-exp-1121",name:"Gemini Experimental 1121",maxTokens:{input:2097152,output:8192},provider:C},{id:"gemini-1.5-pro-latest",name:"Gemini 1.5 Pro",maxTokens:{input:2097152,output:8192},provider:C,default:!0},{id:"gemini-1.5-flash-latest",name:"Gemini 1.5 Flash",maxTokens:{input:1048576,output:8192},provider:C},{id:"gemini-1.5-flash-8b",name:"Gemini 1.5 Flash 8B",maxTokens:{input:1048576,output:8192},provider:C}];let GeminiProvider=class GeminiProvider extends OpenAICompatibleProvider{id=C.id;name=C.name;config={keyUrl:"https://aistudio.google.com/app/apikey"};getModels(){return Promise.resolve(M)}getUrl(e){return"https://generativelanguage.googleapis.com/v1beta/chat/completions"}fetchCore(e,t,i,n){if("max_tokens"in i){let{max_tokens:e,...t}=i;i=t}return super.fetchCore(e,t,i,n)}};let $={id:"github",name:"GitHub Models"},E=[{id:"o1-preview",name:"o1 preview",maxTokens:{input:128e3,output:32768},provider:$},{id:"o1-mini",name:"o1 mini",maxTokens:{input:128e3,output:65536},provider:$},{id:"gpt-4o",name:"GPT-4o",maxTokens:{input:128e3,output:16384},provider:$},{id:"gpt-4o-mini",name:"GPT-4o mini",maxTokens:{input:128e3,output:16384},provider:$},{id:"Phi-3.5-MoE-instruct",name:"Phi 3.5 MoE",maxTokens:{input:134144,output:4096},provider:$},{id:"Phi-3.5-mini-instruct",name:"Phi 3.5 mini",maxTokens:{input:134144,output:4096},provider:$},{id:"AI21-Jamba-1.5-Large",name:"Jamba 1.5 Large",maxTokens:{input:268288,output:4096},provider:$},{id:"AI21-Jamba-1.5-Mini",name:"Jamba 1.5 Mini",maxTokens:{input:268288,output:4096},provider:$}];let GitHubModelsProvider=class GitHubModelsProvider extends OpenAICompatibleProvider{id=$.id;name=$.name;config={keyUrl:"https://github.com/settings/tokens",keyValidator:/(?:ghp-)?[a-zA-Z0-9]{32,}/};getModels(){return Promise.resolve(E)}getUrl(e){return"https://models.inference.ai.azure.com/chat/completions"}};let G={id:"huggingface",name:"Hugging Face"},S=[{id:"meta-llama/Llama-3.2-11B-Vision-Instruct",name:"Meta Llama 3.2 11B Vision",maxTokens:{input:131072,output:4096},provider:G},{id:"Qwen/Qwen2.5-72B-Instruct",name:"Qwen 2.5 72B",maxTokens:{input:131072,output:4096},provider:G},{id:"NousResearch/Hermes-3-Llama-3.1-8B",name:"Nous Research Hermes 3",maxTokens:{input:131072,output:4096},provider:G},{id:"mistralai/Mistral-Nemo-Instruct-2407",name:"Mistral Nemo",maxTokens:{input:131072,output:4096},provider:G}];let HuggingFaceProvider=class HuggingFaceProvider extends OpenAICompatibleProvider{id=G.id;name=G.name;config={keyUrl:"https://huggingface.co/settings/tokens",keyValidator:/(?:hf_)?[a-zA-Z0-9]{32,}/};getModels(){return Promise.resolve(S)}getUrl(e){return`https://api-inference.huggingface.co/models/${e.id}/v1/chat/completions`}};let U={id:"openai",name:"OpenAI"},H=[{id:"o1-preview",name:"o1 preview",maxTokens:{input:128e3,output:32768},provider:U},{id:"o1-preview-2024-09-12",name:"o1 preview",maxTokens:{input:128e3,output:32768},provider:U,hidden:!0},{id:"o1-mini",name:"o1 mini",maxTokens:{input:128e3,output:65536},provider:U},{id:"o1-mini-2024-09-12",name:"o1 mini",maxTokens:{input:128e3,output:65536},provider:U,hidden:!0},{id:"gpt-4o",name:"GPT-4o",maxTokens:{input:128e3,output:16384},provider:U,default:!0},{id:"gpt-4o-2024-08-06",name:"GPT-4o",maxTokens:{input:128e3,output:16384},provider:U,hidden:!0},{id:"gpt-4o-2024-05-13",name:"GPT-4o",maxTokens:{input:128e3,output:4096},provider:U,hidden:!0},{id:"chatgpt-4o-latest",name:"GPT-4o",maxTokens:{input:128e3,output:16384},provider:U,hidden:!0},{id:"gpt-4o-mini",name:"GPT-4o mini",maxTokens:{input:128e3,output:16384},provider:U},{id:"gpt-4o-mini-2024-07-18",name:"GPT-4o mini",maxTokens:{input:128e3,output:16384},provider:U,hidden:!0},{id:"gpt-4-turbo",name:"GPT-4 Turbo",maxTokens:{input:128e3,output:4096},provider:U},{id:"gpt-4-turbo-2024-04-09",name:"GPT-4 Turbo preview (2024-04-09)",maxTokens:{input:128e3,output:4096},provider:U,hidden:!0},{id:"gpt-4-turbo-preview",name:"GPT-4 Turbo preview",maxTokens:{input:128e3,output:4096},provider:U},{id:"gpt-4-0125-preview",name:"GPT-4 0125 preview",maxTokens:{input:128e3,output:4096},provider:U,hidden:!0},{id:"gpt-4-1106-preview",name:"GPT-4 1106 preview",maxTokens:{input:128e3,output:4096},provider:U,hidden:!0},{id:"gpt-4",name:"GPT-4",maxTokens:{input:8192,output:4096},provider:U},{id:"gpt-4-0613",name:"GPT-4 0613",maxTokens:{input:8192,output:4096},provider:U,hidden:!0},{id:"gpt-4-32k",name:"GPT-4 32k",maxTokens:{input:32768,output:4096},provider:U,hidden:!0},{id:"gpt-4-32k-0613",name:"GPT-4 32k 0613",maxTokens:{input:32768,output:4096},provider:U,hidden:!0},{id:"gpt-3.5-turbo",name:"GPT-3.5 Turbo",maxTokens:{input:16385,output:4096},provider:U},{id:"gpt-3.5-turbo-0125",name:"GPT-3.5 Turbo 0125",maxTokens:{input:16385,output:4096},provider:U,hidden:!0},{id:"gpt-3.5-turbo-1106",name:"GPT-3.5 Turbo 1106",maxTokens:{input:16385,output:4096},provider:U,hidden:!0},{id:"gpt-3.5-turbo-16k",name:"GPT-3.5 Turbo 16k",maxTokens:{input:16385,output:4096},provider:U,hidden:!0}];let OpenAIProvider=class OpenAIProvider extends OpenAICompatibleProvider{id=U.id;name=U.name;config={keyUrl:"https://platform.openai.com/account/api-keys",keyValidator:/(?:sk-)?[a-zA-Z0-9]{32,}/};getModels(){return Promise.resolve(H)}getUrl(e){return h.H.get("ai.openai.url")||"https://api.openai.com/v1/chat/completions"}getHeaders(e,t,i){return t.includes(".azure.com")?{Accept:"application/json","Content-Type":"application/json","api-key":i}:super.getHeaders(e,t,i)}};let D={id:"vscode",name:"VS Code Provided"};let VSCodeAIProvider=class VSCodeAIProvider{constructor(e){this.container=e}id=D.id;_name;get name(){return this._name??D.name}dispose(){}async getModels(){return(await n.lm.selectChatModels()).map(z)}async getChatModel(e){let t=await n.lm.selectChatModels(e.selector);return t?.[0]}async generateMessage(e,t,i,o,a){let r,s;let d=await this.getChatModel(e);if(null==d)return;r=a?.cancellation==null?(s=new n.CancellationTokenSource).token:a.cancellation;let l=0,c=W(e,2600)-1e3;try{for(;;){let s=[n.LanguageModelChatMessage.User(o.systemPrompt),n.LanguageModelChatMessage.User((0,p.GW)(o.userPrompt,{diff:t.substring(0,c),context:a?.context??"",instructions:o.customInstructions??""}))];i["retry.count"]=l,i["input.length"]=(i["input.length"]??0)+(0,f.cz)(s,e=>e.content.length);try{let i=await d.sendRequest(s,{},r);t.length>c&&j(c,e);let n="";for await(let e of i.text)n+=e;return n.trim()}catch(i){let t=i instanceof Error?i.message:String(i);if(i instanceof Error&&"cause"in i&&i.cause instanceof Error&&(t+=`
${i.cause.message}`,l++<2&&i.cause.message.includes("exceeds token limit"))){c-=500*l;continue}throw Error(`Unable to generate ${o.type} message: (${(0,p.Lu)(e.provider.name)}:${i.code}) ${t}`)}}}finally{s?.dispose()}}async generateDraftMessage(e,t,i,n){let o;return null!=n&&({codeSuggestion:o,...n}=n??{}),this.generateMessage(e,t,i,o?{type:"code-suggestion",systemPrompt:k,userPrompt:b,customInstructions:h.H.get("ai.generateCodeSuggestMessage.customInstructions")}:{type:"cloud-patch",systemPrompt:w,userPrompt:x,customInstructions:h.H.get("ai.generateCloudPatchMessage.customInstructions")},n)}async generateCommitMessage(e,t,i,n){return this.generateMessage(e,t,i,{type:"commit",systemPrompt:v,userPrompt:y,customInstructions:h.H.get("ai.generateCommitMessage.customInstructions")},n)}async explainChanges(e,t,i,o,a){let r,s;let d=await this.getChatModel(e);if(null==d)return;r=a?.cancellation==null?(s=new n.CancellationTokenSource).token:a.cancellation;let l=0,c=W(e,3e3)-1e3;try{for(;;){let a=i.substring(0,c),s=[n.LanguageModelChatMessage.User(`${T}.

${(0,p.GW)(P,{diff:a,message:t,instructions:h.H.get("ai.explainChanges.customInstructions")??""})}`)];o["retry.count"]=l,o["input.length"]=(o["input.length"]??0)+(0,f.cz)(s,e=>e.content.length);try{let t=await d.sendRequest(s,{},r);i.length>c&&j(c,e);let n="";for await(let e of t.text)n+=e;return n.trim()}catch(i){let t=i instanceof Error?i.message:String(i);if(i instanceof Error&&"cause"in i&&i.cause instanceof Error&&(t+=`
${i.cause.message}`,l++<2&&i.cause.message.includes("exceeds token limit"))){c-=500*l;continue}throw Error(`Unable to explain changes: (${(0,p.Lu)(e.provider.name)}:${i.code}) ${t}`)}}}finally{s?.dispose()}}};function z(e){return{id:`${e.vendor}:${e.family}`,name:`${(0,p.ZH)(e.vendor)} ${e.name}`,vendor:e.vendor,selector:{vendor:e.vendor,family:e.family},maxTokens:{input:e.maxInputTokens,output:4096},provider:{id:D.id,name:(0,p.ZH)(e.vendor)}}}let _={id:"xai",name:"xAI"},O=[{id:"grok-beta",name:"Grok Beta",maxTokens:{input:131072,output:4096},provider:_,default:!0}];let xAIProvider=class xAIProvider extends OpenAICompatibleProvider{id=_.id;name=_.name;config={keyUrl:"https://console.x.ai/",keyValidator:/(?:xai-)?[a-zA-Z0-9]{32,}/};getModels(){return Promise.resolve(O)}getUrl(e){return"https://api.x.ai/v1/chat/completions"}};let F=new Map([...(0,c.Av)("language-models")?[["vscode",VSCodeAIProvider]]:[],["openai",OpenAIProvider],["anthropic",AnthropicProvider],["gemini",GeminiProvider],["github",GitHubModelsProvider],["huggingface",HuggingFaceProvider],["xai",xAIProvider]]);let AIProviderService=class AIProviderService{constructor(e){this.container=e}_provider;_model;dispose(){this._provider?.dispose()}get currentProviderId(){return this._provider?.id}getConfiguredModel(){let e=h.H.get("ai.model")??void 0;if(null!=e){let[t,i]=e.split(":");if(null!=t&&this.supports(t)&&(null!=i||"vscode"===t&&null!=(i=h.H.get("ai.vscode.model"))&&/^(.+):(.+)$/.test(i)))return{provider:t,model:i}}}async getModels(){let e=[...F.values()].map(e=>new e(this.container));return(await Promise.allSettled(e.map(e=>e.getModels()))).flatMap(e=>(0,m.Ro)(e,[]))}async getModel(e){let t=this.getConfiguredModel();if(!e?.force&&t?.provider!=null&&t?.model!=null){let e=await this.getOrUpdateModel(t.provider,t.model);if(null!=e)return e}if(e?.silent)return;let i=await u(this.container,t);if(null!=i)return this.getOrUpdateModel(i.model)}async getOrUpdateModel(e,t){let i,n;i="string"==typeof e?e:(n=e).provider.id;let o=!1;if(i!==this._provider?.id){o=!0,this._provider?.dispose();let e=F.get(i);if(null==e){this._provider=void 0,this._model=void 0;return}this._provider=new e(this.container)}if(null==n){if(null!=t&&t===this._model?.id)n=this._model;else if(o=!0,null==(n=(await this._provider.getModels())?.find(e=>e.id===t))){this._model=void 0;return}}else n.id!==this._model?.id&&(o=!0);return o&&(n.provider.id===D.id?(await h.H.updateEffective("ai.model","vscode"),await h.H.updateEffective("ai.vscode.model",n.id)):await h.H.updateEffective("ai.model",`${n.provider.id}:${n.id}`)),this._model=n,n}async generateCommitMessage(e,t,i){let a=await this.getChanges(e);if(null==a)return;let r=await this.getModel();if(null==r)return;let s=this._provider,d={type:"commitMessage","model.id":r.id,"model.provider.id":r.provider.id,"model.provider.name":r.provider.name,"retry.count":0},l={source:t.source};if(!await R(r,this.container.storage)){this.container.telemetry.sendEvent("ai/generate",{...d,"failed.reason":"user-declined"},l);return}if(i?.cancellation?.isCancellationRequested){this.container.telemetry.sendEvent("ai/generate",{...d,"failed.reason":"user-cancelled"},l);return}let c=s.generateCommitMessage(r,a,d,{cancellation:i?.cancellation,context:i?.context}),u=Date.now();try{let e=await (i?.progress!=null?n.window.withProgress(i.progress,()=>c):c);if(d["output.length"]=e?.length,this.container.telemetry.sendEvent("ai/generate",{...d,duration:Date.now()-u},l),null==e)return;return L(e)}catch(e){throw this.container.telemetry.sendEvent("ai/generate",{...d,duration:Date.now()-u,...e instanceof o.AL?{"failed.reason":"user-cancelled"}:{"failed.reason":"error","failed.error":String(e)}},l),e}}async generateDraftMessage(e,t,i){let a=await this.getChanges(e);if(null==a)return;let r=await this.getModel();if(null==r)return;let s=this._provider,d={type:"draftMessage",draftType:t.type,"model.id":r.id,"model.provider.id":r.provider.id,"model.provider.name":r.provider.name,"retry.count":0},l={source:t.source};if(!await R(r,this.container.storage)){this.container.telemetry.sendEvent("ai/generate",{...d,"failed.reason":"user-declined"},l);return}if(i?.cancellation?.isCancellationRequested){this.container.telemetry.sendEvent("ai/generate",{...d,"failed.reason":"user-cancelled"},l);return}let c=s.generateDraftMessage(r,a,d,{cancellation:i?.cancellation,context:i?.context,codeSuggestion:i?.codeSuggestion}),u=Date.now();try{let e=await (i?.progress!=null?n.window.withProgress(i.progress,()=>c):c);if(d["output.length"]=e?.length,this.container.telemetry.sendEvent("ai/generate",{...d,duration:Date.now()-u},l),null==e)return;return L(e)}catch(e){throw this.container.telemetry.sendEvent("ai/generate",{...d,duration:Date.now()-u,...e instanceof o.AL?{"failed.reason":"user-cancelled"}:{"failed.reason":"error","failed.error":String(e)}},l),e}}async getChanges(e,t){let i;if(Array.isArray(e))i=e.join("\n");else{let n=(0,r.Z6)(e)?e:this.container.git.getRepository(e);if(null==n)throw Error("Unable to find repository");let o=await this.container.git.getDiff(n.uri,s.id);if(!o?.contents&&(o=await this.container.git.getDiff(n.uri,s.SU),!o?.contents))throw Error("No changes to generate a commit message from.");if(t?.cancellation?.isCancellationRequested)return;i=o.contents}return i}async explainCommit(e,t,i){let r=await this.container.git.getDiff(e.repoPath,e.ref);if(!r?.contents)throw Error("No changes found to explain.");let s=await this.getModel();if(null==s)return;let d=this._provider,l={type:"change",changeType:t.type,"model.id":s.id,"model.provider.id":s.provider.id,"model.provider.name":s.provider.name,"retry.count":0},c={source:t.source};if(!await R(s,this.container.storage)){this.container.telemetry.sendEvent("ai/explain",{...l,"failed.reason":"user-declined"},c);return}let u=(0,a.WM)(e)?e:await this.container.git.getCommit(e.repoPath,e.ref);if(null==u)throw Error("Unable to find commit");if(u.hasFullDetails()||(await u.ensureFullDetails(),(0,a.aQ)(u)),i?.cancellation?.isCancellationRequested){this.container.telemetry.sendEvent("ai/explain",{...l,"failed.reason":"user-cancelled"},c);return}let m=d.explainChanges(s,u.message,r.contents,l,{cancellation:i?.cancellation}),p=Date.now();try{let e=await (i?.progress!=null?n.window.withProgress(i.progress,()=>m):m);if(l["output.length"]=e?.length,this.container.telemetry.sendEvent("ai/explain",{...l,duration:Date.now()-p},c),null==e)return;return L(e)}catch(e){throw this.container.telemetry.sendEvent("ai/explain",{...l,duration:Date.now()-p,...e instanceof o.AL?{"failed.reason":"user-cancelled"}:{"failed.reason":"error","failed.error":String(e)}},c),e}}async reset(e){let t,{_provider:i}=this;null==i&&(await this.getModel({silent:!0}),i=this._provider);let o={title:"Reset Current"},a={title:"Reset All"},r={title:"Cancel",isCloseAffordance:!0};if(t=e?a:null==i?await n.window.showInformationMessage("Do you want to reset all of the stored AI keys?",{modal:!0},a,r):await n.window.showInformationMessage(`Do you want to reset the stored key for the current provider (${i.name}) or reset all of the stored AI keys?`,{modal:!0},o,a,r),null!=i&&t===o)n.env.clipboard.writeText(await this.container.storage.getSecret(`gitlens.${i.id}.key`)??""),this.container.storage.deleteSecret(`gitlens.${i.id}.key`),this.container.storage.delete(`confirm:ai:tos:${i.id}`),this.container.storage.deleteWorkspace(`confirm:ai:tos:${i.id}`);else if(t===a){let e=[];for(let[t]of F)e.push(await this.container.storage.getSecret(`gitlens.${t}.key`));for(let[t]of(n.env.clipboard.writeText(e.join("\n")),F))this.container.storage.deleteSecret(`gitlens.${t}.key`);this.container.storage.deleteWithPrefix("confirm:ai:tos"),this.container.storage.deleteWorkspaceWithPrefix("confirm:ai:tos")}}supports(e){return F.has(e)}async switchModel(){await this.getModel({force:!0})}};async function R(e,t){if(t.get(`confirm:ai:tos:${e.provider.id}`,!1)||t.getWorkspace(`confirm:ai:tos:${e.provider.id}`,!1))return!0;let i={title:"Continue"},o={title:"Always for this Workspace"},a={title:"Always"},r=await n.window.showInformationMessage(`GitLens AI features require sending a diff of the code changes to ${e.provider.name} for analysis. This may contain sensitive information.

Do you want to continue?`,{modal:!0},i,o,a,{title:"Cancel",isCloseAffordance:!0});return r===i||(r===o?(t.storeWorkspace(`confirm:ai:tos:${e.provider.id}`,!0).catch(),!0):r===a&&(t.store(`confirm:ai:tos:${e.provider.id}`,!0).catch(),!0))}function W(e,t){let i=3.1*e.maxTokens.input-t/3.1;return Math.floor(i-.1*i)}async function B(e,t){let i=await e.getSecret(`gitlens.${t.id}.key`);if(!i){let o=n.window.createInputBox();o.ignoreFocusOut=!0;let a=[];try{let e={iconPath:new n.ThemeIcon("link-external"),tooltip:`Open the ${t.name} API Key Page`};i=await new Promise(i=>{a.push(o.onDidHide(()=>i(void 0)),o.onDidChangeValue(e=>{if(e&&!t.validator(e)){o.validationMessage=`Please enter a valid ${t.name} API key`;return}o.validationMessage=void 0}),o.onDidAccept(()=>{let e=o.value.trim();if(!e||!t.validator(e)){o.validationMessage=`Please enter a valid ${t.name} API key`;return}i(e)}),o.onDidTriggerButton(i=>{i===e&&n.env.openExternal(n.Uri.parse(t.url))})),o.password=!0,o.title=`Connect to ${t.name}`,o.placeholder=`Please enter your ${t.name} API key to use this feature`,o.prompt=`Enter your [${t.name} API Key](${t.url} "Get your ${t.name} API key")`,o.buttons=[e],o.show()})}finally{o.dispose(),a.forEach(e=>void e.dispose())}if(!i)return;e.storeSecret(`gitlens.${t.id}.key`,i).catch()}return i}function L(e){e=e.trim();let t=e.match(/<summary>\s?([\s\S]*?)\s?(<\/summary>|$)/)?.[1]?.trim()??"",i=e.match(/<body>\s?([\s\S]*?)\s?(<\/body>|$)/)?.[1]?.trim()??"";if(!t&&!i)return Y(e);if(t&&!i){if(!(i=e.replace(/<summary>[\s\S]*?<\/summary>/,"")?.trim()??""))return Y(t)}else if(!t&&i&&!(t=e.replace(/<body>[\s\S]*?<\/body>/,"").trim()??""))return Y(i);return{summary:t,body:i}}function Y(e){let t=e.indexOf("\n");return -1===t?{summary:e,body:""}:{summary:e.substring(0,t).trim(),body:e.substring(t+1).trim()}}function j(e,t){n.window.showWarningMessage(`The diff of the changes had to be truncated to ${e} characters to fit within the ${(0,p.Lu)(t.provider.name)} limits.`)}}};