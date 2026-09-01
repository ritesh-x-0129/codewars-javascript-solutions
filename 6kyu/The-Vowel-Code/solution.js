function encode(string) {

  // Replace each lowercase vowel with its corresponding number.
  return string.replace(/[aeiou]/g, function(vowel) {
    return { a: "1", e: "2", i: "3", o: "4", u: "5" }[vowel];
  });
}

function decode(string) {

  // Replace each number with its corresponding vowel.
  return string.replace(/[1-5]/g, function(number) {
    return { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" }[number];
  });
}