# Find the Position!

## 📖 Problem

Given a lowercase English letter, return its position in the alphabet.

### Example

```javascript
position("a"); // "Position of alphabet: 1"
position("z"); // "Position of alphabet: 26"
```

---

## 💡 Approach

- Get the ASCII value of the given letter using `charCodeAt()`.
- Subtract `96` because the ASCII value of `'a'` is `97`.
- Return the result in the required string format.

---

## ⏱️ Complexity

- **Time Complexity:** `O(1)`
- **Space Complexity:** `O(1)`