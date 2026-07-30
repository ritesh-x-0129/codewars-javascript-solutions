function multiTable(number) {

  let result = "";

  // Generate multiplication table from 1 to 10
  for (let i = 1; i <= 10; i++) {
    result += `${i} * ${number} = ${i * number}\n`;
  }

  // Remove the last newline character
  return result.trim();
}

console.log(multiTable(5));