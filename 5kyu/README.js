# Rot13

## 📌 Difficulty

**5kyu**

---

## 📝 Problem

Implement the **ROT13 cipher**, a simple Caesar cipher that shifts each English letter by **13 positions**.

- Uppercase and lowercase letters should be shifted separately.
- Numbers, spaces, and special characters should remain unchanged.

---

## 💡 Approach

1. Traverse each character in the input string.
2. Check whether the character is:
   - An uppercase letter.
   - A lowercase letter.
   - Or a non-alphabetic character.
3. Shift alphabetic characters by 13 positions.
4. If the shifted character goes beyond the alphabet range, wrap it back using `-26`.
5. Leave numbers, spaces, and symbols unchanged.
6. Return the encoded string.

---

## ⏱ Time Complexity

```text
O(n)
```

Where `n` is the length of the input string.

---

## 💾 Space Complexity

```text
O(n)
```

A new string is created to store the encoded result.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
rot13("Hello");
// "Uryyb"

rot13("Test123!");
// "Grfg123!"

rot13("Why?");
// "Jul?"
```