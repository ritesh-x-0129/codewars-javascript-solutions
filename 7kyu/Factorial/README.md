# Factorial

## 📌 Difficulty

**7kyu**

## 📝 Problem

Given a non-negative integer `n`, return its factorial (`n!`).

The factorial of a number is the product of all positive integers less than or equal to it.

Examples:

```text
5! = 5 × 4 × 3 × 2 × 1 = 120
0! = 1
```

If the input is less than `0` or greater than `12`, throw a `RangeError`.

---

## 💡 Approach

1. Check whether the input is within the valid range (`0–12`).
2. Throw a `RangeError` if the input is invalid.
3. Return `1` when `n` is `0`.
4. Use a loop to multiply all numbers from `1` to `n`.
5. Return the final factorial.

---

## ⏱ Time Complexity

```text
O(n)
```

The loop runs `n` times.

---

## 💾 Space Complexity

```text
O(1)
```

Only one extra variable (`result`) is used.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
factorial(5); // 120
factorial(0); // 1
```