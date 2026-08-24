# 🔍 Find the Unique Number

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Given an array of numbers where all numbers are equal except for one unique number, find and return the unique number.

The array contains at least three numbers.

### Examples

    findUniq([1, 1, 1, 2, 1, 1]) → 2

    findUniq([0, 0, 0.55, 0, 0]) → 0.55

The input can contain very large arrays, so the solution should be efficient.

---

## 💡 Approach

- Compare the first three elements to determine which value is repeated.
- At least two of the first three elements must be equal because there is only one unique number.
- Store the repeated value in `result`.
- Loop through the array and find the first value that differs from `result`.
- Return that different value.
- The array is not sorted, which avoids unnecessary processing for large inputs.

---

## ⚠️ Edge Cases

- The array always contains at least three numbers.
- Exactly one number is different from all the others.
- The unique value can be an integer or a decimal number.
- The array can be very large, so sorting should be avoided.

---

## ⏱️ Time Complexity

    O(n)

Where `n` is the length of the array.

The first three elements are checked in constant time, followed by a single traversal of the array.

## 💾 Space Complexity

    O(1)

Only a few variables are used regardless of the size of the input array.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️