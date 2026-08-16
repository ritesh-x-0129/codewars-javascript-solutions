# 🔄 Reverse or Rotate?

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Split a string into chunks of size `sz`.

- If the sum of the digits in a chunk is divisible by `2`, reverse the chunk.
- Otherwise, rotate the chunk one position to the left.
- Ignore any remaining characters that do not form a complete chunk.

Return the modified chunks as a single string.

If `sz <= 0`, the string is empty, or `sz` is greater than the string length, return an empty string.

### Examples

    ("123456987654", 6) → "234561876549"
    ("66443875", 4) → "44668753"
    ("66443875", 8) → "64438756"
    ("", 8) → ""
    ("123456779", 0) → ""

---

## 💡 Approach

- Validate the input conditions first.
- Process the string in chunks of size `sz`.
- Calculate the sum of the digits in each complete chunk.
- If the sum is even, reverse the chunk.
- If the sum is odd, rotate the chunk one position to the left.
- Append each modified chunk to the result string.
- Ignore any incomplete chunk at the end.

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