function getDivisorsCnt(n) {
  let count = 0;

  // Check divisors only up to the square root of n
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      // Perfect square contributes one divisor, otherwise count the pair
      count += (i * i === n) ? 1 : 2;
    }
  }

  return count;
}

console.log(getDivisorsCnt(12));