# 🔢 Fake Binary

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given a string of digits, replace:

- Digits **less than 5** with `"0"`
- Digits **greater than or equal to 5** with `"1"`

Return the resulting string.

### Note

- The input string is never empty.

---

## 💡 Approach

- Split the string into individual digits.
- Loop through each digit.
- If the digit is less than `5`, append `"0"` to the result.
- Otherwise, append `"1"`.
- Return the final string.

---

## ⏱️ Time Complexity

```text
O(n)
```

## 💾 Space Complexity

```text
O(n)
```

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️