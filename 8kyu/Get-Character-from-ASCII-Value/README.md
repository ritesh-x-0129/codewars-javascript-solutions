# Get Character from ASCII Value

## 📖 Problem

Write a function that takes an ASCII value (number) and returns its corresponding character.

### Example

```javascript
getChar(65); // "A"
getChar(97); // "a"
getChar(48); // "0"
```

---

## 💡 Approach

- Use JavaScript's built-in `String.fromCharCode()` method.
- Pass the given ASCII value to the method.
- Return the corresponding character.

---

## ⏱️ Complexity

- **Time Complexity:** `O(1)`
- **Space Complexity:** `O(1)`