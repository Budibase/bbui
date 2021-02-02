<script>
  import { createEventDispatcher } from "svelte";
  import buildStyle from "../utils/buildStyle"

  const dispatch = createEventDispatcher();
  export let anchor;
  export let align = "right";
  export let width = null;
  export let borderColor = "";

  export const show = () => {
    dispatch("open");
    open = true;
  };

  export const hide = () => {
    dispatch("close");
    open = false;
  };

  let open = null;
  let dimensions = { top: 0, bottom: 0, left: 0, width: 0, containerWidth: 0 };
  let containerEl;
  let positionSide = "top";
  let maxHeight = 0;
  let scrollTop = 0;

  function handleEscape(e) {
    if (open && e.key === "Escape") {
      hide();
    }
  }

  function getDimensions() {
    const {
      bottom,
      top: spaceAbove,
      left,
      width,
    } = anchor.getBoundingClientRect();
    const spaceBelow = window.innerHeight - bottom;
    const containerRect = containerEl.getBoundingClientRect();

    let y;

    if (spaceAbove > spaceBelow) {
      positionSide = "bottom";
      maxHeight = spaceAbove - 20;
      y = window.innerHeight - spaceAbove;
    } else {
      positionSide = "top";
      y = bottom;
      maxHeight = spaceBelow - 20;
    }

    dimensions = {
      [positionSide]: y,
      left,
      width,
      containerWidth: containerRect.width,
    };
  }

  const calcLeftPosition = () =>
    align === "right"
      ? dimensions.left + dimensions.width - dimensions.containerWidth
      : dimensions.left;

  // get dimensions when containerElement exists (i.e. open = true & rendered)
  $: if (containerEl) getDimensions();

  $: menuStyle = buildStyle({
    "max-height": `${maxHeight.toFixed(0)}px`,
    "transform-origin": `center ${positionSide}`,
    [positionSide]: `${dimensions[positionSide]}px`,
    left: `${calcLeftPosition(dimensions)}px`,
    width,
    borderColor,
  });
</script>

<style>
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 5;
  }

  .menu-container {
    position: fixed;
    margin-top: var(--spacing-xs);
    outline: none;
    box-sizing: border-box;
    opacity: 0;
    min-width: 200px;
    z-index: 2;
    color: var(--ink);
    font-weight: 400;
    height: fit-content !important;
    border: var(--border-dark);
    border-radius: var(--border-radius-m);
    transform: scale(0);
    transition: opacity 0.13s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1);
    overflow-y: auto;
    background: var(--background);
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
  }

  .open {
    transform: scale(1);
    opacity: 1;
  }
</style>

{#if open}
  <div on:click|self={hide} class="overlay">
    <div
      tabindex="0"
      class:open
      bind:this={containerEl}
      style={menuStyle}
      on:keydown={handleEscape}
      class="menu-container">
      <slot />
    </div>
  </div>
{/if}
