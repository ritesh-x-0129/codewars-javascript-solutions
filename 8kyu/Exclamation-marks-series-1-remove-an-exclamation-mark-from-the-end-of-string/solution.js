function remove(string) {

  // Check whether the last character is an exclamation mark.
  // If it is not, return the original string unchanged.
  if (string[string.length - 1] !== "!") {
    return string;
  }

  // Remove only the last character from the string.
  let result = string.split("").slice(0, -1).join("");

  return result;
}

console.log(remove("Hi!!!"));