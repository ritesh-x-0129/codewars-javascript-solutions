var capitals = function (word) {

  let result = [];
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Check every character and store the index of uppercase letters
  for (let i = 0; i < word.length; i++) {
    if (alphabets.includes(word[i])) {
      result.push(i);
    }
  }

  return result;
};

console.log(capitals("CodEWaRs"));