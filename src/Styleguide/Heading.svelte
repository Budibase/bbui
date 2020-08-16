<script>
  export let color = "dark";
  export let size = "m";

  const classname = `bb-heading bb-heading--${size} bb-heading--color-${color}`;
</script>

<h1 class={classname}>
  <slot />
</h1>
