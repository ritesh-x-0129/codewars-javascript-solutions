# 🙂 Count the Smiley Faces!

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Given an array of strings, count how many valid smiling faces it contains.

A valid smiley face must follow these rules:

- Eyes must be `:` or `;`.
- A nose is optional and can be `-` or `~`.
- The mouth must be `)` or `D`.
- No additional characters are allowed.

### Examples

    countSmileys([':)', ';(', ';}', ':-D']) → 2

    countSmileys([';D', ':-(', ':-)', ';~)']) → 3

    countSmileys([';]', ':[', ';*', ':$', ';-D']) → 1

    countSmileys([]) → 0

---

## 💡 Approach

- Use `filter()` to keep only valid smiley faces.
- Use a regular expression to validate each face.
- The regex checks the eyes, optional nose, and mouth in the correct order.
- Use `.test()` to determine whether each string matches the pattern.
- Return the length of the filtered array.

### Regular Expression

    /^[:;][-~]?[)D]$/

### Regex Breakdown

    ^       → Start of the string

    [:;]    → Eyes must be `:` or `;`

    [-~]?   → Optional nose, either `-` or `~`

    [)D]    → Mouth must be `)` or `D`

    $       → End of the string

The `^` and `$` ensure that the entire string must match the pattern.

### Valid Examples

    :)
    :D
    ;)
    ;D
    :-)
    :-D
    ;~)
    ;-D

### Invalid Examples

    :(
    ;}
    :>
    ;]
    :*
    :-)

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