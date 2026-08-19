function derive(coefficient, exponent) {

  // Multiply the coefficient by the exponent
  // and decrease the exponent by 1 using the power rule.
  let result = `${coefficient * exponent}x^${exponent - 1}`;

  return result;
}

console.log(derive(6, 9));