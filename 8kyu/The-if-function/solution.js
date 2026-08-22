function _if(bool, func1, func2) {

  // Check whether the first argument is truthy.
  if (bool) {

    // Execute the second function when the condition is truthy.
    func1();

  } else {

    // Execute the third function when the condition is falsy.
    func2();
  }
}

console.log(
  _if(
    20,
    () => console.log("Truthy"),
    () => console.log("Falsy")
  )
);