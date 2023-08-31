// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"f3BSW":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _routes = require("./routes");
var _routesDefault = parcelHelpers.interopDefault(_routes);
const root = document.querySelector("#root");
root.append(new (0, _appDefault.default)().el); // 이렇게 생성자 함수로 실행해줘야 컴포넌트 내용이 만들어 짐. 그리고 .el을 붙여줌으로써 실제 요소 정보를 갖고 있는 속성 이름을 작성해서 append로 밀어 넣는다.
(0, _routesDefault.default)(); // main.js는 index.html에서 <script> 태그를 통해 로딩이 되어 있는 상태. 그리고 main.js는 App.js를 사용해서 화면의 내용을 출력하고(.append(new App().el), 그렇게 내용을 출력하게 되면 'router-view' 라는 요소가 생길 것이고, 그렇게 요소가 생겨야지만 페이지를 구분해주는 routes/index.js가 제대로 동작이 되니까 결국 main.js의 .append 메소드 다음 부분에서야 router()라는 함수를 실행할 수 있다. 그리고 router()라는 함수가 실행이 되면 index.js에서와 같이 어떤 '#/'같은 주소에 따라서 Component: Home이 실행되고, 그 Home이라는 컴포넌트는 this.el.innerHTML에 작성된 내용을 화면에 출력하게 되는 것이다.

},{"./App":"2kQhy","./routes":"3L9mC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kQhy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("./core/heropy");
var _theHeader = require("./components/TheHeader");
var _theHeaderDefault = parcelHelpers.interopDefault(_theHeader);
var _theFooter = require("./components/TheFooter");
var _theFooterDefault = parcelHelpers.interopDefault(_theFooter);
class App extends (0, _heropy.Component) {
    render() {
        const theHeader = new (0, _theHeaderDefault.default)().el;
        const theFooter = new (0, _theFooterDefault.default)().el;
        const routerView = document.createElement("router-view"); //html에 존재하지 않는 요소 이름을 만들어낼 때는 반드시 이렇게 두 개 이상의 단어를 조합할 것.
        this.el.append(theHeader, routerView, theFooter);
    }
} // 각 컴포넌트가 아닌, 어느 경우에서도 항상 출력되게 하고 싶은 컨텐츠는 바로 이 App.js 파일에 다 추가하면 됨. (최상위 파일이기 때문)
exports.default = App;

},{"./core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./components/TheHeader":"3Cyq4","./components/TheFooter":"b3x3c"}],"57bZf":[function(require,module,exports) {
///// Component /////
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component);
parcelHelpers.export(exports, "createRouter", ()=>createRouter);
///// Store /////
parcelHelpers.export(exports, "Store", ()=>Store);
class Component {
    constructor(payload = {}){
        const { tagName = "div", props = {}, state = {} } = payload;
        this.el = document.createElement(tagName); // 컴포넌트의 최상위 요소
        this.props = props; // 컴포넌트가 사용될 때 부모 컴포넌트에서 받는 데이터
        this.state = state; // 컴포넌트 안에서 사용할 데이터
        this.render();
    }
    render() {
    // 컴포넌트를 렌더링하는 함수
    // ...
    }
}
///// Router /////
// 페이지 렌더링!
function routeRender(routes) {
    // 접속할 때 해시 모드가 아니면(해시가 없으면) /#/로 리다이렉트!
    if (!location.hash) history.replaceState(null, "", "/#/"); // (상태, 제목, 주소)
    const routerView = document.querySelector("router-view");
    const [hash, queryString = ""] = location.hash.split("?"); // 물음표를 기준으로 해시 정보와 쿼리스트링을 구분
    // 1) 쿼리스트링을 객체로 변환해 히스토리의 상태에 저장!
    const query = queryString.split("&").reduce((acc, cur)=>{
        const [key, value] = cur.split("=");
        acc[key] = value;
        return acc;
    }, {});
    history.replaceState(query, ""); // (상태, 제목)
    // 2) 현재 라우트 정보를 찾아서 렌더링!
    const currentRoute = routes.find((route)=>new RegExp(`${route.path}/?$`).test(hash));
    routerView.innerHTML = "";
    routerView.append(new currentRoute.component().el);
    // 3) 화면 출력 후 스크롤 위치 복구!
    window.scrollTo(0, 0);
}
function createRouter(routes) {
    // 원하는(필요한) 곳에서 호출할 수 있도록 함수 데이터를 반환!
    return function() {
        window.addEventListener("popstate", ()=>{
            routeRender(routes);
        });
        routeRender(routes);
    };
}
class Store {
    constructor(state){
        this.state = {}; // 상태(데이터)
        this.observers = {};
        for(const key in state)// 각 상태에 대한 변경 감시(Setter) 설정!
        Object.defineProperty(this.state, key, {
            // Getter
            get: ()=>state[key],
            // Setter
            set: (val)=>{
                state[key] = val;
                if (Array.isArray(this.observers[key])) // 호출할 콜백이 있는 경우!
                this.observers[key].forEach((observer)=>observer(val));
            }
        });
    }
    // 상태 변경 구독!
    subscribe(key, cb) {
        Array.isArray(this.observers[key]) // 이미 등록된 콜백이 있는지 확인!
         ? this.observers[key].push(cb) // 있으면 새로운 콜백 밀어넣기!
         : this.observers[key] = [
            cb
        ]; // 없으면 콜백 배열로 할당!
    // 예시)
    // observers = {
    //   구독할상태이름: [실행할콜백1, 실행할콜백2]
    //   movies: [cb, cb, cb],
    //   message: [cb]
    // }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3Cyq4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
class TheHeader extends (0, _heropy.Component) {
    constructor(){
        super({
            tagName: "header",
            state: {
                menus: [
                    {
                        name: "Search",
                        href: "#/"
                    },
                    {
                        name: "Movie",
                        href: "#/movie?id=tt4520988"
                    },
                    {
                        name: "About",
                        href: "#/about"
                    }
                ]
            }
        });
        window.addEventListener("popstate", ()=>{
            this.render();
        });
    }
    render() {
        this.el.innerHTML = /* html */ `
            <a href="#/" class="logo"><span>OMDbAPI</span>.COM</a>
            <nav>
                <ul>
                    ${this.state.menus.map((menu)=>{
            const href = menu.href.split("?")[0]; //이렇게 쓰면, 주소에서 #/movie?id=tt4520988 이런식으로 querystring이 각 영화마다 다르게 생성이 될건데, split 메소드로 ? 기준으로 요소를 나눈 뒤, 해당 배열의 0번째 요소는 #/movie , 1번째 요소는 id=tt4520988 이 될 것임. 마찬가지로 위의 menus에서 첫번째 href는 "#/", 세번째 href는 "#/about" 으로 되어있는데, 요소 갯수 기준으로 보면 다 0번째 요소이므로, 아무튼 이렇게 split('?')[0]을 하게되면 다 각각 기본 주소 개념으로 사용할 수 있음.
            const hash = location.hash.split("?")[0];
            const isActive = href === hash;
            //각 메뉴별 url과, 현재 내 페이지 위치의 hash를 비교하여 같은 위치에 있을 경우 isActive에 true값을 할당하여, <a>태그에 class를 'active'로 만들어 해당 버튼이 노란색으로 계속 표시되어 있도록 할 수 있는 것임.
            return /* html */ `
                        <li>
                            <a class="${isActive ? "active" : ""}" href="${menu.href}">
                              ${menu.name}
                            </a>
                        </li>
                        `;
        }).join("")}
                </ul>
            </nav>
            <a href="#/about" class="user">
                <img src="https://heropy.blog/css/images/logo.png" alt="User">
            </a>
        `;
    }
}
exports.default = TheHeader;

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3x3c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _about = require("../store/about");
var _aboutDefault = parcelHelpers.interopDefault(_about);
class TheFooter extends (0, _heropy.Component) {
    constructor(){
        super({
            tagName: "footer"
        });
    }
    render() {
        const { github, repository } = (0, _aboutDefault.default).state;
        this.el.innerHTML = /* html */ `
            <div>
                <a href="${repository}">GitHub Repository</a>
            </div>
            <div>
                <a href="${github}">${new Date().getFullYear()} MIJUNG KIM
            </div>
        `;
    }
}
exports.default = TheFooter;

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../store/about":"4RAJO"}],"4RAJO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
exports.default = new (0, _heropy.Store)({
    photo: "https://heropy.blog/css/images/logo.png",
    name: "MJ / KimMiJung",
    email: "mysdpy30s@gmail.com",
    blog: "https://mysdpy30s.tistory.com/",
    github: "https://github.com/mysdpy30s",
    repository: "https://github.com/mysdpy30s/movieapp"
});

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3L9mC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _home = require("./Home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _movie = require("./Movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
var _about = require("./About");
var _aboutDefault = parcelHelpers.interopDefault(_about);
var _notFound = require("./NotFound");
var _notFoundDefault = parcelHelpers.interopDefault(_notFound);
exports.default = (0, _heropy.createRouter)([
    {
        path: "#/",
        component: (0, _homeDefault.default)
    },
    {
        path: "#/movie",
        component: (0, _movieDefault.default)
    },
    // MovieItem.js 에서 보면, this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`) 여기에 명시된것처럼 #/movie 라는 페이지로 이동하게 만들고, 그것의 상세페이지를 관리할 것이기때문에 그거에 맞춰 path에 #/movie라고 같이 동일하게 맞춰줌.
    {
        path: "#/about",
        component: (0, _aboutDefault.default)
    },
    {
        path: ".*",
        component: (0, _notFoundDefault.default)
    }
]); // 우리 프로젝트에서 관리하는 페이지들을 정리해놓은 파일이 바로 이 index.js임.
 // 그리고 여기에 쓰여진 { path } 부분은 heropy.js에서 2) 현재 라우트 정보를 찾아서 렌더링! 이라는 부분에 쓰여진 코드의 .find 메소드를 통해 현재 페이지 위치와 위에 쓰여진 path가 서로 동일한지 체크 후 맞는 페이지를 렌더링 해줌. 근데 만약에 첫번째부터 세번째까지 다 돌았는데 맞는게 없으면 NotFound로 넘어오는 것임. 그리고 여기 Path에 쓰인 정규 표현식 .*은 . = 모든 문자와 일치하는 조건인데 한 글자만 기준이 되면 안되니까 뒤에 *까지 붙여줘서 모든 문자를 일치 기준으로 본 것.

},{"../core/heropy":"57bZf","./Home":"0JSNG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Movie":"1LTyN","./About":"gdB30","./NotFound":"4fDiL"}],"0JSNG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _headline = require("../components/Headline");
var _headlineDefault = parcelHelpers.interopDefault(_headline);
var _search = require("../components/Search");
var _searchDefault = parcelHelpers.interopDefault(_search);
var _movieList = require("../components/MovieList");
var _movieListDefault = parcelHelpers.interopDefault(_movieList);
var _movieListMore = require("../components/MovieListMore");
var _movieListMoreDefault = parcelHelpers.interopDefault(_movieListMore);
class Home extends (0, _heropy.Component) {
    render() {
        const headline = new (0, _headlineDefault.default)().el;
        const search = new (0, _searchDefault.default)().el;
        const movieList = new (0, _movieListDefault.default)().el;
        const movieListMore = new (0, _movieListMoreDefault.default)().el;
        this.el.classList.add("container");
        this.el.append(headline, search, movieList, movieListMore);
    }
}
exports.default = Home;

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../components/Headline":"gaVgo","../components/Search":"jqPPz","../components/MovieList":"8UDl3","../components/MovieListMore":"3ZUar"}],"gaVgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
class Headline extends (0, _heropy.Component) {
    render() {
        this.el.classList.add("headline");
        this.el.innerHTML = /* html */ `
          <h1>
            <span>OMDb API</span><br>
            THE OPEN<br>
            MOVIE DATABASE
          </h1>
          <p>
          The OMDb API is a RESTful web service to obtain movie information, 
          all content and images on the site are contributed and maintained by our users.<br>
          If you find this service useful, please consider making a one-time donation or become a patron.
          </p>
        `;
    }
}
exports.default = Headline;

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqPPz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
class Search extends (0, _heropy.Component) {
    render() {
        this.el.classList.add("search");
        this.el.innerHTML = /* html */ `
           <input 
           value="${(0, _movieDefault.default).state.searchText}"
           placeholder="Enter the movie title to search!">
           <button class="btn btn-primary">
            Search!
           </button>
        `;
        // 위의 input value에 ${movieStore.state.searchText} 를 넣어줌으로써, 검색 후에 원하는 영화 상세페이지를 들어갔다가 다시 뒤로가기 했을 때, 여전히 검색창에 내가 입력했던 검색어가 남아있을 수 있도록 만들어주는것임.
        const inputEl = this.el.querySelector("input");
        inputEl.addEventListener("input", ()=>{
            (0, _movieDefault.default).state.searchText = inputEl.value;
        });
        inputEl.addEventListener("keydown", (event)=>{
            if (event.key === "Enter" && (0, _movieDefault.default).state.searchText.trim()) //사용자가 Enter를 누르고, SearchText에 검색할 영화명이 들어가 있는 경우에만 아래 searchMovies(1)을 실행함. 여기서 trim 메소드는 해당 문자열 사이의 공백을 다 제거해줌.
            (0, _movie.searchMovies)(1);
        });
        const btnEl = this.el.querySelector(".btn");
        btnEl.addEventListener("click", ()=>{
            if ((0, _movieDefault.default).state.searchText.trim()) (0, _movie.searchMovies)(1); //버튼을 클릭했을 때, searchText에 검색할 영화명이 들어가 있으면 searchMovies(1)을 실행.
        });
    }
}
exports.default = Search;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../core/heropy":"57bZf","../store/movie":"kq1bo"}],"kq1bo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searchMovies", ()=>searchMovies);
parcelHelpers.export(exports, "getMovieDetails", ()=>getMovieDetails);
var _heropy = require("../core/heropy");
const store = new (0, _heropy.Store)({
    searchText: "",
    page: 1,
    pageMax: 1,
    movies: [],
    movie: {},
    loading: false,
    message: "Search for the movie title!"
});
exports.default = store;
const searchMovies = async (page)=>{
    store.state.loading = true; // 로딩 애니메이션 실행
    store.state.page = page;
    if (page === 1) {
        store.state.movies = [];
        store.state.message = "";
    }
    try {
        const res = await fetch(`https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`);
        const { Search, totalResults, Response, Error } = await res.json(); // json메소드로 서버에서 가져온 정보 분석
        if (Response === "True") {
            store.state.movies = [
                ...store.state.movies,
                ...Search
            ];
            store.state.pageMax = Math.ceil(Number(totalResults) / 10); // 매 페이지마다 10개씩을 출력할 수 있다는걸 가정했을 때, 총 검색결과 수 대비 몇 개의 페이지가 있는지를 출력해주는 코드임.
        } else {
            store.state.message = Error;
            store.state.pageMax = 1;
        }
    } catch (error) {
        console.log("searchMovies error:", error);
    } finally{
        store.state.loading = false;
    }
// 혹시나 사용자의 인터넷이 갑자기 끊겼거나 하는 등의 문제가 생겼을 때 (자바스크립트의 fetch 선에서 문제가 생겼을 경우) 자바스크립트에 에러가 발생하게 되고, 이후의 자바스크립트의 모든 코드의 동작이 멈춰버리기 때문에, 이를 방지해 줄 수 있음. 따라서 fetch함수처럼 네트워크의 요청을 처리하는 코드에서는 언제든지 의도치 않게 문제가 발생할 수 있으므로, try&catch 구문을 통해 예외처리를 할 수 있음. 그래서 만약 문제가 생겼을 때는 try 구문의 내용은 동작하지 않을 것이고, catch부분 & finally 구문이 실행될 것임.
};
const getMovieDetails = async (id)=>{
    try {
        const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`);
        // omdbapi 사이트에 명시된 Parameter중 i(각 영화별 고유 id)와 plot(영화 줄거리) parameter를 사용하여 해당하는 영화의 상세 줄거리를 출력하도록 함.
        store.state.movie = await res.json();
    } catch (error) {
        console.log("getMovieDetails error:", error);
    }
}; // 내부에서 fetch 함수를 써서 가져올 것이기 때문에 async를 붙여줌.

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8UDl3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
var _movieItem = require("./MovieItem");
var _movieItemDefault = parcelHelpers.interopDefault(_movieItem);
class MovieList extends (0, _heropy.Component) {
    constructor(){
        super();
        (0, _movieDefault.default).subscribe("movies", ()=>{
            this.render(); // "movies"를 subscribe로 감시하여 "movies"라는 상태가 서버에서 영화정보를 가져와서 갱신될때마다 콜백 함수가 실행되는 구조. 그래서 아래 render() 부분의 함수가 다시 동작. 그리고 그렇게 해서 반환된 내용은 아래의 div "movies"에 출력됨.
        });
        (0, _movieDefault.default).subscribe("loading", ()=>{
            this.render();
        });
        (0, _movieDefault.default).subscribe("message", ()=>{
            this.render();
        });
    }
    render() {
        this.el.classList.add("movie-list");
        this.el.innerHTML = /* html */ `
          ${(0, _movieDefault.default).state.message ? `<div class="message">${(0, _movieDefault.default).state.message}</div>` : '<div class="movies"></div>'}
          <div class="the-loader hide"></div>
        `;
        const moviesEl = this.el.querySelector(".movies");
        moviesEl?.append(//만약에 해당하는 검색 결과가 없을 경우, 이 append 메소드가 제대로 실행되지 않는다. 따라서 오류를 막기위해 '선택적 체이닝' 기법. 즉 ? 를 해당하는 요소이름 뒤에 붙여서, moviesEl이 있을땐 append를 진행하도록 함.
        ...(0, _movieDefault.default).state.movies.map((movie)=>new (0, _movieItemDefault.default)({
                movie
            }).el));
        const loaderEl = this.el.querySelector(".the-loader");
        (0, _movieDefault.default).state.loading ? loaderEl.classList.remove("hide") : loaderEl.classList.add("hide");
    }
}
exports.default = MovieList;

},{"../core/heropy":"57bZf","../store/movie":"kq1bo","./MovieItem":"fAzE8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fAzE8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
class MovieItem extends (0, _heropy.Component) {
    constructor(props){
        //MovieItem이 생성자 함수로 호출될 때, props로 부모 컴포넌트->자식 컴포넌트로 정보를 받아올거고 그 정보를 상속하는 Component 클래스로 super 함수를 통해서 props와 tagName을 전달
        super({
            props,
            tagName: "a"
        });
    }
    render() {
        const { movie } = this.props; // 객체 구조 분해 할당
        this.el.setAttribute("href", `#/movie?id=${movie.imdbID}`);
        // 'a' 태그로 만든 this.el 요소에다가 setAttribute라는 이름의 메소드를 추가해서 'href'속성의 값을 지정. & 여기서 MovieItem으로 만든 컴포넌트는 a 태그로 만들어져있고 그 태그로 만들어진 this.el 요소는 href 속성(어떤 페이지로 이동할 것인지에 대한 경로를 명시)을 setAttribute 메소드를 이용해서 추가하겠다는 의미.
        this.el.classList.add("movie");
        this.el.style.backgroundImage = `url(${movie.Poster})`;
        this.el.innerHTML = /* html */ `
        <div class="info">
            <div class="year">
                ${movie.Year}
            </div>
            <div class="title">
                ${movie.Title}
            </div>


  </div>
    `;
    }
}
exports.default = MovieItem;

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ZUar":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
class MovieListMore extends (0, _heropy.Component) {
    constructor(){
        super({
            tagName: "button"
        });
        (0, _movieDefault.default).subscribe("pageMax", ()=>{
            const { page, pageMax } = (0, _movieDefault.default).state; // page와 pageMax를 꺼낼건데, 그것은 movieStore에 있는 state 부분에서 꺼내겠다는 의미.
            pageMax > page ? this.el.classList.remove("hide") : this.el.classList.add("hide"); //아직 더 가져올 검색결과 페이지가 있다면 hide 클래스를 제거해서 내용을 출력해줄 수 있도록 하고, 없다면 hide 클래스를 적용시켜 내용을 숨김처리 한다.
        });
    }
    render() {
        this.el.classList.add("btn", "view-more", "hide");
        this.el.textContent = "View more..";
        this.el.addEventListener("click", async ()=>{
            this.el.classList.add("hide"); // 이 코드를 넣어줌으로써 검색결과가 없는 상황에서도 View more 버튼이 나오는 것을 방지해줄 수 있음
            await (0, _movie.searchMovies)((0, _movieDefault.default).state.page + 1); //항상 1페이지 이후의 다음 페이지들이 출력될 수 있도록. 만약에 이게 2가 되면 movie.js 파일의 10행에 있는 async page <<- 이 매개변수에 2가 들어가게 되면서 그 다음 코드들이 실행되고, 2페이지에 해당하는 영화 정보들이 출력될 것임
        });
    }
}
exports.default = MovieListMore;

},{"../core/heropy":"57bZf","../store/movie":"kq1bo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1LTyN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
class Movie extends (0, _heropy.Component) {
    async render() {
        this.el.classList.add("container", "the-movie");
        this.el.innerHTML = /* html */ `
        <div class="poster skeleton"></div>
        <div class="specs">
            <div class="title skeleton"></div>
            <div class="labels skeleton"></div>
            <div class="plot skeleton"></div>
        </div>
    `;
        await (0, _movie.getMovieDetails)(history.state.id);
        console.log((0, _movieDefault.default).state.movie);
        // history의 id 속성을 받아서 movie.js의 getMovieDetails 함수를 실행하고 그 값을 store.state.movie 로 받아 콘솔에 출력.
        const { movie } = (0, _movieDefault.default).state;
        const bigPoster = movie.Poster.replace("SX300", "SX700"); // 이미지 주소를 복사해서 주소창에 붙여넣으면 맨 끝에 SX300 이라는 부분이 나오는데, 여기서 300을 다른 숫자로 바꾸면 그 이미지를 원하는 크기로 리사이징 할 수 있음. 이 개념을 '실시간 이미지 리사이징' 이라고 함. 그래서 우리는 그 기능을 이용해서 지금 보여지는 너비 300 크기의 이미지를 700으로 조절하여 더 높은 해상도로 보일 수 있게 하려는 것.
        this.el.innerHTML = /* html */ `
      <div 
      style="background-image: url(${bigPoster})"
      class="poster"></div>
      <div class="specs">
        <div class="title">
            ${movie.Title}
        </div>
        <div class="labels">
            <span>${movie.Released}</span>
            &nbsp;/&nbsp;
            <span>${movie.Runtime}</span>
            &nbsp;/&nbsp;
            <span>${movie.Country}</span>
        </div>
        <div class="plot">
            ${movie.Plot}
        </div>
        <div>
            <h3>Ratings</h3>
            ${movie.Ratings.map((rating)=>{
            return `<p>${rating.Source} - ${rating.Value}</p>`;
        }).join("")}
        </div>
        <div>
            <h3>Actors</h3>
            <p>${movie.Actors}</p>
        </div>
        <div>
            <h3>Director</h3>
            <p>${movie.Director}</p>
        </div>
        <div>
            <h3>Production</h3>
            <p>${movie.Production}</p>
        </div>
        <div>
            <h3>Genre</h3>
            <p>${movie.Genre}</p>
        </div>
      </div>
    `;
    }
}
exports.default = Movie;

},{"../core/heropy":"57bZf","../store/movie":"kq1bo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdB30":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _about = require("../store/about");
var _aboutDefault = parcelHelpers.interopDefault(_about);
class About extends (0, _heropy.Component) {
    render() {
        const { photo, name, email, github, blog } = (0, _aboutDefault.default).state;
        this.el.classList.add("container", "about");
        this.el.innerHTML = /* html */ `
      <div 
      style="background-image: url(${photo});" 
      class="photo"></div>
      <p class="name">${name}</p>
      <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" target="_blank">${email}</a></p>
      <p><a href="${github}" target="_blank">GitHub</a></p>
      <p><a href="${blog}" target="_blank">Blog</a></p>
        `;
    }
}
exports.default = About;

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../store/about":"4RAJO"}],"4fDiL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
class NotFound extends (0, _heropy.Component) {
    render() {
        this.el.classList.add("container", "not-found");
        this.el.innerHTML = /* html */ `
            <h1>
                Sorry..<br>
                Page Not Found.
    </h1>
        `;
    }
}
exports.default = NotFound;

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["f3BSW","gLLPy"], "gLLPy", "parcelRequire6588")

//# sourceMappingURL=index.4d6bcbeb.js.map
