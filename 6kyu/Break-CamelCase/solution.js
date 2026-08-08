function solution(string) {

  let result = "";

  // Add a space before every uppercase letter to break the camelCase words
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result += " " + string[i];
    } else {
      result += string[i];
    }
  }

  return result;
}

console.log(solution("camelCasing"));