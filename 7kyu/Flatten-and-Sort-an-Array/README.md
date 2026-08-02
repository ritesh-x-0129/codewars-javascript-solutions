# Flatten and Sort an Array

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given a two-dimensional array of integers, flatten it into a one-dimensional array and return the elements sorted in ascending order.

---

## 💡 Approach

1. Flatten the 2D array using the `flat()` method.
2. Sort the flattened array in ascending order using a numeric comparator.
3. Return the sorted array.

---

## ⏱ Time Complexity

```text
O(n log n)
```

- Flattening the array takes **O(n)**.
- Sorting the flattened array takes **O(n log n)**.

Overall complexity is dominated by sorting.

---

## 💾 Space Complexity

```text
O(n)
```

A new flattened array is created.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

flattenAndSort([[], [2], [1]]);
// [1, 2]
```