function sumMul(n, m) {

  let result = 0;

  // Both n and m must be positive integers.
  // Otherwise, the input is invalid.
  if (n <= 0 || m <= 0) {
    return "INVALID";
  }

  // Start from n and keep adding n to get
  // every multiple below m.
  for (let i = n; i < m; i += n) {

    // Add the current multiple to the total sum.
    result += i;
  }

  return result;
}

console.log(sumMul(3, 665));