function remainder(n, m) {

  // Find the larger and smaller values
  // so the larger value is divided by the smaller value.
  let larger = Math.max(n, m);
  let smaller = Math.min(n, m);

  // Division by zero is not valid,
  // so return NaN when the smaller value is 0.
  if (smaller === 0) {
    return NaN;
  }

  // % returns the remainder of the division.
  return larger % smaller;
}

console.log(remainder(17, 3));