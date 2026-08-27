function factorial(n) {

  let result = 1;

  // Multiply all integers from n down to 1
  // to calculate the factorial of n.
  for (let i = n; i >= 1; i--) {
    result = result * i;
  }

  return result;
}

console.log(factorial(15));