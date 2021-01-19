<script>
  import { slide } from "svelte/transition";
  import Portal from "svelte-portal";
  import clickOutside from "../actions/click_outside";

  export let title;
  export let onClose = () => {};
</script>

<style>
  .drawer {
    position: absolute;
    bottom: 0;
    width: 100vw;
    background: var(--background);
    border-top: var(--border-light);
    z-index: 2;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: var(--border-light);
    padding: var(--spacing-m);
  }

  .controls {
    display: grid;
    grid-auto-flow: column;
    grid-gap: var(--spacing-m);
    align-items: center;
  }

  .close {
    font-size: var(--font-size-xl);
    cursor: pointer;
  }
  .title {
    font-weight: bold;
    margin-right: var(--spacing-m);
  }
  .text {
    display: flex;
  }
</style>

<Portal>
  <section class="drawer" transition:slide>
    <header>
      <div class="text">
        <div class="title">{title}</div>
        <slot name="description" />
      </div>
      <div class="controls">
        <slot name="buttons" />
        <i class="ri-close-fill close" on:click={onClose} />
      </div>
    </header>
    <slot name="body" />
  </section>
</Portal>
