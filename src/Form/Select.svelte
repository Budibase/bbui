<script>
  export let value;
  export let primary;
  export let secondary;
</script>

<style>
  select {
    height: 35px;
    width: 220px;
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
