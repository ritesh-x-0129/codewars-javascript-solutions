function toBinary(n) {

  // Convert the number to its binary representation using base 2.
  let binary = n.toString(2);

  // Convert the binary string back into a number.
  return Number(binary);
}

console.log(toBinary(5));