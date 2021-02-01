export default function positionDropdown(element, { anchor, align }) {
  console.log(align);
  const { bottom, left, width } = anchor.getBoundingClientRect();
  console.log(anchor.getBoundingClientRect());
  const calcLeftPosition = (left) => {
    console.log(width);
    console.log(element.getBoundingClientRect().width);
    return align === "right"
      ? left + width - element.getBoundingClientRect().width
      : left;
  };
  console.log(element.clientWidth);
  element.style.position = "absolute";
  element.style.top = `${bottom}px`;
  element.style.minWidth = `${(width - 4).toFixed(0)}px`;
  element.style.left = `${calcLeftPosition(left)}px`;
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
