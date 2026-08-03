function distinct(a) {

  // Create a Set to remove duplicate values
  let arr = new Set(a);

  // Convert the Set back into an array
  let array = [...arr];

  return array;
}

console.log(distinct([1, 2, 1, 1, 3, 2]));