<script>
  export let value;
  export let secondary = false;
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

  .secondary {
    background: var(--grey);
  }
</style>

<select class:secondary on:change bind:value>
  <slot />
</select>
