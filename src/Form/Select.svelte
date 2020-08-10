<script>
  export let value;
  export let name;
  export let thin = false;
  export let secondary = false;
  export let outline = false;
  export let disabled = false;
  import Icon from "../Icons/Icon.svelte";
</script>

<style>
  select {
    display: block !important;
    width: 100% !important;
    border-radius: var(--border-radius-s);
    border: none;
    text-align: left;
    color: var(--ink);
    font-size: var(--font-size-m);
    padding: var(--spacing-m) 2rem var(--spacing-m) var(--spacing-m) !important;
    appearance: none !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    align-items: center;
    white-space: pre;
    outline-color: var(--blue);
  }
  select.thin {
    padding: var(--spacing-m);
    font-size: var(--font-size-xs);
  }
  .secondary {
    background: var(--grey-2);
  }

  .outline {
    border: var(--border-dark);
  }

  select:disabled {
    background: var(--grey-4);
    border: 1px solid var(--grey-4);
    color: var(--grey-6);
  }

  .relative {
    position: relative !important;
    display: block;
  }

  .pointer {
    right: 0 !important;
    top: 0 !important;
    bottom: 0 !important;
    position: absolute !important;
    pointer-events: none !important;
    padding-left: 0.5rem !important;
    align-items: center !important;
    display: flex !important;
  }
</style>

<div class="relative">
  <select
    {name}
    class:thin
    class:secondary
    class:outline
    {disabled}
    on:change
    bind:value>
    <slot />
  </select>
  <div class="pointer">
    <Icon name="arrowdown" />
  </div>
</div>
