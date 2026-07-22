# Money, Money, Money

## 📖 Problem

Mr. Scrooge wants to invest a sum of money and know how many years it will take to reach a desired amount.

Each year:

- The investment earns interest.
- Tax is paid only on the earned interest.
- The remaining profit is added back to the principal.

Return the number of years required for the investment to reach or exceed the desired amount.

### Example

```javascript
calculateYears(1000, 0.05, 0.18, 1100); // 3
```

---

## 💡 Approach

- Initialize a year counter.
- While the principal is less than the desired amount:
  - Calculate the interest earned.
  - Deduct tax from the interest.
  - Add the remaining interest to the principal.
  - Increment the year counter.
- Return the total number of years.

---

## ⏱️ Complexity

- **Time Complexity:** `O(y)` where `y` is the number of years required.
- **Space Complexity:** `O(1)`