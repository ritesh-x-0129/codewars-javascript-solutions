function feast(beast, dish) {
  // The dish is valid only if both the first and last letters match.
  return (
    beast[0] === dish[0] &&
    beast[beast.length - 1] === dish[dish.length - 1]
  );
}

console.log(feast("pizza", "pawa"));