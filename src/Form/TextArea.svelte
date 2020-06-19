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
    display: flex;
    flex-direction: column;
    font-size: 18px;
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

  textarea {
    color: var(--font);
    font-size: 18px;
    border-radius: 3px;
    border: solid 1px var(--grey-medium);
    padding: 20px;
    margin: 0;
  }

  textarea::placeholder {
    color: var(--grey-dark);
  }

  textarea:focus {
    box-shadow: 0 4px 16px 0 rgba(57, 60, 68, 0.08);
  }

  textarea:disabled {
    background: var(--grey-medium);
  }

  .thin + textarea {
    padding: 12px 9px;
    font-size: 12px;
    letter-spacing: 0.12px;
  }
  textarea:disabled {
    background: var(--grey);
    border: 1px solid var(--grey);
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
        <Button small attention disabled={!editMode} on:click={save}>
          Save
        </Button>
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
