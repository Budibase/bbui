<script>
  import Flatpickr from "svelte-flatpickr";
  import { Label, Input } from "../";
  import "flatpickr/dist/flatpickr.css";

  const PICKER_OPTIONS = {
    enableTime: true
  };

  export let placeholder;
  export let value;
</script>

<style>
  :global(.flatpickr-input) {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    color: var(--ink);
    border-radius: 5px;
    border: none;
    background-color: var(--grey-2);
    padding: var(--spacing-m);
    font-size: var(--font-size-xs);
    margin: 0;
    outline-color: var(--blue);
  }
</style>

<Flatpickr {placeholder} options={PICKER_OPTIONS} on:change bind:value />
