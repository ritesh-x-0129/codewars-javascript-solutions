function peopleWithAgeDrink(old) {

  // Check the age range and return the corresponding drink.
  if (old < 14) {
    return "drink toddy";
  } else if (old < 18) {
    return "drink coke";
  } else if (old < 21) {
    return "drink beer";
  } else {
    return "drink whisky";
  }
}

console.log(peopleWithAgeDrink(43));