function longest(s1, s2) {

  let combined = s1 + s2;
  let uniqueChars = "";

  for (let i = 0; i < combined.length; i++) {

    // Add the character only if it hasn't appeared before.
    if (!uniqueChars.includes(combined[i])) {
      uniqueChars += combined[i];
    }

  }

  return uniqueChars.split("").sort().join("");
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));