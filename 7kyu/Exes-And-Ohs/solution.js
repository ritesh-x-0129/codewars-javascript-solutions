function XO(str) {
  let word = str.toLowerCase();
  let oCount = 0;
  let xCount = 0;

  // Count x's and o's case-insensitively
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "o") {
      oCount++;
    } else if (word[i] === "x") {
      xCount++;
    }
  }

  return oCount === xCount;
}

console.log(XO("ooxx"));