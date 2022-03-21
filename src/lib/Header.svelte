<script lang="ts">
  import Link from "$lib/Link.svelte";
  let color: string = "hsla(var(--theme-text-pri), 1)";
</script>

<nav id="nav-bar" class="nav-menu">
  <h1 id="nav-logo">Nathan Meeker</h1>
  <ul>
    <li>
      <Link url="#home" {color} aria-label={"link to top of the page."}>Home</Link>
    </li>

    <li>
      <Link url="#about-me" {color} aria-label={"link to about section."}>About</Link>
    </li>

    <li>
      <Link url="#experience" {color} aria-label={"link to experience header"}>Experience</Link>
    </li>

    <li>
      <Link url="#contact" {color} aria-label={"link to contact form."}>Contact</Link>
    </li>
  </ul>
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 8vh;
    background-color: hsla(var(--theme-bg-pri), 1);
    z-index: 2;
    color: hsl(var(--theme-text-pri));
  }

  #nav-bar h1 {
    margin-left: 15px;
    font-family: "pacifico", sans-serif;
    font-size: 1.7em;
  }

  #nav-bar ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: 15px;
  }

  #nav-bar li {
    margin: 5px 15px;
  }

  @media only screen and (max-width: 700px) {
    #nav-bar ul li {
      margin: 5px 5px;
    }
  }

  @media only screen and (max-width: 600px) {
    #nav-bar ul li {
      justify-content: space-evenly;
      flex-wrap: wrap;
      margin: 5px 0px;
      padding: 10px;
    }
    #nav-bar {
      flex-direction: column;
    }
  }
</style>
