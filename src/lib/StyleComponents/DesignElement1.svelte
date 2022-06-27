<script lang="ts">
  export let stripeColor: string = "hsl(var(--theme-text-about))";
</script>

<div class="center center-column design-element" style="--color: {stripeColor}">
  <div class="spacing">
    <slot />
  </div>
</div>

<style>
  .design-element {
    position: relative;
    width: 80%;
    margin: 0 auto;
    padding: 10px 20px;
  }

  .design-element::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;
    height: 55%;
    content: "";
    border-left: solid 3px hsl(var(--theme-bg-alt));
    border-top: solid 3px hsl(var(--theme-bg-alt));
  }

  .design-element::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 55%;
    content: "";
    border-right: solid 3px var(--color);
    border-bottom: solid 3px var(--color);
  }

  @media only screen and (min-width: 600px) {
    .spacing {
      margin: 25px;
    }
  }

  @media only screen and (max-width: 900px) {
    .design-element {
      width: 90%;
    }
  }

  @media only screen and (max-width: 650px) {
    .design-element {
      padding: 10px;
    }
    .design-element::after,
    .design-element::before {
      display: none;
    }
  }
</style>
