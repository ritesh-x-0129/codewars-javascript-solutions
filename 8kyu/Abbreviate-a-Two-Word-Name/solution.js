function abbrevName(name) {

  // Split the name into the two words.
  let words = name.split(" ");

  // Take the first letter of each word, convert them to uppercase,
  // and join them with a dot to create the initials.
  return words[0][0].toUpperCase() + "." + words[1][0].toUpperCase();
}

console.log(abbrevName("Florence Pugh"));