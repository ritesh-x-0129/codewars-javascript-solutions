function mxdiflg(a1, a2) {

  // If either array is empty, no length difference can be calculated.
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  // Convert both arrays into arrays containing only string lengths.
  let arr1 = a1.map(x => x.length);
  let arr2 = a2.map(y => y.length);

  // Calculate the difference between the shortest string of one array
  // and the longest string of the other array.
  let final1 = Math.min(...arr1) - Math.max(...arr2);
  let final2 = Math.min(...arr2) - Math.max(...arr1);

  // Take the absolute values and return the larger difference.
  let result = Math.max(Math.abs(final1), Math.abs(final2));

  return result;
}

console.log( mxdiflg(
    ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],
    
    [ "cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  )
);