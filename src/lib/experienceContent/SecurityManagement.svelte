<script lang="ts">
  //Local import
  import ContentBlock from "$lib/ContentBlock.svelte";
  import DesignElement1 from "$lib/StyleComponents/DesignElement1.svelte";

  //Input variables
  let anchor: string = "security-management-sub";
  let background: string = "hsla(var(--theme-bg-pri), 1)";
  let text: string = "hsla(var(--theme-text-experience), 1)";
</script>

<div id={anchor} style="--color-input: {text}">
  <ContentBlock {background} {text}>
    <span slot="content-body">
      <DesignElement1 stripeColor={text}>
        <h4 class="text-normal">
          <strong>More than 15 years of Physical and Personnel Security Experience:</strong>
        </h4>
        <p class="text-normal">I have managed tens of thousands of requests for access to classified materiels and facilities, managed background investigations, oversaw inquires to security violations and incidents, certified secure facilities, and developed security policy.</p>
        <p class="text-normal">I have managed small and large projects reducing cost, waste, and improving classified materiel management. From producing clean alternative energy by transitioning destruction processes to waste-to-energy conversion facilities to larger facility modificaitons, I am passionate about finding innovative security solutions.</p>
        <p class="text-normal">
          Department of Defense Security Professional Education Development (SPeD) ceritificationed for Security Fundamentals Professional and Physical Security since 2018.
          <a href="https://www.cdse.edu/Certification/About-SPēD-Certification/" title="SPeD about page">Click here for details on the SPeD program.</a>
        </p>
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

  a,
  a:visited {
    color: var(--text);
  }

  a:hover,
  a:focus {
    cursor: pointer;
    color: hsl(var(--theme-text-black));
  }
</style>
