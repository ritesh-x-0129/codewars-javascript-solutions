# 🔤 Abbreviate a Two Word Name

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Write a function that converts a two-word name into its initials.

The input always contains exactly two words separated by one space.

The output should contain two uppercase letters separated by a dot.

### Examples

    "Sam Harris" → "S.H"

    "patrick feeney" → "P.F"

---

## 💡 Approach

- Split the name into two words using `split(" ")`.
- Access the first character of each word.
- Convert both characters to uppercase using `toUpperCase()`.
- Join the two initials with a dot.
- Return the resulting abbreviation.

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