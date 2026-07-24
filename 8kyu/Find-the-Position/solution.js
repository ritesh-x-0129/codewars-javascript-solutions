function position(letter) {
    
  // Convert the letter to its alphabet position.
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

console.log(position("a"));