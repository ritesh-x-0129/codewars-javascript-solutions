function mix(s1, s2) {

  // Count the frequency of lowercase letters in a string.
  const count = (str) => {

    // Create an array with one position for each letter (a-z).
    const freq = Array(26).fill(0);

    // Check every character in the string.
    for (const ch of str) {

      // Only count lowercase English letters.
      if (ch >= "a" && ch <= "z") {

        // Convert the character into a zero-based alphabet index
        // and increase its frequency.
        freq[ch.charCodeAt(0) - 97]++;
      }
    }

    return freq;
  };

  // Get the frequency of every lowercase letter in both strings.
  const c1 = count(s1);
  const c2 = count(s2);

  const result = [];

  // Compare the frequency of every letter from a to z.
  for (let i = 0; i < 26; i++) {

    // Find the maximum occurrence of the current letter.
    const max = Math.max(c1[i], c2[i]);

    // Ignore letters that occur only once or not at all.
    if (max <= 1) continue;

    // Convert the alphabet index back into a letter.
    const letter = String.fromCharCode(97 + i);

    let prefix;

    // If both strings contain the same maximum frequency,
    // use "=:" as the prefix.
    if (c1[i] === c2[i]) {
      prefix = "=";

    // If string 1 contains more occurrences, use "1:".
    } else if (c1[i] > c2[i]) {
      prefix = "1:";

    // Otherwise, string 2 contains more occurrences.
    } else {
      prefix = "2:";
    }

    // Add the prefix and repeated letter to the result.
    result.push(prefix + letter.repeat(max));
  }

  // Sort by decreasing length first.
  // If lengths are equal, sort lexicographically.
  result.sort((a, b) => {
    if (b.length !== a.length) {
      return b.length - a.length;
    }

    return a < b ? -1 : a > b ? 1 : 0;
  });

  // Join all substrings using "/".
  return result.join("/");
}