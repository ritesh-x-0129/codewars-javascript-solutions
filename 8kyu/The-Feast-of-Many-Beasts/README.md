# The Feast of Many Beasts

## 📖 Problem

All of the animals are having a feast!

Each animal is bringing one dish, but there is one rule:

- The dish must start with the same letter as the animal's name.
- The dish must also end with the same letter as the animal's name.

Return `true` if the dish follows the rule; otherwise, return `false`.

### Example

```javascript
feast("great blue heron", "garlic naan"); // true
feast("chickadee", "chocolate cake"); // true
feast("brown bear", "bear claw"); // false
```

---

## 💡 Approach

- Compare the first character of both strings.
- Compare the last character of both strings.
- Return `true` only if both comparisons match.

---

## ⏱️ Complexity

- **Time Complexity:** `O(1)`
- **Space Complexity:** `O(1)`