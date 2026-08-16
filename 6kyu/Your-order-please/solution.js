function order(words) {
  let wordArray = words.split(" ");
  let result = [];

  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i];

    for (let j = 0; j < word.length; j++) {
      let char = word[j];

      // Find the number inside the word.
      // The number tells us the word's position in the result.
      if (/\d/.test(char)) {
        let position = Number(char);

        // Store the word at its correct zero-based index.
        result[position - 1] = word;
        break;
      }
    }
  }

  // Join the words in their correct order.
  return result.join(" ");
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));