function high(x) {

  // Split the sentence into individual words
  let words = x.split(" ");
  let highestScore = 0;
  let highestWord = "";

  // Check the score of each word
  for (let i = 0; i < words.length; i++) {
    let score = 0;

    // Calculate the score of the current word
    for (let j = 0; j < words[i].length; j++) {
      score += words[i][j].charCodeAt(0) - 96;
    }

    // Update the highest scoring word if needed
    if (score > highestScore) {
      highestScore = score;
      highestWord = words[i];
    }
  }

  return highestWord;
}

console.log(high("man i need a taxi"));