
// Each number function returns the number directly
// when no operation is provided, otherwise it executes the operation.
const zero = (operation) => operation ? operation(0) : 0;
const one = (operation) => operation ? operation(1) : 1;
const two = (operation) => operation ? operation(2) : 2;
const three = (operation) => operation ? operation(3) : 3;
const four = (operation) => operation ? operation(4) : 4;
const five = (operation) => operation ? operation(5) : 5;
const six = (operation) => operation ? operation(6) : 6;
const seven = (operation) => operation ? operation(7) : 7;
const eight = (operation) => operation ? operation(8) : 8;
const nine = (operation) => operation ? operation(9) : 9;

// Each operation function receives the right operand
// and returns a function that performs the operation with the left operand.
const plus = (num) => (n) => n + num;
const minus = (num) => (n) => n - num;
const times = (num) => (n) => n * num;

// Math.floor() performs the required integer division.
const dividedBy = (num) => (n) => Math.floor(n / num);