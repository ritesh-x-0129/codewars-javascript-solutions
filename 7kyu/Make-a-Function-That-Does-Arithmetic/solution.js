function arithmetic(a, b, operator) {
    
  // Map each operator to its corresponding arithmetic function.
  const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };

  return operations[operator](a, b);
}

console.log(arithmetic(6, 2, "subtract"));