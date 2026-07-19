function findOdd(num) {
  
  let result = 0;
  
   // Check each number in the array.
  for(let i = 0; i < num.length; i++) {
    let count = 0;

    // Count how many times the current number appears.
    for(let j = 0; j < num.length; j++) {
      if(num[i] === num[j]) {
        count++
      }      
    }

     // Return the number if it appears an odd number of times.
    if(count % 2 !== 0) {
      result = num[i]
    }
  }
  
  return result;
}

console.log( findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))