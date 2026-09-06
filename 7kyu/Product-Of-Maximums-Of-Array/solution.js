function maxProduct(numbers, size){ 
  
  let result = 1;
  let desc = numbers.sort((a, b) => b - a);

  // Multiply the k largest numbers.
  for(let i = 0; i < size; i++) {
    result = result * desc[i];
  }
  
  return result;
}

console.log(maxProduct([2, 5, 10, 3, 7], 3));