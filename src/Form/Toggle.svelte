<script>
  export let id = '';
  export let text = '';
  export let checked = false;
  export let disabled = false;
  export let screenreader = true;
  
</script>

<style>

  label {
      display: flex;
      align-items: center;
      gap: var(--spacing-s);
  }

  label:disabled {
    background-color: var(--grey-2);
    cursor: not-allowed;
  }

  .toggle {
    position: relative;
    display: inline-block;
    align-self: center; 
    cursor: pointer;
    -webkit-user-select: none; 
    background: transparent;
    outline-color: var(--blue);
  }


  .track {
    width: 28px;
    height: 14px;
    background-color: var(--grey-4);
    border-radius: var(--border-radius-xl);
    transition-delay: .12s;
    transition-duration: .2s;
    transition-property: background,border;
    transition-timing-function: cubic-bezier(0,0,.2,1);
  }


  .thumb {
    cursor: pointer;
    position: absolute;
    transition-duration: .28s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0,0,.2,1);
    position: absolute;
    margin: 1px 1px 1px 1.5px;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: var(--border-radius-xl);
    border: 1px solid transparent;
  }

  input[type='checkbox']:checked ~ .thumb {
    transform: translateX(115%);
  }
  input[type='checkbox']:checked ~ .track {
     background-color: var(--blue);

  }
  input[type='checkbox']:disabled ~ .track {
    background-color: var(--grey-4);
    cursor: not-allowed;
  }
  input[type='checkbox']:disabled ~ .thumb {
    background-color: var(--grey-2);
    cursor: not-allowed;

  }

  .screenreader {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .text {
    font-size: var(--font-size-xs);
    font-family: var(--font-sans);
    cursor: pointer;
  }
</style>

<label for="{id}">
  <span class="text">{text}</span>
  <div class="toggle">
    <input
      {id}
      name="{id}"
      type="checkbox"
      class:screenreader
      {disabled}
      bind:checked
    />
    <div class="track"></div>
    <div class="thumb"></div>
  </div>
</label>
