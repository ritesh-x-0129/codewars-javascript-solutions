# ⏭️ Find the Next Perfect Square

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given a non-negative integer, find the next integral perfect square after it.

A perfect square is a number whose square root is also an integer.

If the given number is not a perfect square, return `-1`.

### Examples

    findNextSquare(121) → 144

    findNextSquare(625) → 676

    findNextSquare(114) → -1

---

## 💡 Approach

- Calculate the square root of the given number using `Math.sqrt()`.
- Use `Number.isInteger()` to check whether the square root is an integer.
- If the square root is not an integer, the given number is not a perfect square, so return `-1`.
- If it is a perfect square, add `1` to its square root.
- Square the new value to get the next perfect square.
- Return the result.

---

## ⚠️ Edge Cases

- The input is always non-negative.
- If the input is not a perfect square, return `-1`.
- If the input is already a perfect square, return the next perfect square.
- `0` is a perfect square, so its next perfect square is `1`.

---

## ⏱️ Time Complexity

    O(1)

Only a fixed number of mathematical operations are performed.

## 💾 Space Complexity

    O(1)

Only a constant amount of additional space is used.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️