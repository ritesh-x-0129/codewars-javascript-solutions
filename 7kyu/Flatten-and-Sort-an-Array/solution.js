function flattenAndSort(array) {

  // Convert the 2D array into a 1D array and sort it in ascending order
  let newArr = array.flat().sort((a, b) => a - b);

  return newArr;
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));