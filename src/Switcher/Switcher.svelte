<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let headings;
  export let value;
</script>

<style>
  header {
    display: flex;
    margin-bottom: 20px;
  }

  span {
    margin-right: 20px;
    font-size: 18px;
    font-weight: bold;
    color: var(--ink-lighter);
  }

  span:hover {
    cursor: pointer;
  }

  .selected {
    color: var(--ink);
  }
</style>

<section>
  <header>
    {#each headings as heading}
      <span
        class:selected={value === heading.key}
        on:click={() => {
          value = heading.key
          dispatch("change", { heading })
        }}>
        {heading.title}
      </span>
    {/each}
  </header>
  <slot />
</section>
