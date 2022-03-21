import { g as getContext, c as create_ssr_component, a as subscribe, b as add_attribute, n as noop, d as safe_not_equal, r as run_all, i as is_function, e as get_store_value, f as identity, h as internal } from "./index-9f97fac3.js";
import "seamless-scroll-polyfill";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store2 = getStores().page;
    return store2.subscribe(fn);
  }
};
var Link_svelte_svelte_type_style_lang = "";
const css = {
  code: ".active.svelte-11a7qmy{border-bottom:solid 1px var(--theme-text)}a.svelte-11a7qmy,a.svelte-11a7qmy:visited{padding:5px 7px;-webkit-transition:border 0.5s ease, color 0.5s ease;transition:border 0.5s ease, color 0.5s ease;text-decoration:none;font-size:1.2em;font-weight:700;color:var(--theme-text)}a.svelte-11a7qmy:hover{border:solid 2px hsl(var(--theme-text-pri));border-radius:0.25em;color:var(--theme-text-pri);cursor:pointer}a.svelte-11a7qmy:active{border:solid 2px;color:var(--theme-bg-pri-accent)}a.svelte-11a7qmy:focus{border:solid;outline:none}a.svelte-11a7qmy:inner-focus{outline:none}",
  map: null
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { ariaLabel = null } = $$props;
  let { url } = $$props;
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<a${add_attribute("href", url, 0)} class="${["center svelte-11a7qmy", $page.url.pathname === url ? "active" : ""].join(" ").trim()}"${add_attribute("aria-label", !ariaLabel ? void 0 : ariaLabel, 0)}>${slots.default ? slots.default({}) : ``}
</a>`;
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var dist = {};
var ScrollTo = {};
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store2, i) => subscribe(store2, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}
var store$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  derived,
  readable,
  writable,
  get: get_store_value
}, Symbol.toStringTag, { value: "Module" }));
var require$$0$1 = /* @__PURE__ */ getAugmentedNamespace(store$1);
var store = {};
function backInOut(t) {
  const s = 1.70158 * 1.525;
  if ((t *= 2) < 1)
    return 0.5 * (t * t * ((s + 1) * t - s));
  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
}
function backIn(t) {
  const s = 1.70158;
  return t * t * ((s + 1) * t - s);
}
function backOut(t) {
  const s = 1.70158;
  return --t * t * ((s + 1) * t + s) + 1;
}
function bounceOut(t) {
  const a = 4 / 11;
  const b = 8 / 11;
  const c = 9 / 10;
  const ca = 4356 / 361;
  const cb = 35442 / 1805;
  const cc = 16061 / 1805;
  const t2 = t * t;
  return t < a ? 7.5625 * t2 : t < b ? 9.075 * t2 - 9.9 * t + 3.4 : t < c ? ca * t2 - cb * t + cc : 10.8 * t * t - 20.52 * t + 10.72;
}
function bounceInOut(t) {
  return t < 0.5 ? 0.5 * (1 - bounceOut(1 - t * 2)) : 0.5 * bounceOut(t * 2 - 1) + 0.5;
}
function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}
function circInOut(t) {
  if ((t *= 2) < 1)
    return -0.5 * (Math.sqrt(1 - t * t) - 1);
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}
function circIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}
function circOut(t) {
  return Math.sqrt(1 - --t * t);
}
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function cubicIn(t) {
  return t * t * t;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function elasticInOut(t) {
  return t < 0.5 ? 0.5 * Math.sin(13 * Math.PI / 2 * 2 * t) * Math.pow(2, 10 * (2 * t - 1)) : 0.5 * Math.sin(-13 * Math.PI / 2 * (2 * t - 1 + 1)) * Math.pow(2, -10 * (2 * t - 1)) + 1;
}
function elasticIn(t) {
  return Math.sin(13 * t * Math.PI / 2) * Math.pow(2, 10 * (t - 1));
}
function elasticOut(t) {
  return Math.sin(-13 * (t + 1) * Math.PI / 2) * Math.pow(2, -10 * t) + 1;
}
function expoInOut(t) {
  return t === 0 || t === 1 ? t : t < 0.5 ? 0.5 * Math.pow(2, 20 * t - 10) : -0.5 * Math.pow(2, 10 - t * 20) + 1;
}
function expoIn(t) {
  return t === 0 ? t : Math.pow(2, 10 * (t - 1));
}
function expoOut(t) {
  return t === 1 ? t : 1 - Math.pow(2, -10 * t);
}
function quadInOut(t) {
  t /= 0.5;
  if (t < 1)
    return 0.5 * t * t;
  t--;
  return -0.5 * (t * (t - 2) - 1);
}
function quadIn(t) {
  return t * t;
}
function quadOut(t) {
  return -t * (t - 2);
}
function quartInOut(t) {
  return t < 0.5 ? 8 * Math.pow(t, 4) : -8 * Math.pow(t - 1, 4) + 1;
}
function quartIn(t) {
  return Math.pow(t, 4);
}
function quartOut(t) {
  return Math.pow(t - 1, 3) * (1 - t) + 1;
}
function quintInOut(t) {
  if ((t *= 2) < 1)
    return 0.5 * t * t * t * t * t;
  return 0.5 * ((t -= 2) * t * t * t * t + 2);
}
function quintIn(t) {
  return t * t * t * t * t;
}
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
function sineInOut(t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
}
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14)
    return 1;
  else
    return 1 - v;
}
function sineOut(t) {
  return Math.sin(t * Math.PI / 2);
}
var easing = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  backIn,
  backInOut,
  backOut,
  bounceIn,
  bounceInOut,
  bounceOut,
  circIn,
  circInOut,
  circOut,
  cubicIn,
  cubicInOut,
  cubicOut,
  elasticIn,
  elasticInOut,
  elasticOut,
  expoIn,
  expoInOut,
  expoOut,
  quadIn,
  quadInOut,
  quadOut,
  quartIn,
  quartInOut,
  quartOut,
  quintIn,
  quintInOut,
  quintOut,
  sineIn,
  sineInOut,
  sineOut,
  linear: identity
}, Symbol.toStringTag, { value: "Module" }));
var require$$1 = /* @__PURE__ */ getAugmentedNamespace(easing);
Object.defineProperty(store, "__esModule", { value: true });
store.globalOptions = store.elements = void 0;
const store_1$4 = require$$0$1;
const easing_1 = require$$1;
store.elements = (0, store_1$4.writable)([]);
store.globalOptions = (0, store_1$4.writable)({
  offset: 0,
  duration: 500,
  easing: easing_1.cubicInOut
});
var globalOptions$2 = {};
Object.defineProperty(globalOptions$2, "__esModule", { value: true });
globalOptions$2.getGlobalOptions = void 0;
const store_1$3 = require$$0$1;
const store_2$3 = store;
const globalOpts$1 = (0, store_1$3.get)(store_2$3.globalOptions);
const getGlobalOptions = () => {
  return globalOpts$1;
};
globalOptions$2.getGlobalOptions = getGlobalOptions;
const setGlobalOptions = (options) => {
  store_2$3.globalOptions.update(() => Object.assign(globalOpts$1, options));
};
globalOptions$2.default = setGlobalOptions;
var utils = {};
Object.defineProperty(utils, "__esModule", { value: true });
utils.getPosition = utils.getElement = utils.sanitize = void 0;
const sanitize = (hash) => {
  return hash.replace(/[^A-Z0-9]/gi, "").toLowerCase();
};
utils.sanitize = sanitize;
const getElement = (elementsList2, reference) => {
  const elements = elementsList2.filter((element) => {
    const elementRef = element.reference;
    return elementRef === reference;
  });
  return elements.length ? elements[0].node : null;
};
utils.getElement = getElement;
const getPosition = (element) => {
  return element.offsetTop;
};
utils.getPosition = getPosition;
var scrolling$2 = {};
var smoothScroll$1 = {};
var require$$0 = /* @__PURE__ */ getAugmentedNamespace(internal);
Object.defineProperty(smoothScroll$1, "__esModule", { value: true });
const internal_1 = require$$0;
const currentPosition = (start, end, elapsed, duration, easing2) => {
  if (elapsed > duration)
    return end;
  return start + (end - start) * easing2(elapsed / duration);
};
const smoothScroll = (options, callback) => {
  const { start, end, duration, easing: easing2 } = options;
  const clock = (0, internal_1.now)();
  const step = () => {
    const elapsed = (0, internal_1.now)() - clock;
    const position = currentPosition(start, end, elapsed, duration, easing2);
    callback(position);
    if (elapsed > duration)
      return;
    window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
};
smoothScroll$1.default = smoothScroll;
var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(scrolling$2, "__esModule", { value: true });
const smoothScroll_1 = __importDefault$2(smoothScroll$1);
const globalOptions_1$2 = globalOptions$2;
const globalOptions$1 = (0, globalOptions_1$2.getGlobalOptions)();
const scrolling$1 = (endPosition, opts) => {
  const options = Object.assign(globalOptions$1, opts);
  const start = window.pageYOffset;
  const end = endPosition + options.offset;
  (0, smoothScroll_1.default)({ start, end, ...options }, (position) => {
    window.scroll(0, position);
  });
};
scrolling$2.default = scrolling$1;
var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(ScrollTo, "__esModule", { value: true });
const store_1$2 = require$$0$1;
const store_2$2 = store;
const globalOptions_1$1 = globalOptions$2;
const utils_1$2 = utils;
const scrolling_1$1 = __importDefault$1(scrolling$2);
const elementsList$1 = (0, store_1$2.get)(store_2$2.elements);
const globalOpts = (0, globalOptions_1$1.getGlobalOptions)();
const handle = (event, options) => {
  event.preventDefault();
  const { ref, offset, duration, easing: easing2 } = options;
  const element = (0, utils_1$2.getElement)(elementsList$1, ref);
  if (!element) {
    throw new Error(`Element reference '${ref}' not found`);
  }
  (0, scrolling_1$1.default)((0, utils_1$2.getPosition)(element), { duration, offset, easing: easing2 });
};
const scrollTo = (node, options) => {
  if (!options) {
    throw new Error("scrollTo require a options");
  }
  let opts = {
    ref: "",
    ...globalOpts
  };
  typeof options === "string" ? opts.ref = options : opts = Object.assign(options, opts);
  const ref = (0, utils_1$2.sanitize)(opts.ref);
  if (!ref) {
    throw new Error("scrollTo require a reference");
  }
  opts.ref = ref;
  if (node instanceof HTMLAnchorElement) {
    node.href = `#${ref}`;
  }
  if (node instanceof HTMLAnchorElement === false) {
    node.style.cursor = "pointer";
  }
  node.addEventListener("click", (event) => handle(event, opts));
  node.addEventListener("touchstart", (event) => handle(event, opts));
  return {
    destroy() {
      node.removeEventListener("click", (event) => handle(event, opts));
      node.removeEventListener("touchstart", (event) => handle(event, opts));
    }
  };
};
ScrollTo.default = scrollTo;
var ScrollRef = {};
Object.defineProperty(ScrollRef, "__esModule", { value: true });
const store_1$1 = require$$0$1;
const utils_1$1 = utils;
const store_2$1 = store;
const elementsList = (0, store_1$1.get)(store_2$1.elements);
const scrollRef = (node, reference) => {
  if (!reference) {
    throw new Error("scrollRef require a hash");
  }
  elementsList.push({
    node,
    reference: (0, utils_1$1.sanitize)(reference)
  });
  return {
    destroy() {
      elementsList.length = 0;
    }
  };
};
ScrollRef.default = scrollRef;
var scrolling = {};
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(scrolling, "__esModule", { value: true });
scrolling.scrollPosition = scrolling.scrollElement = scrolling.scrollBottom = scrolling.scrollTop = void 0;
const store_1 = require$$0$1;
const store_2 = store;
const globalOptions_1 = globalOptions$2;
const utils_1 = utils;
const scrolling_1 = __importDefault(scrolling$2);
const globalOptions = (0, globalOptions_1.getGlobalOptions)();
const scrollTop = (options) => {
  const opts = Object.assign(globalOptions, options);
  (0, scrolling_1.default)(0, opts);
};
scrolling.scrollTop = scrollTop;
const scrollBottom = (options) => {
  const opts = Object.assign(globalOptions, options);
  const body = document.body;
  const html = document.documentElement;
  const end = Math.max(body.scrollHeight, body.offsetHeight, html.scrollHeight, html.clientHeight, html.offsetHeight);
  (0, scrolling_1.default)(end, opts);
};
scrolling.scrollBottom = scrollBottom;
const scrollElement = (reference, options) => {
  if (!reference || typeof reference !== "string") {
    throw new Error("scrollElement require a reference valid");
  }
  const opts = Object.assign(globalOptions, options);
  const ref = (0, utils_1.sanitize)(reference);
  const elementsList2 = (0, store_1.get)(store_2.elements);
  const element = (0, utils_1.getElement)(elementsList2, ref);
  if (!element) {
    throw new Error(`Element reference '${ref}' not found`);
  }
  (0, scrolling_1.default)((0, utils_1.getPosition)(element), opts);
};
scrolling.scrollElement = scrollElement;
const scrollPosition = (position, options) => {
  if (!position || typeof position !== "number") {
    throw new Error("scrollPosition require a position value valid");
  }
  const opts = Object.assign(globalOptions, options);
  (0, scrolling_1.default)(position, opts);
};
scrolling.scrollPosition = scrollPosition;
(function(exports) {
  var __importDefault2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.scrollPosition = exports.scrollElement = exports.scrollBottom = exports.scrollTop = exports.setGlobalOptions = exports.scrollRef = exports.scrollTo = void 0;
  var ScrollTo_1 = ScrollTo;
  Object.defineProperty(exports, "scrollTo", { enumerable: true, get: function() {
    return __importDefault2(ScrollTo_1).default;
  } });
  var ScrollRef_1 = ScrollRef;
  Object.defineProperty(exports, "scrollRef", { enumerable: true, get: function() {
    return __importDefault2(ScrollRef_1).default;
  } });
  var globalOptions_12 = globalOptions$2;
  Object.defineProperty(exports, "setGlobalOptions", { enumerable: true, get: function() {
    return __importDefault2(globalOptions_12).default;
  } });
  var scrolling_12 = scrolling;
  Object.defineProperty(exports, "scrollTop", { enumerable: true, get: function() {
    return scrolling_12.scrollTop;
  } });
  Object.defineProperty(exports, "scrollBottom", { enumerable: true, get: function() {
    return scrolling_12.scrollBottom;
  } });
  Object.defineProperty(exports, "scrollElement", { enumerable: true, get: function() {
    return scrolling_12.scrollElement;
  } });
  Object.defineProperty(exports, "scrollPosition", { enumerable: true, get: function() {
    return scrolling_12.scrollPosition;
  } });
})(dist);
export { Link as L, cubicInOut as c, dist as d };
