function binToDec(bin) {

  let ans = 0;

  // Process each binary digit from left to right
  for (let bit of bin) {

    // Shift the current value left by one binary place
    ans = ans * 2;

    // Add 1 if the current bit is '1'
    if (bit === '1') {
      ans++;
    }
  }

  return ans;
}

console.log(binToDec("1011"));