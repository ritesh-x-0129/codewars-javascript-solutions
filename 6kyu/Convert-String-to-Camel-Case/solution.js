function toCamelCase(str) {

  // Split the string using both hyphen and underscore as delimiters
  let words = str.split(/[-_]/g);

  // Capitalize the first letter of every word except the first one
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  // Join all words without any separator
  return words.join("");
}

console.log(toCamelCase("the-stealth-warrior"));