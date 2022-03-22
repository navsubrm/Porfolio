<script lang="ts">
  //External imports
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { scrollRef } from "svelte-scrolling";

  //Internal imports
  import CardLayout from "$lib/CardLayout.svelte";
  import AboutContent from "$lib/AboutContent.svelte";
  import ExperienceContent from "$lib/ExperienceContent.svelte";
  import ContactContent from "$lib/ContactContent.svelte";

  onMount(() => {
    scrollTo(0, 0);
  });
</script>

<svelte:head>
  <title>Nathan Meeker || Welcome</title>
</svelte:head>

<div use:scrollRef={"home"} id="home" class="main-container theme-primary" in:fly={{ y: -100, duration: 500, delay: 400 }} out:fade>
  <div class="title-block">
    <div class="title-main">
      <h1 class="text-normal">Hi, I'm Nate.</h1>
      <span class="title-secondary">Come see the whole picture.</span>
    </div>
  </div>
</div>
<AboutContent />
<hr />
<ExperienceContent />
<hr />
<ContactContent />
<div style="height: 12vh; background: hsl(var(--theme-bg-pri));" />

<CardLayout />

<style>
  .title-block {
    height: 90vh;
    font-family: lato, sans-serif;
    background-image: linear-gradient(hsla(var(--theme-bg-pri), 1) 15%, hsla(var(--theme-bg-pri), 1) 85%, hsla(var(--theme-bg-pri), 1) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img);
    background-repeat: no-repeat;
    background-size: cover;
    animation: pictureReveal 2.5s linear 3.5s forwards;
    transition: background-image 3s linear;
  }

  .title-main,
  .title-secondary {
    display: block;
    color: hsla(var(--theme-text-pri), 1);
  }

  .title-main {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 8vmax;
    animation: titleSwoop 1.5s linear;
  }
  .title-main h1 {
    font-weight: 400;
  }

  .title-secondary {
    text-transform: uppercase;
    line-height: 1.5rem;
    letter-spacing: 0.65rem;
    font-size: 1.5vmax;
    margin-bottom: 40px;
    text-align: center;
    animation: subTitleSwoop 1.5s linear 2s backwards;
  }

  hr {
    width: 100%;
    border-style: solid;
    margin: 0 auto;
    color: hsl(var(--theme-bg-alt));
  }

  @keyframes pictureReveal {
    0% {
      background-image: linear-gradient(hsla(var(--theme-bg-pri), 1) 15%, hsla(var(--theme-bg-pri), 1) 85%, hsla(var(--theme-bg-pri), 1) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img);
    }
    15% {
      background-image: linear-gradient(hsla(var(--theme-bg-pri), 0.9) 15%, hsla(var(--theme-bg-pri), 0.9) 85%, hsla(var(--theme-bg-pri), 1) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img);
    }
    30% {
      background-image: linear-gradient(hsla(var(--theme-bg-pri), 0.8) 15%, hsla(var(--theme-bg-pri), 0.8) 85%, hsla(var(--theme-bg-pri), 1) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img);
    }
    45% {
      background-image: linear-gradient(hsla(var(--theme-bg-pri), 0.7) 15%, hsla(var(--theme-bg-pri), 0.7) 85%, hsla(var(--theme-bg-pri), 1) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img);
    }
    60% {
      background-image: linear-gradient(hsla(var(--theme-bg-pri), 0.6) 15%, hsla(var(--theme-bg-pri), 0.6) 85%, hsla(var(--theme-bg-pri), 1) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img);
    }
    75% {
      background-image: linear-gradient(hsla(var(--theme-bg-pri), 0.5) 15%, hsla(var(--theme-bg-pri), 0.5) 85%, hsla(var(--theme-bg-pri), 0.9) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img);
    }
    90% {
      background-image: linear-gradient(hsla(var(--theme-bg-pri), 0.4) 15%, hsla(var(--theme-bg-pri), 0.4) 85%, hsla(var(--theme-bg-pri), 0.8) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img);
    }
    100% {
      background-image: linear-gradient(hsla(var(--theme-bg-pri), 0.3) 15%, hsla(var(--theme-bg-pri), 0.4) 85%, hsla(var(--theme-bg-pri), 0.7) 95%, hsla(var(--theme-bg-pri), 1) 100%), var(--main-img);
    }
  }

  @keyframes titleSwoop {
    0% {
      width: 100vw;
      letter-spacing: 3rem;
      opacity: 0;
    }
    100% {
      width: 100vw;
      letter-spacing: 2px;
      opacity: 1;
    }
  }

  @keyframes subTitleSwoop {
    0% {
      transform: translateY(-60px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
</style>
