function rowSumOddNumbers(n) {

  let sum = 0;

  // First odd number in the nth row.
  let odd = n * (n - 1) + 1;

  for (let i = 0; i < n; i++) {
    sum += odd;
    odd += 2;
  }

  return sum;
}

console.log(rowSumOddNumbers(5));