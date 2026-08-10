function nbDig(n, d) {

  let result = 0;

  // Generate every square from 0² to n² and count occurrences of digit d
  for (let i = 0; i <= n; i++) {
    const square = i ** 2;
    const squareString = String(square);

    // Check every digit of the squared number
    for (let j = 0; j < squareString.length; j++) {
      if (squareString[j] === String(d)) {
        result++;
      }
    }
  }

  return result;
}

console.log(nbDig(21, 2));