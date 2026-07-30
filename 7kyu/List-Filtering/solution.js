function filter_list(list) {

  // Keep only the numbers from the array
  return list.filter(item => typeof item === "number");
}

console.log(filter_list([1, 2, "aasf", "1", "123", 123]));