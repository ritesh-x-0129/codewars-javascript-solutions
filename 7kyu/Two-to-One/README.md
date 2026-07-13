# Question: Two to One

## Difficulty

**7kyu**

---

## Description

Given two strings containing only lowercase letters (`a-z`), return a new sorted string containing distinct letters from both strings.

Each letter should appear only once, and the final string must be sorted in alphabetical order.

---

## Example

```javascript
longest("xyaabbbccccdefww", "xxxxyyyyabklmopq");
// "abcdefklmopqwxy"

longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz");
// "abcdefghijklmnopqrstuvwxyz"
```

---

## Approach

- Concatenate both strings.
- Traverse each character.
- Store only unique characters.
- Sort the unique characters alphabetically.
- Join them back into a single string.

---

## Time Complexity

**O(n log n)**

> Sorting the characters takes O(n log n).

## Space Complexity

**O(n)**

---

## Language

JavaScript (ES6+)