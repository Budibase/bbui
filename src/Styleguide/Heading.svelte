<script>
  export let color = "dark";
  export let size = "medium";
  export let fontWeight = "";

  const classname = `bb-heading bb-heading--${size} bb-heading--${fontWeight} bb-heading--color-${color}`;
</script>

<h1 class={classname}>
  <slot />
</h1>
