function pipeFix(num) {

  const result = [];

  // Add every number from the minimum to the maximum value.
  for (let i = num[0]; i <= num[num.length - 1]; i++) {
    result.push(i);
  }

  return result;
}

console.log(pipeFix([1, 3, 5, 6, 7, 8]));