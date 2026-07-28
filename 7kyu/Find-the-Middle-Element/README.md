# Find the Middle Element

## 📖 Problem

Given an array of three distinct numbers, return the index of the number whose value lies between the other two numbers.

### Example

```javascript
gimme([2, 3, 1]); // 0
gimme([5, 10, 14]); // 1
```

---

## 💡 Approach

- Create a copy of the original array.
- Sort the copied array in ascending order.
- The middle element will be at index `1` in the sorted array.
- Find the index of that middle element in the original array.
- Return the index.

---

## ⏱️ Complexity

- **Time Complexity:** `O(n log n)`
- **Space Complexity:** `O(n)`