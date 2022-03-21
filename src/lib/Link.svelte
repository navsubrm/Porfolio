<script lang="ts">
  //External imports
  import { page } from "$app/stores";
  import { scrollIntoView } from "seamless-scroll-polyfill";

  //Input variables
  export let ariaLabel: string | null = null;
  export let url: string;

  //Smooth scroll behavior
  let action: any = () => {
    const id: string = url.slice(1);
    const scrollLocation = document.getElementById(id);

    scrollIntoView(scrollLocation, { behavior: "smooth", block: "start", inline: "start" });
  };
</script>

<a on:click={action} href={url} class="center" class:active={$page.url.pathname === url} aria-label={!ariaLabel ? undefined : ariaLabel}>
  <slot />
</a>

<style>
  .active {
    border-bottom: solid 1px var(--theme-text);
  }

  a,
  a:visited {
    padding: 5px 7px;
    -webkit-transition: border 0.5s ease, color 0.5s ease;
    transition: border 0.5s ease, color 0.5s ease;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 700;
    color: var(--theme-text);
  }

  a:hover {
    border: solid 2px hsl(var(--theme-text-pri));
    border-radius: 0.25em;
    color: var(--theme-text-pri);
    cursor: pointer;
  }

  a:active {
    border: solid 2px;
    color: var(--theme-bg-pri-accent);
  }

  a:focus {
    border: solid;
    outline: none;
  }

  a:inner-focus {
    outline: none;
  }
</style>
