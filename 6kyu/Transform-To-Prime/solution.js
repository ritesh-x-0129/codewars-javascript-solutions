function minimumNumber(numbers) {
    
  let sum = numbers.reduce((a, b) => a + b, 0);

  for (let i = sum; ; i++) {
    let isPrime = true;

    // Check if the current number is prime
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      return i - sum;
    }
  }
}

console.log(minimumNumber([50, 39, 49, 6, 17, 28]));