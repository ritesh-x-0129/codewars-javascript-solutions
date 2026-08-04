# Simple Fun #176: Reverse Letter

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given a string containing lowercase Latin letters, digits, and symbols, reverse the string while removing all non-alphabetic characters.

### Example

```text
"krishan"    → "nahsirk"
"ultr53o?n"  → "nortlu"
```

---

## 💡 Approach

1. Convert the string into an array of characters using `split("")`.
2. Use `filter()` to keep only lowercase alphabetic characters.
3. Reverse the filtered array using `reverse()`.
4. Convert the array back into a string using `join("")`.

---

## ⏱ Time Complexity

```text
O(n)
```

The string is traversed by `filter()` and then processed by `reverse()` and `join()`.

---

## 💾 Space Complexity

```text
O(n)
```

Additional arrays are created while filtering and reversing the characters.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Examples

```javascript
reverseLetter("krishan");
// "nahsirk"

reverseLetter("ultr53o?n");
// "nortlu"
```