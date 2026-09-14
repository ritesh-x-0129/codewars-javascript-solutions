function sortMyString(s) {
  let odd = "";
  let even = "";

  // Separate characters based on their index
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      even += s[i];
    } else {
      odd += s[i];
    }
  }

  return even + " " + odd;
}

console.log(sortMyString("CodeWars"));