# ➕ Sum The Strings

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Create a function that takes two integers in the form of strings and returns their sum as a string.

If either input is an empty string, treat it as `0`.

### Examples

    "4", "5" → "9"

    "34", "5" → "39"

    "", "" → "0"

    "2", "" → "2"

    "-5", "3" → "-2"

---

## 💡 Approach

- Convert both string inputs into numbers using `Number()`.
- JavaScript converts an empty string to `0`.
- Add the two numeric values.
- Convert the result back into a string using `toString()`.
- Return the final string.

---

## ⏱️ Time Complexity

    O(n)

## 💾 Space Complexity

    O(n)

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️