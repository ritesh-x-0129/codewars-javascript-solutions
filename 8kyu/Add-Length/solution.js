function addLength(str) {

  let len = str.split(" ");
  let result = [];

  // Add the length of each word to the same word
  for (let char of len) {
    result.push(char + " " + char.length);
  }

  return result;
}

console.log(addLength("you will win"));