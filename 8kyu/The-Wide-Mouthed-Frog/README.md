# The Wide-Mouthed Frog!

## 📖 Problem

Complete the function that returns the frog's mouth size based on the animal it meets.

- Return `"small"` if the animal is an **alligator** (case-insensitive).
- Otherwise, return `"wide"`.

### Example

```javascript
mouthSize("alligator"); // "small"
mouthSize("dog");       // "wide"
```

---

## 💡 Approach

- Convert the animal name to lowercase.
- Check if it is `"alligator"`.
- Return `"small"` if it matches.
- Otherwise, return `"wide"`.

---

## ⏱️ Complexity

- **Time Complexity:** `O(n)` (for converting the string to lowercase)
- **Space Complexity:** `O(n)`