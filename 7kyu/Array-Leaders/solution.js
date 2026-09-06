function arrayLeaders(numbers) {
  let leaders = [];
  let rightSum = 0;

  // Traverse from right to left and track the sum of elements on the right.
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] > rightSum) {
      leaders.push(numbers[i]);
    }

    rightSum += numbers[i];
  }

  return leaders.reverse();
}

console.log(arrayLeaders([16, 17, 4, 3, 5, 2]));