function rot13(message) {
  let result = "";

  for (let i = 0; i < message.length; i++) {
    let ch = message[i];

    // Check if the character is an uppercase letter
    if (ch >= "A" && ch <= "Z") {
      let code = ch.charCodeAt(0);

      // Shift the letter by 13 positions
      code = code + 13;

      // Wrap around if it goes past 'Z'
      if (code > 90) {
        code = code - 26;
      }

      result += String.fromCharCode(code);
    }

    // Check if the character is a lowercase letter
    else if (ch >= "a" && ch <= "z") {
      let code = ch.charCodeAt(0);

      // Shift the letter by 13 positions
      code = code + 13;

      // Wrap around if it goes past 'z'
      if (code > 122) {
        code = code - 26;
      }

      result += String.fromCharCode(code);
    }

    // Keep numbers, symbols, and spaces unchanged
    else {
      result += ch;
    }
  }

  return result;
}

console.log(rot13("Hello"));      // Uryyb
console.log(rot13("Test123!"));   // Grfg123!
console.log(rot13("Why?"));       // Jul?