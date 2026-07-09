# 🔤 Get the Middle Character

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given a non-empty string, return its middle character(s).

### Rules

- If the string length is **odd**, return the middle character.
- If the string length is **even**, return the middle two characters.

### Examples

```text
"test"     → "es"
"testing"  → "t"
"middle"   → "dd"
"A"         → "A"
```

---

## 💡 Approach

- Find the middle index using the string length.
- If the length is even, return two middle characters.
- Otherwise, return the single middle character.

---

## ⏱️ Time Complexity

```text
O(1)
```

## 💾 Space Complexity

```text
O(1)
```

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️