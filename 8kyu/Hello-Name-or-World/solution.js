function hello(name) {
  
  // Return the default greeting if no name is provided
  if (name === "" || name === undefined) {
    return "Hello, World!";
  }

  // Capitalize the first letter and lowercase the remaining letters
  let naam = name[0].toUpperCase() + name.slice(1).toLowerCase();

  return `Hello, ${naam}!`;
}

console.log(hello("Peter"));