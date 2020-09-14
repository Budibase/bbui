<script>
  import { createEventDispatcher } from "svelte";
  import buildStyle from "../utils/buildStyle";
  import { fade } from "svelte/transition";

  const dispatch = createEventDispatcher();
  export let maxWidth = "30vw";
  export let maxHeight = "60vh";
  export let minWidth = "30vw";
  export let borderColor = "";
  export let hideCloseButton = false;
  export let padding="var(--layout-xs)";

  export const show = () => {
    dispatch("open");
    open = true;
  };

  export const hide = () => {
    dispatch("close");
    open = false;
  };

  let open = null;

  function handleEscape(e) {
    if (open && e.key === "Escape") {
      hide();
    }
  }

  $: containerStyle = buildStyle({
    "max-height": maxHeight,
    "max-width": maxWidth,
    "min-width": minWidth,
    borderColor,
    padding,
  });
</script>

<style>
  .overlay {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
  }

  .container {
    outline: none;
    box-sizing: border-box;
    opacity: 0;
    color: var(--ink);
    font-weight: 400;
    height: fit-content !important;
    border: black;
    border-radius: var(--border-radius-m);
    overflow-y: auto;
    background: #fff;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
  }

  .open {
    opacity: 1;
  }

  .close {
    display: block;
    box-sizing: border-box;
    position: absolute;
    font-size: var(--font-size-xl);
    z-index: 1000;
    top: var(--spacing-l);
    right: var(--spacing-l);
    margin: 0;
    padding: 0;
    width: 1.5rem;
    height: 1.5rem;
    border: 0;
    color: black;
    border-radius: var(--border-radius-xl);
    background: white;
    transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
    -webkit-appearance: none;
    outline: none;
  }

  .close:hover {
    background-color: var(--grey-2);
    cursor: pointer;
  }

  .close:active {
    background-color: var(--grey-4);
    cursor: pointer;
  }
</style>

{#if open}
  <div on:click|self={hide} class="overlay" transition:fade={{ duration: 200 }}>
    <div
      tabindex="0"
      class:open
      style={containerStyle}
      on:keydown={handleEscape}
      class="container">
      {#if !hideCloseButton}
      <button on:click={hide} class="close">
        ×
      </button>
      {/if}
      <slot />
    </div>
  </div>
{/if}
