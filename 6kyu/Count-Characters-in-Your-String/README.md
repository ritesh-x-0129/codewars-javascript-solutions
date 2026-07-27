# Count Characters in Your String

## 📖 Problem

Count the number of occurrences of each character in a string.

Return an object where:
- Each key is a character.
- Each value is the number of times that character appears.

If the string is empty, return an empty object.

### Example

```javascript
count("aba"); // { a: 2, b: 1 }
count("");    // {}
```

---

## 💡 Approach

- Return an empty object if the string is empty.
- Create an empty object to store character counts.
- Loop through each character in the string.
- If the character already exists in the object, increment its count.
- Otherwise, initialize its count to `1`.
- Return the object.

---

## ⏱️ Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(n)`