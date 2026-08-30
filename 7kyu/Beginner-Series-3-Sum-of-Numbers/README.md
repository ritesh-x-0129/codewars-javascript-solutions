# ➕ Beginner Series #3 Sum of Numbers

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given two integers `a` and `b`, which can be positive or negative, find the sum of all integers between and including them.

If both numbers are equal, return `a` or `b`.

The numbers are not necessarily given in order.

### Examples

    getSum(1, 0) → 1

    getSum(1, 2) → 3

    getSum(0, 1) → 1

    getSum(1, 1) → 1

    getSum(-1, 0) → -1

    getSum(-1, 2) → 2

---

## 💡 Approach

- If `a` and `b` are equal, return the value directly.
- Use `Math.min()` and `Math.max()` to determine the smaller and larger values.
- Loop from the smaller value to the larger value.
- Add each number to `sum`.
- Return the final sum.

---

## ⚠️ Edge Cases

- If `a` and `b` are equal, return that value.
- The numbers can be positive or negative.
- The input numbers can be provided in any order.
- Both endpoints are included in the sum.

---

## ⏱️ Time Complexity

    O(n)

The loop runs once for every integer between `a` and `b`.

## 💾 Space Complexity

    O(1)

Only a constant amount of additional space is used.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️