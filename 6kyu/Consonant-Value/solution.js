function solve(s) {
  let vowels = "aeiou";
  let max = 0;
  let count = 0;

  // Reset on vowels and accumulate consonant values
  for (let char of s) {
    if (vowels.includes(char)) {
      count = 0;
    } else {
      count += char.charCodeAt(0) - 96;

      if (count > max) {
        max = count;
      }
    }
  }

  return max;
}

console.log(solve("strength"));