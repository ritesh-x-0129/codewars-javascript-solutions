function sumCubes(n) {
    
  let result = 0;
  let i = 1;

  // Add the cube of each number from 1 to n.
  while (i <= n) {
    result += i ** 3;
    i++;
  }

  return result;
}

console.log(sumCubes(8));