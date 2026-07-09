var ownedCatAndDog = function(catYears, dogYears) {

  let ownedCat = 0;
  let ownedDog = 0;

  // Cat
  if (catYears < 15) {
    ownedCat = 0;
  }
  else if (catYears < 24) {
    ownedCat = 1;
  }
  else {
    let remainingAge = catYears - 24;
    ownedCat = Math.floor(remainingAge / 4) + 2;
  }

  // Dog
  if (dogYears < 15) {
    ownedDog = 0;
  }
  else if (dogYears < 24) {
    ownedDog = 1;
  }
  else {
    let remainingAge = dogYears - 24;
    ownedDog = Math.floor(remainingAge / 5) + 2;
  }

  return [ownedCat, ownedDog];
};