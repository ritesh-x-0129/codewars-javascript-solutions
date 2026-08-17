# ❗ Exclamation Marks Series #1: Remove an Exclamation Mark from the End of String

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Write a function that removes an exclamation mark from the end of a string.

If the string does not end with an exclamation mark, return the string unchanged.

Only the final exclamation mark should be removed.

### Examples

    "Hi!" → "Hi"

    "Hi!!!" → "Hi!!"

    "!Hi" → "!Hi"

    "!Hi!" → "!Hi"

    "Hi! Hi!" → "Hi! Hi"

    "Hi" → "Hi"

---

## 💡 Approach

- Check the last character of the string.
- If the last character is not `!`, return the original string.
- If the last character is `!`, remove only that final character.
- Return the resulting string.

---

## ⏱️ Time Complexity

    O(n)

## 💾 Space Complexity

    O(n)

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️