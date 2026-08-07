# Split by Mask

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given a string and a mask containing positive integers, split the string into parts according to the lengths specified in the mask.

The mask is valid only when the sum of all its lengths is equal to the length of the string.

If the mask is invalid, return `null`.

### Example 1

```javascript
split("1234567890", [3, 3, 4]);
// ["123", "456", "7890"]
```

### Example 2

```javascript
split("codewars", [4, 4]);
// ["code", "wars"]
```

### Invalid Mask

```javascript
split("1234567890", [3, 3]);
// null
```

---

## 💡 Approach

First, calculate the sum of all values in the mask using `reduce()`.

```javascript
const arrSum = mask.reduce((acc, length) => acc + length, 0);
```

If the sum does not match the string length, the mask is invalid, so the function returns `null`.

Otherwise, traverse the mask and use `slice()` to extract each required part from the string.

A `start` variable keeps track of the current position in the string.

For example:

```text
String:  1 2 3 4 5 6 7 8 9 0
Mask:    3 3 4

Part 1:  123
Part 2:  456
Part 3:  7890
```

---

## ⏱ Time Complexity

```text
O(n)
```

The mask is traversed once, and the required string portions are extracted.

---

## 💾 Space Complexity

```text
O(n)
```

The result array stores the split parts of the original string.

---

## 🛠 Technologies Used

- JavaScript

---

## ✅ Examples

```javascript
split("1234567890", [3, 3, 4]);
// ["123", "456", "7890"]

split("codewars", [4, 4]);
// ["code", "wars"]

split("abcdefgh", [2, 3, 3]);
// ["ab", "cde", "fgh"]

split("1234567890", [5, 5]);
// ["12345", "67890"]

split("1234567890", [3, 3]);
// null
```