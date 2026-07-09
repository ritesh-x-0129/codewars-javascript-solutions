# ⭐ Sort and Star

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given an array of strings:

- Sort the array alphabetically (case-sensitive).
- Return the first string.
- Insert `"***"` between every character of the returned string.

---

## 💡 Approach

- Sort the array alphabetically using `sort()`.
- Get the first string from the sorted array.
- Split the string into individual characters.
- Join the characters using `"***"`.

---

## ⏱️ Time Complexity

```text
O(n log n)
```

> Sorting the array takes **O(n log n)** time.

## 💾 Space Complexity

```text
O(m)
```

> `m` is the length of the first string after sorting.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️