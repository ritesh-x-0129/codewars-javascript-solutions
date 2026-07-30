# What's the Real Floor?

## 📌 Difficulty

**8kyu**

## 📝 Problem

Convert a floor number from the American numbering system to the European numbering system.

Rules:

- Basement floors (negative numbers) remain the same.
- The American 1st floor becomes the European ground floor (`0`).
- There is no 13th floor in the American system.
- Floors above 13 shift down by two.

### Example

```text
1  → 0
0  → 0
5  → 4
15 → 13
-3 → -3
```

---

## 💡 Approach

1. Return basement floors as they are.
2. If the floor is between `1` and `12`, subtract `1`.
3. If the floor is `13` or higher, subtract `2`.
4. Return the converted floor number.

---

## ⏱ Time Complexity

```text
O(1)
```

Only a few conditional checks are performed.

---

## 💾 Space Complexity

```text
O(1)
```

No extra space is used.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
getRealFloor(15); // 13
```