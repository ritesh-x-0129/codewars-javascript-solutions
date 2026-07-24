# Grasshopper - Terminal Game Move Function

## 📖 Problem

Given the hero's current position and the value of a dice roll, return the hero's new position after moving forward **twice** the value of the roll.

### Example

```javascript
move(3, 6); // 15
```

---

## 💡 Approach

- Multiply the dice roll by `2`.
- Add the result to the current position.
- Return the new position.

---

## ⏱️ Complexity

- **Time Complexity:** `O(1)`
- **Space Complexity:** `O(1)`