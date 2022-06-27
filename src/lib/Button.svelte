<script lang="ts">
  export let background: string = "";
  export let text: string = "";
  export let label: string = "Scroll Top";
  export let action: any = scrollTop;

  function scrollTop() {
    window.scrollTo(0, 0);
  }
</script>

<div class="center" style="--background: {background}; --text: {text};">
  <button class="btn btn-center" on:click={action}>{label}</button>
</div>

<style>
  .btn,
  .btn:link,
  .btn:visited {
    display: flex;
    align-self: center;
    padding: 10px 25px;
    border-radius: 0.2em;
    margin: 20px;
    font-size: 1.2em;
    text-transform: uppercase;
    text-decoration: none;
    border: solid 2px var(--text);
    background-color: var(--background);
    color: var(--text);
    transition: all 0.3s;
  }

  .btn:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    -webkit-box-shadow: 5px 5px 15px;
    box-shadow: 5px 5px 15px;
    cursor: pointer;
  }

  .btn:active {
    transform: translateY(-1px);
    box-shadow: 5px 5px 5px;
  }

  .btn:focus {
    outline: none;
  }

  .btn-center {
    justify-content: center;
  }
</style>
