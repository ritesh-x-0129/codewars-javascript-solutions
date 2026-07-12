function nbYear(p0, percent, aug, p) {

  let years = 0;

  while (p0 < p) {

    // Update the population after one year.
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);

    years++;
  }

  return years;
}

console.log(nbYear(1000, 2, 70, 1500));