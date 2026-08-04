# Find the Capitals

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Write a function that takes a non-empty string containing lowercase and uppercase ASCII letters and returns an ordered list containing the indices of all uppercase letters.

### Example

```text
"CodEWaRs" → [0, 3, 4, 6]
```

---

## 💡 Approach

1. Create an empty array to store the indices of uppercase letters.
2. Define a string containing all uppercase English alphabet characters.
3. Traverse the input string character by character.
4. Check whether the current character exists in the uppercase alphabet string.
5. If it does, add its index to the result array.
6. Return the result.

---

## ⏱ Time Complexity

```text
O(n)
```

The string is traversed once, where `n` is the length of the input string.

---

## 💾 Space Complexity

```text
O(k)
```

Where `k` is the number of uppercase letters found in the input string.

---

## 🛠 Technologies Used

- JavaScript

---

## ✅ Example

```javascript
capitals("CodEWaRs");
// [0, 3, 4, 6]

capitals("ABC");
// [0, 1, 2]

capitals("hello");
// []
```