# Sum of the First Nth Term of Series

## 📖 Problem

Given a number `n`, return the sum of the first `n` terms of the following series:

```text
1 + 1/4 + 1/7 + 1/10 + 1/13 + ...
```

The result should be rounded to **2 decimal places** and returned as a **string**.

### Example

```javascript
SeriesSum(1); // "1.00"
SeriesSum(2); // "1.25"
SeriesSum(5); // "1.57"
```

---

## 💡 Approach

- Initialize the sum to `0`.
- Start the denominator at `1`.
- Loop `n` times.
- Add `1 / denominator` to the sum.
- Increase the denominator by `3` after each iteration.
- Return the sum rounded to two decimal places using `toFixed(2)`.

---

## ⏱️ Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`