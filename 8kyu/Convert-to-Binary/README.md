# 🔢 Convert to Binary

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given a non-negative integer `b`, return an integer whose decimal representation matches the binary representation of the given number.

### Examples

    toBinary(1) → 1

    toBinary(5) → 101

    toBinary(11) → 1011

---

## 💡 Approach

- Use `toString(2)` to convert the given number into its binary representation.
- The result of `toString(2)` is a string containing the binary digits.
- Convert that binary string back into a number using `Number()`.
- Return the resulting integer.

---

## ⚠️ Edge Cases

- The input is always a non-negative integer.
- `0` converts to `0`.
- The binary representation is returned as an integer rather than a string.

---

## ⏱️ Time Complexity

    O(log n)

The number of binary digits is proportional to the number of bits required to represent `n`.

## 💾 Space Complexity

    O(log n)

The binary representation is temporarily stored as a string.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️