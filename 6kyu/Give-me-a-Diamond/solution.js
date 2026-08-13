function diamond(n) {

  // Diamond is impossible for zero, negative, or even numbers
  if (n <= 0 || n % 2 === 0) return null;

  let result = "";

  // Build the upper half including the middle line
  for (let i = 1; i <= n; i += 2) {
    const spaces = " ".repeat((n - i) / 2);

    // Add spaces + stars + newline for each row
    result += spaces + "*".repeat(i) + "\n";
  }

  // Build the lower half without repeating the middle line
  for (let i = n - 2; i >= 1; i -= 2) {
    const spaces = " ".repeat((n - i) / 2);

    result += spaces + "*".repeat(i) + "\n";
  }

  return result;
}

console.log(diamond(12));