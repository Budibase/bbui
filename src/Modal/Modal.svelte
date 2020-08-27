<script>
  import { createEventDispatcher } from "svelte";
  import buildStyle from "../utils/buildStyle"
  import { fade } from 'svelte/transition';

  const dispatch = createEventDispatcher();
  export let maxWidth = "30vw";
  export let maxHeight = "60vh";
  export let borderColor = "";

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
    borderColor,
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
    background-color: #eeeeee99
  }

  .container {
    outline: none;
    box-sizing: border-box;
    opacity: 0;
    min-width: 200px;
    min-height: 200px;
    color: var(--ink);
    font-weight: 400;
    padding: var(--spacing-m);
    height: fit-content !important;
    border: var(--border-dark);
    border-radius: var(--border-radius-m);
    transform: scale(0);
    transition: opacity 0.13s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1);
    overflow-y: auto;
    background: #fff;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
  }

  .open {
    transform: scale(1);
    opacity: 1;
  }
</style>

{#if open}  
  <div on:click|self={hide} class="overlay" transition:fade>
    <div
      tabindex="0"
      class:open
      style={containerStyle}
      on:keydown={handleEscape}
      class="container">
      <slot />
    </div>
  </div>
{/if}
