function plural(n) {
  // Return false only when the number is exactly 1.
  if (n == 1) {
    return false;
  } else {
    return true;
  }
}

console.log(plural(5));