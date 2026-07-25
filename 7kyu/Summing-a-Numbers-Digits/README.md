# Summing a Number's Digits

## 📖 Problem

Write a function that takes an integer and returns the sum of the absolute value of each of its decimal digits.

### Example

```javascript
sumDigits(10);  // 1
sumDigits(99);  // 18
sumDigits(-32); // 5
```

---

## 💡 Approach

- Convert the number to its absolute value.
- Convert the number to a string and split it into individual digits.
- Loop through each digit.
- Convert each digit back to a number and add it to the sum.
- Return the final sum.

---

## ⏱️ Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(n)`