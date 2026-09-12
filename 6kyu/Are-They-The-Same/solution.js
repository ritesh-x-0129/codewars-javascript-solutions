function comp(array1, array2) {
  if (array1 == null || array2 == null) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  if (array1.length === 0 && array2.length === 0) {
    return true;
  }

  let arr1 = array1.sort((a, b) => a - b);
  let arr2 = array2.sort((a, b) => a - b);

  // Compare each element of array2 with the square of array1
  for (let i = 0; i < arr1.length; i++) {
    let square = arr1[i] * arr1[i];

    if (square !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);