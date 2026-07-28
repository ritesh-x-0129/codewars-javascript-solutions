function SeriesSum(n) {
  let sum = 0;
  let denominator = 1;

  // Add the first n terms of the series.
  for (let i = 0; i < n; i++) {
    sum += 1 / denominator;
    denominator += 3;
  }

  return sum.toFixed(2);
}

console.log(SeriesSum(4));