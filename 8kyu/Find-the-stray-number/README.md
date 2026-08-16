# 🔍 Find the Stray Number

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given an odd-length array of integers where every number appears the same except for one single different number, return the stray number.

The input array will always be valid and will contain at least 3 elements.

### Examples

    [1, 1, 2] → 2
    [17, 17, 3, 17, 17, 17, 17] → 3

---

## 💡 Approach

- Use the bitwise XOR (`^`) operator on every number in the array.
- Identical numbers cancel each other because `x ^ x = 0`.
- XOR with `0` leaves the remaining number unchanged.
- After processing the complete array, only the unique stray number remains.

---

## ⏱️ Time Complexity

    O(n)

## 💾 Space Complexity

    O(1)

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️