<script>
    import { createEventDispatcher } from "svelte"
  
    const dispatch = createEventDispatcher()
  
    export let value;
    export let group;
    export let name
    export let disabled = false
  
    function handleChange() {
      if (disabled) return
      group = value
      dispatch("change", group)
    }
  </script>
  
  <div class="container">
    <input {disabled} on:change={handleChange} {value} bind:group type="radio" {name} class="checkbox" id={value} />
    <div class="checkbox-container" on:click={handleChange}>
      <div class:disabled class="check-div" class:checked={group === value}>
        <div class="tick_mark" />
      </div>
    </div>
    <slot />
  </div>
  
  <style>
    .container {
      display: flex;
      gap: var(--spacing-s);   
    }
    .checkbox-container {
      position: relative;
      z-index: 0;
    }
  
    .checkbox {
      display: none;
    }
  
    .check-div {
      position: relative;
      width: 20px;
      height: 20px;
      background-color: var(--grey-2);
      cursor: pointer;
      transition: 0.2s ease transform, 0.2s ease background-color,
        0.2s ease box-shadow;
      overflow: hidden;
      border-radius: 4px;
    }
  
    .check-div:before {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      width: 12px;
      height: 12px;
      margin: 0 auto;
      background-color: var(--background);
      transform: translateY(-50%);
      transition: 0.2s ease width, 0.2s ease height;
      border-radius: 2px;
    }
  
    .check-div:active {
      transform: translateY(-50%) scale(0.9);
    }
  
    .tick_mark {
      position: absolute;
      top: 50%;
      left: 6px;
      width: 5px;
      height: 4px;
      margin: 0 auto;
      transform: rotateZ(-40deg);
    }
  
    .tick_mark:before,
    .tick_mark:after {
      content: "";
      position: absolute;
      background-color: var(--ink);
      border-radius: 2px;
      opacity: 0;
      transition: 0.2s ease transform, 0.2s ease opacity;
    }
  
    .tick_mark:before {
      left: 0;
      bottom: 0;
      width: 2px;
      height: 6px;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.23);
      transform: translateY(-68px);
    }
  
    .tick_mark:after {
      left: 0;
      bottom: 0;
      width: 12px;
      height: 2px;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.23);
      transform: translateX(78px);
    }

    .check-div.disabled:active {
      transform: none;
    }
  
    .checked {
      background-color: var(--grey-2);
    }
    .checked.disabled {
      background-color: var(--grey-5);
    }
  
    .checked:before {
      width: 0;
      height: 0;
    }
  
    .checked .tick_mark:before,
    .checked .tick_mark:after {
      transform: translate(0);
      opacity: 1;
    }
  </style>
  