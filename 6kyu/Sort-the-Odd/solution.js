function sortArray(array) {

  let odds = [];
  let k = 0;

  // Store all odd numbers in a separate array
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odds.push(array[i]);
    }
  }

  // Sort only the odd numbers in ascending order
  odds.sort((a, b) => a - b);

  // Place the sorted odd numbers back into their original positions
  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 !== 0) {
      array[j] = odds[k];
      k++;
    }
  }

  return array;
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));