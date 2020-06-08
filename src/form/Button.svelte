<script>
  export let primary = false,
    outline = false,
    disabled = false,
    error = false,
    thin = false;
</script>

<style>
  button {
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    border-radius: 3px;
    padding: 20px 30px;
    color: white;
  }
  button:hover:not([disabled]) {
    filter: brightness(85%);
  }

  .primary {
    border: solid 0 var(--primary100);
    background-color: var(--primary100);
  }
  .outline {
    border: solid 1px var(--grey-medium);
    background-color: white;
    color: var(--font);
  }
  .error {
    border: solid 0 var(--error100);
    background-color: var(--error100);
  }
  .thin {
    padding: 12px 16px;
  }
  button:disabled {
    background-color: #adaec4;
    cursor: not-allowed;
  }
</style>

<button
  class:primary
  class:outline
  class:error
  class:thin
  {disabled}
  on:click|preventDefault>
  <slot />
</button>
