# 🔢 Form The Minimum

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given a list of digits, return the smallest number that can be formed using each unique digit only once.

Duplicate digits should be ignored.

### Examples

    minValue([1, 3, 1]) → 13

    minValue([5, 7, 5, 9, 7]) → 579

    minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]) → 134679

---

## 💡 Approach

- Use `Set` to remove duplicate digits.
- Convert the `Set` back into an array.
- Sort the digits in ascending numerical order.
- Join the sorted digits into a string.
- Convert the resulting string into a number.
- Return the smallest number.

---

## ⚠️ Edge Cases

- Duplicate digits are removed.
- Only digits from `1` to `9` are provided.
- Each unique digit is used only once.
- The input contains positive integers.

---

## ⏱️ Time Complexity

    O(n log n)

The unique digits are sorted in ascending order.

## 💾 Space Complexity

    O(n)

Additional space is used for the `Set` and the resulting array.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️