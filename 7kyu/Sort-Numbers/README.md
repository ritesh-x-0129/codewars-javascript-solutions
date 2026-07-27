# Sort Numbers

## 📖 Problem

Sort the given array of numbers in ascending order.

If the input is `null`, return an empty array.

### Example

```javascript
solution([1, 2, 10, 50, 5]); // [1, 2, 5, 10, 50]
solution(null); // []
```

---

## 💡 Approach

- Check if the input is `null`.
- If it is, return an empty array.
- Otherwise, sort the array in ascending order using a numeric comparison function.
- Return the sorted array.

---

## ⏱️ Complexity

- **Time Complexity:** `O(n log n)`
- **Space Complexity:** `O(1)` *(sorting is done in-place by JavaScript's `sort()`)*