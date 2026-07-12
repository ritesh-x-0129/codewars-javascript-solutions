function squareDigits(num) {

  let result = "";
  let str = String(num);

  for (let i = 0; i < str.length; i++) {
    // Square each digit and concatenate the result.
    result += str[i] * str[i];
  }

  return Number(result);
}

console.log(squareDigits(9119));