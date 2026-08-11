function expandedForm(num) {

  let digit = String(num).split("");
  let result = [];

  // Process each digit according to its place value
  for (let i = 0; i < digit.length; i++) {

    // Ignore digits that are zero
    if (digit[i] !== "0") {

      let zeros = digit.length - i - 1;
      let expanded = digit[i] + "0".repeat(zeros);

      result.push(expanded);
    }
  }

  // Join each expanded value with " + "
  return result.join(" + ");
}

console.log(expandedForm(798495));