function uniqueInOrder(iterable) {
  let result = [];

  // Add an element only if it is different from the previous one.
  for (let value of iterable) {
    
    if (value !== result[result.length - 1]) {
      result.push(value);
    }
  }

  return result;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));