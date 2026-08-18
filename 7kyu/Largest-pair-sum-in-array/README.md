# 🔢 Largest Pair Sum in Array

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given a sequence of numbers, find the largest pair sum in the sequence.

The input sequence contains at least two integers.

### Examples

    [10, 14, 2, 23, 19] → 42

    23 + 19 = 42

    [99, 2, 2, 23, 19] → 122

    99 + 23 = 122

---

## 💡 Approach

- Sort the array in descending order.
- The two largest numbers will then be at indexes `0` and `1`.
- Add these two numbers together.
- Return the resulting pair sum.

---

## ⏱️ Time Complexity

    O(n log n)

## 💾 Space Complexity

    O(log n)

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️