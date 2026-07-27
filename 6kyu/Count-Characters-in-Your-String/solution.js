function count(string) {

  // Return an empty object if the string is empty.
  if (string === "") {
    return {};
  }

  let counts = {};

  // Count the occurrences of each character.
  for (let i = 0; i < string.length; i++) {
    if (string[i] in counts) {
      counts[string[i]]++;
    } else {
      counts[string[i]] = 1;
    }
  }
  return counts;
}

console.log(count("Apple"));