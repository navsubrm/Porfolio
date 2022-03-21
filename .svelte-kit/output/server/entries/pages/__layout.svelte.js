import { c as create_ssr_component, v as validate_component } from "../../chunks/index-1d0f2202.js";
import { L as Link, d as dist, c as cubicInOut } from "../../chunks/index-08ed08b1.js";
import "seamless-scroll-polyfill";
var global = "";
var Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'nav.svelte-7at3vf.svelte-7at3vf{position:sticky;top:0;display:flex;justify-content:space-between;align-items:center;min-height:8vh;background-color:hsla(var(--theme-bg-pri), 1);z-index:2;color:hsl(var(--theme-text-pri))}#nav-bar.svelte-7at3vf h1.svelte-7at3vf{margin-left:15px;font-family:"pacifico", sans-serif;font-size:1.7em}#nav-bar.svelte-7at3vf ul.svelte-7at3vf{display:flex;align-items:center;list-style:none;margin-right:15px}#nav-bar.svelte-7at3vf li.svelte-7at3vf{margin:5px 15px}@media only screen and (max-width: 700px){#nav-bar.svelte-7at3vf ul li.svelte-7at3vf{margin:5px 5px}}@media only screen and (max-width: 600px){#nav-bar.svelte-7at3vf ul li.svelte-7at3vf{justify-content:space-evenly;flex-wrap:wrap;margin:5px 0px;padding:10px}#nav-bar.svelte-7at3vf.svelte-7at3vf{flex-direction:column}}',
  map: null
};
let color$1 = "hsla(var(--theme-text-pri), 1)";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<nav id="${"nav-bar"}" class="${"nav-menu svelte-7at3vf"}"><h1 id="${"nav-logo"}" class="${"svelte-7at3vf"}">Nathan Meeker</h1>
  <ul class="${"svelte-7at3vf"}"><li class="${"svelte-7at3vf"}">${validate_component(Link, "Link").$$render($$result, {
    url: "#home",
    color: color$1,
    "aria-label": "link to top of the page."
  }, {}, {
    default: () => {
      return `Home`;
    }
  })}</li>

    <li class="${"svelte-7at3vf"}">${validate_component(Link, "Link").$$render($$result, {
    url: "#about-me",
    color: color$1,
    "aria-label": "link to about section."
  }, {}, {
    default: () => {
      return `About`;
    }
  })}</li>

    <li class="${"svelte-7at3vf"}">${validate_component(Link, "Link").$$render($$result, {
    url: "#experience",
    color: color$1,
    "aria-label": "link to experience header"
  }, {}, {
    default: () => {
      return `Experience`;
    }
  })}</li>

    <li class="${"svelte-7at3vf"}">${validate_component(Link, "Link").$$render($$result, {
    url: "#contact",
    color: color$1,
    "aria-label": "link to contact form."
  }, {}, {
    default: () => {
      return `Contact`;
    }
  })}</li></ul>
</nav>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-1kb1dp0.svelte-1kb1dp0{bottom:0;min-height:5vh;margin-top:5px auto}footer.svelte-1kb1dp0 div.svelte-1kb1dp0{width:100%;display:flex;justify-content:center;align-items:center;text-align:center;background:hsla(var(--theme-bg-pri), 1);z-index:2}p.svelte-1kb1dp0.svelte-1kb1dp0{color:hsl(var(--theme-text-pri))}",
  map: null
};
let color = "hsl(var(--theme-text-pri))";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1kb1dp0"}"><div class="${"footer svelte-1kb1dp0"}"><div class="${"svelte-1kb1dp0"}"><p class="${"svelte-1kb1dp0"}">Find me on:</p>
      ${validate_component(Link, "Link").$$render($$result, {
    url: "https://www.linkedin.com/in/nathan-m-444055178/",
    ariaLabel: "Link to Linked In profile for Nathan Meeker.",
    color
  }, {}, {
    default: () => {
      return `<img src="${"/linkedin.svg"}" alt="${"Linked In icon"}">`;
    }
  })}

      ${validate_component(Link, "Link").$$render($$result, {
    url: "https://github.com/navsubrm",
    ariaLabel: "Link to GitHub profile for Nathan Meeker.",
    color
  }, {}, {
    default: () => {
      return `<img src="${"/github.svg"}" alt="${"GitHub icon"}">`;
    }
  })}

      ${validate_component(Link, "Link").$$render($$result, {
    url: "https://portfolium.com/NathanMeeker2",
    ariaLabel: "Link to Portfolium profile for Nathan Meeker.",
    color
  }, {}, {
    default: () => {
      return `<img src="${"/portfolium.svg"}" alt="${"Porfolium site icon."}">`;
    }
  })}

      ${validate_component(Link, "Link").$$render($$result, {
    url: "/contact",
    ariaLabel: "Link to my contact page to email me.",
    color
  }, {}, {
    default: () => {
      return `<img src="${"/at.svg"}" alt="${"At symbol icon"}">`;
    }
  })}</div></div>
</footer>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout-container.svelte-1j2vmps{min-height:90vh;width:100%}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  dist.setGlobalOptions({
    offset: 0,
    duration: 1500,
    easing: cubicInOut
  });
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<div class="${"layout-container svelte-1j2vmps"}">${slots.default ? slots.default({}) : ``}</div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
