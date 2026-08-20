function sumOfMinimums(arr) {

  let sum = 0;

  // Go through each row of the 2D array.
  arr.forEach(row => {

    // Sort the current row in ascending order
    // so the smallest value comes first.
    row.sort((a, b) => a - b);

    // Add the minimum value of the current row to the total.
    sum += row[0];
  });

  return sum;
}

console.log(
  sumOfMinimums([
    [5, 2, 8, 1],
    [9, 3, 7, 4],
    [20, 5, 100, 2]
  ])
);