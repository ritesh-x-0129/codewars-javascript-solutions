function sequenceSum(begin, end, step) {

  // Return 0 if the sequence cannot be formed.
  if ((begin > end && step > 0) || (begin < end && step < 0)) {
    return 0;
  }

  // Calculate the total number of terms.
  const terms = Math.floor((end - begin) / step) + 1;

  // Find the last valid term in the sequence.
  const lastTerm = begin + (terms - 1) * step;

  // Apply the arithmetic progression (AP) sum formula.
  return (terms * (begin + lastTerm)) / 2;
}

console.log(sequenceSum(2, 6, 2));