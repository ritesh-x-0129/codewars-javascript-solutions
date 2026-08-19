function twoDecimalPlaces(n) {

  // Round the number to two decimal places using toFixed().
  // Number() converts the formatted string back into a number.
  let result = Number(n.toFixed(2));

  return result;
}

console.log(twoDecimalPlaces(5.5589));