
function mergeArrays(arr1, arr2) {

  // Merge both arrays into a single array
  let num = [...arr1, ...arr2];

  // Sort the merged array in ascending order
  let result = num.sort((a, b) => a - b);

  // Remove duplicate values
  let final = [...new Set(result)];

  return final;
}

console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));