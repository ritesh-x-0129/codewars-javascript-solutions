# 🔢 Find the Remainder

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Write a function that accepts two integers and returns the remainder of dividing the **larger value by the smaller value**.

Division by zero should return `NaN`.

### Examples

    remainder(17, 5) → 2
    remainder(13, 72) → 7
    remainder(0, -1) → 0
    remainder(0, 1) → NaN

---

## 💡 Approach

- Use `Math.max()` to find the larger value.
- Use `Math.min()` to find the smaller value.
- Check if the smaller value is `0`; if so, return `NaN`.
- Use the `%` operator to calculate the remainder.

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