function stray(numbers) {

  let result = 0;

  // XOR each number with the result.
  // Equal numbers cancel each other out because:
  // x ^ x = 0 and 0 ^ x = x.
  // Therefore, only the unique number remains.
  for (let i = 0; i < numbers.length; i++) {
    result = result ^ numbers[i];
  }

  return result;
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]));