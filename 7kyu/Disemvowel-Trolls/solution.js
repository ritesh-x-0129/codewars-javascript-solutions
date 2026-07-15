// 1) Method. 

function disemvowel(str) {

  let result = "";
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {

    // Keep only the characters that are not vowels.
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }

  return result;
}

console.log(disemvowel("This website is for losers LOL!"));






// 2) Method - by Regex (Regular Expressions).

//    g → Remove all matches.
//    i → Case-insensitive (A and a both match).

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");               
}