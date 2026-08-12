function digPow(n, p) {

  let result = 0;

  // Convert n into an array of individual digits
  let digit = String(n).split("").map(Number);

  // Raise each digit to consecutive powers starting from p
  for (let i = 0; i < digit.length; i++) {
    result += digit[i] ** p++;
  }

  // If the result is exactly divisible by n,
  // return the value of k
  
  if (result % n === 0) {
    return result / n;
  } else {
    // No positive integer k exists
    return -1;
  }
}

console.log(digPow(625, 2));