<script lang="ts">
  //Local import
  import ContentBlock from "$lib/ContentBlock.svelte";
  import DesignElement1 from "$lib/StyleComponents/DesignElement1.svelte";

  //Input variables
  let anchor: string = "network-security-sub";
  let background: string = "hsla(var(--theme-bg-pri), 1)";
  let text: string = "hsla(var(--theme-text-experience), 1)";
</script>

<div id={anchor} style="--color-input: {text}">
  <ContentBlock {background} {text}>
    <span slot="content-body">
      <DesignElement1 stripeColor={text}>
        <h4 class="text-normal">
          <strong>More than ten years of Cyber Security Experience:</strong>
        </h4>
        <p class="text-normal">
          My last ten years have been spent observing emerging threats while developing policies and analytics adopted across the submarine force by which to measure cyber resilience. As an inspector
          and mentor of shipboard network security teams, I work to evaluate risk and prioritize elements of Navy policy to achieve the most robust network posture possible.
        </p>
        <ul class="list-pri">
          <li aria-label="COMPTIA Security+ Certificate">COMPTIA Security+ Certified since 2015</li>
        </ul>
      </DesignElement1>
    </span>
  </ContentBlock>
</div>

<style>
  h4 {
    color: var(--color-input);
    margin-bottom: 15px;
    font-size: 1.5em;
  }

  p {
    text-indent: 30px;
    line-height: 1.5;
    color: hsl(var(--theme-text-pri));
    text-align: justify;
  }

  .list-pri {
    text-decoration: none;
    margin-left: 60px;
  }
</style>
