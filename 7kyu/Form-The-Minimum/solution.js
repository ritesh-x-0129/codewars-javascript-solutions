function minValue(values) {

  // Remove duplicates, sort the digits, and combine them into a number.
  let result = Number([...new Set(values)].sort((a, b) => a - b).join(""));

  return result;
}

console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]));