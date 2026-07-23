# Jaden Casing Strings

## 📖 Problem

Convert a string so that the first letter of every word is capitalized, similar to how Jaden Smith writes his tweets.

### Example

```javascript
"how can mirrors be real if our eyes aren't real".toJadenCase();
// "How Can Mirrors Be Real If Our Eyes Aren't Real"
```

---

## 💡 Approach

- Split the string into an array of words.
- Capitalize the first letter of each word.
- Keep the remaining characters unchanged.
- Join the words back into a single string.

---

## ⏱️ Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(n)`