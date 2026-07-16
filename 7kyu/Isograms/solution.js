//1st method.
function isIsogram(str) {

  const letters = str.toLowerCase();

  for (let i = 0; i < letters.length; i++) {

    // If the current character appears again, it's not an isogram.
    if (letters.slice(i + 1).includes(letters[i])) {
      return false;
    }
  }
  // No duplicate letters were found then return true.
  return true;
}

console.log(isIsogram("Dermatoglyphics"));






// 2nd method.
function isIsogram(str) {
  str = str.toLowerCase();
  return new Set(str).size === str.length;
}