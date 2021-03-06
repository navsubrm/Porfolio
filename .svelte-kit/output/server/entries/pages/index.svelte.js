import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/index-1d0f2202.js";
import { L as Link } from "../../chunks/index-08ed08b1.js";
import "seamless-scroll-polyfill";
import * as emailValidator from "email-validator";
import dompurify from "dompurify";
import emailjsCom from "emailjs-com";
var CardLayout_svelte_svelte_type_style_lang = "";
const css$d = {
  code: ".card.svelte-2wy5as.svelte-2wy5as{width:100%}.card-layout.svelte-2wy5as.svelte-2wy5as{position:absolute;width:100%;height:20vh;clip-path:polygon(0 100%, 100% 0, 100% 20%, 20% 100%);overflow:hidden}.card-container.svelte-2wy5as.svelte-2wy5as{position:fixed;bottom:var(--bottom);height:20vh;width:100%;overflow:hidden;z-index:1;transition:bottom 0.5s}.card-title.svelte-2wy5as.svelte-2wy5as{position:absolute;right:10px;text-align:right;font-size:1.7vmax;font-weight:800;text-transform:uppercase;width:100%;top:53%;transform:rotate(var(--sub-container-diagonal));cursor:pointer;background-repeat:no-repeat;background-size:100%;background-clip:text;color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.about.svelte-2wy5as.svelte-2wy5as{background-color:hsla(var(--theme-text-about), 1)}.about.svelte-2wy5as .card-title.svelte-2wy5as{animation:svelte-2wy5as-cardTitleText 3s linear infinite}.experience.svelte-2wy5as.svelte-2wy5as{background-color:hsl(var(--theme-text-experience));transform:translateY(5vh)}.experience.svelte-2wy5as .card-title.svelte-2wy5as{animation:svelte-2wy5as-cardTitleText 3s linear 0.5s infinite}.contact.svelte-2wy5as.svelte-2wy5as{background-color:hsla(var(--theme-text-contact), 1);transform:translateY(10vh)}.contact.svelte-2wy5as .card-title.svelte-2wy5as{animation:svelte-2wy5as-cardTitleText 3s linear 1s infinite}.extra.svelte-2wy5as.svelte-2wy5as{background-color:hsl(var(--theme-text-black));clip-path:polygon(0 20vh, 100% 0, 100% 100%, 0% 100%);transform:translateY(15vh)}.extra.svelte-2wy5as .card-title.svelte-2wy5as{animation:svelte-2wy5as-cardTitleText 3s linear 1.5s infinite}@keyframes svelte-2wy5as-cardTitleText{0%{background-image:linear-gradient(-43deg, #ffffff 100%, #222121 100%)}5%{background-image:linear-gradient(43deg, #ffffff 94%, #222121 100%)}10%{background-image:linear-gradient(43deg, #ffffff 94%, #222121 100%)}15%{background-image:linear-gradient(-43deg, #ffffff 100%, #222121 100%)}100%{background-image:linear-gradient(-43deg, #ffffff 100%, #222121 100%)}}",
  map: null
};
const CardLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let textAngleAdjust;
  let bottomValue = 0;
  $$result.css.add(css$d);
  return `

<div id="${"card-container"}" class="${"card card-container svelte-2wy5as"}" style="${"--bottom: " + escape(bottomValue) + "vh"}"><div class="${"card-layout about about-btn svelte-2wy5as"}"${add_attribute("this", textAngleAdjust, 0)}><span class="${"card-title svelte-2wy5as"}"><a href="${"#about-me"}">About</a></span></div>

  <div class="${"card-layout experience experience-btn svelte-2wy5as"}"><span class="${"card-title svelte-2wy5as"}"><a href="${"#experience"}">Experience</a></span></div>

  <div class="${"card-layout contact contact-btn svelte-2wy5as"}"><span class="${"card-title svelte-2wy5as"}"><a href="${"#contact"}">Contact</a></span></div>

  <div class="${"card-layout extra extra-btn svelte-2wy5as"}"><span class="${"card-title svelte-2wy5as"}"><a href="${"#home"}">Home</a></span></div>
</div>`;
});
var ContentBlock_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ".container.svelte-1xfd2qz{position:relative;background-color:var(--color);color:var(--text);padding:70px 0px}.content-body.svelte-1xfd2qz{padding:20px 0px;width:100%}@media only screen and (max-width: 900px){.content-body.svelte-1xfd2qz{padding:20px 0px}}@media only screen and (max-width: 700px){.content-title.svelte-1xfd2qz{top:95px}}",
  map: null
};
const ContentBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { background: background2 = "hsla(var(--theme-bg-pri), 1)" } = $$props;
  let { text: text2 = "hsla(var(--theme-text-pri))" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background2 !== void 0)
    $$bindings.background(background2);
  if ($$props.text === void 0 && $$bindings.text && text2 !== void 0)
    $$bindings.text(text2);
  $$result.css.add(css$c);
  return `<div class="${"container svelte-1xfd2qz"}" style="${"--color: " + escape(background2) + "; --text: " + escape(text2) + ";"}"><div class="${"content-title svelte-1xfd2qz"}">${slots["content-title"] ? slots["content-title"]({}) : ``}</div>

  <div class="${"content-body svelte-1xfd2qz"}">${slots["content-body"] ? slots["content-body"]({}) : ``}</div>
</div>`;
});
var DesignElement1_svelte_svelte_type_style_lang = "";
const css$b = {
  code: '.design-element.svelte-jmuxxj{position:relative;width:80%;margin:0 auto;padding:10px 20px}.design-element.svelte-jmuxxj::before{position:absolute;top:0;left:0;width:70%;height:55%;content:"";border-left:solid 3px hsl(var(--theme-bg-alt));border-top:solid 3px hsl(var(--theme-bg-alt))}.design-element.svelte-jmuxxj::after{position:absolute;bottom:0;right:0;width:70%;height:55%;content:"";border-right:solid 3px var(--color);border-bottom:solid 3px var(--color)}.spacing.svelte-jmuxxj{margin:25px}@media only screen and (max-width: 900px){.design-element.svelte-jmuxxj{width:90%}}@media only screen and (max-width: 650px){.design-element.svelte-jmuxxj{padding:10px}.design-element.svelte-jmuxxj::after,.design-element.svelte-jmuxxj::before{display:none}}',
  map: null
};
const DesignElement1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stripeColor = "hsl(var(--theme-text-about))" } = $$props;
  if ($$props.stripeColor === void 0 && $$bindings.stripeColor && stripeColor !== void 0)
    $$bindings.stripeColor(stripeColor);
  $$result.css.add(css$b);
  return `<div class="${"center center-column design-element svelte-jmuxxj"}" style="${"--color: " + escape(stripeColor)}"><div class="${"spacing svelte-jmuxxj"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
var AboutContent_svelte_svelte_type_style_lang = "";
const css$a = {
  code: "p.svelte-rjdwmn{text-align:justify}.theme-about.svelte-rjdwmn{--text:var(--color-input);margin-bottom:65px}.spacing.svelte-rjdwmn{margin:20px auto}.svelte-rjdwmn{color:var(--color-input)}p.svelte-rjdwmn{line-height:1.5;color:hsl(var(--theme-text-pri))}",
  map: null
};
let anchor$7 = "about-me";
let background$7 = "hsla(var(--theme-bg-pri), 1)";
let text$7 = "hsla(var(--theme-text-about), 1)";
const AboutContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$a);
  return `<div${add_attribute("id", anchor$7, 0)} style="${"--color-input: " + escape(text$7)}" class="${"svelte-rjdwmn"}">${validate_component(ContentBlock, "ContentBlock").$$render($$result, { background: background$7, text: text$7 }, {}, {
    "content-body": () => {
      return `<span slot="${"content-body"}" class="${"svelte-rjdwmn"}">${validate_component(DesignElement1, "DesignElement1").$$render($$result, {
        stripeColor: "hsl(var(--theme-text-about))"
      }, {}, {
        default: () => {
          return `<p class="${"text-normal spacing svelte-rjdwmn"}">I am a 24 year Navy veteran with a passion for finding and applying data-driven solutions to improve business outcomes. I have a passion for life-long learning and achieving the best
          solutions to maximize productivity, quality of work, and quality of life. Together, we can work smart, get it done and be our best in the office and our homes.
        </p>`;
        }
      })}</span>`;
    },
    "content-title": () => {
      return `<div slot="${"content-title"}" class="${"center center-column svelte-rjdwmn"}"><h2 class="${"theme-about text-large svelte-rjdwmn"}"><span class="${"svelte-rjdwmn"}">About me</span></h2></div>`;
    }
  })}
