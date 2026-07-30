# Count the Divisors of a Number

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given a positive integer `n`, return the total number of its positive divisors.

A divisor is a number that divides `n` without leaving a remainder.

---

## 💡 Approach

1. Iterate from `1` to the square root of `n`.
2. If `i` divides `n`, then both `i` and `n / i` are divisors.
3. If `n` is a perfect square, count the square root only once.
4. Return the total divisor count.

---

## ⏱ Time Complexity

```text
O(√n)
```

Only numbers up to the square root of `n` are checked.

---

## 💾 Space Complexity

```text
O(1)
```

Only a few extra variables are used.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
getDivisorsCnt(4);  // 3
getDivisorsCnt(12); // 6
getDivisorsCnt(30); // 8
```