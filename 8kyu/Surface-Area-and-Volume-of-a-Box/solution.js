function getSize(width, height, depth) {

  // Calculate the total surface area of the box
  let surfaceArea =
    2 * (width * height + width * depth + height * depth);

  // Calculate the volume of the box
  let volume = width * height * depth;

  return [surfaceArea, volume];
}

console.log(getSize(6, 3, 8));