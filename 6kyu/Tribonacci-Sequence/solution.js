function tribonacci(signature, n) {

  if (n === 0) {
    return [];
  } 
  else if (n === 1) {
    return signature.slice(0, 1);
  }
  else if (n === 2) {
    return signature.slice(0, 2);
  }
  else if (n === 3) {
    return signature.slice(0, 3);
  }

  let result = [...signature];

  // Add the last three numbers until we have n elements.
  while (result.length < n) {
    let sum = result[result.length - 3] 
            + result[result.length - 2] 
            + result[result.length - 1];

    result.push(sum);
  }

  return result;
}

console.log(tribonacci([1, 1, 1], 10));