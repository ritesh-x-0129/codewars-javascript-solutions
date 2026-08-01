function removeSmallest(numbers) {

  // Return an empty array if the input array is empty
  if (numbers.length === 0) {
    return [];
  }

  // Find the smallest value in the array
  let smallest = Math.min(...numbers);

  // Get the index of its first occurrence
  let index = numbers.indexOf(smallest);

  // Return a new array without the first smallest element
  return numbers.filter((value, i) => i !== index);
}

console.log(removeSmallest([1, 2, 3, 4, 5]));