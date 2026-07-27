function mouthSize(animal) {
  // Convert the animal name to lowercase for case-insensitive comparison.
  let str = animal.toLowerCase();

  if (str === "alligator") {
    return "small";
  } else {
    return "wide";
  }
}

console.log(mouthSize("alligator"));