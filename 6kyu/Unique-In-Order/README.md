# Unique In Order

## 📖 Problem

Implement a function that takes a sequence and returns a list of items without any consecutive duplicate elements while preserving the original order.

### Example

```javascript
uniqueInOrder("AAAABBBCCDAABBB");
// ["A", "B", "C", "D", "A", "B"]

uniqueInOrder("ABBCcAD");
// ["A", "B", "C", "c", "A", "D"]

uniqueInOrder([1, 2, 2, 3, 3]);
// [1, 2, 3]
```

---

## 💡 Approach

- Create an empty array to store the result.
- Iterate through each element in the sequence.
- Compare the current element with the last element in the result array.
- If they are different, add the current element to the result.
- Return the final array.

---

## ⏱️ Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(n)`