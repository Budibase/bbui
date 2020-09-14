<script>
  import Icon from "../Icons/Icon.svelte";
  import { createEventDispatcher } from "svelte";

  export let value = "";
  export let name = undefined;
  export let thin = false;
  export let secondary = false;
  export let outline = false;
  export let disabled = false;

  const dispatch = createEventDispatcher();

  const updateValue = e => {
    value = e.target.value;
  };
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
    opacity: 0;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 50px);
    height: 100%;
    border: none;
    text-align: left;
    color: var(--ink);
    font-size: var(--font-size-m);
    box-sizing: border-box;
    padding: var(--spacing-s) 0 var(--spacing-m) var(--spacing-m);
    border-radius: var(--border-radius-s);
  }

  select.thin,
  input.thin {
    padding: var(--spacing-m);
    font-size: var(--font-size-xs);
  }
  .secondary {
    background: var(--grey-2);
  }

  .outline {
    border: var(--border-dark);
  }

  select:disabled,
  input:disabled,
  .disabled {
    background: var(--grey-4);
    border: 1px solid var(--grey-4);
    color: var(--grey-6);
  }

  .relative {
    position: relative !important;
    display: block;
    border-radius: var(--border-radius-s);
  }

  .pointer {
    right: 0 !important;
    top: 0 !important;
    bottom: 0 !important;
    position: absolute !important;
    pointer-events: none !important;
    align-items: center !important;
    display: flex !important;
    box-sizing: border-box;
  }

  .editable-pointer {
    border-style: solid;
    border-width: 0 0 0 1px;
    border-color: var(--grey-4);
    padding-left: var(--spacing-m);
  }
</style>

<div class="relative" class:disabled class:secondary class:outline>
  <select
    {name}
    class:thin
    class:secondary
    {disabled}
    on:change
    on:blur
    bind:value>
    <slot />
  </select>
  <slot name="custom-input" />
  <input
    class:thin
    class:secondary
    class:disabled
    on:change={updateValue}
    on:input={updateValue}
    on:blur={e => {
      updateValue(e);
      dispatch('blur', e);
    }}
    value={value || ''}
    type="text" />
  <div class="pointer editable-pointer">
    <Icon name="arrowdown" />
  </div>

</div>
