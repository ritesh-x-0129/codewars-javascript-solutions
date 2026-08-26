function findNextSquare(sq) {

  // Check whether the given number is a perfect square.
  // Math.sqrt(sq) must be an integer for a perfect square.
  if (!Number.isInteger(Math.sqrt(sq))) {
    return -1;
  }

  // Get the next integer after the current square root.
  let square = Math.sqrt(sq) + 1;

  // Square the next integer to get the next perfect square.
  return square * square;
}

console.log(findNextSquare(12));