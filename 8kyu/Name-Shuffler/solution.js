function nameShuffler(str) {
  // Reverse the order of the names.
  return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler("john McClane"));