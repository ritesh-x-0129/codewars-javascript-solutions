# Plural

## 📖 Problem

Determine whether a plural form should be used based on a given number.

### Example

```javascript
plural(1);   // false
plural(5);   // true
plural(0);   // true
plural(1.5); // true
```

---

## 💡 Approach

- If the number is exactly `1`, return `false`.
- Otherwise, return `true`.

---

## ⏱️ Complexity

- **Time Complexity:** `O(1)`
- **Space Complexity:** `O(1)`