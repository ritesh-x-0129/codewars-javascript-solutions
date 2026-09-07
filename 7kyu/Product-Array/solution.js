function productArray(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    let product = 1;

    // Multiply all elements except the current index
    for (let j = 0; j < numbers.length; j++) {
      if (j !== i) {
        product *= numbers[j];
      }
    }

    result.push(product);
  }

  return result;
}

console.log(productArray([10, 3, 5, 6, 2]));