</div>`;
});
var WebDevelopment_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "h4.svelte-113dpe0.svelte-113dpe0{color:var(--color-input);margin-bottom:15px;text-align:left;width:100%;font-size:1.5em}p.svelte-113dpe0.svelte-113dpe0{text-indent:30px;line-height:1.5;text-align:justify;color:hsl(var(--theme-text-pri))}a.svelte-113dpe0.svelte-113dpe0,a.svelte-113dpe0.svelte-113dpe0:visited{color:var(--text)}a.svelte-113dpe0.svelte-113dpe0:hover,a.svelte-113dpe0.svelte-113dpe0:focus{cursor:pointer;color:hsl(var(--theme-text-black))}#logo-block.svelte-113dpe0.svelte-113dpe0{padding:30px;margin:15px;gap:65px}#logo-block.svelte-113dpe0 img.svelte-113dpe0{scale:1.7;justify-content:space-evenly;align-items:center}@media only screen and (max-width: 1000px){h4.svelte-113dpe0.svelte-113dpe0,p.svelte-113dpe0.svelte-113dpe0{width:90%}#logo-block.svelte-113dpe0.svelte-113dpe0{gap:20px}#logo-block.svelte-113dpe0 img.svelte-113dpe0{scale:1}}",
  map: null
};
let anchor$6 = "web-development-sub";
let background$6 = "hsla(var(--theme-bg-pri), 1)";
let text$6 = "hsla(var(--theme-text-experience), 1)";
const WebDevelopment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return `<div${add_attribute("id", anchor$6, 0)} style="${"--color-input: " + escape(text$6)}" class="${"svelte-113dpe0"}">${validate_component(ContentBlock, "ContentBlock").$$render($$result, { background: background$6, text: text$6 }, {}, {
    "content-body": () => {
      return `<span slot="${"content-body"}">${validate_component(DesignElement1, "DesignElement1").$$render($$result, { stripeColor: text$6 }, {}, {
        default: () => {
          return `<h4 class="${"text-normal svelte-113dpe0"}"><strong>More than three years of web-development:</strong></h4>
        <p class="${"text-normal svelte-113dpe0"}">I have administered Microsoft SharePoint sites across three organizations. When COVID-19 changed work environments gobally, the US Navy was no exception. At the onset I took a break from my
          MBA to focus on learning HTML, CSS, JavaScript to quickly develop in-house solutions to telework obstacles. Though dramatically improved from where I started, I am actively seeking a mentor
          and some team projects with which to engage. If you stumbled across this site and are interested in mentoring or collaborating, contact me.
        </p>
        <p class="${"text-normal svelte-113dpe0"}">I have experience with the following tools and frameworks among others:</p>
        <div id="${"logo-block"}" class="${"center svelte-113dpe0"}"><img src="${"/css-3.svg"}" alt="${"CSS logo"}" class="${"svelte-113dpe0"}">
          <img src="${"/html-5.svg"}" alt="${"HTML logo"}" class="${"svelte-113dpe0"}">
          <img src="${"/javascript.svg"}" alt="${"JavaScript logo"}" class="${"svelte-113dpe0"}">
          <img src="${"/mongodb.svg"}" alt="${"Mongo DB logo"}" class="${"svelte-113dpe0"}">
          <img src="${"/node.svg"}" alt="${"Node logo"}" class="${"svelte-113dpe0"}">
          <img src="${"/reactjs.svg"}" alt="${"React JS logo"}" class="${"svelte-113dpe0"}">
          <img src="${"/svelte.svg"}" alt="${"Svelte logo"}" class="${"svelte-113dpe0"}"></div>
        <p class="${"text-normal svelte-113dpe0"}">I have built apps for tracking personnel security clearance data, organizational onboarding programs, a submarine communications simulator, and trouble ticket management along with smaller
          personal projects, which I can share from my <a aria-label="${"Link to navsubrm's git hub profile"}" href="${"https://github.com/navsubrm"}" class="${"svelte-113dpe0"}">GitHub</a>
          or
          <a aria-label="${"Link to navsubrm's Codepen profile"}" href="${"https://codepen.io/navsubrm"}" class="${"svelte-113dpe0"}">Codepen</a> if you are interested. I keep most of my work private due to its purpose, but if you ask and
          I can verify you, I would be happy to share them.
        </p>`;
        }
      })}</span>`;
    }
  })}
