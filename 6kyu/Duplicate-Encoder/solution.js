function duplicateEncode(word) {

  let result = "";
  let str = word.toLowerCase();

  // Count each character and encode it based on its frequency.
  for (let i = 0; i < str.length; i++) {

    let count = 0;

    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }

    if (count > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }

  return result;
}

console.log(duplicateEncode("success"));