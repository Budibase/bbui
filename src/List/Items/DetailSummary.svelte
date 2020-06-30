<script>
	import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();

  export let name,
    show = false;

  const capitalize = name => name[0].toUpperCase() + name.slice(1);

  const onHeaderClick = () => {
    show = !show
    if (show) {
      dispatch("open")
    }
  }
</script>

<style>
  .property-group-container {
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0px 0px 4px 0px;
    padding: 8px 0px;
    justify-content: center;
    border-radius: 5px;
  }

  .property-group-name {
    cursor: pointer;
    display: flex;
    flex-flow: row nowrap;
  }

  .name {
    flex: 1;
    text-align: left;
    padding-top: 2px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.14px;
    color: var(--ink);
  }

  .icon {
    flex: 0 0 20px;
    text-align: center;
  }

  .property-panel {
    /* height: 0px;
    overflow: hidden; */
    display: none;
  }

  .show {
    /* overflow: auto;
    height: auto; */
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>

<div class="property-group-container">
  <div class="property-group-name" on:click={onHeaderClick}>
    <div class="name">{capitalize(name)}</div>
    <div class="icon">
      <i class={show ? 'ri-arrow-down-s-fill' : 'ri-arrow-left-s-fill'} />
    </div>
  </div>
  <div class="property-panel" class:show>
    <slot />
  </div>
</div>
