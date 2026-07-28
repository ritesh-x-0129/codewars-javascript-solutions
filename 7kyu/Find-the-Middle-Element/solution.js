function gimme(triplet) {
  // Create a sorted copy of the array.
  const sorted = [...triplet].sort((a, b) => a - b);

  // Get the middle value.
  const middle = sorted[1];

  // Return its index in the original array.
  return triplet.indexOf(middle);
}

console.log(gimme([2, 3, 1]));