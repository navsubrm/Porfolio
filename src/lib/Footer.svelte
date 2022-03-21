<script lang="ts">
  //Internal imports
  import Link from "$lib/Link.svelte";

  //Link input variable for color.
  let color: string = "hsl(var(--theme-text-pri))";
</script>

<footer>
  <div class="footer">
    <div>
      <p>Find me on:</p>
      <Link url="https://www.linkedin.com/in/nathan-m-444055178/" ariaLabel="Link to Linked In profile for Nathan Meeker." {color}>
        <img src="/linkedin.svg" alt="Linked In icon" />
      </Link>

      <Link url="https://github.com/navsubrm" ariaLabel="Link to GitHub profile for Nathan Meeker." {color}>
        <img src="/github.svg" alt="GitHub icon" />
      </Link>

      <Link url="https://portfolium.com/NathanMeeker2" ariaLabel="Link to Portfolium profile for Nathan Meeker." {color}>
        <img src="/portfolium.svg" alt="Porfolium site icon." />
      </Link>

      <Link url="/contact" ariaLabel="Link to my contact page to email me." {color}>
        <img src="/at.svg" alt="At symbol icon" />
      </Link>
    </div>
  </div>
</footer>

<style>
  footer {
    bottom: 0;
    min-height: 5vh;
    margin-top: 5px auto;
  }

  footer div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: hsla(var(--theme-bg-pri), 1);
    z-index: 2;
  }

  p {
    color: hsl(var(--theme-text-pri));
  }
</style>
