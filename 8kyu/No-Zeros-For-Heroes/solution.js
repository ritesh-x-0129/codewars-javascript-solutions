function noBoringZeros(n) {

  // Remove trailing zeros until the last digit is non-zero
  while (n !== 0 && n % 10 === 0) {
    n /= 10;
  }

  return n;
}