function countPositivesSumNegatives(input) {

    // 👇 This line handle the empty or Null array.
  if (!input || input.length === 0) {
    return [];
  }

  let result = [0, 0];

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      result[0]++;
    }
     else if (input[i] < 0) {
      result[1] += input[i];
    }
  }

  return result;
}