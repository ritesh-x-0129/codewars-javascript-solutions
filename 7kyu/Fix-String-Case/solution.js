function solve(s) {

  let upper = 0;
  let lower = 0;

  // Count the number of uppercase and lowercase characters
  for (let char of s) {
    if (char === char.toUpperCase()) {
      upper++;
    } else {
      lower++;
    }
  }

  // Use uppercase only when uppercase characters are more; otherwise use lowercase
  if (upper > lower) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}

console.log(solve("cOdE"));