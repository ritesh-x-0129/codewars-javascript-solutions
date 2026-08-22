function isPangram(string) {

  // Convert the string to lowercase so uppercase and lowercase
  // letters are treated the same.
  let str = string.toLowerCase();

  // Store all 26 letters of the English alphabet.
  let alphabets = "abcdefghijklmnopqrstuvwxyz";

  // Check every alphabet letter one by one.
  for (let i = 0; i < alphabets.length; i++) {

    // If the current letter is missing, the string is not a pangram.
    if (str.includes(alphabets[i])) {
      // Finding one letter is not enough; all 26 letters must be present.
      // Therefore, true is returned only after the loop completes.
    } else {
      return false;
    }
  }

  // Every alphabet letter was found.
  return true;
}

console.log(
  isPangram("The quick brown fox jumps over the lazy dog")
);