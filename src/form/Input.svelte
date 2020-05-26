<script>
  export let name,
    label,
    type,
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
  }

  input {
    color: var(--font);
    font-size: 18px;
    border-radius: 3px;
    border: solid 1px var(--medium-grey);
    padding: 20px;
    margin: 0;
  }

  input::placeholder {
    color: var(--dark-grey);
  }

  input:focus {
    box-shadow: 0 4px 16px 0 rgba(57, 60, 68, 0.08);
  }

  input:disabled {
    background: var(--medium-grey);
  }
</style>

<div class="container">
  <label for={name}>{label}</label>
  <input use:validator {type} {name} {placeholder} />
</div>