</div>`;
});
var GeneralSkills_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "h4.svelte-55hyw3{color:var(--color-input);margin-bottom:15px;font-size:1.5em}p.svelte-55hyw3{text-indent:30px;line-height:1.5;color:hsl(var(--theme-text-pri));text-align:justify}.list-pri.svelte-55hyw3,.list-sub.svelte-55hyw3{text-decoration:none;margin-left:60px}",
  map: null
};
let anchor$5 = "general-sub";
let background$5 = "hsla(var(--theme-bg-pri), 1)";
let text$5 = "hsla(var(--theme-text-experience), 1)";
const GeneralSkills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<div${add_attribute("id", anchor$5, 0)} style="${"--color-input: " + escape(text$5)}">${validate_component(ContentBlock, "ContentBlock").$$render($$result, { background: background$5, text: text$5 }, {}, {
    "content-body": () => {
      return `<span slot="${"content-body"}">${validate_component(DesignElement1, "DesignElement1").$$render($$result, { stripeColor: text$5 }, {}, {
        default: () => {
          return `<h4 class="${"text-normal svelte-55hyw3"}"><strong>More than two decades of professional experience in the US Navy:</strong></h4>
        <p class="${"text-normal svelte-55hyw3"}">Served seven of my first sixteen years as a Chief Petty Officer, training and leading five to fifteen person submarine communications and electronic warfare teams.</p>
        <p class="${"text-normal svelte-55hyw3"}">The last decade has been as an Information Warfare Officer, evaluating submarine communications and network readiness. Specifically addressing:</p>
        <ul class="${"list-pri text-normal svelte-55hyw3"}"><li>Front-line Supervisor and department head training.</li>
          <li>Communications (COMSEC) security material policy compliance.</li>
          <li>Personnel and phyiscal security policy compliance.</li>
          <li>Cyber security program management:</li>
          <ul class="${"list-sub svelte-55hyw3"}"><li>Policy compliance</li>
            <li>Configuration managment</li>
            <li>Disaster recovery</li>
            <li>Incident response</li></ul></ul>
        <p class="${"text-normal svelte-55hyw3"}">I also spent six years as the team lead of a fifty person crisis and emergency management team developing and testing response, recovery, and continuity of operation plans.
        </p>`;
        }
      })}</span>`;
    }
  })}
</div>`;
});
var CyberSecurity_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "h4.svelte-m7wv14{color:var(--color-input);margin-bottom:15px;font-size:1.5em}p.svelte-m7wv14{text-indent:30px;line-height:1.5;color:hsl(var(--theme-text-pri));text-align:justify}.list-pri.svelte-m7wv14{text-decoration:none;margin-left:60px}",
  map: null
};
let anchor$4 = "network-security-sub";
let background$4 = "hsla(var(--theme-bg-pri), 1)";
let text$4 = "hsla(var(--theme-text-experience), 1)";
const CyberSecurity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<div${add_attribute("id", anchor$4, 0)} style="${"--color-input: " + escape(text$4)}">${validate_component(ContentBlock, "ContentBlock").$$render($$result, { background: background$4, text: text$4 }, {}, {
    "content-body": () => {
      return `<span slot="${"content-body"}">${validate_component(DesignElement1, "DesignElement1").$$render($$result, { stripeColor: text$4 }, {}, {
        default: () => {
          return `<h4 class="${"text-normal svelte-m7wv14"}"><strong>More than ten years of Cyber Security Experience:</strong></h4>
        <p class="${"text-normal svelte-m7wv14"}">My last ten years have been spent observing emerging threats while developing policies and analytics adopted across the submarine force by which to measure cyber resilience. As an inspector
          and mentor of shipboard network security teams, I work to evaluate risk and prioritize elements of Navy policy to achieve the most robust network posture possible.
        </p>
        <ul class="${"list-pri svelte-m7wv14"}"><li aria-label="${"COMPTIA Security+ Certificate"}">COMPTIA Security+ Certified since 2015</li></ul>`;
        }
      })}</span>`;
    }
  })}
