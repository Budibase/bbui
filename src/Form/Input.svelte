<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../Button/Button.svelte";
  const dispatch = createEventDispatcher();

  export let name = undefined;
  export let label = undefined;
  export let thin = false;
  export let edit = false;
  export let disabled = false;
  export let type = undefined;
  export let placeholder = "";
  export let value = "";
  export let error = false;
  export let validator = () => {};

  // This section handles the edit mode and dispatching of things to the parent when saved
  let editMode = false;

  const updateValue = (e) => {
    if (type === "number") {
      const num = parseFloat(e.target.value)
      value = isNaN(num) ? "" : num;
    } else {
      value = e.target.value;
    }
  };

  const save = () => {
    editMode = false;
    dispatch("save", value);
  };

  const enableEdit = () => {
    editMode = true;
  };
</script>

<style>
  .container {
    min-width: 0;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-family: sans-serif;
    font-weight: 500;
  }

  label {
    color: var(--ink);
    margin-bottom: 12px;
    display: flex;
  }

  .right {
    align-items: center;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 12px;
    margin-left: auto;
    padding-left: 12px;
  }

  input {
    min-width: 0;
    box-sizing: border-box;
    color: var(--ink);
    font-size: 18px;
    border-radius: 5px;
    border: none;
    background-color: var(--grey-2);
    padding: 20px;
    margin: 0;
    outline-color: var(--blue);
  }

  input::placeholder {
    color: var(--grey-6);
  }

  input:focus {
    box-shadow: 0 4px 16px 0 rgba(57, 60, 68, 0.08);
  }

  input:disabled {
    background: var(--grey-4);
  }

  input.thin {
    padding: var(--spacing-m);
    font-size: var(--font-size-xs);
  }

  input:disabled {
    background: var(--grey-4);
    color: var(--grey-5);
  }
  .right :global(button) {
    min-width: 100px;
    font-size: var(--font-size-s);
    border-radius: var(--rounded-small);
  }
  .error {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.17;
    color: var(--red);
  }
</style>

<div class="container">
  {#if label}
    <label class:thin for={name}>
      {label}
      {#if edit}
        <div class="right">
          <Button small secondary disabled={editMode} on:click={enableEdit}>
            Edit
          </Button>
          <Button small blue disabled={!editMode} on:click={save}>Save</Button>
        </div>
      {/if}
    </label>
  {/if}
  <input
    class:thin
    on:change
    on:input
    on:change={updateValue}
    on:input={updateValue}
    on:blur={updateValue}
    use:validator
    disabled={disabled || (edit && !editMode)}
    {value}
    {type}
    {name}
    {placeholder} />
  {#if error}
    <div class="error">{error}</div>
  {/if}
</div>
