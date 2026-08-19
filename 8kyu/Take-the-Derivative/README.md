# 📐 Take the Derivative

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Create a function that takes two numbers:

- `coefficient`
- `exponent`

Apply the power rule by multiplying the coefficient and exponent, then subtracting `1` from the exponent.

Return the resulting expression as a string.

### Examples

    derive(7, 8) → "56x^7"

    derive(5, 9) → "45x^8"

The `^1` part should not be removed when the resulting exponent is `1`.

---

## 💡 Approach

- Multiply the coefficient by the exponent.
- Subtract `1` from the exponent.
- Use a template literal to construct the required expression.
- Return the expression as a string.

---

## ⚠️ Edge Cases

- The exponent will never be `1`.
- Neither the coefficient nor exponent will be `0`.
- The result must always be returned as a string.
- The `^1` notation must be preserved when the resulting exponent is `1`.

---

## ⏱️ Time Complexity

    O(1)

## 💾 Space Complexity

    O(1)

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️