</div>`;
});
var SecurityManagement_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "h4.svelte-1vimv1c{color:var(--color-input);margin-bottom:15px;font-size:1.5em}p.svelte-1vimv1c{text-indent:30px;line-height:1.5;color:hsl(var(--theme-text-pri));text-align:justify}a.svelte-1vimv1c,a.svelte-1vimv1c:visited{color:var(--text)}a.svelte-1vimv1c:hover,a.svelte-1vimv1c:focus{cursor:pointer;color:hsl(var(--theme-text-black))}",
  map: null
};
let anchor$3 = "security-management-sub";
let background$3 = "hsla(var(--theme-bg-pri), 1)";
let text$3 = "hsla(var(--theme-text-experience), 1)";
const SecurityManagement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div${add_attribute("id", anchor$3, 0)} style="${"--color-input: " + escape(text$3)}">${validate_component(ContentBlock, "ContentBlock").$$render($$result, { background: background$3, text: text$3 }, {}, {
    "content-body": () => {
      return `<span slot="${"content-body"}">${validate_component(DesignElement1, "DesignElement1").$$render($$result, { stripeColor: text$3 }, {}, {
        default: () => {
          return `<h4 class="${"text-normal svelte-1vimv1c"}"><strong>More than 15 years of Physical and Personnel Security Experience:</strong></h4>
        <p class="${"text-normal svelte-1vimv1c"}">I have managed tens of thousands of requests for access to classified materiels and facilities, managed background investigations, oversaw inquires to security violations and incidents,
          certified secure facilities, and developed security policy.
        </p>
        <p class="${"text-normal svelte-1vimv1c"}">I have managed small and large projects reducing cost, waste, and improving classified materiel management. From producing clean alternative energy by transitioning destruction processes to
          waste-to-energy conversion facilities to larger facility modificaitons, I am passionate about finding innovative security solutions.
        </p>
        <p class="${"text-normal svelte-1vimv1c"}">Department of Defense Security Professional Education Development (SPeD) ceritificationed for Security Fundamentals Professional and Physical Security since 2018.
          <a href="${"https://www.cdse.edu/Certification/About-SP\u0113D-Certification/"}" title="${"SPeD about page"}" class="${"svelte-1vimv1c"}">Click here for details on the SPeD program.</a></p>`;
        }
      })}</span>`;
    }
  })}
</div>`;
});
var Education_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "h4.svelte-lpc7u6{color:var(--color-input);margin-bottom:15px;font-size:1.5em}p.svelte-lpc7u6{text-indent:30px;line-height:1.5;color:hsl(var(--theme-text-pri));text-align:justify}.list-pri.svelte-lpc7u6,.list-sec.svelte-lpc7u6{text-decoration:none;margin-left:60px;line-height:1.5}.list-pri.svelte-lpc7u6{color:hsl(var(--color-input))}.list-sec.svelte-lpc7u6{color:hsl(var(--theme-text-pri))}a.svelte-lpc7u6,a.svelte-lpc7u6:visited{color:var(--text)}a.svelte-lpc7u6:hover,a.svelte-lpc7u6:focus{cursor:pointer;color:hsl(var(--theme-text-black))}",
  map: null
};
let anchor$2 = "education-sub";
let background$2 = "hsla(var(--theme-bg-pri), 1)";
let text$2 = "hsla(var(--theme-text-experience), 1)";
const Education = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div${add_attribute("id", anchor$2, 0)} style="${"--color-input: " + escape(text$2)}">${validate_component(ContentBlock, "ContentBlock").$$render($$result, { background: background$2, text: text$2 }, {}, {
    "content-body": () => {
      return `<span slot="${"content-body"}">${validate_component(DesignElement1, "DesignElement1").$$render($$result, { stripeColor: text$2 }, {}, {
        default: () => {
          return `<h4 class="${"text-normal svelte-lpc7u6"}"><strong>Professional Certifications/Education:</strong></h4>
        <p class="${"text-normal svelte-lpc7u6"}">I hold civilian and Department of Defense certifications in Cyber, Personnel and Physical Security along with a Bachelor&#39;s degree in Business Administration from Excelsior College. I am
          currently four classes from completing an MBA with an emphasis in Technology/Innovation Management.
        </p>

        <ul class="${"list-pri svelte-lpc7u6"}"><li class="${"text-normal"}">Security Professional Education and Development (SPeD) certifications:
            <ul class="${"list-sec svelte-lpc7u6"}"><li><a title="${"Center for Security Excellence SFPC certification webpage."}" href="${"https://www.cdse.edu/certification/sfpc.html"}" class="${"svelte-lpc7u6"}">Security Professional Fundamentals</a> (SFPC) 3+ years
              </li>
              <li><a title="${"Center for Security Excellence PSC certification webpage."}" href="${"https://www.cdse.edu/certification/psc.html"}" class="${"svelte-lpc7u6"}">Physical Security Certification</a> (PSC) 3+ years
              </li></ul></li>

          <li class="${"text-normal"}">Additional Military Training:
            <ul class="${"list-sec svelte-lpc7u6"}"><li><a title="${"Navy COMSEC Management System webpage."}" href="${"https://www.navifor.usff.navy.mil/ncms/"}" class="${"svelte-lpc7u6"}">Navy Communications Security Management System</a> (NCMS) certified inspector 10+ years
              </li>
              <li>Information Systems Security Manager 7+ years</li>
              <li>Operational Security Officer 5+ years</li>
              <li>Emergency Management Officer 5+ years</li>
              <li>Classified Material Control Officer 10+ years</li>
              <li>Command Equal Opportunity Officer 2+ years</li></ul></li>

          <li class="${"text-normal"}">Non-military Education:
            <ul class="${"list-sec svelte-lpc7u6"}"><li>Bachelor&#39;s degree in Business Administration (2015)</li>
              <li>COMPTIA Security+ (2015)</li>
              <li>Sigma Beta Delta National Honor Society for Business (2019).</li></ul></li></ul>`;
        }
      })}</span>`;
    }
  })}
