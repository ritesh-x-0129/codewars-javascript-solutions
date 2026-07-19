function countSheeps(sheep) {

  let count = 0;

  // Count only the sheep that are present (true).
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      count++;
    }
  }

  // Return the total number of sheep.
  return count;
}

console.log(
  countSheeps([
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
  ])
);