<script lang="ts">
  //External imports
  import { page } from "$app/stores";
  import { scrollIntoView } from "seamless-scroll-polyfill";

  //Input variables
  export let ariaLabel: string | null = null;
  export let url: string;
  export let color: string;

  //Smooth scroll behavior
  let action: any = () => {
    const id: string = url.slice(1);
    const scrollLocation = document.getElementById(id);

    scrollIntoView(scrollLocation, { behavior: "smooth", block: "start", inline: "start" });
  };
</script>

<a on:click={action} href={url} style="--color: {color}" class="center" class:active={$page.url.pathname === url} aria-label={!ariaLabel ? undefined : ariaLabel}>
  <slot />
</a>

<style>
  .active {
    border-bottom: solid 1px var(--color);
  }

  a,
  a:visited {
    padding: 5px 7px;
    -webkit-transition: border 0.5s ease, color 0.5s ease;
    transition: border 0.5s ease, color 0.5s ease;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 700;
    color: var(--color);
  }

  a:hover {
    border: solid 2px var(--color);
    border-radius: 0.25em;
    cursor: pointer;
  }

  a:active {
    border: solid 2px var(--color);
  }

  a:focus {
    border: solid 2px var(--color);
    outline: none;
  }

  a:inner-focus {
    outline: none;
  }
</style>
