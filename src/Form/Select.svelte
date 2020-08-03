<script>
  export let value;
  export let name;
  export let thin = false;
  export let secondary = false;
  export let disabled = false;
</script>

<style>
  select {
    min-width: 0;
    height: 35px;
    border-radius: 3px;
    border: 1px solid var(--grey-dark);
    text-align: left;
    color: var(--ink);
    font-size: 14px;
    padding-left: 12px;
  }
  select.thin {
    padding: 12px 9px;
    font-size: 12px;
    letter-spacing: 0.12px;
  }
  .secondary {
    background: var(--grey);
  }
  select:disabled {
    background: var(--grey-4);
    border: 1px solid var(--grey-4);
  }
</style>

<select {name} class:thin class:secondary {disabled} on:change bind:value>
  <slot />
</select>
