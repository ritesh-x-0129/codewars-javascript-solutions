function minimumSteps(numbers, value) {
  let smallest = numbers.sort((a, b) => a - b);

  if (smallest[0] >= value) {
    return 0;
  }

  let result = 1;
  let sum = smallest[0] + smallest[1];

  // Add the next smallest number until sum reaches the target
  for (let i = 2; i < smallest.length; i++) {
    if (sum >= value) {
      break;
    }

    sum += smallest[i];
    result++;
  }

  return result;
}

console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464));