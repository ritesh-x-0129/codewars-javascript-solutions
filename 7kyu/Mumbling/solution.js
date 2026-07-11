function accum(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + "-";
  }

  return result.slice(0, -1);   // Remove the last "-" added during the loop
}