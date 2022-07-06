<script lang="ts">
  //Local imports
  import ContentBlock from "$lib/ContentBlock.svelte";
  import DesignElement1 from "./StyleComponents/DesignElement1.svelte";

  //Input variables
  let anchor: string = "about-me";
  let background: string = "hsla(var(--theme-bg-pri), 1)";
  let text: string = "hsla(var(--theme-text-about), 1)";
</script>

<div id={anchor} style="--color-input: {text}">
  <ContentBlock {background} {text}>
    <div slot="content-title" class="center center-column">
      <h2 class="theme-about text-large"><span>About me</span></h2>
      <div>
        <img class="profile" src="/profile-pic.png" alt="profile" />
      </div>
    </div>
    <span slot="content-body">
      <DesignElement1 stripeColor={"hsl(var(--theme-text-about))"}>
        <p class="text-normal spacing">I am a 24 year Navy veteran with a passion for finding and applying data-driven solutions to improve business outcomes. I have a passion for life-long learning and achieving the best solutions to maximize productivity, quality of work, and quality of life. Together, we can work smart, get it done, and be our best in the office and our homes.</p>
      </DesignElement1>
    </span>
  </ContentBlock>
</div>

<style>
  p {
    text-align: justify;
  }

  .theme-about {
    --text: var(--color-input);
    margin-bottom: 65px;
  }

  .spacing {
    margin: 20px auto;
  }

  * {
    color: var(--color-input);
  }

  p {
    line-height: 1.5;
    color: hsl(var(--theme-text-pri));
  }

  .profile {
    height: 200px;
    border-radius: 50%;
  }
</style>