</div>`;
});
var ExperienceContent_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".theme-experience.svelte-4s8ez9.svelte-4s8ez9{--text:var(--color-input)}nav.svelte-4s8ez9.svelte-4s8ez9{position:sticky;top:58px;z-index:1;width:100%;transition:opacity 0.2s linear;opacity:0;background-color:hsla(var(--theme-bg-pri), 1)}nav.svelte-4s8ez9.svelte-4s8ez9:hover{opacity:1}.show{opacity:1 !important}nav.svelte-4s8ez9 ul.svelte-4s8ez9{list-style:none;gap:25px;text-align:center;padding:5px}.svelte-4s8ez9.svelte-4s8ez9{color:var(--color-input)}@media only screen and (max-width: 600px){nav.svelte-4s8ez9.svelte-4s8ez9{top:110px}nav.svelte-4s8ez9 ul.svelte-4s8ez9{gap:10px;font-size:0.8em}}",
  map: null
};
let anchor$1 = "experience";
let background$1 = "hsla(var(--theme-bg-pri), 1)";
let text$1 = "hsla(var(--theme-text-experience), 1)";
const ExperienceContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expMenu;
  $$result.css.add(css$4);
  return `

<div${add_attribute("id", anchor$1, 0)} style="${"--color-input: " + escape(text$1)}" class="${"svelte-4s8ez9"}">${validate_component(ContentBlock, "ContentBlock").$$render($$result, { background: background$1, text: text$1 }, {}, {
    "content-body": () => {
      return `<span slot="${"content-body"}" class="${"center center-column svelte-4s8ez9"}"><nav class="${"svelte-4s8ez9"}"${add_attribute("this", expMenu, 0)}><ul class="${"center svelte-4s8ez9"}"><li class="${"svelte-4s8ez9"}">${validate_component(Link, "Link").$$render($$result, {
        url: "#web-development-sub",
        "aria-label": "link to web development experience.",
        color: text$1
      }, {}, {
        default: () => {
          return `Web Development`;
        }
      })}</li>
          <li class="${"svelte-4s8ez9"}">${validate_component(Link, "Link").$$render($$result, {
        url: "#general-sub",
        color: text$1,
        "aria-label": "link to general information about professional military history."
      }, {}, {
        default: () => {
          return `General Skills`;
        }
      })}</li>
          <li class="${"svelte-4s8ez9"}">${validate_component(Link, "Link").$$render($$result, {
        url: "#network-security-sub",
        color: text$1,
        "aria-label": "link to content about network security work history."
      }, {}, {
        default: () => {
          return `Network Security`;
        }
      })}</li>
          <li class="${"svelte-4s8ez9"}">${validate_component(Link, "Link").$$render($$result, {
        url: "#security-management-sub",
        color: text$1,
        "aria-label": "link to personnel and information security history."
      }, {}, {
        default: () => {
          return `Security Management`;
        }
      })}</li>
          <li class="${"svelte-4s8ez9"}">${validate_component(Link, "Link").$$render($$result, {
        url: "#education-sub",
        color: text$1,
        "aria-label": "link to formal education and certification history."
      }, {}, {
        default: () => {
          return `Education`;
        }
      })}</li></ul></nav>
      ${validate_component(WebDevelopment, "WebDevelopment").$$render($$result, {}, {}, {})}
      ${validate_component(GeneralSkills, "GeneralSkills").$$render($$result, {}, {}, {})}
      ${validate_component(CyberSecurity, "CyberSecurity").$$render($$result, {}, {}, {})}
      ${validate_component(SecurityManagement, "SecurityManagement").$$render($$result, {}, {}, {})}
      ${validate_component(Education, "Education").$$render($$result, {}, {}, {})}</span>`;
    },
    "content-title": () => {
      return `<div slot="${"content-title"}" class="${"center center-column svelte-4s8ez9"}"><h2 class="${"theme-experience text-large svelte-4s8ez9"}"><span class="${"svelte-4s8ez9"}">Experience</span></h2></div>`;
    }
  })}
