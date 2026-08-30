function squareArea(A) {

  // Calculate the side of the square from the given arc length,
  // then square it to get the area.
  return (2 * A / Math.PI) ** 2;
}

console.log(squareArea(3));