function problem(x) {

  // Return "Error" if the input is a string
  if (typeof x === "string") {
    return "Error";
  }

  // Multiply the value by 50 and add 6
  let a = x * 50 + 6;

  return a;
}

console.log(problem(6));