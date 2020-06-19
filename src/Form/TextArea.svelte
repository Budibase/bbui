<script>
  import { text_area_resize } from "../actions/autoresize_textarea.js";
  export let name,
    label,
    value,
    placeholder,
    validator = () => {};
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
</style>

<div class="container">
  <label for={name}>
    {label}
    <div class="right">
      <slot />
    </div>
  </label>
  <textarea bind:value {placeholder} {name} use:text_area_resize />
</div>
