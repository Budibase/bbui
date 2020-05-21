<script>
  export let red = false
  export let strong = false
</script>

<div class:red class:strong on:click>
  <p>
    <slot>I am component Foo.</slot>
  </p>
  <p>(click me)</p>
</div>

<style>
  p {
    font-family: sans-serif;
    padding: .5em 1em;
    text-align: center;
  }
  .red {
    color: red;
  }
  .strong {
    font-weight: bold;
  }
</style>
