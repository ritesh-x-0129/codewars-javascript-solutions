# Do You Speak "English"?

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given a string containing arbitrary ASCII characters, determine whether it contains the word `"English"`.

The order of the characters must remain correct.

The check should be **case-insensitive**, meaning uppercase and lowercase letters should be treated the same.

The function should return:

- `true` → if `"English"` is present
- `false` → if `"English"` is not present

---

## 💡 Approach

The sentence is first converted to lowercase using:

```javascript
sentence.toLowerCase()
```

Then `includes()` is used to check whether the lowercase string contains:

```text
"english"
```

This makes the search case-insensitive while preserving the required character order.

---

## ⏱ Time Complexity

```text
O(n)
```

Where `n` is the length of the input string.

---

## 💾 Space Complexity

```text
O(n)
```

`toLowerCase()` creates a lowercase version of the string.

---

## 🛠 Technologies Used

- JavaScript

---

## ✅ Examples

```javascript
spEng("eNglisH");
// true

spEng("abcEnglishdef");
// true

spEng("abcnEglishsef");
// false

spEng("Hello World");
// false

spEng("ENGLISH");
// true
```