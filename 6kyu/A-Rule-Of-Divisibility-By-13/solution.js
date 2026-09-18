function thirt(n) {
  const weights = [1, 10, 9, 12, 3, 4];

  while (true) {
    let num = n;
    let sum = 0;
    let i = 0;

    while (num > 0) {
      const digit = num % 10;
      sum += digit * weights[i % 6];
      num = Math.floor(num / 10);
      i++;
    }

    if (sum === n) {
      return n;
    }

    n = sum;
  }
}