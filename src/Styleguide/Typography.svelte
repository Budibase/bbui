<script>
  export let type;
  export let color;
  export let size;
  export let fontWeight;

  const classname = `bb-${type} bb-${type}--${size} bb-${type}--${fontWeight} bb-${type}--color-${color}`;
</script>

{#if type === 'heading'}
  <h1 class={classname}>
    <slot />
  </h1>
{/if}

{#if type === 'body'}
  <p class={classname}>
    <slot />
  </p>
{/if}
