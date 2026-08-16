# 🔢 Your Order, Please

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Sort a given string so that each word appears in the position indicated by the number contained inside that word.

The numbers range from `1` to `9`.

If the input string is empty, return an empty string.

### Examples

    "is2 Thi1s T4est 3a" → "Thi1s is2 3a T4est"
    "4of Fo1r pe6ople g3ood th5e the2" → "Fo1r the2 g3ood 4of th5e pe6ople"
    "" → ""

---

## 💡 Approach

- Split the input string into individual words.
- Check each character of every word to find its number.
- Convert the number from a string to a number.
- Use the number to determine the word's position in the result array.
- Subtract `1` because JavaScript arrays use zero-based indexing.
- Join the result array with spaces.

---

## ⏱️ Time Complexity

    O(n × m)

## 💾 Space Complexity

    O(n)

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️