</div>`;
});
var Button_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".btn.svelte-1trf5v5,.btn.svelte-1trf5v5:link,.btn.svelte-1trf5v5:visited{display:flex;align-self:center;padding:10px 25px;border-radius:0.2em;margin:20px;font-size:1.2em;text-transform:uppercase;text-decoration:none;border:solid 2px var(--text);background-color:var(--background);color:var(--text);transition:all 0.3s}.btn.svelte-1trf5v5:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:5px 5px 15px;box-shadow:5px 5px 15px;cursor:pointer}.btn.svelte-1trf5v5:active{transform:translateY(-1px);box-shadow:5px 5px 5px}.btn.svelte-1trf5v5:focus{outline:none}.btn-center.svelte-1trf5v5{justify-content:center}",
  map: null
};
function scrollTop() {
  window.scrollTo(0, 0);
}
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { background: background2 = "" } = $$props;
  let { text: text2 = "" } = $$props;
  let { label = "Scroll Top" } = $$props;
  let { action = scrollTop } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background2 !== void 0)
    $$bindings.background(background2);
  if ($$props.text === void 0 && $$bindings.text && text2 !== void 0)
    $$bindings.text(text2);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  $$result.css.add(css$3);
  return `<div class="${"center"}" style="${"--background: " + escape(background2) + "; --text: " + escape(text2) + ";"}"><button class="${"btn btn-center svelte-1trf5v5"}">${escape(label)}</button>
</div>`;
});
var DesignElement2_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".design-base.svelte-nddi9s{margin:0 auto;background:hsla(var(--theme-bg-pri), 1)}.rotate-element.svelte-nddi9s{background:linear-gradient(var(--gradient-angle), var(--bg-color) 0%, var(--bg-color) 45%, var(--color) 45%, var(--color) 55%, var(--bg-color) 55%, var(--bg-color) 100%);width:calc(var(--width) + 5px);height:calc(var(--height) + 5px)}@media only screen and (max-width: 900px){.design-element.svelte-nddi9s{width:90%}.rotate-element.svelte-nddi9s{background:var(--bg-color)}}",
  map: null
};
const DesignElement2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { background: background2 = "hsl(var(--theme-bg-pri))" } = $$props;
  let { tracer = "hsl(var(--theme-text-contact))" } = $$props;
  let { sourceElement } = $$props;
  let height;
  let width;
  let gradientAngle = 0;
  if ($$props.background === void 0 && $$bindings.background && background2 !== void 0)
    $$bindings.background(background2);
  if ($$props.tracer === void 0 && $$bindings.tracer && tracer !== void 0)
    $$bindings.tracer(tracer);
  if ($$props.sourceElement === void 0 && $$bindings.sourceElement && sourceElement !== void 0)
    $$bindings.sourceElement(sourceElement);
  $$result.css.add(css$2);
  return `

