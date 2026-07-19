const sequenceSum = (begin, end, step) => {

  // If the sequence is invalid, return 0.
  if (begin > end) {
    return 0;
  }

  let sum = 0;

  // Add every value in the sequence using the given step.
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }

  // Return the total sum.
  return sum;
};

console.log(sequenceSum(1, 5, 3));