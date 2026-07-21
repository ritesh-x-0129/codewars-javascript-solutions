function isPalindrome(str) {

  // Convert the string to lowercase for case-insensitive comparison.
  const lowerCaseStr = str.toLowerCase();

  // Compare the original string with its reversed version.
  return lowerCaseStr === lowerCaseStr.split("").reverse().join("");
}

console.log(isPalindrome("racer"));