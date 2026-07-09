# 📏 Shortest Word

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given a string of words, return the length of the shortest word.

### Note

- The string will never be empty.
- All elements are valid words.

---

## 💡 Approach

- Split the sentence into an array of words.
- Assume the first word is the shortest.
- Loop through the array.
- Update the result whenever a shorter word is found.
- Return the length of the shortest word.

---

## ⏱️ Time Complexity

```text
O(n)
```

> `n` is the number of words in the string.

## 💾 Space Complexity

```text
O(n)
```

> Due to creating an array using `split()`.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️