<script lang="ts">
  //Internal imports
  import ContentBlock from "$lib/ContentBlock.svelte";
  import WebDevelopment from "$lib/experienceContent/WebDevelopment.svelte";
  import GeneralSkills from "$lib/experienceContent/GeneralSkills.svelte";
  import CyberSecurity from "$lib/experienceContent/CyberSecurity.svelte";
  import SecurityManagement from "$lib/experienceContent/SecurityManagement.svelte";
  import Education from "$lib/experienceContent/Education.svelte";
  import Link from "$lib/Link.svelte";

  //Internal variables
  let anchor: string = "experience";
  let background: string = "hsla(var(--theme-bg-pri), 1)";
  let text: string = "hsla(var(--theme-text-experience), 1)";
  let expMenu: HTMLElement;
  let timer;
</script>

<svelte:window
  on:scroll={() => {
    if (timer != null) clearTimeout(timer);
    expMenu.classList.add("show");
    timer = setTimeout(() => {
      expMenu.classList.remove("show");
    }, 1000);
  }}
/>

<div id={anchor} style="--color-input: {text}">
  <ContentBlock {background} {text}>
    <div slot="content-title" class="center center-column">
      <h2 class="theme-experience text-large"><span>Experience</span></h2>
    </div>
    <span slot="content-body" class="center center-column">
      <nav bind:this={expMenu}>
        <ul class="center">
          <li>
            <Link url="#web-development-sub" aria-label="link to web development experience." color={text}>Web Development</Link>
          </li>
          <li><Link url="#general-sub" color={text} aria-label="link to general information about professional military history.">General Skills</Link></li>
          <li>
            <Link url="#network-security-sub" color={text} aria-label="link to content about network security work history.">Network Security</Link>
          </li>
          <li>
            <Link url="#security-management-sub" color={text} aria-label="link to personnel and information security history.">Security Management</Link>
          </li>
          <li><Link url="#education-sub" color={text} aria-label="link to formal education and certification history.">Education</Link></li>
        </ul>
      </nav>
      <WebDevelopment />
      <GeneralSkills />
      <CyberSecurity />
      <SecurityManagement />
      <Education />
    </span>
  </ContentBlock>
</div>

<style>
  .theme-experience {
    --text: var(--color-input);
  }
  nav {
    position: sticky;
    top: 50px;
    z-index: 1;
    width: 100%;
    transition: opacity 0.2s linear;
    opacity: 0;
    background-color: hsla(var(--theme-bg-pri), 0.7);
  }
  nav:hover {
    opacity: 1;
  }

  :global(.show) {
    opacity: 1 !important;
  }

  nav ul {
    list-style: none;
    align-self: flex-end;
    align-items: flex-end;
    flex-wrap: wrap;
    height: 100px;
    gap: 25px;
    text-align: center;
    padding: 5px;
  }

  * {
    color: var(--color-input);
  }

  @media only screen and (max-width: 600px) {
    nav {
      top: 110px;
    }

    nav ul {
      gap: 10px;
      font-size: 0.8em;
      height: 70px;
    }
  }
</style>
