var number = function(array) {

  let result = [];

  // Add the line number before each string
  for (let i = 0; i < array.length; i++) {
    let line = `${i + 1}: ${array[i]}`;
    result.push(line);
  }

  return result;
};

console.log(number(["a", "b", "c"]));