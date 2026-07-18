function rentalCarCost(d) {

  const rent = d * 40;

  // Apply a $50 discount for rentals of 7 or more days.
  if (d >= 7) {
    return rent - 50;
  }

  // Apply a $20 discount for rentals of 3 to 6 days.
  if (d >= 3) {
    return rent - 20;
  }

  // No discount for rentals shorter than 3 days.
  return rent;
}

console.log(rentalCarCost(11));