<div class="${"center center-column design-base svelte-nddi9s"}" style="${"--color: " + escape(tracer) + "; --bg-color: " + escape(background2) + "; --height: " + escape(height) + "px; --width: " + escape(width) + "px; --gradient-angle: " + escape(gradientAngle) + "deg"}"><div class="${"center design-element svelte-nddi9s"}"><div class="${"center rotate-element svelte-nddi9s"}"><div class="${"center base-element"}" style="${"z-index: 1"}"${add_attribute("this", sourceElement, 0)}>${slots.default ? slots.default({}) : ``}</div></div></div>
</div>`;
});
var ContactContent_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".contact.svelte-2bt1n3{margin:0 auto;width:100%;padding:15px;background:hsla(var(--theme-bg-pri), 1)}form.svelte-2bt1n3{display:flex;flex-direction:column;text-transform:uppercase;width:100%}input.svelte-2bt1n3,textarea.svelte-2bt1n3{border:none;border-radius:0.2em;cursor:pointer;background:hsl(var(--theme-text-contact))}label.svelte-2bt1n3,input.svelte-2bt1n3,textarea.svelte-2bt1n3{padding:5px;margin:2px}label.svelte-2bt1n3,input.svelte-2bt1n3,textarea.svelte-2bt1n3,input.svelte-2bt1n3::placeholder,textarea.svelte-2bt1n3::placeholder{font-size:1.2em;color:hsl(var(--theme-text-pri))}.alert-warn{animation:svelte-2bt1n3-alertEnter 1s linear forwards;display:inline-block;background-color:hsla(var(--alert-warn), 0.8)}.alert-success{position:absolute;display:flex;align-self:center;align-content:center;justify-content:center;top:25%;padding:20px;background-color:hsla(var(--alert-success), 0.8)}.alert-fail{position:absolute;display:flex;align-self:center;align-content:center;justify-content:center;top:25%;height:60px;animation:svelte-2bt1n3-msgAlertEnter 7s linear forwards;background-color:hsla(var(--alert-fail), 0.8)}.alert.svelte-2bt1n3{font-size:1.2vmax;padding:5px;width:fit-content;border-radius:0.2em}@-webkit-keyframes svelte-2bt1n3-alertEnter{0%{background-color:none;opacity:0}50%{opacity:0.3}100%{opacity:1;background-color:hsla(var(--alert-warn), 0.8)}}@keyframes svelte-2bt1n3-alertEnter{0%{background-color:none;opacity:0}50%{opacity:0.3}100%{opacity:1;background-color:hsla(var(--alert-warn), 0.8)}}@-webkit-keyframes svelte-2bt1n3-msgAlertEnter{0%{opacity:0}15%{opacity:1}85%{opacity:1}100%{opacity:0}}@keyframes svelte-2bt1n3-msgAlertEnter{0%{opacity:0}15%{opacity:1}85%{opacity:1}100%{opacity:0}}",
  map: null
};
let anchor = "contact";
let background = "hsla(var(--theme-bg-pri), 1)";
let text = "hsla(var(--theme-text-contact), 1)";
const ContactContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sourceElement;
  emailjsCom.init("user_RoDNRpp8DGk61m380dPFq");
  let fName;
  let lName;
  let email;
  let message;
  let emailFormat;
  let messageSuccess;
  let messageFail;
  const inputValidator = (input) => {
    let sanitizedInput = dompurify.sanitize(input);
    if (sanitizedInput.includes("Field required to submit") || sanitizedInput === "")
      return true;
  };
  const validateMessageContents = () => {
    let invalidContents = 0;
    if (inputValidator(fName))
      invalidContents++;
    if (inputValidator(lName))
      invalidContents++;
    if (!emailValidator.validate(email))
      invalidContents++;
    if (inputValidator(message))
      invalidContents++;
    if (invalidContents === 0)
      return true;
  };
  const messageSubmit = (e) => {
    e.preventDefault();
    if (validateMessageContents()) {
      emailjsCom.send("service_0wgxmn4", "template_u9mwv2n", {
        from_name: `${fName} ${lName}`,
        from_email: `${email}`,
        message: dompurify.sanitize(message)
      }).then(function(response) {
        messageSuccess.classList.add("alert-success");
        setTimeout(() => messageSuccess.classList.remove("alert-success"), 7e3);
      }, function(err) {
        messageFail.classList.add("alert-fail");
        setTimeout(() => messageFail.classList.remove("alert-fail"), 7e3);
      });
    } else {
      messageFail.classList.add("alert-fail");
      setTimeout(() => messageFail.classList.remove("alert-fail"), 7e3);
    }
  };
  $$result.css.add(css$1);
  return `<div${add_attribute("id", anchor, 0)} style="${"--color-input: " + escape(text)}">${validate_component(ContentBlock, "ContentBlock").$$render($$result, { background, text }, {}, {
    "content-body": () => {
      return `<span slot="${"content-body"}">${validate_component(DesignElement2, "DesignElement2").$$render($$result, { background, tracer: text, sourceElement }, {}, {
        default: () => {
          return `<div class="${"center contact svelte-2bt1n3"}"><form action="${"#"}" id="${"contact-form"}" class="${"form svelte-2bt1n3"}"><label for="${"first-name"}" class="${"svelte-2bt1n3"}">first name: </label>
            <input id="${"first-name"}" type="${"text"}" size="${"50"}" placeholder="${"First Name"}" class="${"svelte-2bt1n3"}"${add_attribute("value", fName, 0)}>
            <label for="${"last-name"}" class="${"svelte-2bt1n3"}">last name: </label>
            <input id="${"last-name"}" type="${"text"}" size="${"50"}" placeholder="${"Last Name"}" class="${"svelte-2bt1n3"}"${add_attribute("value", lName, 0)}>
            <label for="${"email"}" class="${"svelte-2bt1n3"}">email:
              <span class="${"alert hidden svelte-2bt1n3"}"${add_attribute("this", emailFormat, 0)}>entry is not a valid email address.</span></label>
            <input id="${"email"}" type="${"text"}" size="${"50"}" placeholder="${"Email"}" class="${"svelte-2bt1n3"}"${add_attribute("value", email, 0)}>
            <label for="${"message"}" class="${"svelte-2bt1n3"}">message: </label>
            <textarea id="${"message"}" cols="${"50"}" rows="${"5"}" placeholder="${"Enter message here."}" class="${"svelte-2bt1n3"}">${""}</textarea>
            <span id="${"message-success"}" class="${"alert center hidden svelte-2bt1n3"}"${add_attribute("this", messageSuccess, 0)}>Thank you for reaching out to me! I will get back to you shortly.</span>
            <span id="${"message-fail"}" class="${"alert center hidden svelte-2bt1n3"}"${add_attribute("this", messageFail, 0)}>Your message failed to send. Check the information and try again.</span>
            ${validate_component(Button, "Button").$$render($$result, {
            background,
            text,
            label: "Send Message",
            action: messageSubmit
          }, {}, {})}</form></div>`;
        }
      })}</span>`;
    },
    "content-title": () => {
      return `<div slot="${"content-title"}" class="${"center"}"><h2 class="${"theme-contact shimmer-text text-large"}"><span>Contact me</span></h2></div>`;
    }
  })}
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".title-block.svelte-td7nrw.svelte-td7nrw{height:90vh;font-family:lato, sans-serif;background-image:linear-gradient(hsla(var(--theme-bg-pri), 1) 15%, hsla(var(--theme-bg-pri), 1) 85%, hsla(var(--theme-bg-pri), 1) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img);background-repeat:no-repeat;background-size:cover;animation:svelte-td7nrw-pictureReveal 2.5s linear 3.5s forwards;transition:background-image 3s linear}.title-main.svelte-td7nrw.svelte-td7nrw,.title-secondary.svelte-td7nrw.svelte-td7nrw{display:block;color:hsla(var(--theme-text-pri), 1)}.title-main.svelte-td7nrw.svelte-td7nrw{position:absolute;top:40%;left:50%;width:100%;transform:translate(-50%, -50%);text-align:center;font-size:8vmax;animation:svelte-td7nrw-titleSwoop 1.5s linear}.title-main.svelte-td7nrw h1.svelte-td7nrw{font-weight:400}.title-secondary.svelte-td7nrw.svelte-td7nrw{text-transform:uppercase;line-height:1.5rem;letter-spacing:0.65rem;font-size:1.5vmax;margin-bottom:40px;text-align:center;animation:svelte-td7nrw-subTitleSwoop 1.5s linear 2s backwards}hr.svelte-td7nrw.svelte-td7nrw{width:100%;border-style:solid;margin:0 auto;color:hsl(var(--theme-bg-alt))}@keyframes svelte-td7nrw-pictureReveal{0%{background-image:linear-gradient(hsla(var(--theme-bg-pri), 1) 15%, hsla(var(--theme-bg-pri), 1) 85%, hsla(var(--theme-bg-pri), 1) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img)}15%{background-image:linear-gradient(hsla(var(--theme-bg-pri), 0.9) 15%, hsla(var(--theme-bg-pri), 0.9) 85%, hsla(var(--theme-bg-pri), 1) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img)}30%{background-image:linear-gradient(hsla(var(--theme-bg-pri), 0.8) 15%, hsla(var(--theme-bg-pri), 0.8) 85%, hsla(var(--theme-bg-pri), 1) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img)}45%{background-image:linear-gradient(hsla(var(--theme-bg-pri), 0.7) 15%, hsla(var(--theme-bg-pri), 0.7) 85%, hsla(var(--theme-bg-pri), 1) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img)}60%{background-image:linear-gradient(hsla(var(--theme-bg-pri), 0.6) 15%, hsla(var(--theme-bg-pri), 0.6) 85%, hsla(var(--theme-bg-pri), 1) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img)}75%{background-image:linear-gradient(hsla(var(--theme-bg-pri), 0.5) 15%, hsla(var(--theme-bg-pri), 0.5) 85%, hsla(var(--theme-bg-pri), 0.9) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img)}90%{background-image:linear-gradient(hsla(var(--theme-bg-pri), 0.4) 15%, hsla(var(--theme-bg-pri), 0.4) 85%, hsla(var(--theme-bg-pri), 0.8) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img)}100%{background-image:linear-gradient(hsla(var(--theme-bg-pri), 0.3) 15%, hsla(var(--theme-bg-pri), 0.4) 85%, hsla(var(--theme-bg-pri), 0.7) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img)}}@keyframes svelte-td7nrw-titleSwoop{0%{width:100vw;letter-spacing:3rem;opacity:0}100%{width:100vw;letter-spacing:2px;opacity:1}}@keyframes svelte-td7nrw-subTitleSwoop{0%{transform:translateY(-60px);opacity:0}100%{transform:translateY(0px);opacity:1}}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Nathan Meeker || Welcome</title>`, ""}`, ""}

<div id="${"home"}" class="${"main-container theme-primary"}"><div class="${"title-block svelte-td7nrw"}"><div class="${"title-main svelte-td7nrw"}"><h1 class="${"text-normal svelte-td7nrw"}">Hi, I&#39;m Nate.</h1>
      <span class="${"title-secondary svelte-td7nrw"}">Come see the whole picture.</span></div></div></div>
${validate_component(AboutContent, "AboutContent").$$render($$result, {}, {}, {})}
<hr class="${"svelte-td7nrw"}">
${validate_component(ExperienceContent, "ExperienceContent").$$render($$result, {}, {}, {})}
<hr class="${"svelte-td7nrw"}">
${validate_component(ContactContent, "ContactContent").$$render($$result, {}, {}, {})}
<div style="${"height: 12vh; background: hsl(var(--theme-bg-pri));"}"></div>

${validate_component(CardLayout, "CardLayout").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
