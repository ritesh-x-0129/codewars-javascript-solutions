function sumDigits(number) {
  // Convert the number to its absolute value.
  number = Math.abs(number);

  let sum = 0;
  let digits = number.toString().split("");

  // Add each digit to the sum.
  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }

  return sum;
}

console.log(sumDigits(34));