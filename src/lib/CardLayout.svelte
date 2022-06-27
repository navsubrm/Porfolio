<script lang="ts">
  //External inports
  import { onMount } from "svelte";
  import { scrollIntoView } from "seamless-scroll-polyfill";

  //Variables
  let textAngleAdjust: HTMLDivElement;
  let bottomValue: number = 0;

  const adjustText = (node: any) => {
    const sideA = node.clientHeight; //Height
    const sideB = node.clientWidth; //Width
    const angle = Math.atan2(sideA, sideB); //tangent of a/b gives angle in radians
    document.documentElement.style.setProperty("--top-calc", `${650}%`);
    document.documentElement.style.setProperty("--sub-container-diagonal", `-${angle}rad`);
  };
  //Set scroll observer for footer.
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const intersectionAction = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        bottomValue = 7;
      } else {
        bottomValue = 0;
      }
    });
  };

  //Adjust text call on initial load
  onMount(() => {
    adjustText(textAngleAdjust);
    let observer = new IntersectionObserver(intersectionAction, options);
    let target = document.querySelector("footer");
    observer.observe(target);
  });

  //Smooth scroll behavior
  let scrollToItem: any = (id: string) => {
    const scrollLocation = document.getElementById(id); //take id from link.

    scrollIntoView(scrollLocation, { behavior: "smooth", block: "start", inline: "start" });
  };
</script>

<svelte:window
  on:resize={() => {
    adjustText(textAngleAdjust);
  }}
/>

<div id="card-container" class="card card-container" style="--bottom: {bottomValue}vh">
  <div class="card-layout about about-btn" bind:this={textAngleAdjust}>
    <span class="card-title">
      <a href="#about-me" on:click={() => scrollToItem("about-me")}>About</a>
    </span>
  </div>

  <div class="card-layout experience experience-btn">
    <span class="card-title">
      <a href="#experience" on:click={() => scrollToItem("experience")}>Experience</a>
    </span>
  </div>

  <div class="card-layout contact contact-btn">
    <span class="card-title">
      <a href="#contact" on:click={() => scrollToItem("contact")}>Contact</a>
    </span>
  </div>

  <div class="card-layout extra extra-btn">
    <span class="card-title" on:click={() => scrollToItem("home")}><a href="#home">Home</a></span>
  </div>
</div>

<style>
  .card {
    width: 100%;
  }

  .card-layout {
    position: absolute;
    width: 100%;
    height: 20vh;
    clip-path: polygon(0 100%, 100% 0, 100% 20%, 20% 100%);
    overflow: hidden;
  }

  .card-container {
    position: fixed;
    bottom: var(--bottom);
    height: 20vh;
    width: 100%;
    overflow: hidden;
    z-index: 1;
    transition: bottom 0.5s;
  }

  .card-title {
    position: absolute;
    right: 10px;
    text-align: right;
    font-size: 1.7vmax;
    font-weight: 800;
    text-transform: uppercase;
    width: 100%;
    top: 53%;
    transform: rotate(var(--sub-container-diagonal));
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 100%;
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .about {
    background-color: hsla(var(--theme-text-about), 1);
  }

  .about .card-title {
    animation: cardTitleText 3s linear infinite;
  }

  .experience {
    background-color: hsl(var(--theme-text-experience));
    transform: translateY(5vh);
  }
  .experience .card-title {
    animation: cardTitleText 3s linear 0.5s infinite;
  }

  .contact {
    background-color: hsla(var(--theme-text-contact), 1);
    transform: translateY(10vh);
  }
  .contact .card-title {
    animation: cardTitleText 3s linear 1s infinite;
  }

  .extra {
    background-color: hsl(var(--theme-text-black));
    clip-path: polygon(0 20vh, 100% 0, 100% 100%, 0% 100%);
    transform: translateY(15vh);
  }
  .extra .card-title {
    animation: cardTitleText 3s linear 1.5s infinite;
  }

  @keyframes cardTitleText {
    0% {
      background-image: linear-gradient(-43deg, #ffffff 100%, #222121 100%);
    }
    5% {
      background-image: linear-gradient(43deg, #ffffff 94%, #222121 100%);
    }
    10% {
      background-image: linear-gradient(43deg, #ffffff 94%, #222121 100%);
    }
    15% {
      background-image: linear-gradient(-43deg, #ffffff 100%, #222121 100%);
    }
    100% {
      background-image: linear-gradient(-43deg, #ffffff 100%, #222121 100%);
    }
  }
</style>
