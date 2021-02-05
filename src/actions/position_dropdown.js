export default function positionDropdown(element, { anchor, align }) {
  let positionSide = "top";
  let maxHeight = 0;
  let dimensions = getDimensions(anchor);
  function getDimensions() {
    const {
      bottom,
      top: spaceAbove,
      left,
      width,
    } = anchor.getBoundingClientRect();
    const spaceBelow = window.innerHeight - bottom;
    const containerRect = element.getBoundingClientRect();

    let y;

    if (spaceAbove > spaceBelow) {
      positionSide = "bottom";
      maxHeight = spaceAbove - 20;
      y = window.innerHeight - spaceAbove;
    } else {
      positionSide = "top";
      y = bottom;
      maxHeight = spaceBelow - 20;
    }

    return {
      [positionSide]: y,
      left,
      width,
      containerWidth: containerRect.width,
    };
  }

  function calcLeftPosition() {
    return align === "right"
      ? dimensions.left + dimensions.width - dimensions.containerWidth
      : dimensions.left;
  }

  element.style.position = "absolute";
  element.style.minWidth = `${dimensions.width}px`;
  element.style.maxHeight = `${maxHeight.toFixed(0)}px`;
  element.style.transformOrigin = `center ${positionSide}`;
  element.style[positionSide] = `${dimensions[positionSide]}px`;
  element.style.left = `${calcLeftPosition(dimensions)}px`;

  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      console.log(entry);
      console.log("Size changed!");
      dimensions = getDimensions();
      console.log("Position side: ", positionSide);
      console.log("Number: ", dimensions[positionSide]);
      element.style[positionSide] = `${dimensions[positionSide]}px`;
    }
  });

  resizeObserver.observe(anchor);

  return {
    destroy() {
      resizeObserver.disconnect();
    },
  };
}
