function minMax(arr) {

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

  // Return the minimum and maximum values.
  return [lowest, highest];
}

console.log(minMax([1, 2, 3, 4, 5]));







// Smart Solution.

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}