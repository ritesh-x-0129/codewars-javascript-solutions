function capitalize(s) {

  let even = "";
  let odd = "";

  // Build two strings by capitalizing even and odd indexes separately
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      even += s[i].toUpperCase();
      odd += s[i].toLowerCase();
    } else {
      odd += s[i].toUpperCase();
      even += s[i].toLowerCase();
    }
  }

  return [even, odd];
}

console.log(capitalize("abcdef"));