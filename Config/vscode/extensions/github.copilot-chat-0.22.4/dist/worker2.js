"use strict";var ct=Object.create;var ce=Object.defineProperty;var mt=Object.getOwnPropertyDescriptor;var pt=Object.getOwnPropertyNames;var ft=Object.getPrototypeOf,ht=Object.prototype.hasOwnProperty;var gt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),yt=(e,t)=>{for(var r in t)ce(e,r,{get:t[r],enumerable:!0})},wt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of pt(t))!ht.call(e,s)&&s!==r&&ce(e,s,{get:()=>t[s],enumerable:!(n=mt(t,s))||n.enumerable});return e};var xt=(e,t,r)=>(r=e!=null?ct(ft(e)):{},wt(t||!e||!e.__esModule?ce(r,"default",{value:e,enumerable:!0}):r,e));var _e=gt((exports,module)=>{var Module=Module!==void 0?Module:{},TreeSitter=function(){var initPromise,document=typeof window=="object"?{currentScript:window.document.currentScript}:null;class Parser{constructor(){this.initialize()}initialize(){throw new Error("cannot construct a Parser before calling `init()`")}static init(moduleOptions){return initPromise||(Module=Object.assign({},Module,moduleOptions),initPromise=new Promise(resolveInitPromise=>{var moduleOverrides=Object.assign({},Module),arguments_=[],thisProgram="./this.program",quit_=(e,t)=>{throw t},ENVIRONMENT_IS_WEB=typeof window=="object",ENVIRONMENT_IS_WORKER=typeof importScripts=="function",ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",scriptDirectory="",read_,readAsync,readBinary;function locateFile(e){return Module.locateFile?Module.locateFile(e,scriptDirectory):scriptDirectory+e}if(ENVIRONMENT_IS_NODE){var fs=require("fs"),nodePath=require("path");scriptDirectory=ENVIRONMENT_IS_WORKER?nodePath.dirname(scriptDirectory)+"/":__dirname+"/",read_=(e,t)=>(e=isFileURI(e)?new URL(e):nodePath.normalize(e),fs.readFileSync(e,t?void 0:"utf8")),readBinary=e=>{var t=read_(e,!0);return t.buffer||(t=new Uint8Array(t)),t},readAsync=(e,t,r,n=!0)=>{e=isFileURI(e)?new URL(e):nodePath.normalize(e),fs.readFile(e,n?void 0:"utf8",(s,o)=>{s?r(s):t(n?o.buffer:o)})},!Module.thisProgram&&process.argv.length>1&&(thisProgram=process.argv[1].replace(/\\/g,"/")),arguments_=process.argv.slice(2),typeof module<"u"&&(module.exports=Module),quit_=(e,t)=>{throw process.exitCode=e,t}}else(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)&&(ENVIRONMENT_IS_WORKER?scriptDirectory=self.location.href:document!==void 0&&document.currentScript&&(scriptDirectory=document.currentScript.src),scriptDirectory=scriptDirectory.startsWith("blob:")?"":scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1),read_=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},ENVIRONMENT_IS_WORKER&&(readBinary=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),readAsync=(e,t,r)=>{var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=()=>{n.status==200||n.status==0&&n.response?t(n.response):r()},n.onerror=r,n.send(null)});var out=Module.print||console.log.bind(console),err=Module.printErr||console.error.bind(console);Object.assign(Module,moduleOverrides),moduleOverrides=null,Module.arguments&&(arguments_=Module.arguments),Module.thisProgram&&(thisProgram=Module.thisProgram),Module.quit&&(quit_=Module.quit);var dynamicLibraries=Module.dynamicLibraries||[],wasmBinary,wasmMemory;Module.wasmBinary&&(wasmBinary=Module.wasmBinary),typeof WebAssembly!="object"&&abort("no native wasm support detected");var ABORT=!1,EXITSTATUS,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var e=wasmMemory.buffer;Module.HEAP8=HEAP8=new Int8Array(e),Module.HEAP16=HEAP16=new Int16Array(e),Module.HEAPU8=HEAPU8=new Uint8Array(e),Module.HEAPU16=HEAPU16=new Uint16Array(e),Module.HEAP32=HEAP32=new Int32Array(e),Module.HEAPU32=HEAPU32=new Uint32Array(e),Module.HEAPF32=HEAPF32=new Float32Array(e),Module.HEAPF64=HEAPF64=new Float64Array(e)}var INITIAL_MEMORY=Module.INITIAL_MEMORY||33554432;wasmMemory=Module.wasmMemory?Module.wasmMemory:new WebAssembly.Memory({initial:INITIAL_MEMORY/65536,maximum:32768}),updateMemoryViews(),INITIAL_MEMORY=wasmMemory.buffer.byteLength;var __ATPRERUN__=[],__ATINIT__=[],__ATMAIN__=[],__ATPOSTRUN__=[],__RELOC_FUNCS__=[],runtimeInitialized=!1;function preRun(){if(Module.preRun)for(typeof Module.preRun=="function"&&(Module.preRun=[Module.preRun]);Module.preRun.length;)addOnPreRun(Module.preRun.shift());callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=!0,callRuntimeCallbacks(__RELOC_FUNCS__),callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function postRun(){if(Module.postRun)for(typeof Module.postRun=="function"&&(Module.postRun=[Module.postRun]);Module.postRun.length;)addOnPostRun(Module.postRun.shift());callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(e){__ATPRERUN__.unshift(e)}function addOnInit(e){__ATINIT__.unshift(e)}function addOnPostRun(e){__ATPOSTRUN__.unshift(e)}var runDependencies=0,runDependencyWatcher=null,dependenciesFulfilled=null;function getUniqueRunDependency(e){return e}function addRunDependency(e){runDependencies++,Module.monitorRunDependencies?.(runDependencies)}function removeRunDependency(e){if(runDependencies--,Module.monitorRunDependencies?.(runDependencies),runDependencies==0&&(runDependencyWatcher!==null&&(clearInterval(runDependencyWatcher),runDependencyWatcher=null),dependenciesFulfilled)){var t=dependenciesFulfilled;dependenciesFulfilled=null,t()}}function abort(e){throw Module.onAbort?.(e),err(e="Aborted("+e+")"),ABORT=!0,EXITSTATUS=1,e+=". Build with -sASSERTIONS for more info.",new WebAssembly.RuntimeError(e)}var dataURIPrefix="data:application/octet-stream;base64,",isDataURI=e=>e.startsWith(dataURIPrefix),isFileURI=e=>e.startsWith("file://"),wasmBinaryFile;function getBinarySync(e){if(e==wasmBinaryFile&&wasmBinary)return new Uint8Array(wasmBinary);if(readBinary)return readBinary(e);throw"both async and sync fetching of the wasm failed"}function getBinaryPromise(e){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"&&!isFileURI(e))return fetch(e,{credentials:"same-origin"}).then(t=>{if(!t.ok)throw`failed to load wasm binary file at '${e}'`;return t.arrayBuffer()}).catch(()=>getBinarySync(e));if(readAsync)return new Promise((t,r)=>{readAsync(e,n=>t(new Uint8Array(n)),r)})}return Promise.resolve().then(()=>getBinarySync(e))}function instantiateArrayBuffer(e,t,r){return getBinaryPromise(e).then(n=>WebAssembly.instantiate(n,t)).then(r,n=>{err(`failed to asynchronously prepare wasm: ${n}`),abort(n)})}function instantiateAsync(e,t,r,n){return e||typeof WebAssembly.instantiateStreaming!="function"||isDataURI(t)||isFileURI(t)||ENVIRONMENT_IS_NODE||typeof fetch!="function"?instantiateArrayBuffer(t,r,n):fetch(t,{credentials:"same-origin"}).then(s=>WebAssembly.instantiateStreaming(s,r).then(n,function(o){return err(`wasm streaming compile failed: ${o}`),err("falling back to ArrayBuffer instantiation"),instantiateArrayBuffer(t,r,n)}))}function createWasm(){var e={env:wasmImports,wasi_snapshot_preview1:wasmImports,"GOT.mem":new Proxy(wasmImports,GOTHandler),"GOT.func":new Proxy(wasmImports,GOTHandler)};function t(r,n){wasmExports=r.exports,wasmExports=relocateExports(wasmExports,1024);var s=getDylinkMetadata(n);return s.neededDynlibs&&(dynamicLibraries=s.neededDynlibs.concat(dynamicLibraries)),mergeLibSymbols(wasmExports,"main"),LDSO.init(),loadDylibs(),addOnInit(wasmExports.__wasm_call_ctors),__RELOC_FUNCS__.push(wasmExports.__wasm_apply_data_relocs),removeRunDependency("wasm-instantiate"),wasmExports}if(addRunDependency("wasm-instantiate"),Module.instantiateWasm)try{return Module.instantiateWasm(e,t)}catch(r){return err(`Module.instantiateWasm callback failed with error: ${r}`),!1}return instantiateAsync(wasmBinary,wasmBinaryFile,e,function(r){t(r.instance,r.module)}),{}}wasmBinaryFile="tree-sitter.wasm",isDataURI(wasmBinaryFile)||(wasmBinaryFile=locateFile(wasmBinaryFile));var ASM_CONSTS={};function ExitStatus(e){this.name="ExitStatus",this.message=`Program terminated with exit(${e})`,this.status=e}var GOT={},currentModuleWeakSymbols=new Set([]),GOTHandler={get(e,t){var r=GOT[t];return r||(r=GOT[t]=new WebAssembly.Global({value:"i32",mutable:!0})),currentModuleWeakSymbols.has(t)||(r.required=!0),r}},callRuntimeCallbacks=e=>{for(;e.length>0;)e.shift()(Module)},UTF8Decoder=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,UTF8ArrayToString=(e,t,r)=>{for(var n=t+r,s=t;e[s]&&!(s>=n);)++s;if(s-t>16&&e.buffer&&UTF8Decoder)return UTF8Decoder.decode(e.subarray(t,s));for(var o="";t<s;){var a=e[t++];if(128&a){var _=63&e[t++];if((224&a)!=192){var d=63&e[t++];if((a=(240&a)==224?(15&a)<<12|_<<6|d:(7&a)<<18|_<<12|d<<6|63&e[t++])<65536)o+=String.fromCharCode(a);else{var l=a-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&a)<<6|_)}else o+=String.fromCharCode(a)}return o},getDylinkMetadata=e=>{var t=0,r=0;function n(){for(var y=0,u=1;;){var w=e[t++];if(y+=(127&w)*u,u*=128,!(128&w))break}return y}function s(){var y=n();return UTF8ArrayToString(e,(t+=y)-y,y)}function o(y,u){if(y)throw new Error(u)}var a="dylink.0";if(e instanceof WebAssembly.Module){var _=WebAssembly.Module.customSections(e,a);_.length===0&&(a="dylink",_=WebAssembly.Module.customSections(e,a)),o(_.length===0,"need dylink section"),r=(e=new Uint8Array(_[0])).length}else{o(new Uint32Array(new Uint8Array(e.subarray(0,24)).buffer)[0]!=1836278016,"need to see wasm magic number"),o(e[8]!==0,"need the dylink section to be first"),t=9;var d=n();r=t+d,a=s()}var l={neededDynlibs:[],tlsExports:new Set,weakImports:new Set};if(a=="dylink"){l.memorySize=n(),l.memoryAlign=n(),l.tableSize=n(),l.tableAlign=n();for(var c=n(),m=0;m<c;++m){var h=s();l.neededDynlibs.push(h)}}else for(o(a!=="dylink.0");t<r;){var g=e[t++],b=n();if(g===1)l.memorySize=n(),l.memoryAlign=n(),l.tableSize=n(),l.tableAlign=n();else if(g===2)for(c=n(),m=0;m<c;++m)h=s(),l.neededDynlibs.push(h);else if(g===3)for(var p=n();p--;){var E=s();256&n()&&l.tlsExports.add(E)}else if(g===4)for(p=n();p--;)s(),E=s(),(3&n())==1&&l.weakImports.add(E);else t+=b}return l};function getValue(e,t="i8"){switch(t.endsWith("*")&&(t="*"),t){case"i1":case"i8":return HEAP8[e];case"i16":return HEAP16[e>>1];case"i32":return HEAP32[e>>2];case"i64":abort("to do getValue(i64) use WASM_BIGINT");case"float":return HEAPF32[e>>2];case"double":return HEAPF64[e>>3];case"*":return HEAPU32[e>>2];default:abort(`invalid type for getValue: ${t}`)}}var newDSO=(e,t,r)=>{var n={refcount:1/0,name:e,exports:r,global:!0};return LDSO.loadedLibsByName[e]=n,t!=null&&(LDSO.loadedLibsByHandle[t]=n),n},LDSO={loadedLibsByName:{},loadedLibsByHandle:{},init(){newDSO("__main__",0,wasmImports)}},___heap_base=78096,zeroMemory=(e,t)=>(HEAPU8.fill(0,e,e+t),e),alignMemory=(e,t)=>Math.ceil(e/t)*t,getMemory=e=>{if(runtimeInitialized)return zeroMemory(_malloc(e),e);var t=___heap_base,r=t+alignMemory(e,16);return ___heap_base=r,GOT.__heap_base.value=r,t},isInternalSym=e=>["__cpp_exception","__c_longjmp","__wasm_apply_data_relocs","__dso_handle","__tls_size","__tls_align","__set_stack_limits","_emscripten_tls_init","__wasm_init_tls","__wasm_call_ctors","__start_em_asm","__stop_em_asm","__start_em_js","__stop_em_js"].includes(e)||e.startsWith("__em_js__"),uleb128Encode=(e,t)=>{e<128?t.push(e):t.push(e%128|128,e>>7)},sigToWasmTypes=e=>{for(var t={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},r={parameters:[],results:e[0]=="v"?[]:[t[e[0]]]},n=1;n<e.length;++n)r.parameters.push(t[e[n]]);return r},generateFuncType=(e,t)=>{var r=e.slice(0,1),n=e.slice(1),s={i:127,p:127,j:126,f:125,d:124,e:111};t.push(96),uleb128Encode(n.length,t);for(var o=0;o<n.length;++o)t.push(s[n[o]]);r=="v"?t.push(0):t.push(1,s[r])},convertJsFunctionToWasm=(e,t)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(sigToWasmTypes(t),e);var r=[1];generateFuncType(t,r);var n=[0,97,115,109,1,0,0,0,1];uleb128Encode(r.length,n),n.push(...r),n.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var s=new WebAssembly.Module(new Uint8Array(n));return new WebAssembly.Instance(s,{e:{f:e}}).exports.f},wasmTableMirror=[],wasmTable=new WebAssembly.Table({initial:27,element:"anyfunc"}),getWasmTableEntry=e=>{var t=wasmTableMirror[e];return t||(e>=wasmTableMirror.length&&(wasmTableMirror.length=e+1),wasmTableMirror[e]=t=wasmTable.get(e)),t},updateTableMap=(e,t)=>{if(functionsInTableMap)for(var r=e;r<e+t;r++){var n=getWasmTableEntry(r);n&&functionsInTableMap.set(n,r)}},functionsInTableMap,getFunctionAddress=e=>(functionsInTableMap||(functionsInTableMap=new WeakMap,updateTableMap(0,wasmTable.length)),functionsInTableMap.get(e)||0),freeTableIndexes=[],getEmptyTableSlot=()=>{if(freeTableIndexes.length)return freeTableIndexes.pop();try{wasmTable.grow(1)}catch(e){throw e instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":e}return wasmTable.length-1},setWasmTableEntry=(e,t)=>{wasmTable.set(e,t),wasmTableMirror[e]=wasmTable.get(e)},addFunction=(e,t)=>{var r=getFunctionAddress(e);if(r)return r;var n=getEmptyTableSlot();try{setWasmTableEntry(n,e)}catch(o){if(!(o instanceof TypeError))throw o;var s=convertJsFunctionToWasm(e,t);setWasmTableEntry(n,s)}return functionsInTableMap.set(e,n),n},updateGOT=(e,t)=>{for(var r in e)if(!isInternalSym(r)){var n=e[r];r.startsWith("orig$")&&(r=r.split("$")[1],t=!0),GOT[r]||=new WebAssembly.Global({value:"i32",mutable:!0}),(t||GOT[r].value==0)&&(typeof n=="function"?GOT[r].value=addFunction(n):typeof n=="number"?GOT[r].value=n:err(`unhandled export type for '${r}': ${typeof n}`))}},relocateExports=(e,t,r)=>{var n={};for(var s in e){var o=e[s];typeof o=="object"&&(o=o.value),typeof o=="number"&&(o+=t),n[s]=o}return updateGOT(n,r),n},isSymbolDefined=e=>{var t=wasmImports[e];return!(!t||t.stub)},dynCallLegacy=(e,t,r)=>(0,Module["dynCall_"+e])(t,...r),dynCall=(e,t,r=[])=>e.includes("j")?dynCallLegacy(e,t,r):getWasmTableEntry(t)(...r),createInvokeFunction=e=>function(){var t=stackSave();try{return dynCall(e,arguments[0],Array.prototype.slice.call(arguments,1))}catch(r){if(stackRestore(t),r!==r+0)throw r;_setThrew(1,0)}},resolveGlobalSymbol=(e,t=!1)=>{var r;return t&&"orig$"+e in wasmImports&&(e="orig$"+e),isSymbolDefined(e)?r=wasmImports[e]:e.startsWith("invoke_")&&(r=wasmImports[e]=createInvokeFunction(e.split("_")[1])),{sym:r,name:e}},UTF8ToString=(e,t)=>e?UTF8ArrayToString(HEAPU8,e,t):"",loadWebAssemblyModule=(binary,flags,libName,localScope,handle)=>{var metadata=getDylinkMetadata(binary);function loadModule(){var firstLoad=!handle||!HEAP8[handle+8];if(firstLoad){var memAlign=Math.pow(2,metadata.memoryAlign),memoryBase=metadata.memorySize?alignMemory(getMemory(metadata.memorySize+memAlign),memAlign):0,tableBase=metadata.tableSize?wasmTable.length:0;handle&&(HEAP8[handle+8]=1,HEAPU32[handle+12>>2]=memoryBase,HEAP32[handle+16>>2]=metadata.memorySize,HEAPU32[handle+20>>2]=tableBase,HEAP32[handle+24>>2]=metadata.tableSize)}else memoryBase=HEAPU32[handle+12>>2],tableBase=HEAPU32[handle+20>>2];var tableGrowthNeeded=tableBase+metadata.tableSize-wasmTable.length,moduleExports;function resolveSymbol(e){var t=resolveGlobalSymbol(e).sym;return!t&&localScope&&(t=localScope[e]),t||(t=moduleExports[e]),t}tableGrowthNeeded>0&&wasmTable.grow(tableGrowthNeeded);var proxyHandler={get(e,t){switch(t){case"__memory_base":return memoryBase;case"__table_base":return tableBase}if(t in wasmImports&&!wasmImports[t].stub)return wasmImports[t];var r;return t in e||(e[t]=(...n)=>(r||=resolveSymbol(t),r(...n))),e[t]}},proxy=new Proxy({},proxyHandler),info={"GOT.mem":new Proxy({},GOTHandler),"GOT.func":new Proxy({},GOTHandler),env:proxy,wasi_snapshot_preview1:proxy};function postInstantiation(module,instance){function addEmAsm(addr,body){for(var args=[],arity=0;arity<16&&body.indexOf("$"+arity)!=-1;arity++)args.push("$"+arity);args=args.join(",");var func=`(${args}) => { ${body} };`;ASM_CONSTS[start]=eval(func)}if(updateTableMap(tableBase,metadata.tableSize),moduleExports=relocateExports(instance.exports,memoryBase),flags.allowUndefined||reportUndefinedSymbols(),"__start_em_asm"in moduleExports)for(var start=moduleExports.__start_em_asm,stop=moduleExports.__stop_em_asm;start<stop;){var jsString=UTF8ToString(start);addEmAsm(start,jsString),start=HEAPU8.indexOf(0,start)+1}function addEmJs(name,cSig,body){var jsArgs=[];if(cSig=cSig.slice(1,-1),cSig!="void")for(var i in cSig=cSig.split(","),cSig){var jsArg=cSig[i].split(" ").pop();jsArgs.push(jsArg.replace("*",""))}var func=`(${jsArgs}) => ${body};`;moduleExports[name]=eval(func)}for(var name in moduleExports)if(name.startsWith("__em_js__")){var start=moduleExports[name],jsString=UTF8ToString(start),parts=jsString.split("<::>");addEmJs(name.replace("__em_js__",""),parts[0],parts[1]),delete moduleExports[name]}var applyRelocs=moduleExports.__wasm_apply_data_relocs;applyRelocs&&(runtimeInitialized?applyRelocs():__RELOC_FUNCS__.push(applyRelocs));var init=moduleExports.__wasm_call_ctors;return init&&(runtimeInitialized?init():__ATINIT__.push(init)),moduleExports}if(flags.loadAsync){if(binary instanceof WebAssembly.Module){var instance=new WebAssembly.Instance(binary,info);return Promise.resolve(postInstantiation(binary,instance))}return WebAssembly.instantiate(binary,info).then(e=>postInstantiation(e.module,e.instance))}var module=binary instanceof WebAssembly.Module?binary:new WebAssembly.Module(binary),instance=new WebAssembly.Instance(module,info);return postInstantiation(module,instance)}return currentModuleWeakSymbols=metadata.weakImports,flags.loadAsync?metadata.neededDynlibs.reduce((e,t)=>e.then(()=>loadDynamicLibrary(t,flags)),Promise.resolve()).then(loadModule):(metadata.neededDynlibs.forEach(e=>loadDynamicLibrary(e,flags,localScope)),loadModule())},mergeLibSymbols=(e,t)=>{for(var[r,n]of Object.entries(e)){let s=a=>{isSymbolDefined(a)||(wasmImports[a]=n)};s(r);let o="__main_argc_argv";r=="main"&&s(o),r==o&&s("main"),r.startsWith("dynCall_")&&!Module.hasOwnProperty(r)&&(Module[r]=n)}},asyncLoad=(e,t,r,n)=>{var s=n?"":`al ${e}`;readAsync(e,o=>{t(new Uint8Array(o)),s&&removeRunDependency(s)},o=>{if(!r)throw`Loading data file "${e}" failed.`;r()}),s&&addRunDependency(s)};function loadDynamicLibrary(e,t={global:!0,nodelete:!0},r,n){var s=LDSO.loadedLibsByName[e];if(s)return t.global?s.global||(s.global=!0,mergeLibSymbols(s.exports,e)):r&&Object.assign(r,s.exports),t.nodelete&&s.refcount!==1/0&&(s.refcount=1/0),s.refcount++,n&&(LDSO.loadedLibsByHandle[n]=s),!t.loadAsync||Promise.resolve(!0);function o(){if(n){var d=HEAPU32[n+28>>2],l=HEAPU32[n+32>>2];if(d&&l){var c=HEAP8.slice(d,d+l);return t.loadAsync?Promise.resolve(c):c}}var m=locateFile(e);if(t.loadAsync)return new Promise(function(h,g){asyncLoad(m,h,g)});if(!readBinary)throw new Error(`${m}: file not found, and synchronous loading of external files is not available`);return readBinary(m)}function a(){return t.loadAsync?o().then(d=>loadWebAssemblyModule(d,t,e,r,n)):loadWebAssemblyModule(o(),t,e,r,n)}function _(d){s.global?mergeLibSymbols(d,e):r&&Object.assign(r,d),s.exports=d}return(s=newDSO(e,n,"loading")).refcount=t.nodelete?1/0:1,s.global=t.global,t.loadAsync?a().then(d=>(_(d),!0)):(_(a()),!0)}var reportUndefinedSymbols=()=>{for(var[e,t]of Object.entries(GOT))if(t.value==0){var r=resolveGlobalSymbol(e,!0).sym;if(!r&&!t.required)continue;if(typeof r=="function")t.value=addFunction(r,r.sig);else{if(typeof r!="number")throw new Error(`bad export type for '${e}': ${typeof r}`);t.value=r}}},loadDylibs=()=>{dynamicLibraries.length?(addRunDependency("loadDylibs"),dynamicLibraries.reduce((e,t)=>e.then(()=>loadDynamicLibrary(t,{loadAsync:!0,global:!0,nodelete:!0,allowUndefined:!0})),Promise.resolve()).then(()=>{reportUndefinedSymbols(),removeRunDependency("loadDylibs")})):reportUndefinedSymbols()},noExitRuntime=Module.noExitRuntime||!0;function setValue(e,t,r="i8"){switch(r.endsWith("*")&&(r="*"),r){case"i1":case"i8":HEAP8[e]=t;break;case"i16":HEAP16[e>>1]=t;break;case"i32":HEAP32[e>>2]=t;break;case"i64":abort("to do setValue(i64) use WASM_BIGINT");case"float":HEAPF32[e>>2]=t;break;case"double":HEAPF64[e>>3]=t;break;case"*":HEAPU32[e>>2]=t;break;default:abort(`invalid type for setValue: ${r}`)}}var ___memory_base=new WebAssembly.Global({value:"i32",mutable:!1},1024),___stack_pointer=new WebAssembly.Global({value:"i32",mutable:!0},78096),___table_base=new WebAssembly.Global({value:"i32",mutable:!1},1),nowIsMonotonic=1,__emscripten_get_now_is_monotonic=()=>nowIsMonotonic;__emscripten_get_now_is_monotonic.sig="i";var _abort=()=>{abort("")};_abort.sig="v";var _emscripten_date_now=()=>Date.now(),_emscripten_get_now;_emscripten_date_now.sig="d",_emscripten_get_now=()=>performance.now(),_emscripten_get_now.sig="d";var _emscripten_memcpy_js=(e,t,r)=>HEAPU8.copyWithin(e,t,t+r);_emscripten_memcpy_js.sig="vppp";var getHeapMax=()=>2147483648,growMemory=e=>{var t=(e-wasmMemory.buffer.byteLength+65535)/65536;try{return wasmMemory.grow(t),updateMemoryViews(),1}catch{}},_emscripten_resize_heap=e=>{var t=HEAPU8.length;e>>>=0;var r=getHeapMax();if(e>r)return!1;for(var n,s,o=1;o<=4;o*=2){var a=t*(1+.2/o);a=Math.min(a,e+100663296);var _=Math.min(r,(n=Math.max(e,a))+((s=65536)-n%s)%s);if(growMemory(_))return!0}return!1};_emscripten_resize_heap.sig="ip";var _fd_close=e=>52;_fd_close.sig="ii";var convertI32PairToI53Checked=(e,t)=>t+2097152>>>0<4194305-!!e?(e>>>0)+4294967296*t:NaN;function _fd_seek(e,t,r,n,s){return convertI32PairToI53Checked(t,r),70}_fd_seek.sig="iiiiip";var printCharBuffers=[null,[],[]],printChar=(e,t)=>{var r=printCharBuffers[e];t===0||t===10?((e===1?out:err)(UTF8ArrayToString(r,0)),r.length=0):r.push(t)},SYSCALLS={varargs:void 0,get(){var e=HEAP32[+SYSCALLS.varargs>>2];return SYSCALLS.varargs+=4,e},getp:()=>SYSCALLS.get(),getStr:e=>UTF8ToString(e)},_fd_write=(e,t,r,n)=>{for(var s=0,o=0;o<r;o++){var a=HEAPU32[t>>2],_=HEAPU32[t+4>>2];t+=8;for(var d=0;d<_;d++)printChar(e,HEAPU8[a+d]);s+=_}return HEAPU32[n>>2]=s,0};function _tree_sitter_log_callback(e,t){if(currentLogCallback){let r=UTF8ToString(t);currentLogCallback(r,e!==0)}}function _tree_sitter_parse_callback(e,t,r,n,s){let o=currentParseCallback(t,{row:r,column:n});typeof o=="string"?(setValue(s,o.length,"i32"),stringToUTF16(o,e,10240)):setValue(s,0,"i32")}_fd_write.sig="iippp";var runtimeKeepaliveCounter=0,keepRuntimeAlive=()=>noExitRuntime||runtimeKeepaliveCounter>0,_proc_exit=e=>{EXITSTATUS=e,keepRuntimeAlive()||(Module.onExit?.(e),ABORT=!0),quit_(e,new ExitStatus(e))};_proc_exit.sig="vi";var exitJS=(e,t)=>{EXITSTATUS=e,_proc_exit(e)},handleException=e=>{if(e instanceof ExitStatus||e=="unwind")return EXITSTATUS;quit_(1,e)},lengthBytesUTF8=e=>{for(var t=0,r=0;r<e.length;++r){var n=e.charCodeAt(r);n<=127?t++:n<=2047?t+=2:n>=55296&&n<=57343?(t+=4,++r):t+=3}return t},stringToUTF8Array=(e,t,r,n)=>{if(!(n>0))return 0;for(var s=r,o=r+n-1,a=0;a<e.length;++a){var _=e.charCodeAt(a);if(_>=55296&&_<=57343&&(_=65536+((1023&_)<<10)|1023&e.charCodeAt(++a)),_<=127){if(r>=o)break;t[r++]=_}else if(_<=2047){if(r+1>=o)break;t[r++]=192|_>>6,t[r++]=128|63&_}else if(_<=65535){if(r+2>=o)break;t[r++]=224|_>>12,t[r++]=128|_>>6&63,t[r++]=128|63&_}else{if(r+3>=o)break;t[r++]=240|_>>18,t[r++]=128|_>>12&63,t[r++]=128|_>>6&63,t[r++]=128|63&_}}return t[r]=0,r-s},stringToUTF8=(e,t,r)=>stringToUTF8Array(e,HEAPU8,t,r),stringToUTF8OnStack=e=>{var t=lengthBytesUTF8(e)+1,r=stackAlloc(t);return stringToUTF8(e,r,t),r},stringToUTF16=(e,t,r)=>{if(r??=2147483647,r<2)return 0;for(var n=t,s=(r-=2)<2*e.length?r/2:e.length,o=0;o<s;++o){var a=e.charCodeAt(o);HEAP16[t>>1]=a,t+=2}return HEAP16[t>>1]=0,t-n},AsciiToString=e=>{for(var t="";;){var r=HEAPU8[e++];if(!r)return t;t+=String.fromCharCode(r)}},wasmImports={__heap_base:___heap_base,__indirect_function_table:wasmTable,__memory_base:___memory_base,__stack_pointer:___stack_pointer,__table_base:___table_base,_emscripten_get_now_is_monotonic:__emscripten_get_now_is_monotonic,abort:_abort,emscripten_get_now:_emscripten_get_now,emscripten_memcpy_js:_emscripten_memcpy_js,emscripten_resize_heap:_emscripten_resize_heap,fd_close:_fd_close,fd_seek:_fd_seek,fd_write:_fd_write,memory:wasmMemory,tree_sitter_log_callback:_tree_sitter_log_callback,tree_sitter_parse_callback:_tree_sitter_parse_callback},wasmExports=createWasm(),___wasm_call_ctors=()=>(___wasm_call_ctors=wasmExports.__wasm_call_ctors)(),___wasm_apply_data_relocs=()=>(___wasm_apply_data_relocs=wasmExports.__wasm_apply_data_relocs)(),_malloc=Module._malloc=e=>(_malloc=Module._malloc=wasmExports.malloc)(e),_calloc=Module._calloc=(e,t)=>(_calloc=Module._calloc=wasmExports.calloc)(e,t),_realloc=Module._realloc=(e,t)=>(_realloc=Module._realloc=wasmExports.realloc)(e,t),_free=Module._free=e=>(_free=Module._free=wasmExports.free)(e),_ts_language_symbol_count=Module._ts_language_symbol_count=e=>(_ts_language_symbol_count=Module._ts_language_symbol_count=wasmExports.ts_language_symbol_count)(e),_ts_language_state_count=Module._ts_language_state_count=e=>(_ts_language_state_count=Module._ts_language_state_count=wasmExports.ts_language_state_count)(e),_ts_language_version=Module._ts_language_version=e=>(_ts_language_version=Module._ts_language_version=wasmExports.ts_language_version)(e),_ts_language_field_count=Module._ts_language_field_count=e=>(_ts_language_field_count=Module._ts_language_field_count=wasmExports.ts_language_field_count)(e),_ts_language_next_state=Module._ts_language_next_state=(e,t,r)=>(_ts_language_next_state=Module._ts_language_next_state=wasmExports.ts_language_next_state)(e,t,r),_ts_language_symbol_name=Module._ts_language_symbol_name=(e,t)=>(_ts_language_symbol_name=Module._ts_language_symbol_name=wasmExports.ts_language_symbol_name)(e,t),_ts_language_symbol_for_name=Module._ts_language_symbol_for_name=(e,t,r,n)=>(_ts_language_symbol_for_name=Module._ts_language_symbol_for_name=wasmExports.ts_language_symbol_for_name)(e,t,r,n),_strncmp=Module._strncmp=(e,t,r)=>(_strncmp=Module._strncmp=wasmExports.strncmp)(e,t,r),_ts_language_symbol_type=Module._ts_language_symbol_type=(e,t)=>(_ts_language_symbol_type=Module._ts_language_symbol_type=wasmExports.ts_language_symbol_type)(e,t),_ts_language_field_name_for_id=Module._ts_language_field_name_for_id=(e,t)=>(_ts_language_field_name_for_id=Module._ts_language_field_name_for_id=wasmExports.ts_language_field_name_for_id)(e,t),_ts_lookahead_iterator_new=Module._ts_lookahead_iterator_new=(e,t)=>(_ts_lookahead_iterator_new=Module._ts_lookahead_iterator_new=wasmExports.ts_lookahead_iterator_new)(e,t),_ts_lookahead_iterator_delete=Module._ts_lookahead_iterator_delete=e=>(_ts_lookahead_iterator_delete=Module._ts_lookahead_iterator_delete=wasmExports.ts_lookahead_iterator_delete)(e),_ts_lookahead_iterator_reset_state=Module._ts_lookahead_iterator_reset_state=(e,t)=>(_ts_lookahead_iterator_reset_state=Module._ts_lookahead_iterator_reset_state=wasmExports.ts_lookahead_iterator_reset_state)(e,t),_ts_lookahead_iterator_reset=Module._ts_lookahead_iterator_reset=(e,t,r)=>(_ts_lookahead_iterator_reset=Module._ts_lookahead_iterator_reset=wasmExports.ts_lookahead_iterator_reset)(e,t,r),_ts_lookahead_iterator_next=Module._ts_lookahead_iterator_next=e=>(_ts_lookahead_iterator_next=Module._ts_lookahead_iterator_next=wasmExports.ts_lookahead_iterator_next)(e),_ts_lookahead_iterator_current_symbol=Module._ts_lookahead_iterator_current_symbol=e=>(_ts_lookahead_iterator_current_symbol=Module._ts_lookahead_iterator_current_symbol=wasmExports.ts_lookahead_iterator_current_symbol)(e),_memset=Module._memset=(e,t,r)=>(_memset=Module._memset=wasmExports.memset)(e,t,r),_memcpy=Module._memcpy=(e,t,r)=>(_memcpy=Module._memcpy=wasmExports.memcpy)(e,t,r),_ts_parser_delete=Module._ts_parser_delete=e=>(_ts_parser_delete=Module._ts_parser_delete=wasmExports.ts_parser_delete)(e),_ts_parser_reset=Module._ts_parser_reset=e=>(_ts_parser_reset=Module._ts_parser_reset=wasmExports.ts_parser_reset)(e),_ts_parser_set_language=Module._ts_parser_set_language=(e,t)=>(_ts_parser_set_language=Module._ts_parser_set_language=wasmExports.ts_parser_set_language)(e,t),_ts_parser_timeout_micros=Module._ts_parser_timeout_micros=e=>(_ts_parser_timeout_micros=Module._ts_parser_timeout_micros=wasmExports.ts_parser_timeout_micros)(e),_ts_parser_set_timeout_micros=Module._ts_parser_set_timeout_micros=(e,t,r)=>(_ts_parser_set_timeout_micros=Module._ts_parser_set_timeout_micros=wasmExports.ts_parser_set_timeout_micros)(e,t,r),_ts_parser_set_included_ranges=Module._ts_parser_set_included_ranges=(e,t,r)=>(_ts_parser_set_included_ranges=Module._ts_parser_set_included_ranges=wasmExports.ts_parser_set_included_ranges)(e,t,r),_memmove=Module._memmove=(e,t,r)=>(_memmove=Module._memmove=wasmExports.memmove)(e,t,r),_memcmp=Module._memcmp=(e,t,r)=>(_memcmp=Module._memcmp=wasmExports.memcmp)(e,t,r),_ts_query_new=Module._ts_query_new=(e,t,r,n,s)=>(_ts_query_new=Module._ts_query_new=wasmExports.ts_query_new)(e,t,r,n,s),_ts_query_delete=Module._ts_query_delete=e=>(_ts_query_delete=Module._ts_query_delete=wasmExports.ts_query_delete)(e),_iswspace=Module._iswspace=e=>(_iswspace=Module._iswspace=wasmExports.iswspace)(e),_iswalnum=Module._iswalnum=e=>(_iswalnum=Module._iswalnum=wasmExports.iswalnum)(e),_ts_query_pattern_count=Module._ts_query_pattern_count=e=>(_ts_query_pattern_count=Module._ts_query_pattern_count=wasmExports.ts_query_pattern_count)(e),_ts_query_capture_count=Module._ts_query_capture_count=e=>(_ts_query_capture_count=Module._ts_query_capture_count=wasmExports.ts_query_capture_count)(e),_ts_query_string_count=Module._ts_query_string_count=e=>(_ts_query_string_count=Module._ts_query_string_count=wasmExports.ts_query_string_count)(e),_ts_query_capture_name_for_id=Module._ts_query_capture_name_for_id=(e,t,r)=>(_ts_query_capture_name_for_id=Module._ts_query_capture_name_for_id=wasmExports.ts_query_capture_name_for_id)(e,t,r),_ts_query_string_value_for_id=Module._ts_query_string_value_for_id=(e,t,r)=>(_ts_query_string_value_for_id=Module._ts_query_string_value_for_id=wasmExports.ts_query_string_value_for_id)(e,t,r),_ts_query_predicates_for_pattern=Module._ts_query_predicates_for_pattern=(e,t,r)=>(_ts_query_predicates_for_pattern=Module._ts_query_predicates_for_pattern=wasmExports.ts_query_predicates_for_pattern)(e,t,r),_ts_query_disable_capture=Module._ts_query_disable_capture=(e,t,r)=>(_ts_query_disable_capture=Module._ts_query_disable_capture=wasmExports.ts_query_disable_capture)(e,t,r),_ts_tree_copy=Module._ts_tree_copy=e=>(_ts_tree_copy=Module._ts_tree_copy=wasmExports.ts_tree_copy)(e),_ts_tree_delete=Module._ts_tree_delete=e=>(_ts_tree_delete=Module._ts_tree_delete=wasmExports.ts_tree_delete)(e),_ts_init=Module._ts_init=()=>(_ts_init=Module._ts_init=wasmExports.ts_init)(),_ts_parser_new_wasm=Module._ts_parser_new_wasm=()=>(_ts_parser_new_wasm=Module._ts_parser_new_wasm=wasmExports.ts_parser_new_wasm)(),_ts_parser_enable_logger_wasm=Module._ts_parser_enable_logger_wasm=(e,t)=>(_ts_parser_enable_logger_wasm=Module._ts_parser_enable_logger_wasm=wasmExports.ts_parser_enable_logger_wasm)(e,t),_ts_parser_parse_wasm=Module._ts_parser_parse_wasm=(e,t,r,n,s)=>(_ts_parser_parse_wasm=Module._ts_parser_parse_wasm=wasmExports.ts_parser_parse_wasm)(e,t,r,n,s),_ts_parser_included_ranges_wasm=Module._ts_parser_included_ranges_wasm=e=>(_ts_parser_included_ranges_wasm=Module._ts_parser_included_ranges_wasm=wasmExports.ts_parser_included_ranges_wasm)(e),_ts_language_type_is_named_wasm=Module._ts_language_type_is_named_wasm=(e,t)=>(_ts_language_type_is_named_wasm=Module._ts_language_type_is_named_wasm=wasmExports.ts_language_type_is_named_wasm)(e,t),_ts_language_type_is_visible_wasm=Module._ts_language_type_is_visible_wasm=(e,t)=>(_ts_language_type_is_visible_wasm=Module._ts_language_type_is_visible_wasm=wasmExports.ts_language_type_is_visible_wasm)(e,t),_ts_tree_root_node_wasm=Module._ts_tree_root_node_wasm=e=>(_ts_tree_root_node_wasm=Module._ts_tree_root_node_wasm=wasmExports.ts_tree_root_node_wasm)(e),_ts_tree_root_node_with_offset_wasm=Module._ts_tree_root_node_with_offset_wasm=e=>(_ts_tree_root_node_with_offset_wasm=Module._ts_tree_root_node_with_offset_wasm=wasmExports.ts_tree_root_node_with_offset_wasm)(e),_ts_tree_edit_wasm=Module._ts_tree_edit_wasm=e=>(_ts_tree_edit_wasm=Module._ts_tree_edit_wasm=wasmExports.ts_tree_edit_wasm)(e),_ts_tree_included_ranges_wasm=Module._ts_tree_included_ranges_wasm=e=>(_ts_tree_included_ranges_wasm=Module._ts_tree_included_ranges_wasm=wasmExports.ts_tree_included_ranges_wasm)(e),_ts_tree_get_changed_ranges_wasm=Module._ts_tree_get_changed_ranges_wasm=(e,t)=>(_ts_tree_get_changed_ranges_wasm=Module._ts_tree_get_changed_ranges_wasm=wasmExports.ts_tree_get_changed_ranges_wasm)(e,t),_ts_tree_cursor_new_wasm=Module._ts_tree_cursor_new_wasm=e=>(_ts_tree_cursor_new_wasm=Module._ts_tree_cursor_new_wasm=wasmExports.ts_tree_cursor_new_wasm)(e),_ts_tree_cursor_delete_wasm=Module._ts_tree_cursor_delete_wasm=e=>(_ts_tree_cursor_delete_wasm=Module._ts_tree_cursor_delete_wasm=wasmExports.ts_tree_cursor_delete_wasm)(e),_ts_tree_cursor_reset_wasm=Module._ts_tree_cursor_reset_wasm=e=>(_ts_tree_cursor_reset_wasm=Module._ts_tree_cursor_reset_wasm=wasmExports.ts_tree_cursor_reset_wasm)(e),_ts_tree_cursor_reset_to_wasm=Module._ts_tree_cursor_reset_to_wasm=(e,t)=>(_ts_tree_cursor_reset_to_wasm=Module._ts_tree_cursor_reset_to_wasm=wasmExports.ts_tree_cursor_reset_to_wasm)(e,t),_ts_tree_cursor_goto_first_child_wasm=Module._ts_tree_cursor_goto_first_child_wasm=e=>(_ts_tree_cursor_goto_first_child_wasm=Module._ts_tree_cursor_goto_first_child_wasm=wasmExports.ts_tree_cursor_goto_first_child_wasm)(e),_ts_tree_cursor_goto_last_child_wasm=Module._ts_tree_cursor_goto_last_child_wasm=e=>(_ts_tree_cursor_goto_last_child_wasm=Module._ts_tree_cursor_goto_last_child_wasm=wasmExports.ts_tree_cursor_goto_last_child_wasm)(e),_ts_tree_cursor_goto_first_child_for_index_wasm=Module._ts_tree_cursor_goto_first_child_for_index_wasm=e=>(_ts_tree_cursor_goto_first_child_for_index_wasm=Module._ts_tree_cursor_goto_first_child_for_index_wasm=wasmExports.ts_tree_cursor_goto_first_child_for_index_wasm)(e),_ts_tree_cursor_goto_first_child_for_position_wasm=Module._ts_tree_cursor_goto_first_child_for_position_wasm=e=>(_ts_tree_cursor_goto_first_child_for_position_wasm=Module._ts_tree_cursor_goto_first_child_for_position_wasm=wasmExports.ts_tree_cursor_goto_first_child_for_position_wasm)(e),_ts_tree_cursor_goto_next_sibling_wasm=Module._ts_tree_cursor_goto_next_sibling_wasm=e=>(_ts_tree_cursor_goto_next_sibling_wasm=Module._ts_tree_cursor_goto_next_sibling_wasm=wasmExports.ts_tree_cursor_goto_next_sibling_wasm)(e),_ts_tree_cursor_goto_previous_sibling_wasm=Module._ts_tree_cursor_goto_previous_sibling_wasm=e=>(_ts_tree_cursor_goto_previous_sibling_wasm=Module._ts_tree_cursor_goto_previous_sibling_wasm=wasmExports.ts_tree_cursor_goto_previous_sibling_wasm)(e),_ts_tree_cursor_goto_descendant_wasm=Module._ts_tree_cursor_goto_descendant_wasm=(e,t)=>(_ts_tree_cursor_goto_descendant_wasm=Module._ts_tree_cursor_goto_descendant_wasm=wasmExports.ts_tree_cursor_goto_descendant_wasm)(e,t),_ts_tree_cursor_goto_parent_wasm=Module._ts_tree_cursor_goto_parent_wasm=e=>(_ts_tree_cursor_goto_parent_wasm=Module._ts_tree_cursor_goto_parent_wasm=wasmExports.ts_tree_cursor_goto_parent_wasm)(e),_ts_tree_cursor_current_node_type_id_wasm=Module._ts_tree_cursor_current_node_type_id_wasm=e=>(_ts_tree_cursor_current_node_type_id_wasm=Module._ts_tree_cursor_current_node_type_id_wasm=wasmExports.ts_tree_cursor_current_node_type_id_wasm)(e),_ts_tree_cursor_current_node_state_id_wasm=Module._ts_tree_cursor_current_node_state_id_wasm=e=>(_ts_tree_cursor_current_node_state_id_wasm=Module._ts_tree_cursor_current_node_state_id_wasm=wasmExports.ts_tree_cursor_current_node_state_id_wasm)(e),_ts_tree_cursor_current_node_is_named_wasm=Module._ts_tree_cursor_current_node_is_named_wasm=e=>(_ts_tree_cursor_current_node_is_named_wasm=Module._ts_tree_cursor_current_node_is_named_wasm=wasmExports.ts_tree_cursor_current_node_is_named_wasm)(e),_ts_tree_cursor_current_node_is_missing_wasm=Module._ts_tree_cursor_current_node_is_missing_wasm=e=>(_ts_tree_cursor_current_node_is_missing_wasm=Module._ts_tree_cursor_current_node_is_missing_wasm=wasmExports.ts_tree_cursor_current_node_is_missing_wasm)(e),_ts_tree_cursor_current_node_id_wasm=Module._ts_tree_cursor_current_node_id_wasm=e=>(_ts_tree_cursor_current_node_id_wasm=Module._ts_tree_cursor_current_node_id_wasm=wasmExports.ts_tree_cursor_current_node_id_wasm)(e),_ts_tree_cursor_start_position_wasm=Module._ts_tree_cursor_start_position_wasm=e=>(_ts_tree_cursor_start_position_wasm=Module._ts_tree_cursor_start_position_wasm=wasmExports.ts_tree_cursor_start_position_wasm)(e),_ts_tree_cursor_end_position_wasm=Module._ts_tree_cursor_end_position_wasm=e=>(_ts_tree_cursor_end_position_wasm=Module._ts_tree_cursor_end_position_wasm=wasmExports.ts_tree_cursor_end_position_wasm)(e),_ts_tree_cursor_start_index_wasm=Module._ts_tree_cursor_start_index_wasm=e=>(_ts_tree_cursor_start_index_wasm=Module._ts_tree_cursor_start_index_wasm=wasmExports.ts_tree_cursor_start_index_wasm)(e),_ts_tree_cursor_end_index_wasm=Module._ts_tree_cursor_end_index_wasm=e=>(_ts_tree_cursor_end_index_wasm=Module._ts_tree_cursor_end_index_wasm=wasmExports.ts_tree_cursor_end_index_wasm)(e),_ts_tree_cursor_current_field_id_wasm=Module._ts_tree_cursor_current_field_id_wasm=e=>(_ts_tree_cursor_current_field_id_wasm=Module._ts_tree_cursor_current_field_id_wasm=wasmExports.ts_tree_cursor_current_field_id_wasm)(e),_ts_tree_cursor_current_depth_wasm=Module._ts_tree_cursor_current_depth_wasm=e=>(_ts_tree_cursor_current_depth_wasm=Module._ts_tree_cursor_current_depth_wasm=wasmExports.ts_tree_cursor_current_depth_wasm)(e),_ts_tree_cursor_current_descendant_index_wasm=Module._ts_tree_cursor_current_descendant_index_wasm=e=>(_ts_tree_cursor_current_descendant_index_wasm=Module._ts_tree_cursor_current_descendant_index_wasm=wasmExports.ts_tree_cursor_current_descendant_index_wasm)(e),_ts_tree_cursor_current_node_wasm=Module._ts_tree_cursor_current_node_wasm=e=>(_ts_tree_cursor_current_node_wasm=Module._ts_tree_cursor_current_node_wasm=wasmExports.ts_tree_cursor_current_node_wasm)(e),_ts_node_symbol_wasm=Module._ts_node_symbol_wasm=e=>(_ts_node_symbol_wasm=Module._ts_node_symbol_wasm=wasmExports.ts_node_symbol_wasm)(e),_ts_node_field_name_for_child_wasm=Module._ts_node_field_name_for_child_wasm=(e,t)=>(_ts_node_field_name_for_child_wasm=Module._ts_node_field_name_for_child_wasm=wasmExports.ts_node_field_name_for_child_wasm)(e,t),_ts_node_children_by_field_id_wasm=Module._ts_node_children_by_field_id_wasm=(e,t)=>(_ts_node_children_by_field_id_wasm=Module._ts_node_children_by_field_id_wasm=wasmExports.ts_node_children_by_field_id_wasm)(e,t),_ts_node_first_child_for_byte_wasm=Module._ts_node_first_child_for_byte_wasm=e=>(_ts_node_first_child_for_byte_wasm=Module._ts_node_first_child_for_byte_wasm=wasmExports.ts_node_first_child_for_byte_wasm)(e),_ts_node_first_named_child_for_byte_wasm=Module._ts_node_first_named_child_for_byte_wasm=e=>(_ts_node_first_named_child_for_byte_wasm=Module._ts_node_first_named_child_for_byte_wasm=wasmExports.ts_node_first_named_child_for_byte_wasm)(e),_ts_node_grammar_symbol_wasm=Module._ts_node_grammar_symbol_wasm=e=>(_ts_node_grammar_symbol_wasm=Module._ts_node_grammar_symbol_wasm=wasmExports.ts_node_grammar_symbol_wasm)(e),_ts_node_child_count_wasm=Module._ts_node_child_count_wasm=e=>(_ts_node_child_count_wasm=Module._ts_node_child_count_wasm=wasmExports.ts_node_child_count_wasm)(e),_ts_node_named_child_count_wasm=Module._ts_node_named_child_count_wasm=e=>(_ts_node_named_child_count_wasm=Module._ts_node_named_child_count_wasm=wasmExports.ts_node_named_child_count_wasm)(e),_ts_node_child_wasm=Module._ts_node_child_wasm=(e,t)=>(_ts_node_child_wasm=Module._ts_node_child_wasm=wasmExports.ts_node_child_wasm)(e,t),_ts_node_named_child_wasm=Module._ts_node_named_child_wasm=(e,t)=>(_ts_node_named_child_wasm=Module._ts_node_named_child_wasm=wasmExports.ts_node_named_child_wasm)(e,t),_ts_node_child_by_field_id_wasm=Module._ts_node_child_by_field_id_wasm=(e,t)=>(_ts_node_child_by_field_id_wasm=Module._ts_node_child_by_field_id_wasm=wasmExports.ts_node_child_by_field_id_wasm)(e,t),_ts_node_next_sibling_wasm=Module._ts_node_next_sibling_wasm=e=>(_ts_node_next_sibling_wasm=Module._ts_node_next_sibling_wasm=wasmExports.ts_node_next_sibling_wasm)(e),_ts_node_prev_sibling_wasm=Module._ts_node_prev_sibling_wasm=e=>(_ts_node_prev_sibling_wasm=Module._ts_node_prev_sibling_wasm=wasmExports.ts_node_prev_sibling_wasm)(e),_ts_node_next_named_sibling_wasm=Module._ts_node_next_named_sibling_wasm=e=>(_ts_node_next_named_sibling_wasm=Module._ts_node_next_named_sibling_wasm=wasmExports.ts_node_next_named_sibling_wasm)(e),_ts_node_prev_named_sibling_wasm=Module._ts_node_prev_named_sibling_wasm=e=>(_ts_node_prev_named_sibling_wasm=Module._ts_node_prev_named_sibling_wasm=wasmExports.ts_node_prev_named_sibling_wasm)(e),_ts_node_descendant_count_wasm=Module._ts_node_descendant_count_wasm=e=>(_ts_node_descendant_count_wasm=Module._ts_node_descendant_count_wasm=wasmExports.ts_node_descendant_count_wasm)(e),_ts_node_parent_wasm=Module._ts_node_parent_wasm=e=>(_ts_node_parent_wasm=Module._ts_node_parent_wasm=wasmExports.ts_node_parent_wasm)(e),_ts_node_descendant_for_index_wasm=Module._ts_node_descendant_for_index_wasm=e=>(_ts_node_descendant_for_index_wasm=Module._ts_node_descendant_for_index_wasm=wasmExports.ts_node_descendant_for_index_wasm)(e),_ts_node_named_descendant_for_index_wasm=Module._ts_node_named_descendant_for_index_wasm=e=>(_ts_node_named_descendant_for_index_wasm=Module._ts_node_named_descendant_for_index_wasm=wasmExports.ts_node_named_descendant_for_index_wasm)(e),_ts_node_descendant_for_position_wasm=Module._ts_node_descendant_for_position_wasm=e=>(_ts_node_descendant_for_position_wasm=Module._ts_node_descendant_for_position_wasm=wasmExports.ts_node_descendant_for_position_wasm)(e),_ts_node_named_descendant_for_position_wasm=Module._ts_node_named_descendant_for_position_wasm=e=>(_ts_node_named_descendant_for_position_wasm=Module._ts_node_named_descendant_for_position_wasm=wasmExports.ts_node_named_descendant_for_position_wasm)(e),_ts_node_start_point_wasm=Module._ts_node_start_point_wasm=e=>(_ts_node_start_point_wasm=Module._ts_node_start_point_wasm=wasmExports.ts_node_start_point_wasm)(e),_ts_node_end_point_wasm=Module._ts_node_end_point_wasm=e=>(_ts_node_end_point_wasm=Module._ts_node_end_point_wasm=wasmExports.ts_node_end_point_wasm)(e),_ts_node_start_index_wasm=Module._ts_node_start_index_wasm=e=>(_ts_node_start_index_wasm=Module._ts_node_start_index_wasm=wasmExports.ts_node_start_index_wasm)(e),_ts_node_end_index_wasm=Module._ts_node_end_index_wasm=e=>(_ts_node_end_index_wasm=Module._ts_node_end_index_wasm=wasmExports.ts_node_end_index_wasm)(e),_ts_node_to_string_wasm=Module._ts_node_to_string_wasm=e=>(_ts_node_to_string_wasm=Module._ts_node_to_string_wasm=wasmExports.ts_node_to_string_wasm)(e),_ts_node_children_wasm=Module._ts_node_children_wasm=e=>(_ts_node_children_wasm=Module._ts_node_children_wasm=wasmExports.ts_node_children_wasm)(e),_ts_node_named_children_wasm=Module._ts_node_named_children_wasm=e=>(_ts_node_named_children_wasm=Module._ts_node_named_children_wasm=wasmExports.ts_node_named_children_wasm)(e),_ts_node_descendants_of_type_wasm=Module._ts_node_descendants_of_type_wasm=(e,t,r,n,s,o,a)=>(_ts_node_descendants_of_type_wasm=Module._ts_node_descendants_of_type_wasm=wasmExports.ts_node_descendants_of_type_wasm)(e,t,r,n,s,o,a),_ts_node_is_named_wasm=Module._ts_node_is_named_wasm=e=>(_ts_node_is_named_wasm=Module._ts_node_is_named_wasm=wasmExports.ts_node_is_named_wasm)(e),_ts_node_has_changes_wasm=Module._ts_node_has_changes_wasm=e=>(_ts_node_has_changes_wasm=Module._ts_node_has_changes_wasm=wasmExports.ts_node_has_changes_wasm)(e),_ts_node_has_error_wasm=Module._ts_node_has_error_wasm=e=>(_ts_node_has_error_wasm=Module._ts_node_has_error_wasm=wasmExports.ts_node_has_error_wasm)(e),_ts_node_is_error_wasm=Module._ts_node_is_error_wasm=e=>(_ts_node_is_error_wasm=Module._ts_node_is_error_wasm=wasmExports.ts_node_is_error_wasm)(e),_ts_node_is_missing_wasm=Module._ts_node_is_missing_wasm=e=>(_ts_node_is_missing_wasm=Module._ts_node_is_missing_wasm=wasmExports.ts_node_is_missing_wasm)(e),_ts_node_is_extra_wasm=Module._ts_node_is_extra_wasm=e=>(_ts_node_is_extra_wasm=Module._ts_node_is_extra_wasm=wasmExports.ts_node_is_extra_wasm)(e),_ts_node_parse_state_wasm=Module._ts_node_parse_state_wasm=e=>(_ts_node_parse_state_wasm=Module._ts_node_parse_state_wasm=wasmExports.ts_node_parse_state_wasm)(e),_ts_node_next_parse_state_wasm=Module._ts_node_next_parse_state_wasm=e=>(_ts_node_next_parse_state_wasm=Module._ts_node_next_parse_state_wasm=wasmExports.ts_node_next_parse_state_wasm)(e),_ts_query_matches_wasm=Module._ts_query_matches_wasm=(e,t,r,n,s,o,a,_,d,l)=>(_ts_query_matches_wasm=Module._ts_query_matches_wasm=wasmExports.ts_query_matches_wasm)(e,t,r,n,s,o,a,_,d,l),_ts_query_captures_wasm=Module._ts_query_captures_wasm=(e,t,r,n,s,o,a,_,d,l)=>(_ts_query_captures_wasm=Module._ts_query_captures_wasm=wasmExports.ts_query_captures_wasm)(e,t,r,n,s,o,a,_,d,l),_iswalpha=Module._iswalpha=e=>(_iswalpha=Module._iswalpha=wasmExports.iswalpha)(e),_iswblank=Module._iswblank=e=>(_iswblank=Module._iswblank=wasmExports.iswblank)(e),_iswdigit=Module._iswdigit=e=>(_iswdigit=Module._iswdigit=wasmExports.iswdigit)(e),_iswlower=Module._iswlower=e=>(_iswlower=Module._iswlower=wasmExports.iswlower)(e),_iswupper=Module._iswupper=e=>(_iswupper=Module._iswupper=wasmExports.iswupper)(e),_iswxdigit=Module._iswxdigit=e=>(_iswxdigit=Module._iswxdigit=wasmExports.iswxdigit)(e),_memchr=Module._memchr=(e,t,r)=>(_memchr=Module._memchr=wasmExports.memchr)(e,t,r),_strlen=Module._strlen=e=>(_strlen=Module._strlen=wasmExports.strlen)(e),_strcmp=Module._strcmp=(e,t)=>(_strcmp=Module._strcmp=wasmExports.strcmp)(e,t),_strncat=Module._strncat=(e,t,r)=>(_strncat=Module._strncat=wasmExports.strncat)(e,t,r),_strncpy=Module._strncpy=(e,t,r)=>(_strncpy=Module._strncpy=wasmExports.strncpy)(e,t,r),_towlower=Module._towlower=e=>(_towlower=Module._towlower=wasmExports.towlower)(e),_towupper=Module._towupper=e=>(_towupper=Module._towupper=wasmExports.towupper)(e),_setThrew=(e,t)=>(_setThrew=wasmExports.setThrew)(e,t),stackSave=()=>(stackSave=wasmExports.stackSave)(),stackRestore=e=>(stackRestore=wasmExports.stackRestore)(e),stackAlloc=e=>(stackAlloc=wasmExports.stackAlloc)(e),dynCall_jiji=Module.dynCall_jiji=(e,t,r,n,s)=>(dynCall_jiji=Module.dynCall_jiji=wasmExports.dynCall_jiji)(e,t,r,n,s),_orig$ts_parser_timeout_micros=Module._orig$ts_parser_timeout_micros=e=>(_orig$ts_parser_timeout_micros=Module._orig$ts_parser_timeout_micros=wasmExports.orig$ts_parser_timeout_micros)(e),_orig$ts_parser_set_timeout_micros=Module._orig$ts_parser_set_timeout_micros=(e,t)=>(_orig$ts_parser_set_timeout_micros=Module._orig$ts_parser_set_timeout_micros=wasmExports.orig$ts_parser_set_timeout_micros)(e,t),calledRun;function callMain(e=[]){var t=resolveGlobalSymbol("main").sym;if(t){e.unshift(thisProgram);var r=e.length,n=stackAlloc(4*(r+1)),s=n;e.forEach(a=>{HEAPU32[s>>2]=stringToUTF8OnStack(a),s+=4}),HEAPU32[s>>2]=0;try{var o=t(r,n);return exitJS(o,!0),o}catch(a){return handleException(a)}}}function run(e=arguments_){function t(){calledRun||(calledRun=!0,Module.calledRun=!0,ABORT||(initRuntime(),preMain(),Module.onRuntimeInitialized&&Module.onRuntimeInitialized(),shouldRunNow&&callMain(e),postRun()))}runDependencies>0||(preRun(),runDependencies>0||(Module.setStatus?(Module.setStatus("Running..."),setTimeout(function(){setTimeout(function(){Module.setStatus("")},1),t()},1)):t()))}if(Module.AsciiToString=AsciiToString,Module.stringToUTF16=stringToUTF16,dependenciesFulfilled=function e(){calledRun||run(),calledRun||(dependenciesFulfilled=e)},Module.preInit)for(typeof Module.preInit=="function"&&(Module.preInit=[Module.preInit]);Module.preInit.length>0;)Module.preInit.pop()();var shouldRunNow=!0;Module.noInitialRun&&(shouldRunNow=!1),run();let C=Module,INTERNAL={},SIZE_OF_INT=4,SIZE_OF_CURSOR=4*SIZE_OF_INT,SIZE_OF_NODE=5*SIZE_OF_INT,SIZE_OF_POINT=2*SIZE_OF_INT,SIZE_OF_RANGE=2*SIZE_OF_INT+2*SIZE_OF_POINT,ZERO_POINT={row:0,column:0},QUERY_WORD_REGEX=/[\w-.]*/g,PREDICATE_STEP_TYPE_CAPTURE=1,PREDICATE_STEP_TYPE_STRING=2,LANGUAGE_FUNCTION_REGEX=/^_?tree_sitter_\w+/,VERSION,MIN_COMPATIBLE_VERSION,TRANSFER_BUFFER,currentParseCallback,currentLogCallback;class ParserImpl{static init(){TRANSFER_BUFFER=C._ts_init(),VERSION=getValue(TRANSFER_BUFFER,"i32"),MIN_COMPATIBLE_VERSION=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32")}initialize(){C._ts_parser_new_wasm(),this[0]=getValue(TRANSFER_BUFFER,"i32"),this[1]=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32")}delete(){C._ts_parser_delete(this[0]),C._free(this[1]),this[0]=0,this[1]=0}setLanguage(t){let r;if(t){if(t.constructor!==Language)throw new Error("Argument must be a Language");{r=t[0];let n=C._ts_language_version(r);if(n<MIN_COMPATIBLE_VERSION||VERSION<n)throw new Error(`Incompatible language version ${n}. Compatibility range ${MIN_COMPATIBLE_VERSION} through ${VERSION}.`)}}else r=0,t=null;return this.language=t,C._ts_parser_set_language(this[0],r),this}getLanguage(){return this.language}parse(t,r,n){if(typeof t=="string")currentParseCallback=(d,l)=>t.slice(d);else{if(typeof t!="function")throw new Error("Argument must be a string or a function");currentParseCallback=t}this.logCallback?(currentLogCallback=this.logCallback,C._ts_parser_enable_logger_wasm(this[0],1)):(currentLogCallback=null,C._ts_parser_enable_logger_wasm(this[0],0));let s=0,o=0;if(n?.includedRanges){s=n.includedRanges.length,o=C._calloc(s,SIZE_OF_RANGE);let d=o;for(let l=0;l<s;l++)marshalRange(d,n.includedRanges[l]),d+=SIZE_OF_RANGE}let a=C._ts_parser_parse_wasm(this[0],this[1],r?r[0]:0,o,s);if(!a)throw currentParseCallback=null,currentLogCallback=null,new Error("Parsing failed");let _=new Tree(INTERNAL,a,this.language,currentParseCallback);return currentParseCallback=null,currentLogCallback=null,_}reset(){C._ts_parser_reset(this[0])}getIncludedRanges(){C._ts_parser_included_ranges_wasm(this[0]);let t=getValue(TRANSFER_BUFFER,"i32"),r=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),n=new Array(t);if(t>0){let s=r;for(let o=0;o<t;o++)n[o]=unmarshalRange(s),s+=SIZE_OF_RANGE;C._free(r)}return n}getTimeoutMicros(){return C._ts_parser_timeout_micros(this[0])}setTimeoutMicros(t){C._ts_parser_set_timeout_micros(this[0],t)}setLogger(t){if(t){if(typeof t!="function")throw new Error("Logger callback must be a function")}else t=null;return this.logCallback=t,this}getLogger(){return this.logCallback}}class Tree{constructor(t,r,n,s){assertInternal(t),this[0]=r,this.language=n,this.textCallback=s}copy(){let t=C._ts_tree_copy(this[0]);return new Tree(INTERNAL,t,this.language,this.textCallback)}delete(){C._ts_tree_delete(this[0]),this[0]=0}edit(t){marshalEdit(t),C._ts_tree_edit_wasm(this[0])}get rootNode(){return C._ts_tree_root_node_wasm(this[0]),unmarshalNode(this)}rootNodeWithOffset(t,r){let n=TRANSFER_BUFFER+SIZE_OF_NODE;return setValue(n,t,"i32"),marshalPoint(n+SIZE_OF_INT,r),C._ts_tree_root_node_with_offset_wasm(this[0]),unmarshalNode(this)}getLanguage(){return this.language}walk(){return this.rootNode.walk()}getChangedRanges(t){if(t.constructor!==Tree)throw new TypeError("Argument must be a Tree");C._ts_tree_get_changed_ranges_wasm(this[0],t[0]);let r=getValue(TRANSFER_BUFFER,"i32"),n=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),s=new Array(r);if(r>0){let o=n;for(let a=0;a<r;a++)s[a]=unmarshalRange(o),o+=SIZE_OF_RANGE;C._free(n)}return s}getIncludedRanges(){C._ts_tree_included_ranges_wasm(this[0]);let t=getValue(TRANSFER_BUFFER,"i32"),r=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),n=new Array(t);if(t>0){let s=r;for(let o=0;o<t;o++)n[o]=unmarshalRange(s),s+=SIZE_OF_RANGE;C._free(r)}return n}}class Node{constructor(t,r){assertInternal(t),this.tree=r}get typeId(){return marshalNode(this),C._ts_node_symbol_wasm(this.tree[0])}get grammarId(){return marshalNode(this),C._ts_node_grammar_symbol_wasm(this.tree[0])}get type(){return this.tree.language.types[this.typeId]||"ERROR"}get grammarType(){return this.tree.language.types[this.grammarId]||"ERROR"}get endPosition(){return marshalNode(this),C._ts_node_end_point_wasm(this.tree[0]),unmarshalPoint(TRANSFER_BUFFER)}get endIndex(){return marshalNode(this),C._ts_node_end_index_wasm(this.tree[0])}get text(){return getText(this.tree,this.startIndex,this.endIndex)}get parseState(){return marshalNode(this),C._ts_node_parse_state_wasm(this.tree[0])}get nextParseState(){return marshalNode(this),C._ts_node_next_parse_state_wasm(this.tree[0])}get isNamed(){return marshalNode(this),C._ts_node_is_named_wasm(this.tree[0])===1}get hasError(){return marshalNode(this),C._ts_node_has_error_wasm(this.tree[0])===1}get hasChanges(){return marshalNode(this),C._ts_node_has_changes_wasm(this.tree[0])===1}get isError(){return marshalNode(this),C._ts_node_is_error_wasm(this.tree[0])===1}get isMissing(){return marshalNode(this),C._ts_node_is_missing_wasm(this.tree[0])===1}get isExtra(){return marshalNode(this),C._ts_node_is_extra_wasm(this.tree[0])===1}equals(t){return this.id===t.id}child(t){return marshalNode(this),C._ts_node_child_wasm(this.tree[0],t),unmarshalNode(this.tree)}namedChild(t){return marshalNode(this),C._ts_node_named_child_wasm(this.tree[0],t),unmarshalNode(this.tree)}childForFieldId(t){return marshalNode(this),C._ts_node_child_by_field_id_wasm(this.tree[0],t),unmarshalNode(this.tree)}childForFieldName(t){let r=this.tree.language.fields.indexOf(t);return r!==-1?this.childForFieldId(r):null}fieldNameForChild(t){marshalNode(this);let r=C._ts_node_field_name_for_child_wasm(this.tree[0],t);return r?AsciiToString(r):null}childrenForFieldName(t){let r=this.tree.language.fields.indexOf(t);return r!==-1&&r!==0?this.childrenForFieldId(r):[]}childrenForFieldId(t){marshalNode(this),C._ts_node_children_by_field_id_wasm(this.tree[0],t);let r=getValue(TRANSFER_BUFFER,"i32"),n=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),s=new Array(r);if(r>0){let o=n;for(let a=0;a<r;a++)s[a]=unmarshalNode(this.tree,o),o+=SIZE_OF_NODE;C._free(n)}return s}firstChildForIndex(t){return marshalNode(this),setValue(TRANSFER_BUFFER+SIZE_OF_NODE,t,"i32"),C._ts_node_first_child_for_byte_wasm(this.tree[0]),unmarshalNode(this.tree)}firstNamedChildForIndex(t){return marshalNode(this),setValue(TRANSFER_BUFFER+SIZE_OF_NODE,t,"i32"),C._ts_node_first_named_child_for_byte_wasm(this.tree[0]),unmarshalNode(this.tree)}get childCount(){return marshalNode(this),C._ts_node_child_count_wasm(this.tree[0])}get namedChildCount(){return marshalNode(this),C._ts_node_named_child_count_wasm(this.tree[0])}get firstChild(){return this.child(0)}get firstNamedChild(){return this.namedChild(0)}get lastChild(){return this.child(this.childCount-1)}get lastNamedChild(){return this.namedChild(this.namedChildCount-1)}get children(){if(!this._children){marshalNode(this),C._ts_node_children_wasm(this.tree[0]);let t=getValue(TRANSFER_BUFFER,"i32"),r=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32");if(this._children=new Array(t),t>0){let n=r;for(let s=0;s<t;s++)this._children[s]=unmarshalNode(this.tree,n),n+=SIZE_OF_NODE;C._free(r)}}return this._children}get namedChildren(){if(!this._namedChildren){marshalNode(this),C._ts_node_named_children_wasm(this.tree[0]);let t=getValue(TRANSFER_BUFFER,"i32"),r=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32");if(this._namedChildren=new Array(t),t>0){let n=r;for(let s=0;s<t;s++)this._namedChildren[s]=unmarshalNode(this.tree,n),n+=SIZE_OF_NODE;C._free(r)}}return this._namedChildren}descendantsOfType(t,r,n){Array.isArray(t)||(t=[t]),r||(r=ZERO_POINT),n||(n=ZERO_POINT);let s=[],o=this.tree.language.types;for(let c=0,m=o.length;c<m;c++)t.includes(o[c])&&s.push(c);let a=C._malloc(SIZE_OF_INT*s.length);for(let c=0,m=s.length;c<m;c++)setValue(a+c*SIZE_OF_INT,s[c],"i32");marshalNode(this),C._ts_node_descendants_of_type_wasm(this.tree[0],a,s.length,r.row,r.column,n.row,n.column);let _=getValue(TRANSFER_BUFFER,"i32"),d=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),l=new Array(_);if(_>0){let c=d;for(let m=0;m<_;m++)l[m]=unmarshalNode(this.tree,c),c+=SIZE_OF_NODE}return C._free(d),C._free(a),l}get nextSibling(){return marshalNode(this),C._ts_node_next_sibling_wasm(this.tree[0]),unmarshalNode(this.tree)}get previousSibling(){return marshalNode(this),C._ts_node_prev_sibling_wasm(this.tree[0]),unmarshalNode(this.tree)}get nextNamedSibling(){return marshalNode(this),C._ts_node_next_named_sibling_wasm(this.tree[0]),unmarshalNode(this.tree)}get previousNamedSibling(){return marshalNode(this),C._ts_node_prev_named_sibling_wasm(this.tree[0]),unmarshalNode(this.tree)}get descendantCount(){return marshalNode(this),C._ts_node_descendant_count_wasm(this.tree[0])}get parent(){return marshalNode(this),C._ts_node_parent_wasm(this.tree[0]),unmarshalNode(this.tree)}descendantForIndex(t,r=t){if(typeof t!="number"||typeof r!="number")throw new Error("Arguments must be numbers");marshalNode(this);let n=TRANSFER_BUFFER+SIZE_OF_NODE;return setValue(n,t,"i32"),setValue(n+SIZE_OF_INT,r,"i32"),C._ts_node_descendant_for_index_wasm(this.tree[0]),unmarshalNode(this.tree)}namedDescendantForIndex(t,r=t){if(typeof t!="number"||typeof r!="number")throw new Error("Arguments must be numbers");marshalNode(this);let n=TRANSFER_BUFFER+SIZE_OF_NODE;return setValue(n,t,"i32"),setValue(n+SIZE_OF_INT,r,"i32"),C._ts_node_named_descendant_for_index_wasm(this.tree[0]),unmarshalNode(this.tree)}descendantForPosition(t,r=t){if(!isPoint(t)||!isPoint(r))throw new Error("Arguments must be {row, column} objects");marshalNode(this);let n=TRANSFER_BUFFER+SIZE_OF_NODE;return marshalPoint(n,t),marshalPoint(n+SIZE_OF_POINT,r),C._ts_node_descendant_for_position_wasm(this.tree[0]),unmarshalNode(this.tree)}namedDescendantForPosition(t,r=t){if(!isPoint(t)||!isPoint(r))throw new Error("Arguments must be {row, column} objects");marshalNode(this);let n=TRANSFER_BUFFER+SIZE_OF_NODE;return marshalPoint(n,t),marshalPoint(n+SIZE_OF_POINT,r),C._ts_node_named_descendant_for_position_wasm(this.tree[0]),unmarshalNode(this.tree)}walk(){return marshalNode(this),C._ts_tree_cursor_new_wasm(this.tree[0]),new TreeCursor(INTERNAL,this.tree)}toString(){marshalNode(this);let t=C._ts_node_to_string_wasm(this.tree[0]),r=AsciiToString(t);return C._free(t),r}}class TreeCursor{constructor(t,r){assertInternal(t),this.tree=r,unmarshalTreeCursor(this)}delete(){marshalTreeCursor(this),C._ts_tree_cursor_delete_wasm(this.tree[0]),this[0]=this[1]=this[2]=0}reset(t){marshalNode(t),marshalTreeCursor(this,TRANSFER_BUFFER+SIZE_OF_NODE),C._ts_tree_cursor_reset_wasm(this.tree[0]),unmarshalTreeCursor(this)}resetTo(t){marshalTreeCursor(this,TRANSFER_BUFFER),marshalTreeCursor(t,TRANSFER_BUFFER+SIZE_OF_CURSOR),C._ts_tree_cursor_reset_to_wasm(this.tree[0],t.tree[0]),unmarshalTreeCursor(this)}get nodeType(){return this.tree.language.types[this.nodeTypeId]||"ERROR"}get nodeTypeId(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_type_id_wasm(this.tree[0])}get nodeStateId(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_state_id_wasm(this.tree[0])}get nodeId(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_id_wasm(this.tree[0])}get nodeIsNamed(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_is_named_wasm(this.tree[0])===1}get nodeIsMissing(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_is_missing_wasm(this.tree[0])===1}get nodeText(){marshalTreeCursor(this);let t=C._ts_tree_cursor_start_index_wasm(this.tree[0]),r=C._ts_tree_cursor_end_index_wasm(this.tree[0]);return getText(this.tree,t,r)}get startPosition(){return marshalTreeCursor(this),C._ts_tree_cursor_start_position_wasm(this.tree[0]),unmarshalPoint(TRANSFER_BUFFER)}get endPosition(){return marshalTreeCursor(this),C._ts_tree_cursor_end_position_wasm(this.tree[0]),unmarshalPoint(TRANSFER_BUFFER)}get startIndex(){return marshalTreeCursor(this),C._ts_tree_cursor_start_index_wasm(this.tree[0])}get endIndex(){return marshalTreeCursor(this),C._ts_tree_cursor_end_index_wasm(this.tree[0])}get currentNode(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_wasm(this.tree[0]),unmarshalNode(this.tree)}get currentFieldId(){return marshalTreeCursor(this),C._ts_tree_cursor_current_field_id_wasm(this.tree[0])}get currentFieldName(){return this.tree.language.fields[this.currentFieldId]}get currentDepth(){return marshalTreeCursor(this),C._ts_tree_cursor_current_depth_wasm(this.tree[0])}get currentDescendantIndex(){return marshalTreeCursor(this),C._ts_tree_cursor_current_descendant_index_wasm(this.tree[0])}gotoFirstChild(){marshalTreeCursor(this);let t=C._ts_tree_cursor_goto_first_child_wasm(this.tree[0]);return unmarshalTreeCursor(this),t===1}gotoLastChild(){marshalTreeCursor(this);let t=C._ts_tree_cursor_goto_last_child_wasm(this.tree[0]);return unmarshalTreeCursor(this),t===1}gotoFirstChildForIndex(t){marshalTreeCursor(this),setValue(TRANSFER_BUFFER+SIZE_OF_CURSOR,t,"i32");let r=C._ts_tree_cursor_goto_first_child_for_index_wasm(this.tree[0]);return unmarshalTreeCursor(this),r===1}gotoFirstChildForPosition(t){marshalTreeCursor(this),marshalPoint(TRANSFER_BUFFER+SIZE_OF_CURSOR,t);let r=C._ts_tree_cursor_goto_first_child_for_position_wasm(this.tree[0]);return unmarshalTreeCursor(this),r===1}gotoNextSibling(){marshalTreeCursor(this);let t=C._ts_tree_cursor_goto_next_sibling_wasm(this.tree[0]);return unmarshalTreeCursor(this),t===1}gotoPreviousSibling(){marshalTreeCursor(this);let t=C._ts_tree_cursor_goto_previous_sibling_wasm(this.tree[0]);return unmarshalTreeCursor(this),t===1}gotoDescendant(t){marshalTreeCursor(this),C._ts_tree_cursor_goto_descendant_wasm(this.tree[0],t),unmarshalTreeCursor(this)}gotoParent(){marshalTreeCursor(this);let t=C._ts_tree_cursor_goto_parent_wasm(this.tree[0]);return unmarshalTreeCursor(this),t===1}}class Language{constructor(t,r){assertInternal(t),this[0]=r,this.types=new Array(C._ts_language_symbol_count(this[0]));for(let n=0,s=this.types.length;n<s;n++)C._ts_language_symbol_type(this[0],n)<2&&(this.types[n]=UTF8ToString(C._ts_language_symbol_name(this[0],n)));this.fields=new Array(C._ts_language_field_count(this[0])+1);for(let n=0,s=this.fields.length;n<s;n++){let o=C._ts_language_field_name_for_id(this[0],n);this.fields[n]=o!==0?UTF8ToString(o):null}}get version(){return C._ts_language_version(this[0])}get fieldCount(){return this.fields.length-1}get stateCount(){return C._ts_language_state_count(this[0])}fieldIdForName(t){let r=this.fields.indexOf(t);return r!==-1?r:null}fieldNameForId(t){return this.fields[t]||null}idForNodeType(t,r){let n=lengthBytesUTF8(t),s=C._malloc(n+1);stringToUTF8(t,s,n+1);let o=C._ts_language_symbol_for_name(this[0],s,n,r);return C._free(s),o||null}get nodeTypeCount(){return C._ts_language_symbol_count(this[0])}nodeTypeForId(t){let r=C._ts_language_symbol_name(this[0],t);return r?UTF8ToString(r):null}nodeTypeIsNamed(t){return!!C._ts_language_type_is_named_wasm(this[0],t)}nodeTypeIsVisible(t){return!!C._ts_language_type_is_visible_wasm(this[0],t)}nextState(t,r){return C._ts_language_next_state(this[0],t,r)}lookaheadIterator(t){let r=C._ts_lookahead_iterator_new(this[0],t);return r?new LookaheadIterable(INTERNAL,r,this):null}query(t){let r=lengthBytesUTF8(t),n=C._malloc(r+1);stringToUTF8(t,n,r+1);let s=C._ts_query_new(this[0],n,r,TRANSFER_BUFFER,TRANSFER_BUFFER+SIZE_OF_INT);if(!s){let p=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),E=getValue(TRANSFER_BUFFER,"i32"),y=UTF8ToString(n,E).length,u=t.substr(y,100).split(`
`)[0],w,S=u.match(QUERY_WORD_REGEX)[0];switch(p){case 2:w=new RangeError(`Bad node name '${S}'`);break;case 3:w=new RangeError(`Bad field name '${S}'`);break;case 4:w=new RangeError(`Bad capture name @${S}`);break;case 5:w=new TypeError(`Bad pattern structure at offset ${y}: '${u}'...`),S="";break;default:w=new SyntaxError(`Bad syntax at offset ${y}: '${u}'...`),S=""}throw w.index=y,w.length=S.length,C._free(n),w}let o=C._ts_query_string_count(s),a=C._ts_query_capture_count(s),_=C._ts_query_pattern_count(s),d=new Array(a),l=new Array(o);for(let p=0;p<a;p++){let E=C._ts_query_capture_name_for_id(s,p,TRANSFER_BUFFER),y=getValue(TRANSFER_BUFFER,"i32");d[p]=UTF8ToString(E,y)}for(let p=0;p<o;p++){let E=C._ts_query_string_value_for_id(s,p,TRANSFER_BUFFER),y=getValue(TRANSFER_BUFFER,"i32");l[p]=UTF8ToString(E,y)}let c=new Array(_),m=new Array(_),h=new Array(_),g=new Array(_),b=new Array(_);for(let p=0;p<_;p++){let E=C._ts_query_predicates_for_pattern(s,p,TRANSFER_BUFFER),y=getValue(TRANSFER_BUFFER,"i32");g[p]=[],b[p]=[];let u=[],w=E;for(let S=0;S<y;S++){let k=getValue(w,"i32");w+=SIZE_OF_INT;let Se=getValue(w,"i32");if(w+=SIZE_OF_INT,k===PREDICATE_STEP_TYPE_CAPTURE)u.push({type:"capture",name:d[Se]});else if(k===PREDICATE_STEP_TYPE_STRING)u.push({type:"string",value:l[Se]});else if(u.length>0){if(u[0].type!=="string")throw new Error("Predicates must begin with a literal value");let R=u[0].value,H,L=!0,J=!0;switch(R){case"any-not-eq?":case"not-eq?":L=!1;case"any-eq?":case"eq?":if(u.length!==3)throw new Error(`Wrong number of arguments to \`#${R}\` predicate. Expected 2, got ${u.length-1}`);if(u[1].type!=="capture")throw new Error(`First argument of \`#${R}\` predicate must be a capture. Got "${u[1].value}"`);if(J=!R.startsWith("any-"),u[2].type==="capture"){let M=u[1].name,P=u[2].name;b[p].push(U=>{let I=[],q=[];for(let v of U)v.name===M&&I.push(v.node),v.name===P&&q.push(v.node);let z=(v,Z,ut)=>ut?v.text===Z.text:v.text!==Z.text;return J?I.every(v=>q.some(Z=>z(v,Z,L))):I.some(v=>q.some(Z=>z(v,Z,L)))})}else{H=u[1].name;let M=u[2].value,P=I=>I.text===M,U=I=>I.text!==M;b[p].push(I=>{let q=[];for(let v of I)v.name===H&&q.push(v.node);let z=L?P:U;return J?q.every(z):q.some(z)})}break;case"any-not-match?":case"not-match?":L=!1;case"any-match?":case"match?":if(u.length!==3)throw new Error(`Wrong number of arguments to \`#${R}\` predicate. Expected 2, got ${u.length-1}.`);if(u[1].type!=="capture")throw new Error(`First argument of \`#${R}\` predicate must be a capture. Got "${u[1].value}".`);if(u[2].type!=="string")throw new Error(`Second argument of \`#${R}\` predicate must be a string. Got @${u[2].value}.`);H=u[1].name;let Ie=new RegExp(u[2].value);J=!R.startsWith("any-"),b[p].push(M=>{let P=[];for(let I of M)I.name===H&&P.push(I.node.text);let U=(I,q)=>q?Ie.test(I):!Ie.test(I);return P.length===0?!L:J?P.every(I=>U(I,L)):P.some(I=>U(I,L))});break;case"set!":if(u.length<2||u.length>3)throw new Error(`Wrong number of arguments to \`#set!\` predicate. Expected 1 or 2. Got ${u.length-1}.`);if(u.some(M=>M.type!=="string"))throw new Error('Arguments to `#set!` predicate must be a strings.".');c[p]||(c[p]={}),c[p][u[1].value]=u[2]?u[2].value:null;break;case"is?":case"is-not?":if(u.length<2||u.length>3)throw new Error(`Wrong number of arguments to \`#${R}\` predicate. Expected 1 or 2. Got ${u.length-1}.`);if(u.some(M=>M.type!=="string"))throw new Error(`Arguments to \`#${R}\` predicate must be a strings.".`);let ue=R==="is?"?m:h;ue[p]||(ue[p]={}),ue[p][u[1].value]=u[2]?u[2].value:null;break;case"not-any-of?":L=!1;case"any-of?":if(u.length<2)throw new Error(`Wrong number of arguments to \`#${R}\` predicate. Expected at least 1. Got ${u.length-1}.`);if(u[1].type!=="capture")throw new Error(`First argument of \`#${R}\` predicate must be a capture. Got "${u[1].value}".`);for(let M=2;M<u.length;M++)if(u[M].type!=="string")throw new Error(`Arguments to \`#${R}\` predicate must be a strings.".`);H=u[1].name;let lt=u.slice(2).map(M=>M.value);b[p].push(M=>{let P=[];for(let U of M)U.name===H&&P.push(U.node.text);return P.length===0?!L:P.every(U=>lt.includes(U))===L});break;default:g[p].push({operator:R,operands:u.slice(1)})}u.length=0}}Object.freeze(c[p]),Object.freeze(m[p]),Object.freeze(h[p])}return C._free(n),new Query(INTERNAL,s,d,b,g,Object.freeze(c),Object.freeze(m),Object.freeze(h))}static load(t){let r;if(t instanceof Uint8Array)r=Promise.resolve(t);else{let n=t;if(typeof process<"u"&&process.versions&&process.versions.node){let s=require("fs");r=Promise.resolve(s.readFileSync(n))}else r=fetch(n).then(s=>s.arrayBuffer().then(o=>{if(s.ok)return new Uint8Array(o);{let a=new TextDecoder("utf-8").decode(o);throw new Error(`Language.load failed with status ${s.status}.

${a}`)}}))}return r.then(n=>loadWebAssemblyModule(n,{loadAsync:!0})).then(n=>{let s=Object.keys(n),o=s.find(_=>LANGUAGE_FUNCTION_REGEX.test(_)&&!_.includes("external_scanner_"));o||console.log(`Couldn't find language function in WASM file. Symbols:
${JSON.stringify(s,null,2)}`);let a=n[o]();return new Language(INTERNAL,a)})}}class LookaheadIterable{constructor(t,r,n){assertInternal(t),this[0]=r,this.language=n}get currentTypeId(){return C._ts_lookahead_iterator_current_symbol(this[0])}get currentType(){return this.language.types[this.currentTypeId]||"ERROR"}delete(){C._ts_lookahead_iterator_delete(this[0]),this[0]=0}resetState(t){return C._ts_lookahead_iterator_reset_state(this[0],t)}reset(t,r){return!!C._ts_lookahead_iterator_reset(this[0],t[0],r)&&(this.language=t,!0)}[Symbol.iterator](){let t=this;return{next:()=>C._ts_lookahead_iterator_next(t[0])?{done:!1,value:t.currentType}:{done:!0,value:""}}}}class Query{constructor(t,r,n,s,o,a,_,d){assertInternal(t),this[0]=r,this.captureNames=n,this.textPredicates=s,this.predicates=o,this.setProperties=a,this.assertedProperties=_,this.refutedProperties=d,this.exceededMatchLimit=!1}delete(){C._ts_query_delete(this[0]),this[0]=0}matches(t,{startPosition:r=ZERO_POINT,endPosition:n=ZERO_POINT,startIndex:s=0,endIndex:o=0,matchLimit:a=4294967295,maxStartDepth:_=4294967295}={}){if(typeof a!="number")throw new Error("Arguments must be numbers");marshalNode(t),C._ts_query_matches_wasm(this[0],t.tree[0],r.row,r.column,n.row,n.column,s,o,a,_);let d=getValue(TRANSFER_BUFFER,"i32"),l=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),c=getValue(TRANSFER_BUFFER+2*SIZE_OF_INT,"i32"),m=new Array(d);this.exceededMatchLimit=!!c;let h=0,g=l;for(let b=0;b<d;b++){let p=getValue(g,"i32");g+=SIZE_OF_INT;let E=getValue(g,"i32");g+=SIZE_OF_INT;let y=new Array(E);if(g=unmarshalCaptures(this,t.tree,g,y),this.textPredicates[p].every(u=>u(y))){m[h]={pattern:p,captures:y};let u=this.setProperties[p];u&&(m[h].setProperties=u);let w=this.assertedProperties[p];w&&(m[h].assertedProperties=w);let S=this.refutedProperties[p];S&&(m[h].refutedProperties=S),h++}}return m.length=h,C._free(l),m}captures(t,{startPosition:r=ZERO_POINT,endPosition:n=ZERO_POINT,startIndex:s=0,endIndex:o=0,matchLimit:a=4294967295,maxStartDepth:_=4294967295}={}){if(typeof a!="number")throw new Error("Arguments must be numbers");marshalNode(t),C._ts_query_captures_wasm(this[0],t.tree[0],r.row,r.column,n.row,n.column,s,o,a,_);let d=getValue(TRANSFER_BUFFER,"i32"),l=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),c=getValue(TRANSFER_BUFFER+2*SIZE_OF_INT,"i32"),m=[];this.exceededMatchLimit=!!c;let h=[],g=l;for(let b=0;b<d;b++){let p=getValue(g,"i32");g+=SIZE_OF_INT;let E=getValue(g,"i32");g+=SIZE_OF_INT;let y=getValue(g,"i32");if(g+=SIZE_OF_INT,h.length=E,g=unmarshalCaptures(this,t.tree,g,h),this.textPredicates[p].every(u=>u(h))){let u=h[y],w=this.setProperties[p];w&&(u.setProperties=w);let S=this.assertedProperties[p];S&&(u.assertedProperties=S);let k=this.refutedProperties[p];k&&(u.refutedProperties=k),m.push(u)}}return C._free(l),m}predicatesForPattern(t){return this.predicates[t]}disableCapture(t){let r=lengthBytesUTF8(t),n=C._malloc(r+1);stringToUTF8(t,n,r+1),C._ts_query_disable_capture(this[0],n,r),C._free(n)}didExceedMatchLimit(){return this.exceededMatchLimit}}function getText(e,t,r){let n=r-t,s=e.textCallback(t,null,r);for(t+=s.length;t<r;){let o=e.textCallback(t,null,r);if(!(o&&o.length>0))break;t+=o.length,s+=o}return t>r&&(s=s.slice(0,n)),s}function unmarshalCaptures(e,t,r,n){for(let s=0,o=n.length;s<o;s++){let a=getValue(r,"i32"),_=unmarshalNode(t,r+=SIZE_OF_INT);r+=SIZE_OF_NODE,n[s]={name:e.captureNames[a],node:_}}return r}function assertInternal(e){if(e!==INTERNAL)throw new Error("Illegal constructor")}function isPoint(e){return e&&typeof e.row=="number"&&typeof e.column=="number"}function marshalNode(e){let t=TRANSFER_BUFFER;setValue(t,e.id,"i32"),t+=SIZE_OF_INT,setValue(t,e.startIndex,"i32"),t+=SIZE_OF_INT,setValue(t,e.startPosition.row,"i32"),t+=SIZE_OF_INT,setValue(t,e.startPosition.column,"i32"),t+=SIZE_OF_INT,setValue(t,e[0],"i32")}function unmarshalNode(e,t=TRANSFER_BUFFER){let r=getValue(t,"i32");if(r===0)return null;let n=getValue(t+=SIZE_OF_INT,"i32"),s=getValue(t+=SIZE_OF_INT,"i32"),o=getValue(t+=SIZE_OF_INT,"i32"),a=getValue(t+=SIZE_OF_INT,"i32"),_=new Node(INTERNAL,e);return _.id=r,_.startIndex=n,_.startPosition={row:s,column:o},_[0]=a,_}function marshalTreeCursor(e,t=TRANSFER_BUFFER){setValue(t+0*SIZE_OF_INT,e[0],"i32"),setValue(t+1*SIZE_OF_INT,e[1],"i32"),setValue(t+2*SIZE_OF_INT,e[2],"i32"),setValue(t+3*SIZE_OF_INT,e[3],"i32")}function unmarshalTreeCursor(e){e[0]=getValue(TRANSFER_BUFFER+0*SIZE_OF_INT,"i32"),e[1]=getValue(TRANSFER_BUFFER+1*SIZE_OF_INT,"i32"),e[2]=getValue(TRANSFER_BUFFER+2*SIZE_OF_INT,"i32"),e[3]=getValue(TRANSFER_BUFFER+3*SIZE_OF_INT,"i32")}function marshalPoint(e,t){setValue(e,t.row,"i32"),setValue(e+SIZE_OF_INT,t.column,"i32")}function unmarshalPoint(e){return{row:getValue(e,"i32")>>>0,column:getValue(e+SIZE_OF_INT,"i32")>>>0}}function marshalRange(e,t){marshalPoint(e,t.startPosition),marshalPoint(e+=SIZE_OF_POINT,t.endPosition),setValue(e+=SIZE_OF_POINT,t.startIndex,"i32"),setValue(e+=SIZE_OF_INT,t.endIndex,"i32"),e+=SIZE_OF_INT}function unmarshalRange(e){let t={};return t.startPosition=unmarshalPoint(e),e+=SIZE_OF_POINT,t.endPosition=unmarshalPoint(e),e+=SIZE_OF_POINT,t.startIndex=getValue(e,"i32")>>>0,e+=SIZE_OF_INT,t.endIndex=getValue(e,"i32")>>>0,t}function marshalEdit(e){let t=TRANSFER_BUFFER;marshalPoint(t,e.startPosition),t+=SIZE_OF_POINT,marshalPoint(t,e.oldEndPosition),t+=SIZE_OF_POINT,marshalPoint(t,e.newEndPosition),t+=SIZE_OF_POINT,setValue(t,e.startIndex,"i32"),t+=SIZE_OF_INT,setValue(t,e.oldEndIndex,"i32"),t+=SIZE_OF_INT,setValue(t,e.newEndIndex,"i32"),t+=SIZE_OF_INT}for(let e of Object.getOwnPropertyNames(ParserImpl.prototype))Object.defineProperty(Parser.prototype,e,{value:ParserImpl.prototype[e],enumerable:!1,writable:!1});Parser.Language=Language,Module.onRuntimeInitialized=()=>{ParserImpl.init(),resolveInitPromise()}}))}}return Parser}();typeof exports=="object"&&(module.exports=TreeSitter)});var dt=require("worker_threads");var Ee={};yt(Ee,{_dispose:()=>ve,_findLastTest:()=>Xe,_getCallExpressions:()=>Pt,_getClassDeclarations:()=>Ot,_getClassReferences:()=>Ut,_getCoarseParentScope:()=>Gt,_getDocumentableNodeIfOnIdentifier:()=>Ze,_getFineScopes:()=>jt,_getFixSelectionOfInterest:()=>Vt,_getFunctionBodies:()=>qt,_getFunctionDefinitions:()=>Ft,_getNodeMatchingSelection:()=>j,_getNodeToDocument:()=>He,_getNodeToExplain:()=>Ht,_getSemanticChunkNames:()=>Wt,_getSemanticChunkTree:()=>Dt,_getStructure:()=>tr,_getSymbols:()=>Bt,_getTestableNode:()=>Ke,_getTestableNodes:()=>Ye,_getTypeDeclarations:()=>kt,_getTypeReferences:()=>Lt,getBlockNameTree:()=>at});function Me(e,t,r){let n=0,s=e.length;for(;n<s;){let o=n+s>>>1;r(e[o],t)?n=o+1:s=o}return n}function Ne(e,t){if(e.length===0)return;let r=e[0];for(let n=1;n<e.length;n++){let s=e[n];t(s,r)>0&&(r=s)}return r}var me=class{constructor(){this.listeners=[],this.unexpectedErrorHandler=function(t){setTimeout(()=>{throw t.stack?ie.isErrorNoTelemetry(t)?new ie(t.message+`

`+t.stack):new Error(t.message+`

`+t.stack):t},0)}}addListener(t){return this.listeners.push(t),()=>{this._removeListener(t)}}emit(t){this.listeners.forEach(r=>{r(t)})}_removeListener(t){this.listeners.splice(this.listeners.indexOf(t),1)}setUnexpectedErrorHandler(t){this.unexpectedErrorHandler=t}getUnexpectedErrorHandler(){return this.unexpectedErrorHandler}onUnexpectedError(t){this.unexpectedErrorHandler(t),this.emit(t)}onUnexpectedExternalError(t){this.unexpectedErrorHandler(t)}},or=new me;var ie=class e extends Error{constructor(t){super(t),this.name="CodeExpectedError"}static fromError(t){if(t instanceof e)return t;let r=new e;return r.message=t.message,r.stack=t.stack,r}static isErrorNoTelemetry(t){return t.name==="CodeExpectedError"}},$=class e extends Error{constructor(t){super(t||"An unexpected bug occurred."),Object.setPrototypeOf(this,e.prototype)}};var x={doesContain:(e,t)=>e.startIndex<=t.startIndex&&t.endIndex<=e.endIndex,ofSyntaxNode:e=>({startIndex:e.startIndex,endIndex:e.endIndex}),compare:(e,t)=>e.startIndex-t.startIndex||t.endIndex-e.endIndex,isEqual:(e,t)=>x.compare(e,t)===0,doIntersect:(e,t)=>{let r=Math.max(e.startIndex,t.startIndex),n=Math.min(e.endIndex,t.endIndex);return r<n},len:e=>e.endIndex-e.startIndex,intersectionSize:(e,t)=>{let r=Math.max(e.startIndex,t.startIndex),n=Math.min(e.endIndex,t.endIndex);return Math.max(n-r,0)},isTreeSitterOffsetRange(e){return typeof e.startIndex=="number"&&typeof e.endIndex=="number"}},B={isEqual(e,t){return e.row===t.row&&e.column===t.column},isBefore(e,t){return e.row<t.row||e.row===t.row&&e.column<t.column},isAfter(e,t){return B.isBefore(t,e)},isBeforeOrEqual(e,t){let r=B.isBefore(e,t),n=B.isEqual(e,t);return!!(r||n)},equals(e,t){return e.column===t.column&&e.row===t.row},isAfterOrEqual(e,t){return B.isBeforeOrEqual(t,e)},ofPoint:e=>({row:e.row,column:e.column})},G={doesContain:(e,t)=>B.isBeforeOrEqual(e.startPosition,t.startPosition)&&B.isAfterOrEqual(e.endPosition,t.endPosition),equals:(e,t)=>B.equals(e.startPosition,t.startPosition)&&B.equals(e.endPosition,t.endPosition),ofSyntaxNode:e=>({startPosition:e.startPosition,endPosition:e.endPosition})},V={ofSyntaxNode:e=>({type:e.type,startIndex:e.startIndex,endIndex:e.endIndex})},A={ofSyntaxNode:e=>({range:G.ofSyntaxNode(e),startIndex:e.startIndex,text:e.text,endIndex:e.endIndex})},K=class{constructor(t,r,n,s){this.startIndex=t;this.endIndex=r;this.kind=n;this.children=s;if(t>r)throw new $("startIndex must be less than endIndex");let o=t;for(let a of s){if(a.startIndex<o)throw new $("Invalid child startIndex");if(a.endIndex>r)throw new $("Invalid child endIndex");o=Math.max(a.endIndex,o)}}toString(){let t=[];function r(n,s=""){t.push(`${s}${n.kind} [${n.startIndex}, ${n.endIndex}]`),n.children.forEach(o=>r(o,s+"    "))}return r(this),t.join(`
`)}};var Y=class{constructor(t,r){this.syntaxTreeRoot=r;this.roots=[];this.formTree(t)}formTree(t){t.sort((o,a)=>o.mainBlock.startIndex-a.mainBlock.startIndex||o.mainBlock.endIndex-a.mainBlock.endIndex);let r=[],n=()=>r[r.length-1],s=(o,a)=>o.mainBlock.startIndex===a.mainBlock.startIndex&&o.mainBlock.endIndex===a.mainBlock.endIndex;for(let o of t){let a={info:o,children:[]},_=n();if(!_){this.roots.push(a),r.push(a);continue}if(!s(_.info,o)){for(;_&&!x.doesContain(_.info.mainBlock,o.mainBlock);)r.pop(),_=n();_?_.children.push(a):this.roots.push(a),r.push(a)}}}};var X=class{constructor(t,r){this.prev=null;this.next=null;this.key=t,this.value=r}},Q=class{constructor(t=10){if(t<1)throw new Error("Cache size must be at least 1");this._capacity=t,this._cache=new Map,this._head=new X("",null),this._tail=new X("",null),this._head.next=this._tail,this._tail.prev=this._head}_addNode(t){t.prev=this._head,t.next=this._head.next,this._head.next.prev=t,this._head.next=t}_removeNode(t){let r=t.prev,n=t.next;r.next=n,n.prev=r}_moveToHead(t){this._removeNode(t),this._addNode(t)}_popTail(){let t=this._tail.prev;return this._removeNode(t),t}clear(){this._cache.clear(),this._head.next=this._tail,this._tail.prev=this._head}deleteKey(t){let r=this._cache.get(t);if(r)return this._removeNode(r),this._cache.delete(t),r.value}get(t){let r=this._cache.get(t);if(r)return this._moveToHead(r),r.value}keys(){let t=[],r=this._head.next;for(;r!==this._tail;)t.push(r.key),r=r.next;return t}getValues(){let t=[],r=this._head.next;for(;r!==this._tail;)t.push(r.value),r=r.next;return t}put(t,r){let n=this._cache.get(t);if(n)n.value=r,this._moveToHead(n);else if(n=new X(t,r),this._cache.set(t,n),this._addNode(n),this._cache.size>this._capacity){let s=this._popTail();return this._cache.delete(s.key),[s.key,s.value]}}},ae=class{constructor(t){this.actual=new Q(t)}dispose(){this.clear()}clear(){let t=this.actual.getValues();for(let r of t)r.dispose();this.actual.clear()}deleteKey(t){let r=this.actual.deleteKey(t);r&&r.dispose()}get(t){return this.actual.get(t)}keys(){return this.actual.keys()}getValues(){return this.actual.getValues()}put(t,r){let n=this.actual.put(t,r);n&&n[1].dispose()}};var ee=xt(require("path")),Tt=_e(),de=class{constructor(){this.loadedLanguagesCache=new Map}loadLanguage(t){return this.loadedLanguagesCache.has(t)||this.loadedLanguagesCache.set(t,this._doLoadLanguage(t)),this.loadedLanguagesCache.get(t)}_doLoadLanguage(t){let n=`tree-sitter-${t==="csharp"?"c-sharp":t}.wasm`,s=ee.basename(__dirname)==="dist"?ee.resolve(__dirname,n):ee.resolve(__dirname,"../../../../dist",n);return Tt.Language.load(s)}};var Re=_e(),le=class e{static{this.INSTANCE=new e}static{this.CACHE_SIZE_PER_LANGUAGE=5}constructor(){this.caches=new Map,this.languageLoader=new de,this._parser=null}get parser(){return this._parser||(this._parser=new Re),this._parser}async parse(t,r){await Re.init();let n=this.getParseTreeCache(t),s=n.get(r);if(s)return s.createReference();let o=await this.languageLoader.loadLanguage(t);if(this.parser.setLanguage(o),s=n.get(r),s)return s.createReference();let a=this.parser.parse(r);return s=new pe(a),n.put(r,s),s.createReference()}dispose(){this._parser&&(this.parser.delete(),this._parser=null);for(let t of this.caches.values())t.dispose()}getParseTreeCache(t){let r=this.caches.get(t);return r||(r=new ae(e.CACHE_SIZE_PER_LANGUAGE),this.caches.set(t,r)),r}},pe=class{constructor(t){this._tree=new he(t)}dispose(){this._tree.deref()}createReference(){return new fe(this._tree)}},fe=class{constructor(t){this._parseTree=t;this._parseTree.ref()}get tree(){return this._parseTree.tree}dispose(){this._parseTree.deref()}},he=class{constructor(t){this._tree=t;this._refCount=1}get tree(){if(this._refCount===0)throw new Error("Cannot access disposed RefCountedParseTree");return this._tree}ref(){if(this._refCount===0)throw new Error("Cannot ref disposed RefCountedParseTree");this._refCount++}deref(){if(this._refCount===0)throw new Error("Cannot deref disposed RefCountedParseTree");this._refCount--,this._refCount===0&&this._tree.delete()}};function ve(){le.INSTANCE.dispose()}function T(e,t){return le.INSTANCE.parse(e,t)}var ge=class{constructor(t){this.language=t;this.map=new Map}getQuery(t){return this.map.has(t)||this.map.set(t,this.language.query(t)),this.map.get(t)}},ye=class e{constructor(){this.map=new Map}static{this.INSTANCE=new e}getQuery(t,r){return this.map.has(t)||this.map.set(t,new ge(t)),this.map.get(t).getQuery(r)}};function N(e,t){let r=[];for(let n of e){let o=ye.INSTANCE.getQuery(t.tree.getLanguage(),n).matches(t);r.push(...o)}return r}function te(e,t){switch(t){case"python":case"csharp":return e.children.find(r=>r.type.match(/identifier/))?.text;case"go":{let r=e.children.find(s=>s.type.match(/identifier/));return r?r.text:e.children.find(s=>s.type.match(/spec/))?.children.find(s=>s.type.match(/identifier/))?.text}case"javascript":case"javascriptreact":case"typescript":case"typescriptreact":case"cpp":{let r=e.children.find(s=>s.type.match(/declarator/));return r?r.children.find(s=>s.type.match(/identifier/))?.text:e.children.find(s=>s.type.match(/identifier/))?.text}case"java":return e.children.find(n=>n.type==="identifier")?.text;case"ruby":return e.children.find(r=>r.type.match(/constant|identifier/))?.text;default:return e.children.find(r=>r.type.match(/identifier/))?.text}}function re(e,t){switch(t){case"typescript":case"tsx":case"javascript":return e.type.match(/definition|declaration|declarator|export_statement/);case"go":return e.type.match(/definition|declaration|declarator|var_spec/);case"cpp":return e.type.match(/definition|declaration|class_specifier/);case"ruby":return e.type.match(/module|class|method|assignment/);default:return e.type.match(/definition|declaration|declarator/)}}function j(e,t,r,n=re){let s=[e.rootNode],o=[];for(;;){let a=s.map(_=>[_,x.intersectionSize(_,t)]).filter(([_,d])=>d>0).sort(([_,d],[l,c])=>c-d);if(a.length===0)return o.length===0?void 0:Ne(o,([_,d],[l,c])=>d-c)[0];{let _=a.map(([d,l])=>{let c=x.len(d),m=Math.abs(x.len(t)-l),g=(l-m)/c;return[d,g]});o.push(..._.filter(([d,l])=>n(d,r))),s=[],s.push(..._.flatMap(([d,l])=>d.children))}}}var f=(()=>{function e(t,...r){return t.length===1?t[0]:t.reduce((n,s,o)=>`${n}${s}${r[o]||""}`,"")}return{typescript:e,javascript:e,python:e,go:e,ruby:e,csharp:e,cpp:e,java:e,rust:e}})();function F(e,t){return Object.fromEntries(e.map(r=>[r,t]))}var bt={javascript:[],typescript:[],tsx:[],python:[],csharp:[],go:[],java:[],ruby:[],cpp:[],rust:[]};function O(e){for(let t in e){let r=e[t];bt[t].push(...r)}return e}var Ce=O({...F(["javascript","typescript","tsx"],[`[
			(call_expression
				function: (identifier) @identifier)
			(call_expression
				function: (member_expression
					(property_identifier) @identifier))
		] @call_expression`]),python:[`[
			(call
				function: (identifier) @identifier)
			(call
				function: (attribute
					attribute: (identifier) @identifier))
		] @call_expression`],csharp:[`[
			(invocation_expression
				function: (identifier) @identifier)
			(invocation_expression
				function: (member_access_expression
					name: (identifier) @identifier))
		] @call_expression`],go:[`[
			(call_expression
				((selector_expression
					(field_identifier) @identifier)))
			(call_expression
				(identifier) @identifier)
		] @call_expression`],java:[`[
			(method_invocation
				name: (identifier) @identifier)
		] @call_expression`],ruby:[`[
			(call (identifier) @identifier
				(#not-match? @identifier "new|send|public_send|method"))
			(call
				receiver: (identifier)
				method: (identifier) @method
				(#match? @method "^(send|public_send|method)")
				arguments: (argument_list
					(simple_symbol) @symbol))
		] @call_expression`],cpp:[`[
			(function_declarator
				(identifier) @identifier)
			(function_declarator
				(field_identifier) @identifier)
			(call_expression (identifier) @identifier)
			(call_expression
				(field_expression
					field: (field_identifier) @identifier))
			(call_expression
				(call_expression
					(primitive_type)
					(argument_list
						(pointer_expression
						(identifier) @identifier))))
		] @call_expression`],rust:[`[
			(call_expression (identifier) @identifier)
			(call_expression (field_expression (identifier) (field_identifier) @identifier))
			(call_expression (scoped_identifier (identifier) (identifier) @identifier (#not-match? @identifier "new")))
		] @call_expression`]}),Ae=O({...F(["javascript","typescript","tsx"],["(class_declaration) @class_declaration"]),java:["(class_declaration) @class_declaration"],csharp:["(class_declaration) @class_declaration"],python:["(class_definition) @class_declaration"],cpp:["(class_specifier) @class_declaration"],ruby:["(class) @class_declaration"],go:[`(type_declaration
			(type_spec
				(type_identifier) @type_identifier)) @class_declaration`],rust:["(impl_item (type_identifier) @type_identifier) @class_declaration"]}),Pe=O({typescript:[`[
			(interface_declaration)
			(type_alias_declaration)
		] @type_declaration`],csharp:[`(interface_declaration
			(identifier) @type_identifier) @type_declaration`],cpp:[`[
			(struct_specifier
				(type_identifier) @type_identifier)
			(union_specifier
				(type_identifier) @type_identifier)
			(enum_specifier
				(type_identifier) @type_identifier)
		] @type_declaration`],java:[`(interface_declaration
			(identifier) @type_identifier) @type_declaration`],go:[`(type_declaration
			(type_spec
				(type_identifier) @type_identifier)) @type_declaration`],ruby:["((constant) @type_identifier) @type_declaration"],python:[`(class_definition
			(identifier) @type_identifier) @type_declaration`]}),Fe=O({typescript:["(type_identifier) @type_identifier"],go:["(type_identifier) @type_identifier"],ruby:["(constant) @type_identifier"],csharp:[`[
			(base_list
				(identifier) @type_identifier)
			(variable_declaration
				(identifier) @type_identifier)
		]`],cpp:["(type_identifier) @type_identifier"],java:["(type_identifier) @type_identifier"],python:[`[
			(type (identifier) @type_identifier)
			(argument_list
				(identifier) @type_identifier)
		]`]}),Oe=O({...F(["javascript","typescript","tsx"],[`(new_expression
			constructor: (identifier) @new_expression)`]),python:[`(call
			function: (identifier) @new_expression)`],csharp:[`(object_creation_expression
			(identifier) @new_expression)`],java:[`(object_creation_expression
			(type_identifier) @new_expression)`],cpp:[`[
			(declaration
				(type_identifier) @new_expression)
			(class_specifier
				(type_identifier) @new_expression)
		]`],go:["(composite_literal (type_identifier) @new_expression)"],ruby:[`((call
			receiver: ((constant) @new_expression)
			method: (identifier) @method)
				(#eq? @method "new"))`],rust:[`(call_expression
			(scoped_identifier
				(identifier) @new_expression
				(identifier) @identifier
				(#eq? @identifier "new")))`]}),ke=O({python:[`[
			(function_definition
				name: (identifier) @identifier
				body: (block
						(expression_statement (string))? @docstring) @body)
			(assignment
				left: (identifier) @identifier
				right: (lambda) @body)
		] @function`,'(ERROR ("def" (identifier) (parameters))) @function'],...F(["javascript","typescript","tsx"],[`[
			(function_expression
				name: (identifier)? @identifier
				body: (statement_block) @body)
			(function_declaration
				name: (identifier)? @identifier
				body: (statement_block) @body)
			(generator_function
				name: (identifier)? @identifier
				body: (statement_block) @body)
			(generator_function_declaration
				name: (identifier)? @identifier
				body: (statement_block) @body)
			(method_definition
				name: (property_identifier)? @identifier
				body: (statement_block) @body)
			(arrow_function
				body: (statement_block) @body)
		] @function`]),go:[`[
			(function_declaration
				name: (identifier) @identifier
				body: (block) @body)
			(method_declaration
				name: (field_identifier) @identifier
				body: (block) @body)
		] @function`],ruby:[`[
			(method
				name: (_) @identifier
				parameters: (method_parameters)? @params
				[(_)+ "end"] @body)
			(singleton_method
				name: (_) @identifier
				parameters: (method_parameters)? @params
				[(_)+ "end"] @body)
		] @function`],csharp:[`[
			(constructor_declaration
				(identifier) @identifier
				(block) @body)
			(destructor_declaration
				(identifier) @identifier
				(block) @body)
			(operator_declaration
				(block) @body)
			(method_declaration
				(identifier) @identifier
				(block) @body)
			(local_function_statement
				(identifier) @identifier
				(block) @body)
		] @function`],cpp:[`[
			(function_definition
				(_
					(identifier) @identifier)
					(compound_statement) @body)
			(function_definition
				(function_declarator
					(qualified_identifier
						(identifier) @identifier))
					(compound_statement) @body)
		] @function`],java:[`[
			(constructor_declaration
				name: (identifier) @identifier
				body: (constructor_body) @body)
			(method_declaration
				name: (_) @identifier
				body: (block) @body)
			(lambda_expression
				body: (block) @body)
		] @function`],rust:[`[
			(function_item (identifier) @identifier)
			(let_declaration (identifier) @identifier)
		] @function`]}),Mr=O({javascript:[f.javascript`((comment) @comment
			(#match? @comment "^\\\\/\\\\*\\\\*")) @docComment`],...F(["typescript","tsx"],[f.typescript`((comment) @comment
			(#match? @comment "^\\\\/\\\\*\\\\*")) @docComment`]),java:[f.java`((block_comment) @block_comment
			(#match? @block_comment "^\\\\/\\\\*\\\\*")) @docComment`],cpp:[f.cpp`((comment) @comment
			(#match? @comment "^\\\\/\\\\*\\\\*")) @docComment`],csharp:[f.csharp`(
			((comment) @c
				(#match? @c "^\\\\/\\\\/\\\\/"))+
		) @docComment`],rust:[f.rust`((line_comment) @comment
			(#match? @comment "^\/\/\/|^\/\/!"))+ @docComment`],go:[f.go`((comment)+) @docComment`],ruby:[f.ruby`((comment)+) @docComment`],python:[`(expression_statement
			(string) @docComment)`]}),xe=O({javascript:[f.javascript`[
			(function_declaration
				(identifier) @function.identifier
			) @function

			(generator_function_declaration
				name: (identifier) @generator_function.identifier
			) @generator_function

			(class_declaration
				name: (identifier) @class.identifier ;; note: (type_identifier) in typescript
				body: (class_body
							(method_definition
								name: (property_identifier) @method.identifier
							) @method
						)
			) @class
		]`],...F(["typescript","tsx"],[f.typescript`[
				(function_declaration
					(identifier) @function.identifier
				) @function

				(generator_function_declaration
					name: (identifier) @generator_function.identifier
				) @generator_function

				(class_declaration
					name: (type_identifier) @class.identifier
					body: (class_body
								(method_definition
									(accessibility_modifier)? @method.accessibility_modifier
									name: (property_identifier) @method.identifier
									(#not-eq? @method.accessibility_modifier "private")
								) @method
							)
				) @class
			]`]),python:[f.python`[
				(function_definition
					name: (identifier) @function.identifier
				) @function
			]`],go:[f.go`[
				(function_declaration
					name: (identifier) @function.identifier
				) @function

				(method_declaration
					name: (field_identifier) @method.identifier
				) @method
			]`],ruby:[f.ruby`[
				(method
					name: (identifier) @method.identifier
				) @method

				(singleton_method
					name: (_) @singleton_method.identifier
				) @singleton_method
			]`],csharp:[f.csharp`[
				(constructor_declaration
					(identifier) @constructor.identifier
				) @constructor

				(destructor_declaration
					(identifier) @destructor.identifier
				) @destructor

				(method_declaration
					(identifier) @method.identifier
				) @method

				(local_function_statement
					(identifier) @local_function.identifier
				) @local_function
			]`],cpp:[f.cpp`[
				(function_definition
					(_
						(identifier) @identifier)
				) @function
			]`],java:[f.java`(class_declaration
			name: (_) @class.identifier
			body: (_
						[
							(constructor_declaration
								(modifiers)? @constructor.modifiers
								(#not-eq? @constructor.modifiers "private")
								name: (identifier) @constructor.identifier
							) @constructor

							(method_declaration
								(modifiers)? @method.modifiers
								(#not-eq? @method.modifiers "private")
								name: (identifier) @method.identifier
							) @method
						]
					)
		) @class`],rust:[f.rust`[
				(function_item
					(identifier) @function.identifier
				) @function
			]`]}),Le=O({javascript:[f.javascript`[
			(identifier) @symbol
			(property_identifier) @symbol
			(private_property_identifier) @symbol
		]`],...F(["typescript","tsx"],[f.typescript`[
			(identifier) @symbol
			(type_identifier) @symbol
			(property_identifier) @symbol
			(private_property_identifier) @symbol
		]`]),cpp:[f.cpp`[
			(identifier) @symbol
			(type_identifier) @symbol
		]`],csharp:[f.csharp`[
			(identifier) @symbol
		]`],go:[f.go`[
			(identifier) @symbol
		]`],java:[f.java`[
			(identifier) @symbol
		]`],python:[f.python`[
			(identifier) @symbol
		]`],ruby:[f.ruby`[
			(identifier) @symbol
		]`],rust:[f.rust`[
			(identifier) @symbol
		]`]}),Ue=O({typescript:[f.typescript`
			[
				(comment) @comment ;; split into multiple comment kinds?

				(declaration) @declaration

				;; class declaration related
				(public_field_definition) @public_field_definition
				(method_definition) @method_definition
				(class_declaration (_ (method_signature) @method_signature))
				(abstract_method_signature) @abstract_method_signature

				;; enum declaration related
				(enum_assignment) @enum_assignment

				;; interface declaration related
				(interface_declaration (_ (method_signature) @method_signature))
				(interface_declaration (_ (property_signature) @property_signature))

				;; statements

				(import_statement) @import_statement
				(export_statement) @export_statement

				(expression_statement) @expression_statement

				(for_in_statement) @for_in_statement
				;; exclude any children found in the for loop condition
				(for_statement condition: (_) @for_statement.exclude_captures ) @for_statement
				(break_statement) @break_statement
				(continue_statement) @continue_statement
				(do_statement) @do_statement
				(if_statement) @if_statement
				(if_statement
					consequence: [
						(expression_statement)
						(if_statement)
					] @if_statement.exclude_captures)
				(else_clause
					[
						(expression_statement)
						(if_statement) ; for if-else chains
					] @else_clause.exclude_captures)
				(switch_statement) @switch_statement
				(switch_case) @switch_case
				(try_statement) @try_statement
				(throw_statement) @throw_statement
				(debugger_statement) @debugger_statement
				(return_statement) @return_statement
			]
		`],tsx:[f.typescript`
			[
				(comment) @comment ;; split into multiple comment kinds?

				(declaration) @declaration

				;; class declaration related
				(public_field_definition) @public_field_definition
				(method_definition) @method_definition
				(class_declaration (_ (method_signature) @method_signature))
				(abstract_method_signature) @abstract_method_signature

				;; enum declaration related
				(enum_assignment) @enum_assignment

				;; interface declaration related
				(interface_declaration (_ (method_signature) @method_signature))
				(interface_declaration (_ (property_signature) @property_signature))

				;; statements

				(import_statement) @import_statement
				(export_statement) @export_statement

				(expression_statement) @expression_statement

				(for_in_statement) @for_in_statement
				;; exclude any children found in the for loop condition
				(for_statement condition: (_) @for_statement.exclude_captures ) @for_statement
				(break_statement) @break_statement
				(continue_statement) @continue_statement
				(do_statement) @do_statement
				(if_statement) @if_statement
				(if_statement
					consequence: [
						(expression_statement)
						(if_statement)
					] @if_statement.exclude_captures)
				(else_clause
					[
						(expression_statement)
						(if_statement) ; for if-else chains
					] @else_clause.exclude_captures)
				(switch_statement) @switch_statement
				(switch_case) @switch_case
				(try_statement) @try_statement
				(throw_statement) @throw_statement
				(debugger_statement) @debugger_statement
				(return_statement) @return_statement

				;; jsx
				(jsx_element) @jsx_element
				(jsx_element (_ (jsx_expression) @jsx_expression))
			]
		`],python:[f.python`
			[
				(comment) @comment

				;; simple statements
				(assert_statement) @assert_statement
				(break_statement) @break_statement
				(continue_statement) @continue_statement
				(delete_statement) @delete_statement
				(exec_statement) @exec_statement
				(expression_statement) @expression_statement
				(future_import_statement) @future_import_statement
				(global_statement) @global_statement
				(import_from_statement) @import_from_statement
				(import_statement) @import_statement
				(nonlocal_statement) @nonlocal_statement
				(pass_statement) @pass_statement
				(print_statement) @print_statement
				(raise_statement) @raise_statement
				(return_statement) @return_statement
				(type_alias_statement) @type_alias_statement


				;; compound statements

				(class_definition) @class_definition
				(decorated_definition) @decorated_definition
				(for_statement) @for_statement
				(function_definition) @function_definition
				(if_statement) @if_statement
				(try_statement) @try_statement
				(while_statement) @while_statement
				(with_statement) @with_statement


				;; expressions

				(expression_list) @expression_list
				(expression_statement) @expression_statement
			]
		`],javascript:[f.javascript`
			[
				(comment) @comment ;; split into multiple comment kinds?

				(declaration) @declaration

				;; class declaration related

				(field_definition) @field_definition
				(method_definition) @method_definition

				;; statements

				(import_statement) @import_statement
				(export_statement) @export_statement

				(expression_statement) @expression_statement

				(for_in_statement) @for_in_statement
				;; exclude any children found in the for loop condition
				(for_statement condition: (_) @for_statement.exclude_captures ) @for_statement
				(break_statement) @break_statement
				(continue_statement) @continue_statement
				(do_statement) @do_statement
				(if_statement) @if_statement
				(switch_statement) @switch_statement
				(switch_case) @switch_case
				(try_statement) @try_statement
				(throw_statement) @throw_statement
				(debugger_statement) @debugger_statement
				(return_statement) @return_statement
			]`],go:[f.go`
		[
			(_statement) @statement
			(function_declaration) @function_declaration
			(import_declaration) @import_declaration
			(method_declaration) @method_declaration
			(package_clause) @package_clause

			(if_statement
				initializer: (_) @for_statement.exclude_captures) @for_statement

			(expression_case) @expression_case ;; e.g., case 0:
		]
		`],ruby:[f.ruby`
			[
				(comment) @comment

				(assignment) @assignment

				(if) @if

				(call) @call

				(case) @case

				(when) @when

				(while) @while

				(for) @for

				(method) @method

				(class) @class

				(module) @module

				(begin) @begin
			]
		`],csharp:[f.csharp`
			[
				(comment) @comment

				(class_declaration) @class_declaration
				(constructor_declaration) @constructor_declaration
				(method_declaration) @method_declaration
				(delegate_declaration) @delegate_declaration
				(enum_declaration) @enum_declaration
				(extern_alias_directive) @extern_alias_directive
				(file_scoped_namespace_declaration) @file_scoped_namespace_declaration
				(global_attribute) @global_attribute
				(global_statement) @global_statement
				(interface_declaration) @interface_declaration
				(namespace_declaration) @namespace_declaration
				(record_declaration) @record_declaration
				(struct_declaration) @struct_declaration
				(using_directive) @using_directive

				(local_declaration_statement) @local_declaration_statement
				(expression_statement) @expression_statement
				(for_statement) @for_statement
				(foreach_statement) @foreach_statement
				(continue_statement) @continue_statement
				(break_statement) @break_statement
				(throw_statement) @throw_statement
				(return_statement) @return_statement
				(try_statement) @try_statement
			]
		`],cpp:[f.cpp`
			[
				(declaration) @declaration

				(expression_statement) @expression_statement

				(comment) @comment

				(preproc_include) @preproc_include

				(namespace_definition) @namespace_definition

				(enum_specifier) @enum_specifier

				(struct_specifier) @struct_specifier

				(template_declaration) @template_declaration

				(function_definition) @function_definition

				(return_statement) @return_statement

				(class_specifier) @class_specifier

				(try_statement) @try_statement

				(throw_statement) @throw_statement

				(for_statement) @for_statement
				(for_statement
					initializer:(_) @for_statement.exclude_captures) @for_statement

				(for_range_loop) @for_range_loop
			]
		`],java:[f.java`
		[
			(statement) @statement ;; @ulugbekna: this includes (declaration); but somehow it can't capture inner classes

			(line_comment) @line_comment
			(block_comment) @block_comment

			(for_statement
				init: (_) @for_statement.exclude_captures)

			(block) @block.exclude_captures

			(field_declaration) @field_declaration
		]
		`],rust:[]}),Be={...F(["typescript","tsx"],["program","interface_declaration","class_declaration","function_declaration","function_expression","type_alias_declaration","method_definition"]),javascript:["program","class_declaration","function_declaration","function_expression","method_definition"],java:["program","class_declaration","interface_declaration","method_declaration"],cpp:["translation_unit","class_specifier","function_definition"],csharp:["compilation_unit","class_declaration","interface_declaration","method_declaration"],python:["module","class_definition","function_definition"],go:["source_file","type_declaration","function_declaration","method_declaration"],ruby:["program","method","class","method"],rust:["source_file","function_item","impl_item","let_declaration"]},De=O({typescript:[D("typescript")],tsx:[D("tsx")],javascript:[D("javascript")],java:[D("java")],cpp:[D("cpp")],csharp:[D("csharp")],python:[D("python")],go:[D("go")],ruby:[D("ruby")],rust:[D("rust")]}),We={...F(["typescript","tsx","javascript"],["for_in_statement","for_statement","if_statement","while_statement","do_statement","try_statement","switch_statement"]),java:["for_statement","enhanced_for_statement","if_statement","while_statement","do_statement","try_statement","switch_expression"],cpp:["for_statement","for_range_loop","if_statement","while_statement","do_statement","try_statement","switch_statement"],csharp:["for_statement","for_each_statement","if_statement","while_statement","do_statement","try_statement","switch_expression"],python:["for_statement","if_statement","while_statement","try_statement"],go:["for_statement","if_statement","type_switch_statement"],ruby:["while","for","if","case"],rust:["for_statement","if_statement","while_statement","loop_statement","match_expression"]},Et={...F(["typescript","tsx"],["lexical_declaration","expression_statement","public_field_definition"]),javascript:["call_expression","expression_statement","variable_declaration","public_field_definition"],java:["expression_statement","local_variable_declaration","field_declaration"],cpp:["field_declaration","expression_statement","declaration"],csharp:["field_declaration","expression_statement"],python:["expression_statement"],go:["short_var_declaration","call_expression"],ruby:["call","assignment"],rust:["expression_statement","let_declaration","use_declaration","assignment_expression","macro_definition","extern_crate_declaration"]},St={...F(["typescript","tsx"],["class_declaration","function_declaration","generator_function_declaration","interface_declaration","internal_module","method_definition","abstract_class_declaration","abstract_method_signature","enum_declaration"]),javascript:["class_declaration","function_declaration","generator_function_declaration","method_definition"],java:["class_declaration","constructor_declaration","enum_declaration","interface_declaration","method_declaration","module_declaration"],cpp:["class_specifier","function_definition","namespace_definition","struct_specifier"],csharp:["class_declaration","constructor_declaration","destructor_declaration","enum_declaration","interface_declaration","method_declaration","namespace_declaration","struct_declaration"],python:["function_definition","class_definition"],go:["function_declaration","method_declaration"],ruby:["class","method","module"],rust:["function_item","impl_item","mod_item","struct_item","trait_item","union_item"]},qe=O({typescript:[W("typescript")],tsx:[W("tsx")],javascript:[W("javascript")],java:[W("java")],cpp:[W("cpp")],csharp:[W("csharp")],python:[W("python")],go:[W("go")],rust:[W("rust")],ruby:[W("ruby")]});function D(e){return Be[e].map(t=>`(${t}) @scope`).join(`
`)}function W(e){return`[
		${St[e].map(r=>`(${r})`).join(`
`)}
	] @definition`}function ne(e,t){return Be[e].includes(t.type)||We[e].includes(t.type)}function Ge(e,t){return We[e].includes(t.type)}function Te(e,t){return Et[e].includes(t.type)}var Ve={...F(["typescript","tsx"],[f.typescript`[
			(expression_statement
				(call_expression
					function: (identifier) @fn
					(#any-of? @fn "test" "it")
				)
			) @test
		]`]),javascript:[f.javascript`[
			(call_expression
				function: (identifier) @fn
				(#any-of? @fn "test" "it")
			) @test
		]`],python:[f.python`[
			(function_definition
				name: (identifier) @fn
				(#match? @fn "^test_")
			) @test
		]`],java:[f.java`[
			(method_declaration
				name: (identifier) @fn
				(#match? @fn "^test")
			) @test
		]`],go:[f.go`[
			(function_declaration
				name: (identifier) @fn
				(#match? @fn "^Test")
			) @test
		]`],ruby:[],csharp:[],cpp:[],rust:[]};var be=class{constructor(){this._cache=new Q(5)}setCacheSize(t){this._cache=new Q(t)}async getStructure(t,r){let n=`${t}:${r}`,s=this._cache.get(n);return s||(s=await this._getStructure(t,r),this._cache.put(n,s)),s}async _getStructure(t,r){let n=Ue[t];if(n.length===0)return;let s=await T(t,r);try{let o=N(n,s.tree.rootNode).flatMap(l=>l.captures).sort((l,c)=>x.compare(l.node,c.node)),a=[];for(let l of o)l.name.endsWith(".exclude_captures")&&a.push(x.ofSyntaxNode(l.node));let _=new K(0,r.length,"root",[]),d=[_];for(let l=0;l<o.length;++l){let m=o[l].node;if(a.some(b=>x.isEqual(b,m)))continue;let h;do h=d.pop();while(h&&!x.doesContain(h,m));if(new Set(["export_statement","ambient_declaration"]).has(h.kind))h.kind=m.type,d.push(h);else{let b=m.type;(t==="typescript"||t==="tsx"||t==="javascript")&&b==="method_definition"&&m.namedChildren.some(S=>S.type==="property_identifier"&&S.text==="constructor")&&(b="constructor");let p=m.startIndex,E=m.previousSibling;if(E!==null){let k=r.substring(E.endIndex,m.startIndex).indexOf(`
`);k===-1?p=E.endIndex:p=E.endIndex+k+1}let y=m.endIndex,u=m.nextSibling;if(t==="typescript"&&u!==null&&(u.type===";"||u.type===",")&&(u=u.nextSibling),u!==null){let k=r.substring(m.endIndex,u.startIndex).indexOf(`
`);k!==-1&&(y=m.endIndex+k+1)}let w=new K(p,y,b,[]);h.children.push(w),d.push(h,w)}}return _}catch(o){console.error(o instanceof Error?o:new Error(o))}finally{s.dispose()}}},je=new be;async function He(e,t,r){let n=await T(e,t);try{let o=r.startIndex===r.endIndex?void 0:j(n.tree,r,e);if(o)return{nodeIdentifier:te(o,e),nodeToDocument:V.ofSyntaxNode(o),nodeSelectionBy:"matchingSelection"};let _=n.tree.rootNode.descendantForIndex(r.startIndex,r.endIndex),d=0;for(;!re(_,e)&&_.parent!==null;)_=_.parent,++d;return{nodeIdentifier:te(_,e),nodeToDocument:V.ofSyntaxNode(_),nodeSelectionBy:"expanding"}}finally{n.dispose()}}async function Ze(e,t,r){let n=await T(e,t);try{let s=n.tree.rootNode.descendantForIndex(r.startIndex,r.endIndex);if(s.type.match(/identifier/)&&(s.parent===null||re(s.parent,e))){let o=s.parent,a=o===null?void 0:{startIndex:o.startIndex,endIndex:o.endIndex};return{identifier:s.text,nodeRange:a}}}finally{n.dispose()}}function It(e,t,r=0,n=e.length){let s=r,o=n;for(;s<o;){let a=Math.floor((s+o)/2);t(e[a])?s=a+1:o=a}return s-1}var $e=class e{constructor(t){this._array=t;this._findLastMonotonousLastIdx=0}static{this.assertInvariants=!1}findLastMonotonous(t){if(e.assertInvariants){if(this._prevFindLastPredicate){for(let n of this._array)if(this._prevFindLastPredicate(n)&&!t(n))throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.")}this._prevFindLastPredicate=t}let r=It(this._array,t,this._findLastMonotonousLastIdx);return this._findLastMonotonousLastIdx=r+1,r===-1?void 0:this._array[r]}};function Je(e){let t=new Set;return r=>{let n=e(r);return t.has(n)?!1:(t.add(n),!0)}}var ze;(_=>{function e(d){return d<0}_.isLessThan=e;function t(d){return d<=0}_.isLessThanOrEqual=t;function r(d){return d>0}_.isGreaterThan=r;function n(d){return d===0}_.isNeitherLessOrGreaterThan=n,_.greaterThan=1,_.lessThan=-1,_.neitherLessOrGreaterThan=0})(ze||={});var Qe=class e{constructor(t){this.iterate=t}static{this.empty=new e(t=>{})}forEach(t){this.iterate(r=>(t(r),!0))}toArray(){let t=[];return this.iterate(r=>(t.push(r),!0)),t}filter(t){return new e(r=>this.iterate(n=>t(n)?r(n):!0))}map(t){return new e(r=>this.iterate(n=>r(t(n))))}some(t){let r=!1;return this.iterate(n=>(r=t(n),!r)),r}findFirst(t){let r;return this.iterate(n=>t(n)?(r=n,!1):!0),r}findLast(t){let r;return this.iterate(n=>(t(n)&&(r=n),!0)),r}findLastMaxBy(t){let r,n=!0;return this.iterate(s=>((n||ze.isGreaterThan(t(s,r)))&&(n=!1,r=s),!0)),r}};function se(e,t){if(!e)throw new Error(t?`Unexpected type, expected '${t}'`:"Unexpected type")}async function Ke(e,t,r){let n=await T(e,t);try{let s=N(xe[e],n.tree.rootNode).flatMap(({captures:_})=>_),o=new Map;for(let _ of s){let[d,l]=_.name.split(".");if(l!=="identifier")continue;let c=o.get(d)||[];c.push(_),o.set(d,c)}let a=null;for(let _ of s){let[d,l]=_.name.split(".");if(l!==void 0||!x.doesContain(_.node,r)||a!==null&&x.len(a.node)<x.len(_.node))continue;let c=o.get(d);se(c!==void 0,`must have seen identifier for symbol kind '${d}' (lang: ${e})`);let m=c.find(h=>x.doesContain(_.node,h.node));se(m!==void 0,`must have seen identifier for symbol '${d}' (lang: ${e})`),a={identifier:{name:m.node.text,range:x.ofSyntaxNode(m.node)},node:V.ofSyntaxNode(_.node)}}return a}catch(s){return console.error("getTestableNode: Unexpected error",s),null}finally{n.dispose()}}async function Ye(e,t){let r=await T(e,t);try{let n=N(xe[e],r.tree.rootNode).flatMap(({captures:a})=>a).filter(Je(a=>[a.node.startIndex,a.node.endIndex].toString())),s=new Map;for(let a of n){let[_,d]=a.name.split(".");if(d!=="identifier")continue;let l=s.get(_)||[];l.push(a),s.set(_,l)}let o=[];for(let a of n){if(a.name.includes("."))continue;let _=a.name,d=s.get(_);se(d!==void 0,`must have seen identifier for symbol kind '${_}' (lang: ${e})`);let l=d.find(c=>x.doesContain(a.node,c.node));se(l!==void 0,`must have seen identifier for symbol '${_}' (lang: ${e})`),o.push({identifier:{name:l.node.text,range:x.ofSyntaxNode(l.node)},node:V.ofSyntaxNode(a.node)})}return o}catch(n){return console.error("getTestableNodes: Unexpected error",n),null}finally{r.dispose()}}async function Xe(e,t){let r=await T(e,t);try{let s=N(Ve[e],r.tree.rootNode).flatMap(a=>a.captures).sort((a,_)=>a.node.endIndex-_.node.endIndex).filter(a=>a.name==="test");if(s.length===0)return null;let o=s[s.length-1].node;return{startIndex:o.startIndex,endIndex:o.endIndex}}finally{r.dispose()}}var wn=_e();function Mt(e,t){let r=De[e];return N(r,t)}function rt(e,t){let r=ke[e];return N(r,t)}function Nt(e,t){let r=Ce[e];return r?N(r,t):[]}function Rt(e,t){let r=Ae[e];return r?N(r,t):[]}function vt(e,t){let r=Pe[e];return r?N(r,t):[]}function Ct(e,t){let r=Fe[e];return r?N(r,t):[]}function At(e,t){let r=Oe[e];return r?N(r,t):[]}function nt(e,t){let r=qe[e];return N(r,t)}async function Pt(e,t,r){let n=await T(e,t);try{return Nt(e,n.tree.rootNode).reduce((a,_)=>{let d=_.captures.find(l=>l.name==="call_expression").node;if(x.doIntersect(r,d)){let l,c;e==="ruby"&&(c=_.captures.find(m=>m.name==="symbol")?.node,l=c?.text?.slice(1)),c??=_.captures.find(m=>m.name==="identifier")?.node,l??=c?.text,a.push({identifier:l??"",text:d.text,startIndex:(c??d).startIndex,endIndex:(c??d).endIndex})}return a},[])}finally{n.dispose()}}async function Ft(e,t){let r=await T(e,t);try{return rt(e,r.tree.rootNode).map(o=>{let a=o.captures.find(d=>d.name==="function").node;return{identifier:o.captures.find(d=>d.name==="identifier")?.node.text??"",text:a.text,startIndex:a.startIndex,endIndex:a.endIndex}})}finally{r.dispose()}}async function Ot(e,t){let r=await T(e,t);try{return Rt(e,r.tree.rootNode).map(o=>{let a=o.captures.find(d=>d.name==="class_declaration").node;return{identifier:a?.children.find(d=>d.type==="type_identifier"||d.type==="identifier"||d.type==="constant")?.text??"",text:a.text,startIndex:a.startIndex,endIndex:a.endIndex}})}finally{r.dispose()}}async function kt(e,t){let r=await T(e,t);try{return vt(e,r.tree.rootNode).map(o=>{let a=o.captures.find(d=>d.name==="type_declaration").node,_=o.captures.find(d=>d.name==="type_identifier")?.node.text;return _||(_=a?.children.find(d=>d.type==="type_identifier")?.text),{identifier:_??"",text:a.text,startIndex:a.startIndex,endIndex:a.endIndex}})}finally{r.dispose()}}async function Lt(e,t,r){let n=await T(e,t);try{return Ct(e,n.tree.rootNode).reduce((a,_)=>{let d=_.captures.find(l=>l.name==="type_identifier").node;return x.doIntersect(r,d)&&a.push({identifier:d.text,text:d.text,startIndex:d.startIndex,endIndex:d.endIndex}),a},[])}finally{n.dispose()}}async function Ut(e,t,r){let n=await T(e,t);try{return At(e,n.tree.rootNode).reduce((a,_)=>{let d=_.captures.find(l=>l.name==="new_expression").node;return x.doIntersect(r,d)&&a.push({identifier:d.text,text:d.text,startIndex:d.startIndex,endIndex:d.endIndex}),a},[])}finally{n.dispose()}}async function Bt(e,t,r){let n=await T(e,t);try{let s=Le[e];return N(s,n.tree.rootNode).reduce((_,d)=>{let l=d.captures.find(c=>c.name==="symbol").node;return x.doIntersect(r,l)&&_.push({identifier:l.text,text:l.text,startIndex:l.startIndex,endIndex:l.endIndex}),_},[])}finally{n.dispose()}}async function Dt(e,t){let r=await T(e,t);try{let n=nt(e,r.tree.rootNode);return $t(e,n,r.tree.rootNode)}finally{r.dispose()}}async function Wt(e,t){let r=await T(e,t);try{let n=nt(e,r.tree.rootNode);return at(e,n,r.tree.rootNode)}finally{r.dispose()}}async function qt(e,t){let r=await T(e,t);try{return rt(e,r.tree.rootNode).map(o=>{let a=o.captures.find(_=>_.name==="body").node;return{startIndex:a.startIndex,endIndex:a.endIndex}})}finally{r.dispose()}}async function Gt(e,t,r){let n=await T(e,t);try{let s=Mt(e,n.tree.rootNode),o;for(let a of s){let _=a.captures[0].node,d=G.ofSyntaxNode(_);if(G.doesContain(d,r)&&(o=_),B.isBefore(r.endPosition,d.startPosition))break}if(o)return G.ofSyntaxNode(o);throw new Error("No parent node found")}finally{n.dispose()}}async function Vt(e,t,r,n){let s=await T(e,t);try{let o=s.tree.rootNode.descendantForPosition(r.startPosition,r.endPosition),a={startPosition:o.startPosition,endPosition:o.endPosition},_=ot(e,o,n,r,!0);return G.equals(a,_)?st(e,o):_}finally{s.dispose()}}function st(e,t){let r=t.parent,n={startPosition:t.startPosition,endPosition:t.endPosition};if(ne(e,t)||!r)return n;let{filteredRanges:s,indexOfInterest:o}=it(e,r.children,n,!1);if(o-1>=0&&o+1<=s.length-1){let a=s[o-1],_=s[o+1];return{startPosition:a.startPosition,endPosition:_.endPosition}}return st(e,r)}function ot(e,t,r,n,s){let o=t.children;if(t.endPosition.row-t.startPosition.row+1<=r){let _=ne(e,t)?{startPosition:t.startPosition,endPosition:t.endPosition}:tt(e,o,r,n,s),d=t.parent;return d?ot(e,d,r,_,!1):_}return tt(e,o,r,n,s)}function et(e,t){return t.endPosition.row-e.startPosition.row+1}function tt(e,t,r,n,s){if(t.length===0)return n;let{filteredRanges:o,indexOfInterest:a}=it(e,t,n,s),_=0,d=o.length-1,l=o[_],c=o[d];for(;et(l,c)>r&&_!==d;)a-_<d-a?(d--,c=o[d]):(_++,l=o[_]);return et(l,c)<=r?{startPosition:l.startPosition,endPosition:c.endPosition}:n}function it(e,t,r,n){let s,o;if(n?(s=t.filter(a=>ne(e,a)||Te(e,a)),o=Me(s,r,(a,_)=>B.isBefore(a.startPosition,_.startPosition)),s.splice(o,0,r)):(s=t.filter(a=>G.doesContain(a,r)||ne(e,a)||Te(e,a)),o=s.findIndex(a=>G.doesContain(a,r))),o===-1)throw new Error("Valid index not found");return{filteredRanges:s,indexOfInterest:o}}async function jt(e,t,r){let n=[],a=(await T(e,t)).tree.rootNode.descendantForIndex(r.startIndex,r.endIndex);for(;a!==null;)Ge(e,a)&&n.push({startIndex:a.startIndex,endIndex:a.endIndex}),a=a.parent;return n}async function Ht(e,t,r){let n=await T(e,t);try{let s=r.startIndex===r.endIndex;if(s)return;let o=s?void 0:j(n.tree,r,e),a=s?void 0:j(n.tree,r,e,Zt);if(a&&o)return{nodeIdentifier:te(o,e),nodeToExplain:V.ofSyntaxNode(a)}}finally{n.dispose()}}function Zt(e,t){return e.type.match(/definition/)}function at(e,t,r){let n=new Map;t.forEach(o=>{let _=o.captures.find(c=>c.name==="definition")?.node,d;e==="cpp"&&_?.type==="function_definition"?d=_?.childForFieldName("declarator")?.childForFieldName("declarator"):e==="rust"&&_?.type==="impl_item"?d=_?.childForFieldName("trait"):d=_?.childForFieldName("name");let l=_?.childForFieldName("body");if(_&&l){switch(e){case"typescript":case"javascript":{let{definition:m}=_t(_);_=m;break}}n.get(_.id)||n.set(_.id,{mainBlock:A.ofSyntaxNode(_),detailBlocks:{body:A.ofSyntaxNode(l),name:d?.text}})}});let s=Array.from(n.values());return new Y(s,A.ofSyntaxNode(r))}function $t(e,t,r){let n;switch(e){case"python":n=Kt(t);break;case"ruby":n=zt(t);break;default:{n=Qt(t,e);break}}return new Y(n,A.ofSyntaxNode(r))}function Qt(e,t){let r=new Map;return e.forEach(n=>{let o=n.captures.find(_=>_.name==="definition")?.node,a=o?.childForFieldName("body");if(o&&a){let _;switch(t){case"typescript":case"javascript":{let{definition:l,comments:c}=_t(o);o=l,_=c;break}case"java":case"rust":_=Yt(o);break;default:{_=oe(o);break}}r.get(o.id)||r.set(o.id,{mainBlock:A.ofSyntaxNode(o),detailBlocks:{comments:_.map(l=>A.ofSyntaxNode(l)),body:A.ofSyntaxNode(a)}})}}),Array.from(r.values())}function Jt(e){if(!(e.length<2))for(let t=1;t<e.length;t++){let r=e[t];if(!r.type.includes("parameters"))return r}}function zt(e){let t=new Map;return e.forEach(r=>{let s=r.captures.find(o=>o.name==="definition")?.node;if(s){let o=s.namedChildren,a=Jt(o);if(a){let _=o[o.length-1],d=s.text.substring(a.startIndex-s.startIndex,_.endIndex-s.startIndex),l=oe(s);t.get(s.id)||t.set(s.id,{mainBlock:A.ofSyntaxNode(s),detailBlocks:{comments:l.map(m=>A.ofSyntaxNode(m)),body:{range:{startPosition:{row:a.startPosition.row,column:a.startPosition.column},endPosition:{row:_.endPosition.row,column:_.endPosition.column}},startIndex:a.startIndex,text:d,endIndex:_.endIndex}}})}}}),Array.from(t.values())}function Kt(e){let t=new Map;return e.forEach(r=>{let s=r.captures.find(a=>a.name==="definition")?.node,o=s?.childForFieldName("body");if(s&&o){let a=er(o),_=Xt(s);t.set(s.id,{mainBlock:A.ofSyntaxNode(s),detailBlocks:{docstring:a?A.ofSyntaxNode(a):void 0,decorator:_?A.ofSyntaxNode(_):void 0,body:A.ofSyntaxNode(o)}});return}}),Array.from(t.values())}function oe(e,t=["comment"]){let r=[],n=e.previousNamedSibling;for(;n&&t.some(s=>s===n?.type);)r.push(n),n=n.previousNamedSibling;return r.reverse()}function _t(e){let t=e.parent;return t?.type==="export_statement"?{definition:t,comments:oe(t)}:{definition:e,comments:oe(e)}}function Yt(e){return oe(e,["block_comment","line_comment"])}function Xt(e){let t=e.previousNamedSibling;return t?.type==="decorator"?t:void 0}function er(e){let t=e.firstChild;if(!t||t.type!=="expression_statement")return;let r=t.firstChild;return r?.type==="string"?r:void 0}function tr(e,t){return je.getStructure(e,t)}function rr(){let e=dt.parentPort;if(!e)throw new Error("This module should only be used in a worker thread.");e.on("message",async({id:t,fn:r,args:n})=>{try{let s=await Ee[r](...n);e.postMessage({id:t,res:s})}catch(s){e.postMessage({id:t,err:s})}})}rr();
//!!! DO NOT modify, this file was COPIED from 'microsoft/vscode'
