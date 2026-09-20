function switcheroo(x) {
  return x
    .split('')
    .map(char => char === 'a' ? 'b' : char === 'b' ? 'a' : char)
    .join('');
}