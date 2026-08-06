function isValidWalk(walk) {

  // A valid walk must contain exactly 10 blocks
  if (walk.length !== 10) {
    return false;
  }

  let x = 0;
  let y = 0;

  // Track the final position based on each direction
  for (const direction of walk) {
    if (direction === 'n') y++;
    if (direction === 's') y--;
    if (direction === 'e') x++;
    if (direction === 'w') x--;
  }

  // The walk is valid only if we return to the starting point
  return x === 0 && y === 0;
}

console.log(
  isValidWalk(['n', 's', 'n', 's', 'e', 'w', 'e', 'w', 'n', 's'])
);