function factorial(n) {
  
  let result = 1;
  
  // Check if input is within the valid range
  if(n < 0 || n > 12) {
    throw new RangeError("Number should be between 0 and 12")
  } 
  // Factorial of 0 is always 1
  else if(n === 0) {
    return 1
  } 
  else {
    // Multiply all numbers from 1 to n
    for(let i = 1; i <= n; i++) {
     result = result * i 
    }
  }
  return result
}

console.log(factorial(7))