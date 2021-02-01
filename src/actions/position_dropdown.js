export default function positionDropdown(element, anchor) {
  const { bottom, left, width } = anchor.getBoundingClientRect();
  const containerRect = element.getBoundingClientRect();
  element.style.position = "fixed";
  element.style.top = `${bottom}px`;
  element.style.left = `${left}px`;
  element.style.minWidth = `${(width - 4).toFixed(0)}px`;
  element.style.maxHeight = `${(window.innerHeight - bottom - 30).toFixed(
    0
  )}px`;

  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const { bottom } = entry.target.getBoundingClientRect();
      element.style.top = `${bottom}px`;
    }
  });

  resizeObserver.observe(anchor);

  return {
    destroy() {
      resizeObserver.disconnect();
    },
  };
}
