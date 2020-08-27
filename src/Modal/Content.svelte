<script>
  import { getContext } from "svelte";
  import { fly } from "svelte/transition";
  import Popup from "./Popup.svelte";
  import Button from "../Button/Button.svelte"

  const { open } = getContext("simple-modal");

  let opening = false;
  let opened = false;
  let closing = false;
  let closed = false;

  const showPopup = () => {
    open(Popup);
  };

  let name;
  let status = 0;

  const onCancel = text => {
    name = "";
    status = -1;
  };

  const onOkay = text => {
    name = text;
    status = 1;
  };

</script>

<style>
  section {
    padding-top: 0.5em;
  }

  #state {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.33;
    font-size: 0.8em;
  }
</style>

<section>
  <Button primary on:click={showPopup}>Show a popup!</Button>

  <div id="state">
    {#if opening}
      <p>opening modal...</p>
    {:else if opened}
      <p>opened modal!</p>
    {:else if closing}
      <p>closing modal...</p>
    {:else if closed}
      <p>closed modal!</p>
    {/if}
  </div>
</section>
