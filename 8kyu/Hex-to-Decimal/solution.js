function hexToDec(hexString) {

  let sign = 1;

  // Handle negative hexadecimal numbers
  if (hexString[0] === '-') {
    sign = -1;
    hexString = hexString.slice(1);
  }

  let decimal = 0;

  // Convert each hexadecimal digit into its decimal value
  for (let c of hexString) {
    let value;

    if (c >= '0' && c <= '9') {
      value = Number(c);
    } else {
      // Convert A-F/a-f into values 10-15
      value = c.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 10;
    }

    // Shift the previous value by base 16 and add the current digit
    decimal = decimal * 16 + value;
  }

  return decimal * sign;
}