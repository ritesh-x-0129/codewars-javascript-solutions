function titleCase(title, minorWords) {

  // Return an empty string if the title is empty
  if (title === "") {
    return "";
  }

  // Convert minor words to lowercase and store them in an array
  let lower = minorWords ? minorWords.toLowerCase().split(" ") : [];

  // Convert the title into title case
  let str = title.toLowerCase().split(" ").map((words, index) => {

    // Always capitalize the first word
    if (index === 0) {
      return words[0].toUpperCase() + words.slice(1).toLowerCase();
    }

    // Keep minor words in lowercase (except the first word)
    else if (lower.includes(words)) {
      return words.toLowerCase();
    }

    // Capitalize all other words
    else {
      return words[0].toUpperCase() + words.slice(1).toLowerCase();
    }
  });

  // Join the words back into a single string
  let char = str.join(" ");
  return char;
}

console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));