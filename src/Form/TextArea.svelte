<script>
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";
  const dispatch = createEventDispatcher();
  import { text_area_resize } from "../actions/autoresize_textarea.js";
  export let name,
    label,
    thin,
    edit,
    disabled,
    placeholder,
    validator = () => {};

  // This section handles the edit mode and dispatching of things to the parent when saved
  let editMode = false;
  export let value;

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
  }

  label {
    color: var(--ink);
    margin-bottom: 12px;
    font-family: sans-serif;
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

  textarea {
    min-width: 0;
    color: var(--ink);
    font-size: 18px;
    font-family: sans-serif;
    border: none;
    border-radius: 5px;
    background-color: var(--grey-2);
    padding: 20px;
    margin: 0;
  }

  textarea::placeholder {
    color: var(--grey-6);
  }

  textarea:focus {
    box-shadow: 0 4px 16px 0 rgba(57, 60, 68, 0.08);
  }

  textarea:disabled {
    background: var(--grey-4);
  }

  textarea.thin {
    padding: 12px;
    font-size: 14px;
  }
  textarea:disabled {
    background: var(--grey-4);
    border: none;
  }
  textarea:disabled::placeholder {
    color: var(--grey-6);
  }
  .right :global(button) {
    min-width: 100px;
    font-size: var(--font-size-sm);
    border-radius: var(--rounded-small);
  }
</style>

<div class="container">
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
  <textarea
    class:thin
    bind:value
    disabled={disabled || (edit && !editMode)}
    {placeholder}
    {name}
    use:text_area_resize />
</div>
