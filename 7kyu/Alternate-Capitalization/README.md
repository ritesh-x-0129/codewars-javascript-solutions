# Alternate Capitalization

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given a lowercase string without spaces, capitalize the letters at even and odd indexes separately.

Index `0` is considered an even index.

The function should return two strings:

- First string: characters at even indexes are uppercase.
- Second string: characters at odd indexes are uppercase.

### Example

```javascript
capitalize("abcdef");
// ["AbCdEf", "aBcDeF"]
```

---

## 💡 Approach

The string is traversed character by character.

Two strings are created:

- `even` → uppercase characters at even indexes.
- `odd` → uppercase characters at odd indexes.

For every character:

- If the index is even, the character is uppercase in `even` and lowercase in `odd`.
- If the index is odd, the character is uppercase in `odd` and lowercase in `even`.

Finally, both strings are returned inside an array.

---

## ⏱ Time Complexity

```text
O(n)
```

The input string is traversed once.

---

## 💾 Space Complexity

```text
O(n)
```

Two result strings are created based on the input string.

---

## 🛠 Technologies Used

- JavaScript

---

## ✅ Examples

```javascript
capitalize("abcdef");
// ["AbCdEf", "aBcDeF"]

capitalize("hello");
// ["HeLlO", "hElLo"]

capitalize("codewars");
// ["CoDeWaRs", "cOdEwArS"]
```