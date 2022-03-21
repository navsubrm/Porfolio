<script lang="ts">
  import { onMount } from "svelte";

  export let background: string = "hsl(var(--theme-bg-pri))";
  export let tracer: string = "hsl(var(--theme-text-contact))";
  export let sourceElement: HTMLDivElement;

  let height: number;
  let width: number;
  let gradientAngle: number = 0;
  let timer: any;

  const getElementSizing = () => {
    width = sourceElement.offsetWidth;
    height = sourceElement.offsetHeight;
  };

  //Set scroll observer for footer.
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  //maybe comeback later and see how to directly link the bottom value to the percentage of footer showing.  It was only firing once and not adjusting with scroll after the set point was reached.
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
  });
</script>

<svelte:window
  on:resize={() => {
    getElementSizing();
    clearInterval(timer);
  }}
/>

<div class="center center-column design-base" style="--color: {tracer}; --bg-color: {background}; --height: {height}px; --width: {width}px; --gradient-angle: {gradientAngle}deg">
  <div class="center design-element">
    <div class=" center rotate-element">
      <div bind:this={sourceElement} class="center base-element" style="z-index: 1">
        <slot />
      </div>
    </div>
  </div>
</div>

<style>
  .design-base {
    margin: 0 auto;

    background: hsla(var(--theme-bg-pri), 1);
  }

  .rotate-element {
    background: linear-gradient(var(--gradient-angle), var(--bg-color) 0%, var(--bg-color) 45%, var(--color) 45%, var(--color) 55%, var(--bg-color) 55%, var(--bg-color) 100%);
    width: calc(var(--width) + 5px);
    height: calc(var(--height) + 5px);
  }

  @media only screen and (max-width: 900px) {
    .design-element {
      width: 90%;
    }
    .rotate-element {
      background: var(--bg-color);
    }
  }
</style>
