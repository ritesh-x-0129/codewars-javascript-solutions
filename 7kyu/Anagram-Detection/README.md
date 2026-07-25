# Anagram Detection

## 📖 Problem

Determine whether two given strings are anagrams of each other.

Two strings are anagrams if they contain the same letters with the same frequency, regardless of their order. The comparison should be case-insensitive.

### Example

```javascript
isAnagram("foefet", "toffee"); // true
isAnagram("Buckethead", "DeathCubeK"); // true
```

---

## 💡 Approach

- Convert both strings to lowercase.
- Split each string into an array of characters.
- Sort both arrays alphabetically.
- Join them back into strings.
- Compare the resulting strings.

---

## ⏱️ Complexity

- **Time Complexity:** `O(n log n)`
- **Space Complexity:** `O(n)`