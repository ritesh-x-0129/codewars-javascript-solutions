function highestRank(arr) {
  let result = 0;
  let highest = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    // Update if frequency is higher or if tied, number is larger
    if (count > highest || (count === highest && arr[i] > result)) {
      highest = count;
      result = arr[i];
    }
  }

  return result;
}

console.log(
  highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])
);