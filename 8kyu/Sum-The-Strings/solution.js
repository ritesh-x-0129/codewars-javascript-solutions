function sumStr(a, b) {

  // Convert both string inputs into numbers.
  // An empty string is automatically converted to 0 by Number().
  let a1 = Number(a);
  let b1 = Number(b);

  // Add the two numeric values.
  let result = a1 + b1;

  // Convert the result back into a string.
  return result.toString();
}

console.log(sumStr("4", "5"));