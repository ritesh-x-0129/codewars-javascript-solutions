function minValue(values) {
  let unique = Number(
    [...new Set(values)].sort((a, b) => a - b).join("")
  );

  return unique;
}

console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]));