var maxSequence = function(arr){
 
  let maxSum = 0;
  let currentSum = 0;
  
  // If the array is empty, return 0
  if(arr.length === 0) {
    return 0;
  }
  else {
    
    // Traverse the array and apply Kadane's Algorithm
    for(let i = 0; i < arr.length; i++) {
      currentSum = currentSum + arr[i];
      
      // Update the maximum sum found so far
      if(currentSum > maxSum) {
        maxSum = currentSum;
      }
      
      // Reset the current sum if it becomes negative
      else if(currentSum < 0) {
        currentSum = 0;
      }
    }
  }
  
  return maxSum;
}

console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3]));