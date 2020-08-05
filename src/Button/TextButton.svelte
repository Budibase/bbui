<script>
  export let 
    text = false,
    small = false,
    medium = false,
    large = false,
    disabled = false;
</script>

<style>
  button {
    font-family: var(--font-sans);
    cursor: pointer;
    font-weight: 600;
    box-sizing: border-box;
    overflow: hidden;
    transition: all 0.08s ease 0s;
    display: inline-flex;
    align-items: center;
    text-rendering: optimizeLegibility;
    outline: none;
    -webkit-box-align: center;
    user-select: none;
    margin: 0;
    padding: 0;
  }

  .text {
    background-color: transparent;
    color: var(--grey-7);
    border: none;
  }
  button.text:hover:not([disabled]) {
    color: var(--ink);
  }
  button.text:active:not([disabled]) {
    color: var(--blue);
  }
  button.text:disabled {
    cursor: not-allowed;
    color: var(--grey-4);
  }

  .small {
    font-size: var(--font-size-xs);
  }

  .medium {
    font-size: var(--font-size-s);
  }

  .large {
    font-size: var(--font-size-m);
  }

  .nav-item-icon {
    color: var(--grey-7);
  }
</style>

<button
  class:small
  class:medium
  class:large
  class:text
  {disabled}
  on:click|preventDefault>
  <slot />
</button>
