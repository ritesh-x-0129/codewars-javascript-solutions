# ➕ Sum of Minimums!

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given a 2D array containing multiple rows of positive numbers, find the minimum value from each row and return the sum of all those minimum values.

### Example

    [
      [1, 2, 3, 4, 5],
      [5, 6, 7, 8, 9],
      [20, 21, 34, 56, 100]
    ]

The minimum values are:

    1 + 5 + 20 = 26

Therefore:

    → 26

---

## 💡 Approach

- Initialize a variable `sum` to store the total.
- Use `forEach()` to iterate through every row.
- Sort each row in ascending order using a numeric comparison function.
- The first element of the sorted row is the minimum value.
- Add that minimum value to `sum`.
- Return the final sum.

---

## ⚠️ Edge Cases

- The input array is always non-empty.
- Every row contains positive values.
- Each row can contain multiple numbers.
- The minimum value of every row must be included exactly once in the final sum.

---

## ⏱️ Time Complexity

    O(m × n log n)

Where `m` is the number of rows and `n` is the number of elements in each row.

Each row is sorted individually to find its minimum value.

## 💾 Space Complexity

    O(log n)

The sorting operation may use additional stack space depending on the JavaScript engine's sorting implementation.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️