import { c as create_ssr_component, v as validate_component } from "../../chunks/index-9f97fac3.js";
import { L as Link, d as dist, c as cubicInOut } from "../../chunks/index-697b1af0.js";
import "seamless-scroll-polyfill";
var global = "";
var Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "nav.svelte-17u9ub1.svelte-17u9ub1{position:sticky;top:0;display:flex;justify-content:space-between;align-items:center;min-height:8vh;background-color:hsla(var(--theme-bg-pri), 1);z-index:2;color:hsl(var(--theme-text-pri))}#nav-bar.svelte-17u9ub1 h1.svelte-17u9ub1{margin-left:15px;font-family:'pacifico', sans-serif;font-size:1.7em}#nav-bar.svelte-17u9ub1 ul.svelte-17u9ub1{display:flex;align-items:center;list-style:none;margin-right:15px}#nav-bar.svelte-17u9ub1 li.svelte-17u9ub1{margin:5px 15px}@media only screen and (max-width: 700px){#nav-bar.svelte-17u9ub1 ul li.svelte-17u9ub1{margin:5px 5px}}@media only screen and (max-width: 600px){#nav-bar.svelte-17u9ub1 ul li.svelte-17u9ub1{justify-content:space-evenly;flex-wrap:wrap;margin:5px 0px;padding:10px}#nav-bar.svelte-17u9ub1.svelte-17u9ub1{flex-direction:column}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<nav id="${"nav-bar"}" class="${"nav-menu svelte-17u9ub1"}"><h1 id="${"nav-logo"}" class="${"svelte-17u9ub1"}">Nathan Meeker</h1>
	<ul class="${"svelte-17u9ub1"}"><li class="${"svelte-17u9ub1"}">${validate_component(Link, "Link").$$render($$result, { url: "#home" }, {}, {
    default: () => {
      return `Home`;
    }
  })}</li>

		<li class="${"svelte-17u9ub1"}">${validate_component(Link, "Link").$$render($$result, { url: "#about-me" }, {}, {
    default: () => {
      return `About`;
    }
  })}</li>

		<li class="${"svelte-17u9ub1"}">${validate_component(Link, "Link").$$render($$result, { url: "#experience" }, {}, {
    default: () => {
      return `Experience`;
    }
  })}</li>

		<li class="${"svelte-17u9ub1"}">${validate_component(Link, "Link").$$render($$result, { url: "#contact" }, {}, {
    default: () => {
      return `Contact`;
    }
  })}</li></ul>
</nav>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-t5gukx.svelte-t5gukx{bottom:0;min-height:5vh;margin-top:5px auto}footer.svelte-t5gukx div.svelte-t5gukx{width:100%;display:flex;justify-content:center;align-items:center;text-align:center;background:hsla(var(--theme-bg-pri), 1);z-index:2}footer.svelte-t5gukx p.svelte-t5gukx{color:var(--theme-text-pri)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-t5gukx"}"><div class="${"footer svelte-t5gukx"}"><div class="${"svelte-t5gukx"}"><p class="${"svelte-t5gukx"}">Find me on:</p>
      ${validate_component(Link, "Link").$$render($$result, {
    url: "https://www.linkedin.com/in/nathan-m-444055178/",
    ariaLabel: "Link to Linked In profile for Nathan Meeker."
  }, {}, {
    default: () => {
      return `<img src="${"/linkedin.svg"}" alt="${"Linked In icon"}">`;
    }
  })}

      ${validate_component(Link, "Link").$$render($$result, {
    url: "https://github.com/navsubrm",
    ariaLabel: "Link to GitHub profile for Nathan Meeker."
  }, {}, {
    default: () => {
      return `<img src="${"/github.svg"}" alt="${"GitHub icon"}">`;
    }
  })}

      ${validate_component(Link, "Link").$$render($$result, {
    url: "https://portfolium.com/NathanMeeker2",
    ariaLabel: "Link to Portfolium profile for Nathan Meeker."
  }, {}, {
    default: () => {
      return `<img src="${"/portfolium.svg"}" alt="${"Porfolium site icon."}">`;
    }
  })}

      ${validate_component(Link, "Link").$$render($$result, {
    url: "/contact",
    ariaLabel: "Link to my contact page to email me."
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
