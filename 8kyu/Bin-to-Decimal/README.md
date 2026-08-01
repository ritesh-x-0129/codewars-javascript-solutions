# Bin to Decimal

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given a binary number as a string, convert it into its decimal (base-10) equivalent.

---

## 💡 Approach

1. Initialize the decimal result to `0`.
2. Traverse each binary digit from left to right.
3. Multiply the current result by `2`.
4. If the current bit is `'1'`, add `1` to the result.
5. Return the final decimal value.

---

## ⏱ Time Complexity

```text
O(n)
```

Where `n` is the length of the binary string.

---

## 💾 Space Complexity

```text
O(1)
```

Only a constant amount of extra space is used.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
binToDec("1011");
// 11

binToDec("1000");
// 8
```