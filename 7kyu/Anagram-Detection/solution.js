// Check whether two strings are anagrams of each other.
var isAnagram = function (test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();

  let str1 = test.split("").sort().join("");
  let str2 = original.split("").sort().join("");

  if (str1 === str2) {
        return true;
} else {
        return false;
    }
};

console.log(isAnagram("foefet", "toffee"));