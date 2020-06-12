<script>
  export let icon
  export let title
</script>

<style>
  div {
    width: 260px;
    height: 40px;
    border-radius: 3px;
    font-weight: bold;
    display: flex;
    align-items: center;
    transition: 0.3s background-color;
    color: var(--ink);
    font-size: 14px;
  }

  div:hover {
    background-color: var(--secondary);
    cursor: pointer;
  }

  i {
    width: 18px;
    height: 18px;
    background-color: var(--dark-grey);
    margin-right: 8px;
  }
</style>

<div on:click>
  <i class={icon} />
  <span>{title}</span>
</div>
