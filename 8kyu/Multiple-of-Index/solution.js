function multipleOfIndex(array) {

  let newArr = [];

  // Check every element against its index.
  for (let i = 0; i < array.length; i++) {

    // Index 0 cannot normally be used as a divisor.
    // The kata specifically allows 0 at index 0.
    if (i === 0 && array[i] === 0) {
      newArr.push(array[0]);

    // For all other indexes, check whether the element
    // is exactly divisible by its own index.
    } else if (array[i] % i === 0) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

console.log(
  multipleOfIndex([
    -56, -85, 72, -26, -14, 76, -27, 72,
    35, -21, -67, 87, 0, 21, 59, 27, -92, 68
  ])
);