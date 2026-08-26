function basicOp(operation, value1, value2) {

  // Check which mathematical operation was provided
  // and perform that operation on the two values.
  if (operation === "+") {
    return value1 + value2;

  } else if (operation === "-") {
    return value1 - value2;

  } else if (operation === "*") {
    return value1 * value2;

  } else if (operation === "/") {
    return value1 / value2;
  }
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));