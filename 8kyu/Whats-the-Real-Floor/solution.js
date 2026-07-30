function getRealFloor(n) {

  // Basement floors remain the same
  if (n <= 0) {
    return n;
  }

  // Floors below 13 shift down by 1
  if (n < 13) {
    return n - 1;
  }

  // Floors 13 and above shift down by 2
  return n - 2;
}

console.log(getRealFloor(4));