# Quarter of the Year

## 📖 Problem

Given a month (1–12), return the quarter of the year it belongs to.

### Example

```javascript
quarterOf(2);  // 1
quarterOf(6);  // 2
quarterOf(11); // 4
```

---

## 💡 Approach

- Check which range the month falls into.
- Return the corresponding quarter:
  - Months `1–3` → Quarter `1`
  - Months `4–6` → Quarter `2`
  - Months `7–9` → Quarter `3`
  - Months `10–12` → Quarter `4`

---

## ⏱️ Complexity

- **Time Complexity:** `O(1)`
- **Space Complexity:** `O(1)`