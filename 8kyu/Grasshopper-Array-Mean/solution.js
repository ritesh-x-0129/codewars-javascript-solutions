function findAverage(nums) {

  let result = 0;

  // Add each number's contribution to calculate the average
  for (let i = 0; i < nums.length; i++) {
    result += nums[i] / nums.length;
  }

  return result;
}

console.log(findAverage([3, 5, 7, 2, 8, 6]));