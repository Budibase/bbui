<script>
  export let 
    primary = false,
    secondary = false,
    attention = false,
    disabled = false,
    error = false,
    warning = false,
    small = false,
    medium = false,
    wide = false,
    large = false;
</script>

<style>
  button {
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 3px;
    color: var(--white);
    padding: 0px 24px;
    height: 32px;
    transition: all 0.2s ease 0s;
    display: inline-block;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    min-width: auto;
    outline: none;
    font-feature-settings: "case" 1,"rlig" 1,"calt" 0;
    -webkit-box-align: center;
    user-select: none;
    flex-shrink: 0;
  }

  .primary {
    border: solid 1px var(--ink);
    background-color: var(--ink);
  }
  button.primary:hover:not([disabled]) {
    border: solid 1px var(--grey);
    background-color: var(--white);
    color: var(--ink);
  }
  .secondary {
    border: solid 1px var(--grey);
    background-color: white;
    color: var(--ink);
  }
  button.secondary:hover:not([disabled]) {
    border: solid 1px var(--ink);
    background-color: var(--ink);
    color: white;
  }
  .attention {
    background-color: var(--blue);
    border: solid 1px var(--blue);
  }
  button.attention:hover:not([disabled]) {
    border: solid 1px var(--blue);
    background-color: var(--white);
    color: var(--blue);
  }
  .error {
    border: solid 1px var(--red);
    background-color: var(--red);
    color: white;
  }
  button.error:hover:not([disabled]) {
    border: solid 1px var(--red);
    background-color: white;
    color: var(--red);
  }
  .warning {
    border: solid 1px var(--yellow);
    background-color: var(--yellow);
    color: white;
  }
  button.warning:hover:not([disabled]) {
    border: solid 1px var(--yellow);
    background-color: white;
    color: var(--yellow);
  }
  .small {
    width: 100px;
    height: 24px;
    line-height: 22px;
    padding: 0px 10px;
    font-weight: 500;
  }
  .medium {
    width: 200px;
    height: 40px;
  }
  .large {
    width: 200px;
    height: 50px;
    font-weight: 500;
    font-size: 18px;
  }
  .wide {
    width: 100%;
    max-width: 260px;
    height: 32px;
    line-height: 22px;
    padding: 0px 10px;
    font-weight: 500;
  }
  button:disabled {
    background-color: var(--grey-dark);
    cursor: not-allowed;
    border: solid 1px var(--grey-dark);
  }
</style>

<button
  class:primary
  class:secondary
  class:attention
  class:error
  class:warning
  class:small
  class:medium
  class:wide
  class:large
  {disabled}
  on:click|preventDefault>
  <slot />
</button>
