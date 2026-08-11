function checkExam(array1, array2) {

  let total = 0;

  // Check each student's answer
  for (let i = 0; i < array1.length; i++) {

    // Blank answer gives 0 points
    if (array2[i] === "") {
      total += 0;
    }

    // Correct answer gives +4 points
    else if (array1[i] === array2[i]) {
      total += 4;
    }

    // Incorrect answer gives -1 point
    else {
      total -= 1;
    }
  }

  // Score cannot be negative
  if (total < 0) {
    return 0;
  }

  return total;
}

console.log(checkExam(["a", "a", "b", "d"], ["a", "c", "b", ""]));