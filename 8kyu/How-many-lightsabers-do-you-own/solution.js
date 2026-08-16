function howManyLightsabersDoYouOwn(name = "") {

  // Zach is the only programmer who owns lightsabers.
  // He owns exactly 18 lightsabers.
  if (name === "Zach") {
    return 18;
  }

  // Every other programmer owns 0 lightsabers.
  return 0;
}

console.log(howManyLightsabersDoYouOwn("Atul Aujla"));