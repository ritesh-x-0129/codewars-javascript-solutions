// Solution - 1.

function checkForFactor(base, factor) {
  return base % factor === 0;
}




// Solution - 2.

function checkForFactor(base, factor) {
  if (base % factor === 0) {
    return true;
  } else {
    return false;
  }
}