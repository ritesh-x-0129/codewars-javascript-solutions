function multiplicationTable(size) {

  let result = [];

  // Create each row of the multiplication table
  for (let i = 1; i <= size; i++) {
    let row = [];

    // Fill the current row with multiplication values
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }

    // Add the completed row to the result
    result.push(row);
  }

  return result;
}

console.log(multiplicationTable(3));