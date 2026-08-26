# 👤 Simple Validation of a Username

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Write a function to validate a username.

A valid username can contain only:

- Lowercase letters (`a-z`)
- Numbers (`0-9`)
- Underscores (`_`)

The username must be between **4 and 16 characters**, both included.

---

## 💡 Approach

- Use a regular expression to validate the complete username.
- `^` ensures the validation starts at the beginning of the string.
- `[a-z0-9_]` allows lowercase letters, numbers, and underscores.
- `{4,16}` requires the username to contain between 4 and 16 characters.
- `$` ensures the validation reaches the end of the string.
- Use `.test()` to return `true` for a valid username and `false` otherwise.

### Regular Expression

    /^[a-z0-9_]{4,16}$/

---

## ⚠️ Edge Cases

- Usernames shorter than 4 characters are invalid.
- Usernames longer than 16 characters are invalid.
- Uppercase letters are not allowed.
- Spaces are not allowed.
- Special characters other than `_` are not allowed.
- Numbers are allowed.
- Underscores are allowed.

---

## ⏱️ Time Complexity

    O(n)

Where `n` is the length of the username.

The regular expression checks the characters of the input string.

## 💾 Space Complexity

    O(1)

Only a constant amount of additional space is required.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️