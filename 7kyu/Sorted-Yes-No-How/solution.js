function isSortedAndHow(array) {

  let ascending = true;
  let descending = true;

  // Compare each element with the previous element
  // to determine whether the array can still be ascending
  // or descending.
  for (let i = 1; i < array.length; i++) {

    // If the current value is smaller than the previous value,
    // the array cannot be sorted in ascending order.
    if (array[i] < array[i - 1]) {
      ascending = false;
    }

    // If the current value is larger than the previous value,
    // the array cannot be sorted in descending order.
    if (array[i] > array[i - 1]) {
      descending = false;
    }
  }

  // If ascending is still true, the array is sorted ascending.
  if (ascending) {
    return "yes, ascending";
  }

  // If descending is still true, the array is sorted descending.
  if (descending) {
    return "yes, descending";
  }

  // If neither condition is true, the array is not sorted.
  return "no";
}

console.log(isSortedAndHow([1, 2, 2, 4, 7]));