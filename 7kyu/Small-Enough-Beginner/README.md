# 🔢 Small enough? - Beginner

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given an array and a limit value, check whether all values in the array are less than or equal to the limit.

If all values are within the limit, return `true`. Otherwise, return `false`.

### Examples

    smallEnough([43, 64, 85], 100) → true

    smallEnough([43, 104, 85], 100) → false

---

## 💡 Approach

- Loop through every value in the array.
- Check if the current value is greater than the limit.
- If any value exceeds the limit, immediately return `false`.
- If the loop completes without finding a value above the limit, return `true`.

---

## ⚠️ Edge Cases

- Values equal to the limit are allowed.
- If even one value is greater than the limit, the result is `false`.
- The array contains only numbers.

---

## ⏱️ Time Complexity

    O(n)

The array is traversed once in the worst case.

## 💾 Space Complexity

    O(1)

No additional space proportional to the input size is used.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️