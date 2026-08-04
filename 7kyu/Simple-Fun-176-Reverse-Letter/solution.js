function reverseLetter(str) {

  // Keep only lowercase alphabetic characters
  let result = str.split("").filter((element) => {
    return "abcdefghijklmnopqrstuvwxyz".includes(element);
  }).reverse().join("");

  return result;
}

console.log(reverseLetter("ultr53o?n"));