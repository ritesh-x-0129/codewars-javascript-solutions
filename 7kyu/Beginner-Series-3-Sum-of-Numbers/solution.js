function getSum(a, b) {

  // Find the smaller and larger values to handle unordered inputs.
  if (a === b) {
    return a;
  }

  let small = Math.min(a, b);
  let big = Math.max(a, b);
  let sum = 0;

  for (let i = small; i <= big; i++) {
    sum += i;
  }

  return sum;
}

console.log(getSum(23, 27));