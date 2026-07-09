function fakeBin(x) {

  let result = "";
  let digits = x.split("");

  for (let i = 0; i < digits.length; i++) {   
    if (digits[i] < 5) {
      result += "0";
    } else {
      result += "1";
    }
  }

  return result;
}