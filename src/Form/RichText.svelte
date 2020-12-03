<script>
  import Quill from "quill";
  import MarkdownIt from "markdown-it";
  import TurndownService from "turndown";
  import { onMount } from "svelte";

  const convertMarkdown = new MarkdownIt();
  convertMarkdown.set({
    html: true,
  });
  const turndownService = new TurndownService();

  export let content = "";
  export let options = null;
  export let width = 400;

  let quill;
  let container;
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
    content = turndownService.turndown(quill.container.firstChild.innerHTML);
    console.log(content);
  };

  onMount(() => {
    quill = new Quill(container, { ...defaultOptions, ...options });
    if (content)
      quill.clipboard.dangerouslyPasteHTML(
        convertMarkdown.render(content + "\n")
      );

    quill.on("text-change", updateContent);
    return () => {
      quill.off("text-change", updateContent);
    };
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.snow.css" />
</svelte:head>

<div style="width: {width}px">
  <div bind:this={container} />
</div>
