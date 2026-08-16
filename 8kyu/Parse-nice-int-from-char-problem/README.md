# 👧 Parse Nice Int from Char Problem

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Write a function that extracts the girl's age from a string and returns it as an integer.

The first character of the input string is always a number between `0` and `9`.

### Examples

    "1 year old" → 1
    "5 years old" → 5

---

## 💡 Approach

- Extract the first character from the input string using `slice()`.
- Convert the extracted character from a string to a number using `Number()`.
- Return the resulting integer.

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