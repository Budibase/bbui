export default function positionDropdown(element, { anchor, align }) {
  let positionSide = "top";
  let maxHeight = 0;
  let dimensions = getDimensions();
  function getDimensions() {
    const {
      bottom,
      top: spaceAbove,
      left,
      width,
    } = anchor.getBoundingClientRect();
    const spaceBelow = window.innerHeight - bottom;
    const containerRect = element.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();

    console.log(anchorRect);

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

  //   console.log(element.clientWidth);
  //   element.style.top = `${bottom}px`;
  //   element.style.minWidth = `${(width - 4).toFixed(0)}px`;
  //   element.style.left = `${calcLeftPosition(left)}px`;
  //   element.style.maxHeight = `${(window.innerHeight - bottom - 30).toFixed(
  //     0
  //   )}px`;

  //   const resizeObserver = new ResizeObserver((entries) => {
  //     for (let entry of entries) {
  //       const { bottom } = entry.target.getBoundingClientRect();
  //       element.style.top = `${bottom}px`;
  //     }
  //   });

  //   resizeObserver.observe(anchor);

  //   return {
  //     destroy() {
  //       resizeObserver.disconnect();
  //     },
  //   };
}
