function nthSmallest(arr, pos) {

  let sort = arr.sort((a, b) => a - b);

  // Sort the array and return the element at the required position.
  return sort[pos - 1];
}

console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4));