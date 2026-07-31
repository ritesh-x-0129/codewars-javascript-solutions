# Merge Two Sorted Arrays Into One

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given two sorted arrays of integers (either ascending or descending), merge them into a single array such that:

- The final array is sorted in **ascending order**.
- Duplicate values are removed.
- If both arrays are empty, return an empty array.

---

## 💡 Approach

1. Merge both arrays using the spread operator.
2. Sort the merged array in ascending order.
3. Remove duplicate values using a `Set`.
4. Return the final array.

---

## ⏱ Time Complexity

```text
O((n + m) log(n + m))
```

Where:

- `n` = size of the first array
- `m` = size of the second array

Sorting dominates the overall complexity.

---

## 💾 Space Complexity

```text
O(n + m)
```

Additional space is required for the merged array and the `Set`.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
mergeArrays([1, 3, 5], [6, 4, 2]);
// [1, 2, 3, 4, 5, 6]

mergeArrays([1, 2, 3], [2, 3, 4]);
// [1, 2, 3, 4]
```