function longestConsec(strarr, k) {

  // Return an empty string if the input array is empty,
  // k is greater than the array length, or k is not positive.
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return "";
  }

  let longest = "";

  // Start from each possible position where k consecutive
  // strings can be taken from the array.
  for (let i = 0; i <= strarr.length - k; i++) {

    let current = "";

    // Concatenate k consecutive strings starting from index i.
    for (let j = 0; j < k; j++) {
      current += strarr[i + j];
    }

    // Keep the current string if it is longer than
    // the longest string found so far.
    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}

console.log(
  longestConsec(
    ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"],
    2
  )
);