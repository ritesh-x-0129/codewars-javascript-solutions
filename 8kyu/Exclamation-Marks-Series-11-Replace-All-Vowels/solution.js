function replace(s) {

  let vowels = "aeiouAEIOU";
  let result = "";

  // Check each character and replace vowels with "!".
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      result += "!";
    } else {
      result += s[i];
    }
  }

  return result;
}

console.log(replace("Appple"));