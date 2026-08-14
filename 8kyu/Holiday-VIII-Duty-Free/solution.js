function dutyFree(normPrice, discount, hol) {

  // Calculate the amount saved on one bottle
  let result = normPrice * discount / 100;

  // Calculate how many bottles are needed to cover the holiday cost
  let saving = hol / result;

  // Round down because only complete bottles can be purchased
  return Math.floor(saving);
}

console.log(dutyFree(500, 10, 4));