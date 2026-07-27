function solution(nums) {
  // Return an empty array if the input is null.
  if (nums === null) {
    return [];
  }

  // Sort the array in ascending order.
  return nums.sort((a, b) => a - b);
}

console.log(solution([1, 2, 10, 50, 5]));