<script>
  export let extraSmall = false,
    small = false,
    medium = false,
    large = false,
    extraLarge = false,
    white = false,
    grey = false,
    black = false;
</script>

<style>
  .bb-heading {
    font-family: var(--font-sans);
    font-weight: 600;
    text-rendering: var(--text-render);
    color: var(--ink);
    font-size: var(--heading-font-size-m);
    line-height: 1.5;
  }

  .extraSmall {
    font-size: var(--heading-font-size-xs);
  }

  .small {
    font-size: var(--heading-font-size-s);
  }

  .medium {
    font-size: var(--heading-font-size-m);
  }

  .large {
    font-size: var(--heading-font-size-l);
    font-weight: 700;
  }

  .extraLarge {
    font-size: var(--heading-font-size-xl);
    font-weight: 700;
  }

  .white {
    color: var(--white);
  }

  .grey {
    color: var(--grey-5);
  }

  .black {
    color: var(--ink);
  }
</style>

<h1
  class="bb-heading"
  class:extraSmall
  class:small
  class:medium
  class:large
  class:extraLarge
  class:white
  class:grey
  class:black>
  <slot />
</h1>
