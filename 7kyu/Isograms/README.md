# Question: Isograms

## Difficulty

**7kyu**

---

## Description

An isogram is a word that has no repeating letters.

Ignore letter case, and consider an empty string as an isogram.

---

## Example

```javascript
isIsogram("Dermatoglyphics"); // true
isIsogram("aba");             // false
isIsogram("moOse");           // false
```

---

## Approach

- Convert the string to lowercase.
- Check each character against the remaining characters.
- If a duplicate is found, return `false`.
- If no duplicates are found, return `true`.

---

## Time Complexity

**O(n²)**

## Space Complexity

**O(1)**

---

## Language

JavaScript (ES6+)