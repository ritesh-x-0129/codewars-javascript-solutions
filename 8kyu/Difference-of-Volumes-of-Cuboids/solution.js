function findDifference(a, b) {

  // Calculate the volume of the first cuboid
  a = a[0] * a[1] * a[2];

  // Calculate the volume of the second cuboid
  b = b[0] * b[1] * b[2];

  // Return the absolute difference between the two volumes
  let c = a - b;
  return c = Math.abs(c);
}

console.log(findDifference([2, 2, 3], [5, 4, 1]));