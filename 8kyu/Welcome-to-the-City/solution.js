function sayHello(name, city, state) {

  // Join all name parts with a space
  let namee = name.join(" ");

  // Return the welcome message
  return `Hello, ${namee}! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(["Ritesh", "Rajput"], "Tokyo", "Japan"));