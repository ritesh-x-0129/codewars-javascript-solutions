function countBy(x, n) {
  const multiples = [];

  // Generate the first n multiples of x.
  for (let i = 1; i <= n; i++) {
    multiples.push(x * i);
  }

  return multiples;
}

console.log(countBy(2, 7));