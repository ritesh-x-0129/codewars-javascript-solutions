function getLength(arr) {

  // Return the number of elements in the array
  return arr.length;
}

console.log(getLength([1, 2, 3, 4, 5]));

function getFirst(arr) {

  // Return the first element using index 0
  return arr[0];
}

console.log(getFirst([1, 2, 3, 4, 5]));

function getLast(arr) {

  // Return the last element using the array length
  return arr[arr.length - 1];
}

console.log(getLast([1, 2, 3, 4, 5]));

function pushElement(arr) {

  // Add 6 to the end of the array
  arr.push(6);

  return arr;
}

console.log(pushElement([1, 2, 3, 4, 5]));

function popElement(arr) {

  // Remove the last element from the array
  arr.pop();

  return arr;
}

console.log(popElement([1, 2, 3, 4, 5]));