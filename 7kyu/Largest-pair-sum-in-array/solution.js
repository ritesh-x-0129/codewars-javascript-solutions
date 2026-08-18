function largestPairSum(numbers) {

  // Sort the numbers in descending order so that
  // the two largest values are placed at index 0 and 1.
  numbers.sort((a, b) => b - a);

  // Add the two largest numbers to get the largest pair sum.
  let result = numbers[0] + numbers[1];

  return result;
}

console.log(largestPairSum([99, 2, 2, 23, 19]));