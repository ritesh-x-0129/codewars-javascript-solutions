function reverse(string) {

  // Split the string into words, reverse their order,
  // and join them back with a single space
  let rev = string.split(" ").reverse().join(" ");

  return rev;
}

console.log(reverse("Everyone should learn Coding"));