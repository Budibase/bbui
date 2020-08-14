<script>
  import Button from "../Button/Button.svelte";
  import Input from "../Form/Input.svelte";
  import Select from "../Form/Select.svelte"
  import Spacer from "../Spacer/Spacer.svelte"

</script>

<style>
  h2 {
		font-size: var(--font-size-xl);
		margin: 0;
		font-family: var(--font-sans);
		font-weight: 600;
	}

	p {
		font-size: var(--font-size-m);
		margin: 0;
		font-family: var(--font-sans);
		font-weight: 400;
		line-height: 1.5;
		color: var(--grey-7);
	}

</style>

<h2>Delete Row</h2>
<Spacer medium />
<p>Are you sure you would like to delete this record? Once it is deleted, it will be lost forever and ever.</p>
<Spacer extraLarge />
	<Button red wide on:click={() => alert('Clicked!')}>Delete</Button>
	<Spacer small />	
	<Button secondary wide on:click={() => alert('Clicked!')}>Cancel</Button>

