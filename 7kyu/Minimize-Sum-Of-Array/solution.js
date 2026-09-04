function minSum(arr) {
  let result = 0;

  let sort = arr.sort((a, b) => a - b);

  // Pair the smallest number with the largest number
  // to get the minimum possible sum of products.
  for (let i = 0; i < sort.length / 2; i++) {
    result += sort[i] * sort[sort.length - 1 - i];
  }

  return result;
}

console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]));