<script>
  import Quill from "quill";
  import { onMount } from "svelte";
  export let content;
  let quill;
  let container;
  let options = {};
  let defaultOptions = {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
      ],
    },
    placeholder: "Type something...",
    theme: "snow", // or 'bubble'
  };

  const updateContent = () => {
    content = container.getElementsByClassName("ql-editor")[0].innerHTML;
  };

  onMount(() => {
    quill = new Quill(container, { ...defaultOptions, ...options });
    if (content) quill.clipboard.dangerouslyPasteHTML(content);

    quill.on("text-change", updateContent);
    return () => {
      quill.off("text-change", updateContent);
    };
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.snow.css" />
</svelte:head>

<div class="wrapper">
  <div bind:this={container} on:text-change={console.log} />
</div>

<pre>{@html content}</pre>
