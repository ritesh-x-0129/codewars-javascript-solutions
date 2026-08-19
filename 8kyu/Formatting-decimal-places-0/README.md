# 🔢 Formatting Decimal Places #0

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Create a function that rounds a given number to two decimal places.

Only valid numbers will be used as input.

### Examples

    5.5589 → 5.56

    -3.3424 → -3.34

---

## 💡 Approach

- Use `toFixed(2)` to round the number to two decimal places.
- `toFixed()` returns the result as a string.
- Use `Number()` to convert the formatted value back into a number.
- Return the rounded number.

---

## ⚠️ Edge Cases

- Positive decimal numbers should be rounded to two decimal places.
- Negative decimal numbers should also be rounded correctly.
- The input will always be a valid number.

---

## ⏱️ Time Complexity

    O(1)

## 💾 Space Complexity

    O(1)

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️