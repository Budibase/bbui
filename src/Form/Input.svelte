<script>
  export let name,
    label,
    thin,
    type,
    placeholder,
    validator = () => {};
</script>

<style>
  .container {
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
    margin-left: auto;
  }

  input {
    box-sizing: border-box;
    color: var(--font);
    font-size: 18px;
    border-radius: 3px;
    border: solid 1px var(--grey-medium);
    padding: 20px;
    margin: 0;
    background-color: white;
  }

  input::placeholder {
    color: var(--grey-medium);
  }

  input:focus {
    box-shadow: 0 4px 16px 0 rgba(57, 60, 68, 0.08);
  }

  input:disabled {
    background: var(--grey-medium);
  }

  .thin + input {
    padding: 12px 9px;
    font-size: 12px;
    letter-spacing: 0.12px;
  }
</style>

<div class="container">
  <label class:thin for={name}>
    {label}
    <div class="right">
      <slot />
    </div>
  </label>
  <input
    class:thin
    on:change
    on:input
    use:validator
    {type}
    {name}
    {placeholder} />
</div>
