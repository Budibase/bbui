<script>
  import { setContext as baseSetContext, SvelteComponent } from "svelte";
  import { fade } from "svelte/transition";

  export let key = "simple-modal";
  export let closeButton = true;
  export let closeOnEsc = true;
  export let closeOnOuterClick = true;
  export let styleBg = { top: 0, left: 0 };
  export let styleWindow = {};
  export let styleContent = {};
  export let styleCloseButton = {};
  export let setContext = baseSetContext;
  export let transitionBg = fade;
  export let transitionBgProps = { duration: 250 };
  export let transitionWindow = transitionBg;
  export let transitionWindowProps = transitionBgProps;

  const defaultState = {
    closeButton,
    closeOnEsc,
    closeOnOuterClick,
    styleBg,
    styleWindow,
    styleContent,
    styleCloseButton,
    transitionBg,
    transitionBgProps,
    transitionWindow,
    transitionWindowProps
  };
  let state = { ...defaultState };

  let Component = null;
  let props = null;

  let background;
  let wrap;
  let modalWindow;

  const camelCaseToDash = str =>
    str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();

  const toCssString = props =>
    Object.keys(props).reduce(
      (str, key) => `${str}; ${camelCaseToDash(key)}: ${props[key]}`,
      ""
    );

  const isSvelteComponent = component =>
    SvelteComponent.isPrototypeOf(component);

  $: cssBg = toCssString(state.styleBg);
  $: cssWindow = toCssString(state.styleWindow);
  $: cssContent = toCssString(state.styleContent);
  $: cssCloseButton = toCssString(state.styleCloseButton);
  $: currentTransitionBg = state.transitionBg;
  $: currentTransitionWindow = state.transitionWindow;

  const toVoid = () => {};
  let onOpen = toVoid;
  let onClose = toVoid;
  let onOpened = toVoid;
  let onClosed = toVoid;

  const open = (NewComponent, newProps = {}, options = {}, callback = {}) => {
    Component = NewComponent;
    props = newProps;
    state = { ...defaultState, ...options };
    onOpen = callback.onOpen || toVoid;
    onClose = callback.onClose || toVoid;
    onOpened = callback.onOpened || toVoid;
    onClosed = callback.onClosed || toVoid;
  };

  const close = (callback = {}) => {
    onClose = callback.onClose || onClose;
    onClosed = callback.onClosed || onClosed;
    Component = null;
    props = null;
  };

  const handleKeydown = event => {
    if (state.closeOnEsc && Component && event.key === "Escape") {
      event.preventDefault();
      close();
    }

    if (Component && event.key === "Tab") {
      // trap focus
      const nodes = modalWindow.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter(node => node.tabIndex >= 0);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && event.shiftKey) index = 0;

      index += tabbable.length + (event.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      event.preventDefault();
    }
  };

  const handleOuterClick = event => {
    if (
      state.closeOnOuterClick &&
      (event.target === background || event.target === wrap)
    ) {
      event.preventDefault();
      close();
    }
  };

  setContext(key, { open, close });
</script>

<style>
  * {
    box-sizing: border-box;
  }

  .bg {
    position: fixed;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
  }

  .window-wrap {
    position: relative;
    margin: 2rem;
    max-height: 100%;
  }

  .window {
    position: relative;
    width: 400px;
    max-width: 100%;
    max-height: 100%;
    margin: 2rem auto;
    color: black;
    border-radius: var(--border-radius-m);
    background: white;
  }

  .content {
    padding: var(--layout-s);
    position: relative;
    max-height: calc(100vh - 4rem);
    overflow: auto;
  }

  .close {
    display: block;
    box-sizing: border-box;
    position: absolute;
    font-size: var(--font-size-xl);
    z-index: 1000;
    top: var(--spacing-l);
    right: var(--spacing-l);
    margin: 0;
    padding: 0;
    width: 1.5rem;
    height: 1.5rem;
    border: 0;
    color: black;
    border-radius: var(--border-radius-xl);
    background: white;
    transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
    -webkit-appearance: none;
    outline: none;
  }

  .close:hover {
    background-color: var(--grey-2);
    cursor: pointer;
  }

  .close:active {
    background-color: var(--grey-4);
    cursor: pointer;
  }
</style>

<svelte:window on:keydown={handleKeydown} />

{#if Component}
  <div
    class="bg"
    on:click={handleOuterClick}
    bind:this={background}
    transition:currentTransitionBg={state.transitionBgProps}
    style={cssBg}>
    <div class="window-wrap" bind:this={wrap}>
      <div
        class="window"
        role="dialog"
        aria-modal="true"
        bind:this={modalWindow}
        transition:currentTransitionWindow={state.transitionWindowProps}
        on:introstart={onOpen}
        on:outrostart={onClose}
        on:introend={onOpened}
        on:outroend={onClosed}
        style={cssWindow}>
        {#if state.closeButton}
          {#if isSvelteComponent(state.closeButton)}
            <svelte:component this={state.closeButton} onClose={close} />
          {:else}
            <button on:click={close} class="close" style={cssCloseButton}>
              ×
            </button>
          {/if}
        {/if}
        <div class="content" style={cssContent}>
          <svelte:component this={Component} {...props} />
        </div>
      </div>
    </div>
  </div>
{/if}
<slot />
