function smallEnough(a, limit) {

  // Check if every value is within the given limit.
  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) {
      return false;
    }
  }

  return true;
}

console.log(smallEnough([43, 64, 85, 35, 6, 10, 53, 19], 100));