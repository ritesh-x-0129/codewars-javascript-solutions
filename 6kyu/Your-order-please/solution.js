function order(words) {

  // Convert the string into an array of individual words.
  let wordArray = words.split(" ");

  let result = [];

  // Go through each word one by one.
  for (let i = 0; i < wordArray.length; i++) {

    let word = wordArray[i];

    // Check every character in the current word
    // to find the number that determines its position.
    for (let j = 0; j < word.length; j++) {

      let char = word[j];

      // Check whether the current character is a number.
      if (/\d/.test(char)) {

        // Convert the position number from string to number.
        let position = Number(char);

        // Place the word at its correct zero-based index.
        result[position - 1] = word;

        // Stop checking this word once its position is found.
        break;
      }
    }
  }

  // Join the words in their correct order with spaces.
  return result.join(" ");
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));