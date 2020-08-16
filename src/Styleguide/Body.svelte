<script>
  export let color = "dark";
  export let size = "m";

  const classname = `bb-body bb-body--${size} bb-body--color-${color}`;
</script>

<p class={classname}>
  <slot />
</p>
