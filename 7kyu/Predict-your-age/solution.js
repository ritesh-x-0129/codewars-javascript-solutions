function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {

  let result = 0;

  // Store all great-grandparents' ages in an array
  // so they can be processed using a loop.
  let ages = [age1, age2, age3, age4, age5, age6, age7, age8];

  // Square each age and add it to the total.
  for (let age of ages) {
    let sqrt = age * age;
    result += sqrt;
  }

  // Take the square root of the total and divide it by 2
  // according to the grandfather's formula.
  let root = Math.sqrt(result) / 2;

  // Round the final result down to the nearest integer.
  let floor = Math.floor(root);

  return floor;
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));