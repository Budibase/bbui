
<script>
  export let color = "dark";
  export let size = "m";
  export let fontWeight = "";

  const classname = `bb-body bb-body--${size} bb-body--${fontWeight} bb-body--color-${color}`;
</script>

<p class={classname}>
  <slot />
</p>
