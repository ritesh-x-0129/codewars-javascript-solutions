function findSmallestInt(arr) {

  let smallest = arr[0];

  // Find the smallest value in the array.
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  // Return the smallest integer.
  return smallest;
}

console.log(findSmallestInt([34, 15, 88, 2]));