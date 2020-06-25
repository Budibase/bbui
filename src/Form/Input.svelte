<script>
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";
  const dispatch = createEventDispatcher();

  export let name,
    label,
    thin,
    edit,
    disabled,
    type,
    placeholder,
    value,
    validator = () => {};

  // This section handles the edit mode and dispatching of things to the parent when saved
  let editMode = false;

  const updateValue = e => {
    value = e.target.value;
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
    font-weight: 500;
    line-height: 1.17;
  }

  label {
    color: var(--font);
    margin-bottom: 12px;
    display: flex;
  }

  .right {
    align-items: center;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 12px;
    margin-left: auto;
  }

  input {
    min-width: 0;
    box-sizing: border-box;
    color: var(--ink);
    font-size: 18px;
    border-radius: 3px;
    border: solid 1px var(--grey-3);
    padding: 20px;
    margin: 0;
    background-color: white;
  }

  input::placeholder {
    color: var(--ink);
  }

  input:focus {
    box-shadow: 0 4px 16px 0 rgba(57, 60, 68, 0.08);
  }

  input:disabled {
    background: var(--grey-3);
  }

  .thin + input {
    padding: 12px 9px;
    font-size: 12px;
    letter-spacing: 0.12px;
  }
  input:disabled {
    background: var(--grey-2);
    border: 1px solid var(--grey-2);
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
          <Button small attention disabled={!editMode} on:click={save}>
            Save
          </Button>
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
    value = {value || ""}
    {type}
    {name}
    {placeholder} />
</div>
