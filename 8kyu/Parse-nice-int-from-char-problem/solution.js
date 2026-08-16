function getAge(inputString) {

  // The first character is always the girl's age.
  let str = inputString.slice(0, 1);

  // Convert the age from a string character to an integer.
  let num = Number(str);

  return num;
}

console.log(getAge("5 years old"));