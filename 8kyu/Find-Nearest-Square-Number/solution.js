function nearestSq(n) {

  // Find the integer whose square is the largest perfect square
  // that is less than or equal to n.
  let x = Math.floor(Math.sqrt(n));

  // Calculate the nearest lower and upper perfect squares.
  let lower = x ** 2;
  let upper = (x + 1) ** 2;

  // Calculate the distance from n to each perfect square.
  let min = n - lower;
  let max = upper - n;

  // Return whichever perfect square is closer to n.
  // If both distances are equal, return the upper square.
  if (min < max) {
    return lower;
  } else {
    return upper;
  }
}

console.log(nearestSq(26));