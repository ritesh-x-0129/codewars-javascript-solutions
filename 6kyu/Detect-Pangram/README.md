# 🔤 Detect Pangram

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

A pangram is a sentence that contains every letter of the English alphabet at least once.

Given a string, determine whether it is a pangram.

The check is case-insensitive, and numbers and punctuation should be ignored.

Return `true` if the string contains all 26 letters, otherwise return `false`.

### Example

    "The quick brown fox jumps over the lazy dog" → true

---

## 💡 Approach

- Convert the input string to lowercase.
- Store all 26 English alphabet letters in a string.
- Loop through every alphabet letter.
- Use `includes()` to check whether the current letter exists in the input.
- If any letter is missing, immediately return `false`.
- If the loop completes, all 26 letters are present, so return `true`.

---

## ⚠️ Edge Cases

- Uppercase and lowercase letters are treated as the same.
- Numbers do not affect the result.
- Punctuation does not affect the result.
- A string must contain every letter from `a` to `z` at least once to be a pangram.

---

## ⏱️ Time Complexity

    O(n)

Where `n` is the length of the input string.

## 💾 Space Complexity

    O(1)

The alphabet contains a fixed 26 characters, so the additional space remains constant.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️