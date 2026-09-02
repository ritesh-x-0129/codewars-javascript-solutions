# ❗ Exclamation Marks Series #11: Replace All Vowels

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Replace every vowel in a given sentence with an exclamation mark `!`.

The vowels are:

`a e i o u A E I O U`

### Examples

    replace("Hi!") → "H!!"

    replace("!Hi! Hi!") → "!H!! H!!"

    replace("aeiou") → "!!!!!"

    replace("ABCDE") → "!BCD!"

---

## 💡 Approach

- Store all lowercase and uppercase vowels in a string.
- Loop through every character of the input string.
- Check whether the current character is a vowel using `includes()`.
- If it is a vowel, add `!` to the result.
- Otherwise, add the original character.
- Return the final string.

---

## ⚠️ Edge Cases

- Both lowercase and uppercase vowels are replaced.
- Consonants remain unchanged.
- Special characters and spaces remain unchanged.
- If the string contains no vowels, it is returned unchanged.

---

## ⏱️ Time Complexity

    O(n)

The input string is traversed once.

## 💾 Space Complexity

    O(n)

A new string is created to store the result.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️