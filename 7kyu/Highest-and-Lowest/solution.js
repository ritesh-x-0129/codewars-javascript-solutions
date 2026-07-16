function highAndLow(numbers) {

  const arr = numbers.split(" ").map(Number);

  let highest = arr[0];
  let lowest = arr[0];

  for (let i = 1; i < arr.length; i++) {

    // Update the highest value.
    if (arr[i] > highest) {
      highest = arr[i];
    }

    // Update the lowest value.
    if (arr[i] < lowest) {
      lowest = arr[i];
    }

  }

  // Return highest first, then lowest.
  return `${highest} ${lowest}`;
}

console.log(highAndLow("1 2 3 4 5"));