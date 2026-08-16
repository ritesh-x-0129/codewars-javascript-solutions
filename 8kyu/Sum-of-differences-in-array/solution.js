function sumOfDifferences(arr) {

  // If the array has 0 or 1 element,
  // there are no consecutive pairs to subtract.
  if (arr.length === 1 || arr.length === 0) {
    return 0;
  }

  // Sort the array in descending order.
  let result = arr.sort((a, b) => b - a);

  // The sum of consecutive differences telescopes
  // to the difference between the largest and smallest values.
  let difference = result[0] - result[result.length - 1];

  return difference;
}

console.log(sumOfDifferences([2, 1, 10, 54, 12]));