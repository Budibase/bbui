<script>
  import Icon from "../Icons/Icon.svelte";
  import Label from "../Styleguide/Label.svelte";

  export let value = "";
  export let name = undefined;
  export let label = undefined;
  export let thin = false;
  export let secondary = false;
  export let outline = false;
  export let disabled = false;
</script>

<style>
  select {
    font-family: var(--font-sans);
    display: block !important;
    width: 100% !important;
    border-radius: var(--border-radius-s);
    border: none;
    text-align: left;
    color: var(--ink);
    font-size: var(--font-size-s);
    padding: var(--spacing-m) 2rem var(--spacing-m) var(--spacing-m) !important;
    appearance: none !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    align-items: center;
    white-space: pre;
    outline: none;
    border: var(--border-transparent);
  }
  select.thin {
    padding: var(--spacing-m);
    font-size: var(--font-size-xs);
  }
  select.secondary {
    background: var(--grey-2);
  }
  select.outline {
    border: var(--border-dark);
  }
  select:focus {
    border: var(--border-blue);
  }
  select:disabled {
    background: var(--grey-4);
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

<div>
  {#if label}
    <Label extraSmall grey forAttr={name}>{label}</Label>
  {/if}
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
</div>