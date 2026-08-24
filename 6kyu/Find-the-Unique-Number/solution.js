function findUniq(arr) {

  let result = 0;

  // Determine the repeated value by comparing the first three elements.
  // Since only one number is unique, at least two of these three
  // elements must contain the repeated value.
  if (arr[0] === arr[1]) {
    result = arr[0];

  } else if (arr[0] === arr[2]) {
    result = arr[0];

  } else {
    result = arr[1];
  }

  // Find and return the first value that differs from the repeated value.
  // This avoids sorting the array, which is important for huge inputs.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== result) {
      return arr[i];
    }
  }
}

console.log(findUniq([0, 0, 0.55, 0, 0]));