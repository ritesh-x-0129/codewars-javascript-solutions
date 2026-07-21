# Count by X

## 📖 Problem

Create a function with two arguments that returns an array containing the first **n** multiples of **x**.

Both `x` and `n` are positive integers greater than `0`.

### Example

```javascript
countBy(1, 10); // [1,2,3,4,5,6,7,8,9,10]
countBy(2, 5);  // [2,4,6,8,10]
```

---

## 💡 Approach

- Create an empty array.
- Loop from `1` to `n`.
- Multiply the loop counter by `x`.
- Push each multiple into the array.
- Return the final array.

---

## ⏱️ Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(n)`