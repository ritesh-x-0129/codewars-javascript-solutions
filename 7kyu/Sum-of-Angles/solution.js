function angle(n) {

  // Calculate the sum of interior angles of an n-sided polygon.
  let sumOfAngles = (n - 2) * 180;

  return sumOfAngles;
}

console.log(angle(5));