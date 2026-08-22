# 🔲 Find Nearest Square Number

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given a positive integer `n`, find the perfect square number that is nearest to `n`.

A perfect square is an integer that can be written as the product of an integer with itself.

If `n` is already a perfect square, return `n`.

### Examples

    nearestSq(111) → 121

    nearestSq(144) → 144

    nearestSq(81) → 81

    nearestSq(26) → 25

---

## 💡 Approach

- Use `Math.sqrt()` to find the square root of `n`.
- Use `Math.floor()` to get the integer below or equal to the square root.
- Square this value to get the nearest lower perfect square.
- Square the next integer to get the nearest upper perfect square.
- Calculate the distance from `n` to both perfect squares.
- Return the perfect square with the smaller distance.
- If both distances are equal, return the upper perfect square.

---

## ⚠️ Edge Cases

- If `n` is already a perfect square, return `n`.
- If `n` lies exactly halfway between two perfect squares, the upper perfect square is returned.
- The input is a positive integer.

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