function revrot(str, sz) {

  // Invalid chunk size, empty string, or chunk size larger than
  // the input string means no valid chunks can be created.
  if (sz <= 0 || str === "" || sz > str.length) {
    return "";
  }

  let result = "";

  // Process the string one chunk of size sz at a time.
  for (let i = 0; i < str.length; i += sz) {

    // Extract the current chunk.
    let chunk = str.slice(i, i + sz);

    // Ignore the remaining characters if they don't form
    // a complete chunk of the required size.
    if (chunk.length < sz) {
      break;
    }

    let sum = 0;

    // Calculate the sum of all digits in the current chunk.
    for (let j = 0; j < chunk.length; j++) {
      sum += Number(chunk[j]);
    }

    // Even digit sum → reverse the chunk.
    if (sum % 2 === 0) {
      result += chunk.split("").reverse().join("");
    }

    // Odd digit sum → rotate the chunk one position to the left.
    else {
      result += chunk.slice(1) + chunk[0];
    }
  }

  return result;
}

console.log(revrot("563000655734469485", 4));