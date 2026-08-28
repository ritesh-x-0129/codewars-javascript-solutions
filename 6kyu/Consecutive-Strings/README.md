# 🔗 Consecutive Strings

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Given an array of strings and an integer `k`, return the first longest string formed by concatenating `k` consecutive strings from the array.

If multiple concatenations have the same maximum length, return the one that appears first.

### Examples

    longestConsec(
      ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"],
      2
    )

    → "folingtrashy"

---

## 💡 Approach

- Check whether the input is valid:
  - If the array is empty, return `""`.
  - If `k` is greater than the array length, return `""`.
  - If `k` is less than or equal to `0`, return `""`.
- Create a variable `longest` to store the longest concatenated string found.
- Loop through every possible starting position.
- For each position, concatenate `k` consecutive strings.
- Compare the length of the current concatenated string with `longest`.
- Update `longest` only when the current string is strictly longer.
- Because we only update when `current.length > longest.length`, the first string is kept when two strings have the same length.
- Return the longest string.

---

## ⚠️ Edge Cases

- Empty array → `""`
- `k <= 0` → `""`
- `k > strarr.length` → `""`
- If multiple results have the same maximum length, return the first one.
- `k` can be equal to the array length.

---

## ⏱️ Time Complexity

    O(n × k)

Where `n` is the number of strings in the array and `k` is the number of consecutive strings being concatenated.

## 💾 Space Complexity

    O(k)

Additional space is used for the current concatenated string and the longest result.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️