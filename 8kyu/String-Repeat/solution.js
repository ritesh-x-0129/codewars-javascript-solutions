function repeatStr(n, s) {
  let result = "";

  // Append the string n times.
  for (let i = 0; i < n; i++) {
    result += s;
  }

  return result;
}

console.log(repeatStr(7, "Hello-World "));