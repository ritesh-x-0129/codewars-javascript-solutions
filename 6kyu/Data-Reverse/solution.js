function dataReverse(data) {
  let result = [];

  for (let i = data.length - 8; i >= 0; i -= 8) {
    result.push(...data.slice(i, i + 8));
  }

  return result;
}