# ➕ Sum of Multiples

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Find the sum of all multiples of `n` below `m`.

Both `n` and `m` should be positive integers. The value `m` is excluded from the multiples.

If either value is not a positive integer, return `"INVALID"`.

### Examples

    sumMul(2, 9) → 20
    2 + 4 + 6 + 8 = 20

    sumMul(3, 13) → 30
    3 + 6 + 9 + 12 = 30

    sumMul(4, 123) → 1860

    sumMul(4, -7) → "INVALID"

---

## 💡 Approach

- Check whether `n` or `m` is less than or equal to `0`.
- If either value is invalid, return `"INVALID"`.
- Start the loop from `n`, which is the first positive multiple.
- Increase the loop by `n` each time to generate all multiples of `n`.
- Continue while the multiple is less than `m`.
- Add each multiple to the result.

---

## ⏱️ Time Complexity

    O(m / n)

## 💾 Space Complexity

    O(1)

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️