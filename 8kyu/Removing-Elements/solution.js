function removeEveryOther(arr) {

  // Keep only the elements at even indexes.
  let result =  arr.filter((element, index) => index % 2 === 0);
  return result;

}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));