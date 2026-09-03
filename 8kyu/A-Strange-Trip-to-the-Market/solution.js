function isLochNessMonster(s) {

  // Check if the string contains any valid Nessie phrase.
  return /tree fiddy|3\.50|three fifty/.test(s);
}

console.log(isLochNessMonster("This is not correct"));