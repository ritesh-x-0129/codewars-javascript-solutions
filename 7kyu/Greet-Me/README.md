# 👋 Greet Me

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Write a method that takes one argument as a name and returns a greeting with the name properly capitalized and an exclamation point at the end.

### Examples

    greet("riley") → "Hello Riley!"

    greet("JACK") → "Hello Jack!"

---

## 💡 Approach

- Convert the first character of the name to uppercase.
- Convert the remaining characters to lowercase.
- Combine the formatted name with `"Hello "` and `"!"`.
- Return the final greeting string.

---

## ⚠️ Edge Cases

- Lowercase names are converted to proper capitalization.
- Uppercase names are converted so only the first letter is uppercase.
- The input is expected to be a valid name string.

---

## ⏱️ Time Complexity

    O(n)

The string is processed based on its length.

## 💾 Space Complexity

    O(n)

A new formatted string is created.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️