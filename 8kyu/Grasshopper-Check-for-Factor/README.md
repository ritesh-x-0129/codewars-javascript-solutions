# 🌱 Grasshopper - Check for Factor

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given two numbers, `base` and `factor`, determine whether `factor` is a factor of `base`.

Return:

- `true` if `factor` divides `base` exactly.
- `false` otherwise.

### Note

- `base` is a non-negative number.
- `factor` is a positive number.

---

## 💡 Approach

- Use the modulus operator (`%`).
- If `base % factor === 0`, the factor divides the base without a remainder.
- Return the boolean result.

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