function evenNumbers(array, number) {
  let result = [];
  let evenCount = 0;

  // Traverse from the end to collect the last even numbers
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      evenCount++;
      result.push(array[i]);

      if (evenCount === number) {
        break;
      }
    }
  }

  return result.reverse();
}

console.log(
  evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)
);