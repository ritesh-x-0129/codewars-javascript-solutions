# 📏 Maximum Length Difference

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given two arrays of strings, `a1` and `a2`, find the maximum absolute difference between the lengths of any string from `a1` and any string from `a2`.

If either array is empty, return `-1`.

### Example

    a1 = [
      "hoqq",
      "bbllkw",
      "oox",
      "ejjuyyy",
      "plmiis",
      "xxxzgpsssa",
      "xxwwkktt",
      "znnnnfqknaz",
      "qqquuhii",
      "dvvvwz"
    ]

    a2 = [
      "cccooommaaqqoxii",
      "gggqaffhhh",
      "tttoowwwmmww"
    ]

    mxdiflg(a1, a2) → 13

---

## 💡 Approach

- Check whether either array is empty. If so, return `-1`.
- Convert both arrays into arrays containing the lengths of their strings.
- Find the minimum and maximum string lengths in both arrays.
- Calculate the possible largest differences between the shortest string of one array and the longest string of the other array.
- Use `Math.abs()` to get the absolute differences.
- Return the larger of the two differences using `Math.max()`.

---

## ⚠️ Edge Cases

- If `a1` is empty, return `-1`.
- If `a2` is empty, return `-1`.
- If both arrays are empty, return `-1`.
- The arrays contain strings made from letters `a` to `z`.

---

## ⏱️ Time Complexity

    O(n + m)

Where `n` is the number of strings in `a1` and `m` is the number of strings in `a2`.

Finding the minimum and maximum lengths requires traversing both arrays.

## 💾 Space Complexity

    O(n + m)

New arrays containing the lengths of the strings are created using `map()`.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️