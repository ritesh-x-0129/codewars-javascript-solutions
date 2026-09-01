var greet = function(name) {

  // Capitalize the first letter and convert the remaining letters to lowercase.
  let result = name[0].toUpperCase() + name.slice(1).toLowerCase();

  return `Hello ${result}!`;
};

console.log(greet("Lorance"));