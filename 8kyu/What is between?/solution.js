function between(a, b) {
  let result = [];

  // Add every number from a to b (inclusive).
  for (let i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
}

console.log(between(1, 4));