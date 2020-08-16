<script>
  export let color = "dark";
  export let size = "m";
  export let forAttr = " ";

  const classname = `bb-label bb-label--${size} bb-label--color-${color}`;
</script>

<label class={classname} for={forAttr}>
  <slot />
</label>
