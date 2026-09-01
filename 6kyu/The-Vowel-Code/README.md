# 🔤 The Vowel Code

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Create two functions, `encode()` and `decode()`.

The `encode()` function replaces lowercase vowels with numbers:

- `a` → `1`
- `e` → `2`
- `i` → `3`
- `o` → `4`
- `u` → `5`

The `decode()` function converts the numbers back into their corresponding vowels.

### Examples

    encode("hello") → "h2ll4"

    decode("h3 th2r2") → "hi there"

---

## 💡 Approach

- Use `replace()` with a regular expression to find the required characters.
- In `encode()`, match lowercase vowels using `/[aeiou]/g`.
- Use an object to map each vowel to its corresponding number.
- In `decode()`, match numbers from `1` to `5` using `/[1-5]/g`.
- Use another object to map each number back to its corresponding vowel.
- Return the converted string.

---

## ⚠️ Edge Cases

- Only lowercase vowels are encoded.
- Uppercase vowels do not need to be handled.
- Numbers passed to `decode()` are guaranteed to represent vowels.
- Characters other than vowels or the specified numbers remain unchanged.

---

## ⏱️ Time Complexity

    O(n)

The string is traversed to find and replace each matching character.

## 💾 Space Complexity

    O(n)

A new string is created as a result of the replacement.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️