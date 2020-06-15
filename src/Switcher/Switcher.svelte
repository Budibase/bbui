<script>
  export let headings;
  export let value;
</script>

<style>
  header {
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: column;
  }

  span {
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
        on:click={() => (value = heading.key)}>
        {heading.title}
      </span>
    {/each}
  </header>
  <slot />
</section>
