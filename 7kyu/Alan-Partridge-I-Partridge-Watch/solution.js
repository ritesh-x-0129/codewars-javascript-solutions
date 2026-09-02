function part(x) {

  let arr = ["Partridge", "PearTree", "Chat", "Dan", "Toblerone", "Lynn", "AlphaPapa", "Nomad"];
  let result = "";
  let count = 0;

  // Check each term and count the Alan-related terms.
  for (let i = 0; i < x.length; i++) {
    if (arr.includes(x[i])) {
      count++;
    }
  }

  if (count === 0) {
    result = "Lynn, I've pierced my foot on a spike!!";
  } else {
    result = "Mine's a Pint" + "!".repeat(count);
  }

  return result;
}

console.log(part(["Partridge", "Hello", "Nomad", "Lynn"]));