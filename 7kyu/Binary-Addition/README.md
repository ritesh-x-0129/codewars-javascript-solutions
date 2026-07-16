# Question: Binary Addition

## Difficulty

**7kyu**

---

## Description

Add two decimal numbers and return their sum as a binary string.

The returned value must be a **string**, not a number.

---

## Example

```javascript
addBinary(1, 1);
// "10"

addBinary(5, 9);
// "1110"
```

---

## Approach

- Add the two numbers.
- Convert the sum to binary using `toString(2)`.
- Return the binary string.

---

## Time Complexity

**O(log n)**

> Binary conversion takes logarithmic time.

## Space Complexity

**O(log n)**

---

## Language

JavaScript (ES6+)