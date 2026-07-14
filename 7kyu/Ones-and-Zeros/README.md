# Question: Ones and Zeros

## Difficulty

**7kyu**

---

## Description

Given an array of `0`s and `1`s, convert the binary representation into its equivalent decimal (integer) value.

---

## Example

```javascript
binaryArrayToNumber([0, 0, 0, 1]); // 1
binaryArrayToNumber([1, 0, 1, 1]); // 11
binaryArrayToNumber([1, 1, 1, 1]); // 15
```

---

## Approach

- Join the array elements into a binary string.
- Convert the binary string into a decimal number using `parseInt()` with base `2`.
- Return the decimal value.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(n)**

---

## Language

JavaScript (ES6+)