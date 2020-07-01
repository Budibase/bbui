<script>
  export let 
    primary = false,
    secondary = false,
    blue = false,
    disabled = false,
    red = false,
    yellow = false,
    orange = false,
    green = false,
    purple = false,
    small = false,
    medium = false,
    wide = false,
    large = false;
</script>

<style>
  button {
    font-family: Inter;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 5px;
    color: var(--white);
    padding: 0px 24px;
    height: 36px;
    transition: all 0.2s ease 0s;
    display: inline-block;
    text-rendering: optimizeLegibility;
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
    border: solid 1px var(--grey-4);
    background-color: white;
    color: var(--ink);
  }
  button.secondary:hover:not([disabled]) {
    border: solid 1px var(--grey-4);
    background-color: var(--grey-1);
    color: var(--ink);
  }
  .blue {
    background-color: var(--blue);
    border: solid 1px var(--blue);
  }
  button.blue:hover:not([disabled]) {
    border: solid 1px var(--blue);
    background-color: var(--blue-light);
    color: var(--blue);
  }
  .red {
    border: solid 1px var(--red);
    background-color: var(--red);
    color: white;
  }
  button.red:hover:not([disabled]) {
    border: solid 1px var(--red);
    background-color: var(--red-light);
    color: var(--red);
  }
  .yellow {
    border: solid 1px var(--yellow);
    background-color: var(--yellow);
    color: white;
  }
  button.yellow:hover:not([disabled]) {
    border: solid 1px var(--yellow);
    background-color: var(--yellow-light);
    color: var(--yellow);
  }
  .orange {
    border: solid 1px var(--orange);
    background-color: var(--orange);
    color: white;
  }
  button.orange:hover:not([disabled]) {
    border: solid 1px var(--orange);
    background-color: var(--orange-light);
    color: var(--orange);
  }
  .green {
    border: solid 1px var(--green);
    background-color: var(--green);
    color: white;
  }
  button.green:hover:not([disabled]) {
    border: solid 1px var(--green);
    background-color: var(--green-light);
    color: var(--green);
  }
  .purple {
    border: solid 1px var(--purple);
    background-color: var(--purple);
    color: white;
  }
  button.purple:hover:not([disabled]) {
    border: solid 1px var(--purple);
    background-color: var(--purple-light);
    color: var(--purple);
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
    font-size: 18px;
    border-radius: 8px;
  }
  .wide {
    width: 100%;
    max-width: 260px;
    height: 36px;
    line-height: 22px;
    padding: 0px 10px;
  }
  button:disabled {
    background-color: var(--grey-4);
    cursor: not-allowed;
    border: solid 1px var(--grey-3);
    color: var(--grey-5);
  }
</style>

<button
  class:primary
  class:secondary
  class:blue
  class:red
  class:yellow
  class:orange
  class:green
  class:purple
  class:small
  class:medium
  class:wide
  class:large
  {disabled}
  on:click|preventDefault>
  <slot />
</button>
