function calculator(a, b, sign) {

  // Check whether both inputs are valid numbers.
  if (isNaN(a) || isNaN(b)) {
    return "unknown value";
  }

  // Perform the operation based on the given sign.
  if (sign === "+") {
    return a + b;
  } else if (sign === "-") {
    return a - b;
  } else if (sign === "*") {
    return a * b;
  } else if (sign === "/") {
    return a / b;
  } else {
    return "unknown value";
  }
}

console.log(calculator(6, 2, "*"));