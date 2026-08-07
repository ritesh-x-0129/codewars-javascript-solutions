function split(str, mask) {

  // Check whether the mask lengths match the string length
  const arrSum = mask.reduce((acc, length) => acc + length, 0);

  if (str.length !== arrSum) {
    return null;
  }

  let result = [];
  let start = 0;

  // Split the string according to each length in the mask
  for (const length of mask) {
    const part = str.slice(start, start + length);

    start += length;
    result.push(part);
  }

  return result;
}

console.log(split("1234567890", [3, 3, 4]));