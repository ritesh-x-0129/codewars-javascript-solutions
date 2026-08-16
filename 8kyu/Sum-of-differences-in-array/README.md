# ➖ Sum of Differences in Array

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given an array of numbers, sort the values in descending order and calculate the sum of the differences between consecutive pairs.

If the array is empty or contains only one element, return `0`.

### Examples

    [2, 1, 10] → 9

    Descending order: [10, 2, 1]

    (10 - 2) + (2 - 1) = 8 + 1 = 9

---

## 💡 Approach

- Check if the array contains zero or one element; return `0` because there are no consecutive pairs.
- Sort the array in descending order using a numeric comparison function.
- Calculate the difference between the first and last elements.
- This gives the same result as adding all consecutive differences because the intermediate values cancel out.

---

## ⏱️ Time Complexity

    O(n log n)

## 💾 Space Complexity

    O(n)

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️