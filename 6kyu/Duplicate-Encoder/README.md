# 🔁 Duplicate Encoder

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Convert a string into a new string where each character is replaced with:

- `(` if the character appears only once.
- `)` if the character appears more than once.

Capitalization should be ignored when checking for duplicate characters.

### Examples

    duplicateEncode("din") → "((("

    duplicateEncode("recede") → "()()()"

    duplicateEncode("Success") → ")())())"

    duplicateEncode("(( @") → "))(("

---

## 💡 Approach

- Convert the input string to lowercase so capitalization is ignored.
- Loop through each character in the string.
- For every character, loop through the string again and count how many times it appears.
- If the character appears more than once, add `)` to the result.
- Otherwise, add `(` to the result.
- Return the encoded string.

---

## ⚠️ Edge Cases

- Uppercase and lowercase versions of the same character are treated as duplicates.
- Characters such as spaces and `@` are also considered characters.
- A character appearing exactly once produces `(`.
- A character appearing more than once produces `)`.

---

## ⏱️ Time Complexity

    O(n²)

The solution uses a nested loop to count the occurrences of each character.

## 💾 Space Complexity

    O(n)

Additional space is used for the result string.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️