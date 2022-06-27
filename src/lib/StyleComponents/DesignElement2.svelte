<script lang="ts">
  import { afterUpdate, onMount } from "svelte";

  export let background: string = "hsl(var(--theme-bg-pri))";
  export let tracer: string = "hsl(var(--theme-text-contact))";
  export let sourceElement: HTMLDivElement;

  let height: number;
  let width: number;
  let gradientAngle: number = 0;
  let timer: any;
  let windowWidth: number;

  const getElementSizing = () => {
    width = sourceElement.offsetWidth;
    height = sourceElement.offsetHeight;
  };

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const intersectionAction = (entries: any, observer: any) => {
    clearInterval(timer);
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        timer = setInterval(() => {
          if (gradientAngle > 365) return (gradientAngle = 1);
          return (gradientAngle += 1);
        }, 50);
      }
    });
  };

  onMount(() => {
    getElementSizing();
    let observer = new IntersectionObserver(intersectionAction, options);
    let target = sourceElement;
    observer.observe(target);
    windowWidth = window.outerWidth;
  });

  afterUpdate(() => {
    getElementSizing();
    windowWidth = window.outerWidth;
  });
</script>

<svelte:window
  on:resize={() => {
    getElementSizing();
    windowWidth = window.outerWidth;
    console.log(windowWidth);
  }}
  on:scroll={() => {
    getElementSizing();
    console.log(windowWidth);
  }}
/>

<div class="center center-column" class:design-base={windowWidth > 400} style="--color: {tracer}; --bg-color: {background}; --height: {height}px; --width: {width}px; --gradient-angle: {gradientAngle}deg">
  <div class="center" class:design-element={windowWidth > 400}>
    <div class="center" class:rotate-element={windowWidth > 400}>
      <div bind:this={sourceElement} class="center" style="z-index: 1">
        <slot />
      </div>
    </div>
  </div>
</div>

<style>
  @media only screen and (min-width: 600px) {
    .design-base {
      margin: 0 auto;
      background: hsla(var(--theme-bg-pri), 1);
    }
    .design-element {
      width: 90%;
    }
    .rotate-element {
      background: var(--bg-color);
    }
  }

  @media only screen and (min-width: 650px) {
    .rotate-element {
      background: linear-gradient(var(--gradient-angle), var(--bg-color) 0%, var(--bg-color) 45%, var(--color) 45%, var(--color) 55%, var(--bg-color) 55%, var(--bg-color) 100%);
      width: calc(var(--width) + 5px);
      height: calc(var(--height) + 5px);
    }
  }
</style>
