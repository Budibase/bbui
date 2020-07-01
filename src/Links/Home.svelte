<script>
  export let href,
    icon,
    title,
    active = false;
</script>

<style>
  .nav-item {
    cursor: pointer;
    padding: 12px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    border-radius: 3px;
  }

  .nav-item:hover {
    background-color: var(--grey-1);
  }

  .nav-item-title {
    font-size: 14px;
    color: var(--ink);
    font-weight: 400;
    margin-left: 12px;
  }

  .nav-item-icon {
    color: var(--grey-7);
  }

  .active {
    background-color: var(--blue-light);
  }
</style>

<a {href} target="_blank" class="nav-item" class:active>
  {#if icon}
    <span class="nav-item-icon">
      <svelte:component this={icon} />
    </span>
  {/if}
  {#if title}
    <div class="nav-item-title">{title}</div>
  {/if}
</a>
